"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import styles from "@/lib/styles";
import type { CaseStudy } from "./types";

const MARKETS = ["All", "Pakistan", "UAE"] as const;
const CATEGORIES = [
  "All",
  "E-Commerce Engineering",
  "Performance Ads",
  "SEO & Content",
  "Visual Production",
  "WhatsApp Automation",
  "Creative Production",
] as const;

export default function CaseStudiesGrid({ cases }: { cases: CaseStudy[] }) {
  const [market, setMarket] = useState<(typeof MARKETS)[number]>("All");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      cases.filter(
        (c) =>
          (market === "All" || c.market === market) &&
          (category === "All" || c.category === category),
      ),
    [cases, market, category],
  );

  return (
    <section className="py-16 md:py-24 relative w-full border-b border-zinc-150 dark:border-zinc-900">
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex flex-wrap gap-2">
            {MARKETS.map((m) => (
              <button
                key={m}
                onClick={() => setMarket(m)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                  market === m
                    ? "bg-primary text-white border border-primary shadow-md"
                    : "bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-primary/40"
                }`}
              >
                {m} Market
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all ${
                  category === c
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border border-zinc-900 dark:border-white"
                    : "bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${market}-${category}`}
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {filtered.map((c, idx) => (
              <motion.article
                key={c.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-orange-400/5" />

                <div className="relative p-8 md:p-10 space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 font-bold">
                        {c.market}
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[9px] font-mono uppercase tracking-widest bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 border border-zinc-300/50 dark:border-zinc-700/50">
                        {c.category}
                      </span>
                    </div>
                    <FiArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                      {c.client}
                    </p>
                    <h3 className={`${styles.heading_3} text-xl! md:text-2xl! group-hover:text-primary transition-colors`}>
                      {c.headline}
                    </h3>
                  </div>

                  <p className={`${styles.paragraph_sm} text-zinc-500 dark:text-zinc-400 leading-relaxed`}>
                    {c.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2 pb-2 border-y border-zinc-200/60 dark:border-zinc-800/60">
                    <div>
                      <p className={`${styles.heading_2} text-2xl! md:text-3xl! text-primary font-bold! leading-none`}>
                        {c.metric}
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">
                        {c.metricLabel}
                      </p>
                    </div>
                    <div>
                      <p className={`${styles.heading_2} text-2xl! md:text-3xl! text-zinc-900 dark:text-white font-bold! leading-none`}>
                        {c.revenue}
                      </p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">
                        {c.revenueLabel}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {c.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-poppins">
                        <FiCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-500 border border-zinc-200/50 dark:border-zinc-800/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No case studies match this filter yet — check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
