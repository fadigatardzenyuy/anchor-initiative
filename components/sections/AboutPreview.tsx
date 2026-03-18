import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCard from "@/components/ui/StatCard";
import Button from "@/components/ui/Button";
import { aboutContent } from "@/lib/content";

export default function AboutPreview() {
  return (
    <section className="bg-sand py-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left column ── */}
          <AnimatedSection direction="left" delay={0}>
            <div className="flex flex-col gap-6">

              {/* Decorative section number */}
              <div
                className="text-[8rem] font-bold leading-none text-gold/15 select-none -mb-6"
                style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                aria-hidden="true"
              >
                {aboutContent.sectionNumber}
              </div>

              {/* Label */}
              <SectionLabel>{aboutContent.label}</SectionLabel>

              {/* Heading */}
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-semibold text-ink mt-4 leading-tight"
                style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
              >
                {aboutContent.heading}
              </h2>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mt-4">
                {aboutContent.stats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    className="flex-1 min-w-[100px]"
                  />
                ))}
              </div>

              {/* CTA */}
              <div className="mt-4">
                <Button variant="secondary" href={aboutContent.cta.href}>
                  {aboutContent.cta.label} →
                </Button>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right column ── */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="flex flex-col gap-8 pt-4 lg:pt-16">

              {/* Body paragraphs */}
              {aboutContent.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg text-ink/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Pull quote */}
              <blockquote
                className="border-l-4 border-gold pl-6 mt-2"
                cite="#"
              >
                <p
                  className="text-anchor text-xl italic leading-relaxed"
                  style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                >
                  &ldquo;{aboutContent.pullQuote}&rdquo;
                </p>
              </blockquote>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
