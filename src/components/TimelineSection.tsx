import React from "react";
import { Timeline } from "./Ui/Timeline";

import timeline1 from "@assets/images/merit-images/merit-0256.jpg";
import cn from "@utils/cn";

type TimelineItem = {
  year: string;
  heading: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

function TimelineCard({
  item,
}: {
  item: TimelineItem;
}) {
  return (

    // <div className="bg-secondary rounded-xl p-6">
    //   {/* <span className="text-accent font-bold text-lg">{item.year}</span> */}

    //   <h3 className="text-xl font-bold text-foreground mt-2">
    //     {item.heading}
    //   </h3>

    //   <p className="text-muted-foreground mt-2">{item.description}</p>

    //   {item.image ? (
    //     <div className="mt-4 overflow-hidden rounded-lg">
    //       <img
    //         src={item.image.src}
    //         alt={item.image.alt}
    //         width={item.image.width ?? 1200}
    //         height={item.image.height ?? 800}
    //         className="w-full h-48 object-cover"
    //         loading="lazy"
    //       />
    //     </div>
    //   ) : null}
    // </div>
  <div
      className={cn("group relative pointer-coarse:pb-24 overflow-hidden")}
    >

       {item.image ? (
         <div className="mt-4 overflow-hidden rounded-lg">
      <img
        src={item.image.src}
        height={item.image.height ?? 1200}
        width={item.image.width ?? 800}
        alt={item.image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
         </div>
       ) : null}

      {/* Overlay that slides up on hover */}
{/* translate-y-[calc(100%-5rem)] */}
      <div className="absolute translate-y-0  pointer-coarse:translate-y-0 group-hover:translate-y-0 transition-transform ease-out duration-500 inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/70 to-transparent px-4 py-6"
      >
        {/* Orange accent line */}
        <div className="w-12 h-1 bg-accent mb-4" />

        <h3 className="text-white font-bold text-lg uppercase mb-4">
          {item.heading}
        </h3>
        <p className="text-white/90 font-semibold mb-4">
          {item.description}</p>

        <div
          className="pointer-events-none absolute inset-0 -z-1 h-[200%] w-full backdrop-blur-sm"
          style={{
            mask: "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
            WebkitMask:
              "linear-gradient(to bottom, rgba(255, 255, 255) 0% 50%, transparent 50% 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 h-full -translate-y-full bg-fore-light/10"
          style={{
            mask: "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            WebkitMask: "linear-gradient(to top, black 0, black 6px, transparent 6px)",
            backdropFilter: "blur(4px) brightness(120%)",
            marginTop: "1px"
          }}
        />
      </div>
    </div>
  );
}

export function TimelineSection() {
  const items: TimelineItem[] = [
    {
      year: "1992",
      heading: "Company Founded",
      description:
        "Merit Embroidery & Printing established in Edmonton, Alberta",
      image: {
        src: timeline1.src,
        alt: "Company founded",
        width: 1200,
        height: 800,
      },
    },
    {
      year: "2000",
      heading: "Facility Expansion",
      description: "Moved to larger 5,000 sq. ft. production facility",
      image: {
        src: timeline1.src,
        alt: "Facility expansion",
      },
    },
    {
      year: "2010",
      heading: "Technology Upgrade",
      description:
        "Invested in state-of-the-art multi-head embroidery machines",
      image: {
        src: timeline1.src,
        alt: "Technology upgrade",
      },
    },
    {
      year: "2015",
      heading: "Added Laser Engraving",
      description:
        "Expanded services with precision laser technology",
      image: {
        src: timeline1.src,
        alt: "Laser engraving",
      },
    },
    {
      year: "2020",
      heading: "Current Facility",
      description:
        "Relocated to 11,000 sq. ft. modern production center",
      image: {
        src: timeline1.src,
        alt: "Current facility",
      },
    },
    {
      year: "Today",
      heading: "Industry Leader",
      description: "One of the largest decorators in Western Canada",
      image: {
        src: timeline1.src,
        alt: "Industry leader",
      },
    },
  ];

  // convert simple items -> Timeline's expected shape
  const data = items.map((item) => ({
    title: item.year, // Timeline left-side label
    content: <TimelineCard item={item} />,
  }));

  return <Timeline data={data} />;
}
