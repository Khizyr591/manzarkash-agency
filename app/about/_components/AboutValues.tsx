"use client";

import { motion, Variants } from "framer-motion";
import { FiEye, FiZap, FiActivity, FiTarget } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutValues() {
  const values = [
    {
      title: "Visual Perfection",
      desc: "We are obsessed with aesthetics. From pixel-perfect web layout spacings to high-fidelity social ad creatives, every design asset must communicate premium value.",
      icon: <FiEye className="w-5 h-5 text-primary" />,
      color: "rgba(245, 78, 14, 0.15)",
    },
    {
      title: "Automation First",
      desc: "We look for leverage. By integrating robust Shopify workflows, API synchronizations, and custom conversational AI bots, we free brands from manual, low-ROI tasks.",
      icon: <FiZap className="w-5 h-5 text-primary" />,
      color: "rgba(251, 146, 60, 0.15)",
    },
    {
      title: "Radical Transparency",
      desc: "No vanity metrics. We construct clean, direct-attribution ad dashboards, tracking authentic conversion data, search engine rankings, and bottom-line profit ROI.",
      icon: <FiActivity className="w-5 h-5 text-primary" />,
      color: "rgba(16, 185, 129, 0.15)",
    },
    {
      title: "Outcome Partnership",
      desc: "We succeed only when you scale. We align our retainer structures with measurable client growth, operating as an integrated product and growth team for your brand.",
      icon: <FiTarget className="w-5 h-5 text-primary" />,
      color: "rgba(59, 130, 246, 0.15)",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-800/60 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-25 dark:opacity-10 bg-orange-400/20 blur-[100px]" />

      <div className={styles.container}>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Eyebrow>OUR CORE VALUES</Eyebrow>
          <h2 className={`${styles.heading_2} uppercase`}>THE PRINCIPLES THAT DRIVE US</h2>
          <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto`}>
            We reject the typical agency template. We build and grow brands on a foundation of creative mastery and absolute execution.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 }
              }}
              className="relative p-6 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md transition-all duration-300 group flex flex-col justify-between"
              style={{ contentVisibility: "auto" }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${val.color} 0%, transparent 65%)`
                }}
              />

              <div className="space-y-6 relative z-10">
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className={`${styles.heading_4} text-base! sm:text-lg! text-zinc-900 dark:text-white font-semibold!`}>
                  {val.title}
                </h3>
                <p className={`${styles.span_text} text-[0.85rem]! text-zinc-500 dark:text-zinc-400 leading-relaxed font-light`}>
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
