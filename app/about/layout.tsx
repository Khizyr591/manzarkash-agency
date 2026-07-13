import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Manzarkash Digital Agency — Pakistan",
  description:
    "Manzarkash Digital Agency is a premium growth marketing and web engineering agency in Pakistan, delivering high-ROI advertising campaigns, search engine optimization (SEO), custom e-commerce web applications, and smart WhatsApp automation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Manzarkash Digital Agency — Pakistan",
    description:
      "A premium growth marketing and web engineering agency serving Pakistan brands with ad creatives, custom development, SEO, and WhatsApp automation.",
    url: "https://manzarkash.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
