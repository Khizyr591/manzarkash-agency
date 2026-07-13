"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogos } from "@/components/ui/BrandLogos";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ClientLogos() {
  const groups = [
    ["Aceternity UI", "Gamity", "Host IT", "Asteroid Kit"],
    ["Nexus", "Vertex Studio", "Apex Tech", "Cloudify"],
    ["Pulse AI", "Echo Lab", "Swift Delivery", "Zenith Corp"],
    ["Nova Digital", "Quantum Logic", "Stratos Cloud", "Horizon Media"]
  ];

  const [groupIndex, setGroupIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const activeGroup = groups[groupIndex];

  return (
    <section className="py-20 md:py-24 bg-black border-y border-zinc-950 relative w-full overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.02] bg-primary blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 relative z-10 flex flex-col items-center gap-3">
        <Eyebrow>OUR CLIENT NETWORK</Eyebrow>
        <h2 className="text-3xl md:text-5xl font-michroma font-bold text-center bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent tracking-tight leading-normal">
          Trusted by the best companies
        </h2>
        <p className="text-zinc-400 text-center font-poppins text-sm md:text-base mt-2 max-w-xl mx-auto tracking-wide">
          Companies that have been using our product from the very start.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 min-h-[60px] md:min-h-[80px] mt-12 md:mt-16 relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={groupIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              },
              exit: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1
                }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-6 sm:gap-x-16 md:gap-x-20 gap-y-8 justify-items-center items-center w-full"
          >
            {activeGroup.map((name) => {
              const LogoIcon = BrandLogos[name] || (() => null);
              return (
                <motion.div
                  key={name}
                  variants={{
                    hidden: { opacity: 0, y: 35, filter: "blur(10px)", rotateX: 25 },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 },
                    exit: { opacity: 0, y: -35, filter: "blur(10px)", rotateX: -25 }
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.21, 0.47, 0.32, 0.98]
                  }}
                  className="flex items-center gap-3.5 text-zinc-400 hover:text-white transition-all duration-300 transform hover:scale-[1.03] select-none"
                >
                  <LogoIcon />
                  <span className="font-poppins font-semibold tracking-wide text-sm md:text-base whitespace-nowrap">
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
