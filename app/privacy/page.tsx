"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import { motion } from "framer-motion";
import styles from "@/lib/styles";
import { FiLock, FiEye, FiServer, FiShare2, FiShield, FiMail } from "react-icons/fi";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: <FiLock className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          At Manzarkash, we prioritize the privacy and security of our clients, partners, and website visitors. This Privacy Policy details how we collect, use, store, and safeguard your personal and business information when you interact with our website, custom web applications, performance marketing services, and WhatsApp automation systems.
        </p>
        <p className="mt-4">
          By utilizing our digital engines or submitting information through our portal, you consent to the data collection and processing methods outlined in this document.
        </p>
      </>
    ),
  },
  {
    id: "information-collection",
    title: "2. Information We Collect",
    icon: <FiEye className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          We gather information necessary to provide top-tier performance marketing and custom engineering services. This includes:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Contact & Business Details:</strong> Name, professional email address, WhatsApp/phone number, company name, and project scope submitted voluntarily through our contact forms.
          </li>
          <li>
            <strong className="text-zinc-200">Technical & Analytical Data:</strong> IP address, device type, operating system, browser configuration, page views, and conversion journey logs captured via secure cookies and analytical tag managers.
          </li>
          <li>
            <strong className="text-zinc-200">Operational Assets:</strong> API keys, database credentials, or catalog content provided securely by clients during onboarding for custom e-commerce integrations and WhatsApp Cloud API builds.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "information-usage",
    title: "3. How We Use Your Data",
    icon: <FiServer className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          Manzarkash processes your information to scale brand operations and deliver high-converting web applications. Specifically:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>To conceptualize, configure, and maintain custom Shopify, Next.js storefronts, and automated pipelines.</li>
          <li>To optimize paid advertising funnels across Meta, Google, and TikTok platforms.</li>
          <li>To deploy automated messaging sequences and automated CRM handlers through the WhatsApp Business API.</li>
          <li>To analyze user behavior and traffic trends, improving overall website speed and UX layouts.</li>
          <li>To maintain secure channels for project feedback and billing communications.</li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Third-Party Integrations & Sharing",
    icon: <FiShare2 className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          We do not sell, rent, or lease your personal information. Data is shared exclusively with verified third-party cloud infrastructure tools necessary to run our service architectures:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-400">
          <li>
            <strong className="text-zinc-200">Execution Partners:</strong> Infrastructure hosting engines (Vercel, AWS), form endpoints (EmailJS), and messaging gateways (Meta Cloud API).
          </li>
          <li>
            <strong className="text-zinc-200">Performance Marketing Trackers:</strong> Google Analytics, Meta Pixels, and TikTok Conversion APIs used to monitor ad performance and user behavior anonymously.
          </li>
          <li>
            <strong className="text-zinc-200">Regulatory Authorities:</strong> Only when legally required to comply with local regulatory frameworks in Pakistan, the UAE, or international law.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-security",
    title: "5. Security Measures & Retention",
    icon: <FiShield className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          We employ strict security policies to protect database nodes, client repositories, and visitor logs. Custom web applications designed by Manzarkash use end-to-end encryption protocols (SSL/TLS), secure token authentication (JWT), and isolated environment variables to prevent unauthorized access or system breaches.
        </p>
        <p className="mt-4">
          Client data is stored for the duration of the engagement and deleted or returned upon termination, except where data must be retained to satisfy statutory audit requirements.
        </p>
      </>
    ),
  },
  {
    id: "contact-rights",
    title: "6. Your Rights & Contacts",
    icon: <FiMail className="w-5 h-5 text-primary" />,
    content: (
      <>
        <p>
          You hold full rights over your data. You may request to review, update, transfer, or completely delete your personal details from our active outreach campaigns and CRMs.
        </p>
        <p className="mt-4">
          For any questions concerning this Privacy Policy, data access requests, or system integration compliance, reach out to our privacy desk:
        </p>
        <div className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-2">
          <p className="text-sm">
            <strong className="text-white">Email:</strong>{" "}
            <a href="mailto:manzarkashdigitalagency@gmail.com" className="text-primary hover:underline">
              manzarkashdigitalagency@gmail.com
            </a>
          </p>
          <p className="text-sm">
            <strong className="text-white">WhatsApp Helpline:</strong>{" "}
            <a href="https://wa.me/923313936011" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              +92 331 3936011
            </a>
          </p>
          <p className="text-sm text-zinc-500">
            Address: SB-9, 13/C Main University Rd, Block 13-C Gulshan-e-Iqbal, Pakistan
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>COMPLIANCE & LEGAL</Eyebrow>
            <h1 className={`${styles.heading_1} text-4xl! sm:text-6xl! leading-[1.1]! text-zinc-900 dark:text-white uppercase`}>
              PRIVACY <span className="text-primary">POLICY</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              Last updated: July 24, 2026. This policy describes how Manzarkash collects, protects, and handles your digital information.
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
