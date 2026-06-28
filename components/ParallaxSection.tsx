"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FiTrendingUp, FiActivity, FiArrowUpRight } from "react-icons/fi";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal section when entering viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Scroll listener to update parallax offsets
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Calculate scroll offset within the viewport boundary
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // scrollY is the distance scrolled since the top of the section entered the viewport
        const offset = window.innerHeight - rect.top;
        setScrollY(offset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial check

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Multi-layered parallax calculations
  const backgroundY = scrollY * 0.15;
  const cardY = (scrollY - 200) * -0.08;
  const badgeY = (scrollY - 300) * 0.22;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32 bg-white dark:bg-black transition-colors duration-300 z-10"
    >
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting & Content */}
          <div
            className={`lg:col-span-6 space-y-8 transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                ENGINEERED TO PREFORM
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                DYNAMIC PARALLAX DESIGN STACK
              </h2>
              <p className="text-lg text-zinc-650 dark:text-zinc-350 font-poppins italic leading-relaxed">
                We combine search intelligence with highly optimized Next.js static rendering. Faster load speeds translate directly to higher search authority and ad conversion multipliers.
              </p>
            </div>

            <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Scroll-reveal viewport animations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Multi-axis fluid parallax layer translations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>Passive scroll-event loops optimized for performance</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button href="#contact" variant="primary" size="md">
                Audit My Speed
              </Button>
            </div>
          </div>

          {/* Right Column: Animated Parallax Canvas */}
          <div
            className={`lg:col-span-6 flex justify-center relative min-h-[460px] md:min-h-[500px] transition-all duration-1000 transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Parallax Layer 1: Background grid node / Orange Glow */}
            <div
              className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-primary/10 blur-[80px] pointer-events-none"
              style={{ transform: `translate3d(0, ${backgroundY}px, 0)` }}
            />

            {/* Parallax Layer 2: Main Browser Showcase Card */}
            <div
              className="absolute z-20 w-full max-w-[420px] rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/90 shadow-2xl p-6 transition-all duration-300"
              style={{ transform: `translate3d(0, ${cardY}px, 0)` }}
            >
              {/* Mini mock dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                    manzarkash.com
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">
                        Page Load Index
                      </p>
                      <h4 className="text-2xl font-bold text-zinc-900 dark:text-white font-michroma">
                        99/100
                      </h4>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded-full">
                      <FiActivity className="w-3.5 h-3.5 animate-pulse" /> Perfect
                    </span>
                  </div>

                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-primary rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-150 dark:border-zinc-800/60">
                    <p className="text-[9px] text-zinc-450 uppercase">First Contentful Paint</p>
                    <p className="text-sm font-bold mt-1 font-michroma">0.4s</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-150 dark:border-zinc-800/60">
                    <p className="text-[9px] text-zinc-450 uppercase">Cumulative Layout Shift</p>
                    <p className="text-sm font-bold mt-1 font-michroma">0.00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parallax Layer 3: Floating Stats Badge */}
            <div
              className="absolute z-30 bottom-6 right-2 md:right-8 w-[180px] rounded-2xl bg-zinc-950 border border-zinc-800 text-white shadow-2xl p-4 transform"
              style={{ transform: `translate3d(0, ${badgeY}px, 0)` }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-[9px] text-zinc-450 uppercase tracking-wider">
                    Conversions
                  </p>
                  <h5 className="text-lg font-bold font-michroma">
                    +120%
                  </h5>
                </div>
                <div className="p-2.5 rounded-xl bg-primary/25 text-primary">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
