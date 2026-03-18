"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-ink hover:bg-[#b8963e] active:bg-[#a8862e] border border-gold hover:border-[#b8963e]",
  secondary:
    "bg-anchor text-white hover:bg-[#154060] active:bg-[#0f2f48] border border-anchor hover:border-[#154060]",
  outline:
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-ink active:bg-[#b8963e]",
  ghost:
    "bg-transparent text-ink border border-transparent hover:bg-sand active:bg-[#ebe4d4]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const showArrow = (variant: ButtonVariant) =>
  variant === "primary" || variant === "secondary";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses = [
    "inline-flex items-center justify-center gap-2",
    "rounded-sm font-medium tracking-wide",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  const content = (
    <>
      <span style={{ fontFamily: "var(--font-sans-loaded, 'DM Sans', system-ui, sans-serif)" }}>
        {children}
      </span>
      {showArrow(variant) && (
        <ChevronRight
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          size={size === "sm" ? 14 : size === "lg" ? 20 : 16}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${baseClasses}`}
    >
      {content}
    </button>
  );
}
