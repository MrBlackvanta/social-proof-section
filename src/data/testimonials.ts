import type { StaticImageData } from "next/image";

import imageAaron from "@/assets/image-aaron.webp";
import imageColton from "@/assets/image-colton.webp";
import imageIvan from "@/assets/image-ivan.webp";

export type Testimonial = {
  id: string;
  name: string;
  avatar: StaticImageData;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "colton-smith",
    name: "Colton Smith",
    avatar: imageColton,
    quote:
      "“We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!”",
  },
  {
    id: "ivan-roberts",
    name: "Ivan Roberts",
    avatar: imageIvan,
    quote:
      "“Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.”",
  },
  {
    id: "aaron-wallace",
    name: "Aaron Wallace",
    avatar: imageAaron,
    quote:
      "“Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!”",
  },
];
