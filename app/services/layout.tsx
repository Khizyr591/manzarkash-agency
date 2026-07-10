import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Manzarkash — Full-Stack Growth for Pakistan & UAE",
  description:
    "Full-stack agency services from Manzarkash — studio product photography, paid ads, SEO, custom e-commerce, portfolio websites, and WhatsApp automation. Retainers for brands in Pakistan and the UAE.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Manzarkash",
    description:
      "Studio visuals, paid ads, SEO, custom e-commerce, and WhatsApp automation for Pakistan & UAE brands.",
    url: "https://manzarkash.com/services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
