import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom E-Commerce Engineering | Shopify & Next.js Storefronts — Manzarkash",
  description:
    "Custom-engineered Shopify Plus and Next.js storefronts for brands in Pakistan and the UAE. Sub-second load times, streamlined checkout, and headless architectures built for compounding SEO and conversion.",
  alternates: { canonical: "/services/ecommerce" },
  openGraph: {
    title: "Custom E-Commerce Engineering — Manzarkash",
    description:
      "Shopify Plus & Next.js storefronts engineered for Pakistan & UAE retail brands.",
    url: "https://manzarkash.com/services/ecommerce",
    type: "website",
  },
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
