"use client";

import { motion, Variants } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function AboutTeam() {
  const domains = [
    {
      role: "Creative & Visual Production",
      description: "Bringing brands to life visually. We direct styling, light product setups, capture high-end photography, and write persuasive content to position products cleanly.",
      methodology: "Cinema lighting, studio set styling, direct-response copywriting.",
      stack: ["Capture One", "Photoshop", "Lightroom", "Premiere Pro", "Figma"],
      glow: "rgba(245, 78, 14, 0.15)",
    },
    {
      role: "Technical & Engineering",
      description: "Developing blazing-fast storefronts and workflow systems. We engineer custom Shopify apps, WordPress themes, API integrations, and automated customer success flows.",
      methodology: "Clean theme architectures, static asset optimization, serverless webhook routing.",
      stack: ["React / Next.js", "Shopify Plus", "TailwindCSS", "Node.js", "WordPress API"],
      glow: "rgba(251, 146, 60, 0.15)",
    },
    {
      role: "Growth & Acquisition",
      description: "Driving commercial conversions. We set up ad campaigns across Meta, Google, and TikTok, construct keyword authority, and optimize rankings on local maps search engines.",
      methodology: "Pixel event tracking, search keyword mapping, A/B funnel testing.",
      stack: ["Meta Ads Manager", "Google Ads Editor", "Semrush", "Google Analytics 4", "GSC"],
      glow: "rgba(16, 185, 129, 0.15)",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-800/60 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[90px]" />

      <div className={styles.container}>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Eyebrow>OUR TEAM & DOMAIN EXPERTS</Eyebrow>
          <h2 className={`${styles.heading_2} uppercase`}>HOW WE DELIVER SUCCESS</h2>
          <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto`}>
            Our talent is specialized. We combine creative artisans, software engineers, and growth growth-marketers under one collaborative workflow.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {domains.map((dom, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 p-8 flex flex-col justify-between overflow-hidden transition-all duration-300"
              style={{ contentVisibility: "auto" }}
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-555 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top right, ${dom.glow} 0%, transparent 65%)`,
                }}
              />

              <div className="space-y-6 relative z-10">
                <div className="text-[10px] font-mono text-primary/45 tracking-widest leading-none font-semibold">
                  DOMAIN 0{idx + 1}
                </div>

                <div className="space-y-3">
                  <h3 className={`${styles.heading_4} !text-xl text-zinc-900 dark:text-white !font-semibold`}>
                    {dom.role}
                  </h3>
                  <p className={`${styles.span_text} !text-[0.88rem] text-zinc-500 dark:text-zinc-400 leading-relaxed font-light`}>
                    {dom.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-4 relative z-10">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
                    Core Focus
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-poppins leading-relaxed font-medium">
                    {dom.methodology}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
                    Tech Stack & Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dom.stack.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-400 transition-colors group-hover:border-primary/25"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
