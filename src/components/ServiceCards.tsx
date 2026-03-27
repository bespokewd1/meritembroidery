import { HoverEffect, type ItemsTypes } from "./Ui/CardHoverEffect";

import embroidery from "@assets/images/services/embroidery/Main-Photo-02.jpg";
import screenPrint from "@assets/images/services/screen-print/Main-Photo-02.png";
import digitalPrint from "@assets/images/services/digital/Main-Photo-02.jpg";
import engraving from "@assets/images/services/engraving/Main-Photo-02.jpg";
import patches from "@assets/images/services/patches/Main-Photo---02.jpg";
import applique from "@assets/images/services/applique/Main-Photo-02.JPG";
import artwork from "@assets/images/services/artwork/Main-Photo-01.jpg";

import cn from "@utils/cn";

export const ServiceCards = ({ className }: { className?: string }) => {
  const serviceItems: ItemsTypes[] = [
    {
      title: "Embroidery",
      description:
        "Premium embroidery services for corporate apparel, workwear, and promotional products. Our multi-head machines deliver consistent, high-quality results.",
      link: "/services#embroidery",
      imgData: embroidery,
    },
    {
      title: "Screen Printing",
      description:
        "High-quality screen printing with vibrant colors and durable results. Perfect for large orders and promotional campaigns.",
      link: "/services#screen-printing",
      imgData: screenPrint,
    },
    {
      title: "Digital Printing",
      description:
        "Full-color digital printing solutions for complex designs and photo-realistic imagery. Multiple techniques for any application.",
      link: "/services#digital-printing",
      imgData: digitalPrint,
    },
    {
      title: "Laser Engraving",
      description:
        "Precision laser engraving creates intricate designs with stunning detail on faux leather, suede, and other materials.",
      link: "/services#laser-engraving",
      imgData: engraving,
    },
    {
      title: "Patches & Crests",
      description:
        "Professional design services to bring your vision to life. From concept to production-ready files, we handle it all.",
      link: "/services#patches",
      imgData: patches,
      className: "lg:col-start-2",
    },
    {
      title: "Custom Applique",
      description: ` Our state-of-the-art M&R automatic screen presses allow us to print up to 1,000 garments per hour, 
        combining efficiency with exceptional quality. `,
      link: "/services#applique",
      imgData: applique,
      // className: "lg:row-start-2 lg:col-start-4"
    },
    {
      title: "Artwork and Digitizing Services",
      description: ` 
        For precise, professional customization, our laser engraving services
        etch your designs, logos, or text onto a variety of materials, including
        wood, metal, acrylic, and leather. 
         `,
      link: "/services#artwork",
      imgData: artwork,
      // className:"lg:row-start-2 lg:col-start-6"
    },
  ];

  return (
    <section
      className={cn("@container relative bg-transparent p-0", className)}
    >
      <div className="pt-16">
        <div className="mx-auto max-w-225 xl:max-w-full">
          {/* <span className="cs-topper text-topper font-acumin text-center font-medium tracking-wider">
            Our Services
          </span> */}
          {/* text-[clamp(2.25rem,3dvw+1rem,4rem)]  */}
          {/* text-[clamp(2.25rem,3vw+1rem,2.75rem)]  */}
          <h2 className="cs-title font-acumin text-header text-body-light px-2 text-center font-medium text-balance">
            Premium Decoration
            <br className="lg:hidden" />
            &nbsp;Services for Your Brand
          </h2>
        </div>
        {/* max-w-7xl */}
        <div className="mx-auto">
          <HoverEffect
            className="px-[min(0.5rem,5vw)] pt-16 lg:grid-cols-8"
            items={serviceItems}
          />
        </div>
      </div>
    </section>
  );
};
