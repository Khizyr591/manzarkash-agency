import Navbar from "@/components/layout/Navbar";
import Hero from "@/app/_components/Hero";
import CrossedMarquee from "@/components/ui/CrossedMarquee";
import ClientLogos from "@/app/_components/ClientLogos";
import Services from "@/app/_components/Services";
import HomeStats from "@/app/_components/HomeStats";
import HowWeWork from "@/app/_components/HowWeWork";
import MarketFocus from "@/app/_components/MarketFocus";
import Founder from "@/app/_components/Founder";
import CaseStudies from "@/components/shared/CaseStudies";
import Testimonials from "@/components/shared/Testimonials";
import SceneryReveal from "@/app/_components/SceneryReveal";
import HomeFAQ from "@/app/_components/HomeFAQ";
import Contact from "@/components/shared/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <CrossedMarquee />
        <ClientLogos />
        <Services />
        <HomeStats />
        <HowWeWork />
        <MarketFocus />
        <Founder />
        <CaseStudies />
        <Testimonials />
        <SceneryReveal />
        <HomeFAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
