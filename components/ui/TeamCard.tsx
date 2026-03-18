"use client";

import Image from "next/image";
import { Twitter, Linkedin, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}

export default function TeamCard({ name, role, bio, initials, image }: TeamCardProps) {
  return (
    <div
      className={[
        "group relative bg-white rounded-lg p-6",
        "shadow-sm hover:shadow-md",
        "border border-transparent hover:border-gold",
        "translate-y-0 hover:-translate-y-1",
        "transition-all duration-300",
        "flex flex-col items-center text-center gap-3",
      ].join(" ")}
    >
      {/* Avatar / Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 mb-1">
        {image ? (
          <Image
            src={image}
            alt={`Photo of ${name}`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-anchor text-white flex items-center justify-center text-xl font-semibold select-none"
            style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
            aria-hidden="true"
          >
            {initials}
          </div>
        )}
      </div>

      {/* Name */}
      <h3
        className="text-ink font-semibold text-base leading-tight"
        style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}
      >
        {name}
      </h3>

      {/* Role */}
      <span
        className="text-gold text-xs uppercase tracking-wider"
        style={{ fontFamily: "var(--font-mono-loaded, 'DM Mono', 'Courier New', monospace)" }}
      >
        {role}
      </span>

      {/* Bio */}
      <p
        className="text-text-muted text-sm leading-relaxed mt-1"
        style={{ fontFamily: "var(--font-serif-loaded, 'Lora', Georgia, serif)" }}
      >
        {bio}
      </p>

      {/* Social icons — fade in on hover */}
      <div
        className="flex items-center justify-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-label={`Social links for ${name}`}
      >
        <a
          href="#"
          className="text-text-muted hover:text-anchor transition-colors duration-200 p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={`${name} on Twitter`}
        >
          <Twitter size={15} aria-hidden="true" />
        </a>
        <a
          href="#"
          className="text-text-muted hover:text-anchor transition-colors duration-200 p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={`${name} on LinkedIn`}
        >
          <Linkedin size={15} aria-hidden="true" />
        </a>
        <a
          href="#"
          className="text-text-muted hover:text-anchor transition-colors duration-200 p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label={`Email ${name}`}
        >
          <Mail size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
