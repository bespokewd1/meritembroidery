// src/components/GalleryBento.tsx
import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid";

// Importing specific images for the Bento Grid
// Note: You can change these imports to whichever images you want to feature
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

// Define the structure for our gallery items
interface GalleryItem {
  id: number;
  image: ImageMetadata | string; // Type for Vite imported images
  className: string;
  title?: string; // Optional: if you want hover text
  description?: string; // Optional
}

// Configuration Array
// We explicitly define the classNames here to avoid dynamic class issues in Tailwind
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: home1,
    className: "md:col-span-1", // Standard square
    title: "Precision Embroidery",
    description: "high quality thread work",
  },
  {
    id: 2,
    image: home2,
    className: "md:col-span-2",
    title: "Custom Patches",
    description: "Durable and colorful",
  },
  {
    id: 3,
    image: home3,
    className: "md:col-span-2",
  },
  {
    id: 4,
    image: home4,
    className: "md:col-span-2",
    title: "Bulk Production",
    description: "Handling large scale orders with ease",
  },
  {
    id: 5,
    image: home5,
    className: "md:col-span-2",
  },
  {
    id: 6,
    image: home6,
    className: "md:col-span-2",
  },
  {
    id: 7,
    image: home7,
    className: "md:col-span-2",
  },
  {
    id: 8,
    image: home8,
    className: "md:col-span-2",
  },
  {
    id: 9,
    image: home9,
    className: "md:col-span-2",
  },
  {
    id: 10,
    image: home10,
    className: "md:col-span-1",
  },
  {
    id: 11,
    image: home11,
    className: "md:col-span-2",
  },
  {
    id: 12,
    image: home12,
    className: "md:col-span-2",
  },
  {
    id: 13,
    image: home13,
    className: "md:col-span-2",
  },
];

export function GalleryBento() {
  return (
    <BentoGrid className="mx-auto max-w-7xl px-4 md:px-0">
      {galleryItems.map((item, i) => (
        <BentoGridItem
          key={item.id}
          image={item.image}
          // Pass the class explicitly defined in the object
          className={item.className}
          // Optional: Pass title/desc if you want the overlay
          title={item.title}
          description={item.description}
        />
      ))}
    </BentoGrid>
  );
}
