"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function CaseStudiesCTA() {
  return (
    <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${styles.container} max-w-3xl space-y-8 relative z-10`}
      >
        <Eyebrow>YOUR STORY, NEXT</Eyebrow>
        <h2 className={`${styles.heading_2} text-3xl! sm:text-5xl! text-zinc-900 dark:text-white uppercase leading-tight!`}>
          The next case study<br />
          <span className="text-primary">could be yours.</span>
        </h2>
        <p className={styles.paragraph}>
          Book a 30-minute discovery call. We&apos;ll audit your funnel, benchmark against comparable Pakistan or UAE campaigns, and give you a written scope — no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="/contact" variant="primary" size="lg">
            Start My Project
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 dark:opacity-5 bg-primary/30 blur-[120px]" />
    </section>
  );
}
