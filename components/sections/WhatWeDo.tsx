import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/content";

export default function WhatWeDo() {
  return (
    <section className="bg-white py-24" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Our Programs</SectionLabel>
            <h2
              id="programs-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Healing Communities, One Anchor at a Time
            </h2>
            <p
              className="text-lg text-text-muted max-w-2xl leading-relaxed mt-2"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Our programs address the whole person — physical needs, emotional wounds, and spiritual
              resilience — through trained community leaders who meet people where they are.
            </p>
          </div>
        </AnimatedSection>

        {/* Program cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <AnimatedSection key={program.id} delay={index * 0.1}>
              <ProgramCard
                icon={program.icon as "Heart" | "Shield" | "Link" | "GraduationCap" | "BookOpen" | "Users"}
                title={program.title}
                description={program.description}
                href={program.href}
              />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
