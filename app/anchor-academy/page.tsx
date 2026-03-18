import type { Metadata } from "next"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import AnchorAcademy from "@/components/sections/AnchorAcademy"
import NewsletterBar from "@/components/sections/NewsletterBar"
import AcademyApplicationForm from "./AcademyApplicationForm"
import AcademyFAQ from "./AcademyFAQ"

export const metadata: Metadata = {
  title: "Anchor Academy",
  description:
    "Apply to become a certified Mental Health Anchor. The Anchor Academy trains community members in emotional first aid, mental literacy, and faith-informed care — no clinical experience required.",
}

export default function AnchorAcademyPage() {
  return (
    <>
      {/* ── Anchor Academy Section (existing) ── */}
      <AnchorAcademy />

      {/* ── Application Form ── */}
      <section className="bg-sand py-16" id="apply">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Applications Open</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Apply for the Next Cohort
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Ready to become a Mental Health Anchor? Fill in the form below and a member of
              our team will be in touch within 3 business days.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <AcademyApplicationForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Common Questions</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <AcademyFAQ />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
