import type { Metadata } from "next"
import Link from "next/link"
import {
  Heart,
  Shield,
  Link as LinkIcon,
  GraduationCap,
  BookOpen,
  Users,
} from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import WhatWeDo from "@/components/sections/WhatWeDo"
import NewsletterBar from "@/components/sections/NewsletterBar"
import { programs } from "@/lib/content"

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore the full range of TAI programmes — from Community Outreach and Emotional First Aid to Anchor Academy training and Faith Community Integration.",
}

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Shield,
  Link: LinkIcon,
  GraduationCap,
  BookOpen,
  Users,
}

const impactStats = [
  { value: "500+", label: "Lives Impacted" },
  { value: "80+", label: "Anchors Deployed" },
  { value: "12+", label: "Communities" },
  { value: "6", label: "Active Programmes" },
]

export default function ProgramsPage() {
  return (
    <>
      {/* ── Inner Page Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.10) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>What We Do</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Healing Communities, One Anchor at a Time
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Our programmes address the full spectrum of community mental wellness — from
              immediate crisis support to long-term training, education, and systemic change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WhatWeDo Section ── */}
      <WhatWeDo />

      {/* ── Programme Detail Cards ── */}
      <section className="bg-sand py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>Programme Details</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4 mb-12"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Explore Every Programme
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, i) => {
              const Icon = iconMap[program.icon] ?? Heart
              return (
                <AnimatedSection key={program.id} delay={(i % 2) * 0.1}>
                  <div
                    id={program.id}
                    className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-5 h-full"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 bg-mist rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-anchor" aria-hidden="true" />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold text-ink"
                      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                    >
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-text-muted leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                    >
                      {program.description}
                    </p>

                    {/* Learn more link */}
                    <Link
                      href={program.href}
                      className="inline-flex items-center gap-1 text-gold font-medium text-sm hover:text-[#b8963e] transition-colors duration-200"
                      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                    >
                      Learn More →
                    </Link>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Impact Callout ── */}
      <section className="bg-anchor text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionLabel className="justify-center">Our Impact</SectionLabel>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Every Programme Anchors a Life
            </h2>
            <p
              className="text-sand/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Behind every number is a name, a story, and a community transformed by the power
              of care.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {impactStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="flex flex-col gap-1">
                  <span
                    className="text-4xl font-bold text-gold"
                    style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sand/70 text-sm uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <Button variant="primary" href="/donate" size="lg">
              Support Our Programmes
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
