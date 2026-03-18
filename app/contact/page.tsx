"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { MapPin, Mail, Phone, Clock, Facebook, Instagram, Twitter, Youtube, CheckCircle } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import NewsletterBar from "@/components/sections/NewsletterBar"
import { siteConfig } from "@/lib/content"

// ─── Types ───────────────────────────────────────────────────────────────

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// ─── Shared styles ───────────────────────────────────────────────────────

const labelClass = "block text-xs uppercase tracking-wider text-ink mb-1"
const inputClass =
  "border border-sand bg-white focus:border-anchor outline-none px-4 py-3 rounded-sm w-full text-ink placeholder:text-text-muted transition-colors duration-200"
const errorClass = "text-red-500 text-xs mt-1"

// ─── Contact form component ──────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-sand rounded-xl p-10 flex flex-col items-center text-center gap-4 h-full justify-center">
        <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center">
          <CheckCircle size={26} className="text-anchor" aria-hidden="true" />
        </div>
        <h3
          className="text-2xl font-bold text-ink"
          style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
        >
          Message Sent!
        </h3>
        <p
          className="text-text-muted max-w-sm leading-relaxed"
          style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
        >
          Thank you! We&apos;ll respond within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      {/* Name */}
      <div>
        <label
          htmlFor="ct-name"
          className={labelClass}
          style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="ct-name"
          type="text"
          placeholder="Your name"
          className={inputClass}
          style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="ct-email"
          className={labelClass}
          style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="ct-email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="ct-subject"
          className={labelClass}
          style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="ct-subject"
          className={inputClass}
          style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
          {...register("subject", { required: "Please select a subject" })}
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Partnership">Partnership</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Donation">Donation</option>
          <option value="Media/Press">Media / Press</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="ct-message"
          className={labelClass}
          style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="ct-message"
          rows={5}
          placeholder="How can we help?"
          className={`${inputClass} resize-none`}
          style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Please write at least 10 characters" },
          })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: MapPin, label: "Address", value: siteConfig.address },
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: Clock, label: "Office Hours", value: siteConfig.officeHours },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
  { icon: Twitter, label: "Twitter / X", href: siteConfig.social.twitter },
  { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
]

export default function ContactPage() {
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
            <SectionLabel>Reach Out</SectionLabel>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Get in Touch
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-lg text-sand/80 mt-6 max-w-2xl leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              We&apos;d love to hear from you — whether you have a question, want to partner,
              or simply want to say hello. Our team is here and happy to help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="bg-sand py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Left: Contact Form ── */}
            <AnimatedSection direction="left">
              <h2
                className="text-2xl font-bold text-ink mb-6"
                style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
              >
                Send Us a Message
              </h2>
              <ContactForm />
            </AnimatedSection>

            {/* ── Right: Info + Map + Social ── */}
            <AnimatedSection direction="right">
              <div className="flex flex-col gap-8">
                {/* Contact info */}
                <div>
                  <h2
                    className="text-2xl font-bold text-ink mb-6"
                    style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                  >
                    Contact Information
                  </h2>
                  <div className="flex flex-col gap-5">
                    {contactInfo.map((item) => {
                      const Icon = item.icon
                      return (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="w-9 h-9 bg-mist rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={16} className="text-gold" aria-hidden="true" />
                          </div>
                          <div>
                            <p
                              className="text-xs uppercase tracking-wider text-text-muted mb-0.5"
                              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                            >
                              {item.label}
                            </p>
                            <p
                              className="text-ink font-medium"
                              style={{
                                fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
                              }}
                            >
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Map placeholder */}
                <div
                  className="bg-mist rounded-xl h-64 flex items-center justify-center"
                  aria-label="Map coming soon"
                >
                  <p
                    className="text-text-muted italic"
                    style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                  >
                    Map coming soon
                  </p>
                </div>

                {/* Social links */}
                <div>
                  <p
                    className="text-xs uppercase tracking-wider text-text-muted mb-4"
                    style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  >
                    Follow TAI
                  </p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-10 h-10 rounded-full bg-white border border-sand flex items-center justify-center text-anchor hover:bg-anchor hover:text-white hover:border-anchor transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        >
                          <Icon size={16} aria-hidden="true" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
