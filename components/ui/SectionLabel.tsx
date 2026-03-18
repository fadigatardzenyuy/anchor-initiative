interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold ${className}`}
      style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
    >
      {/* Left gold line */}
      <span className="inline-block w-8 h-px bg-gold shrink-0" aria-hidden="true" />
      <span>{children}</span>
      {/* Right gold line */}
      <span className="inline-block w-8 h-px bg-gold shrink-0" aria-hidden="true" />
    </div>
  );
}
