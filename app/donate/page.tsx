import type { Metadata } from "next"
import { Smartphone, Building2, CreditCard, Heart, BookOpen, Users, Settings } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import DonateSection from "@/components/sections/DonateSection"
import NewsletterBar from "@/components/sections/NewsletterBar"

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your gift anchors a life. Support The Anchor Initiative in training Mental Health Anchors, running community outreach, and making mental wellness accessible to all.",
}

const impactAreas = [
  {
    icon: BookOpen,
    label: "Training & Certification",
    percentage: 40,
    description:
      "Funding Anchor Academy cohorts, curriculum development, and mentor compensation — ensuring every trained Anchor is properly equipped.",
    color: "bg-anchor",
  },
  {
    icon: Heart,
    label: "Community Outreach",
    percentage: 30,
    description:
      "Feeding drives, wellness events, and on-the-ground emotional support initiatives that open doors to mental health conversations.",
    color: "bg-faith",
  },
  {
    icon: Users,
    label: "Mental Health Resources",
    percentage: 20,
    description:
      "Printed materials, digital tools, referral networks, and educational content that extend our reach into every corner of the community.",
    color: "bg-gold",
  },
  {
    icon: Settings,
    label: "Operations & Admin",
    percentage: 10,
    description:
      "Keeping the lights on — staff coordination, communications, compliance, and the infrastructure that makes everything else possible.",
    color: "bg-earth",
  },
]

const paymentMethods = [
  {
    icon: Smartphone,
    title: "Mobile Money",
    instructions:
      "Send your gift via mobile money to our registered number. Use your name as the reference so we can acknowledge your gift.",
    detail: "+1 (555) 000-0000",
  },
  {
    icon: Building2,
    title: "Bank Transfer",
    instructions:
      "Transfer directly to our operating account. Email us your transfer confirmation so we can send a receipt.",
    detail: "Account details on request",
  },
  {
    icon: CreditCard,
    title: "Online Payment",
    instructions:
      "Use our secure giving portal to donate by card. One-time and recurring options available.",
    detail: "Powered by Stripe",
  },
]

const supporters = [
  "Grace Community Foundation",
  "Hope & Healing Network",
  "Faith Forward Fund",
  "The Resilience Coalition",
  "Community Roots Initiative",
  "Bridges Mental Health Alliance",
]

export default function DonatePage() {
  return (
    <>
      {/* ── Inner Page Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <SectionLabel>Give Today</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Your Gift Anchors a Life
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Every dollar you give trains a leader, supports a community, or opens a door to
              mental wellness for someone who needs it. No gift is too small — every act of
              generosity is an anchor.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Donate Section ── */}
      <DonateSection />

      {/* ── How Donations Are Used ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel className="justify-center">Stewardship</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              How Your Gift Is Used
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              We are committed to transparency. Every dollar is allocated to where it creates
              the most impact.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-10">
            {impactAreas.map((area, i) => {
              const Icon = area.icon
              return (
                <AnimatedSection key={area.label} delay={i * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-mist rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-anchor" aria-hidden="true" />
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className="font-semibold text-ink"
                          style={{
                            fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
                          }}
                        >
                          {area.label}
                        </h3>
                        <span
                          className="text-gold font-bold text-lg"
                          style={{
                            fontFamily: "var(--font-mono-loaded, monospace)",
                          }}
                        >
                          {area.percentage}%
                        </span>
                      </div>
                      {/* Bar */}
                      <div className="h-2 bg-sand rounded-full overflow-hidden mb-3">
                        <div
                          className={`h-full ${area.color} rounded-full`}
                          style={{ width: `${area.percentage}%` }}
                          role="meter"
                          aria-valuenow={area.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${area.label}: ${area.percentage}%`}
                        />
                      </div>
                      <p
                        className="text-text-muted text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                      >
                        {area.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="bg-mist py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Giving Options</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Ways to Give
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, i) => {
              const Icon = method.icon
              return (
                <AnimatedSection key={method.title} delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 bg-mist rounded-lg flex items-center justify-center">
                      <Icon size={22} className="text-anchor" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-bold text-ink text-lg"
                      style={{
                        fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
                      }}
                    >
                      {method.title}
                    </h3>
                    <p
                      className="text-text-muted text-sm leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                    >
                      {method.instructions}
                    </p>
                    <p
                      className="text-xs uppercase tracking-wider text-anchor font-medium"
                      style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                    >
                      {method.detail}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Donor Recognition ── */}
      <section className="bg-sand py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Gratitude</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Our Supporters
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              We are grateful for every organisation and individual that invests in our mission.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {supporters.map((name, i) => (
              <AnimatedSection key={name} delay={i * 0.07}>
                <div className="bg-white rounded-lg p-5 shadow-sm flex items-center justify-center text-center min-h-[80px]">
                  <span
                    className="text-sm font-medium text-ink"
                    style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                  >
                    {name}
                  </span>
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
