import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  slug: string;
  date: string;
  image?: string;
}

export default function BlogCard({
  title,
  category,
  readTime,
  excerpt,
  slug,
  date,
  image,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      aria-label={`Read: ${title}`}
    >
      {/* Image / placeholder area */}
      <div className="relative h-48 w-full overflow-hidden bg-mist shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          /* Gradient placeholder */
          <div className="absolute inset-0 bg-gradient-to-br from-mist via-[#d0e8f5] to-[#c5dff0]" aria-hidden="true" />
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Category pill */}
        <div className="flex items-center gap-2">
          <span
            className="inline-block bg-gold-light text-earth text-xs uppercase tracking-wider rounded-full px-3 py-1"
            style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-ink font-semibold text-lg leading-snug group-hover:text-anchor transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-text-muted text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: "var(--font-serif-loaded, 'Lora', Georgia, serif)" }}
        >
          {excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-gold-light mt-auto">
          <span
            className="text-text-muted text-xs"
            style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
          >
            {date} · {readTime}
          </span>
          <span
            className="text-sm font-medium text-gold group-hover:text-[#b8963e] transition-colors duration-200"
            style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
            aria-hidden="true"
          >
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
