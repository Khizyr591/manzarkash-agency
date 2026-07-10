"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const HERO_POINTS = [
  "Fixed monthly retainer, no surprise line items",
  "AED / PKR billing paired to your market",
  "Break the agreement any time after month three",
];

export default function PricingHero() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
      <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <Eyebrow>PRICING & PACKAGES</Eyebrow>
          <h1
            className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.05]! text-zinc-900 dark:text-white uppercase`}
          >
            Retainer pricing<br />
            <span className="text-primary">built for growth.</span>
          </h1>
          <p
            className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}
          >
            One flat monthly fee. A defined scope. Real deliverables tied to KPIs. Choose your starting tier — we&apos;ll adjust as your growth curve calls for it.
          </p>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 text-sm"
        >
          {HERO_POINTS.map((p) => (
            <motion.li
              key={p}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
            >
              <FiCheckCircle className="w-4 h-4 text-primary" />
              {p}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[100px]" />
    </section>
  );
}
