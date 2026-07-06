import styles from "@/app/styles/styles";

export default function Marquee() {
  const items = [
    "Dominant Search SEO",
    "ROI Performance Ads",
    "Product Photography",
    "Custom Web Engineering",
    "WhatsApp Automation",
    "Bilingual Storytelling",
    "Conversion Scale CRO",
    "PKR Ad Optimization",
    "Global Retainer Scale",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-5 md:py-6 border-y border-zinc-800/80 select-none z-20">
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-linear-to-r from-black to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-linear-to-l from-black to-transparent z-30 pointer-events-none" />

      <div className={`flex w-max animate-marquee whitespace-nowrap gap-12 ${styles.heading_6} !text-xs md:!text-sm !font-bold tracking-widest uppercase hover:[animation-play-state:paused] cursor-pointer`}>
        {items.map((item, index) => (
          <span key={`first-${index}`} className="inline-flex items-center gap-12">
            <span>{item}</span>
            <span className="text-primary font-bold text-base">•</span>
          </span>
        ))}

        {items.map((item, index) => (
          <span key={`second-${index}`} className="inline-flex items-center gap-12">
            <span>{item}</span>
            <span className="text-primary font-bold text-base">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
