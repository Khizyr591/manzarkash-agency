import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Manzarkash — Studios in Karachi & Dubai",
  description:
    "Manzarkash is a premium digital agency with studios in Karachi and Dubai, delivering visual excellence, conversion copywriting, paid ads, SEO, and automated web solutions to brands across Pakistan and the UAE.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Manzarkash — Studios in Karachi & Dubai",
    description:
      "A premium digital agency serving Pakistan & UAE brands with visuals, engineering, paid growth, and automation.",
    url: "https://manzarkash.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
