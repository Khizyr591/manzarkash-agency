"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import styles from "@/lib/styles";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  FiTrendingUp,
  FiZap,
  FiSearch,
  FiLayout,
  FiBarChart2,
  FiCheckCircle,
  FiArrowRight,
  FiCode,
  FiTarget,
  FiGlobe,
} from "react-icons/fi";

function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200/60 dark:border-zinc-700/40 flex flex-col gap-1 transition-all duration-300 hover:scale-[1.02]">
      <p className={`${styles.caption_text} text-[9px]! text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-semibold!`}>{label}</p>
      <p className={`${styles.heading_5} text-lg! font-bold! text-zinc-900 dark:text-white`}>{value}</p>
      <p className={`${styles.caption_text} text-[10px]! text-emerald-500 font-semibold!`}>{sub}</p>
    </div>
  );
}

function ScoreRing({ score, label, active }: { score: number; label: string; active: boolean }) {
  const radius = 36;
  const circ = 2 * Math.PI * radius;
  const progress = active ? (score / 100) * circ : 0;
  return (
    <div className="flex flex-col items-center gap-1.5 group">
      <div className="relative w-22 h-22">
        <svg className="w-22 h-22 -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="8" className="stroke-zinc-150 dark:stroke-zinc-800 transition-colors" />
          <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="8"
            strokeDasharray={`${circ} ${circ}`}
            strokeDashoffset={circ - progress}
            strokeLinecap="round"
            className="stroke-primary transition-all duration-1200 ease-out" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${styles.heading_5} text-lg! font-bold! text-zinc-900 dark:text-white transition-colors`}>{score}</span>
        </div>
      </div>
      <span className={`${styles.caption_text} text-[9px]! text-zinc-400 dark:text-zinc-500 uppercase tracking-wider font-semibold! group-hover:text-primary transition-colors`}>{label}</span>
    </div>
  );
}

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Discovery & Audit",
    tag: "Week 1–2",
    description:
      "Deep brand immersion, competitor teardown, and a full technical + SEO audit. We map every gap before writing code.",
    accent: "#f54e0e",
    accentMuted: "rgba(245,78,14,0.08)",
    pillColor: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    deliverables: ["Brand Discovery Session", "Technical SEO Audit", "Competitor Report"],
  },
  {
    number: "02",
    icon: FiLayout,
    title: "Strategy & Design",
    tag: "Week 3–4",
    description:
      "Conversion-focused wireframes, premium high-fidelity UI, and a content strategy built around user psychology.",
    accent: "#f59e0b",
    accentMuted: "rgba(245,158,11,0.08)",
    pillColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    deliverables: ["UX Wireframes", "High-Fidelity Mockups", "Content Architecture"],
  },
  {
    number: "03",
    icon: FiCode,
    title: "Build & Optimise",
    tag: "Week 5–8",
    description:
      "Advanced semantic rendering, Core Web Vitals perfection, and structured data baked in. 99/100 PageSpeed standard.",
    accent: "#3b82f6",
    accentMuted: "rgba(59,130,246,0.08)",
    pillColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    deliverables: ["Optimized Website Build", "99/100 PageSpeed Score", "Schema Structured Data"],
  },
  {
    number: "04",
    icon: FiBarChart2,
    title: "Launch & Scale",
    tag: "Ongoing",
    description:
      "Analytics dashboards, A/B testing, paid growth campaigns — compounding organic and paid results month after month.",
    accent: "#10b981",
    accentMuted: "rgba(16,185,129,0.08)",
    pillColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    deliverables: ["Analytics Dashboard", "A/B Test Roadmap", "Growth Strategy"],
  },
];

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const showcaseObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (showcaseRef.current) {
      showcaseObserver.observe(showcaseRef.current);
    }

    const stepEls = stepsRef.current?.querySelectorAll("[data-step]");
    const stepObservers: IntersectionObserver[] = [];

    stepEls?.forEach((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 150);
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      stepObservers.push(obs);
    });

    return () => {
      showcaseObserver.disconnect();
      stepObservers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <section
        id="how-we-work"
        className="relative overflow-hidden py-24 md:py-32 bg-white dark:bg-zinc-900 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-700"
      >
        <div className={`relative ${styles.container}`} ref={stepsRef}>
          <div className="text-center mb-16 md:mb-20">
            <Eyebrow>Our Framework</Eyebrow>
            <h2 className={styles.heading_2}>
              How We <span className="text-primary">Work</span>
            </h2>
            <p className={styles.paragraph}>
              A transparent, outcome-oriented four-step roadmap focused on scaling your digital revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  data-step
                  className={`group relative flex flex-col p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/40 hover:bg-white dark:hover:bg-zinc-950 transition-all duration-700 shadow-sm hover:shadow-md ${visibleSteps[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ background: step.accentMuted }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.accent }} />
                    </div>
                    <span className={`${styles.caption_text} text-[10px]! font-bold! px-2.5 py-1 rounded-full border ${step.pillColor}`}>
                      {step.tag}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 mb-5">
                    <span className={`${styles.heading_6} text-[10px]! text-zinc-400 dark:text-zinc-500 uppercase mb-2`}>Phase {step.number}</span>
                    <h3 className={`${styles.heading_3} mb-2`}>{step.title}</h3>
                    <p className={styles.paragraph_sm}>{step.description}</p>
                  </div>

                  <div className="space-y-2 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4 mt-auto transition-colors duration-700">
                    <p className={`${styles.caption_text} text-[9px]! text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-semibold!`}>Deliverables</p>
                    {step.deliverables.map((del) => (
                      <div key={del} className="flex items-center gap-2">
                        <FiCheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: step.accent }} />
                        <span className={`${styles.span_text} text-xs! text-zinc-600 dark:text-zinc-400`}>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className={`${styles.span_text} text-sm! text-zinc-500 mb-5`}>
              Ready to start your growth journey?
            </p>
            <Button href="#contact" variant="primary" size="md">
              Schedule a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

