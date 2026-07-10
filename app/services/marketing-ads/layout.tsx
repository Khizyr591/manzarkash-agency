import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Ads & Paid Marketing | Meta, Google, TikTok — Manzarkash",
  description:
    "Performance ads for Pakistan and UAE brands. Meta, Google, and TikTok campaigns engineered for measurable ROAS — creative production, pixel setup, funnel automation, and A/B optimization included.",
  alternates: { canonical: "/services/marketing-ads" },
  openGraph: {
    title: "Performance Ads & Paid Marketing — Manzarkash",
    description:
      "Meta, Google, and TikTok campaigns engineered for measurable ROAS in Pakistan & UAE.",
    url: "https://manzarkash.com/services/marketing-ads",
    type: "website",
  },
};

export default function MarketingAdsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
