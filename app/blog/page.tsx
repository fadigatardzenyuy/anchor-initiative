import type { Metadata } from "next"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import NewsletterBar from "@/components/sections/NewsletterBar"
import BlogFilterClient from "./BlogFilterClient"

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "Insights, guides, and stories from the TAI community — covering mental health, faith and wellness, and community resilience.",
}

export default function BlogPage() {
  return (
    <>
      {/* ── Inner Page Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(27,79,114,0.20) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>Resources</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Resource Library
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Insights, guides, and stories from the TAI community — to equip, encourage, and
              inspire everyone on the journey toward mental wellness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Filter + Grid (client) ── */}
      <BlogFilterClient />

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
