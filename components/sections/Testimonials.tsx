import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="bg-sand py-24" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Voices of Hope</SectionLabel>
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Stories That Anchor Us
            </h2>
          </div>
        </AnimatedSection>

        {/* Desktop: 3-column grid */}
        <div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6"
          aria-label="Testimonials"
        >
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.id} delay={index * 0.15}>
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                role={t.role}
                initials={t.initials}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          className="md:hidden flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6"
          aria-label="Testimonials"
          role="list"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="snap-start min-w-[85vw] flex-shrink-0"
              role="listitem"
            >
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                role={t.role}
                initials={t.initials}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
