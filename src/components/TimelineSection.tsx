import React, { useId, useState } from "react";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import { Timeline } from "./Ui/Timeline";

// import timeline1 from "@assets/images/merit-images/merit-0256.jpg";

import timeline1 from "@assets/images/merit-dark-gold.png";
import timeline2 from "@assets/images/CTA/background-img.jpg";
import timeline3 from "@assets/images/merit-images/merit-0256.jpg";
import timeline4 from "@assets/images/merit-images/merit-0314.jpg";
import timeline5 from "@assets/images/services/s-1.png";
import timeline6 from "@assets/images/services/s-6.png";
import cn from "@utils/cn";

type TimelineItem = {
  year: string;
  heading: string;
  summary: string;
  details: string[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

function TimelineCard({ item }: { item: TimelineItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = useId();

  return (
    <article
      className={cn(
        "group relative h-[32rem] overflow-hidden rounded-lg bg-black shadow-sm md:h-[38rem]",
      )}
    >
      {item.image ? (
        <img
          src={item.image.src}
          height={item.image.height ?? 800}
          width={item.image.width ?? 1200}
          alt={item.image.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : null}

      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/95 via-black/80 to-transparent px-4 pt-16 pb-6 transition-opacity duration-300",
          isOpen && "pointer-events-none opacity-0",
        )}
      >
        <div className="bg-accent mb-4 h-1 w-12" />

        <h3 className="font-acumin text-title mb-3 font-medium text-white uppercase">
          {item.heading}
        </h3>
        <p className="font-acumin text-body mb-5 font-medium text-white/90">
          {item.summary}
        </p>

        <button
          type="button"
          aria-controls={detailId}
          aria-expanded={isOpen}
          aria-label={`Read more about ${item.year}`}
          tabIndex={isOpen ? -1 : 0}
          onClick={() => setIsOpen(true)}
          className="font-acumin inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-black focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
        >
          Read more
          <IconArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div
        id={detailId}
        aria-hidden={!isOpen}
        className={cn(
          "absolute inset-0 z-20 flex translate-y-full flex-col bg-white p-5 text-body-dark transition-transform duration-500 ease-out motion-reduce:transition-none sm:p-6",
          isOpen
            ? "pointer-events-auto translate-y-0"
            : "pointer-events-none translate-y-full",
        )}
      >
        <div
          className={cn(
            "mb-5 flex items-start justify-between gap-4 border-b border-black/10 pb-4",
          )}
        >
          <div>
            <p className="font-acumin text-accent-primary mb-2 text-sm font-semibold uppercase">
              {item.year}
            </p>
            <h3 className="font-acumin text-title font-medium text-black uppercase">
              {item.heading}
            </h3>
          </div>

          <button
            type="button"
            aria-controls={detailId}
            aria-expanded={isOpen}
            aria-label={`Close details for ${item.year}`}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="text-body-dark inline-flex shrink-0 items-center gap-2 rounded-lg border border-black/20 bg-white px-3 py-2 font-acumin text-sm font-medium transition-colors duration-200 hover:border-black hover:bg-black hover:text-white focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Close
            <IconX aria-hidden="true" className="size-4" />
          </button>
        </div>

        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
          {item.details.map((paragraph, index) => (
            <p
              key={`${item.year}-detail-${index}`}
              className="font-acumin text-body leading-relaxed text-black/85"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TimelineSection() {
  const items: TimelineItem[] = [
    {
      year: "Mid 1990s",
      heading: "Family-Owned Beginning",
      summary:
        "Merit Embroidery began in Edmonton as an independent garment finishing business.",
      details: [
        "Merit Embroidery was established in the mid 1990's in Edmonton, Alberta. It began as a family-owned and operated independent garment finishing business.",
        "From its inception, the company focused on serving both the local Alberta market and the broader North American wholesale embroidery industry.",
      ],
      image: {
        src: timeline1.src,
        alt: "Family-owned beginning",
        width: 1200,
        height: 800,
      },
    },
    {
      year: "2008",
      heading: "New Ownership",
      summary:
        "Gurcharn and Sharan Bhui took ownership with a plan to grow service for Edmonton and nearby markets.",
      details: [
        "Gurcharn and Sharan Bhui took over ownership in February 2008 with a vision to expand and grow to serve the promotional products industry in Edmonton and surrounding areas.",
        "With a team of 4 skilled embroidery machine operators in a 1,400-square-foot shop, they upgraded the equipment to add a sizeable fleet of Barudan brand Japanese industrial embroidery machines.",
      ],
      image: {
        src: timeline2.src,
        alt: "New ownership",
      },
    },
    {
      year: "2010",
      heading: "Larger Production Shop",
      summary:
        "Merit moved to a 4,500-square-foot facility on 76 Avenue and added CAD cut heat press service.",
      details: [
        "In 2010, Merit moved to a 4,500-square-foot facility on 76 Avenue to accommodate the needs of a growing customer base in the local Edmonton market.",
        "The team also started offering CAD cut heat press service.",
      ],
      image: {
        src: timeline3.src,
        alt: "Larger production shop",
      },
    },
    {
      year: "2015",
      heading: "Full-Service Decoration",
      summary:
        "Merit expanded into screen printing, large format, sublimation, laser engraving, and digital garment printing.",
      details: [
        "The most exciting growth period for Merit started in 2015 when the company evolved into a full service wholesale decorator by incorporating screen printing, large format and sublimation printing as well as laser engraving.",
        "In this period, Merit added a Mimaki large format printer/plotter, an M&R Diamondback automatic screen printing press, and GCC CO2 laser engravers.",
        "As printing technology advanced, the team integrated digital garment printing to offer high-definition, photorealistic designs that traditional screen printing could not achieve. Merit also started offering faux suede and faux leather custom crests and applique to offer an upscale and flexible decorating technique.",
      ],
      image: {
        src: timeline4.src,
        alt: "Full-service decoration",
      },
    },
    {
      year: "2016-2021",
      heading: "Western Canada Growth",
      summary:
        "Merit scaled embroidery, applique, patches, screen printing output, and mixed-media decoration techniques.",
      details: [
        "In the five years that followed, Merit established itself as one of the largest decorators in the Western Canada market.",
        "The company offered flat and 3D puff embroidery and FR thread embroidery as well as all types of applique and patches.",
        "Merit doubled screen printing output by offering puff and HD screen print as well as clear and tinted gel and air dry inks. Offering more than one decorating service also allowed the team to create and customize mixed-media techniques where applique and screen printing or leather applique and embroidery are combined.",
      ],
      image: {
        src: timeline5.src,
        alt: "Western Canada growth",
      },
    },
    {
      year: "2022",
      heading: "Shop Expansion",
      summary:
        "Merit added a new automatic screen printing press and 5,500 square feet to the shop.",
      details: [
        "In February 2022, Merit expanded by adding another brand new automatic screen printing press and 5,500 square feet to the existing shop.",
        "This expansion allowed the company to further grow the team and customer base.",
      ],
      image: {
        src: timeline6.src,
        alt: "Shop expansion",
      },
    },
    {
      year: "2023",
      heading: "Digital and Laser Upgrades",
      summary:
        "A Mimaki DTF printer and X-Tool fibre laser expanded digital printing and laser capability.",
      details: [
        "In 2023, Merit bought a Mimaki DTF printer to enhance digital printing capabilities and an X-Tool fibre laser to keep up with the ever-changing industry.",
        "Investing in equipment and training for the team has allowed Merit to stay a step ahead of trends and remain innovative.",
      ],
      image: {
        src: timeline5.src,
        alt: "Digital and laser upgrades",
      },
    },
    {
      year: "Current",
      heading: "Innovation and Training",
      summary:
        "Merit keeps investing in equipment, training, quality, and custom production techniques.",
      details: [
        "Merit's graphics and production teams collaborate and think outside the box, taking the customer's artwork to new heights by offering one-of-a-kind imprints to customize their promotional wear.",
        "Investing in state-of-the-art machinery and upgrading technical skills through team training, while focusing on quality, attention to detail, and consistently meeting deadlines allows Merit to experiment and offer unique methods and techniques for customizing promotional items.",
      ],
      image: {
        src: timeline6.src,
        alt: "Innovation and training",
      },
    },
  ];

  // convert simple items -> Timeline's expected shape
  const data = items.map((item) => ({
    title: item.year, // Timeline left-side label
    content: <TimelineCard item={item} />,
  }));

  return <Timeline class="pb-25" data={data} />;
}
