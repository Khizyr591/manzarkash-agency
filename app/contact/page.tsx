"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiClock, FiGlobe } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/shared/Contact";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

interface FaqItem {
  q: string;
  a: string;
}

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const contactFaqs: FaqItem[] = [
    {
      q: "What information should I provide for the free audit request?",
      a: "To get the most value out of our strategy audit, please share your current website URL, any active advertising channel metrics, search keyword rankings you are targeting, and your primary commercial bottlenecks (e.g. high customer service workload, low mobile conversion rate, or expensive ad acquisition).",
    },
    {
      q: "Do you offer localized pricing for Pakistani brand partners?",
      a: "Yes. UAE retainers are billed in AED (or USD equivalent) to match Gulf procurement norms, and we offer tailored local project rates and performance structures in PKR for Pakistani brand operators to support growth in our home ecosystem.",
    },
    {
      q: "How does the Outcome Partnership retainer structure work?",
      a: "We believe in shared risk. In outcome models, we tie a portion of our agency compensation to net growth metrics, like conversion increases or organic lead pipeline thresholds. We operate as an integrated technical and growth partner rather than a simple outsource vendor.",
    },
    {
      q: "How long does a technical audit and discovery call take?",
      a: "Our initial consultation call takes about 30 to 45 minutes. Following the call, we deliver a customized audit blueprint summarizing speed bottlenecks, ad account leaks, and search keyword gaps within 3 to 4 business days.",
    },
  ];

  const [clocks, setClocks] = useState({
    karachi: "--:--:--"
  });

  useEffect(() => {
    const updateTime = () => {
      const getFormattedTime = (tz: string) => {
        return new Date().toLocaleTimeString("en-US", {
          timeZone: tz,
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      };
      setClocks({
        karachi: getFormattedTime("Asia/Karachi")
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-20 md:py-28 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h1 className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.1]! text-zinc-900 dark:text-white uppercase`}>
              CONNECT FOR <span className="text-primary">INSTANT RESPONSE</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Have a project query or audit request? Message our team directly or fill out our project scope form beneath. We respond to WhatsApp queries in real-time.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[100px]" />
        </section>

        <section className="py-12 bg-white dark:bg-black border-b border-zinc-150 dark:border-zinc-900 relative">
          <div className={`${styles.container}`}>
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-between p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-500">
                    <FiGlobe className="w-4 h-4 text-primary" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">PAKISTAN AGENCY (HQ)</span>
                  </div>
                  <h3 className="text-lg font-bold font-michroma text-zinc-900 dark:text-white">MANZARKASH DIGITAL</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end text-zinc-500 mb-1">
                    <FiClock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono tracking-widest uppercase">LOCAL TIME</span>
                  </div>
                  <div className="text-sm md:text-base font-mono font-bold text-primary">
                    {clocks.karachi}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <section className="py-20 md:py-28 border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50/20 dark:bg-zinc-950/10">
          <div className={styles.container}>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <Eyebrow>ONBOARDING FAQ</Eyebrow>
                <h2 className={`${styles.heading_2} uppercase`}>
                  PARTNERSHIP QUESTIONS
                </h2>
                <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 font-light`}>
                  Details on scoping, contract audits, retainers, and how we kick off brand growth workflows.
                </p>
              </div>

              <div className="space-y-4">
                {contactFaqs.map((faq, index) => {
                  const isActive = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="border border-zinc-250/50 dark:border-zinc-800/55 rounded-2xl bg-white dark:bg-zinc-900/30 overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isActive ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                      >
                        <span className="font-poppins text-sm md:text-base font-medium text-zinc-900 dark:text-white pr-4">
                          {faq.q}
                        </span>
                        <FiPlus
                          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isActive ? "transform rotate-45" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 text-xs md:text-sm text-zinc-500 dark:text-zinc-405 leading-relaxed font-light font-poppins border-t border-zinc-150/50 dark:border-zinc-800/50 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
