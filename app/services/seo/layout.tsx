import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Agency for Pakistan | Technical SEO & Organic Traffic Domination — Manzarkash Digital Agency",
  description:
    "Full-stack SEO services from Manzarkash Digital Agency. Technical audits, content strategy, local search ranking, and organic search pipelines in Pakistan that compound month over month.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Agency for Pakistan — Manzarkash Digital Agency",
    description:
      "Technical SEO, content strategy, and organic local search domination in Pakistan.",
    url: "https://manzarkash.com/services/seo",
    type: "website",
  },
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
