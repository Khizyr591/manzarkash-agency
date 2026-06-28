"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const words = ["MANZARKASH", "INNOVATORS", "VISIONARIES", "CREATIVES"];
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
      { threshold: 0.05 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="font-michroma text-xl md:text-2xl tracking-widest text-black dark:text-white">
              MANZARKASH<span className="text-primary font-bold">.</span>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-poppins italic max-w-sm">
              We capture views, build landscapes, and scale digital operations with premium tech stacks and growth structures.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Services</h4>
              <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Search SEO</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Performance Ads</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Custom Dev</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Linguistic Copy</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Markets</h4>
              <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                <li><a href="#market-focus" className="hover:text-primary transition-colors">United States</a></li>
                <li><a href="#market-focus" className="hover:text-primary transition-colors">United Kingdom</a></li>
                <li><a href="#market-focus" className="hover:text-primary transition-colors">Middle East / Gulf</a></li>
                <li><a href="#market-focus" className="hover:text-primary transition-colors">Pakistan Domestic</a></li>
              </ul>
            </div>

            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Contact</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                UK Office: 85 Great Portland St, London<br />
                PK Office: Shahrah-e-Faisal, Karachi
              </p>
            </div>
          </div>
        </div>

        {/* Giant typographic reveal banner */}
        <div ref={bannerRef} className="mt-16 border-t border-zinc-100 dark:border-zinc-900/60 pt-16 overflow-hidden select-none">
          <div
            className={`text-[8.2vw] font-bold tracking-tighter leading-none text-zinc-200/50 dark:text-zinc-900/30 font-michroma text-center uppercase transition-all duration-1000 ease-out flex justify-center gap-[0.2vw] ${
              isVisible ? "translate-y-0 opacity-100 scale-100 skew-y-0" : "translate-y-full opacity-0 scale-95 skew-y-6"
            }`}
            style={{ transformOrigin: "center top" }}
          >
            {words[wordIndex].split("").map((letter, index) => (
              <span
                key={`${wordIndex}-${index}`}
                className={`inline-block ${isVisible ? "opacity-0 animate-letter-in" : "opacity-0"}`}
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

        {/* Sub-Footer */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Manzarkash. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
