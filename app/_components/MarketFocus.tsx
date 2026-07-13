"use client";

import { FiTarget, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "@/lib/styles";

const cardLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
} as const;

const cardRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
} as const;

export default function MarketFocus() {
  const pointsMarketing = [
    { title: "Conversion-Focused Ad Creatives", desc: "High-impact social ad creatives (banners, carousels, and videos) built specifically to hook buyers and maximize ROAS on Meta and TikTok." },
    { title: "Bilingual Copywriting (Urdu & English)", desc: "Targeted localized copy that translates complex product value propositions into engaging Urdu colloquialisms that trigger purchases." },
    { title: "Precision Event Attribution & Tracking", desc: "Full Pixel and GA4 integration auditing, checking API webhooks to ensure zero attribution leakage and accurate CAPI event matching." }
  ];

  const pointsEngineering = [
    { title: "Bespoke Web Development", desc: "Custom theme design on Shopify and highly optimized Next.js frameworks built for extreme speed and frictionless user checkouts." },
    { title: "Core Web Vitals Perfection", desc: "Targeting a 99/100 PageSpeed standard, reducing time-to-interactive so mobile traffic stays on-site and converts instead of bouncing." },
    { title: "WhatsApp Automation & Retention", desc: "Building custom database-synced automated support bots and order notifications that dramatically lower overhead and raise retention." }
  ];

  return (
    <section id="market-focus" className="py-20 md:py-28 relative overflow-hidden w-full">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24"
        >
          <h2 className={styles.heading_2}>
            ROI-DRIVEN GROWTH EXPERTISE
          </h2>
          <p className={styles.paragraph}>
            We combine high-performance web engineering with hyper-targeted paid advertising campaigns to scale retail brands across Pakistan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            variants={cardLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative rounded-3xl p-8 md:p-10 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xl overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary">
                <FiTarget className="w-8 h-8" />
              </div>
              <h3 className={styles.heading_3}>
                Performance Ads <span className={`${styles.caption_text} !text-zinc-500 italic block mt-1`}>Paid Marketing Strategy</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Direct-response paid campaigns designed to hook audiences, lower customer acquisition costs, and scale revenue.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-150 dark:border-zinc-800">
                {pointsMarketing.map((point) => (
                  <div key={point.title} className="space-y-1">
                    <h4 className={`${styles.label_text} !text-sm text-black dark:text-white flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point.title}
                    </h4>
                    <p className={`${styles.caption_text} !text-zinc-500 dark:text-zinc-400 pl-3.5 leading-relaxed`}>{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative rounded-3xl p-8 md:p-10 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-xl overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
            <div className="space-y-6">
              <div className="inline-flex p-3 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary">
                <FiCode className="w-8 h-8" />
              </div>
              <h3 className={styles.heading_3}>
                Conversion Dev <span className={`${styles.caption_text} !text-zinc-500 italic block mt-1`}>Web Design & Engineering</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Fast, responsive storefront architectures engineered to reduce friction and capture search rankings.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-150 dark:border-zinc-800">
                {pointsEngineering.map((point) => (
                  <div key={point.title} className="space-y-1">
                    <h4 className={`${styles.label_text} !text-sm text-black dark:text-white flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point.title}
                    </h4>
                    <p className={`${styles.caption_text} !text-zinc-500 dark:text-zinc-400 pl-3.5 leading-relaxed`}>{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
