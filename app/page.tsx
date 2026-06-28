import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import ParallaxSection from "@/components/ParallaxSection";
import MarketFocus from "@/components/MarketFocus";
import CaseStudies from "@/components/CaseStudies";
import ZoomRevealSection from "@/components/ZoomRevealSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Marquee />
        <Services />
        <ParallaxSection />
        <MarketFocus />
        <CaseStudies />
        <ZoomRevealSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
