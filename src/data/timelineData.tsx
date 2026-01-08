// src/data/timelineData.tsx
import React from "react";
// Import the image object (Astro will handle the path)
import timeline1 from "../assets/images/merit-images/merit-0256.jpg";

export const timelineData = [
  {
    title: "1992",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">1992</span>
        <p className="text-muted-foreground mt-2">
          Merit Embroidery & Printing established in Edmonton, Alberta
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Company founding"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2000",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">2000</span>
        <p className="text-muted-foreground mt-2">
          Moved to larger 5,000 sq. ft. production facility
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Facility expansion"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2010",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">2010</span>
        <p className="text-muted-foreground mt-2">
          Invested in state-of-the-art multi-head embroidery machines
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Technology upgrade"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">2015</span>
        <p className="text-muted-foreground mt-2">
          Expanded services with precision laser technology
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Added laser engraving"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">2020</span>
        <p className="text-muted-foreground mt-2">
          Relocated to 11,000 sq. ft. modern production center
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Current facility"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Today",
    content: (
      <div className="bg-secondary rounded-xl p-6">
        <span className="text-accent font-bold text-lg">Today</span>
        <p className="text-muted-foreground mt-2">
          One of the largest decorators in Western Canada
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <img
            src={timeline1.src}
            alt="Industry leader"
            width={1200}
            height={800}
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    ),
  },
];
