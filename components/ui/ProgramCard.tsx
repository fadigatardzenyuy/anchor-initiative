"use client";

import Link from "next/link";
import {
  Heart,
  Shield,
  Link as LinkIcon,
  GraduationCap,
  BookOpen,
  Users,
  LucideIcon,
} from "lucide-react";

type IconName = "Heart" | "Shield" | "Link" | "GraduationCap" | "BookOpen" | "Users";

interface ProgramCardProps {
  icon: IconName;
  title: string;
  description: string;
  href: string;
}

const iconMap: Record<IconName, LucideIcon> = {
  Heart,
  Shield,
  Link: LinkIcon,
  GraduationCap,
  BookOpen,
  Users,
};

export default function ProgramCard({ icon, title, description, href }: ProgramCardProps) {
  const Icon = iconMap[icon] ?? Heart;

  return (
    <div
      className={[
        "group relative bg-white rounded-sm p-6",
        "shadow-md hover:shadow-lg",
        "border-t-2 border-transparent hover:border-gold",
        "translate-y-0 hover:-translate-y-1",
        "transition-all duration-300",
        "flex flex-col gap-4",
      ].join(" ")}
    >
      {/* Icon container */}
      <div className="w-fit">
        <div className="bg-mist rounded-full p-3 text-anchor">
          <Icon size={24} aria-hidden="true" />
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-ink font-semibold text-lg leading-snug"
        style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-text-muted text-sm leading-relaxed flex-1"
        style={{ fontFamily: "var(--font-serif-loaded, 'Lora', Georgia, serif)" }}
      >
        {description}
      </p>

      {/* Learn more link */}
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-[#b8963e] transition-colors duration-200 mt-auto"
        style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
        aria-label={`Learn more about ${title}`}
      >
        Learn more
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </div>
  );
}
