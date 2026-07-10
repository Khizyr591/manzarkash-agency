import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Product Photography & Visual Production | Manzarkash",
  description:
    "Cinema-lit product photography and lifestyle visual production out of our Karachi studio. Catalog captures, motion clips, and editorial imagery for premium retail brands across Pakistan and the UAE.",
  alternates: { canonical: "/services/product-visuals" },
  openGraph: {
    title: "Studio Product Photography & Visual Production — Manzarkash",
    description:
      "Cinema-lit catalog, motion, and editorial imagery for Pakistan & UAE retail brands.",
    url: "https://manzarkash.com/services/product-visuals",
    type: "website",
  },
};

export default function ProductVisualsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
