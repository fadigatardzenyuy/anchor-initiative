"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "Who is eligible for Anchor Academy?",
    answer:
      "Any community member with a heart for service. No clinical experience required. If you care about the people around you and want to make a difference, you qualify.",
  },
  {
    question: "How long is the training?",
    answer:
      "Our standard cohort runs 8 weeks with weekend workshops. Sessions are designed to fit around existing commitments — most participants hold full-time jobs or lead community roles.",
  },
  {
    question: "Is the certification recognised?",
    answer:
      "Yes, our certification is recognised across our partner network and faith communities. We are actively working with mental health bodies to secure broader formal recognition.",
  },
  {
    question: "Is there a cost?",
    answer:
      "Training is subsidised. A nominal fee may apply; scholarships are available for those facing financial barriers. No one is turned away due to cost alone.",
  },
]

export default function AcademyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="bg-sand rounded-lg overflow-hidden border border-gold/20">
            <button
              type="button"
              className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-ink pr-4"
                style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
              >
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-anchor transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5">
                <p
                  className="text-text-muted leading-relaxed"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
