"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";
import { FiCheck } from "react-icons/fi";

interface Milestone {
  year: string;
  tag: string;
  title: string;
  tagline: string;
  desc: string;
  achievements: string[];
}

export default function AboutTimeline() {
  const milestones: Milestone[] = [
    {
      year: "2021",
      tag: "FOUNDATION",
      title: "The Vision & Lens",
      tagline: "High-end product photography studio launched in Karachi.",
      desc: "Manzarkash started with a single, clear objective: capturing absolute brand value through visual perfection. We established a dedicated physical studio in Karachi, shooting premium visuals for local fashion, cosmetics, and lifestyle brands.",
      achievements: [
        "Constructed a high-fidelity studio in Karachi",
        "Collaborated with over 20 local consumer brands",
        "Mastered high-end styling and product lighting techniques",
      ],
    },
    {
      year: "2022",
      tag: "DEVELOPMENT",
      title: "Visions Into Code",
      tagline: "Integrating custom Shopify and WordPress engineering.",
      desc: "We realized that elite creative content was only half the equation. To drive conversions, brands needed high-performance digital stores. We expanded our team to bring in top WordPress and Shopify developers, crafting custom, SEO-optimized e-commerce sites.",
      achievements: [
        "Launched 15+ custom Shopify & WordPress storefronts",
        "Reduced mobile page load times by over 40% on average",
        "Integrated custom landing pages with visual storytelling layouts",
      ],
    },
    {
      year: "2023",
      tag: "ACQUISITION",
      title: "Scaling Retainers",
      tagline: "Introducing high-ROI paid ads and local SEO authority.",
      desc: "With premium assets and fast storefronts, the next step was traffic. We launched performance marketing services—setting up high-converting paid ad campaigns on Meta, Google, and TikTok, alongside organic growth strategies and Google Maps dominance.",
      achievements: [
        "Managed performance campaigns yielding high-ROAS outcomes",
        "Scaled 8 local businesses to top ranking slots on Google Maps",
        "Developed custom copywriting frameworks for direct-response ads",
      ],
    },
    {
      year: "2024",
      tag: "AUTOMATION",
      title: "Next-Gen Workflows",
      tagline: "Building automated messaging pipelines and WhatsApp chatbots.",
      desc: "To help clients scale without hiring massive support teams, we engineered automated WhatsApp flows and AI chatbots. By integrating instant messaging with storefront inventory systems, we eliminated operational bottlenecks for scaling brands.",
      achievements: [
        "Deployed 12+ custom conversational WhatsApp bots",
        "Automated up to 70% of customer support queries for retail partners",
        "Integrated real-time order tracking and customer notification loops",
      ],
    },
    {
      year: "2025/2026",
      tag: "REGIONAL LANDSCAPE",
      title: "The Modern Agency",
      tagline: "Rebranding to Manzarkash, managing campaigns across Pakistan & the UAE.",
      desc: "Consolidating our visual production, custom engineering, search positioning, and automated software workflows, we became Manzarkash. Today, we deliver unified, full-stack brand acceleration to retail partners across Pakistan and the UAE, operated out of Karachi and Dubai.",
      achievements: [
        "Unified visual and software teams under the Manzarkash brand",
        "Successfully managing full-funnel scaling campaigns for global brands",
        "Operating as a premier outcomes-based agency with transparent ROI dashboards",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-800/60 overflow-hidden bg-zinc-50/30 dark:bg-zinc-950/10">
      <div className={styles.container}>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Eyebrow>OUR JOURNEY</Eyebrow>
          <h2 className={`${styles.heading_2} uppercase`}>EVOLUTION OF THE SCENERY</h2>
          <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto`}>
            From a physical visual studio to a full-stack digital agency, trace the milestones of how we scale our brand partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[400px]">
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 border-b lg:border-b-0 lg:border-r border-zinc-200/60 dark:border-zinc-800/60 sticky top-24 self-start">
            {milestones.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-left transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md text-zinc-900 dark:text-white lg:translate-x-2"
                      : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                  }`}
                  style={{ minWidth: "140px" }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3">
                    <span className="font-michroma text-sm sm:text-base leading-none tracking-wider">
                      {item.year}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-primary/70 leading-none">
                      {item.tag}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="hidden lg:block w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase font-semibold">
                    {milestones[activeIndex].tag}
                  </span>
                  <h3 className={`${styles.heading_3} text-zinc-900 dark:text-white`}>
                    {milestones[activeIndex].title}
                  </h3>
                  <p className="text-sm font-poppins font-medium text-zinc-700 dark:text-zinc-300 italic">
                    {milestones[activeIndex].tagline}
                  </p>
                </div>

                <p className={`${styles.span_text} !text-[0.95rem] text-zinc-500 dark:text-zinc-450 leading-relaxed font-light`}>
                  {milestones[activeIndex].desc}
                </p>

                <div className="pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 space-y-4">
                  <h4 className="text-xs font-mono tracking-wider text-zinc-400 dark:text-zinc-500 uppercase">
                    Key Accomplishments
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {milestones[activeIndex].achievements.map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="w-5 h-5 rounded-full bg-primary/5 dark:bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <FiCheck className="w-3 h-3 text-primary" />
                        </span>
                        <span className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-350 font-poppins leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
