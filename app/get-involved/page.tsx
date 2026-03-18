"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { CheckCircle } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Button from "@/components/ui/Button"
import GetInvolved from "@/components/sections/GetInvolved"
import NewsletterBar from "@/components/sections/NewsletterBar"

// ─── Types ───────────────────────────────────────────────────────────────

interface VolunteerFormData {
  name: string
  email: string
  phone: string
  availableWeekends: boolean
  skills: string
  interests: string[]
}

interface PartnerFormData {
  orgName: string
  contactName: string
  email: string
  orgType: string
  message: string
}

// ─── Shared styles ───────────────────────────────────────────────────────

const labelClass =
  "block text-xs uppercase tracking-wider text-ink mb-1"
const inputClass =
  "border border-sand bg-white focus:border-anchor outline-none px-4 py-3 rounded-sm w-full text-ink placeholder:text-text-muted transition-colors duration-200"
const errorClass = "text-red-500 text-xs mt-1"

// ─── Interest options ────────────────────────────────────────────────────

const interestOptions = [
  "Community Outreach",
  "Anchor Academy Support",
  "Mental Health Advocacy",
  "Administrative Support",
  "Communications & Social Media",
]

// ─── Membership tiers ────────────────────────────────────────────────────

const membershipTiers = [
  {
    label: "Supporter",
    price: 10,
    perks: ["Monthly Newsletter", "Community Updates", "Annual Report"],
  },
  {
    label: "Anchor Partner",
    price: 25,
    perks: [
      "Monthly Newsletter",
      "Community Updates",
      "Annual Report",
      "Event Invitations",
      "TAI Resource Access",
    ],
  },
  {
    label: "Community Champion",
    price: 50,
    perks: [
      "Monthly Newsletter",
      "Community Updates",
      "Annual Report",
      "Event Invitations",
      "TAI Resource Access",
      "Mentorship Access",
      "Recognition in Annual Report",
      "Direct Impact Updates",
    ],
  },
]

// ─── Volunteer Form ───────────────────────────────────────────────────────

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>()

  const onSubmit = async (_data: VolunteerFormData) => {
    await new Promise((r) => setTimeout(r, 700))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-10 shadow-sm text-center max-w-xl mx-auto">
        <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={26} className="text-anchor" aria-hidden="true" />
        </div>
        <h3
          className="text-2xl font-bold text-ink mb-2"
          style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
        >
          Thank you for signing up!
        </h3>
        <p
          className="text-text-muted"
          style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
        >
          We&apos;ll reach out soon with next steps. Welcome to the TAI family.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-8 md:p-10 shadow-sm max-w-2xl mx-auto"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="md:col-span-2">
          <label
            htmlFor="vol-name"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-name"
            type="text"
            placeholder="Kwame Darko"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="vol-email"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="vol-email"
            type="email"
            placeholder="kwame@example.com"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="vol-phone"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Phone
          </label>
          <input
            id="vol-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("phone")}
          />
        </div>

        {/* Available weekends */}
        <div className="md:col-span-2 flex items-center gap-3">
          <input
            id="vol-weekends"
            type="checkbox"
            className="w-4 h-4 accent-anchor"
            {...register("availableWeekends")}
          />
          <label
            htmlFor="vol-weekends"
            className="text-sm text-ink cursor-pointer"
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
          >
            I am available on weekends
          </label>
        </div>

        {/* Interests */}
        <div className="md:col-span-2">
          <p
            className={`${labelClass} mb-3`}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Areas of Interest <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {interestOptions.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={option}
                  className="w-4 h-4 accent-anchor"
                  {...register("interests", {
                    validate: (v) =>
                      (Array.isArray(v) && v.length > 0) ||
                      "Please select at least one interest",
                  })}
                />
                <span
                  className="text-sm text-ink"
                  style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
          {errors.interests && (
            <p className={errorClass}>{errors.interests.message}</p>
          )}
        </div>

        {/* Skills */}
        <div className="md:col-span-2">
          <label
            htmlFor="vol-skills"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            What skills or gifts do you bring?
          </label>
          <textarea
            id="vol-skills"
            rows={3}
            placeholder="e.g. counselling, event planning, graphic design, prayer ministry…"
            className={`${inputClass} resize-none`}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("skills")}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Signing Up…" : "Sign Up to Volunteer"}
        </Button>
      </div>
    </form>
  )
}

// ─── Partner Form ────────────────────────────────────────────────────────

function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PartnerFormData>()

  const onSubmit = async (_data: PartnerFormData) => {
    await new Promise((r) => setTimeout(r, 700))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-10 shadow-sm text-center max-w-xl mx-auto">
        <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={26} className="text-anchor" aria-hidden="true" />
        </div>
        <h3
          className="text-2xl font-bold text-ink mb-2"
          style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
        >
          Partnership Request Received
        </h3>
        <p
          className="text-text-muted"
          style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
        >
          Thank you for reaching out. Our partnerships team will contact you within 5 business
          days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-8 md:p-10 shadow-sm max-w-2xl mx-auto"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Org name */}
        <div>
          <label
            htmlFor="p-orgname"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Organisation Name <span className="text-red-500">*</span>
          </label>
          <input
            id="p-orgname"
            type="text"
            placeholder="Hope Community Church"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("orgName", { required: "Organisation name is required" })}
          />
          {errors.orgName && <p className={errorClass}>{errors.orgName.message}</p>}
        </div>

        {/* Contact name */}
        <div>
          <label
            htmlFor="p-contactname"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Contact Name <span className="text-red-500">*</span>
          </label>
          <input
            id="p-contactname"
            type="text"
            placeholder="Pastor James"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("contactName", { required: "Contact name is required" })}
          />
          {errors.contactName && <p className={errorClass}>{errors.contactName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="p-email"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="p-email"
            type="email"
            placeholder="contact@organisation.org"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Org type */}
        <div>
          <label
            htmlFor="p-orgtype"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Organisation Type <span className="text-red-500">*</span>
          </label>
          <select
            id="p-orgtype"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("orgType", { required: "Please select your organisation type" })}
          >
            <option value="">Select type</option>
            <option value="Church/Mosque">Church / Mosque</option>
            <option value="NGO">NGO</option>
            <option value="School">School</option>
            <option value="Corporate">Corporate</option>
            <option value="Government">Government</option>
            <option value="Other">Other</option>
          </select>
          {errors.orgType && <p className={errorClass}>{errors.orgType.message}</p>}
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label
            htmlFor="p-message"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            How do you envision partnering with TAI? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="p-message"
            rows={4}
            placeholder="Tell us about your community, your goals, and how you&apos;d like to work together…"
            className={`${inputClass} resize-none`}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("message", { required: "Please share your message" })}
          />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending…" : "Send Partnership Request"}
        </Button>
      </div>
    </form>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────

export default function GetInvolvedPage() {
  return (
    <>
      {/* ── GetInvolved Section ── */}
      <GetInvolved />

      {/* ── Volunteer Form ── */}
      <section className="bg-sand py-16" id="volunteer">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Serve Your Community</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Sign Up to Volunteer
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Show up. Show love. Whatever your gifting, there is a place for you in the TAI
              volunteer community.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <VolunteerForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Membership Tiers ── */}
      <section className="bg-white py-16" id="membership">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionLabel className="justify-center">Membership</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Join the TAI Community
            </h2>
            <p
              className="text-text-muted mt-3 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Membership connects you to a growing network of advocates, leaders, and
              change-makers committed to community mental wellness.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, i) => (
              <AnimatedSection key={tier.label} delay={i * 0.1}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col border border-sand">
                  {/* Gold top accent */}
                  <div className="h-1.5 bg-gold" />
                  <div className="p-8 flex flex-col flex-1">
                    {/* Label */}
                    <p
                      className="text-xs uppercase tracking-[0.2em] text-anchor font-medium mb-2"
                      style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                    >
                      {tier.label}
                    </p>
                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-6">
                      <span
                        className="text-3xl font-bold text-ink"
                        style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                      >
                        ${tier.price}
                      </span>
                      <span
                        className="text-text-muted text-sm"
                        style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
                      >
                        /mo
                      </span>
                    </div>
                    {/* Perks */}
                    <ul className="flex flex-col gap-3 flex-1 mb-8">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            className="text-gold shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span
                            className="text-sm text-text-muted"
                            style={{
                              fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
                            }}
                          >
                            {perk}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* CTA */}
                    <Button variant="primary" href="/donate" size="md">
                      Join as {tier.label}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership ── */}
      <section className="bg-mist py-16" id="partner">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <SectionLabel className="justify-center">Partnerships</SectionLabel>
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mt-4"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              Partner With TAI
            </h2>
            <p
              className="text-text-muted mt-3 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              Whether you lead a church, run a school, or head a corporate team — there is a
              partnership model that fits your community. Together, we can multiply our reach and
              build resilient ecosystems of care.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <PartnerForm />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterBar />
    </>
  )
}
