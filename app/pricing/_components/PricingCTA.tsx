"use client";

import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";

export default function PricingCTA() {
  return (
    <section className="py-20 md:py-28 text-center relative w-full overflow-hidden bg-zinc-50/40 dark:bg-zinc-950/30 border-t border-zinc-150 dark:border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`${styles.container} max-w-3xl space-y-8 relative z-10`}
      >
        <Eyebrow>NEXT STEP</Eyebrow>
        <h2 className={`${styles.heading_2} text-3xl! sm:text-5xl! text-zinc-900 dark:text-white uppercase leading-tight!`}>
          Not sure which tier?<br />
          <span className="text-primary">Let&apos;s talk it through.</span>
        </h2>
        <p className={styles.paragraph}>
          Book a 30-minute discovery call. We&apos;ll assess your funnel, benchmark against comparable Pakistan or UAE brands, and recommend a starting tier — with a written scope, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button href="/contact" variant="primary" size="lg">
            Book Discovery Call
          </Button>
          <Button href="/case-studies" variant="outline" size="lg">
            See Case Studies
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
