"use client";

import { FiCode, FiCpu, FiMessageSquare, FiTrendingUp } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function Founder() {
  const philosophies = [
    {
      title: "Conversion Architecture",
      desc: "A beautiful website is useless if it doesn't convert. We engineer high-speed, custom digital experiences designed specifically to turn search and ad traffic into paying customers.",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />,
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
    <section id="founder" className="border-t border-zinc-150 dark:border-zinc-900 overflow-hidden">
      {/* Bio Section */}
      <div className="py-24 md:py-32 bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
        <div
          className={`${styles.container} grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10`}
        >
          <div className="lg:col-span-7 space-y-6 text-left">
            <Eyebrow>ABOUT THE FOUNDER</Eyebrow>
            <h2
              className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.1]! text-zinc-900 dark:text-white uppercase`}
            >
              MUHAMMAD BILAL
              <br />
              <span className="text-primary">FOUNDER & DIRECTOR</span>
            </h2>
            <p
              className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 italic font-light max-w-2xl`}
            >
              "Digital success is built on high-ROI marketing strategies and high-performance technology. We align user acquisition campaigns and robust web architectures under one unified growth workflow."
            </p>
            <div className="flex gap-4 pt-2">
              <Button href="#contact" variant="primary">
                Work With Us
              </Button>
              <Button href="/founder" variant="outline">
                Read Bilal&apos;s Story
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-primary to-orange-500 opacity-20 dark:opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute inset-0 border border-primary/20 border-dashed rounded-3xl animate-[spin_120s_linear_infinite] pointer-events-none scale-102" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl bg-zinc-50 dark:bg-zinc-900/40">
                <img
                  src="/founder.jpg"
                  alt="Muhammad Bilal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-left pointer-events-none">
                  <p className="text-[10px] font-mono tracking-widest text-primary font-bold uppercase">
                    Muhammad Bilal
                  </p>
                  <h3 className="font-michroma text-xs text-white tracking-wide uppercase mt-1">
                    Founder & Director
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-20 md:py-28 relative w-full border-b border-zinc-150 dark:border-zinc-900">
        <div className={styles.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <Eyebrow>THE PHILOSOPHY</Eyebrow>
              <h2 className={styles.heading_2}>
                FUSING HIGH-ROI MARKETING WITH ROBUST CODE
              </h2>
              <p
                className={`${styles.paragraph} font-light text-zinc-500 dark:text-zinc-400`}
              >
                Before founding Manzarkash Digital Agency, Muhammad Bilal operated as a growth strategist and digital marketing consultant in Pakistan. He repeatedly observed a critical bottleneck:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 border-l-4 border-l-primary space-y-3">
                <FiMessageSquare className="text-primary w-5 h-5" />
                <p className="text-sm font-poppins italic text-zinc-650 dark:text-zinc-350 leading-relaxed font-light">
                  "Brands were forced to split their budgets. They hired creative marketing agencies that didn't understand conversion engineering, or development shops that built functional sites but lacked marketing strategy. Manzarkash Digital Agency was founded to integrate high-performance web engineering with high-ROI marketing pipelines."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-light font-poppins">
              <p>
                At Manzarkash Digital Agency, we operate with a dual focus: we handle acquisition strategy and software engineering under a single, highly integrated team.
              </p>
              <p>
                From writing serverless Next.js API webhooks and configuring Meta performance ad events to mapping search intent for search engine dominance, every campaign we run is architected to optimize your brand's growth and ROI.
              </p>
              <p>
                Today, we support a growing network of partners across Pakistan, designing fast e-commerce architectures, dominating search metrics, and establishing high-yield digital presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Convictions Section */}
      <div className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/20 relative w-full">
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
      </div>
    </section>
  );
}
