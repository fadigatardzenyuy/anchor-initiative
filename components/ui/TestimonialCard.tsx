interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="bg-sand rounded-sm p-8 flex flex-col gap-6 h-full">
      {/* Opening quote mark */}
      <div
        className="text-6xl text-gold opacity-60 leading-none select-none"
        style={{ fontFamily: "var(--font-display-loaded, 'Cormorant Garamond', Georgia, serif)" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote text */}
      <blockquote
        className="text-ink text-lg italic leading-relaxed flex-1 -mt-4"
        style={{ fontFamily: "var(--font-serif-loaded, 'Lora', Georgia, serif)" }}
      >
        {quote}
      </blockquote>

      {/* Author info */}
      <footer className="flex items-center gap-4 pt-2 border-t border-gold-light">
        {/* Avatar with initials */}
        <div
          className="w-10 h-10 rounded-full bg-anchor text-white flex items-center justify-center shrink-0 text-sm font-semibold select-none"
          style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div className="flex flex-col gap-0.5">
          {/* Author name */}
          <span
            className="text-ink font-semibold text-sm leading-tight"
            style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
          >
            {author}
          </span>
          {/* Role */}
          <span
            className="text-text-muted text-xs uppercase tracking-wider"
            style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
          >
            {role}
          </span>
        </div>
      </footer>
    </div>
  );
}
