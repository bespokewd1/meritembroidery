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

  return nameOnly
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

export function getGalleryImagesByFolders(
  folders?: readonly GalleryFolder[],
): RawGalleryImage[] {
  return Object.entries(imageModules)
    .filter(([path]) => {
      if (!folders || folders.length === 0) return true;

      return folders.some((folder) => path.includes(`/portfolio/${folder}/`));
    })
    .sort(sortByPath)
    .map(([path, mod]) => ({
      path,
      folder: getFolderFromPath(path),
      image: mod.default,
      title: getCleanTitleFromPath(path),
    }));
}
