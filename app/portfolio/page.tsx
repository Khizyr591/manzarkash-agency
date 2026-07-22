"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiLayout, 
  FiCode, 
  FiTrendingUp, 
  FiCpu, 
  FiExternalLink, 
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiFileText,
  FiFilm
} from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";
import PdfPreviewModal from "@/components/ui/PdfPreviewModal";

interface Project {
  id: string;
  title: string;
  client: string;
  category: "development" | "marketing" | "photography" | "automation" | "branding" | "production";
  categoryLabel: string;
  metric: string;
  metricLabel: string;
  desc: string;
  deliverables: string[];
  tech: string[];
  color: string;
  icon: React.ReactNode;
  websiteUrl?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  videoUrl?: string;
  videoLabel?: string;
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<{
    url: string;
    title: string;
    websiteUrl?: string;
    mediaType?: "pdf" | "video";
  } | null>(null);

  const categories = [
    { id: "all", label: "ALL WORK" },
    { id: "branding", label: "BRANDING & IDENTITY" },
    { id: "production", label: "CREATIVE & VIDEO PRODUCTION" },
    { id: "photography", label: "CREATIVE AD DESIGN" },
    { id: "development", label: "WEB ENGINEERING" },
    { id: "marketing", label: "SEO & PERFORMANCE ADS" },
    { id: "automation", label: "WHATSAPP AUTOMATIONS" },
  ];

  const projects: Project[] = [
    {
      id: "newbury",
      title: "Bespoke Brand Identity & Web Storefront",
      client: "Newbury UAE",
      category: "branding",
      categoryLabel: "Branding & Web Engineering",
      metric: "100%",
      metricLabel: "Bespoke Brandbook Guidelines",
      desc: "Designed and engineered the signature brand identity system and responsive web platform for Newbury UAE. Authored the comprehensive brandbook guidelines defining wordmark typography, color scales, and visual hierarchy.",
      deliverables: [
        "Full brandbook guidelines PDF",
        "Custom web storefront engineering",
        "Responsive UI/UX design system",
        "Multi-touchpoint collateral guidelines",
      ],
      tech: ["Brand Identity", "Brandbook PDF", "Next.js", "TailwindCSS", "Figma"],
      color: "rgba(245, 78, 14, 0.18)",
      icon: <FiBookOpen className="w-5 h-5 text-primary" />,
      websiteUrl: "https://www.newbury.ae/",
      pdfUrl: "/branding/Newbury Brandbook Final.pdf",
      pdfLabel: "View Brandbook PDF",
    },
    {
      id: "clutec",
      title: "Enterprise Rebrand & Technical Web Architecture",
      client: "Clutec Technology",
      category: "branding",
      categoryLabel: "Enterprise Web & Branding",
      metric: "21.9MB",
      metricLabel: "Full Web Architecture Deck",
      desc: "Architected a multi-tiered brand guideline system (5.5MB) and complete 21.9MB technical web architecture design blueprint mapping enterprise recycling & technology workflows.",
      deliverables: [
        "5.5MB Clutec Branding Guideline System",
        "21.9MB Technical Web Architecture Deck",
        "Enterprise UI/UX Design System",
        "Corporate Brand Positioning",
      ],
      tech: ["Enterprise Branding", "PDF Architecture", "Figma", "TailwindCSS"],
      color: "rgba(59, 130, 246, 0.18)",
      icon: <FiFileText className="w-5 h-5 text-primary" />,
      pdfUrl: "/Clutec Website.pdf",
      pdfLabel: "View Web Architecture PDF",
    },
    {
      id: "herradura-villas",
      title: "Luxury Real Estate & Villa Hospitality Guidelines",
      client: "Herradura Villas",
      category: "branding",
      categoryLabel: "Luxury Hospitality & Branding",
      metric: "7.5MB",
      metricLabel: "Brand Document Guideline",
      desc: "Developed a luxury real estate brand document to communicate exclusivity to ultra-high-net-worth investors — detailing typography, villa collateral guidelines, and color specs.",
      deliverables: [
        "7.5MB Herradura Villas Brand Document",
        "Villa Collateral & Print Guidelines",
        "Luxury Color Palette & Typography",
        "Investor Presentation System",
      ],
      tech: ["Luxury Branding", "Brand Document PDF", "Typography", "Figma"],
      color: "rgba(251, 146, 60, 0.18)",
      icon: <FiBookOpen className="w-5 h-5 text-primary" />,
      pdfUrl: "/branding/HV Brand Document.pdf",
      pdfLabel: "View HV Brand PDF",
    },
    {
      id: "lushly",
      title: "UGC Video Campaign & Frozen Treat E-Commerce Funnels",
      client: "Lushly (lushly.pk)",
      category: "production",
      categoryLabel: "Visual & FMCG Video Production",
      metric: "+240%",
      metricLabel: "UGC Video Conversion Rate",
      desc: "Produced and edited authentic, high-converting UGC video campaign assets for Lushly — Pakistan's premier frozen fruit ice lollies brand (lushly.pk) — optimizing TikTok and Instagram Reels video ads to boost direct-to-consumer sales.",
      deliverables: [
        "High-Definition UGC Video Campaign",
        "TikTok & Instagram Reel Cutdowns",
        "FMCG Creative Scripting & Styling",
        "Performance E-Commerce Integration",
      ],
      tech: ["UGC Production", "Video Editing", "TikTok Ads", "Meta Ads", "Shopify"],
      color: "rgba(236, 72, 153, 0.18)",
      icon: <FiFilm className="w-5 h-5 text-primary" />,
      websiteUrl: "https://lushly.pk/",
      videoUrl: "/UGC Lushly.mp4",
      videoLabel: "Watch Lushly UGC Video",
    },
    {
      id: "guzel",
      title: "Seasonal Fashion Video Campaign & BTS",
      client: "Guzel Fashion",
      category: "production",
      categoryLabel: "Creative Video Production",
      metric: "4 BTS",
      metricLabel: "Full Campaign Reel Cuts",
      desc: "Directed on-location behind-the-scenes video coverage across 4 multi-cut vertical and horizontal video edits, powering organic Instagram feeds and high-fashion social ads.",
      deliverables: [
        "4 Multi-Cut Fashion Shoot BTS Videos",
        "Vertical Reel & Horizontal Cuts",
        "On-Location Creative Direction",
        "Social Content Suite",
      ],
      tech: ["Fashion Production", "Video Editing", "Premiere Pro", "CapCut"],
      color: "rgba(168, 85, 247, 0.18)",
      icon: <FiFilm className="w-5 h-5 text-primary" />,
      videoUrl: "/Fashion Shoot BTS.mp4",
      videoLabel: "Watch Fashion BTS Video",
    },
    {
      id: "fsbi",
      title: "Commercial Video Production & Investor Content",
      client: "For Sale By Investors",
      category: "production",
      categoryLabel: "Creative Video Production",
      metric: "5.0MB",
      metricLabel: "Commercial Video Asset",
      desc: "Produced high-impact commercial video assets and behind-the-scenes shoots to anchor digital platform launches and investor presentation funnels.",
      deliverables: [
        "Commercial Production Video Asset",
        "Music & Video Shoot Production",
        "Investor Pitch Video Collateral",
        "Social Micro-Video Assets",
      ],
      tech: ["Commercial Production", "Video Editing", "After Effects", "Figma"],
      color: "rgba(16, 185, 129, 0.18)",
      icon: <FiFilm className="w-5 h-5 text-primary" />,
      videoUrl: "/Music Shoot BTS.mp4",
      videoLabel: "Watch Commercial Video",
    },
    {
      id: "zylora",
      title: "Custom Shopify Engine & Global Growth",
      client: "Zylora Fashion",
      category: "development",
      categoryLabel: "Web Engineering",
      metric: "+310%",
      metricLabel: "Organic Traffic Growth",
      desc: "Re-architected their legacy Shopify store into a custom theme layout optimized for Google Web Vitals, resulting in record mobile loading performance and streamlined checkout flows.",
      deliverables: [
        "Headless checkout integration",
        "Mobile conversion optimization",
        "Structured product markup",
      ],
      tech: ["Shopify Plus", "React", "TailwindCSS", "Liquid", "Google Analytics 4"],
      color: "rgba(245, 78, 14, 0.15)",
      icon: <FiCode className="w-5 h-5 text-primary" />,
    },
    {
      id: "khaas",
      title: "Bilingual Social Commerce Campaign",
      client: "Khaas Attire (Pakistan)",
      category: "marketing",
      categoryLabel: "Performance Ads",
      metric: "4.5x",
      metricLabel: "Sales Volume Expansion",
      desc: "Constructed targeted social ad funnels on Meta and TikTok using bilingual copywriting scripts. Integrated instant WhatsApp ordering bots to scale transactions seamlessly.",
      deliverables: [
        "Localized ad copy & production",
        "Meta pixel attribution audit",
        "Targeted customer lookalikes",
      ],
      tech: ["Meta Ads Manager", "TikTok Business Center", "WhatsApp API", "Semrush"],
      color: "rgba(251, 146, 60, 0.15)",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      id: "lumiere",
      title: "Creative Ad Styling & Design",
      client: "Lumière Cosmetics",
      category: "photography",
      categoryLabel: "Creative Ad Design",
      metric: "82%",
      metricLabel: "Ad Click-Through Scale",
      desc: "Designed and styled high-converting ad layouts and video creatives. Captured direct-response social assets to establish a premium brand image.",
      deliverables: [
        "Creative layout styling & direction",
        "Color-accurate product design",
        "Social micro-video assets",
      ],
      tech: ["Figma", "Photoshop", "Illustrator", "After Effects", "Premiere Pro"],
      color: "rgba(59, 130, 246, 0.15)",
      icon: <FiLayout className="w-5 h-5 text-primary" />,
    },
    {
      id: "apex",
      title: "B2B Organic Pipeline Autopilot",
      client: "ApexLogistics",
      category: "marketing",
      categoryLabel: "Search Optimization",
      metric: "100+",
      metricLabel: "Qualified Leads Monthly",
      desc: "Designed an SEO content map targeting competitive supply chain keywords. Optimized regional Google Maps visibility to capture local enterprise logistics queries.",
      deliverables: [
        "Enterprise maps SEO audit",
        "Long-form content pipelines",
        "Backlink outreach campaigns",
      ],
      tech: ["WordPress Core", "Google Search Console", "Semrush", "Ahrefs"],
      color: "rgba(16, 185, 129, 0.15)",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      id: "vortex",
      title: "Automated Conversational Support Bot",
      client: "Vortex SaaS",
      category: "automation",
      categoryLabel: "WhatsApp Automation",
      metric: "-60%",
      metricLabel: "Manual Support Tickets",
      desc: "Programmed a custom NLP chatbot routing into CRM pipelines, automatically tracking user account status and solving client queries in real-time.",
      deliverables: [
        "Natural language intent mapping",
        "CRM API webhook routing",
        "Fallback live chat desk",
      ],
      tech: ["Node.js", "Express", "Dialogflow", "WhatsApp Cloud API", "HubSpot"],
      color: "rgba(168, 85, 247, 0.15)",
      icon: <FiCpu className="w-5 h-5 text-primary" />,
    },
    {
      id: "nexus",
      title: "Fashion Ad Creative & Styling",
      client: "Nexus Apparel (Pakistan)",
      category: "photography",
      categoryLabel: "Creative Ad Design",
      metric: "10k+",
      metricLabel: "New Instagram Followers",
      desc: "Designed a seasonal model lifestyle collection layout. Combined premium design assets with direct-response ad structures for high-end digital ad campaigns.",
      deliverables: [
        "Model styling & creative direction",
        "High-fidelity design layouts",
        "Multi-aspect ratio ad outputs",
      ],
      tech: ["Figma", "Photoshop CC", "Illustrator", "After Effects"],
      color: "rgba(236, 72, 153, 0.15)",
      icon: <FiLayout className="w-5 h-5 text-primary" />,
    },
  ];

  const filteredProjects = 
    filter === "all" 
      ? projects 
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      {selectedMedia && (
        <PdfPreviewModal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          pdfUrl={selectedMedia.url}
          title={selectedMedia.title}
          websiteUrl={selectedMedia.websiteUrl}
          mediaType={selectedMedia.mediaType}
        />
      )}
      <Navbar />

      <main className="flex flex-col">
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>OUR CREATIVE PORTFOLIO</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              PROVEN RESULTS <span className="text-primary">BUILT BY CODE</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Explore our case studies. We construct digital assets that drive conversions, organic authority, and long-term brand equity globally.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[100px]" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        </section>

        <section className="py-4 md:py-6 bg-white dark:bg-black border-b border-zinc-150 dark:border-zinc-900 sticky top-18 z-40 backdrop-blur-md bg-white/90 dark:bg-black/90">
          <div className={`${styles.container} flex items-center justify-start md:justify-center gap-2 overflow-x-auto md:overflow-visible no-scrollbar -mx-6 px-6 md:mx-0 md:px-0`}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-xl text-xs md:text-sm font-poppins font-medium tracking-wide uppercase transition-all duration-300 border ${
                  filter === cat.id
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/25"
                    : "border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-28 relative w-full">
          <div className={styles.container}>
            <motion.div 
              layout
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj, idx) => (
                  <motion.div
                    layout
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at top right, ${proj.color} 0%, transparent 65%)`
                      }}
                    />

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs flex items-center justify-center">
                          {proj.icon}
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-primary/80 uppercase font-semibold">
                          {proj.categoryLabel}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs font-poppins font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                          {proj.client}
                        </span>
                        <h3 className={`${styles.heading_4} !text-lg sm:!text-xl text-zinc-900 dark:text-white !font-bold`}>
                          {proj.title}
                        </h3>
                      </div>

                      <p className={`${styles.span_text} !text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light`}>
                        {proj.desc}
                      </p>

                      <div className="space-y-2">
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-bold">
                          Core Deliverables
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {proj.deliverables.map((deliv, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-zinc-650 dark:text-zinc-350">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-6 relative z-10 flex flex-col justify-between">
                      <div className="flex items-center gap-4 bg-white/50 dark:bg-zinc-950/30 border border-zinc-200/30 dark:border-zinc-800/30 rounded-2xl p-4">
                        <div className="text-3xl font-michroma font-bold text-primary shrink-0 leading-none">
                          {proj.metric}
                        </div>
                        <div className="text-[10px] font-poppins tracking-wider text-zinc-500 dark:text-zinc-400 leading-snug uppercase font-medium">
                          {proj.metricLabel}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-bold">
                          Engine & Tools
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {proj.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-[9px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {(proj.websiteUrl || proj.pdfUrl || proj.videoUrl) && (
                        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                          {proj.websiteUrl && (
                            <a
                              href={proj.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
                            >
                              <span>Visit Live Website</span>
                              <FiExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {proj.pdfUrl && (
                            <button
                              onClick={() =>
                                setSelectedMedia({
                                  url: proj.pdfUrl!,
                                  title: `${proj.client} — Brand & Architecture Document`,
                                  websiteUrl: proj.websiteUrl,
                                  mediaType: "pdf",
                                })
                              }
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 font-semibold transition-all cursor-pointer"
                            >
                              <FiFileText className="w-3.5 h-3.5" />
                              <span>{proj.pdfLabel || "View PDF Document"}</span>
                            </button>
                          )}
                          {proj.videoUrl && (
                            <button
                              onClick={() =>
                                setSelectedMedia({
                                  url: proj.videoUrl!,
                                  title: `${proj.client} — Campaign Video Asset`,
                                  websiteUrl: proj.websiteUrl,
                                  mediaType: "video",
                                })
                              }
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-800 hover:bg-primary text-zinc-200 hover:text-white border border-zinc-700 font-semibold transition-all cursor-pointer"
                            >
                              <FiFilm className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                              <span>{proj.videoLabel || "Watch Video Asset"}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary">
              <FiAward className="w-6 h-6" />
            </div>
            <Eyebrow>START A COLLABORATION</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              READY TO DELIVER <span className="text-primary">GENUINE GROWTH?</span>
            </h2>
            <p className={styles.paragraph}>
              Get in touch to construct a custom audit layout and review how we can scale your brand retainers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request a Consultation Audit
              </Button>
              <Button
                href="https://wa.me/923313936011"
                target="_blank"
                variant="outline"
                size="lg"
                className="border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900"
              >
                Direct WhatsApp Chat
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 dark:opacity-[0.05] bg-primary blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
