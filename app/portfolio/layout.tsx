import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Manzarkash — Selected Work from Pakistan & the UAE",
  description:
    "Selected work from Manzarkash. Custom e-commerce builds, studio product photography, paid ads campaigns, SEO growth, and WhatsApp automation deployed for brands in Pakistan and the UAE.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio | Manzarkash",
    description:
      "Selected work — e-commerce, visuals, paid ads, SEO, and automation for Pakistan & UAE brands.",
    url: "https://manzarkash.com/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
