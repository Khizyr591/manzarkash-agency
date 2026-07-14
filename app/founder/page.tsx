"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";
import styles from "@/lib/styles";
import { FiCode, FiCpu, FiMessageSquare, FiTrendingUp, FiLinkedin, FiMail } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function FounderPage() {
  const philosophies = [
    {
      title: "Conversion Architecture",
      desc: "A beautiful website is useless if it doesn't convert. We engineer high-speed, custom digital experiences designed specifically to turn search and ad traffic into paying customers.",
      icon: <FiTrendingUp className="w-5 h-5 text-primary" />,
    },
    {
      title: "Engineering Mastery",
      desc: "Speed is a feature. Custom theme engineering, API optimizations, and clean code guarantee a fast, seamless checkout layout that converts visitors into partners.",
      icon: <FiCode className="w-5 h-5 text-primary" />,
    },
    {
      title: "System Leverage",
      desc: "Automate everything that is repetitive. Through robust webhooks and conversational AI bots, we construct systems that scale without adding administrative burden.",
      icon: <FiCpu className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden w-full bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20 dark:opacity-10 bg-primary/20 blur-[120px]" />

          <div className={`${styles.container} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Intro */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 space-y-6 text-left"
              >
                <Eyebrow>ABOUT THE FOUNDER</Eyebrow>
                <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
                  MUHAMMAD BILAL
                  <br />
                  <span className="text-primary">FOUNDER & DIRECTOR</span>
                </h1>
                <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 font-light max-w-2xl`}>
                  Operating at the intersection of high-yield performance acquisition and custom software engineering. Muhammad Bilal scales local and international brands by constructing fast web architectures and robust ad campaigns.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button href="https://wa.me/923313936011" target="_blank" variant="primary" size="lg">
                    Connect on WhatsApp
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Work with Bilal
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50 max-w-md">
                  <a
                    href="https://www.linkedin.com/company/manzarkash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-poppins text-zinc-500 hover:text-primary transition-colors"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:info@manzarkash.com"
                    className="flex items-center gap-2 text-sm font-poppins text-zinc-500 hover:text-primary transition-colors"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: High Quality Styled Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative group">
                  {/* Glowing visual effect behind image */}
                  <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-tr from-primary to-orange-500 opacity-20 dark:opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

                  {/* Animated boundary elements */}
                  <div className="absolute inset-0 border border-primary/20 border-dashed rounded-3xl animate-[spin_120s_linear_infinite] pointer-events-none scale-102" />

                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900">
                    <img
                      src="/founder.jpg"
                      alt="Muhammad Bilal - Founder of Manzarkash Digital"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />

                    {/* Dark gradient overlay at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-16 flex flex-col justify-end text-left pointer-events-none">
                      <p className="text-xs font-mono tracking-widest text-primary font-bold uppercase">
                        Manzarkash Digital
                      </p>
                      <h3 className="font-michroma text-sm text-white tracking-wide uppercase mt-1">
                        Est. 2021 | Pakistan
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 md:py-28 relative w-full border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6"
              >
                <Eyebrow>THE PHILOSOPHY</Eyebrow>
                <h2 className={styles.heading_2}>
                  FUSING HIGH-ROI MARKETING WITH ROBUST CODE
                </h2>
                <p className={`${styles.paragraph} font-light text-zinc-500 dark:text-zinc-400`}>
                  Before founding Manzarkash Digital Agency, Muhammad Bilal operated as a growth strategist and digital marketing consultant in Pakistan. He repeatedly observed a critical bottleneck:
                </p>
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 border-l-4 border-l-primary space-y-3">
                  <FiMessageSquare className="text-primary w-5 h-5" />
                  <p className="text-sm font-poppins italic text-zinc-650 dark:text-zinc-350 leading-relaxed font-light">
                    "Brands were forced to split their budgets. They hired creative marketing agencies that didn't understand conversion engineering, or development shops that built functional sites but lacked marketing strategy. Manzarkash Digital Agency was founded to integrate high-performance web engineering with high-ROI marketing pipelines."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-6 space-y-6 text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-light font-poppins lg:pt-14"
              >
                <p>
                  At Manzarkash Digital Agency, we operate with a dual focus: we handle acquisition strategy and software engineering under a single, highly integrated team.
                </p>
                <p>
                  From writing serverless Next.js API webhooks and configuring Meta performance ad events to mapping search intent for search engine dominance, every campaign we run is architected to optimize your brand's growth and ROI.
                </p>
                <p>
                  Today, we support a growing network of partners across Pakistan, designing fast e-commerce architectures, dominating search metrics, and establishing high-yield digital presence. We align user acquisition campaigns and robust web architectures under one unified growth workflow.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Convictions Section */}
        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/20 relative w-full border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>CORE CONVICTIONS</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>
                HOW THE AGENCY THINKS
              </h2>
              <p className={styles.paragraph}>
                The principles driving our team workflow and client retainers.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {philosophies.map((phil, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                      {phil.icon}
                    </div>
                    <h3 className={`${styles.heading_4} !text-lg text-zinc-900 dark:text-white font-bold`}>
                      {phil.title}
                    </h3>
                    <p className={`${styles.span_text} !text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-light`}>
                      {phil.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Interactive Quote / Callout Section */}
        <section className="py-24 text-center relative w-full overflow-hidden border-t border-zinc-150 dark:border-zinc-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 bg-primary/20 blur-[140px]" />

          <div className={`${styles.container} max-w-4xl space-y-6 relative z-10`}>
            <Eyebrow>FOUNDER CONVICTION</Eyebrow>
            <blockquote className="font-michroma text-lg sm:text-2xl leading-relaxed text-zinc-900 dark:text-white max-w-3xl mx-auto italic font-light block pt-4">
              "Digital success is built on high-ROI marketing strategies and high-performance technology. We align user acquisition campaigns and robust web architectures under one unified growth workflow."
            </blockquote>
            <div className="space-y-1 pt-2">
              <p className="font-michroma text-sm text-primary uppercase font-bold tracking-widest">
                Muhammad Bilal
              </p>
              <p className="font-poppins text-xs text-zinc-500 uppercase tracking-widest">
                Founder, Manzarkash Digital Agency
              </p>
            </div>

            <div className="pt-6">
              <Button
                href="https://wa.me/923313936011"
                target="_blank"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Discuss Your Brand Strategy with Bilal
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
