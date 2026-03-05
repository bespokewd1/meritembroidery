// src/components/Ui/BentoGrid.tsx
import cn from "@utils/cn";

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
        // Changed max-w-7xl to w-full to fit your container
        // md:auto-rows-[20rem] makes the images a bit taller/nicer
        "mx-auto grid w-full grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  alt = "Gallery image",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string | { src: string }; // Handle string path or imported Astro/Vite image object
  alt?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-0 transition duration-200 hover:shadow-xl dark:border-white/20 dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {/* If Image exists, render it as background */}
      {image ? (
        <div className="h-full w-full flex-1 overflow-hidden">
          <img
            src={typeof image === "string" ? image : image.src}
            alt={alt}
            className="h-full w-full object-cover object-center transition duration-500 group-hover/bento:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        // Fallback to original text-based card if no image provided
        <div className="flex h-full flex-col justify-between p-4">
          {header}
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            {icon}
            <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
