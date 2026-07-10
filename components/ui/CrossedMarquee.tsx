"use client";


import { 
  FiMonitor, 
  FiTrendingUp, 
  FiCpu, 
  FiLayers, 
  FiZap, 
  FiSearch, 
  FiFilm, 
  FiSend 
} from "react-icons/fi";

export default function CrossedMarquee() {
  const redBandText = "WE BUILD BRANDS THAT STAND OUT";
  
  const darkBandItems = [
    { text: "UI/UX DESIGN", icon: <FiLayers className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "WEB ENGINEERING", icon: <FiMonitor className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "SOCIAL MARKETING", icon: <FiSend className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "DIGITAL PRODUCTION", icon: <FiFilm className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "PERFORMANCE ADS", icon: <FiTrendingUp className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "DOMINANT SEO", icon: <FiSearch className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "WORKFLOW AUTOMATION", icon: <FiCpu className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
    { text: "CONVERSION SCALE", icon: <FiZap className="text-primary w-4 h-4 md:w-5 h-5 shrink-0" /> },
  ];


  const renderRedRepeated = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <span key={`red-${i}`} className="inline-flex items-center gap-8 md:gap-12">
        <span className="font-michroma text-sm md:text-lg tracking-widest font-bold uppercase">{redBandText}</span>
        <span className="text-white text-base md:text-xl">•</span>
      </span>
    ));
  };

  const renderDarkRepeated = (count: number) => {
    return Array.from({ length: count }).map((_, i) => 
      darkBandItems.map((item, idx) => (
        <span key={`dark-${i}-${idx}`} className="inline-flex items-center gap-6 md:gap-8">
          {item.icon}
          <span className="font-michroma text-xs md:text-sm tracking-widest font-bold uppercase">{item.text}</span>
          <span className="text-zinc-400 text-xs md:text-sm font-light">•</span>
        </span>
      ))
    );
  };

  return (
    <div className="relative w-full h-[260px] md:h-[320px] bg-zinc-50 dark:bg-zinc-950/20 overflow-hidden flex items-center justify-center py-12 select-none border-y border-zinc-150 dark:border-zinc-900">
      

      <div 
        className="absolute w-[140vw] left-[-20vw] bg-[#f54e0e] text-white py-4 md:py-5 border-y border-white/10 shadow-[0_15px_30px_rgba(245,78,14,0.3)] z-10 transform -rotate-4 overflow-hidden flex"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap gap-8 md:gap-12 pl-4">
          {renderRedRepeated(10)}
        </div>
        <div className="flex w-max animate-marquee whitespace-nowrap gap-8 md:gap-12 pl-4" aria-hidden="true">
          {renderRedRepeated(10)}
        </div>
      </div>


      <div 
        className="absolute w-[140vw] left-[-20vw] bg-black text-white py-4 md:py-5 border-y border-zinc-800/80 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 transform rotate-3 overflow-hidden flex"
      >
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap gap-6 md:gap-8 pl-4">
          {renderDarkRepeated(3)}
        </div>
        <div className="flex w-max animate-marquee-reverse whitespace-nowrap gap-6 md:gap-8 pl-4" aria-hidden="true">
          {renderDarkRepeated(3)}
        </div>
      </div>


      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-linear-to-r from-white dark:from-black to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-linear-to-l from-white dark:from-black to-transparent z-30 pointer-events-none" />
    </div>
  );
}
