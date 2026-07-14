"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import styles from "@/lib/styles";

type NavChild = { label: string; href: string; desc?: string };
type NavLink = { label: string; href: string; num: string; children?: NavChild[] };

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tick, setTick] = useState(0);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const greeting = GREETINGS[Math.floor(tick / 8) % GREETINGS.length] || "Hey!";

  const navLinks: NavLink[] = [
    { label: "Home", href: "/", num: "01" },
    { label: "About", href: "/about", num: "02" },
    { label: "Founder", href: "/founder", num: "03" },
    { label: "Case Studies", href: "/case-studies", num: "04" },
    { label: "Portfolio", href: "/portfolio", num: "05" },
    {
      label: "Services",
      href: "/services",
      num: "06",
      children: [
        { label: "E-Commerce Engineering", href: "/services/ecommerce", desc: "Shopify Plus & Next.js storefronts" },
        { label: "Performance Ads", href: "/services/marketing-ads", desc: "Meta, Google, TikTok campaigns" },
        { label: "SEO & Content", href: "/services/seo", desc: "Technical SEO + local search" },
        { label: "Product Visuals", href: "/services/product-visuals", desc: "Studio-lit catalog & motion" },
        { label: "Branding", href: "/services/branding", desc: "Identity systems & guidelines" },
        { label: "Social Media", href: "/services/social-media", desc: "Content & community growth" },
        { label: "WhatsApp Automation", href: "/services/whatsapp-automation", desc: "Cloud API bots & funnels" },
      ],
    },
    { label: "Contact", href: "/contact", num: "07" },
  ];

  const offices = [
    { flag: "🇵🇰", city: "Pakistan", tz: "Asia/Karachi", offset: "PKT +5" },
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
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "backdrop-blur-xl bg-white/85 dark:bg-black/85 border-b border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"
          : "backdrop-blur-md  bg-white/60 dark:bg-black/60 border-b border-zinc-200/30 dark:border-zinc-800/30"
          }`}
      >
        <div className={styles.container}>
          <div className="flex items-center justify-between h-18">
            <a
              href="/"
              className={`${styles.heading_5} text-lg! sm:text-xl! md:text-2xl! tracking-widest! text-black dark:text-white shrink-0`}
              aria-label="Manzarkash Digital Agency — Home"
            >
              MANZARKASH DIGITAL<span className="text-primary">.</span>
            </a>

            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((l) =>
                l.children ? (
                  <div key={l.label} className="relative group/dropdown">
                    <a
                      href={l.href}
                      className={`${styles.label_text} text-sm! text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors relative inline-flex items-center gap-1`}
                    >
                      {l.label}
                      <FiChevronDown className="w-3.5 h-3.5 group-hover/dropdown:rotate-180 transition-transform duration-200" />
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/dropdown:w-[calc(100%-1rem)]" />
                    </a>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 pointer-events-none group-hover/dropdown:pointer-events-auto">
                      <div className="w-[380px] rounded-2xl bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-2xl shadow-black/10 p-2">
                        <div className="grid grid-cols-1 gap-0.5">
                          {l.children.map((c) => (
                            <a
                              key={c.href}
                              href={c.href}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group/item"
                            >
                              <span className={`${styles.label_text} text-sm! text-zinc-900 dark:text-white group-hover/item:text-primary transition-colors`}>
                                {c.label}
                              </span>
                              {c.desc && (
                                <span className={`${styles.caption_text} text-xs! text-zinc-500 dark:text-zinc-400`}>
                                  {c.desc}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                        <div className="mt-2 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 px-2 pb-1">
                          <a
                            href={l.href}
                            className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
                          >
                            <span>Explore all services</span>
                            <span>→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className={`${styles.label_text} text-sm! text-zinc-500 hover:text-primary dark:text-zinc-400 dark:hover:text-primary transition-colors relative group/link`}
                  >
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                  </a>
                ),
              )}
            </div>

            <a
              href="https://wa.me/923313936011"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-sm hover:shadow-primary/25 hover:-translate-y-0.5 duration-300 ${styles.button_text_sm} normal-case!`}
            >
              Let&apos;s Talk
            </a>

            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-zinc-700 dark:text-zinc-300 focus:outline-none p-2 -mr-1"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <MenuIcon isOpen={isOpen} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[998] bg-black/65 backdrop-blur-[2px] touch-none"
            />

            <motion.aside
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 h-screen z-[999] w-[82vw] max-w-[320px] flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, #0d0d0d 0%, #111 55%, #180c00 100%)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] z-10"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f54e0e 40%, #fb923c 70%, transparent)",
                }}
              />

              <div
                className="absolute -top-24 -right-20 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(245,78,14,0.18) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/6 shrink-0 touch-none">
                <div>
                  <p className="text-[10px] text-zinc-500 font-poppins tracking-[0.18em] uppercase mb-0.5">
                    {greeting}
                  </p>
                  <span
                    className={`${styles.heading_5} text-[0.95rem]! sm:text-[1.1rem]! tracking-widest! text-white leading-none`}
                  >
                    MANZARKASH DIGITAL<span className="text-primary">.</span>
                  </span>
                </div>

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

              <div className="flex-1 overflow-y-auto overscroll-contain min-h-0">
                <nav className="flex flex-col px-5 py-3">
                  {navLinks.map((link, i) =>
                    link.children ? (
                      <motion.div
                        key={link.label}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="border-b border-white/5"
                      >
                        <button
                          onClick={() =>
                            setExpandedGroup(expandedGroup === link.label ? null : link.label)
                          }
                          aria-expanded={expandedGroup === link.label}
                          className="group w-full flex items-center gap-3 py-[0.85rem] hover:border-primary/20 transition-colors duration-200"
                        >
                          <span className="text-[9px] font-mono text-primary/40 w-4 shrink-0 group-hover:text-primary/70 transition-colors">
                            {link.num}
                          </span>
                          <span
                            className={`${styles.label_text} text-[0.95rem]! text-zinc-300 group-hover:text-white transition-colors duration-200 flex-1 text-left`}
                          >
                            {link.label}
                          </span>
                          <motion.span
                            animate={{ rotate: expandedGroup === link.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-4 h-4 rounded-full flex items-center justify-center text-primary/70"
                          >
                            <FiChevronDown className="w-3.5 h-3.5" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {expandedGroup === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-7 flex flex-col gap-0.5">
                                {link.children.map((c) => (
                                  <a
                                    key={c.href}
                                    href={c.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                                  >
                                    <span className={`${styles.label_text} text-[0.85rem]! text-zinc-300`}>
                                      {c.label}
                                    </span>
                                    {c.desc && (
                                      <span className="text-[10px] text-zinc-500 mt-0.5">
                                        {c.desc}
                                      </span>
                                    )}
                                  </a>
                                ))}
                                <a
                                  href={link.href}
                                  onClick={() => setIsOpen(false)}
                                  className="mt-2 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center justify-between"
                                >
                                  <span>Explore all services</span>
                                  <span>→</span>
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-3 py-[0.85rem] border-b border-white/5 last:border-0 hover:border-primary/20 transition-colors duration-200"
                      >
                        <span className="text-[9px] font-mono text-primary/40 w-4 shrink-0 group-hover:text-primary/70 transition-colors">
                          {link.num}
                        </span>
                        <span
                          className={`${styles.label_text} text-[0.95rem]! text-zinc-300 group-hover:text-white transition-colors duration-200 flex-1`}
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
                    ),
                  )}
                </nav>
              </div>

              <div className="px-5 pb-6 pt-4 space-y-3 border-t border-white/6 shrink-0 bg-[#0f0f0f]/95 backdrop-blur-[2px] touch-none">
                <div className="grid grid-cols-1">
                  {offices.map(({ flag, city, tz, offset }) => (
                    <div
                      key={city}
                      className="relative rounded-xl border border-white/6 bg-white/3 p-3 overflow-hidden"
                    >
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

                <div className="relative">
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
