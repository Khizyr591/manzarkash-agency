"use client";

import { motion } from "framer-motion";
import {
  FiFeather,
  FiPackage,
  FiLayers,
  FiBookOpen,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function BrandingPackagingPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Positioning",
      desc: "Interviews with founders, competitor teardowns, and a shelf-audit for retail-facing brands. We surface the emotional territory only your brand can own before a single mark is drawn.",
      icon: <FiFeather className="w-5 h-5 text-primary" />,
    },
    {
      num: "02",
      title: "Identity System",
      desc: "Logo suite, typographic scale, color palettes (screen + Pantone/CMYK), iconography, motion principles, and voice-of-brand guidelines — delivered as a working design system, not a static PDF.",
      icon: <FiLayers className="w-5 h-5 text-primary" />,
    },
    {
      num: "03",
      title: "Packaging & Structure",
      desc: "Dielines, print-ready artwork, structural mockups for boxes, sleeves, bottles, and labels. Sampled and proofed with regional printers in Pakistan before mass production.",
      icon: <FiPackage className="w-5 h-5 text-primary" />,
    },
    {
      num: "04",
      title: "Guidelines & Handover",
      desc: "A living brand guideline (Figma + PDF) with dos and don'ts, asset library exports, and template files for the recurring pieces your team will produce internally.",
      icon: <FiBookOpen className="w-5 h-5 text-primary" />,
    },
  ];

  const outcomes = [
    "Logo suite (primary, secondary, monogram, monochrome)",
    "Typographic scale with licensed brand fonts",
    "Print-ready packaging dielines & artwork (PDF/AI)",
    "Screen + print color specifications (HEX, RGB, CMYK, Pantone)",
    "Working Figma design system + brand guideline PDF",
    "Physical proofing samples from regional printers",
  ];

  const concepts = [
    {
      tag: "IDENTITY 01",
      title: "Editorial Refinement",
      desc: "Serif-anchored logotypes and generous negative space for premium, editorial-first retail brands.",
    },
    {
      tag: "IDENTITY 02",
      title: "Modern Utility",
      desc: "Geometric marks and mono-space typography for D2C brands built around speed and clarity.",
    },
    {
      tag: "IDENTITY 03",
      title: "Cultural Fusion",
      desc: "Urdu/English bilingual lockups honoring regional heritage with contemporary construction.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-50 dark selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-28 md:py-36 relative overflow-hidden w-full flex items-center justify-center bg-radial from-zinc-900 to-black border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,78,14,0.06)_0%,transparent_60%)] pointer-events-none" />

          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>BRAND DESIGN</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-white uppercase tracking-wider`}>
              BRANDING <br />
              <span className="text-primary">& PACKAGING DESIGN</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Identity systems and print-ready packaging that make your product unmistakable on a Pakistan or UAE shelf — and on a phone-sized product tile.
            </p>
          </div>
        </section>

        <section className="py-16 bg-zinc-950 border-b border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {concepts.map((c, i) => (
                <motion.div
                  key={c.tag}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-20 space-y-2">
                    <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">
                      {c.tag}
                    </span>
                    <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">
                      {c.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-black relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>OUR WORKFLOW</Eyebrow>
              <h2 className={`${styles.heading_2} text-white uppercase`}>
                FROM POSITIONING TO PACKED PRODUCT
              </h2>
              <p className={`${styles.paragraph} text-zinc-400 max-w-2xl mx-auto font-light`}>
                A four-phase process, each phase gated by founder sign-off before we move to the next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary/60">
                        {step.num}
                      </span>
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>DELIVERED ASSETS</Eyebrow>
                <h2 className={`${styles.heading_2} text-white`}>
                  WHAT YOU RECEIVE
                </h2>
                <p className={`${styles.paragraph} text-zinc-400 font-light`}>
                  Everything you need to launch — plus everything you&apos;ll need six months later when the team is producing content in-house.
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
                  KHAAS ATTIRE (PAKISTAN)
                </h3>
                <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                  We rebuilt Khaas Attire&apos;s identity from wordmark through packaging — new logo suite, custom typography, and dielines for their premium unstitched fabric boxes. Retail conversion on physical packaging lifted 34% within the first quarter.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+34%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">
                      IN-STORE CONVERSION
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">2.1×</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">
                      UNBOXING SHARE RATE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-black border-t border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>START A REBRAND</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-white uppercase !leading-tight`}>
              MAKE YOUR BRAND<br />
              <span className="text-primary">UNMISTAKABLE.</span>
            </h2>
            <p className={`${styles.paragraph} text-zinc-405 max-w-2xl mx-auto font-light`}>
              Book a brand audit call. We&apos;ll review your current identity, packaging, and shelf presence — and scope a rebrand roadmap you can act on.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<FiArrowRight className="w-4 h-4" />}
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Book Brand Audit
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
