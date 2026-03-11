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

import other1 from "@assets/images/gallery/others/2.jpg";
import other2 from "@assets/images/gallery/others/3.jpg";
import other3 from "@assets/images/gallery/others/4.jpg";
import other4 from "@assets/images/gallery/others/5.jpg";
import other5 from "@assets/images/gallery/others/7.jpg";
import other6 from "@assets/images/gallery/others/9.jpg";
import other7 from "@assets/images/gallery/others/11.jpg";
import other8 from "@assets/images/gallery/others/12.jpg";
import other9 from "@assets/images/gallery/others/15.jpg";
import other10 from "@assets/images/gallery/others/16.jpg";
import other11 from "@assets/images/gallery/others/17.jpg";
import other12 from "@assets/images/gallery/others/18.jpg";
import other13 from "@assets/images/gallery/others/20.jpg";

import embroidery1 from "@assets/images/gallery/embroidery/1.jpg";
import embroidery2 from "@assets/images/gallery/embroidery/2.JPG";
import embroidery3 from "@assets/images/gallery/embroidery/3.JPG";
import embroidery4 from "@assets/images/gallery/embroidery/4.JPG";

import screenPrint1 from "@assets/images/gallery/screen-print/1.JPG";
import screenPrint2 from "@assets/images/gallery/screen-print/2.JPG";
import screenPrint3 from "@assets/images/gallery/screen-print/3.JPG";
import screenPrint4 from "@assets/images/gallery/screen-print/4.JPG";
import screenPrint5 from "@assets/images/gallery/screen-print/5.JPG";
import screenPrint6 from "@assets/images/gallery/screen-print/6.JPG";
import screenPrint7 from "@assets/images/gallery/screen-print/7.JPG";
import screenPrint8 from "@assets/images/gallery/screen-print/8.JPG";
import screenPrint9 from "@assets/images/gallery/screen-print/9.JPG";

import digital1 from "@assets/images/gallery/digital/1.JPG";
import digital2 from "@assets/images/gallery/digital/2.JPG";
import digital3 from "@assets/images/gallery/digital/3.JPG";
import digital4 from "@assets/images/gallery/digital/4.JPG";
import digital5 from "@assets/images/gallery/digital/5.JPG";
import digital6 from "@assets/images/gallery/digital/6.JPG";
import digital7 from "@assets/images/gallery/digital/7.JPG";
import digital8 from "@assets/images/gallery/digital/8.JPG";
import digital9 from "@assets/images/gallery/digital/9.JPG";
import digital10 from "@assets/images/gallery/digital/10.JPG";
import digital11 from "@assets/images/gallery/digital/11.JPG";
import digital12 from "@assets/images/gallery/digital/12.JPG";
import digital13 from "@assets/images/gallery/digital/13.JPG";
import digital14 from "@assets/images/gallery/digital/14.jpg";
import digital15 from "@assets/images/gallery/digital/15.jpg";
import digital16 from "@assets/images/gallery/digital/16.jpg";


import engraving1 from "@assets/images/gallery/digital/1.JPG";
import engraving2 from "@assets/images/gallery/digital/2.JPG";
import engraving3 from "@assets/images/gallery/digital/3.JPG";
import engraving4 from "@assets/images/gallery/digital/4.JPG";
import engraving5 from "@assets/images/gallery/digital/5.JPG";
import engraving6 from "@assets/images/gallery/digital/6.JPG";
import engraving7 from "@assets/images/gallery/digital/7.JPG";

import mix1 from "@assets/images/gallery/mix/1.JPG";
import mix2 from "@assets/images/gallery/mix/2.JPG";
import mix3 from "@assets/images/gallery/mix/3.JPG";
import mix4 from "@assets/images/gallery/mix/4.JPG";
import mix5 from "@assets/images/gallery/mix/5.JPG";
import mix6 from "@assets/images/gallery/mix/6.JPG";

import applique1 from  "@assets/images/gallery/applique/1.JPG";
import applique2 from  "@assets/images/gallery/applique/2.JPG";
import applique3 from  "@assets/images/gallery/applique/3.JPG";
import applique4 from  "@assets/images/gallery/applique/4.JPG";
import applique5 from  "@assets/images/gallery/applique/5.JPG";
import applique6 from  "@assets/images/gallery/applique/6.JPG";
import applique7 from  "@assets/images/gallery/applique/7.JPG";
import applique8 from  "@assets/images/gallery/applique/8.JPG";
import applique9 from  "@assets/images/gallery/applique/9.JPG";
import applique10 from  "@assets/images/gallery/applique/10.JPG";
import applique11 from  "@assets/images/gallery/applique/11.JPG";
import applique12 from  "@assets/images/gallery/applique/12.JPG";
import applique13 from  "@assets/images/gallery/applique/13.JPG";
import applique14 from  "@assets/images/gallery/applique/14.JPG";
import applique15 from  "@assets/images/gallery/applique/15.JPG";
import applique16 from  "@assets/images/gallery/applique/16.JPG";
import applique17 from  "@assets/images/gallery/applique/17.JPG";


import patches1 from  "@assets/images/gallery/patches/1.jpg";
import patches2 from  "@assets/images/gallery/patches/2.JPG";
import patches3 from  "@assets/images/gallery/patches/3.JPG";
import patches4 from  "@assets/images/gallery/patches/4.JPG";
import patches5 from  "@assets/images/gallery/patches/5.JPG";
import patches6 from  "@assets/images/gallery/patches/6.JPG";
import patches7 from  "@assets/images/gallery/patches/7.JPG";
import patches8 from  "@assets/images/gallery/patches/8.JPG";
import patches9 from  "@assets/images/gallery/patches/9.JPG";
import patches10 from  "@assets/images/gallery/patches/10.JPG";
import patches11 from  "@assets/images/gallery/patches/11.JPG";
import patches12 from  "@assets/images/gallery/patches/12.JPG";
import patches13 from  "@assets/images/gallery/patches/13.JPG";
import patches14 from  "@assets/images/gallery/patches/14.JPG";
import patches15 from  "@assets/images/gallery/patches/15.JPG";
import patches16 from  "@assets/images/gallery/patches/16.jpg";
import patches17 from  "@assets/images/gallery/patches/17.jpg";


const rawImagesBak = [
  home1,
  home2,
  home3,
  // other1,
  home4,
  home5,
  home6,
  // other2,
  merit9,
  merit10,
  merit11,
  // other3,
  merit12,
  merit13,
  merit14,
  merit15,
  // other4,
  home7,
  home8,
  home9,
  // other5,
  home10,
  home11,
  home12,
  home13,
  // other6,
  merit16,
  merit17,
  merit18,
  // other7,
  merit19,
  merit20,
  merit21,
  merit22,
  merit23,
  // other8,
  about1,
  about2,
  about3,
  // other9,
  merit5,
  merit6,
  merit7,
  merit8,
  // other10,
  about4,
  about5,
  about6,
  about7,
  about8,
  // other11,
  merit1,
  merit2,
  merit3,
  merit4,
  // other12,
  // other13,
  embroidery1,
  embroidery2,
  embroidery3,
  embroidery4,
  screenPrint1,
  screenPrint2,
  screenPrint3,
  screenPrint4,
  screenPrint5,
  screenPrint6,
  screenPrint7,
  screenPrint8,
  screenPrint9,
];

const rawImages:ImageMetadata[] = [
  embroidery1,
  embroidery2,
  embroidery3,
  embroidery4,
  screenPrint1,
  screenPrint2,
  screenPrint3,
  screenPrint4,
  screenPrint5,
  screenPrint6,
  screenPrint7,
  screenPrint8,
  screenPrint9,
  digital1,
  digital2,
  digital3,
  digital4,
  digital5,
  digital6,
  digital7,
  digital8,
  digital9,
  digital10,
  digital11,
  digital12,
  digital13,
  digital14,
  digital15,
  digital16,
  engraving1,
  engraving2,
  engraving3,
  engraving4,
  engraving5,
  engraving6,
  engraving7,
  mix1,
  mix2,
  mix3,
  mix4,
  mix5,
  mix6,
  applique1,
  applique2,
  applique3,
  applique4,
  applique5,
  applique6,
  applique7,
  applique8,
  applique9,
  applique10,
  applique11,
  applique12,
  applique13,
  applique14,
  applique15,
  applique16,
  applique17,
  patches1,
  patches2,
  patches3,
  patches4,
  patches5,
  patches6,
  patches7,
  patches8,
  patches9,
  patches10,
  patches11,
  patches12,
  patches13,
  patches14,
  patches15,
  patches16,
  patches17,

  home1,
  home2,
  // home3,
  // home4,
  // home5,
  // home6,
  // home7,
  // home8,
  // home9,
  // home10,
  // home11,
  // home12,
  // home13,
  about1,
  // about2,
  // about3,
  // about4,
  // about5,
  // about6,
  // about7,
  // about8,
];

export function GalleryBento() {
  return (
    <section className="">
      <div
        className={cn([
          "corner-squircle mx-auto max-w-7xl bg-white py-18 xl:px-18",
          "rounded-t-[75px] rounded-b-none lg:rounded-t-[100px]",
          "supports-[corner-shape:squircle]:rounded-t-[150px] supports-[corner-shape:squircle]:rounded-b-none lg:supports-[corner-shape:squircle]:rounded-t-[200px]",
        ])}
      >
        <BentoGrid className={cn(["mx-auto px-4 md:px-6 xl:px-0"])}>
          {rawImages.map((img, i) => {
            // Calculate the aspect ratio (Width divided by Height)
            const ratio = img.width / img.height;

            // THRESHOLD LOGIC:
            // 1.0 = Perfect Square
            // 1.25 = Width must be 25% larger than height to be considered "Wide"
            // You can tweak this number:
            // - Lower (1.1) makes it easier to trigger a wide span
            // - Higher (1.4) makes it harder (only very wide images will span)
            // const isSignificantlyWide = ratio > 1.6;

            // const spanClass = isSignificantlyWide
            //   ? "md:col-span-2"
            //   : "md:col-span-1";

            let spanClass = "md:col-span-1"; // Default square
            let imgClass = "object-cover";

            if (ratio > 1.6) {
              // Wide: Landscape
              spanClass = "md:col-span-2";
              imgClass = "";
              // } else if (ratio < 0.8) {
            } else if (ratio < 0.9) {
              // Tall: Portrait
              spanClass = "md:row-span-2";
              imgClass = "";
            }

            return (
              <BentoGridItem
                key={i}
                image={img}
                className={spanClass}
                imgClass={imgClass}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
