"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/content";

function AnchorIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Ring at top */}
      <circle cx="14" cy="6" r="2.5" />
      {/* Vertical shaft */}
      <line x1="14" y1="8.5" x2="14" y2="22" />
      {/* Horizontal crossbar */}
      <line x1="8" y1="13" x2="20" y2="13" />
      {/* Left curve of flukes */}
      <path d="M8 19 C8 23 5 24 5 24" />
      {/* Right curve of flukes */}
      <path d="M20 19 C20 23 23 24 23 24" />
      {/* Bottom arc connecting flukes */}
      <path d="M5 24 Q14 27 23 24" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-ink shadow-lg shadow-black/20" : "bg-transparent"
        }`}
        style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <AnchorIcon />
            <div className="flex flex-col leading-none">
              <span
                className="text-gold uppercase tracking-widest text-[9px] font-normal"
                style={{
                  fontFamily: "var(--font-mono-loaded, monospace)",
                }}
              >
                THE
              </span>
              <span
                className="text-white font-bold text-sm tracking-wide uppercase"
                style={{
                  fontFamily:
                    "var(--font-sans-loaded, system-ui, sans-serif)",
                }}
              >
                ANCHOR INITIATIVE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  isActive(link.href)
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/donate"
              className="bg-gold text-ink px-5 py-2 rounded-sm text-sm font-semibold hover:brightness-110 transition-all duration-200"
              style={{
                fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
              }}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-ink z-50 flex flex-col"
            style={{
              fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)",
            }}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <AnchorIcon />
                <div className="flex flex-col leading-none">
                  <span
                    className="text-gold uppercase tracking-widest text-[9px] font-normal"
                    style={{
                      fontFamily: "var(--font-mono-loaded, monospace)",
                    }}
                  >
                    THE
                  </span>
                  <span className="text-white font-bold text-sm tracking-wide uppercase">
                    ANCHOR INITIATIVE
                  </span>
                </div>
              </Link>
              <button
                className="text-white p-1"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col gap-1 px-6 pt-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-lg font-medium border-b border-white/10 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-white/80 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * navLinks.length, duration: 0.2 }}
                className="pt-6"
              >
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block bg-gold text-ink px-6 py-3 rounded-sm text-base font-semibold hover:brightness-110 transition-all duration-200"
                >
                  Donate
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
