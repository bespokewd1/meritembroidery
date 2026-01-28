import { HoverEffect, type ItemsTypes } from "./Ui/CardHoverEffect";

import service1 from "@assets/images/merit-images/merit-0261.jpg";
import service2 from "@assets/images/merit-images/merit-0256.jpg";
import service3 from "@assets/images/merit-images/merit-0283.jpg";
import service4 from "@assets/images/gallery/3.jpg";
import service5 from "@assets/images/merit-images/merit-0321.jpg";
import cn from "@utils/cn";

export const ServiceCards = ({ className }: { className?: string }) => {
  const serviceItems: ItemsTypes[] = [
    {
      title: "Custom Logo Embroidery & Embroidered Patches",
      description:
        "Premium embroidery services for corporate apparel, workwear, and promotional products. Our multi-head machines deliver consistent, high-quality results.",
      link: "/services#embroidery",
      imgData: service1,
    },
    {
      title: "Screen Printing",
      description:
        "High-quality screen printing with vibrant colors and durable results. Perfect for large orders and promotional campaigns.",
      link: "/services#screenPrinting",
      imgData: service2,
    },
    {
      title: "Digital Printing & Digital Patches",
      description:
        "Full-color digital printing solutions for complex designs and photo-realistic imagery. Multiple techniques for any application.",
      link: "/services#digitalPrinting",
      imgData: service3,
    },
    {
      title: "Art & Design Services",
      description:
        "Professional design services to bring your vision to life. From concept to production-ready files, we handle it all.",
      link: "/services#artworkServices",
      imgData: service4,
    },
    {
      title: "Laser Engraving",
      description:
        "Precision laser engraving creates intricate designs with stunning detail on faux leather, suede, and other materials.",
      link: "/services#laserEngraving",
      imgData: service5,
    },
  ];

  return (
    <section className={cn("relative bg-transparent p-0", className)}>
      <div className="pt-16 pb-24">
        <div className="">
          <span className="cs-topper text-topper text-center font-semibold tracking-wider">
            Our Services
          </span>
          <h2 className="cs-title text-body-light text-center text-6xl font-semibold">
            Premium Decoration Services for Your Brand
          </h2>
        </div>
        {/* max-w-7xl */}
        <div className="mx-auto">
          <HoverEffect
            className="px-[min(2rem,95%)] pt-16"
            items={serviceItems}
          />
        </div>
      </div>
    </section>
  );
};
