import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Bilal, Founder & Director | Manzarkash",
  description:
    "Meet Muhammad Bilal — Founder & Director of Manzarkash. The philosophy behind our integrated visual + engineering studio serving retail brands across Pakistan and the UAE.",
  alternates: { canonical: "/founder" },
  openGraph: {
    title: "Muhammad Bilal, Founder & Director | Manzarkash",
    description:
      "The philosophy behind Manzarkash — an integrated visual + engineering studio for Pakistan & UAE brands.",
    url: "https://manzarkash.com/founder",
    type: "profile",
  },
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
