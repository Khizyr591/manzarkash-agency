"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { FiSearch, FiCode, FiTrendingUp, FiCpu } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const CAPABILITIES = [
  { icon: <FiTrendingUp className="w-4 h-4" />, label: "Performance Ads" },
  { icon: <FiSearch className="w-4 h-4" />, label: "Search SEO" },
  { icon: <FiCode className="w-4 h-4" />, label: "Custom Engineering" },
  { icon: <FiCpu className="w-4 h-4" />, label: "WhatsApp Automation" },
];

const STATS = [
  { value: "120+", label: "Brands Scaled", note: "Across Pakistan" },
  { value: "$4.8M+", label: "Revenue Attributed", note: "To client campaigns" },
  { value: "48hr", label: "Onboarding SLA", note: "SOW to first sprint" },
  { value: "3.2x", label: "Average ROAS", note: "Across ads channels" },
];

export default function SceneryReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });

  const phase1Opacity = useTransform(smooth, [0, 0.18, 0.28], [1, 1, 0]);
  const phase1Y = useTransform(smooth, [0, 0.28], [0, -40]);

  const phase2Opacity = useTransform(smooth, [0.28, 0.42, 0.6, 0.72], [0, 1, 1, 0]);
  const phase2Y = useTransform(smooth, [0.28, 0.42, 0.6, 0.72], [40, 0, 0, -30]);

  const phase3Opacity = useTransform(smooth, [0.7, 0.82], [0, 1]);
  const phase3Y = useTransform(smooth, [0.7, 0.82], [50, 0]);

  const bgHueShift = useTransform(smooth, [0, 1], [0, 20]);
  const orb1Filter = useTransform(bgHueShift, (v) => `hue-rotate(${v}deg)`);
  const orbScale = useTransform(smooth, [0, 0.5, 1], [1, 2.4, 3.2]);
  const orbOpacity = useTransform(smooth, [0, 0.35, 0.7, 1], [0.25, 0.55, 0.4, 0.55]);

  const gridOpacity = useTransform(smooth, [0, 0.35, 0.75], [0.08, 0.18, 0.06]);

  const chipY = useTransform(smooth, [0.28, 0.55], [40, 0]);

  return (
    <section
      id="scenery-reveal"
      ref={containerRef}
      className="relative h-[260vh] w-full z-20"
      aria-label="How Manzarkash defines the digital scenery"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-700">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-primary/25 blur-[130px] pointer-events-none"
          style={reduce ? { opacity: 0.35 } : { scale: orbScale, opacity: orbOpacity, filter: orb1Filter }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-400/20 blur-[110px] pointer-events-none"
          style={reduce ? { opacity: 0.3 } : { scale: orbScale, opacity: orbOpacity }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
          style={{
            opacity: gridOpacity,
            WebkitMaskImage: "radial-gradient(60% 55% at 50% 50%, #000 60%, transparent 100%)",
            maskImage: "radial-gradient(60% 55% at 50% 50%, #000 60%, transparent 100%)",
          }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{ opacity: phase1Opacity, y: phase1Y }}
        >
          <Eyebrow>THE MANZARKASH METHOD</Eyebrow>
          <h2
            className={`${styles.heading_1} text-4xl! md:text-6xl! lg:text-7xl! bg-linear-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent tracking-tight leading-[1.05] uppercase font-semibold! max-w-4xl`}
          >
            One digital system.<br className="hidden md:block" />{" "}
            <span className="text-primary bg-linear-to-r from-primary to-orange-400 bg-clip-text text-transparent">Attuned to Pakistan.</span>
          </h2>
          <p className={`${styles.paragraph} text-base! md:text-lg! text-zinc-500 dark:text-zinc-400 italic max-w-xl leading-relaxed!`}>
            High-conversion ad creatives, high-performance engineering, and search optimization — engineered for growth in Pakistan.
          </p>

          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="w-6 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex justify-center pt-2.5">
              <motion.div
                animate={reduce ? {} : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
            <span className={`${styles.caption_text} text-[10px]! tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500`}>
              scroll to reveal
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-10 px-6 text-center"
          style={{ opacity: phase2Opacity, y: phase2Y }}
        >
          <Eyebrow>WHAT WE DELIVER</Eyebrow>
          <h3 className={`${styles.heading_2} text-3xl! md:text-5xl! text-zinc-900 dark:text-white uppercase tracking-tight max-w-4xl leading-[1.1]!`}>
            Numbers, not narratives.
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl w-full px-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                style={{ y: chipY }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl p-5 md:p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-800/60 text-left"
              >
                <p className={`${styles.heading_2} text-2xl! md:text-4xl! text-primary font-bold! leading-none`}>
                  {s.value}
                </p>
                <p className={`${styles.label_text} text-sm! text-zinc-900 dark:text-white mt-2 font-semibold!`}>
                  {s.label}
                </p>
                <p className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400 mt-1`}>
                  {s.note}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl pt-2">
            {CAPABILITIES.map((c) => (
              <span
                key={c.label}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 ${styles.caption_text} font-medium!`}
              >
                <span className="text-primary">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center"
          style={{ opacity: phase3Opacity, y: phase3Y }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
            <Eyebrow variant="white">LET&apos;S WORK TOGETHER</Eyebrow>
            <h2 className={`${styles.heading_1} text-4xl! md:text-6xl! lg:text-7xl! text-white tracking-tight leading-[1.05] font-semibold! uppercase`}>
              Ready to define your{" "}
              <span className="bg-linear-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                scenery?
              </span>
            </h2>
            <p className={`${styles.paragraph} text-base! md:text-lg! text-white/80 italic max-w-xl leading-relaxed!`}>
              Book a 30-minute discovery call. We&apos;ll audit your funnel, identify the highest-ROI moves for your market, and scope a retainer that pays for itself.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-300"
              >
                Start My Project
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm"
              >
                See Case Studies
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2 text-white/50 text-xs font-mono tracking-widest uppercase">
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Pakistan · Live
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
