"use client";

import { useState, FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiCheck } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    market: "both",
    budget: "under-1000",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        website: "",
        market: "both",
        budget: "under-1000",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 relative">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">GET A QUOTE</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                LET'S BUILD SOMETHING BOLD
              </h2>
              <p className="text-zinc-650 dark:text-zinc-350 font-poppins italic text-lg leading-relaxed">
                Ready to dominate your market? Request a free auditing call and custom strategy overview.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-550/10 transition-all duration-300 transform hover:-translate-y-0.5"
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
                    <p className="text-xs text-zinc-500">Email Us Directly</p>
                    <a href="mailto:hello@manzarkash.com" className="text-sm font-semibold text-black dark:text-white hover:text-primary transition-colors">
                      hello@manzarkash.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200/50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Corporate HQ</p>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      Karachi, Pakistan & London, UK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
            {submitted ? (
              <div className="py-20 text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <FiCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Request Received!</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-poppins italic max-w-sm mx-auto">
                  A senior strategist will audit your site and reach out via email or phone within 12 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. Ali Khan"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. ali@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Website URL (Optional)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="e.g. https://mybrand.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Target Audience Focus</label>
                    <select
                      value={formData.market}
                      onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="pakistan">Pakistan domestic market</option>
                      <option value="international">International markets (Global)</option>
                      <option value="both">Both markets (Local & Global)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Monthly Budget Scope</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="under-1000">Under $1,000 / month (or equivalent PKR)</option>
                    <option value="1000-5000">$1,000 - $5,000 / month</option>
                    <option value="5000-plus">$5,000+ / month (Enterprise)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Briefly Outline Project Goals</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Describe target market goals, current challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-center text-white bg-primary hover:bg-primary/90 font-bold rounded-xl transition-all shadow-md shadow-primary/10 hover:shadow-primary/20 duration-300"
                >
                  Send Strategy Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
