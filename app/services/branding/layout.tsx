import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Design | Identity Systems & Guidelines — Manzarkash",
  description:
    "Full brand identity systems from Manzarkash — logo, typography, color, guidelines, and visual assets shipped for Pakistan and UAE retail brands.",
  alternates: { canonical: "/services/branding" },
  openGraph: {
    title: "Branding Design — Manzarkash",
    description:
      "Brand identity systems and guidelines for Pakistan & UAE retail brands.",
    url: "https://manzarkash.com/services/branding",
    type: "website",
  },
};

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
