"use client";

import { FiGlobe, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "@/app/styles/styles";

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
    { title: "24/7 Operations & Coverage", desc: "Seamless timezone alignments ensuring round-the-clock developer and marketer coverage for USA, UK, and Gulf clients." },
    { title: "Silicon Valley Design & Tech Standards", desc: "No templates or boilerplate. High-end custom website development and premium minimalist interface designs." },
    { title: "ROI & Dollar-Retention Driven", desc: "Data-driven marketing focused on lowering Customer Acquisition Cost (CAC) and scaling Life-Time Value (LTV)." }
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
            Engineered to scale global ventures while executing hyper-local campaigns that capture the hearts and wallets of local consumers.
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
                Global Standards <span className="font-poppins font-light text-zinc-500 italic block mt-1">International Clients</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Custom solutions designed to dominate international arenas, utilizing cutting-edge technologies and performance-driven metrics.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {pointsGlobal.map((point) => (
                  <div key={point.title} className="space-y-1">
                    <h4 className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-3.5 leading-relaxed">{point.desc}</p>
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
                Hyper-Local Nuances <span className="font-poppins font-light text-zinc-500 italic block mt-1">Pakistan Domestic Market</span>
              </h3>
              <p className={styles.paragraph_sm}>
                Harnessing deep regional market demographics, regionalized customer funnels, and optimized local digital ad platforms.
              </p>
              <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {pointsLocal.map((point) => (
                  <div key={point.title} className="space-y-1">
                    <h4 className="text-sm font-semibold text-black dark:text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 pl-3.5 leading-relaxed">{point.desc}</p>
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
