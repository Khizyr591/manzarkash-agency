"use client";

import { FiCheck, FiMinus } from "react-icons/fi";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "@/lib/styles";

const ROWS: { section: string; features: { label: string; launch: boolean | string; scale: boolean | string; enterprise: boolean | string }[] }[] = [
  {
    section: "Visual Production",
    features: [
      { label: "Studio product photography", launch: "15 SKUs", scale: "Unlimited", enterprise: "Unlimited + priority" },
      { label: "Lifestyle & model shoots", launch: false, scale: "Quarterly", enterprise: "Monthly" },
      { label: "Motion / short-form video", launch: false, scale: "Monthly", enterprise: "Bi-weekly" },
    ],
  },
  {
    section: "Engineering",
    features: [
      { label: "Landing page / starter theme", launch: true, scale: true, enterprise: true },
      { label: "Custom Shopify/Next.js theme", launch: false, scale: true, enterprise: true },
      { label: "API integrations", launch: false, scale: "Standard", enterprise: "Custom + CRM" },
      { label: "Ongoing engineering sprints", launch: false, scale: "Bi-weekly", enterprise: "Weekly" },
    ],
  },
  {
    section: "Growth",
    features: [
      { label: "Paid ads channels", launch: "1", scale: "3 (Meta + Google + TikTok)", enterprise: "All channels" },
      { label: "SEO retainer", launch: false, scale: true, enterprise: true },
      { label: "WhatsApp automation", launch: "Broadcasts", scale: "Cloud API bot + CRM sync", enterprise: "Multi-workflow + AI routing" },
      { label: "Multi-region orchestration", launch: false, scale: false, enterprise: true },
    ],
  },
  {
    section: "Reporting & Support",
    features: [
      { label: "GA4 + Search Console setup", launch: true, scale: true, enterprise: true },
      { label: "Performance review cadence", launch: "Bi-weekly", scale: "Weekly", enterprise: "Weekly + real-time dashboard" },
      { label: "Dedicated Slack channel", launch: false, scale: true, enterprise: true },
      { label: "On-site strategy day", launch: false, scale: false, enterprise: "Quarterly" },
    ],
  },
];

function renderCell(v: boolean | string) {
  if (v === true) return <FiCheck className="w-4 h-4 text-primary mx-auto" />;
  if (v === false) return <FiMinus className="w-4 h-4 text-zinc-400 mx-auto" />;
  return <span className="text-xs font-poppins text-zinc-700 dark:text-zinc-300">{v}</span>;
}

export default function PricingComparison() {
  return (
    <section className="py-20 md:py-28 relative w-full border-b border-zinc-150 dark:border-zinc-900 bg-zinc-50/40 dark:bg-zinc-950/30">
      <div className={styles.container}>
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <Eyebrow>FULL COMPARISON</Eyebrow>
          <h2 className={styles.heading_2}>EVERYTHING, SIDE BY SIDE</h2>
          <p className={styles.paragraph}>
            Line-by-line of what ships in each tier. If a row is empty for your tier, it&apos;s available as a paid add-on.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60">
                <th className="text-left px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Feature
                </th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Launch
                </th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-primary">
                  Scale
                </th>
                <th className="px-6 py-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Enterprise
                </th>
              </tr>
            </thead>
            {ROWS.map((section) => (
              <tbody key={section.section} className="[&_tr:last-child]:border-b-0">
                  <tr className="bg-zinc-100/60 dark:bg-zinc-800/40">
                    <td colSpan={4} className="px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-bold">
                      {section.section}
                    </td>
                  </tr>
                  {section.features.map((f) => (
                    <tr
                      key={f.label}
                      className="border-b border-zinc-100 dark:border-zinc-800/60 hover:bg-zinc-50/60 dark:hover:bg-zinc-900/40 transition-colors"
                    >
                      <td className="px-6 py-3.5 text-zinc-800 dark:text-zinc-200 font-poppins">
                        {f.label}
                      </td>
                      <td className="px-6 py-3.5 text-center">{renderCell(f.launch)}</td>
                      <td className="px-6 py-3.5 text-center bg-primary/5 dark:bg-primary/10">
                        {renderCell(f.scale)}
                      </td>
                      <td className="px-6 py-3.5 text-center">{renderCell(f.enterprise)}</td>
                    </tr>
                  ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
