"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/lib/styles";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setHasLoaded(true);
    document.body.style.overflow = "hidden";

    let current = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 4;
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = "";
        }, 500);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-9999 flex flex-col justify-between bg-black p-8 md:p-16 select-none"
          >

            <div className="flex justify-between items-center w-full">
              <span
                className={`${styles.heading_6} text-[10px]! md:text-xs! tracking-[0.2em] text-zinc-500 uppercase`}
              >
                Manzarkash
              </span>
              <span
                className={`${styles.caption_text} text-[10px]! md:text-xs! tracking-[0.2em] text-zinc-500 uppercase font-light!`}
              >
                Creative Digital Agency
              </span>
            </div>


            <div className="flex flex-col items-center justify-center relative">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className={`${styles.heading_1} text-lg! min-[360px]:text-xl! min-[480px]:text-2xl! sm:text-4xl! md:text-6xl! lg:text-7xl! tracking-[0.18em] text-white font-normal text-center select-none mr-[-0.18em]`}
              >
                MANZARKASH
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                className="h-0.5 bg-primary w-full max-w-60 min-[360px]:max-w-75 sm:max-w-120 md:max-w-175 lg:max-w-205 mt-6 origin-center shadow-[0_0_8px_#f54e0e]"
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.35em] text-zinc-400 uppercase mt-4 text-center mr-[-0.35em]"
              >
                DIGITAL MARKETING AGENCY
              </motion.p>
            </div>


            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full font-poppins">
              <div className="flex flex-col gap-2 max-w-xs text-left">
                <span
                  className={`${styles.heading_6} text-[10px]! uppercase tracking-widest text-zinc-500`}
                >
                  Est. 2024 - {currentYear} / Pakistan
                </span>
                <p
                  className={`${styles.caption_text} text-zinc-400! leading-relaxed! font-light!`}
                >
                  Scaling brands through high-conversion video ads production, studio product photography, and performance marketing.
                </p>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`${styles.heading_1} text-6xl! md:text-8xl! font-normal! text-white leading-none! tabular-nums!`}
                  >
                    {String(progress).padStart(3, "0")}
                  </span>
                  <span
                    className={`${styles.heading_5} text-xl! md:text-2xl! text-zinc-500 leading-none!`}
                  >
                    %
                  </span>
                </div>

                <div className="w-56 sm:w-72 h-0.75 bg-zinc-900 rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_8px_rgba(245,78,14,0.5)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <motion.div
        initial={
          hasLoaded ? { opacity: 0, scale: 0.98, filter: "blur(4px)" } : {}
        }
        animate={
          isComplete ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
        }
        onAnimationComplete={() => {
          if (isComplete) {
            setAnimationDone(true);
          }
        }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={`w-full grow flex flex-col ${animationDone ? "transform-[none!important] filter-[none!important]" : ""
          }`}
      >
        {children}
      </motion.div>
    </>
  );
}
