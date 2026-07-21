"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [stickyElement, setStickyElement] = useState<HTMLElement | null>(null);

  // Separate motion values for the core pointer and the outer snapping ring
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);
  const ringX = useMotionValue(-200);
  const ringY = useMotionValue(-200);

  // Fast spring for the core dot (low latency pointer feedback)
  const dotSpringConfig = { stiffness: 950, damping: 45, mass: 0.08 };
  const dotSpringX = useSpring(dotX, dotSpringConfig);
  const dotSpringY = useSpring(dotY, dotSpringConfig);

  // Slower, organic spring for the trailing ring (elastic luxury feel)
  const ringSpringConfig = { stiffness: 180, damping: 24, mass: 0.55 };
  const ringSpringX = useSpring(ringX, ringSpringConfig);
  const ringSpringY = useSpring(ringY, ringSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // The core dot always follows the mouse instantly
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // If hovering over a sticky element, lock the ring target to its geometric center
      if (stickyElement) {
        const rect = stickyElement.getBoundingClientRect();
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);
      } else {
        // Otherwise, follow the mouse
        ringX.set(e.clientX);
        ringY.set(e.clientY);
      }

      if (!isVisible) setIsVisible(true);
    };

    const handleScroll = () => {
      if (stickyElement) {
        const rect = stickyElement.getBoundingClientRect();
        ringX.set(rect.left + rect.width / 2);
        ringY.set(rect.top + rect.height / 2);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        (window.getComputedStyle(target).cursor === "pointer" ? target : null);

      if (interactiveEl) {
        setStickyElement(interactiveEl as HTMLElement);
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setStickyElement(null);
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [dotX, dotY, ringX, ringY, isVisible, stickyElement]);

  return (
    <>
      {/* 1. Trailing Outer Ring (Lagged Spring & Magnetic Snapping) */}
      <motion.div
        className="fixed pointer-events-none z-50 left-0 top-0 w-40 h-40 hidden md:block"
        style={{
          x: ringSpringX,
          y: ringSpringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? (isClicking ? 0.92 : 1.0) : (isClicking ? 0.24 : 0.3), // 160px * 0.3 = 48px default outline ring
          }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="w-full h-full relative flex items-center justify-center"
        >
          {/* Default Ring Outline */}
          <motion.div
            animate={{
              opacity: isHovering ? 0 : 1,
            }}
            className="absolute w-12 h-12 rounded-full border border-primary/50 bg-primary/5 shadow-[0_0_15px_rgba(245,78,14,0.18)] flex items-center justify-center"
          >
            {/* Center target crosshair inside default ring */}
            <div className="w-1.5 h-1.5 rounded-full bg-primary/45" />
          </motion.div>

          {/* Click Ripple Effect (trigged by key remount) */}
          <motion.div
            key={isClicking ? "click" : "normal"}
            initial={{ scale: 0.3, opacity: isClicking ? 0.8 : 0 }}
            animate={isClicking ? { scale: 1.6, opacity: 0 } : { scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="absolute w-full h-full rounded-full border-2 border-primary/70 pointer-events-none"
          />

          {/* Hover Expanded Circular Text Ring & Glassmorphic Snapped Fill */}
          <motion.div
            animate={{
              opacity: isHovering ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <div className="absolute inset-4 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,78,14,0.12)_0%,rgba(10,10,10,0.85)_80%)] backdrop-blur-xs border border-primary/35 shadow-[0_0_25px_rgba(245,78,14,0.25)]" />
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:10s] drop-shadow-[0_3px_10px_rgba(245,78,14,0.35)] relative z-10">
              <defs>
                <path
                  id="cursorTextPath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
              </defs>
              <text className="font-michroma font-bold text-[6.5px] fill-white tracking-[0.16em] uppercase">
                <textPath href="#cursorTextPath" startOffset="0%">
                  • MANZARKASH • ENGINEER • DESIGN • SCALE
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <motion.svg
                animate={{
                  scale: isClicking ? 0.7 : 1,
                  rotate: isClicking ? 45 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 2. Core Inner Dot (Fast Spring) */}
      <motion.div
        className="fixed pointer-events-none z-50 left-0 top-0 w-5 h-5 hidden md:block"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.95 : 0,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 0 : (isClicking ? 0.6 : 1),
          }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
          className="w-full h-full rounded-full bg-primary shadow-[0_0_15px_rgba(245,78,14,0.95)] border border-white/20"
        />
      </motion.div>
    </>
  );
}
