"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import styles from "@/lib/styles";
import { FiTarget, FiTrendingUp, FiCode, FiCheckCircle } from "react-icons/fi";
import AboutValues from "@/app/about/_components/AboutValues";
import AboutTimeline from "@/app/about/_components/AboutTimeline";
import AboutTeam from "@/app/about/_components/AboutTeam";
import AboutFaq from "@/app/about/_components/AboutFaq";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

export default function AboutPage() {
  const pillars = [
    {
      title: "Creative Strategy",
      desc: "Designing high-converting visual assets and ad creatives to immediately capture customer interest and showcase product value.",
      icon: <FiTarget className="w-6 h-6 text-primary" />,
    },
    {
      title: "Performance Focus",
      desc: "Building outcome-driven SEO, search rankings, and Meta/TikTok paid ad campaigns that yield measurable return on ad spend.",
      icon: <FiTrendingUp className="w-6 h-6 text-primary" />,
    },
    {
      title: "Modern Engineering",
      desc: "Developing fast, responsive, and robust Shopify and Next.js e-commerce websites and custom portfolio platforms.",
      icon: <FiCode className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              DEFINING THE <span className="text-primary">DIGITAL SCENERY</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Manzarkash Digital Agency is a premium growth marketing and web engineering agency delivering visual ad design, conversion copywriting, paid ad campaigns, search engine optimization (SEO), and automated web solutions to brands in Pakistan.
            </p>
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        </section>

        <section className="py-20 md:py-28 relative w-full border-t border-zinc-150 dark:border-zinc-800/60">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 space-y-6"
              >
                <Eyebrow>OUR MISSION</Eyebrow>
                <h2 className={styles.heading_2}>
                  BRIDGING CREATIVE ART & STRATEGIC CODE
                </h2>
                <p className={styles.paragraph}>
                  We believe that digital success sits at the intersection of beautiful aesthetic content and highly optimised systems.
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-poppins leading-relaxed">
                  Too often, agencies force brands to choose between a creative marketing agency that does not understand performance metrics, or a web development house that lacks brand strategy. At Manzarkash Digital Agency, we provide both under a single unified workflow. We design conversion-focused ad creatives, build high-performance e-commerce platforms, drive search engine presence, and scale messaging through automation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 md:p-10 space-y-6"
              >
                <h3 className={`${styles.heading_4} !text-lg sm:!text-xl text-zinc-900 dark:text-white !font-medium`}>
                  What Sets Us Apart
                </h3>
                <ul className={`space-y-4 text-zinc-600 dark:text-zinc-350 ${styles.span_text} !text-sm`}>
                  <li className="flex gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Dual Focus Delivery:</strong> Aligning local audience engagement with premium global execution.</span>
                  </li>
                  <li className="flex gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Shopify & WordPress Experts:</strong> Designing fast stores with robust SEO architectures.</span>
                  </li>
                  <li className="flex gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Data-Driven Ads ROI:</strong> Ad setups on Meta, Google, and TikTok built specifically to convert.</span>
                  </li>
                  <li className="flex gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span><strong>WhatsApp Automations:</strong> Eliminating customer support bottleneck through custom chatbots.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <AboutValues />

        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 relative w-full border-y border-zinc-150 dark:border-zinc-800/60">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>OUR CORE PILLARS</Eyebrow>
              <h2 className={styles.heading_2}>FOUNDATIONS OF SUCCESS</h2>
              <p className={styles.paragraph}>
                How we deliver consistent outcome retainers to our growing client partner network.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className={`${styles.heading_4} !text-lg text-zinc-900 dark:text-white !font-semibold`}>
                      {pillar.title}
                    </h3>
                    <p className={`${styles.span_text} !text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed`}>
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AboutTimeline />

        <AboutTeam />

        <AboutFaq />

        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>COLLABORATE WITH US</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              READY TO DEFINE YOUR <span className="text-primary">DIGITAL SCENERY?</span>
            </h2>
            <p className={styles.paragraph}>
              Get a custom project audit, target keyword maps, and marketing plan blueprint.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://wa.me/923313936011"
                target="_blank"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/#contact"
                variant="outline"
                size="lg"
                className="border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900"
              >
                Send Audit Request
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
