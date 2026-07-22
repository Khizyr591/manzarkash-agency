"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiExternalLink, FiFileText, FiFilm } from "react-icons/fi";
import styles from "@/lib/styles";
import type { CaseStudy } from "./types";
import PdfPreviewModal from "@/components/ui/PdfPreviewModal";

const MARKETS = ["All", "Pakistan", "UAE", "International"] as const;
const CATEGORIES = [
  "All",
  "Branding & Web Engineering",
  "Enterprise Web & Branding",
  "Luxury Hospitality & Branding",
  "Visual Production",
  "Creative Production",
  "E-Commerce Engineering",
  "Performance Ads",
  "SEO & Content",
  "WhatsApp Automation",
] as const;

export default function CaseStudiesGrid({ cases }: { cases: CaseStudy[] }) {
  const [market, setMarket] = useState<(typeof MARKETS)[number]>("All");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [selectedMedia, setSelectedMedia] = useState<{
    url: string;
    title: string;
    websiteUrl?: string;
    mediaType?: "pdf" | "video";
  } | null>(null);

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
      {selectedMedia && (
        <PdfPreviewModal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          pdfUrl={selectedMedia.url}
          title={selectedMedia.title}
          websiteUrl={selectedMedia.websiteUrl}
          mediaType={selectedMedia.mediaType}
        />
      )}

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
          <div className="flex flex-wrap gap-2 max-w-2xl">
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
                    {c.websiteUrl ? (
                      <a
                        href={c.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-primary transition-colors"
                        title="Visit website"
                      >
                        <FiArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ) : (
                      <FiArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    )}
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

                  {(c.websiteUrl || c.pdfUrl || c.videoUrl) && (
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60">
                      {c.websiteUrl && (
                        <a
                          href={c.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-colors"
                        >
                          <span>Visit Live Website</span>
                          <FiExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {c.pdfUrl && (
                        <button
                          onClick={() =>
                            setSelectedMedia({
                              url: c.pdfUrl!,
                              title: `${c.client} — Brand & Architecture Document`,
                              websiteUrl: c.websiteUrl,
                              mediaType: "pdf",
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 font-semibold transition-all cursor-pointer"
                        >
                          <FiFileText className="w-3.5 h-3.5" />
                          <span>{c.pdfLabel || "View PDF Document"}</span>
                        </button>
                      )}
                      {c.videoUrl && (
                        <button
                          onClick={() =>
                            setSelectedMedia({
                              url: c.videoUrl!,
                              title: `${c.client} — Campaign Video Asset`,
                              websiteUrl: c.websiteUrl,
                              mediaType: "video",
                            })
                          }
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-800 hover:bg-primary text-zinc-200 hover:text-white border border-zinc-700 font-semibold transition-all cursor-pointer"
                        >
                          <FiFilm className="w-3.5 h-3.5 text-primary group-hover:text-white" />
                          <span>{c.videoLabel || "Watch Video Asset"}</span>
                        </button>
                      )}
                    </div>
                  )}
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
