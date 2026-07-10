import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CrossedMarquee from "@/components/ui/CrossedMarquee";
import ClientLogos from "@/components/sections/ClientLogos";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import MarketFocus from "@/components/sections/MarketFocus";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import SceneryReveal from "@/components/sections/SceneryReveal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <CrossedMarquee />
        <ClientLogos />
        <Services />
        <HowWeWork />
        <MarketFocus />
        <CaseStudies />
        <Testimonials />
        <SceneryReveal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
