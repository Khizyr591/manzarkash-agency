"use client";

import { motion } from "framer-motion";
import { 
  FiCamera, 
  FiTarget, 
  FiShare2, 
  FiTrendingUp, 
  FiCode, 
  FiMessageSquare,
  FiArrowRight
} from "react-icons/fi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/app/styles/styles";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  glowColor: string;
  highlights: string[];
}

export default function ServicesPage() {
  const services: ServiceItem[] = [
    {
      id: "product-visuals",
      title: "Product Visuals & Creatives",
      desc: "High-end product photography and visual creative production. We capture catalog shots and video assets that showcase product details, driving conversions at first glance.",
      icon: <FiCamera className="w-6 h-6 text-primary" />,
      href: "/services/product-visuals",
      glowColor: "rgba(245, 78, 14, 0.15)",
      highlights: ["Studio Catalog Shoots", "Set Styling & Concept Design", "Cinema Lighting Setup", "Color Grading & Retouching"]
    },
    {
      id: "marketing-ads",
      title: "Marketing & Ads Campaigns",
      desc: "Outcome-driven paid advertising funnels across Meta, Google, and TikTok. We design ad creatives, structure event tracking, and optimize conversions to scale revenue.",
      icon: <FiTarget className="w-6 h-6 text-primary" />,
      href: "/services/marketing-ads",
      glowColor: "rgba(251, 146, 60, 0.15)",
      highlights: ["Meta & TikTok Ad Setup", "Conversion Funnel Engineering", "Ad Copy & Creative Production", "Pixel Event Tracking Audit"]
    },
    {
      id: "social-media",
      title: "Social Media & Content",
      desc: "Full-scale brand social management and organic positioning. We build content calendars, create engaging micro-videos, and cultivate local/global communities.",
      icon: <FiShare2 className="w-6 h-6 text-primary" />,
      href: "/services/social-media",
      glowColor: "rgba(236, 72, 153, 0.15)",
      highlights: ["Strategic Content Calendars", "Micro-Video Assets (Reels/TikToks)", "Bilingual Storytelling Scripts", "Active Community Management"]
    },
    {
      id: "seo",
      title: "Advanced SEO Solutions",
      desc: "Dominating local search in Karachi and scaling organic presence globally. We identify high-volume transactional keywords, optimize technical speed, and build search authority.",
      icon: <FiTrendingUp className="w-6 h-6 text-primary" />,
      href: "/services/seo",
      glowColor: "rgba(16, 185, 129, 0.15)",
      highlights: ["Google Maps Local Domination", "Core Web Vitals Speed Hardening", "Competitor Keyword Scoping", "High-Authority Link Outreach"]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Custom Portfolios",
      desc: "High-performance storefronts built on Shopify, WordPress, or custom Next.js stacks. We engineer fast, responsive, and secure websites that streamline visitor checkouts.",
      icon: <FiCode className="w-6 h-6 text-primary" />,
      href: "/services/ecommerce",
      glowColor: "rgba(59, 130, 246, 0.15)",
      highlights: ["Shopify Plus Custom Themes", "WordPress API Custom Builds", "Responsive Mobile-First UIs", "Speed & Security Optimization"]
    },
    {
      id: "whatsapp-automation",
      title: "WhatsApp Automation & Support",
      desc: "Eliminating operational support bottlenecks. We build custom NLP chatbots and automated marketing broadcast workflows synced directly with your store database.",
      icon: <FiMessageSquare className="w-6 h-6 text-primary" />,
      href: "/services/whatsapp-automation",
      glowColor: "rgba(168, 85, 247, 0.15)",
      highlights: ["Conversational Chatbot Flows", "E-Commerce Database Integrations", "Automatic Order Tracking Bot", "Agent Fallback Routing Webhooks"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Services Directory Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>OUR SPECIALIZED SERVICES</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              WHAT WE BUILD <span className="text-primary">& SCALE</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We integrate premium visual content creation with advanced software engineering to operate as an end-to-end partner for digital brand growth.
            </p>
          </div>
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[100px]" />
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 relative w-full">
          <div className={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Radial Glow Hover Effect */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.glowColor} 0%, transparent 65%)`
                    }}
                  />

                  <div className="space-y-6 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs flex items-center justify-center">
                      {service.icon}
                    </div>

                    <div className="space-y-3">
                      <h3 className={`${styles.heading_4} !text-lg sm:!text-xl text-zinc-900 dark:text-white !font-bold`}>
                        {service.title}
                      </h3>
                      <p className={`${styles.span_text} !text-[0.88rem] text-zinc-505 dark:text-zinc-400 leading-relaxed font-light`}>
                        {service.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-bold">
                        Pillars & Focus
                      </span>
                      <ul className="space-y-1.5">
                        {service.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-350">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 relative z-10">
                    <Button
                      href={service.href}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 border-zinc-200 hover:border-primary dark:border-zinc-800 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      <span>Explore Process & Cases</span>
                      <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Directory CTA */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>CUSTOM GROWTH STRATEGY</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              READY TO INTEGRATE <span className="text-primary">YOUR OPERATIONS?</span>
            </h2>
            <p className={styles.paragraph}>
              Book a scoping audit session. We evaluate your current visuals, speed, and marketing funnels to define a comprehensive solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Scope Audit Call
              </Button>
              <Button
                href="https://wa.me/923313936011"
                target="_blank"
                variant="outline"
                size="lg"
              >
                Chat on WhatsApp
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
