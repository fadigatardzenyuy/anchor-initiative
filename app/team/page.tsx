import type { Metadata } from "next"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import TeamSection from "@/components/sections/TeamSection"
import NewsletterBar from "@/components/sections/NewsletterBar"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the passionate leaders and professionals behind The Anchor Initiative — each one committed to building resilient communities through faith and mental wellness.",
}

export default function TeamPage() {
  return (
    <>
      {/* ── Team Section ── */}
      <TeamSection />

      {/* ── Join the Team ── */}
      <section className="bg-anchor text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel className="justify-center">Opportunities</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Want to Join Our Team?
            </h2>
            <p
              className="text-sand/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              We are always looking for passionate people — whether as volunteers, board members,
              programme facilitators, or staff. If you believe in our mission, there is a place
              for you here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                href="/get-involved#volunteer"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-anchor"
              >
                View Volunteer Opportunities
              </Button>
              <Button
                variant="primary"
                href="/contact"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
