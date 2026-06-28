export default function CaseStudies() {
  const cases = [
    {
      metric: "+310%",
      label: "Organic Traffic Growth",
      title: "Zylora Fashion (US)",
      desc: "Architected a headless Next.js e-commerce engine combined with global search engine optimization, propelling the brand from zero presence to standard US retail authority.",
      highlight: "$1.2M+ Annual Revenue Generated",
    },
    {
      metric: "4.5x",
      label: "Domestic Sales Scaling",
      title: "Khaas Attire (Pakistan)",
      desc: "Designed and executed a localized Meta/TikTok campaign using bilingual Urdu copy scripts, routing traffic into automated WhatsApp commerce funnels.",
      highlight: "8,000+ Orders Filled Monthly",
    },
    {
      metric: "+180%",
      label: "B2B Organic Pipeline",
      title: "ApexLogistics (Gulf Region)",
      desc: "Targeted high-volume supply chain keywords and built high-quality corporate content assets, ranking them #1 on Google for essential regional search queries.",
      highlight: "100+ Qualified Corporate Leads/Mo",
    },
  ];

  return (
    <section id="case-studies" className="py-20 md:py-28 relative">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="space-y-4 max-w-2xl">
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
              RESULTS THAT DELIVER VALUE
            </h2>
          </div>
          <div>
            <p className="text-lg text-zinc-650 dark:text-zinc-350 font-poppins italic max-w-md">
              We focus on metrics that impact your financial bottom line:
              clicks, conversions, and revenue.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, index) => (
            <div
              key={index}
              className="relative rounded-3xl p-8 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
            >
              <div className="space-y-6">
                {/* Metric Display */}
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-michroma">
                    {c.metric}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {c.label}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>

              {/* Highlight box */}
              <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <span className="text-xs font-bold text-black dark:text-white inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {c.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
