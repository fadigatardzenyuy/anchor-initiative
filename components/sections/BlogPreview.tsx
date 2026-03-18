import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/content";

export default function BlogPreview() {
  return (
    <section className="bg-mist py-24" aria-labelledby="blog-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <SectionLabel>Resources</SectionLabel>
            <h2
              id="blog-heading"
              className="text-4xl md:text-5xl font-semibold text-ink mt-2 leading-tight"
              style={{ fontFamily: "var(--font-display-loaded, Georgia, serif)" }}
            >
              From Our Resource Library
            </h2>
          </div>
        </AnimatedSection>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.12}>
              <BlogCard
                title={post.title}
                category={post.category}
                readTime={post.readTime}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                image={post.image}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <Button variant="secondary" href="/blog" size="lg">
              Visit the Resource Library →
            </Button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
