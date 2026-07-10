"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiSearch, FiSliders, FiFileText, FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function SeoPage() {
  const steps = [
    {
      num: "01",
      title: "Keyword & Competitor Audit",
      desc: "We research transactional keywords with high buyer intent, audit your competitors' backlink profiles, and construct a targeted structural content strategy.",
      icon: <FiSearch className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Core Web Vitals Speed",
      desc: "Google ranks fast sites. We audit loading performance, eliminate render-blocking scripts, compress assets, and resolve layout shift (CLS) issues.",
      icon: <FiSliders className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "On-Page Copy Sprints",
      desc: "Our writers optimize copy layout structure. We audit title tags, heading hierarchies, meta descriptions, and image alt text for density parameters.",
      icon: <FiFileText className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "Backlink Authority",
      desc: "Fusing search rankings with compounding power. We launch Outreach PR campaigns to establish high-authority relevant backlink connections.",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />
    }
  ];

  const searchSnippet = {
    title: "Manzarkash | Digital Marketing Agency Karachi & Dubai",
    url: "https://manzarkash.com",
    snippet: "Karachi & Dubai digital agency scaling brands across Pakistan and the UAE with professional product photography, high-ROI ads campaigns, SEO, custom e-commerce & portfolio websites, and WhatsApp automation.",
    stats: [
      { label: "Google Rank", val: "#1" },
      { label: "Search Volume", val: "18k/mo" },
      { label: "Domain Authority", val: "54" }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>ORGANIC SEARCH DOMINANCE</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              ADVANCED SEO <br />
              <span className="text-primary">& SPEED PERFORMANCE</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-550 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We optimize code structure and map authority backlink networks, pulling free transactional search engine clicks directly to your storefront.
            </p>
          </div>
        </section>

        <section className="py-16 bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <div className="border-b border-zinc-150 dark:border-zinc-850 pb-4">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold font-michroma">SEARCH ATTRIBUTION</span>
                <h3 className="font-michroma text-sm font-semibold text-zinc-800 dark:text-zinc-100 uppercase mt-0.5">SERP Snippet Example Layout</h3>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-805/40 space-y-3">
                <div>
                  <span className="text-xs text-zinc-405 dark:text-zinc-500 font-poppins">{searchSnippet.url}</span>
                  <a href="#" className="block text-base md:text-lg font-poppins font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-0.5 leading-tight">
                    {searchSnippet.title}
                  </a>
                </div>
                <p className="text-xs text-zinc-550 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  {searchSnippet.snippet}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {searchSnippet.stats.map((st, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-805/30">
                    <span className="text-xl font-michroma font-bold text-primary block leading-none">{st.val}</span>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-450 dark:text-zinc-500 uppercase mt-1 block">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>SEARCH METHODOLOGY</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>OUR COMPOUNDING ROADMAP</h2>
              <p className={styles.paragraph}>
                We execute structured on-page and off-page sprint campaigns to build domain presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary">{step.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-michroma text-base font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>CASE ATTRIBUTION</Eyebrow>
                <h2 className={styles.heading_2}>APEXLOGISTICS ORGANIC PIPELINE</h2>
                <p className={styles.paragraph}>
                  How we optimized regional Google Maps profiles and structural corporate content to drive leads.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Keyword Optimization:</strong> Identified high-volume transaction terms and restructured layout titles.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Speed Hardening:</strong> Solved server response times and compressed site bundle sizes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-805/50 shadow-md space-y-6">
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  SEO PERFORMANCE ATTRIBUTION
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                  APEXLOGISTICS (GULF REGION)
                </h3>
                <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  We targeted long-tail B2B logistical keywords and optimized technical site architecture, ranking them in top search results.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+180%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">ORGANIC LEAD GROWTH</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">#1</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">RANKINGS FOR CORE KEYWORDS</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black border-t border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>COMPILING A KEYWORD REPORT</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              SCALE YOUR COMPOUNDING <br />
              <span className="text-primary">SEARCH AUTHORITY</span>
            </h2>
            <p className={styles.paragraph}>
              Request a technical speed and keyword scoping audit. We deliver a custom competitor ranking breakdown directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request SEO Scoping Call
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
              >
                All Services
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
