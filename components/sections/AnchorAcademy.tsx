"use client";

import { Anchor, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { academyContent } from "@/lib/content";

export default function AnchorAcademy() {
  return (
    <section className="bg-ink py-24 text-white" aria-labelledby="academy-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column: description + steps ── */}
          <AnimatedSection direction="left" delay={0}>
            <div className="flex flex-col gap-8">

              {/* Label — gold variant for dark bg */}
              <SectionLabel className="text-gold [&>span:not(:first-child):not(:last-child)]:text-gold">
                {academyContent.label}
              </SectionLabel>

              {/* Heading */}
              <h2
                id="academy-heading"
                className="text-4xl md:text-5xl font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
              >
                {academyContent.heading[0]}
                <br />
                {academyContent.heading[1]}
              </h2>

              {/* Body */}
              {academyContent.body.map((para, i) => (
                <p
                  key={i}
                  className="text-lg text-sand/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  {para}
                </p>
              ))}

              {/* 3-step process */}
              <div className="flex flex-col gap-6 mt-2">
                {academyContent.steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    {/* Gold number circle */}
                    <div
                      className="w-10 h-10 rounded-full bg-gold/20 border border-gold text-gold flex items-center justify-center shrink-0"
                      aria-hidden="true"
                      style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                    >
                      <span className="text-sm font-medium">{step.number}</span>
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <h3
                        className="font-semibold text-white text-base"
                        style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm text-sand/70 leading-relaxed"
                        style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits list */}
              <ul className="flex flex-col gap-3 mt-2" aria-label="Program benefits">
                {academyContent.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-gold shrink-0"
                      aria-hidden="true"
                    />
                    <span
                      className="text-sand/80 text-sm"
                      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-4">
                <Button variant="primary" href={academyContent.cta.href} size="lg">
                  {academyContent.cta.label} →
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right column: certification card mockup ── */}
          <AnimatedSection direction="right" delay={0.25}>
            <div className="flex items-center justify-center lg:pt-12">
              <div
                className="w-full max-w-sm rounded-xl p-8 shadow-2xl border border-gold/30 flex flex-col gap-6"
                style={{
                  background: "linear-gradient(135deg, #1B4F72 0%, #1A1A2E 100%)",
                }}
                aria-label="Certificate of Completion mockup"
              >
                {/* Top: logo + title */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center shrink-0">
                    <Anchor size={18} className="text-gold" aria-hidden="true" />
                  </div>
                  <p
                    className="text-gold text-xs uppercase tracking-widest leading-tight"
                    style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  >
                    Mental Health Anchor
                  </p>
                </div>

                {/* Decorative top line */}
                <div className="flex items-center gap-2" aria-hidden="true">
                  <div className="flex-1 h-px bg-gold/30" />
                  <div className="w-1 h-1 rounded-full bg-gold/50" />
                  <div className="flex-1 h-px bg-gold/30" />
                </div>

                {/* Certificate of Completion */}
                <div className="text-center flex flex-col items-center gap-2">
                  <p
                    className="text-white/50 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  >
                    This certifies that
                  </p>
                  <div
                    className="w-32 h-px bg-gold/30 my-2"
                    aria-hidden="true"
                  />
                  <h3
                    className="text-3xl italic text-white leading-snug"
                    style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                  >
                    Certificate of<br />Completion
                  </h3>
                </div>

                {/* Decorative gold seal */}
                <div className="flex items-center justify-center my-2">
                  <div
                    className="w-20 h-20 rounded-full border-4 border-gold flex items-center justify-center"
                    style={{ boxShadow: "0 0 24px rgba(201,168,76,0.25)" }}
                    aria-hidden="true"
                  >
                    <Anchor size={28} className="text-gold" />
                  </div>
                </div>

                {/* Certified by text */}
                <p
                  className="text-center text-white/60 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                >
                  Certified by The Anchor Initiative
                </p>

                {/* Decorative bottom lines */}
                <div className="flex flex-col gap-1.5" aria-hidden="true">
                  <div className="h-px bg-gold/40" />
                  <div className="h-px bg-gold/20" />
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
