"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiTarget, FiBarChart2, FiPieChart, FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/app/styles/styles";

export default function MarketingAdsPage() {
  const steps = [
    {
      num: "01",
      title: "Paid Channel Audit",
      desc: "We analyze your historic ad accounts, audit Meta Pixel / TikTok Event API tracking errors, and identify creative fatigue leakages before launching.",
      icon: <FiBarChart2 className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Funnel Layout Design",
      desc: "Constructing multi-tier campaign structures: broad cold targeting top-of-funnel, custom collections consideration mid-funnel, and dynamic catalog retargeting.",
      icon: <FiTarget className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "Creative A/B Sprints",
      desc: "Our copywriters and designers produce ad copy hooks, creative images, and video scrolls. We continuously run A/B split campaigns to detect winning assets.",
      icon: <FiPieChart className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "Budget Scale & Attribution",
      desc: "Once winners are found, we scale budgets systematically. We monitor direct purchase attribution and ROAS to ensure absolute alignment with profit goals.",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />
    }
  ];

  const funnelMetrics = [
    { level: "1. Top of Funnel (Awareness)", label: "Impressions", val: "1,240,000", cost: "CPM: $4.25", pct: "100%" },
    { level: "2. Middle of Funnel (Interest)", label: "Link Clicks", val: "49,600", cost: "CTR: 4.0%", pct: "4.0%" },
    { level: "3. Bottom of Funnel (Conversion)", label: "Purchases", val: "2,230", cost: "CPA: $14.20", pct: "4.5%" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Performance Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>PERFORMANCE MARKETING</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              PAID ADS CAMPAIGNS <br />
              <span className="text-primary">& GROWTH FUNNELS</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-505 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We configure, launch, and scale performance ad retainers across Meta, Google, and TikTok, focused entirely on conversion attribution.
            </p>
          </div>
          {/* Background mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,78,14,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,78,14,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </section>

        {/* Mock Funnel Dashboard (Tailored UX Accent) */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-md">
              <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-850 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold">CAMPAIGN METRICS</span>
                  <h3 className="font-michroma text-sm md:text-base font-semibold text-zinc-800 dark:text-zinc-100 uppercase">Live Funnel Attribution Mock</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-xs font-bold">
                  ACTIVE ROAS: 4.5x
                </div>
              </div>

              {/* Conversion Funnel Grid */}
              <div className="space-y-4">
                {funnelMetrics.map((met, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/40">
                    <div className="sm:col-span-2">
                      <span className="text-[10px] font-mono text-primary font-bold uppercase">{met.level}</span>
                      <p className="text-sm font-semibold font-poppins text-zinc-800 dark:text-zinc-100 mt-0.5">{met.label}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-lg font-bold font-mono text-zinc-900 dark:text-white leading-none">{met.val}</p>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">{met.cost}</span>
                    </div>
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden relative">
                      <div className="bg-primary h-full rounded-full" style={{ width: met.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>CAMPAIGN PROCESS</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>OUR OPTIMIZATION TIMELINE</h2>
              <p className={styles.paragraph}>
                We manage performance spend systematically to prevent client budget dilution.
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

        {/* Case Study Section */}
        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>RESULTS IN PRODUCTION</Eyebrow>
                <h2 className={styles.heading_2}>KHAAS ATTIRE FUNNEL</h2>
                <p className={styles.paragraph}>
                  How we restructured paid marketing campaigns to scale monthly Pakistani retail sales volume.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Urdu-First Copywriting:</strong> Wrote direct-response script ads targeted strictly at local customer intents.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>WhatsApp Routing:</strong> Routed cold click-to-chat ads straight into conversational Shopify catalogs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6">
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  CASE KPI ATTRIBUTION
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                  KHAAS ATTIRE (PAKISTAN)
                </h3>
                <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  We engineered localized ad content funnels on Meta combined with a custom automated catalog flow, increasing domestic scale output without adding customer support staff.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">4.5x</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">DIRECT ROAS SCALE</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">8,000+</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">ORDERS FILLED MONTHLY</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black border-t border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>REQUEST A CAMPAIGN AUDIT</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              STOP WASTING AD RETAINERS & <br />
              <span className="text-primary">START CONVERTING</span>
            </h2>
            <p className={styles.paragraph}>
              Get a free paid ads account audit. We review your pixel tracking accuracy and creative copy structure, delivering a custom conversion roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Ad Audit Call
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
