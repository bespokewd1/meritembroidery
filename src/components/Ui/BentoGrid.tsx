import type { GalleryImage } from "@components/GalleryBentoReact";
import cn from "@utils/cn";

type BentoImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export function BentoGridItem({
  image,
  className,
  imgClass,
}: {
  image: GalleryImage;
  className?: string;
  imgClass?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white",
        className,
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={cn(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
          imgClass,
        )}
      />

      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-[101%] bg-linear-to-t from-black/90 via-black/70 to-transparent px-4 py-6 transition-transform duration-500 ease-out group-hover:translate-y-0 pointer-coarse:translate-y-0">
        <div className="bg-accent-primary mb-3 h-1 w-12" />

        <h3 className="font-acumin text-title mb-1 font-medium text-balance text-white uppercase drop-shadow-md">
          {image.title}
        </h3>

        <div
          className="pointer-events-none absolute inset-0 -z-10 h-[200%] w-full backdrop-blur-sm"
          style={{
            mask: "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
            WebkitMask:
              "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 h-full -translate-y-full bg-white/10"
          style={{
            mask: "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            WebkitMask:
              "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            backdropFilter: "blur(4px) brightness(120%)",
            marginTop: "1px",
          }}
        />
      </div>
    </div>
  );
}
