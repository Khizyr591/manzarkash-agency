"use client";

import { useState, useEffect, useRef } from "react";
import { FiCamera, FiTrendingUp, FiCode } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import styles from "@/app/styles/styles";
import Button from "@/components/ui/Button";

const YT_SRC =
  "https://www.youtube.com/embed/dhgoVb4X6uI?autoplay=1&mute=1&loop=1&playlist=dhgoVb4X6uI&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
} as const;

export default function Hero() {
  const [activeTooltip, setActiveTooltip] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTooltip((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 0.7], [-120, 0]);
  const rawRotateX = useTransform(scrollYProgress, [0, 0.6], [-52, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.55], [0, 0.15, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 0.6], [0.88, 1]);

  const videoY = useSpring(rawY, { stiffness: 80, damping: 18 });
  const videoRotateX = useSpring(rawRotateX, { stiffness: 70, damping: 16 });
  const videoOpacity = useSpring(rawOpacity, { stiffness: 100, damping: 22 });
  const videoScale = useSpring(rawScale, { stiffness: 80, damping: 18 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-visible min-h-[calc(140vh)] flex flex-col bg-linear-to-b from-transparent to-zinc-50/50 dark:to-zinc-950/20"
    >
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] grid-rows-[repeat(auto-fill,minmax(48px,1fr))] overflow-hidden mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0">
        {Array.from({ length: 800 }).map((_, i) => {
          const delay = (Math.sin(i) * 12).toFixed(2);
          const duration = (6 + Math.cos(i) * 3).toFixed(2);
          return (
            <div
              key={i}
              className="border-r border-b border-zinc-200/35 dark:border-zinc-800/15 h-12"
              style={{
                animation: `grid-pulse ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="absolute top-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

      <div className={`${styles.container} relative z-10 pt-20 md:pt-28`}>
        <h1 className="sr-only">
          Manzarkash Production | Product Photography, Ads Campaigns & SEO Agency Karachi
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal text-zinc-900 dark:text-white leading-tight tracking-tight max-w-6xl mx-auto"
          >
            We{" "}
            <span className="inline-flex items-center gap-1.5 p-1 md:p-1.5 bg-zinc-150/50 dark:bg-zinc-900/50 border border-zinc-250/50 dark:border-zinc-800/50 rounded-2xl mx-1.5 md:mx-3 align-middle shadow-sm">
              <span
                className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${activeTooltip === 0
                  ? "scale-115 bg-primary text-white"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:scale-110"
                  }`}
              >
                <FiCamera className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <span
                className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${activeTooltip === 1
                  ? "scale-115 bg-primary text-white"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:scale-110"
                  }`}
              >
                <FiTrendingUp className="w-4 h-4 md:w-5 md:h-5" />
              </span>
              <span
                className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${activeTooltip === 2
                  ? "scale-115 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:scale-110"
                  }`}
              >
                <FiCode className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </span>{" "}
            turn great ideas into{" "}
            <span className="inline-block mx-1.5 md:mx-3 align-middle text-primary">
              <svg
                className="w-16 h-8 md:w-28 md:h-14 fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 100 40"
              >
                <path d="M5 25 C 20 10, 40 5, 50 15 C 60 25, 45 35, 55 25 C 65 15, 80 15, 95 20" />
                <path d="M85 13 L 95 20 L 88 28" />
              </svg>
            </span>{" "}
            brands people{" "}
            <span className="inline-block w-[90px] h-[52px] sm:w-[130px] sm:h-[74px] md:w-[180px] md:h-[102px] lg:w-[220px] lg:h-[125px] mx-1.5 md:mx-3 rounded-xl bg-black align-middle overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105 shadow-lg relative select-none">
              <iframe
                src={YT_SRC}
                className="absolute border-0 pointer-events-none w-[178%] h-full left-[-39%] top-0"
                allow="autoplay; encrypted-media"
                tabIndex={-1}
                title="preview"
              />
            </span>{" "}
            remember.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-350 max-w-5xl leading-relaxed font-poppins italic font-light"
          >
            Manzarkash Production is a Karachi-based digital agency scaling brands with premium product photography, high-impact marketing campaigns, custom websites, and WhatsApp automation.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Grow My Business
            </Button>
            <Button
              href="#case-studies"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              View Case Studies
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 border-t border-zinc-200/60 dark:border-zinc-800/60 max-w-xl w-full"
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold text-black dark:text-white font-michroma">
                4.2M+
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                PKR Ads Revenue Generated
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-black dark:text-white font-michroma">
                94%
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Client Retention Rate
              </p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-black dark:text-white font-michroma">
                15+
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Global Markets Served
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className={`${styles.container} relative z-10 pt-16 pb-24`}
        style={{ perspective: "1200px", perspectiveOrigin: "50% 0%" }}
      >
        <motion.div
          style={{
            y: videoY,
            rotateX: videoRotateX,
            opacity: videoOpacity,
            scale: videoScale,
            transformOrigin: "top center",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl shadow-zinc-900/15 dark:shadow-black/50 bg-black"
            style={{ paddingBottom: "56.25%" }}
          >
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/25 via-transparent to-transparent pointer-events-none z-10" />
            <iframe
              src={YT_SRC}
              className="absolute inset-0 w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              title="Manzarkash Production — How We Work"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
