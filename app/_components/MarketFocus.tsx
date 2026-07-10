"use client";

import { FiGlobe, FiMapPin } from "react-icons/fi";
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
  const pointsGlobal = [
    { title: "On-Ground UAE Coverage", desc: "Timezone-aligned operations out of our Dubai studio (GST +4) ensuring same-day response for retail partners across Dubai, Abu Dhabi, and Sharjah." },
    { title: "Gulf-Grade Design & Tech Standards", desc: "No templates or boilerplate. High-end custom website development and premium minimalist interface designs tuned for the UAE market." },
    { title: "AED ROI-Retention Driven", desc: "Data-driven marketing focused on lowering Customer Acquisition Cost (CAC) and scaling Life-Time Value (LTV) in AED-denominated funnels." }
  ];

  const pointsLocal = [
    { title: "Hyper-Localized Demographics", desc: "Deep cultural alignment across major metropolitan centers (Karachi, Lahore, Islamabad) and regional hubs." },
    { title: "Bilingual Storytelling (Urdu & English)", desc: "Targeted localized copywriting that translates global products into Urdu colloquialisms that trigger purchases." },
    { title: "PKR Efficiency Optimizations", desc: "Maximizing budget yield with local ad channels, WhatsApp sales funnel automations, and local influencer partnerships." }
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
            DUAL-FOCUS MARKET EXPERTISE
          </h2>
          <p className={styles.paragraph}>
            Engineered to scale UAE brand ventures while executing hyper-local Pakistan campaigns that capture the hearts and wallets of both markets.
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
                <FiGlobe className="w-8 h-8" />
              </div>
              <h3 className={styles.heading_3}>
                Gulf Standards <span className={`${styles.caption_text} !text-zinc-500 italic block mt-1`}>UAE Market</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Custom solutions designed to dominate the UAE retail arena, utilizing cutting-edge technologies and performance-driven metrics.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {pointsGlobal.map((point) => (
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
                <FiMapPin className="w-8 h-8" />
              </div>
              <h3 className={styles.heading_3}>
                Hyper-Local Nuances <span className={`${styles.caption_text} !text-zinc-500 italic block mt-1`}>Pakistan Domestic Market</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Harnessing deep regional market demographics, regionalized customer funnels, and optimized local digital ad platforms.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {pointsLocal.map((point) => (
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
