import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid";

import gallery1 from "@assets/images/gallery/home/1.webp";
import gallery2 from "@assets/images/gallery/home/2.webp";
import gallery3 from "@assets/images/gallery/home/3.webp";
import gallery4 from "@assets/images/gallery/home/4.webp";
import gallery5 from "@assets/images/gallery/home/5.webp";
import gallery6 from "@assets/images/gallery/home/6.webp";
import gallery7 from "@assets/images/gallery/home/7.webp";
import gallery8 from "@assets/images/gallery/home/8.webp";
import gallery9 from "@assets/images/gallery/home/9.webp";
import gallery10 from "@assets/images/gallery/home/10.webp";
import gallery11 from "@assets/images/gallery/home/11.webp";
import gallery12 from "@assets/images/gallery/home/12.webp";
import gallery13 from "@assets/images/gallery/home/13.webp";
import gallery14 from "@assets/images/gallery/about/1.webp";
import gallery15 from "@assets/images/gallery/about/2.webp";
import gallery16 from "@assets/images/gallery/about/3.webp";
import gallery17 from "@assets/images/gallery/about/4.webp";
import gallery18 from "@assets/images/gallery/about/5.webp";
import gallery19 from "@assets/images/gallery/about/6.webp";
import gallery20 from "@assets/images/gallery/about/7.webp";
import gallery21 from "@assets/images/gallery/about/8.webp";
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

export function GalleryBento() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
