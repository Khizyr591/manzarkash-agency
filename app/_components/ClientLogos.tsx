"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const realClientLogos = [
  {
    name: "Newbury UAE",
    src: "/client_logos/newbury.png",
    alt: "Newbury UAE Brand",
    category: "Luxury Retail & Web Engine",
  },
  {
    name: "Clutec",
    src: "/client_logos/Clutec.png",
    alt: "Clutec Brand",
    category: "Enterprise Software & Tech",
  },
  {
    name: "Herradura Villas",
    src: "/client_logos/Herradura Villas.png",
    alt: "Herradura Villas Brand",
    category: "Luxury Real Estate & Villas",
  },
  {
    name: "For Sale By Investors",
    src: "/client_logos/for sale by investors.png",
    alt: "For Sale By Investors Brand",
    category: "Investment & Property Network",
  },
  {
    name: "Lushly",
    src: "/client_logos/Lushly New.png",
    alt: "Lushly Brand",
    category: "Frozen Fruit Ice Lollies & FMCG",
  },
  {
    name: "Guzel",
    src: "/client_logos/Guzel.png",
    alt: "Guzel Brand",
    category: "Fashion & Lifestyle",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28 bg-black border-y border-zinc-900 relative w-full overflow-hidden select-none">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none opacity-10 bg-primary blur-[160px]" />

      <div className={`${styles.container} max-w-7xl mx-auto mb-14 relative z-10 flex flex-col items-center gap-3 text-center`}>
        <Eyebrow>OUR CLIENT NETWORK</Eyebrow>
        <h2 className={`${styles.heading_2} uppercase bg-linear-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-transparent`}>
          TRUSTED BY LEADING BRANDS
        </h2>
        <p className="text-zinc-400 font-poppins text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
          From luxury UAE retail to enterprise technology platforms, we build identity systems and digital engines for market leaders.
        </p>
      </div>

      {/* Grid of Real Client Logos */}
      <div className={`${styles.container} max-w-6xl mx-auto relative z-10`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {realClientLogos.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-850 hover:border-primary/40 p-8 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />

              {/* Logo Container - Monochromatic white, transitioning to color on hover (except Lushly) */}
              <div className="w-full h-24 relative flex items-center justify-center p-2 mb-4">
                <div className="relative w-full h-full">
                  {client.name.toLowerCase().includes("lushly") ? (
                    /* Lushly stays in its original full brand colors */
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-sm"
                    />
                  ) : (
                    /* Other logos are monochromatic white, transitioning to their original colors on hover */
                    <Image
                      src={client.src}
                      alt={client.alt}
                      fill
                      className="object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 drop-shadow-sm"
                    />
                  )}
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-1 relative z-10 w-full pt-4 border-t border-zinc-800/60">
                <h3 className="font-michroma text-sm font-semibold text-white tracking-wide uppercase group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {client.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
