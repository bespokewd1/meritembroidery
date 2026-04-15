import type { ImageMetadata } from "astro";

export const galleryFolders = [
  "applique",
  "digital",
  "embroidery",
  "engraving",
  "new",
  "patches",
  "screenprint",
] as const;

export type GalleryFolder = (typeof galleryFolders)[number];

export type RawGalleryImage = {
  path: string;
  folder: string;
  image: ImageMetadata;
  title: string;
};

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/portfolio/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  {
    eager: true,
  },
);

const getFolderFromPath = (path: string) => {
  const afterGallery = path.split("/portfolio/")[1] ?? "";
  return afterGallery.split("/")[0] ?? "";
};

const getCleanTitleFromPath = (path: string) => {
  const filename = path.split("/").pop() ?? "";
  const lastDotIndex = filename.lastIndexOf(".");
  const nameOnly =
    lastDotIndex > -1 ? filename.substring(0, lastDotIndex) : filename;
  const displayName = nameOnly.replace(/[-_ ]+0*\d+$/, "");

  return displayName
    .replace(/[-_]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const sortByPath = (
  [pathA]: [string, { default: ImageMetadata }],
  [pathB]: [string, { default: ImageMetadata }],
) => {
  return pathA.localeCompare(pathB, undefined, {
    numeric: true,
    sensitivity: "base",
  });
};

const toRawGalleryImage = ([path, mod]: [
  string,
  { default: ImageMetadata },
]): RawGalleryImage => ({
  path,
  folder: getFolderFromPath(path),
  image: mod.default,
  title: getCleanTitleFromPath(path),
});

const getFolderOrder = (
  images: readonly RawGalleryImage[],
  folders?: readonly GalleryFolder[],
) => {
  if (folders && folders.length > 0) return folders;

  const discoveredFolders = new Set(images.map(({ folder }) => folder));
  return galleryFolders.filter((folder) => discoveredFolders.has(folder));
};

const interleaveByFolder = (
  images: readonly RawGalleryImage[],
  folderOrder: readonly string[],
) => {
  const buckets = new Map<string, RawGalleryImage[]>();

  images.forEach((image) => {
    const folderImages = buckets.get(image.folder) ?? [];
    folderImages.push(image);
    buckets.set(image.folder, folderImages);
  });

  const maxBucketLength = Math.max(
    0,
    ...Array.from(buckets.values()).map((bucket) => bucket.length),
  );

  const orderedImages: RawGalleryImage[] = [];

  for (let index = 0; index < maxBucketLength; index += 1) {
    folderOrder.forEach((folder) => {
      const image = buckets.get(folder)?.[index];
      if (image) orderedImages.push(image);
    });
  }

  return orderedImages;
};

export function getGalleryImagesByFolders(
  folders?: readonly GalleryFolder[],
): RawGalleryImage[] {
  const images = Object.entries(imageModules)
    .filter(([path]) => {
      if (!folders || folders.length === 0) return true;

      return folders.some((folder) => path.includes(`/portfolio/${folder}/`));
    })
    .sort(sortByPath)
    .map(toRawGalleryImage);

  return interleaveByFolder(images, getFolderOrder(images, folders));
}
