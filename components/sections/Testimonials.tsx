"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import styles from "@/app/styles/styles";
import Eyebrow from "@/components/ui/Eyebrow";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Manzarkash completely transformed our online look. Their product photography is world-class, and our social media engagement went up by 300% in the first two months.",
      author: "Bilal Siddiqui",
      role: "Marketing Director",
      company: "Al-Hamd Foods",
      service: "Photography & Social Content",
      rating: 5,
    },
    {
      quote: "We hired them to build our Shopify store and manage our Meta ads. They delivered an incredibly fast, premium site and hit our target return on ad spend within 30 days.",
      author: "Sarah Jenkins",
      role: "Co-Founder",
      company: "DecoSpace UK",
      service: "Shopify Store & Paid Ads",
      rating: 5,
    },
    {
      quote: "Their WhatsApp automation setup streamlined our order confirmation process completely. Combined with local SEO rankings, we are handling twice the volume with zero overhead.",
      author: "Ayesha Khan",
      role: "Operations Head",
      company: "Zari Boutique",
      service: "WhatsApp & SEO Solutions",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white dark:bg-zinc-950 transition-colors duration-700 relative w-full overflow-hidden">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 px-6">
        <Eyebrow>TESTIMONIALS</Eyebrow>
        <h2 className={styles.heading_2}>
          TRUSTED BY GROWING BRANDS
        </h2>
        <p className={styles.paragraph}>
          See how we help businesses in Karachi and globally optimize their digital performance.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-linear-to-r from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 z-30 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-linear-to-l from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80 z-30 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused] cursor-pointer px-8">
          {testimonials.map((t, idx) => (
            <div
              key={`loop-1-${idx}`}
              className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-poppins text-zinc-600 dark:text-zinc-355 italic text-sm md:text-base leading-relaxed whitespace-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 mt-6 flex flex-col gap-1">
                <h4 className="font-michroma text-xs md:text-sm text-zinc-900 dark:text-white font-semibold">
                  {t.author}
                </h4>
                <div className="flex items-center justify-between text-[10px] md:text-xs text-zinc-500 font-poppins">
                  <span>{t.role}, {t.company}</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-medium text-[9px] tracking-wider uppercase shrink-0">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {testimonials.map((t, idx) => (
            <div
              key={`loop-2-${idx}`}
              className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-poppins text-zinc-600 dark:text-zinc-355 italic text-sm md:text-base leading-relaxed whitespace-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 mt-6 flex flex-col gap-1">
                <h4 className="font-michroma text-xs md:text-sm text-zinc-900 dark:text-white font-semibold">
                  {t.author}
                </h4>
                <div className="flex items-center justify-between text-[10px] md:text-xs text-zinc-500 font-poppins">
                  <span>{t.role}, {t.company}</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary/5 text-primary font-medium text-[9px] tracking-wider uppercase shrink-0">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
