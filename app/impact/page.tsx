import type { Metadata } from "next"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import ImpactStats from "@/components/sections/ImpactStats"
import Testimonials from "@/components/sections/Testimonials"
import NewsletterBar from "@/components/sections/NewsletterBar"
export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the measurable difference The Anchor Initiative is making — from lives impacted and Anchors trained to community stories and annual outcomes.",
}

const galleryPrograms = [
  "Community Outreach",
  "Emotional First Aid",
  "Referral Support",
  "Anchor Academy",
  "Mental Literacy",
  "Faith Integration",
]

export default function ImpactPage() {
  return (
    <>
      {/* ── Inner Page Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(27,79,114,0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>Impact</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Measuring What Matters
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Numbers tell part of the story. Behind every stat is a life changed, a community
              healed, and a future made more hopeful.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Impact Stats Section ── */}
      <ImpactStats />

      {/* ── Testimonials Section ── */}
      <Testimonials />

      {/* ── Annual Report Callout ── */}
      <section className="bg-anchor text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel className="justify-center">Transparency</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              2024 Annual Report
            </h2>
            <p
              className="text-sand/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Our 2024 Annual Report details every programme, every dollar spent, and every
              community we served. We believe accountability is a form of respect.
            </p>
            <Button
              variant="outline"
              href="#"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-anchor"
            >
              Download Annual Report (PDF)
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Gallery Placeholder ── */}
      <section className="bg-mist py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">In the Field</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Impact in Action
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              A glimpse into the work happening on the ground across our programmes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPrograms.map((name, i) => (
              <AnimatedSection key={name} delay={(i % 3) * 0.1}>
                <div
                  className="relative rounded-lg h-48 overflow-hidden flex items-end"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(27,79,114,0.2) 0%, rgba(46,134,171,0.2) 100%)",
                  }}
                  aria-label={`Gallery placeholder for ${name}`}
                >
                  {/* Decorative lines */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
                      backgroundSize: "12px 12px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 px-4 pb-4">
                    <span
                      className="inline-block bg-anchor/80 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                    >
                      {name}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
