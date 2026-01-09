import cn from "@utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { navigate } from "astro:transitions/client";

import { useState } from "react";

export type ItemsTypes = {
  title: string;
  description: string;
  link: string;
  imgData: ImageMetadata;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: ItemsTypes[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent, link: string) => {
    if (link.startsWith("/services#")) {
      e.preventDefault();
      const [path, id] = link.split("#");
      navigate(link);

      requestAnimationFrame(() => {
        const id = link.substring(link.indexOf("#") + 1);
        const element = document.getElementById(id);
        if (element) {
          console.log("Scrolling to element with id:", id);
          element.scrollIntoView({ behavior: "smooth" });

          console.log("Updating URL hash to:", `#${id}`);
          const url = `${path}#${id}`;
          history.replaceState(null, "", url);
        }
      });
    }
  };
  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={`Link to ${item.title} service page`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="bg-accent-primary/30 absolute inset-0 block h-full w-full rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImg imgMetadata={item.imgData} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="flex-1">
              {item.description}
            </CardDescription>
            <span className="text-accent-primary inline-flex items-center gap-2 text-sm font-semibold">
              Learn More
              <svg
                className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-4 shadow-sm group-hover:border-slate-700",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="flex h-full flex-col justify-center">{children}</div>
      </div>
    </div>
  );
};

export const CardImg = ({
  className,
  imgMetadata,
  alt,
}: {
  className?: string;
  imgMetadata: ImageMetadata;
  alt: string;
}) => {
  return (
    <div className={cn("h-48 w-full overflow-hidden rounded-lg", className)}>
      <img
        src={imgMetadata.src}
        height={imgMetadata.height}
        width={imgMetadata.width}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500"
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "group-hover:text-accent-primary mt-4 text-xl font-bold tracking-wide text-black",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 pb-4 text-sm leading-relaxed tracking-wide text-black/90",
        className,
      )}
    >
      {children}
    </p>
  );
};
