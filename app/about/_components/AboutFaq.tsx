"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";
import { FiPlus } from "react-icons/fi";

interface FaqItem {
  q: string;
  a: string;
}

export default function AboutFaq() {
  const faqs: FaqItem[] = [
    {
      q: "Where does the name 'Manzarkash' come from?",
      a: "In Urdu, 'Manzar' means scenery or view, and 'Kash' refers to drawing or defining. Translating to 'Defining the Scenery', Manzarkash represents our mission to sculpt visual identity, technical structure, and automated operational flow for brands in the digital landscape.",
    },
    {
      q: "How do you collaborate and manage campaigns?",
      a: "Our engineering and marketing team operates from Pakistan, enabling seamless communication across our domestic network. We use collaborative digital whiteboards, shared project management dashboards, and structured weekly video syncs to keep branding and performance campaigns completely aligned.",
    },
    {
      q: "What does your typical project onboarding timeline look like?",
      a: "Our standard onboarding takes 7 to 10 days. We start with a target marketing blueprint audit, map technical bottlenecks, compile asset requirements, and align integration APIs. Development sprints typically deliver completed platform custom builds within 4 to 6 weeks.",
    },
    {
      q: "How do custom WhatsApp bots integrate with e-commerce platforms like Shopify?",
      a: "We develop direct API middleware connections between the WhatsApp Business Platform and your Shopify/WordPress databases. When a customer messages your number, the bot queries order statuses, checks stock levels, pushes dynamic checkout links, and instantly handles FAQs, all while syncing logs directly back to your store dashboard.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-800/60 overflow-hidden bg-zinc-50/20 dark:bg-zinc-950/10">
      <div className={styles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className={`${styles.heading_2} uppercase`}>
              ANSWERS TO CORE QUESTIONS
            </h2>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 font-light`}>
              Have questions about how we collaborate, our technical stack, or our brand solutions? Here's how we execute outcome partnerships.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/923313936011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-mono tracking-widest text-primary hover:text-primary/80 uppercase font-semibold transition-colors group cursor-pointer"
              >
                Ask a custom question{" "}
                <span className="inline-block translate-x-1 group-hover:translate-x-2 transition-transform duration-200">
                  &rarr;
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => (
              <FaqAccordionItem key={idx} faq={faq} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqAccordionItem({ faq, index }: { faq: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200/60 dark:border-zinc-800/60 last:border-0 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-4 text-zinc-900 dark:text-white font-medium hover:text-primary dark:hover:text-primary transition-colors focus:outline-none cursor-pointer group"
      >
        <span className="font-poppins text-base md:text-lg pr-4 font-semibold">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-primary transition-colors shrink-0"
        >
          <FiPlus className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className={`${styles.span_text} !text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light pt-1 pb-4 pr-6`}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
