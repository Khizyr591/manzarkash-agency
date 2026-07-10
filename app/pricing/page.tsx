import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "./_components/PricingHero";
import PricingTiers from "./_components/PricingTiers";
import PricingComparison from "./_components/PricingComparison";
import PricingFAQ from "./_components/PricingFAQ";
import PricingCTA from "./_components/PricingCTA";

export const metadata: Metadata = {
  title: "Pricing & Packages | Manzarkash — Retainers for Pakistan & UAE Brands",
  description:
    "Transparent retainer pricing for Manzarkash. Growth packages for e-commerce, paid ads, SEO, WhatsApp automation, and studio visual production — billed in AED (UAE) or PKR (Pakistan).",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Packages | Manzarkash",
    description:
      "Growth retainer pricing for Pakistan & UAE brands — e-commerce, ads, SEO, automation, and visuals.",
    url: "https://manzarkash.com/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Manzarkash Growth Retainers",
    "description":
      "Monthly growth retainers combining visual production, paid ads, SEO, and WhatsApp automation for brands in Pakistan and the UAE.",
    "brand": { "@type": "Brand", "name": "Manzarkash" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Launch Retainer",
        "priceCurrency": "USD",
        "price": "1200",
        "availability": "https://schema.org/InStock",
        "url": "https://manzarkash.com/pricing",
      },
      {
        "@type": "Offer",
        "name": "Scale Retainer",
        "priceCurrency": "USD",
        "price": "3200",
        "availability": "https://schema.org/InStock",
        "url": "https://manzarkash.com/pricing",
      },
      {
        "@type": "Offer",
        "name": "Enterprise Retainer",
        "priceCurrency": "USD",
        "price": "7500",
        "availability": "https://schema.org/InStock",
        "url": "https://manzarkash.com/pricing",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <main className="flex flex-col">
        <PricingHero />
        <PricingTiers />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
