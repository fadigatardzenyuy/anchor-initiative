import { HandHeart, UserPlus, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { getInvolvedCards } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  HandHeart,
  UserPlus,
  Handshake,
};

type CardVariant = "white" | "anchor" | "gold-light";

interface CardStyleConfig {
  wrapper: string;
  title: string;
  description: string;
  buttonVariant: "primary" | "secondary" | "outline" | "ghost";
  buttonClassName: string;
  iconWrapper: string;
}

const cardStyles: Record<CardVariant, CardStyleConfig> = {
  white: {
    wrapper: "bg-white border border-sand shadow-sm",
    title: "text-ink",
    description: "text-text-muted",
    buttonVariant: "secondary",
    buttonClassName: "",
    iconWrapper: "text-anchor bg-mist",
  },
  anchor: {
    wrapper: "bg-anchor text-white",
    title: "text-white",
    description: "text-white/80",
    buttonVariant: "outline",
    buttonClassName: "border-white text-white hover:bg-white hover:text-anchor",
    iconWrapper: "text-white bg-white/10",
  },
  "gold-light": {
    wrapper: "bg-gold-light",
    title: "text-earth",
    description: "text-earth/80",
    buttonVariant: "ghost",
    buttonClassName: "text-earth border-earth/40 hover:bg-earth/10",
    iconWrapper: "text-earth bg-earth/10",
  },
};

export default function GetInvolved() {
  return (
    <section className="bg-white py-24" aria-labelledby="get-involved-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Take Action</SectionLabel>
            <h2
              id="get-involved-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Join the Movement
            </h2>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getInvolvedCards.map((card, index) => {
            const variant = card.variant as CardVariant;
            const style = cardStyles[variant] ?? cardStyles.white;
            const Icon = iconMap[card.icon] ?? HandHeart;

            return (
              <AnimatedSection key={card.id} delay={index * 0.15}>
                <div
                  className={`rounded-lg p-8 flex flex-col gap-6 h-full ${style.wrapper}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${style.iconWrapper}`}
                    aria-hidden="true"
                  >
                    <Icon size={24} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-3 flex-1">
                    <h3
                      className={`font-bold text-2xl leading-tight ${style.title}`}
                      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${style.description}`}
                      style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      variant={style.buttonVariant}
                      href={card.cta.href}
                      className={style.buttonClassName}
                    >
                      {card.cta.label}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
