import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Manzarkash Digital Agency — Full-Stack Growth for Pakistan",
  description:
    "Full-stack agency services from Manzarkash Digital Agency — creative ad design, paid ads, SEO, custom e-commerce, and WhatsApp automation. Retainers for brands in Pakistan.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Manzarkash Digital Agency",
    description:
      "Creative ad design, paid ads, SEO, custom e-commerce, and WhatsApp automation for Pakistan brands.",
    url: "https://manzarkash.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
