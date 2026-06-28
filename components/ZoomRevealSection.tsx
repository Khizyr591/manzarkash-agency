"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function ZoomRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;

      // Calculate scroll progress (0 when top is at viewport top, 1 when bottom is at viewport bottom)
      const currentScroll = -rect.top;
      let scrollPercent = currentScroll / totalHeight;
      scrollPercent = Math.max(0, Math.min(1, scrollPercent));
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial execution

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Opacities and Scales calculated based on scroll progress
  // Phase 1 (Initial text fades out from progress 0 to 0.35)
  const initialOpacity = Math.max(0, 1 - progress / 0.35);
  const initialScale = Math.max(0.8, 1 - progress * 0.4);

  // Phase 2 (Giant M zooms exponentially)
  const mScale = 1 + Math.pow(progress, 3) * 85;
  const mOpacity = 0.04 + progress * 0.96;

  // Phase 3 (Final CTA fades in from progress 0.65 to 1.0)
  const finalOpacity = Math.max(0, (progress - 0.65) / 0.35);
  const finalTranslateY = 30 * (1 - finalOpacity);

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full z-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-black transition-colors duration-300 flex items-center justify-center">
        {/* Layer 1: Giant M Zooming Background */}
        <div
          className="absolute font-michroma font-bold text-[32vw] md:text-[22vw] text-primary select-none pointer-events-none transition-all ease-out"
          style={{
            transform: `scale(${mScale})`,
            opacity: mOpacity,
            willChange: "transform, opacity",
          }}
        >
          M
        </div>

        {/* Layer 2: Initial content (Fades and shrinks) */}
        <div
          className="absolute text-center space-y-6 max-w-3xl px-6 transition-all duration-300 pointer-events-none"
          style={{
            opacity: initialOpacity,
            transform: `scale(${initialScale})`,
            pointerEvents: initialOpacity > 0.1 ? "auto" : "none",
          }}
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            SEE FOR YOURSELF
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
            The Digital Scenery Shift
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 font-poppins italic max-w-xl mx-auto">
            Scroll down to see the visual transformation of ideas into
            realities.
          </p>

          <div className="flex justify-center pt-6 animate-bounce">
            <span className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-400">
              ↓
            </span>
          </div>
        </div>

        {/* Layer 3: Final content (Fades and slides up once M covers the screen) */}
        <div
          className="absolute text-center space-y-8 max-w-4xl px-6 pointer-events-none"
          style={{
            opacity: finalOpacity,
            transform: `translate3d(0, ${finalTranslateY}px, 0)`,
            pointerEvents: finalOpacity > 0.1 ? "auto" : "none",
          }}
        >
          <span className="text-white/85 font-semibold text-sm tracking-widest uppercase">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            READY TO DEFINE YOUR SCENERY?
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-poppins italic max-w-xl mx-auto">
            Bridge your local demographic presence with global Next.js web
            execution retainers.
          </p>
          <div className="pt-6">
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-zinc-100 shadow-xl"
            >
              Start My Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
