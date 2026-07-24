import { ComponentType } from "react";
import Image from "next/image";

export interface ClientLogoItem {
  name: string;
  src: string;
  alt: string;
  category?: string;
}

export const realClientLogos: ClientLogoItem[] = [
  {
    name: "Newbury UAE",
    src: "/client_logos/newbury.png",
    alt: "Newbury UAE Logo",
    category: "Luxury Retail & Web",
  },
  {
    name: "Clutec",
    src: "/client_logos/Clutec.png",
    alt: "Clutec Logo",
    category: "Enterprise Tech",
  },
  {
    name: "Herradura Villas",
    src: "/client_logos/Herradura Villas.png",
    alt: "Herradura Villas Logo",
    category: "Luxury Hospitality",
  },
  {
    name: "For Sale By Investors",
    src: "/client_logos/for sale by investors.png",
    alt: "For Sale By Investors Logo",
    category: "Real Estate Platform",
  },
  {
    name: "Lushly",
    src: "/client_logos/Lushly New.png",
    alt: "Lushly Logo",
    category: "Frozen Fruit Ice Lollies & FMCG",
  },
  {
    name: "Guzel",
    src: "/client_logos/Guzel.png",
    alt: "Guzel Logo",
    category: "Fashion & Lifestyle",
  },
];

export const BrandLogos: Record<string, ComponentType> = {
  "Newbury UAE": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/newbury.png"
        alt="Newbury UAE"
        fill
        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 opacity-75 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  "Clutec": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/Clutec.png"
        alt="Clutec"
        fill
        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 opacity-75 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  "Herradura Villas": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/Herradura Villas.png"
        alt="Herradura Villas"
        fill
        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 opacity-75 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  "For Sale By Investors": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/for sale by investors.png"
        alt="For Sale By Investors"
        fill
        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 opacity-75 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
  "Lushly": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/Lushly New.png"
        alt="Lushly"
        fill
        className="object-contain opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>
  ),
  "Guzel": () => (
    <div className="relative h-8 w-28 shrink-0 flex items-center justify-center">
      <Image
        src="/client_logos/Guzel.png"
        alt="Guzel"
        fill
        className="object-contain brightness-0 invert hover:brightness-100 hover:invert-0 opacity-75 hover:opacity-100 transition-all duration-300"
      />
    </div>
  ),
};
