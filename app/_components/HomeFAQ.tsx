"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const FAQS = [
  {
    q: "Which markets does Manzarkash actively serve?",
    a: "We operate two studios — Karachi (Pakistan) and Dubai (UAE) — and take retainers exclusively from brands trading in one or both of those markets. Pricing, contracts, and creative are all localized to each market.",
  },
  {
    q: "Do you handle both visual production and code, or do you sub-contract?",
    a: "Both are in-house. Our team ships the studio photography, the Shopify or Next.js build, the paid ad creative, and the WhatsApp automation from a single roof. That eliminates the hand-off gap most agencies charge extra to bridge.",
  },
  {
    q: "How is a retainer scoped for a brand my size?",
    a: "We publish three baseline tiers on our pricing page (Launch, Scale, Enterprise) with transparent monthly rates in USD, AED, and PKR. If your needs sit between tiers, we scope a bespoke retainer during the discovery call — no template contracts.",
  },
  {
    q: "How fast can we start after a signed SOW?",
    a: "48 hours from signed SOW to first sprint kickoff. Onboarding week focuses on brand audit, asset access, and KPI benchmarks; production sprints begin in week two.",
  },
  {
    q: "How do you measure and report ROI?",
    a: "Every retainer ships with GA4, Search Console, and platform-native attribution (Meta Ads Manager, Google Ads, TikTok) wired to a shared reporting workspace. Scale and Enterprise clients get a real-time dashboard; Launch clients get weekly written reports.",
  },
  {
    q: "Can you work with brands outside Pakistan and the UAE?",
    a: "Occasionally, when the founder team resonates with the mission. But our operational focus — timezones, cultural nuance, local platform expertise — is calibrated for Pakistan and the UAE. Outside those markets, we&apos;ll recommend a specialist partner instead.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a.replace(/&apos;/g, "'"),
      },
    })),
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-900"
      aria-label="Frequently asked questions"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <Eyebrow>FREQUENTLY ASKED</Eyebrow>
          <h2 className={styles.heading_2}>QUESTIONS BEFORE WE START</h2>
          <p className={styles.paragraph}>
            The most common questions we hear from Pakistan and UAE brand operators before signing a retainer.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/60 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-poppins font-semibold text-zinc-900 dark:text-white">
                  {f.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-primary"
                >
                  <FiPlus className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-zinc-600 dark:text-zinc-400 font-poppins leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
