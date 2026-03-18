"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production, wire this to your email service
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-anchor py-8" aria-label="Newsletter signup">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Heading */}
          <div className="flex flex-col gap-1 shrink-0">
            <h2
              className="font-bold text-white text-xl leading-tight"
              style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            >
              Stay Anchored
            </h2>
            <p
              className="text-sm text-sand/80 leading-relaxed max-w-sm"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Get updates on our outreach, training, and community stories.
            </p>
          </div>

          {/* Form / Success message */}
          {submitted ? (
            <p
              className="text-gold text-sm font-medium"
              style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
              role="status"
              aria-live="polite"
            >
              Thank you for subscribing! We&apos;ll be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full md:max-w-md"
              aria-label="Subscribe to newsletter"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-white/10 border border-white/30 text-white placeholder:text-white/50 px-4 py-3 rounded-sm flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-gold text-ink font-semibold px-6 py-3 rounded-sm hover:brightness-110 active:brightness-95 transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-anchor"
                style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
              >
                Subscribe
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
