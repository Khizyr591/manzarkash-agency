"use client";

import { FiCamera, FiCode, FiCpu, FiMessageSquare } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function FounderPage() {
  const philosophies = [
    {
      title: "Visual Dominance",
      desc: "If a brand's creative assets look cheap, no amount of marketing budget will save it. We capture cinema-lit, professional visuals that convey premium value at first glance.",
      icon: <FiCamera className="w-5 h-5 text-primary" />,
    },
    {
      title: "Engineering Mastery",
      desc: "Speed is a feature. Custom theme engineering, API optimizations, and clean code guarantee a fast, seamless checkout layout that converts visitors into partners.",
      icon: <FiCode className="w-5 h-5 text-primary" />,
    },
    {
      title: "System Leverage",
      desc: "Automate everything that is repetitive. Through robust webhooks and conversational AI bots, we construct systems that scale without adding administrative burden.",
      icon: <FiCpu className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div
            className={`${styles.container} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10`}
          >
            <div className="lg:col-span-7 space-y-6 text-left">
              <Eyebrow>ABOUT THE FOUNDER</Eyebrow>
              <h1
                className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.1]! text-zinc-900 dark:text-white uppercase`}
              >
                MUHAMMAD BILAL
                <br />
                <span className="text-primary">FOUNDER & DIRECTOR</span>
              </h1>
              <p
                className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 italic font-light max-w-2xl`}
              >
                "Digital success is not a choice between beautiful visuals and
                fast code. We shoot studio product imagery and write
                high-performance React architectures under one unified
                workflow."
              </p>
              <div className="flex gap-4 pt-2">
                <Button href="/#contact" variant="primary">
                  Work With Us
                </Button>
                <Button href="/portfolio" variant="outline">
                  Explore Portfolio
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-4 bg-zinc-50 dark:bg-zinc-900/40 shadow-xl overflow-hidden group">
                <div className="absolute inset-0 rounded-full opacity-5 bg-radial from-primary to-transparent blur-md group-hover:opacity-10 transition-opacity duration-700" />
                <div className="text-center space-y-4 relative z-10 p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                    <FiCamera className="w-8 h-8" />
                  </div>
                  <h3 className="font-michroma text-lg font-bold text-zinc-800 dark:text-zinc-100 tracking-wide uppercase">
                    MANZARKASH
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-zinc-450 dark:text-zinc-500 uppercase leading-relaxed max-w-[200px] mx-auto">
                    ESTABLISHED IN 2021
                    <br />
                    KARACHI, PAKISTAN
                  </p>
                </div>
                <div className="absolute inset-0 border border-primary/20 border-dashed rounded-full animate-[spin_60s_linear_infinite]" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-20 dark:opacity-5 bg-primary/20 blur-[100px]" />
        </section>

        <section className="py-20 md:py-28 relative w-full border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>THE PHILOSOPHY</Eyebrow>
                <h2 className={styles.heading_2}>
                  FUSING CREATIVE ART WITH ROBUST CODE
                </h2>
                <p
                  className={`${styles.paragraph} font-light text-zinc-500 dark:text-zinc-400`}
                >
                  Before founding Manzarkash, Muhammad Bilal operated as a
                  commercial photographer and visual stylist in Karachi. He
                  repeatedly observed a critical bottleneck:
                </p>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 border-l-4 border-l-primary space-y-3">
                  <FiMessageSquare className="text-primary w-5 h-5" />
                  <p className="text-sm font-poppins italic text-zinc-650 dark:text-zinc-350 leading-relaxed font-light">
                    "Brands were forced to split their budgets. They hired
                    creative visual agencies that didn't understand conversion
                    coding, or software houses that built functional stores but
                    lacked visual aesthetics. Manzarkash was founded to
                    eliminate this trade-off."
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6 text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-light font-poppins">
                <p>
                  At Manzarkash, we operate with a dual focus: we handle visual
                  asset creation and software engineering under a single, highly
                  integrated team.
                </p>
                <p>
                  From setting up light angles and capturing studio product
                  catalogs to writing serverless Next.js API webhooks and
                  configuring Meta performance ad events, every campaign we run
                  is architected to optimize your brand's ROI.
                </p>
                <p>
                  Today, we support a growing network of partners across
                  Pakistan and the UAE, designing fast stores, dominating search
                  metrics, and establishing digital presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/20 relative w-full">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>CORE CONVICTIONS</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>
                HOW THE AGENCY THINKS
              </h2>
              <p className={styles.paragraph}>
                The principles driving our team workflow and client retainers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophies.map((phil, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                      {phil.icon}
                    </div>
                    <h3
                      className={`${styles.heading_4} text-lg! text-zinc-900 dark:text-white font-bold!`}
                    >
                      {phil.title}
                    </h3>
                    <p
                      className={`${styles.span_text} text-sm! text-zinc-500 dark:text-zinc-400 leading-relaxed font-light`}
                    >
                      {phil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden border-t border-zinc-150 dark:border-zinc-900 bg-white dark:bg-black">
          <div
            className={`${styles.container} max-w-3xl space-y-8 relative z-10`}
          >
            <Eyebrow>DISCOVER OPPORTUNITIES</Eyebrow>
            <h2
              className={`${styles.heading_2} text-3xl! sm:text-5xl! text-zinc-900 dark:text-white uppercase leading-tight!`}
            >
              SCALE YOUR DIGITAL <span className="text-primary">SCENERY</span>
            </h2>
            <p className={styles.paragraph}>
              Connect with Muhammad Bilal and the team for a custom project
              discovery audit and review how we can drive results for your
              brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Book a Scoping Session
              </Button>
              <Button
                href="https://wa.me/923313936011"
                target="_blank"
                variant="outline"
                size="lg"
                className="border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900"
              >
                Chat via WhatsApp
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
