import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management & Creative Content | Manzarkash",
  description:
    "End-to-end social media management for Pakistan and UAE brands. Content calendars, short-form video, community building, and paid amplification on Instagram, TikTok, and LinkedIn.",
  alternates: { canonical: "/services/social-media" },
  openGraph: {
    title: "Social Media Management & Creative Content — Manzarkash",
    description:
      "Instagram, TikTok, and LinkedIn management with paid amplification for Pakistan & UAE brands.",
    url: "https://manzarkash.com/services/social-media",
    type: "website",
  },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
