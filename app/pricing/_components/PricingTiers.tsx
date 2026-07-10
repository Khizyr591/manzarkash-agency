"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

type Currency = "USD" | "AED" | "PKR";

const RATES: Record<Currency, { symbol: string; rate: number; suffix: string }> = {
  USD: { symbol: "$", rate: 1, suffix: "/mo" },
  AED: { symbol: "AED ", rate: 3.67, suffix: "/mo" },
  PKR: { symbol: "PKR ", rate: 280, suffix: "/mo" },
};

const TIERS = [
  {
    name: "Launch",
    priceUsd: 1200,
    tagline: "For brands going digital for the first time.",
    features: [
      "1 studio product shoot (up to 15 SKUs)",
      "1 landing page or Shopify starter theme",
      "1 paid ad channel (Meta OR Google)",
      "Monthly WhatsApp broadcast setup",
      "GA4 + Search Console configuration",
      "Bi-weekly performance review call",
    ],
    highlighted: false,
    cta: "Start with Launch",
  },
  {
    name: "Scale",
    priceUsd: 3200,
    tagline: "For growing brands ready to compound results.",
    features: [
      "Monthly studio content refresh (30+ deliverables)",
      "Custom e-commerce theme + ongoing engineering",
      "Meta + Google + TikTok paid stack",
      "Full SEO retainer (content + technical)",
      "WhatsApp Cloud API bot with CRM sync",
      "Weekly sprint reviews + Slack channel",
      "Dedicated project lead across studios",
    ],
    highlighted: true,
    cta: "Book Scale Call",
  },
  {
    name: "Enterprise",
    priceUsd: 7500,
    tagline: "For established brands optimizing at scale.",
    features: [
      "Everything in Scale, priority queued",
      "Multi-region campaign orchestration",
      "Custom automation & CRM integrations",
      "Weekly strategist + engineering syncs",
      "Real-time ROI dashboard access",
      "Priority SLAs on production requests",
      "Quarterly on-site strategy day",
    ],
    highlighted: false,
    cta: "Talk to Enterprise",
  },
];

function formatPrice(usd: number, currency: Currency) {
  const { symbol, rate, suffix } = RATES[currency];
  const converted = usd * rate;
  const rounded =
    currency === "PKR" ? Math.round(converted / 100) * 100 : Math.round(converted);
  const formatted = rounded.toLocaleString("en-US");
  return `${symbol}${formatted}${suffix}`;
}

export default function PricingTiers() {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section className="py-20 md:py-28 relative w-full border-b border-zinc-150 dark:border-zinc-900">
      <div className={styles.container}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <Eyebrow>MONTHLY RETAINERS</Eyebrow>
            <h2 className={styles.heading_2}>THREE TIERS. ONE OUTCOME.</h2>
          </div>
          <div className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-1 shrink-0">
            {(Object.keys(RATES) as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-widest transition-all ${
                  currency === c
                    ? "bg-white dark:bg-black text-zinc-900 dark:text-white shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {TIERS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative rounded-3xl p-8 md:p-10 flex flex-col ${
                t.highlighted
                  ? "bg-gradient-to-b from-primary/5 via-white dark:from-primary/10 dark:via-zinc-900 to-white dark:to-zinc-900 border-2 border-primary/40 shadow-2xl shadow-primary/10 scale-100 lg:scale-105"
                  : "bg-white dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 shadow-md"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-mono uppercase tracking-widest font-bold shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="space-y-2 mb-6">
                <h3 className={`${styles.heading_3} text-2xl! uppercase`}>{t.name}</h3>
                <p className={`${styles.paragraph_sm} text-zinc-500 dark:text-zinc-400 italic`}>
                  {t.tagline}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-zinc-200/60 dark:border-zinc-800/60">
                <div className={`${styles.heading_1} text-4xl! font-bold! text-zinc-900 dark:text-white leading-none`}>
                  {formatPrice(t.priceUsd, currency)}
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mt-2">
                  Billed monthly · 3-month minimum
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-poppins"
                  >
                    <FiCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={t.highlighted ? "primary" : "outline"}
                size="md"
                rightIcon={<FiArrowRight className="w-4 h-4" />}
                className="w-full!"
              >
                {t.cta}
              </Button>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs font-mono uppercase tracking-widest text-zinc-500 mt-10">
          Custom scope? <a href="/contact" className="text-primary hover:underline">Request a bespoke quote →</a>
        </p>
      </div>
    </section>
  );
}
