"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiMonitor, FiZap, FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/app/styles/styles";

export default function EcommercePage() {
  const steps = [
    {
      num: "01",
      title: "Flow Architecture",
      desc: "We construct streamlined checkout structures and wireframe navigational paths to minimize mobile checkout friction.",
      icon: <FiMonitor className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Custom Prototyping",
      desc: "Developing bespoke themes on Shopify, WordPress, or React. We write clean, responsive layouts that scale to any screen size.",
      icon: <FiCode className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "Performance Tuning",
      desc: "We compress images, eliminate bloat code, defer heavy scripts, and cache assets to ensure page load times under 1 second.",
      icon: <FiZap className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "API Middleware Syncing",
      desc: "Integrating shipping gateways, local currency converters, custom order trackers, and CRM pipelines via webhooks.",
      icon: <FiCpu className="w-5 h-5 text-primary" />
    }
  ];

  const speedMetrics = [
    { label: "Performance Score", val: "99/100", desc: "Google Lighthouse Mobile average" },
    { label: "First Contentful Paint", val: "0.38s", desc: "Immediate visual asset rendering" },
    { label: "Cumulative Layout Shift", val: "0.01", desc: "Zero annoying layout shifts on load" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Engineering Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>CUSTOM WEB ENGINEERING</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              E-COMMERCE & <br />
              <span className="text-primary">PORTFOLIO DEVELOPMENTS</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-505 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We develop responsive, blazing-fast Shopify themes, WordPress APIs, and custom Next.js e-commerce environments focused on page speed metrics.
            </p>
          </div>
        </section>

        {/* Speed Metrics Widget (Tailored Terminal UX Accent) */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-955/40 border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="max-w-3xl mx-auto bg-zinc-950 text-zinc-100 border border-zinc-900 rounded-3xl p-6 md:p-8 space-y-6 font-mono shadow-xl relative">
              {/* Terminal header controls */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-[10px] text-zinc-550 ml-2">lighthouse-speed-audit.log</span>
                </div>
                <span className="text-[10px] text-primary font-bold">STATUS: STABLE</span>
              </div>

              {/* Terminal metric blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {speedMetrics.map((met, i) => (
                  <div key={i} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-900 space-y-2 relative">
                    <span className="text-[10px] text-zinc-500 uppercase block font-semibold">{met.label}</span>
                    <span className="text-2xl font-bold text-primary block">{met.val}</span>
                    <span className="text-[9px] text-zinc-450 leading-relaxed block font-poppins font-light">{met.desc}</span>
                  </div>
                ))}
              </div>

              {/* Code snippet simulation */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900/80 text-[10px] text-zinc-400 space-y-1 overflow-x-auto">
                <p className="text-zinc-550">// Target optimization metrics compiled</p>
                <p><span className="text-primary">const</span> config = &#123; latency: <span className="text-purple-400">"0.2s"</span>, gzip: <span className="text-purple-400">true</span>, cdn: <span className="text-purple-400">"Cloudflare"</span> &#125;;</p>
                <p><span className="text-primary">export default</span> buildStorefront(config);</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>ENGINEERING WORKFLOW</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>HOW WE COMPILE VALUE</h2>
              <p className={styles.paragraph}>
                We align structured prototyping steps with speed optimization audits.
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
                <Eyebrow>RESULTS AUDIT</Eyebrow>
                <h2 className={styles.heading_2}>ZYLORA MOBILE STOREFRONT</h2>
                <p className={styles.paragraph}>
                  How we rebuilt their legacy e-commerce layout structure to scale visual rendering and checkout processing.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Static Re-hydration:</strong> Engineered custom templates loading catalog product images instantly without layout shifts.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Headless Checkout:</strong> Unified payment integrations for lightning-fast conversions on mobile devices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6">
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  STORE KPI ATTRIBUTION
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                  ZYLORA APPAREL (US)
                </h3>
                <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  We engineered custom store templates focusing on speed, visual weight, and mobile navigation layouts to optimize search rankings and conversion metrics.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+310%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">ORGANIC TRAFFIC SCALE</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">0.4s</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">VISUAL CONTENT PAINT</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black border-t border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>REQUEST A TECHNICAL AUDIT</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              UPGRADE TO LIGHTNING-FAST <br />
              <span className="text-primary">STOREFRONT CODE</span>
            </h2>
            <p className={styles.paragraph}>
              Get a custom technical site speed and user experience audit. We deliver a detailed performance hardening plan targeting your checkout metrics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Code Audit Session
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
