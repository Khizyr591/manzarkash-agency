import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Packaging Design | Identity Systems + Pack Design — Manzarkash",
  description:
    "Full brand identity systems and print-ready packaging design from Manzarkash — logo, typography, color, guidelines, and dielines shipped for Pakistan and UAE retail brands.",
  alternates: { canonical: "/services/branding-packaging" },
  openGraph: {
    title: "Branding & Packaging Design — Manzarkash",
    description:
      "Brand identity systems and print-ready packaging design for Pakistan & UAE retail brands.",
    url: "https://manzarkash.com/services/branding-packaging",
    type: "website",
  },
};

export default function BrandingPackagingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
