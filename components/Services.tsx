import { FiTrendingUp, FiTarget, FiCode, FiPenTool, FiCheck, FiArrowRight } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Dominant SEO Solutions",
      desc: "Drive organic traffic that converts. We implement custom search strategies mapping localized niches to global authority frameworks.",
      points: [
        "International & Multilingual SEO",
        "Local Map Packs & GMB Domination",
        "Technical SEO & Speed Optimization",
        "High-Authority Backlink Acquisition"
      ],
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: "Performance Ads",
      desc: "Turn ad spend into revenue. Direct-response advertising targeting specific buying segments across platforms.",
      points: [
        "Google Search & Shopping Ads",
        "Meta (Facebook & IG) Scaling",
        "High-Engagement TikTok Ad Campaigns",
        "Advanced Attribution & Custom CAPI"
      ],
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      title: "Bespoke Web Engineering",
      desc: "Modern digital architectures built with Next.js and Tailwind CSS. Rapid load speeds and premium UI/UX designed for conversion.",
      points: [
        "High-Speed Next.js Landing Pages",
        "Custom Headless E-commerce Solutions",
        "Figma-to-Code Premium Interactions",
        "Clean, Maintainable, and SEO-Ready Code"
      ],
      icon: <FiCode className="w-6 h-6" />
    },
    {
      title: "Copywriting & Creatives",
      desc: "Storytelling that triggers actions. We bridge global design structures with local linguistic strategies.",
      points: [
        "Urdu & English Direct Response Copy",
        "Dynamic Video Scripting (Reels/TikToks)",
        "Premium Graphics & Brand Identity",
        "High-Conversion Email Sequencing"
      ],
      icon: <FiPenTool className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950/40 relative">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-24">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">OUR SERVICES</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            ROI-DRIVEN DIGITAL CAPABILITIES
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-poppins italic">
            Engineered to remove bottlenecks and scale customer acquisition channels smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-primary/20 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 dark:bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white duration-300">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <ul className="space-y-3.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {service.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <FiCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Request Consultation
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
