import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { donationTiers } from "@/lib/content";

const donationContent = {
  body: "Every gift — no matter the size — directly funds the training, outreach, and programs that restore hope in our communities. Your generosity equips leaders and anchors lives.",
  finePrint: "TAI is a registered nonprofit. All donations are tax-deductible to the extent allowed by law.",
};

const paymentMethods = ["Mobile Money", "Bank Transfer", "Online Payment"];

export default function DonateSection() {
  return (
    <section className="bg-sand py-24" aria-labelledby="donate-heading">
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center gap-4 mb-10">
            <SectionLabel>Support The Mission</SectionLabel>
            <h2
              id="donate-heading"
              className="text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Your Gift Anchors a Life
            </h2>
            <p
              className="text-lg text-text-muted max-w-xl leading-relaxed mt-2"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              {donationContent.body}
            </p>
          </div>
        </AnimatedSection>

        {/* Donation tier cards */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-white rounded-lg p-4 text-center border-2 border-transparent hover:border-gold hover:shadow-md transition-all duration-200 cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={`Donate $${tier.amount} — ${tier.impact}`}
              >
                {/* Amount */}
                <p
                  className="text-3xl font-bold text-gold leading-tight"
                  style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                >
                  ${tier.amount}
                </p>
                {/* Impact */}
                <p
                  className="text-sm text-text-muted mt-2 leading-snug"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  {tier.impact}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Payment method badges */}
        <AnimatedSection delay={0.25}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="bg-mist text-anchor text-xs px-4 py-2 rounded-full"
                style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
              >
                {method}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.35}>
          <div className="flex flex-col items-center gap-4">
            <Button variant="primary" href="/donate" size="lg">
              Donate Now →
            </Button>
            <p
              className="text-xs text-text-muted mt-2"
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              {donationContent.finePrint}
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
