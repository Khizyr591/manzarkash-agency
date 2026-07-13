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
import HeroCursor from "@/components/ui/HeroCursor";

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
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const [isHoveringHero, setIsHoveringHero] = useState(false);

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

  const rawY = useTransform(scrollYProgress, [0, 0.7], [-120, 0]);
  const rawRotateX = useTransform(scrollYProgress, [0, 0.6], [-52, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.55], [0, 0.15, 1]);
  const rawScale = useTransform(scrollYProgress, [0, 0.6], [0.88, 1]);

  const videoY = useSpring(rawY, { stiffness: 80, damping: 18 });
  const videoRotateX = useSpring(rawRotateX, { stiffness: 70, damping: 16 });
  const videoOpacity = useSpring(rawOpacity, { stiffness: 100, damping: 22 });
  const videoScale = useSpring(rawScale, { stiffness: 80, damping: 18 });

  // 3D Cylinder Open Effects
  const leftRotateYRaw = useTransform(scrollYProgress, [0, 0.65], [-45, -15]);
  const rightRotateYRaw = useTransform(scrollYProgress, [0, 0.65], [45, 15]);
  const leftXRaw = useTransform(scrollYProgress, [0, 0.65], [60, -20]);
  const rightXRaw = useTransform(scrollYProgress, [0, 0.65], [-60, 20]);
  const midZRaw = useTransform(scrollYProgress, [0, 0.65], [-30, 30]);

  const leftRotateY = useSpring(leftRotateYRaw, { stiffness: 80, damping: 18 });
  const rightRotateY = useSpring(rightRotateYRaw, { stiffness: 80, damping: 18 });
  const leftX = useSpring(leftXRaw, { stiffness: 80, damping: 18 });
  const rightX = useSpring(rightXRaw, { stiffness: 80, damping: 18 });
  const midZ = useSpring(midZRaw, { stiffness: 80, damping: 18 });

  // Inline Portrait Video Parallax Effect
  const inlineVideoYRaw = useTransform(scrollYProgress, [0, 0.45], [-25, 25]);
  const inlineVideoY = useSpring(inlineVideoYRaw, { stiffness: 80, damping: 18 });

  return (
    <section
      ref={heroRef}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
      className="relative overflow-visible min-h-screen flex flex-col bg-linear-to-b from-transparent to-zinc-50/50 dark:to-zinc-950/20 md:cursor-none"
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
            <motion.span
              style={{ y: inlineVideoY }}
              className="inline-block w-[32px] h-[56px] sm:w-[48px] sm:h-[84px] md:w-[64px] md:h-[112px] lg:w-[80px] lg:h-[140px] mx-1.5 md:mx-3 rounded-xl bg-black align-middle overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/40 hover:shadow-primary/10 transition-all duration-300 transform hover:scale-105 shadow-lg relative select-none"
            >
              <video
                src="/VID_20260712_230114_219.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.span>{" "}
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
          className="w-full max-w-4xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 justify-items-center [transform-style:preserve-3d]"
        >
          {[
            "/VID_20260712_230114_219.mp4",
            "/VID_20260712_230119_762.mp4",
            "/VID_20260712_230138_054.mp4"
          ].map((src, index) => {
            let motionStyle = {};
            if (index === 0) {
              motionStyle = { rotateY: leftRotateY, x: leftX };
            } else if (index === 1) {
              motionStyle = { z: midZ };
            } else if (index === 2) {
              motionStyle = { rotateY: rightRotateY, x: rightX };
            }

            return (
              <motion.div
                key={index}
                style={motionStyle}
                className="relative w-full aspect-9/16 rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl shadow-zinc-900/15 dark:shadow-black/50 bg-black group hover:border-primary/45 transition-colors duration-300"
              >
                <div className="absolute -inset-px rounded-2xl bg-linear-to-br from-primary/25 via-transparent to-transparent pointer-events-none z-10" />
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {mounted && <HeroCursor isHovering={isHoveringHero} />}
    </section>
  );
}
