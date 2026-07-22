import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesGrid from "./_components/CaseStudiesGrid";
import CaseStudiesHero from "./_components/CaseStudiesHero";
import CaseStudiesCTA from "./_components/CaseStudiesCTA";
import type { CaseStudy } from "./_components/types";

export const metadata: Metadata = {
  title: "Case Studies | Manzarkash — Pakistan & UAE Growth Results",
  description:
    "Real revenue, real ROI. Case studies from Manzarkash across Pakistan and the UAE — e-commerce builds, paid ads campaigns, SEO growth, and WhatsApp automation deployments.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Manzarkash",
    description:
      "Attributed growth across Pakistan and the UAE — e-commerce, paid ads, SEO, and automation case studies.",
    url: "https://manzarkash.com/case-studies",
    type: "website",
  },
};

const caseStudies: CaseStudy[] = [
  {
    slug: "newbury",
    client: "Newbury UAE",
    market: "UAE",
    category: "Branding & Web Engineering",
    headline: "Bespoke Brand Identity System & High-Performance Web Storefront",
    metric: "100%",
    metricLabel: "Bespoke Brand Guidelines",
    revenue: "Live",
    revenueLabel: "Website Engineered & Deployed",
    stack: ["Brand Identity", "Brandbook PDF", "Next.js", "TailwindCSS", "Figma"],
    summary:
      "Newbury needed a signature brand identity and high-converting web storefront to anchor its luxury retail expansion in the UAE. We authored the complete brandbook guidelines — wordmark typography, color scales, visual hierarchy — and engineered their official responsive web platform at newbury.ae.",
    outcomes: [
      "Authored 2.7MB comprehensive Brandbook PDF guideline & design system",
      "Custom web build engineered and deployed at https://www.newbury.ae/",
      "Unified digital & physical brand presence across luxury UAE touchpoints",
    ],
    websiteUrl: "https://www.newbury.ae/",
    pdfUrl: "/branding/Newbury Brandbook Final.pdf",
    pdfLabel: "View Brandbook PDF",
    logoUrl: "/client_logos/newbury.png",
  },
  {
    slug: "clutec",
    client: "Clutec",
    market: "International",
    category: "Enterprise Web & Branding",
    headline: "Complete Enterprise Rebrand & Web Platform Architecture",
    metric: "21.9MB",
    metricLabel: "Full Web Architecture Deck",
    revenue: "5.5MB",
    revenueLabel: "Brand Guidelines System",
    stack: ["Enterprise Branding", "PDF Architecture", "UI/UX System", "Figma", "TailwindCSS"],
    summary:
      "Clutec required a complete enterprise positioning teardown and modern web platform architecture. We delivered a multi-tiered brand guideline system (5.5MB) and complete 21.9MB technical web architecture design document mapping their enterprise recycling and tech workflows.",
    outcomes: [
      "Authored 5.5MB Clutec Branding Guideline System",
      "Delivered 21.9MB Clutec Web Architecture PDF blueprint",
      "Enterprise technology positioning across European and regional markets",
    ],
    pdfUrl: "/Clutec Website.pdf",
    pdfLabel: "View Web Architecture PDF",
    logoUrl: "/client_logos/Clutec.png",
  },
  {
    slug: "herradura-villas",
    client: "Herradura Villas",
    market: "International",
    category: "Luxury Hospitality & Branding",
    headline: "Signature Brand Document & Real Estate Visual Identity",
    metric: "7.5MB",
    metricLabel: "Brand Document Guideline",
    revenue: "100%",
    revenueLabel: "Bespoke Hospitality System",
    stack: ["Brand Guidelines", "Villa Collateral", "Typography Scale", "Print & Digital"],
    summary:
      "Herradura Villas needed a luxury real estate brand document to communicate exclusivity to ultra-high-net-worth investors. We developed their signature brand document — detailing typography, villa collateral guidelines, and color specs.",
    outcomes: [
      "Authored 7.5MB Herradura Villas Brand Document",
      "Bespoke print & digital hospitality design guidelines",
      "Elevated estate positioning for international real estate buyers",
    ],
    pdfUrl: "/branding/HV Brand Document.pdf",
    pdfLabel: "View HV Brand PDF",
    logoUrl: "/client_logos/Herradura Villas.png",
  },
  {
    slug: "lushly",
    client: "Lushly Popsicles (lushly.pk)",
    market: "Pakistan",
    category: "Visual Production",
    headline: "High-Converting UGC Video Ad Campaign for Frozen Fruit Popsicles",
    metric: "+240%",
    metricLabel: "UGC Video Conversion Rate",
    revenue: "5.0MB",
    revenueLabel: "High-Def UGC Campaign Video",
    stack: ["UGC Video Production", "TikTok Ads", "Meta Ads", "FMCG E-Commerce"],
    summary:
      "Lushly needed authentic, mouth-watering social video ads for their refreshing frozen fruit ice lollies brand (lushly.pk). We produced a dedicated UGC creator video campaign in colorful sleeve packs, driving record click-through rates and direct-to-consumer online orders.",
    outcomes: [
      "Produced 5.0MB High-Definition UGC Fruit Lolly Campaign Video",
      "Scaled TikTok Ads & Instagram Reels engagement for lushly.pk",
      "Engineered high-converting e-commerce video ad funnels",
    ],
    websiteUrl: "https://lushly.pk/",
    videoUrl: "/UGC Lushly.mp4",
    videoLabel: "Watch Lushly UGC Video",
    logoUrl: "/client_logos/Lushly New.png",
  },
  {
    slug: "guzel",
    client: "Guzel Fashion",
    market: "Pakistan",
    category: "Creative Production",
    headline: "Multi-Cut Fashion Video Campaign & Behind-The-Scenes Production",
    metric: "4 BTS",
    metricLabel: "Full Campaign Reel Cuts",
    revenue: "3.2×",
    revenueLabel: "Video Watch-Through Time",
    stack: ["Fashion Shoot BTS", "Video Editing", "Social Micro-Videos", "Creative Direction"],
    summary:
      "Guzel needed a full seasonal visual production story to capture their new fashion drop. We directed on-location BTS video coverage across 4 multi-cut vertical and horizontal video edits, powering their organic Instagram feed and performance ads.",
    outcomes: [
      "Captured & produced 4 multi-cut Fashion Shoot BTS video deliverables",
      "Scaled organic video watch-through time by 3.2×",
      "Provided 6 weeks of high-fashion social content assets",
    ],
    videoUrl: "/Fashion Shoot BTS.mp4",
    videoLabel: "Watch Fashion BTS Video",
    logoUrl: "/client_logos/Guzel.png",
  },
  {
    slug: "fsbi",
    client: "For Sale By Investors",
    market: "International",
    category: "Creative Production",
    headline: "Commercial Video Production & Multi-Media Content Funnel",
    metric: "5.0MB",
    metricLabel: "Commercial Video Production",
    revenue: "Multi-Platform",
    revenueLabel: "Asset Deployment",
    stack: ["Commercial Production", "Music & Video Shoot", "Brand Strategy", "Digital Funnels"],
    summary:
      "For Sale By Investors needed high-impact video assets to engage luxury real estate buyers and investors. We produced dedicated video commercial content and behind-the-scenes shoots to anchor their digital launch.",
    outcomes: [
      "Produced 5.0MB High-Quality Commercial Video Asset",
      "Multi-platform video deployment for investor pitch decks & social ads",
      "Boosted platform signups and lead retention",
    ],
    videoUrl: "/Music Shoot BTS.mp4",
    videoLabel: "Watch Commercial Video",
    logoUrl: "/client_logos/for sale by investors.png",
  },
];

export default function CaseStudiesPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Manzarkash Case Studies",
    "url": "https://manzarkash.com/case-studies",
    "description":
      "Attributed growth case studies across Pakistan and the UAE — e-commerce, paid ads, SEO, and WhatsApp automation.",
    "hasPart": caseStudies.map((c) => ({
      "@type": "CreativeWork",
      "name": `${c.client} — ${c.category}`,
      "about": c.headline,
    })),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Navbar />
      <main className="flex flex-col">
        <CaseStudiesHero total={caseStudies.length} />
        <CaseStudiesGrid cases={caseStudies} />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  );
}

