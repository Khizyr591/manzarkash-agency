import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Ad Design & Asset Production | Manzarkash Digital Agency",
  description:
    "High-converting social ad creatives, direct-response banners, display graphics, and asset styling for retail brands in Pakistan.",
  alternates: { canonical: "/services/product-visuals" },
  openGraph: {
    title: "Creative Ad Design & Asset Production — Manzarkash Digital Agency",
    description:
      "High-converting visual assets and ad creative layouts for retail brands in Pakistan.",
    url: "https://manzarkash.com/services/product-visuals",
    type: "website",
  },
};

export default function ProductVisualsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
