import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid";
import cn from "@utils/cn";

import home1 from "@assets/images/gallery/home/1.webp";
import home2 from "@assets/images/gallery/home/2.webp";
import home3 from "@assets/images/gallery/home/3.webp";
import home4 from "@assets/images/gallery/home/4.webp";
import home5 from "@assets/images/gallery/home/5.webp";
import home6 from "@assets/images/gallery/home/6.webp";
import home7 from "@assets/images/gallery/home/7.webp";
import home8 from "@assets/images/gallery/home/8.webp";
import home9 from "@assets/images/gallery/home/9.webp";
import home10 from "@assets/images/gallery/home/10.webp";
import home11 from "@assets/images/gallery/home/11.webp";
import home12 from "@assets/images/gallery/home/12.webp";
import home13 from "@assets/images/gallery/home/13.webp";
import about1 from "@assets/images/gallery/about/1.webp";
import about2 from "@assets/images/gallery/about/2.webp";
import about3 from "@assets/images/gallery/about/3.webp";
import about4 from "@assets/images/gallery/about/4.webp";
import about5 from "@assets/images/gallery/about/5.webp";
import about6 from "@assets/images/gallery/about/6.webp";
import about7 from "@assets/images/gallery/about/7.webp";
import about8 from "@assets/images/gallery/about/8.webp";
import merit1 from "@assets/images/merit-images/merit-0256.jpg";
import merit2 from "@assets/images/merit-images/merit-0261.jpg";
import merit3 from "@assets/images/merit-images/merit-0278.jpg";
import merit4 from "@assets/images/merit-images/merit-0281.jpg";
import merit5 from "@assets/images/merit-images/merit-0283.jpg";
import merit6 from "@assets/images/merit-images/merit-0289.jpg";
import merit7 from "@assets/images/merit-images/merit-0290.jpg";
import merit8 from "@assets/images/merit-images/merit-0295.jpg";
import merit9 from "@assets/images/merit-images/merit-0296.jpg";
import merit10 from "@assets/images/merit-images/merit-0297.jpg";
import merit11 from "@assets/images/merit-images/merit-0298.jpg";
import merit12 from "@assets/images/merit-images/merit-0299.jpg";
import merit13 from "@assets/images/merit-images/merit-0300.jpg";
import merit14 from "@assets/images/merit-images/merit-0301.jpg";
import merit15 from "@assets/images/merit-images/merit-0302.jpg";
import merit16 from "@assets/images/merit-images/merit-0309.jpg";
import merit17 from "@assets/images/merit-images/merit-0312.jpg";
import merit18 from "@assets/images/merit-images/merit-0313.jpg";
import merit19 from "@assets/images/merit-images/merit-0314.jpg";
import merit20 from "@assets/images/merit-images/merit-0317.jpg";
import merit21 from "@assets/images/merit-images/merit-0318.jpg";
import merit22 from "@assets/images/merit-images/merit-0319.jpg";
import merit23 from "@assets/images/merit-images/merit-0321.jpg";

const rawImages = [
  home1,
  home2,
  home3,
  home4,
  home5,
  home6,
  merit9,
  merit10,
  merit11,
  merit12,
  merit13,
  merit14,
  merit15,
  home7,
  home8,
  home9,
  home10,
  home11,
  home12,
  home13,
  merit16,
  merit17,
  merit18,
  merit19,
  merit20,
  merit21,
  merit22,
  merit23,
  about1,
  about2,
  about3,
  merit5,
  merit6,
  merit7,
  merit8,
  about4,
  about5,
  about6,
  about7,
  about8,
  merit1,
  merit2,
  merit3,
  merit4,
];

export function GalleryBento() {
  return (
    <section className="">
      <div className="corner-squircle max-w-8xl mx-auto rounded-t-[150px] rounded-b-none bg-white py-18 supports-[corner-shape:squircle]:rounded-t-[300px] supports-[corner-shape:squircle]:rounded-b-none">
        <BentoGrid className={cn(["mx-auto max-w-7xl px-4 md:px-0"])}>
          {rawImages.map((img, i) => {
            // Calculate the aspect ratio (Width divided by Height)
            const ratio = img.width / img.height;

            // THRESHOLD LOGIC:
            // 1.0 = Perfect Square
            // 1.25 = Width must be 25% larger than height to be considered "Wide"
            // You can tweak this number:
            // - Lower (1.1) makes it easier to trigger a wide span
            // - Higher (1.4) makes it harder (only very wide images will span)
            const isSignificantlyWide = ratio > 1.6;

            const spanClass = isSignificantlyWide
              ? "md:col-span-2"
              : "md:col-span-1";

            return <BentoGridItem key={i} image={img} className={spanClass} />;
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
