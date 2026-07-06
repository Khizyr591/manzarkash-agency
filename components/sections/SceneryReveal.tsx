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

          <h2 className="font-michroma text-4xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-white tracking-tight leading-tight">
            The Digital Scenery Shift
          </h2>

          <p className="font-poppins text-base md:text-lg text-zinc-500 dark:text-zinc-400 italic max-w-md leading-relaxed">
            Scroll to witness how we transform ideas into industry-defining
            digital experiences.
          </p>

          <div className="flex flex-col items-center gap-2 pt-4">
            <span className="font-poppins text-[10px] tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-600">
              scroll
            </span>
            <div className="w-px h-10 bg-linear-to-b from-zinc-300 to-transparent dark:from-zinc-700 animate-pulse" />
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

          <h2 className="font-michroma text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] max-w-3xl">
            READY TO DEFINE YOUR{" "}
            <span className="text-primary">SCENERY?</span>
          </h2>

          <p className="font-poppins text-base md:text-lg text-white/75 italic max-w-lg leading-relaxed">
            Bridge your local demographic presence with global high-performance
            web execution retainers.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-xl">
            {TRUST_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 font-poppins text-xs font-medium"
              >
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
