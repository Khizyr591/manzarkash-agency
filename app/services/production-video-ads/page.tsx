"use client";

import { motion } from "framer-motion";
import { FiTarget, FiVideo, FiSliders, FiFeather, FiArrowRight, FiCheck, FiFilm, FiActivity } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function ProductionVideoAdsPage() {
  const steps = [
    {
      num: "01",
      title: "Script & Hook Ideation",
      desc: "We research customer pain points, script direct-response hooks, and storyboard multi-angle visual hooks to interrupt scroll behavior.",
      icon: <FiFeather className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Creator UGC & Shoots",
      desc: "We match your brand with creative directors, coordinate high-quality product shooting, or source UGC creators for raw, relatable assets.",
      icon: <FiFilm className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "High-Retention Editing",
      desc: "Our editors assemble fast-paced cuts, integrate kinetic text overlays, design sound SFX, and optimize color grading for mobile displays.",
      icon: <FiSliders className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "Split-Testing Hooks",
      desc: "We deliver 3-5 variations of the first 3 seconds of the video, allowing performance marketers to isolate and scale the winning hook.",
      icon: <FiTarget className="w-5 h-5 text-primary" />
    }
  ];

  const outcomes = [
    "High-retention mobile-first vertical video ads (9:16 format for Reels, TikToks, Shorts)",
    "Square catalog overlay and direct-response videos (1:1 format for Meta feeds)",
    "Split-test variations of opening hooks to combat creative ad fatigue",
    "Bilingual, high-conversion ad copies and professional script storyboards"
  ];

  const performanceMetrics = [
    { metric: "3-Second Hook Rate", current: "22%", optimized: "45%+", diff: "+104%", width: "100%" },
    { metric: "15-Second Hold Rate", current: "8%", optimized: "25%+", diff: "+212%", width: "80%" },
    { metric: "CPA Reduction (Paid Ads)", current: "$18.50", optimized: "$11.20", diff: "-39.4%", width: "60%" }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-50 dark selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-28 md:py-36 relative overflow-hidden w-full flex items-center justify-center bg-radial from-zinc-900 to-black border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.06)_0%,transparent_60%)] pointer-events-none" />
          
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>RETENTION-DRIVEN CREATIVES</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-white uppercase tracking-wider`}>
              PRODUCTION & <br />
              <span className="text-primary">VIDEO ADS</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We engineer direct-response video creatives that capture scroll attention. From script writing to motion styling and hook variations, we optimize video formats for paid campaigns.
            </p>
          </div>
        </section>

        {/* Visual Concepts Grid */}
        <section className="py-16 bg-zinc-950 border-b border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">FORMAT 01</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">3-Sec Hook Variations</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Isolating the initial seconds to test different pattern interrupts that double average watch time.</p>
                </div>
              </div>

              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">FORMAT 02</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">Kinetic Text & SFX</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Applying engaging subtitle typography and sound cues to retain sound-off mobile viewers.</p>
                </div>
              </div>

              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">FORMAT 03</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">Creator-Led UGC</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Sourcing product-unboxing reviews and problem-solving lifestyle hooks for high authenticity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Metrics Attribution Mock */}
        <section className="py-16 bg-zinc-950 border-b border-zinc-900">
          <div className={styles.container}>
            <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full pointer-events-none blur-[60px]" />
              <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">CREATIVE OPTIMIZATION</span>
                  <h3 className="font-michroma text-sm md:text-base font-semibold text-zinc-100 uppercase">Retention Benchmarks Mockup</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-primary font-mono text-xs font-bold flex items-center gap-1.5">
                  <FiActivity className="w-3.5 h-3.5 animate-pulse" />
                  AVG CPA DECREASE: -35%
                </div>
              </div>

              <div className="space-y-4">
                {performanceMetrics.map((met, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 p-4 rounded-2xl bg-black border border-zinc-800/60">
                    <div className="sm:col-span-2">
                      <span className="text-[9px] font-mono text-primary font-bold uppercase">KPI METRIC {i+1}</span>
                      <p className="text-sm font-semibold font-poppins text-zinc-100 mt-0.5">{met.metric}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-base font-bold font-mono text-white leading-none">
                        {met.current} <span className="text-zinc-500 text-xs font-normal">→</span> <span className="text-primary">{met.optimized}</span>
                      </p>
                      <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-md inline-block mt-1 font-bold">{met.diff}</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden relative">
                      <div className="bg-primary h-full rounded-full" style={{ width: met.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 md:py-28 bg-black relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>OUR WORKFLOW</Eyebrow>
              <h2 className={`${styles.heading_2} text-white uppercase`}>HOW WE SCALE WATCHTIME</h2>
              <p className={`${styles.paragraph} text-zinc-405 max-w-2xl mx-auto font-light`}>
                From creative angles to post-production tests, we keep complete focus on ad campaign profitability parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary/60">{step.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-michroma text-base font-semibold text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivered Deliverables */}
        <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>DELIVERED ASSETS</Eyebrow>
                <h2 className={`${styles.heading_2} text-white`}>WHAT YOU RECEIVE</h2>
                <p className={`${styles.paragraph} text-zinc-450 font-light`}>
                  We hand over complete high-retention video layouts, script formulas, and edited output files fully formatted and optimized for performance campaign feeds.
                </p>
                <ul className="space-y-3 pt-2">
                  {outcomes.map((out, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-300 font-poppins font-light">
                      <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full pointer-events-none blur-[40px]" />
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  CASE STUDY IN FOCUS
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  KRAFTED JEWELRY
                </h3>
                <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                  We engineered direct-response video hooks and unboxing lifestyles for jewelry campaigns. Splitting the opening three seconds of visuals reduced CAC and scaled customer engagement metrics.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+55%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">CLICK-THROUGH RATE</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">-32%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">COST PER PURCHASE (CPA)</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-black border-t border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>SCHEDULE A CONSULTATION</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-white uppercase !leading-tight`}>
              SCALE YOUR CREATIVE <br />
              <span className="text-primary">RETENTION RETRUST</span>
            </h2>
            <p className={`${styles.paragraph} text-zinc-450 max-w-2xl mx-auto font-light`}>
              Request a custom video audit. We outline 3 potential hooks and scripts for your brand's top selling products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Custom Video Script
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-zinc-800 text-zinc-300 hover:text-white hover:border-white"
              >
                All Agency Services
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 bg-primary blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
