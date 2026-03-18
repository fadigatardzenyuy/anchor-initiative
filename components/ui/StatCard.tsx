interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-start pb-4 border-b-2 border-gold ${className}`}
    >
      {/* Stat value */}
      <span
        className="text-5xl font-bold text-anchor leading-none"
        style={{ fontFamily: "var(--font-display-loaded, 'Cormorant Garamond', Georgia, serif)" }}
        aria-label={value}
      >
        {value}
      </span>

      {/* Stat label */}
      <span
        className="mt-2 text-xs uppercase tracking-widest text-text-muted"
        style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
      >
        {label}
      </span>
    </div>
  );
}
