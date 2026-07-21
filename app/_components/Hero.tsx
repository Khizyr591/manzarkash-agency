"use client";

import { useState, useEffect, useRef } from "react";
import { FiSearch, FiTrendingUp, FiCode } from "react-icons/fi";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import styles from "@/lib/styles";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SafeVideo from "@/components/ui/SafeVideo";

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
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setActiveTooltip((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // --- Shared scroll-driven entrance (rise up from below) ---
  const rawY = useTransform(scrollYProgress, [0.1, 0.5], [80, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0.08, 0.35], [0, 1]);
  const rawScale = useTransform(scrollYProgress, [0.1, 0.5], [0.92, 1]);

  const videoY = useSpring(rawY, { stiffness: 50, damping: 22 });
  const videoOpacity = useSpring(rawOpacity, { stiffness: 60, damping: 24 });
  const videoScale = useSpring(rawScale, { stiffness: 50, damping: 22 });

  // --- Cylinder fan-out per card ---
  const fanRange: [number, number] = [0.08, 0.45];

  // Left card: starts stacked at center, fans out left
  const rawLeftRotateY = useTransform(scrollYProgress, fanRange, [45, 0]);
  const rawLeftX = useTransform(scrollYProgress, fanRange, [120, 0]);
  const rawLeftScale = useTransform(scrollYProgress, fanRange, [0.82, 1]);
  const leftRotateY = useSpring(rawLeftRotateY, { stiffness: 45, damping: 20 });
  const leftX = useSpring(rawLeftX, { stiffness: 45, damping: 20 });
  const leftScale = useSpring(rawLeftScale, { stiffness: 45, damping: 20 });

  // Right card: starts stacked at center, fans out right
  const rawRightRotateY = useTransform(scrollYProgress, fanRange, [-45, 0]);
  const rawRightX = useTransform(scrollYProgress, fanRange, [-120, 0]);
  const rawRightScale = useTransform(scrollYProgress, fanRange, [0.82, 1]);
  const rightRotateY = useSpring(rawRightRotateY, { stiffness: 45, damping: 20 });
  const rightX = useSpring(rawRightX, { stiffness: 45, damping: 20 });
  const rightScale = useSpring(rawRightScale, { stiffness: 45, damping: 20 });

  // Center card: subtle scale punch
  const rawCenterScale = useTransform(scrollYProgress, fanRange, [0.88, 1]);
  const centerScale = useSpring(rawCenterScale, { stiffness: 45, damping: 20 });

  return (
    <section
      ref={heroRef}
      className="relative overflow-visible min-h-screen flex flex-col bg-linear-to-b from-transparent to-zinc-50/50 dark:to-zinc-950/20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,  rgba(245,78,14,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245,78,14,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, var(--background, #fff) 100%)`,
          }}
        />

        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -60, 40, 0], scale: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "-10%", left: "0%",
            width: "55vw", height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,78,14,0.35) 0%, rgba(245,78,14,0.08) 50%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <motion.div
          animate={{ x: [0, -40, 50, 0], y: [0, 60, -50, 0], scale: [1, 0.88, 1.12, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            bottom: "-15%", right: "5%",
            width: "50vw", height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,146,60,0.25) 0%, rgba(251,146,60,0.06) 50%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        <motion.div
          animate={{ x: [0, -30, 40, 0], y: [0, 40, -30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "5%", right: "10%",
            width: "35vw", height: "35vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,78,14,0.18) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(245,78,14,0.6) 30%, rgba(245,78,14,0.6) 70%, transparent)",
            boxShadow: "0 0 12px 2px rgba(245,78,14,0.4)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(245,78,14,0.06) 0%, transparent 45%, rgba(251,146,60,0.05) 100%)",
          }}
        />
      </div>

      <div className={`${styles.container} relative z-10 pt-20 md:pt-28`}>
        <h1 className="sr-only">
          Manzarkash Digital Agency | Performance Ads Campaigns & SEO Agency for Pakistan
        </h1>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className={`${styles.heading_1} text-3xl! min-[375px]:text-4xl! sm:text-5xl! md:text-6xl! lg:text-7xl! xl:text-[80px]! leading-tight! text-zinc-900 dark:text-white max-w-6xl mx-auto`}
          >
            We{" "}
            <span className="inline-flex items-center gap-1.5 p-1 md:p-1.5 bg-zinc-150/50 dark:bg-zinc-900/50 border border-zinc-250/50 dark:border-zinc-800/50 rounded-2xl mx-1.5 md:mx-3 align-middle shadow-sm">
              <span
                className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${activeTooltip === 0
                  ? "scale-115 bg-primary text-white"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:scale-110"
                  }`}
              >
                <FiSearch className="w-4 h-4 md:w-5 md:h-5" />
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
            <span className="inline-block w-[56px] h-[98px] sm:w-[64px] sm:h-[112px] md:w-[80px] md:h-[140px] lg:w-[96px] lg:h-[168px] mx-1.5 md:mx-3 rounded-xl bg-black align-middle overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105 shadow-lg relative select-none">
              <SafeVideo
                src="/UGC Lushly.mp4"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </span>{" "}
            remember.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`${styles.paragraph_lg} text-lg! md:text-2xl! text-zinc-600 dark:text-zinc-350 max-w-5xl leading-relaxed! italic font-light!`}
          >
            Manzarkash Digital Agency is a Pakistan marketing and web engineering agency scaling brand retail ventures with high-impact ads campaigns, search optimization (SEO), custom websites, and WhatsApp automation.
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
              <p className={`${styles.heading_3} text-2xl! md:text-3xl! font-bold! text-black dark:text-white`}>
                <AnimatedCounter value={4.8} decimals={1} suffix="M+" />
              </p>
              <p className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400`}>
                USD Attributed Revenue
              </p>
            </div>
            <div>
              <p className={`${styles.heading_3} text-2xl! md:text-3xl! font-bold! text-black dark:text-white`}>
                <AnimatedCounter value={94} suffix="%" />
              </p>
              <p className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400`}>
                Client Retention Rate
              </p>
            </div>
            <div>
              <p className={`${styles.heading_3} text-2xl! md:text-3xl! font-bold! text-black dark:text-white`}>
                <AnimatedCounter value={15} suffix="+" />
              </p>
              <p className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400`}>
                Cities Across Pakistan
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className={`${styles.container} relative z-10 pt-16 pb-24`}
        style={{ perspective: "800px", perspectiveOrigin: "50% 80%" }}
      >
        <motion.div
          style={{
            y: videoY,
            opacity: videoOpacity,
            scale: videoScale,
          }}
          className="w-full max-w-4xl mx-auto flex items-center justify-center relative"
        // give the flex row enough height for portrait cards
        // so the absolute-positioned side cards have room
        >
          {/* --- Left Card --- */}
          <motion.div
            style={{
              rotateY: leftRotateY,
              x: leftX,
              scale: leftScale,
              transformOrigin: "right center",
            }}
            className="relative w-[28%] sm:w-[30%] aspect-9/16 rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl shadow-zinc-900/15 dark:shadow-black/50 bg-black hover:border-primary/45 transition-colors duration-300 z-10"
          >
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/25 via-transparent to-transparent pointer-events-none z-10" />
            <SafeVideo
              src="/fashion shoot BTS 2.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </motion.div>

          {/* --- Center Card --- */}
          <motion.div
            style={{
              scale: centerScale,
            }}
            className="relative w-[32%] sm:w-[34%] aspect-9/16 rounded-2xl overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/10 dark:shadow-primary/5 bg-black z-20 mx-[-3%]"
          >
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/30 via-transparent to-transparent pointer-events-none z-10" />
            <SafeVideo
              src="/Fashion Shoot BTS 4.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </motion.div>

          {/* --- Right Card --- */}
          <motion.div
            style={{
              rotateY: rightRotateY,
              x: rightX,
              scale: rightScale,
              transformOrigin: "left center",
            }}
            className="relative w-[28%] sm:w-[30%] aspect-9/16 rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl shadow-zinc-900/15 dark:shadow-black/50 bg-black hover:border-primary/45 transition-colors duration-300 z-10"
          >
            <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/25 via-transparent to-transparent pointer-events-none z-10" />
            <SafeVideo
              src="/fashion shoot BTS 3.mp4"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
