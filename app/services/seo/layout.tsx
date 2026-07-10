import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Agency for Pakistan & UAE | Technical SEO, Content, Local Search — Manzarkash",
  description:
    "Full-stack SEO services from Manzarkash. Technical audits, content strategy, local search domination in Karachi and Dubai, and long-tail organic pipelines that compound month over month.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: "SEO Agency for Pakistan & UAE — Manzarkash",
    description:
      "Technical SEO, content strategy, and local search domination in Karachi and Dubai.",
    url: "https://manzarkash.com/services/seo",
    type: "website",
  },
};

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
