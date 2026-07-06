"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

const TRUST_CHIPS = [
  "Custom E-Commerce",
  "Multilingual SEO",
  "Paid Ads ROI",
  "Bespoke Design",
];

export default function SceneryReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const mScaleRaw = useTransform(
    scrollYProgress,
    (p) => 1 + Math.pow(p, 2.5) * 90
  );
  const mScale = useSpring(mScaleRaw, { stiffness: 60, damping: 20 });
  const mOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 0.06, 0.9, 1]
  );

  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.06, 0.15, 0.04]);

  const grainOpacity = useTransform(scrollYProgress, [0.1, 0.7], [0, 0.18]);

  const phase1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.35], [1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0.22, 0.35], [1, 0.82]);
  const phase1Y = useTransform(scrollYProgress, [0.22, 0.35], [0, -40]);
  const phase1Display = useTransform(scrollYProgress, (p) =>
    p >= 0.40 ? "none" : "flex"
  );

  const phase3Opacity = useTransform(scrollYProgress, [0.55, 0.78], [0, 1]);
  const phase3Y = useTransform(scrollYProgress, [0.55, 0.78], [60, 0]);
  const phase3Display = useTransform(scrollYProgress, (p) =>
    p <= 0.48 ? "none" : "flex"
  );

  const orbScale1 = useTransform(scrollYProgress, [0, 0.5], [1, 3.5]);
  const orbScale2 = useTransform(scrollYProgress, [0, 0.5], [1, 2.8]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.4, 0.75], [0.35, 0.6, 0]);

  return (
    <div ref={containerRef} className="relative h-[280vh] w-full z-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-white dark:bg-zinc-950 transition-colors duration-700">

        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none"
          style={{ scale: orbScale1, opacity: orbOpacity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-orange-400/15 blur-[100px] pointer-events-none"
          style={{ scale: orbScale2, opacity: orbOpacity }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
          style={{ scale: gridScale, opacity: gridOpacity }}
        />

        <motion.div
          className="absolute font-michroma font-bold text-[28vw] md:text-[20vw] text-primary select-none pointer-events-none will-change-transform"
          style={{ scale: mScale, opacity: mOpacity }}
        >
          M
        </motion.div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: grainOpacity,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
          style={{
            opacity: phase1Opacity,
            scale: phase1Scale,
            y: phase1Y,
            display: phase1Display,
            pointerEvents: "auto",
          }}
        >
          <Eyebrow>The Visual Transformation</Eyebrow>

          <h2 className="font-michroma text-4xl md:text-6xl lg:text-7xl bg-linear-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent tracking-tight leading-tight uppercase font-semibold">
            The Digital Scenery Shift
          </h2>

          <p className="font-poppins text-base md:text-lg text-zinc-500 dark:text-zinc-400 italic max-w-md leading-relaxed">
            Scroll to witness how we transform ideas into industry-defining
            digital experiences.
          </p>

          <div className="flex flex-col items-center gap-2 pt-6">
            <div className="w-6 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex justify-center pt-2.5">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.2, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut"
                }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
            <span className="font-poppins text-[10px] tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500">
              scroll
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center"
          style={{
            opacity: phase3Opacity,
            y: phase3Y,
            display: phase3Display,
            pointerEvents: "auto",
          }}
        >
          <Eyebrow variant="white">{"Let's Work Together"}</Eyebrow>

          <h2 className="font-michroma text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] max-w-3xl font-semibold uppercase">
            READY TO DEFINE YOUR{" "}
            <span className="text-primary bg-linear-to-r from-primary to-orange-400 bg-clip-text">SCENERY?</span>
          </h2>

          <p className="font-poppins text-base md:text-lg text-white/75 italic max-w-lg leading-relaxed">
            Bridge your local demographic presence with global high-performance
            web execution retainers.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 font-poppins text-xs font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all duration-300"
            >
              Start My Project
            </Button>
            <Button
              href="#case-studies"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm"
            >
              See Our Work
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
