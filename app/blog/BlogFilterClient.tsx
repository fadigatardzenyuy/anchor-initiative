"use client"

import { useState } from "react"
import BlogCard from "@/components/ui/BlogCard"
import { blogPosts } from "@/lib/content"

const categories = ["All", "Mental Health", "Faith & Wellness", "Community"]

export default function BlogFilterClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All")

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <>
      {/* ── Category Filter Bar ── */}
      <div className="bg-white sticky top-[64px] z-10 border-b border-sand shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? "bg-anchor text-white"
                      : "bg-sand text-ink hover:bg-gold-light hover:text-earth"
                  }`}
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Blog Grid ── */}
      <section className="bg-sand py-16">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  category={post.category}
                  readTime={post.readTime}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  date={post.date}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p
                className="text-text-muted text-lg"
                style={{ fontFamily: "var(--font-serif-loaded, Georgia, serif)" }}
              >
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
