"use client";

import { motion } from "framer-motion";
import { FiShare2, FiLayers, FiMessageCircle, FiTv, FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/app/styles/styles";

export default function SocialMediaPage() {
  const steps = [
    {
      num: "01",
      title: "Voice Discovery",
      desc: "We analyze your brand values, dissect competitor strategies, and define a clean visual guide and tone of voice for all content posts.",
      icon: <FiLayers className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Content Calendars",
      desc: "Compiling detailed monthly grids specifying topics, visual directions, copy angles, and hashtag lists before assets go into production.",
      icon: <FiTv className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "Asset Production",
      desc: "Our copywriters and studio photographers shoot reels, write Urdu/English scripts, design graphics, and edit micro-videos tailored for engagement.",
      icon: <FiShare2 className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "Community Moderation",
      desc: "We monitor your social presence: responding to comments, routing direct messages to sales pipelines, and scaling positive community sentiment.",
      icon: <FiMessageCircle className="w-5 h-5 text-primary" />
    }
  ];

  const socialFeed = [
    { title: "Product Spotlight Reel", metric: "84k Views", metricColor: "text-purple-500", desc: "Studio-shot skincare bottle transition with custom audio track." },
    { title: "Bilingual Carousel Post", metric: "+14.2% CTR", metricColor: "text-emerald-500", desc: "Urdu hook storytelling slide series explaining brand ingredients." },
    { title: "Lifestyle Campaign Photo", metric: "1,200+ Likes", metricColor: "text-pink-500", desc: "Studio styling layout with soft cinema shadows." }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />

      <main className="flex flex-col">
        {/* Creative Hero */}
        <section className="py-24 md:py-32 relative overflow-hidden w-full flex items-center justify-center bg-zinc-50/50 dark:bg-zinc-950/20 border-b border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>ORGANIC BRAND BUILDING</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-zinc-900 dark:text-white uppercase`}>
              SOCIAL MEDIA <br />
              <span className="text-primary">& CONTENT CREATION</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-505 dark:text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We script, direct, style, and manage full-service social media campaigns to cultivate an authentic local or global community for your brand.
            </p>
          </div>
          {/* Background circles */}
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-pink-550/5 dark:bg-pink-500/[0.02] blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-purple-550/5 dark:bg-purple-550/[0.02] blur-[80px] pointer-events-none" />
        </section>

        {/* Mock Creative Grid (Vibrant UX Accent) */}
        <section className="py-16 bg-zinc-50 dark:bg-zinc-950/40 border-b border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="text-center mb-10">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-bold font-michroma">CREATIVE SNAPSHOT</span>
              <h3 className={`${styles.heading_3} !text-base sm:!text-lg text-zinc-800 dark:text-zinc-100 uppercase mt-1`}>Social Feed Concept Examples</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {socialFeed.map((feed, i) => (
                <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 space-y-4">
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-850 pb-3">
                    <span className="text-xs font-michroma font-bold text-zinc-800 dark:text-zinc-200 uppercase">{feed.title}</span>
                    <span className={`text-xs font-mono font-bold ${feed.metricColor}`}>{feed.metric}</span>
                  </div>
                  <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                    {feed.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-400 tracking-wider uppercase font-semibold">
                    <span>CREATIVE ASSET OUTCOME</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 md:py-28 relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>CREATIVE TIMELINE</Eyebrow>
              <h2 className={`${styles.heading_2} uppercase`}>HOW WE TEASE & TELL</h2>
              <p className={styles.paragraph}>
                We align visual production workflows with monthly content schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary">{step.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-michroma text-base font-semibold text-zinc-900 dark:text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-150 dark:border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>CASE HISTORY</Eyebrow>
                <h2 className={styles.heading_2}>ZYLORA REELS SCALE</h2>
                <p className={styles.paragraph}>
                  How we structured short-form editorial campaigns to scale organic discovery in international retail markets.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Micro-Video Hooks:</strong> Directed lifestyle transitions focusing on tactile product touches and natural lighting.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-poppins text-zinc-650 dark:text-zinc-350">
                      <strong>Attribution Sync:</strong> Tied organic visual traffic back to Shopify conversions via promo code tracking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-md space-y-6">
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  SOCIAL KPI ATTRIBUTION
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                  ZYLORA APPAREL (US)
                </h3>
                <p className="text-xs text-zinc-505 dark:text-zinc-400 font-poppins font-light leading-relaxed">
                  We directed a series of highly visual lifestyle videos capturing product materials and fits, growing their organic Instagram and TikTok community impressions.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-150 dark:border-zinc-850">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">350k+</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">REEL VIEWS PRODUCED</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+24%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">ORGANIC ENGAGEMENT</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black border-t border-zinc-150 dark:border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>SCHEDULE A DISCOVERY CALL</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-zinc-900 dark:text-white uppercase !leading-tight`}>
              CULTIVATE AN AUTHENTIC <br />
              <span className="text-primary">DIGITAL COMMUNITY</span>
            </h2>
            <p className={styles.paragraph}>
              Connect with our team to request a visual content audit and custom styling calendar roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Request Content Audit
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
              >
                All Services
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 dark:opacity-[0.05] bg-primary blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
