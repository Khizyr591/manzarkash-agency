"use client";

import {
  FiTrendingUp,
  FiTarget,
  FiCode,
  FiLayout,
  FiMessageSquare,
  FiShare2,
  FiPackage,
  FiCheck,
  FiArrowRight,
  FiVideo,
  FiCamera,
} from "react-icons/fi";
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

export default function Services() {
  const services = [
    {
      title: "Video Ads Production",
      desc: "High-retention commercial video ads, direct-response hooks, and custom brand campaign shoots designed to scale ROAS.",
      points: [
        "Hook & Storyboard Development",
        "Dynamic Captions & Motion Graphics",
        "Direct-Response Video Retainers",
        "Platform-Optimized Campaign Shoots",
      ],
      icon: <FiVideo className="w-6 h-6" />,
      href: "/services/production-video-ads",
    },
    {
      title: "Product Photography & Visuals",
      desc: "Studio-lit catalog shoots, product lifestyle scenes, and high-converting graphic ad layouts built for premium retail brands.",
      points: [
        "Studio-Lit Catalog Photography",
        "Lifestyle Product Shoots & Styling",
        "High-Fidelity Ad Banners & Layouts",
        "A/B Testing & Optimization",
      ],
      icon: <FiCamera className="w-6 h-6" />,
      href: "/services/product-visuals",
    },
    {
      title: "Marketing & Ads Campaigns",
      desc: "Result-driven marketing campaigns and ads running on Meta, Google, and TikTok to attract buying customers.",
      points: [
        "High-Conversion Ads Campaigns",
        "Meta (Facebook & Instagram) Advertising",
        "TikTok & Google PPC Marketing",
        "Targeted Audience & Pixel Setup",
      ],
      icon: <FiTarget className="w-6 h-6" />,
      href: "/services/marketing-ads",
    },
    {
      title: "Social Media & Content",
      desc: "Full-scale social media handling, creative content creation, and active brand marketing strategies to grow your local or global community.",
      points: [
        "Full-Service Social Media Handling",
        "Strategic Brand Content Creation",
        "Engaging Video & Visual Asset Design",
        "Community Growth & Brand Management",
      ],
      icon: <FiShare2 className="w-6 h-6" />,
      href: "/services/social-media",
    },
    {
      title: "Advanced SEO Solutions",
      desc: "Dominating local search queries across Pakistan to bring free, compounding organic traffic to your brand.",
      points: [
        "Local SEO & Google Maps Domination",
        "Technical SEO & Speed Performance",
        "Strategic Keyword Targeting",
        "High-Authority Content Building",
      ],
      icon: <FiTrendingUp className="w-6 h-6" />,
      href: "/services/seo",
    },
    {
      title: "E-Commerce & Custom Portfolios",
      desc: "Stunning portfolio showcases and robust e-commerce solutions built on Shopify, WordPress, or custom platforms to turn visitors into buying customers.",
      points: [
        "Shopify & WordPress E-commerce Sites",
        "Custom Portfolio & Showcase Sites",
        "Fully Responsive, Mobile-First Layouts",
        "Rapid Load Times & SEO Optimization",
      ],
      icon: <FiCode className="w-6 h-6" />,
      href: "/services/ecommerce",
    },
    {
      title: "WhatsApp Automation & Support",
      desc: "Scaling your customer support and sales operations with smart WhatsApp automation, chatbot integrations, and live support routing.",
      points: [
        "WhatsApp Business Chatbots & Automation",
        "Automated Order Tracking & Confirmations",
        "Customer Support Routing & Integrations",
        "CRM Setup & Direct Message Scaling",
      ],
      icon: <FiMessageSquare className="w-6 h-6" />,
      href: "/services/whatsapp-automation",
    },
    {
      title: "Branding & Identity Design",
      desc: "Comprehensive visual systems and guidelines that establish an unmistakable identity across both digital and print channels.",
      points: [
        "Logo Suite & Typographic Scale",
        "Brand Color & Voice Guidelines",
        "Style Guides & Presentation Decks",
        "Working Figma Design System",
      ],
      icon: <FiLayout className="w-6 h-6" />,
      href: "/services/branding",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 relative w-full"
    >
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24"
        >
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2 className={`${styles.heading_2} bg-linear-to-b from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent`}>
            ROI-DRIVEN DIGITAL CAPABILITIES
          </h2>
          <p className={styles.paragraph}>
            Engineered to remove bottlenecks and scale customer acquisition
            channels smoothly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-primary/20 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white duration-300">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className={styles.heading_3}>{service.title}</h3>
                  <p className={styles.paragraph_sm}>{service.desc}</p>
                </div>

                <ul className="space-y-3.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {service.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className={`flex items-center gap-3 text-zinc-700 dark:text-zinc-300 ${styles.span_text}`}
                    >
                      <FiCheck className="w-4 h-4 text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href={service.href}
                  className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors ${styles.label_text}`}
                >
                  Explore Process & Cases
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
