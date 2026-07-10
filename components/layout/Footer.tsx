"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "@/lib/styles";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const words = ["MANZARKASH", "PRODUCTION", "CREATIVES", "INNOVATORS"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-black transition-colors duration-300 w-full"
    >
      <div className={`${styles.container} py-12 md:py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <a
              href="/"
              className={`${styles.heading_5} !text-xl md:!text-2xl !tracking-widest text-black dark:text-white`}
              aria-label="Manzarkash — Home"
            >
              MANZARKASH<span className="text-primary font-bold">.</span>
            </a>
            <p
              className={`${styles.paragraph_sm} text-zinc-500 dark:text-zinc-400 italic max-w-sm`}
            >
              Manzarkash is a Karachi & Dubai creative digital agency specializing in
              high-end product photography, marketing campaigns, custom
              e-commerce & portfolio websites, and WhatsApp automation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4
                className={`${styles.caption_text} !font-bold uppercase tracking-wider text-black dark:text-white`}
              >
                Services
              </h4>
              <ul
                className={`space-y-2 text-zinc-500 dark:text-zinc-400 ${styles.span_text} !text-sm`}
              >
                <li>
                  <a
                    href="/services/product-visuals"
                    className="hover:text-primary transition-colors"
                  >
                    Product Photography
                  </a>
                </li>
                <li>
                  <a
                    href="/services/marketing-ads"
                    className="hover:text-primary transition-colors"
                  >
                    Ads & Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="/services/social-media"
                    className="hover:text-primary transition-colors"
                  >
                    Social Media & Content
                  </a>
                </li>
                <li>
                  <a
                    href="/services/seo"
                    className="hover:text-primary transition-colors"
                  >
                    SEO Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/services/ecommerce"
                    className="hover:text-primary transition-colors"
                  >
                    E-Commerce Custom Sites
                  </a>
                </li>
                <li>
                  <a
                    href="/services/whatsapp-automation"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/branding-packaging"
                    className="hover:text-primary transition-colors"
                  >
                    Branding & Packaging Design
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4
                className={`${styles.caption_text} !font-bold uppercase tracking-wider text-black dark:text-white`}
              >
                Agency
              </h4>
              <ul
                className={`space-y-2 text-zinc-500 dark:text-zinc-400 ${styles.span_text} !text-sm`}
              >
                <li>
                  <a
                    href="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/founder"
                    className="hover:text-primary transition-colors"
                  >
                    About Founder
                  </a>
                </li>
                <li>
                  <a
                    href="/case-studies"
                    className="hover:text-primary transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-primary transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-primary transition-colors"
                  >
                    Pricing & Packages
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-primary transition-colors"
                  >
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a
                    href="/#market-focus"
                    className="hover:text-primary transition-colors"
                  >
                    UAE Market Focus
                  </a>
                </li>
                <li>
                  <a
                    href="/#market-focus"
                    className="hover:text-primary transition-colors"
                  >
                    Dubai Studio
                  </a>
                </li>
                <li>
                  <a
                    href="/#market-focus"
                    className="hover:text-primary transition-colors"
                  >
                    Pakistan Domestic Focus
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4
                className={`${styles.caption_text} !font-bold uppercase tracking-wider text-black dark:text-white`}
              >
                Contact
              </h4>
              <p
                className={`text-zinc-500 dark:text-zinc-400 leading-relaxed ${styles.span_text} !text-sm`}
              >
                PK Office: SB-9, 13/C Main University Rd, Block 13-C Gulshan-e-Iqbal, Karachi 75300
                <br />
                UAE Office: Ducamz, Dubai Auto Zone Market, Ras Al Khor, Dubai
              </p>
              <div
                className={`space-y-1.5 pt-2 text-zinc-500 dark:text-zinc-400 ${styles.span_text} !text-sm`}
              >
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@manzarkash.com"
                    className="hover:text-primary transition-colors text-black dark:text-white font-semibold"
                  >
                    hello@manzarkash.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="https://wa.me/923313936011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors text-black dark:text-white font-semibold"
                  >
                    +92 331 3936011
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={bannerRef}
          className="mt-16 border-t border-zinc-100 dark:border-zinc-900/60 pt-16 overflow-hidden select-none"
        >
          <div
            className={`text-[8.2vw] font-bold tracking-tighter leading-none text-primary/40 dark:text-primary/30 font-michroma text-center uppercase transition-all duration-1000 ease-out flex justify-center gap-[0.2vw] ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100 skew-y-0"
                : "translate-y-full opacity-0 scale-95 skew-y-6"
            }`}
            style={{ transformOrigin: "center top" }}
          >
            {words[wordIndex].split("").map((letter, index) => (
              <span
                key={`${wordIndex}-${index}`}
                className={`inline-block ${isVisible ? "animate-letter-in" : "opacity-0"}`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <span
                  className="inline-block animate-letter-bounce"
                  style={{
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  {letter}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div
          className={`mt-12 md:mt-16 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 text-center text-zinc-500 ${styles.caption_text}`}
        >
          <p>© {currentYear} Manzarkash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
