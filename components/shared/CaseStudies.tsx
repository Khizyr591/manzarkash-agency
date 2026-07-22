"use client";

import { motion } from "framer-motion";
import styles from "@/lib/styles";
import Eyebrow from "@/components/ui/Eyebrow";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function CaseStudies() {
  const cases = [
    {
      metric: "100%",
      label: "Bespoke Brand System",
      title: "Newbury UAE (Dubai)",
      desc: "Designed and engineered the signature brand identity system and responsive web platform at newbury.ae. Delivered full 2.7MB Brandbook PDF guidelines defining wordmark typography and color scales.",
      highlight: "Web Platform Live & Deployed",
    },
    {
      metric: "21.9MB",
      label: "Enterprise Architecture",
      title: "Clutec Technology",
      desc: "Architected a multi-tiered brand guideline system (5.5MB) and complete 21.9MB technical web architecture design document mapping enterprise recycling and tech workflows.",
      highlight: "Full Enterprise Rebrand & Web Blueprint",
    },
    {
      metric: "+240%",
      label: "UGC Video Conversion Lift",
      title: "Lushly (lushly.pk)",
      desc: "Produced and edited high-converting UGC creator video deliverables for Lushly frozen fruit ice lollies, driving record direct-to-consumer online orders and TikTok ad engagement.",
      highlight: "High-Def Fruit Lolly Video Campaign",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 relative w-full">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24"
        >
          <div className="space-y-4 max-w-2xl">
            <Eyebrow>CASE STUDIES</Eyebrow>
            <h2 className={styles.heading_2}>
              RESULTS THAT DELIVER VALUE
            </h2>
          </div>
          <div>
            <p className={styles.paragraph}>
              We focus on metrics that impact your financial bottom line:
              clicks, conversions, and revenue.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {cases.map((c, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeInOut" } }}
              className="relative rounded-3xl p-8 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className={`${styles.heading_2} !text-4xl md:!text-5xl !font-bold text-primary`}>
                    {c.metric}
                  </div>
                  <div className={`${styles.caption_text} !font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400`}>
                    {c.label}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className={`${styles.heading_3} group-hover:text-primary transition-colors`}>
                    {c.title}
                  </h3>
                  <p className={styles.paragraph_sm}>
                    {c.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <span className={`${styles.caption_text} !font-bold text-black dark:text-white inline-flex items-center gap-1.5`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {c.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
