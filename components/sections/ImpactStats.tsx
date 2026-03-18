"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { impactStats } from "@/lib/content";

interface CountUpProps {
  target: number;
  suffix: string;
  inView: boolean;
  duration?: number;
}

function CountUp({ target, suffix, inView, duration = 1800 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (target - startValue) * eased);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <>
      <span>{count}</span>
      {suffix && (
        <span className="text-gold">{suffix}</span>
      )}
    </>
  );
}

export default function ImpactStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-mist py-24"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>By the Numbers</SectionLabel>
            <h2
              id="impact-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Our Impact in Numbers
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {impactStats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-3 p-6">
                {/* Value with count-up */}
                <div
                  className="text-6xl font-bold text-anchor leading-none tabular-nums"
                  style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                    duration={1600 + index * 100}
                  />
                </div>

                {/* Label */}
                <span
                  className="text-xs uppercase tracking-widest text-text-muted leading-tight text-center"
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                >
                  {stat.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-anchor/20" aria-hidden="true" />

      </div>
    </section>
  );
}
