import type { Metadata } from "next"
import { Anchor, Users, BookOpen } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TeamSection from "@/components/sections/TeamSection"
import NewsletterBar from "@/components/sections/NewsletterBar"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Anchor Initiative began with a conviction: that lasting community transformation starts from the inside out. Learn about our story, mission, vision, and the values that guide everything we do.",
}

const values = [
  {
    icon: Anchor,
    label: "Faith-Rooted",
    description:
      "We are unapologetically grounded in faith — drawing on the wisdom of our communities' spiritual foundations to inform every programme, conversation, and act of care.",
  },
  {
    icon: Users,
    label: "Community-Centered",
    description:
      "We believe healing happens in community. Every initiative is designed alongside the people it serves, honouring local knowledge and lived experience.",
  },
  {
    icon: BookOpen,
    label: "Evidence-Informed",
    description:
      "Our approaches are shaped by both clinical best practice and community insight — combining rigorous evidence with the irreplaceable wisdom of those we walk with.",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Founded with a Vision",
    description:
      "The Anchor Initiative was born from a conviction that mental wellness and faith belong together — and that communities already hold the seeds of their own healing.",
  },
  {
    year: "2022",
    title: "First Anchor Academy Cohort",
    description:
      "We launched our flagship training programme, certifying the first cohort of Mental Health Anchors and deploying them into communities across the region.",
  },
  {
    year: "2024",
    title: "500+ Lives Impacted",
    description:
      "With 80+ trained Anchors serving in 12+ communities, TAI crossed a milestone of over 500 lives directly touched through our programmes and outreach drives.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Inner Page Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        {/* Decorative gradient */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>About TAI</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Our Story
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              We started with a simple question: what if communities could heal themselves? The
              Anchor Initiative is our answer — training ordinary people to do extraordinary things
              for the mental wellness of those around them.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-sand py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>What Drives Us</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4 mb-12"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Mission &amp; Vision
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <AnimatedSection delay={0.1} direction="left">
              <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-anchor h-full">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-anchor font-medium mb-4"
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                >
                  Our Mission
                </p>
                <h3
                  className="text-2xl font-bold text-ink mb-4"
                  style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                >
                  What We Do
                </h3>
                <p
                  className="text-text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  To train community leaders as &ldquo;Mental Health Anchors&rdquo; who provide
                  emotional first aid, promote mental literacy, and connect individuals to
                  professional support — restoring hope where it is needed most.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-anchor text-white rounded-lg p-8 shadow-sm h-full">
                <p
                  className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-4"
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                >
                  Our Vision
                </p>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                >
                  Where We&apos;re Going
                </h3>
                <p
                  className="text-sand/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  To build resilient communities anchored in faith and strengthened by mental
                  wellness education — communities where no one suffers in silence and everyone has
                  access to care, hope, and belonging.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>What We Stand On</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4 mb-12"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Our Core Values
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.label} delay={i * 0.1}>
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-mist rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-anchor" aria-hidden="true" />
                    </div>
                    <p
                      className="text-xs uppercase tracking-[0.2em] text-anchor font-medium"
                      style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                    >
                      {value.label}
                    </p>
                    <p
                      className="text-text-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                    >
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Story / History Timeline ── */}
      <section className="bg-mist py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>How We Got Here</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4 mb-12"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Our Journey
            </h2>
          </AnimatedSection>
          <div className="flex flex-col gap-12">
            {milestones.map((milestone, i) => (
              <AnimatedSection key={milestone.year} delay={i * 0.15}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* Year */}
                  <div
                    className="text-gold font-bold text-2xl shrink-0 w-20"
                    style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  >
                    {milestone.year}
                  </div>
                  {/* Content */}
                  <div className="flex-1 border-l-2 border-gold/30 pl-8">
                    <h3
                      className="text-xl font-semibold text-ink mb-3"
                      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className="text-text-muted leading-relaxed"
                      style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <TeamSection />

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
