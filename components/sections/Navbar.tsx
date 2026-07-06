"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/styles/styles";

/* ── Animated hamburger icon ─────────────────────────────── */
const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div
    className="w-5 h-4 flex flex-col justify-between cursor-pointer"
    aria-hidden
  >
    <motion.span
      animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="block h-0.5 w-full bg-current rounded-full origin-left"
    />
    <motion.span
      animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.18 }}
      className="block h-0.5 w-full bg-current rounded-full"
    />
    <motion.span
      animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className="block h-0.5 w-full bg-current rounded-full origin-left"
    />
  </div>
);

/* ── Helpers ─────────────────────────────────────────────── */
const GREETINGS = ["Hello!", "Hi there!", "Namaste!", "Hey!", "Welcome!"];

function getGreeting(): string {
  return GREETINGS[Math.floor(Date.now() / 8000) % GREETINGS.length];
}

function formatTime(tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: tz,
  }).format(new Date());
}

/* ── Component ───────────────────────────────────────────── */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tick, setTick] = useState(0); // drives clock re-render

  // Recompute greeting each tick so it cycles while drawer is open
  const greeting = GREETINGS[Math.floor(tick / 8) % GREETINGS.length] || "Hey!";

  const navLinks = [
    { label: "About", href: "/about", num: "01" },
    { label: "Services", href: "/#services", num: "02" },
    { label: "Dual Focus", href: "/#market-focus", num: "03" },
    { label: "Case Studies", href: "/#case-studies", num: "04" },
    { label: "Consultation", href: "/#contact", num: "05" },
  ];

  const offices = [
    { flag: "🇵🇰", city: "Karachi", tz: "Asia/Karachi", offset: "PKT +5" },
    { flag: "🇬🇧", city: "London", tz: "Europe/London", offset: "BST +1" },
  ];

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  /* Variants */
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring" as const, damping: 28, stiffness: 280 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.22, ease: [0.4, 0, 1, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 18 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.055 + 0.12,
        duration: 0.32,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <>
      {/* ── NAVBAR BAR ───────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-white/85 dark:bg-black/85 border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"
            : "backdrop-blur-md  bg-white/60 dark:bg-black/60 border-b border-zinc-200/30 dark:border-zinc-800/30"
        }`}
      >
        <div className={styles.container}>
          <div className="flex items-center justify-between h-[4.5rem]">
            {/* Logo */}
            <a
              href="#"
              className={`${styles.heading_5} !text-xl md:!text-2xl !tracking-widest text-black dark:text-white shrink-0`}
            >
              MANZARKASH<span className="text-primary">.</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`${styles.label_text} !text-sm text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors relative group`}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/923313936011"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-sm hover:shadow-primary/25 hover:-translate-y-0.5 duration-300 ${styles.button_text_sm} !normal-case`}
            >
              Let's Talk
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-700 dark:text-zinc-300 focus:outline-none p-2 -mr-1"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[998] bg-black/65 backdrop-blur-[2px] touch-none"
            />

            {/* Panel */}
            <motion.aside
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 h-screen h-[100dvh] z-[999] w-[82vw] max-w-[320px] flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, #0d0d0d 0%, #111 55%, #180c00 100%)",
              }}
            >
              {/* Decorative top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f54e0e 40%, #fb923c 70%, transparent)",
                }}
              />

              {/* Soft glow */}
              <div
                className="absolute -top-24 -right-20 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,78,14,0.18) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* ── HEADER ── */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/[0.06] shrink-0 touch-none">
                <div>
                  <p className="text-[10px] text-zinc-500 font-poppins tracking-[0.18em] uppercase mb-0.5">
                    {greeting}
                  </p>
                  <span
                    className={`${styles.heading_5} !text-[1.1rem] !tracking-widest text-white leading-none`}
                  >
                    MANZARKASH<span className="text-primary">.</span>
                  </span>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 1L9 9M9 1L1 9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* ── SCROLLABLE MIDDLE AREA ── */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* ── NAV LINKS ── */}
                <nav className="flex flex-col px-5 py-3">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-3 py-[0.85rem] border-b border-white/[0.05] last:border-0 hover:border-primary/20 transition-colors duration-200"
                    >
                      <span className="text-[9px] font-mono text-primary/40 w-4 shrink-0 group-hover:text-primary/70 transition-colors">
                        {link.num}
                      </span>
                      <span
                        className={`${styles.label_text} !text-[0.95rem] text-zinc-300 group-hover:text-white transition-colors duration-200 flex-1`}
                      >
                        {link.label}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-zinc-700 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* ── BOTTOM SECTION ── */}
              <div className="px-5 pb-6 pt-4 space-y-3 border-t border-white/[0.06] shrink-0 bg-[#0f0f0f]/95 backdrop-blur-[2px] touch-none">
                {/* World clocks — side by side cards */}
                <div className="grid grid-cols-2 gap-2">
                  {offices.map(({ flag, city, tz, offset }) => (
                    <div
                      key={city}
                      className="relative rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 overflow-hidden"
                    >
                      {/* card glow */}
                      <div
                        className="absolute -top-4 -right-4 w-14 h-14 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(245,78,14,0.12) 0%, transparent 70%)",
                        }}
                      />
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-base leading-none">{flag}</span>
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-poppins mb-1">
                        {city}
                      </p>
                      <p
                        className="text-xs font-mono text-white tabular-nums"
                        suppressHydrationWarning
                      >
                        {tick >= 0 ? formatTime(tz) : "--:--"}
                      </p>
                      <p className="text-[9px] text-zinc-700 font-poppins mt-0.5">
                        {offset}
                      </p>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA — clean pill */}
                <div className="relative">
                  {/* glow layer */}
                  <div
                    className="absolute inset-0 rounded-xl blur-md opacity-40"
                    style={{ background: "rgba(37,211,102,0.35)" }}
                  />
                  <a
                    href="https://wa.me/923313936011?text=Hi%20Manzarkash!%20I%27m%20interested%20in%20growing%20my%20brand."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="relative flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #16803c 0%, #15803d 100%)",
                    }}
                  >
                    {/* shimmer sweep */}
                    <motion.div
                      animate={{ x: ["-120%", "220%"] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-y-0 w-1/3 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      }}
                    />
                    {/* WhatsApp icon */}
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.41A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-white/50 font-poppins leading-none">
                        Connect for instant response
                      </p>
                      <p className="text-sm font-poppins font-semibold leading-tight mt-0.5">
                        Chat on WhatsApp
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-white/40 shrink-0"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
