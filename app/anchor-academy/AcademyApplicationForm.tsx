"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "@/components/ui/Button"

interface ApplicationFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  community: string
  motivation: string
  experience: "None" | "Some" | "Extensive"
}

export default function AcademyApplicationForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>()

  const onSubmit = async (_data: ApplicationFormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
  }

  const labelClass =
    "block text-xs uppercase tracking-wider text-ink mb-1"
  const inputClass =
    "border border-sand bg-white focus:border-anchor outline-none px-4 py-3 rounded-sm w-full text-ink placeholder:text-text-muted transition-colors duration-200"
  const errorClass = "text-red-500 text-xs mt-1"

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-10 shadow-sm text-center max-w-xl mx-auto">
        <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-anchor"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold text-ink mb-2"
          style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
        >
          Application Received!
        </h3>
        <p
          className="text-text-muted leading-relaxed"
          style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
        >
          Thank you! We&apos;ll be in touch within 3 business days.
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
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Amara"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className={errorClass}>{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Osei"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className={errorClass}>{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="amara@example.com"
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
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p className={errorClass}>{errors.phone.message}</p>
          )}
        </div>

        {/* Experience */}
        <div className="md:col-span-2">
          <label
            htmlFor="experience"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Prior Mental Health Experience <span className="text-red-500">*</span>
          </label>
          <select
            id="experience"
            className={inputClass}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("experience", { required: "Please select your experience level" })}
          >
            <option value="">Select your experience level</option>
            <option value="None">None — I&apos;m starting fresh</option>
            <option value="Some">Some — I&apos;ve done informal support</option>
            <option value="Extensive">Extensive — I have formal background</option>
          </select>
          {errors.experience && (
            <p className={errorClass}>{errors.experience.message}</p>
          )}
        </div>

        {/* Community */}
        <div className="md:col-span-2">
          <label
            htmlFor="community"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Describe Your Community <span className="text-red-500">*</span>
          </label>
          <textarea
            id="community"
            rows={3}
            placeholder="Tell us about where you live, work, or worship…"
            className={`${inputClass} resize-none`}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("community", { required: "Please describe your community" })}
          />
          {errors.community && (
            <p className={errorClass}>{errors.community.message}</p>
          )}
        </div>

        {/* Motivation */}
        <div className="md:col-span-2">
          <label
            htmlFor="motivation"
            className={labelClass}
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            Why do you want to become a Mental Health Anchor?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="motivation"
            rows={4}
            placeholder="Share your motivation in your own words…"
            className={`${inputClass} resize-none`}
            style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
            {...register("motivation", {
              required: "Please share your motivation",
              minLength: { value: 30, message: "Please write at least 30 characters" },
            })}
          />
          {errors.motivation && (
            <p className={errorClass}>{errors.motivation.message}</p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? "Submitting…" : "Submit Application"}
        </Button>
      </div>
    </form>
  )
}
