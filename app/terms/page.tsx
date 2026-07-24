"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import { motion } from "framer-motion";
import styles from "@/lib/styles";
import { FiCheckSquare, FiAward, FiDollarSign, FiZap, FiAlertTriangle, FiFileText } from "react-icons/fi";

const sections = [
  {
    id: "acceptance",
    title: "1. Agreement to Terms",
    icon: <FiCheckSquare className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          By accessing the Manzarkash website, scheduling consultations, or engaging us to design, engineer, or deploy advertising assets, you agree to comply with and be bound by these Terms and Conditions.
        </p>
        <p className="mt-4">
          These Terms govern all service deliveries, custom codebase access, and administrative interactions. If you disagree with any segment of these clauses, you must suspend the use of our services immediately.
        </p>
      </>
    ),
  },
  {
    id: "services-sow",
    title: "2. Services & Scope of Work (SOW)",
    icon: <FiZap className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          Manzarkash provides custom software engineering, conversion copywriting, paid ad management, and automated workflow configurations.
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Execution Parameters:</strong> Every engagement is guided by a separate, legally-binding Scope of Work (SOW) or Service Agreement, specifying deliverables, timelines, and technical requirements.
          </li>
          <li>
            <strong className="text-zinc-200">Deliverable Alterations:</strong> Modifications to designs, custom features, or campaign parameters requested outside the initial SOW are subject to separate revision fee estimates.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "3. Intellectual Property Rights",
    icon: <FiAward className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          Ownership of codebases, design assets, and marketing campaigns is managed strictly as follows:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Agency Materials:</strong> All proprietary design systems, pre-built layout libraries, base code structures, and automated flow templates remain the sole property of Manzarkash.
          </li>
          <li>
            <strong className="text-zinc-200">Client Deliverables:</strong> Upon full receipt of agreed contract payments, all custom-made assets (websites, graphics, copy, specific database configurations) transfer fully to the client, granting unlimited, royalty-free usage rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "billing-payments",
    title: "4. Payments, Spend & Cancellations",
    icon: <FiDollarSign className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          Engagements with Manzarkash conform to structured billing milestones:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Milestone Schedules:</strong> Development projects require a standard upfront deposit before work begins, with subsequent payments mapped to key feature releases.
          </li>
          <li>
            <strong className="text-zinc-200">Ad Spend Management:</strong> Paid advertising budgets (Meta, Google, TikTok Ads) are paid directly by the client to the respective platforms. Manzarkash is not liable for ad account shutdowns or spending spikes.
          </li>
          <li>
            <strong className="text-zinc-200">Refund Limitations:</strong> Given the customized execution nature of brand development and digital engineering, setup fees and milestone payments are strictly non-refundable.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "whatsapp-compliance",
    title: "5. Platform Compliance & Integration Rules",
    icon: <FiFileText className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          Clients using our custom WhatsApp CRM automation engines, webhooks, or API integrations must maintain alignment with standard platform rules:
        </p>
        <p className="mt-4 text-zinc-400">
          You are solely responsible for obtaining and maintaining verified Meta Business Manager accounts, WhatsApp Business Accounts (WABA), and complying with the Meta Commerce Policy. Manzarkash does not guarantee or control numbers getting flagged, rate-limited, or blocked by Meta due to outbound message quality or customer spam reports.
        </p>
      </>
    ),
  },
  {
    id: "liability-limitation",
    title: "6. Limitation of Liability",
    icon: <FiAlertTriangle className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Manzarkash and its directors shall not be held liable for any indirect, incidental, or consequential damages.
        </p>
        <p className="mt-4 text-zinc-400">
          This includes but is not limited to: loss of e-commerce revenue, server downtime, organic search ranking fluctuations following SEO adjustments, Meta/Google ad account bans, or client customer service disputes related to custom WhatsApp conversational bot outputs.
        </p>
      </>
    ),
  },
];

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>LEGAL FRAMEWORK</Eyebrow>
            <h1 className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.1]! text-zinc-900 dark:text-white uppercase`}>
              TERMS & <span className="text-primary">CONDITIONS</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Last updated: July 24, 2026. These terms govern the service relationship, deliverables, and operational parameters of our agency.
            </p>
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 relative w-full border-t border-zinc-150 dark:border-zinc-800/60">
          <div className={`${styles.container} max-w-4xl mx-auto`}>
            <div className="space-y-16">
              {sections.map((section, idx) => (
                <motion.article
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative border-l-2 border-zinc-200 dark:border-zinc-800 focus-within:border-primary hover:border-primary/60 pl-6 md:pl-10 transition-colors duration-300"
                >
                  {/* Decorative icon bullet */}
                  <div className="absolute left-[-11px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-primary flex items-center justify-center transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-primary transition-colors" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <h2 className="font-michroma text-lg md:text-xl font-bold text-zinc-900 dark:text-white tracking-wide uppercase">
                        {section.title}
                      </h2>
                    </div>
                    <div className="font-poppins text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                      {section.content}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
