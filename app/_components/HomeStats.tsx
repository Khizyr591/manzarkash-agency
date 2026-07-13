"use client";

import { motion } from "framer-motion";
import { FiUsers, FiDollarSign, FiClock, FiTrendingUp } from "react-icons/fi";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const STATS = [
  { icon: <FiUsers />, value: 120, suffix: "+", label: "Brands Scaled", note: "Across Pakistan" },
  { icon: <FiDollarSign />, value: 4.8, suffix: "M+", prefix: "$", label: "Revenue Attributed", note: "To campaigns we ran" },
  { icon: <FiClock />, value: 48, suffix: "hr", label: "Onboarding SLA", note: "Signed to first sprint" },
  { icon: <FiTrendingUp />, value: 3.2, suffix: "x", label: "Average ROAS", note: "Across client campaigns" },
];

export default function HomeStats() {
  return (
    <section
      className="py-20 md:py-24 bg-zinc-50/40 dark:bg-zinc-950/40 border-y border-zinc-150 dark:border-zinc-900 relative w-full overflow-hidden"
      aria-label="Manzarkash by the numbers"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.06] bg-primary blur-[140px]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <Eyebrow>BY THE NUMBERS</Eyebrow>
          <h2 className={styles.heading_2}>WORK THAT COMPOUNDS</h2>
          <p className={styles.paragraph}>
            Four years of retail-grade operations across two markets. Every number below is attributed and auditable.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-3xl p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <p className={`${styles.heading_2} text-xl! min-[360px]:text-2xl! sm:text-3xl! md:text-5xl! text-zinc-900 dark:text-white font-bold! leading-none tabular-nums`}>
                {s.prefix ?? ""}
                <AnimatedCounter value={s.value} suffix={s.suffix ?? ""} decimals={String(s.value).includes(".") ? 1 : 0} />
              </p>
              <p className={`${styles.label_text} text-sm! text-zinc-900 dark:text-white mt-3 font-semibold!`}>
                {s.label}
              </p>
              <p className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400 mt-1`}>
                {s.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
