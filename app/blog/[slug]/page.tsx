import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/content"
import AnimatedSection from "@/components/ui/AnimatedSection"
import NewsletterBar from "@/components/sections/NewsletterBar"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ink pt-32 pb-20 relative overflow-hidden grain-overlay">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(27,79,114,0.20) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sand/70 hover:text-gold text-sm transition-colors duration-200 mb-8"
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              <ArrowLeft size={14} />
              Back to Resource Library
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <span
              className="inline-block bg-gold/20 text-gold text-xs uppercase tracking-wider rounded-full px-3 py-1 mb-4"
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              {post.category}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              {post.title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p
              className="text-sand/70 text-sm mt-4"
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              {post.date} · {post.readTime}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="bg-sand py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <p
              className="text-lg text-ink/80 leading-relaxed mb-10 italic border-l-4 border-gold pl-5"
              style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
            >
              {post.excerpt}
            </p>
          </AnimatedSection>

          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <AnimatedSection key={i} delay={0.05 * i}>
                  <h2
                    className="text-2xl font-bold text-ink mt-10 mb-4"
                    style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
                  >
                    {block.text}
                  </h2>
                </AnimatedSection>
              )
            }
            return (
              <AnimatedSection key={i} delay={0.05 * i}>
                <p
                  className="text-ink/80 leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
                >
                  {block.text}
                </p>
              </AnimatedSection>
            )
          })}

          <AnimatedSection delay={0.2}>
            <div className="mt-16 pt-8 border-t border-gold-light flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-anchor hover:text-gold font-medium text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
              >
                <ArrowLeft size={14} />
                Back to Resource Library
              </Link>
              <Link
                href="/anchor-academy"
                className="inline-flex items-center gap-2 bg-anchor text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-anchor/90 transition-colors duration-200"
                style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
              >
                Join Anchor Academy
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NewsletterBar />
    </>
  )
}
