"use client";

import { useState, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiCheck, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import styles from "@/lib/styles";
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
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
} as const;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "custom",
    market: "both",
    budget: "50000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        website: "",
        service: "custom",
        market: "both",
        budget: "50000",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 relative overflow-hidden w-full">
      <div className={styles.container}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <Eyebrow>GET A QUOTE</Eyebrow>
              <h2 className={styles.heading_2}>
                LET'S BUILD SOMETHING BOLD
              </h2>
              <p className={styles.paragraph}>
                Ready to dominate your market? Request a free auditing call and custom strategy overview.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <a
                href="https://wa.me/923313936011"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-550/10 transition-all duration-300 transform hover:-translate-y-0.5 ${styles.button_text} normal-case!`}
              >
                <FaWhatsapp className="w-6 h-6" />
                Chat on WhatsApp
              </a>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`${styles.caption_text} text-zinc-500!`}>Email Us Directly</p>
                    <a href="mailto:info@manzarkash.com" className={`hover:text-primary transition-colors ${styles.label_text} text-sm! text-black dark:text-white font-semibold`}>
                      info@manzarkash.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`${styles.caption_text} text-zinc-500!`}>Corporate HQ</p>
                    <p className={`${styles.label_text} text-sm! text-black dark:text-white font-semibold`}>
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-4"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h3 className={`${styles.heading_3} text-2xl! font-bold text-zinc-900 dark:text-white`}>Request Received!</h3>
                <p className={`${styles.paragraph_sm} text-zinc-500 dark:text-zinc-400 italic max-w-sm mx-auto`}>
                  A senior strategist will audit your site and reach out via email or phone within 12 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className={styles.label_text}>Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${styles.input_text}`}
                      placeholder="e.g. Ali Khan"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className={styles.label_text}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${styles.input_text}`}
                      placeholder="e.g. ali@company.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className={styles.label_text}>Your Niche / Current Website URL (if any)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${styles.input_text}`}
                      placeholder="e.g. https://mybrand.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <label className={styles.label_text}>Target Audience Focus</label>
                    <div className="relative w-full">
                      <select
                        value={formData.market}
                        onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none pr-10 ${styles.input_text}`}
                      >
                        <option value="pakistan">Pakistan market (Domestic)</option>
                        <option value="gulf">Gulf / Middle East (UAE, KSA, GCC)</option>
                        <option value="western">Western Markets (US, UK, EU, Canada)</option>
                        <option value="global">Global / Cross-Border Audience</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500 dark:text-zinc-400">
                        <FiChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className={styles.label_text}>Services Required</label>
                  <div className="relative w-full">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none pr-10 ${styles.input_text}`}
                    >
                      <option value="custom">Custom Solution</option>
                      <option value="ecommerce">E-Commerce Engineering</option>
                      <option value="marketing-ads">Performance Ads & Marketing</option>
                      <option value="seo">SEO & Content Solutions</option>
                      <option value="production-video-ads">Production & Video Ads</option>
                      <option value="product-visuals">Product Visuals & Creatives</option>
                      <option value="branding">Branding & Identity Design</option>
                      <option value="social-media">Social Media Handling</option>
                      <option value="whatsapp-automation">WhatsApp Automation</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500 dark:text-zinc-400">
                      <FiChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label className={styles.label_text}>Monthly Budget Scope (PKR)</label>
                    <span className="text-sm font-mono font-bold text-primary">
                      {(() => {
                        const num = parseInt(formData.budget, 10);
                        if (num >= 500000) return "PKR 500,000+ (5 Lac+)";
                        if (num >= 100000) {
                          const lacs = (num / 100000).toFixed(1).replace(/\.0$/, "");
                          return `PKR ${num.toLocaleString()} (${lacs} Lac)`;
                        }
                        return `PKR ${num.toLocaleString()}`;
                      })()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="25000"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 dark:text-zinc-500 font-mono">
                    <span>PKR 50,000 (50k)</span>
                    <span>PKR 500,000+ (5 Lac+)</span>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className={styles.label_text}>Briefly Outline Project Goals</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${styles.input_text}`}
                    placeholder="Describe target market goals, current challenges..."
                  />
                </motion.div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className={`w-full py-4 text-center text-white bg-primary hover:bg-primary/90 rounded-xl transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 duration-300 ${styles.button_text}`}
                >
                  Send Strategy Request
                </motion.button>
              </motion.form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
