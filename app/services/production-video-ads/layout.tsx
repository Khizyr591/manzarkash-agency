import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Production & Ad Creatives Agency Pakistan — Manzarkash Digital Agency",
  description:
    "Direct-response video production and performance ad creatives. Scriptwriting, hook editing, motion graphics, and creator UGC retainers that scale paid advertising ROAS.",
  alternates: { canonical: "/services/production-video-ads" },
  openGraph: {
    title: "Video Production & Ad Creatives Agency Pakistan — Manzarkash Digital Agency",
    description:
      "Scriptwriting, hook editing, motion graphics, and custom creator UGC retainers that scale ROAS.",
    url: "https://manzarkash.com/services/production-video-ads",
    type: "website",
  },
};

export default function ProductionVideoAdsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
