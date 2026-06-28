"use client";

import { useState, useEffect } from "react";
import { FiStar, FiLayers, FiTrendingUp, FiMousePointer } from "react-icons/fi";
import Button from "./Button";

export default function Hero() {
  const [activeTooltip, setActiveTooltip] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTooltip((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-transparent to-zinc-50/50 dark:to-zinc-950/20">
      {/* Background Decorative Interactive Grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] grid-rows-[repeat(auto-fill,minmax(48px,1fr))] overflow-hidden [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0">
        {Array.from({ length: 800 }).map((_, i) => {
          // Stagger animation delays and durations to make pulse organic and automatic
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

      {/* Floating Orange Glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Headline inspired by image */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-normal text-zinc-900 dark:text-white leading-[1.25] tracking-tight max-w-6xl mx-auto">
            We{" "}
            <span className="inline-flex items-center gap-1.5 p-1 md:p-1.5 bg-zinc-150/50 dark:bg-zinc-900/50 border border-zinc-250/50 dark:border-zinc-800/50 rounded-2xl mx-1.5 md:mx-3 align-middle shadow-sm">
              {/* Badge 1: Layers (Creative Design) */}
              <span className="relative flex items-center justify-center">
                {/* Tooltip */}
                <span
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2.5 py-1 text-[9px] md:text-[10px] font-semibold font-poppins text-white bg-zinc-950 dark:bg-zinc-800 rounded-lg whitespace-nowrap shadow-md transition-all duration-300 pointer-events-none ${
                    activeTooltip === 0
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1.5 scale-90"
                  }`}
                  style={{ zIndex: 50 }}
                >
                  Creative
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-950 dark:border-t-zinc-800" />
                </span>

                {/* Badge Container */}
                <span
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${
                    activeTooltip === 0
                      ? "scale-115 bg-primary text-white"
                      : "bg-primary/10 dark:bg-primary/20 text-primary hover:scale-110"
                  }`}
                >
                  <FiLayers className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </span>

              {/* Badge 2: Trending (ROI Growth) */}
              <span className="relative flex items-center justify-center">
                {/* Tooltip */}
                <span
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2.5 py-1 text-[9px] md:text-[10px] font-semibold font-poppins text-white bg-zinc-950 dark:bg-zinc-800 rounded-lg whitespace-nowrap shadow-md transition-all duration-300 pointer-events-none ${
                    activeTooltip === 1
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1.5 scale-90"
                  }`}
                  style={{ zIndex: 50 }}
                >
                  Marketing
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-950 dark:border-t-zinc-800" />
                </span>

                {/* Badge Container */}
                <span
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${
                    activeTooltip === 1
                      ? "scale-115 bg-emerald-500 text-white animate-pulse"
                      : "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:scale-110"
                  }`}
                >
                  <FiTrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </span>

              {/* Badge 3: Mouse pointer (Bespoke Dev) */}
              <span className="relative flex items-center justify-center">
                {/* Tooltip */}
                <span
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 px-2.5 py-1 text-[9px] md:text-[10px] font-semibold font-poppins text-white bg-zinc-950 dark:bg-zinc-800 rounded-lg whitespace-nowrap shadow-md transition-all duration-300 pointer-events-none ${
                    activeTooltip === 2
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-1.5 scale-90"
                  }`}
                  style={{ zIndex: 50 }}
                >
                  Engineering
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-zinc-950 dark:border-t-zinc-800" />
                </span>

                {/* Badge Container */}
                <span
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm transform transition-all duration-300 select-none ${
                    activeTooltip === 2
                      ? "scale-115 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                      : "bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:scale-110"
                  }`}
                >
                  <FiMousePointer className="w-4 h-4 md:w-5 md:h-5" />
                </span>
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
            <span className="inline-flex w-24 h-14 md:w-36 md:h-20 mx-1.5 md:mx-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md align-middle overflow-hidden flex-col p-1 gap-1 transform hover:scale-105 transition-transform duration-300">
              {/* Mini browser chrome */}
              <span className="flex items-center gap-1 border-b border-zinc-100 dark:border-zinc-800 pb-0.5">
                <span className="w-1 h-1 rounded-full bg-red-400" />
                <span className="w-1 h-1 rounded-full bg-yellow-400" />
                <span className="w-1 h-1 rounded-full bg-green-400" />
                <span className="w-8 h-1 rounded bg-zinc-100 dark:bg-zinc-850 ml-1" />
              </span>
              {/* Mini content grid */}
              <span className="flex flex-1 gap-1">
                {/* Left column: miniature sidebar */}
                <span className="w-3 bg-zinc-50 dark:bg-zinc-800 rounded flex flex-col gap-0.5 p-0.5">
                  <span className="w-full h-0.5 bg-primary rounded-full" />
                  <span className="w-2/3 h-0.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                  <span className="w-3/4 h-0.5 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                </span>
                {/* Right column: miniature chart */}
                <span className="flex-1 bg-zinc-50 dark:bg-zinc-800 rounded p-1 flex flex-col justify-between">
                  <span className="w-1/2 h-1 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
                  <span className="flex items-end gap-0.5 h-6">
                    <span className="w-1.5 bg-zinc-200 dark:bg-zinc-700 h-2 rounded-t-sm" />
                    <span className="w-1.5 bg-zinc-300 dark:bg-zinc-650 h-3 rounded-t-sm" />
                    <span className="w-1.5 bg-primary/70 h-4 rounded-t-sm" />
                    <span className="w-1.5 bg-primary h-5 rounded-t-sm animate-pulse" />
                  </span>
                </span>
              </span>
            </span>{" "}
            remember.
          </h1>

          <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-350 max-w-5xl leading-relaxed font-poppins italic font-light">
            Manzarkash is a premium creative partner engineering
            high-performance growth systems for local leaders and global brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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
          </div>

          {/* Quick trust metrics */}
          <div className="pt-8 grid grid-cols-3 gap-8 md:gap-16 border-t border-zinc-200/60 dark:border-zinc-800/60 max-w-xl w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
