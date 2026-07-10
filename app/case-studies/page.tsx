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
    slug: "zylora",
    client: "Zylora Fashion",
    market: "UAE",
    category: "E-Commerce Engineering",
    headline: "Custom Shopify engine + regional SEO drove +310% organic traffic",
    metric: "+310%",
    metricLabel: "Organic Traffic Growth",
    revenue: "$1.2M+",
    revenueLabel: "Annual Attributed Revenue",
    stack: ["Shopify Plus", "React", "TailwindCSS", "GA4"],
    summary:
      "Zylora arrived with a template Shopify build and no measurable organic presence. We re-architected the storefront around Core Web Vitals, deployed a custom Liquid + React theme, and paired it with UAE-focused technical SEO — content, schema, and internal linking mapped to high-intent Gulf retail queries.",
    outcomes: [
      "Sub-1.4s mobile LCP across product pages",
      "Featured in Google Merchant Center for 40+ commercial keywords",
      "Cart abandonment cut by 34% via streamlined checkout flow",
    ],
  },
  {
    slug: "khaas",
    client: "Khaas Attire",
    market: "Pakistan",
    category: "Performance Ads",
    headline: "Bilingual Meta/TikTok funnels scaled monthly sales 4.5×",
    metric: "4.5x",
    metricLabel: "Sales Volume Expansion",
    revenue: "8,000+",
    revenueLabel: "Orders Filled Monthly",
    stack: ["Meta Ads Manager", "TikTok Business", "WhatsApp API", "Semrush"],
    summary:
      "Khaas Attire's local audience knew the brand but conversion depended on WhatsApp DMs the team couldn't triage. We built a bilingual (Urdu + English) creative library, ran Meta + TikTok lookalike stacks, and routed traffic into a WhatsApp Cloud API bot that auto-confirms orders and hands hot leads to sales.",
    outcomes: [
      "CAC lowered by 41% inside the first 60 days",
      "WhatsApp bot handles 6,000+ order confirmations/month with no human touch",
      "First-order → repeat-order rate improved 2.3×",
    ],
  },
  {
    slug: "apex",
    client: "ApexLogistics",
    market: "UAE",
    category: "SEO & Content",
    headline: "#1 rankings on supply-chain keywords delivered +180% B2B pipeline",
    metric: "+180%",
    metricLabel: "Qualified B2B Pipeline",
    revenue: "100+",
    revenueLabel: "Enterprise Leads / Month",
    stack: ["WordPress Core", "Search Console", "Semrush", "Ahrefs"],
    summary:
      "ApexLogistics was buying paid search for terms they should have owned organically. We ran a 90-day content and technical SEO sprint — keyword clustering, on-page rewrites, backlink outreach, and Google Business Profile hardening — until the site ranked #1 for the eight highest-intent Gulf supply-chain queries.",
    outcomes: [
      "8 target keywords ranking #1 on Google UAE within 6 months",
      "Direct + organic contact-form leads up 3.4×",
      "Paid search spend redirected from branded to non-branded, freeing 60% budget",
    ],
  },
  {
    slug: "lumiere",
    client: "Lumière Cosmetics",
    market: "UAE",
    category: "Visual Production",
    headline: "Studio-lit catalog drove +82% ad click-through rate",
    metric: "+82%",
    metricLabel: "Ad Click-Through Rate",
    revenue: "3.1×",
    revenueLabel: "Return on Ad Spend",
    stack: ["Studio Lighting", "Capture One", "Photoshop", "Premiere"],
    summary:
      "Lumière's product was premium; their existing catalog looked like every other clean-beauty brand. We shot a full seasonal collection at our Karachi studio using textured backdrops, organic rock formations, and cinema-grade lighting — then cut the assets into paid-ad-ready micro-videos.",
    outcomes: [
      "12 hero product shots + 40 supporting angles + 8 motion clips",
      "Deployed across Meta, TikTok, and shopper UAE marketplaces",
      "Assets still in rotation 14 months later with no fatigue signals",
    ],
  },
  {
    slug: "vortex",
    client: "Vortex SaaS",
    market: "UAE",
    category: "WhatsApp Automation",
    headline: "NLP support bot cut manual tickets by 60%",
    metric: "-60%",
    metricLabel: "Manual Support Tickets",
    revenue: "24/7",
    revenueLabel: "Automated Response Coverage",
    stack: ["WhatsApp Cloud API", "Node.js", "CRM Webhooks", "OpenAI"],
    summary:
      "Vortex's support team was drowning in repeat queries — password resets, subscription status, invoice requests. We deployed a conversational bot on WhatsApp Cloud API wired to their CRM, resolving Tier-1 queries instantly and escalating only genuine edge cases to human agents.",
    outcomes: [
      "First-response time down from 47 minutes to under 3 seconds",
      "Support headcount reallocated to onboarding + retention",
      "CSAT score up 18 points post-deployment",
    ],
  },
  {
    slug: "nexus",
    client: "Nexus Apparel",
    market: "Pakistan",
    category: "Creative Production",
    headline: "Lifestyle campaign added 10k+ new Instagram followers",
    metric: "10k+",
    metricLabel: "Net Follower Growth",
    revenue: "6.2×",
    revenueLabel: "Reel Watch-Through Rate",
    stack: ["Casting", "Studio + Location", "Adobe Premiere", "CapCut"],
    summary:
      "Nexus needed a seasonal drop story that would carry both organic social and paid distribution. We handled model casting, on-location styling, and multi-aspect capture — delivering a single shoot day that produced 6 weeks of scheduled content.",
    outcomes: [
      "45+ deliverables in vertical, square, and horizontal cuts",
      "Featured in top-of-feed Reels for 3 consecutive weeks",
      "Doubled the brand's own historical CPC benchmarks",
    ],
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

