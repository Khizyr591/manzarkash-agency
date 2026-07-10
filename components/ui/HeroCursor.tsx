"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface HeroCursorProps {
  isHovering: boolean;
}

export default function HeroCursor({ isHovering }: HeroCursorProps) {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { stiffness: 380, damping: 26, mass: 0.22 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 left-0 top-0 w-24 h-24 hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isHovering ? 1 : 0,
        scale: isHovering ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { duration: 0.2 },
      }}
    >
      <div className="w-full h-full relative">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:12s] drop-shadow-[0_4px_12px_rgba(245,78,14,0.35)]">
          <defs>
            <path
              id="cursorTextPath"
              d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
              fill="none"
            />
          </defs>
          <circle cx="50" cy="50" r="45" fill="#f54e0e" />
          <text className="font-michroma font-bold text-[6.5px] fill-white tracking-[0.14em] uppercase">
            <textPath href="#cursorTextPath" startOffset="0%">
              • EXPLORE • MANZARKASH • EXPLORE
            </textPath>
          </text>
          <circle cx="50" cy="50" r="16" fill="white" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg className="w-4.5 h-4.5 text-[#f54e0e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
