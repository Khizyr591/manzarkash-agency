"use client";

import { motion } from "framer-motion";
import { FiCamera, FiGrid, FiFeather, FiSliders, FiArrowRight, FiCheck } from "react-icons/fi";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/app/styles/styles";

export default function ProductVisualsPage() {
  const steps = [
    {
      num: "01",
      title: "Concept & Moodboards",
      desc: "We research your audience, establish a creative tone, and create highly detailed moodboards defining backdrops, lighting angles, and prop arrangements before shooting.",
      icon: <FiFeather className="w-5 h-5 text-primary" />
    },
    {
      num: "02",
      title: "Set Styling & Art Direction",
      desc: "Our Karachi studio team sets up the physical shoot environment, styling textures, background colors, and positioning product structures for maximum visual depth.",
      icon: <FiGrid className="w-5 h-5 text-primary" />
    },
    {
      num: "03",
      title: "Cinema-Grade Shooting",
      desc: "Captured with high-resolution studio cameras and sharp prime lenses. We utilize cinematic softbox diffusers and shape shadows to accent premium quality.",
      icon: <FiCamera className="w-5 h-5 text-primary" />
    },
    {
      num: "04",
      title: "Precision Editing & Grading",
      desc: "Every asset undergoes strict commercial editing: micro-dust cleanup, label alignment corrections, background extension, and highly accurate color matching.",
      icon: <FiSliders className="w-5 h-5 text-primary" />
    }
  ];

  const outcomes = [
    "High-resolution catalog product images (PNG/JPG)",
    "Cinema-lit street lifestyle mockups & assets",
    "Optimized aspect ratios for Meta, TikTok, and web headers",
    "Color-accurate files matching physical packaging specs"
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-50 dark selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex flex-col">
        {/* Cinematic Hero */}
        <section className="py-28 md:py-36 relative overflow-hidden w-full flex items-center justify-center bg-radial from-zinc-900 to-black border-b border-zinc-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,78,14,0.06)_0%,transparent_60%)] pointer-events-none" />
          
          <div className={`${styles.container} text-center space-y-6 max-w-4xl relative z-10`}>
            <Eyebrow>CREATIVE PRODUCTION</Eyebrow>
            <h1 className={`${styles.heading_1} !text-4xl sm:!text-6xl !leading-[1.1] text-white uppercase tracking-wider`}>
              PRODUCT VISUALS <br />
              <span className="text-primary">& CREATIVE DIRECTION</span>
            </h1>
            <p className={`${styles.paragraph} text-zinc-400 max-w-2xl mx-auto italic font-light`}>
              We shoot catalog and editorial visuals out of our physical Karachi studio, shaping light and texture to define authentic product luxury.
            </p>
          </div>
        </section>

        {/* Visual Mockups Showcase (UX Accent) */}
        <section className="py-16 bg-zinc-950 border-b border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Concept Card 1 */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">CONCEPT 01</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">Cinema Shadow Contours</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Shaping premium highlights on high-gloss cosmetics containers.</p>
                </div>
              </div>

              {/* Concept Card 2 */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">CONCEPT 02</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">Styling Textures & Props</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Pairing lifestyle items with organic clays, stones, and water waves.</p>
                </div>
              </div>

              {/* Concept Card 3 */}
              <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-end p-6 hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="relative z-20 space-y-2">
                  <span className="text-[10px] font-mono text-primary uppercase font-bold tracking-widest">CONCEPT 03</span>
                  <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase">Digital Retouching Fidelity</h3>
                  <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">Color matching and micro-cleanup ensuring high-res retail clarity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps (Tailored UX) */}
        <section className="py-20 md:py-28 bg-black relative">
          <div className={styles.container}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <Eyebrow>OUR WORKFLOW</Eyebrow>
              <h2 className={`${styles.heading_2} text-white uppercase`}>HOW WE SHAPE THE VIEW</h2>
              <p className={`${styles.paragraph} text-zinc-400 max-w-2xl mx-auto font-light`}>
                From the first sketch to the final pixel retouch, we maintain complete control over visual parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-850 hover:border-primary/20 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary/60">{step.num}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-michroma text-base font-semibold text-white uppercase tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables & Case Studies */}
        <section className="py-20 md:py-28 bg-zinc-950 border-t border-zinc-900">
          <div className={styles.container}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Eyebrow>DELIVERED ASSETS</Eyebrow>
                <h2 className={`${styles.heading_2} text-white`}>WHAT YOU RECEIVE</h2>
                <p className={`${styles.paragraph} text-zinc-400 font-light`}>
                  We bundle production outputs ready for integration into Shopify banners, catalog slots, and performance advertising campaign formats.
                </p>
                <ul className="space-y-3 pt-2">
                  {outcomes.map((out, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-300 font-poppins font-light">
                      <FiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study Card */}
              <div className="lg:col-span-6 p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full pointer-events-none blur-[40px]" />
                <span className="px-3 py-1 rounded-md text-[9px] font-mono bg-primary/10 border border-primary/20 text-primary font-bold tracking-wider uppercase">
                  CASE STUDY IN FOCUS
                </span>
                <h3 className="font-michroma text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                  LUMIÈRE COSMETICS (UK)
                </h3>
                <p className="text-xs text-zinc-400 font-poppins font-light leading-relaxed">
                  We styled a collection of premium skincare containers using textured backdrops and organic rock formations at our Karachi studio. The resulting cinematic ad creatives drove high click-through results on social media.
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">+82%</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">CLICK-THROUGH RATE</p>
                  </div>
                  <div>
                    <span className="text-3xl font-michroma font-bold text-primary">150+</span>
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5">CREATIVE ASSETS SHOT</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Footer CTA */}
        <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-black border-t border-zinc-900">
          <div className={`${styles.container} max-w-3xl space-y-8 relative z-10`}>
            <Eyebrow>SCHEDULE A SHOOT</Eyebrow>
            <h2 className={`${styles.heading_2} !text-3xl sm:!text-5xl text-white uppercase !leading-tight`}>
              DEFINE YOUR BRAND'S <br />
              <span className="text-primary">VISUAL DOMINANCE</span>
            </h2>
            <p className={`${styles.paragraph} text-zinc-405 max-w-2xl mx-auto font-light`}>
              Request a visual scoping audit. We evaluate your current storefront product styling and design a custom catalog photography roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                Book Studio Shoot
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-zinc-800 text-zinc-300 hover:text-white hover:border-white"
              >
                All Agency Services
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10 bg-primary blur-[120px]" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
