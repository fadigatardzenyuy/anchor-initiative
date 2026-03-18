"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { heroContent } from "@/lib/content";

export default function Hero() {
  const tickerItems = [...heroContent.ticker, ...heroContent.ticker];

  return (
    <section
      className="relative min-h-screen bg-ink overflow-hidden flex flex-col grain-overlay"
      aria-label="Hero"
    >
      {/* Warm amber/gold gradient bleed — bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(201,168,76,0.15) 0%, rgba(27,79,114,0.10) 50%, transparent 80%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* ── Left column: text ── */}
          <div className="flex flex-col items-start gap-6">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <SectionLabel>{heroContent.eyebrow}</SectionLabel>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <span className="block">
                {/* "Anchored in " + gold "Faith." */}
                Anchored in{" "}
                <span className="text-gold">Faith.</span>
              </span>
              <span className="block mt-1">Equipped for Life.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg text-sand/80 max-w-lg mt-2 leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <Button variant="primary" href="/anchor-academy" size="lg">
                Become an Anchor →
              </Button>
              <Button
                variant="outline"
                href="/programs"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-ink"
              >
                Our Programs
              </Button>
              <Button
                variant="ghost"
                href="/donate"
                size="lg"
                className="text-sand hover:bg-white/10"
              >
                Donate Today
              </Button>
            </motion.div>
          </div>

          {/* ── Right column: visual placeholder ── */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center rounded-sm overflow-hidden min-h-[480px]"
            style={{
              background: "linear-gradient(135deg, #1B4F72 0%, #1A1A2E 100%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            aria-hidden="true"
          >
            {/* Decorative anchor watermark */}
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-72 h-72 text-gold opacity-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              aria-hidden="true"
            >
              {/* Anchor shape */}
              <circle cx="50" cy="18" r="8" />
              <line x1="50" y1="26" x2="50" y2="82" />
              <line x1="50" y1="40" x2="20" y2="40" />
              <line x1="50" y1="40" x2="80" y2="40" />
              <path d="M20 70 Q20 82 32 82 L50 82 L68 82 Q80 82 80 70" />
              <circle cx="20" cy="70" r="4" />
              <circle cx="80" cy="70" r="4" />
            </svg>

            {/* Elegant overlay text */}
            <p
              className="relative z-10 text-sand/40 text-2xl italic text-center px-8 leading-relaxed"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Community.<br />Hope.<br />Resilience.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Ticker strip ── */}
      <div
        className="relative z-10 border-t border-gold/20 bg-gold/10 overflow-hidden py-3"
        aria-label="Trust signals"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "ticker 30s linear infinite" }}
        >
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 px-8 text-gold/80 text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              {item}
              <span className="text-gold/40" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
