"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const FAQS = [
  {
    q: "How is the retainer billed for UAE vs Pakistan clients?",
    a: "UAE retainers are billed in AED (or USD equivalent) to match Gulf procurement conventions. Pakistan retainers are billed in PKR at localized rates. Both include tax invoices and match to your legal entity's fiscal cadence.",
  },
  {
    q: "What is included in the 3-month minimum?",
    a: "Growth compounds — most channels (SEO, paid, WhatsApp funnels) need 60–90 days of iteration before they hit optimized state. The minimum protects both sides from cancelling before results materialize. After month three you can move month-to-month.",
  },
  {
    q: "Can I mix and match services from different tiers?",
    a: "Yes. If you only need visuals and paid ads (no engineering), we&apos;ll scope a bespoke retainer. Contact us for a custom quote — most bespoke plans land between Launch and Scale pricing.",
  },
  {
    q: "Do you charge separately for ad spend?",
    a: "Yes. Retainer fees cover our team's work — strategy, creative, execution, and reporting. Media spend (Meta, Google, TikTok) is billed directly by the platforms to your account. We recommend a media budget at least 1× your retainer to hit meaningful scale.",
  },
  {
    q: "What if I need to pause the retainer mid-project?",
    a: "You can pause once per year for up to 30 days without penalty (after the 3-month minimum). Pause requests need 14 days' notice so we can wind down active campaigns cleanly.",
  },
  {
    q: "How quickly can we start after signing?",
    a: "48 hours from signed SOW to first sprint kickoff. Onboarding week focuses on brand audit, asset access, and KPI benchmarks; production sprints begin in week two.",
  },
];

export default function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 border-t border-zinc-150 dark:border-zinc-900 bg-white dark:bg-black">
      <div className={styles.container}>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <Eyebrow>PRICING FAQ</Eyebrow>
            <h2 className={styles.heading_2}>WHAT PARTNERS ASK</h2>
            <p className={styles.paragraph}>
              The questions we hear most often before contracts get signed.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={f.q}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
