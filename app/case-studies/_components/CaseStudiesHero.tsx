"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

export default function CaseStudiesHero({ total }: { total: number }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
      <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <Eyebrow>ATTRIBUTED RESULTS</Eyebrow>
          <h1
            className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.05]! text-zinc-900 dark:text-white uppercase`}
          >
            {total}+ growth<br />
            <span className="text-primary">stories, one system.</span>
          </h1>
          <p
            className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}
          >
            Every case study below ties back to money — revenue lifted, pipeline built, budgets recovered. No vanity metrics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {["E-Commerce", "Performance Ads", "SEO & Content", "Visual Production", "WhatsApp Automation"].map((tag) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 ${styles.caption_text} font-medium!`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[100px]" />
    </section>
  );
}
