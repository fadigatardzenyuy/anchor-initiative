import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/content";

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
      <circle cx="14" cy="6" r="2.5" />
      <line x1="14" y1="8.5" x2="14" y2="22" />
      <line x1="8" y1="13" x2="20" y2="13" />
      <path d="M8 19 C8 23 5 24 5 24" />
      <path d="M20 19 C20 23 23 24 23 24" />
      <path d="M5 24 Q14 27 23 24" />
    </svg>
  );
}

const sectionHeadingClass =
  "text-xs uppercase tracking-widest text-gold mb-4 font-normal";

export default function Footer() {
  return (
    <footer
      className="bg-ink"
      style={{ fontFamily: "var(--font-sans-loaded, system-ui, sans-serif)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Logo + Tagline + Socials */}
          <div className="flex flex-col gap-4">
            {/* Wordmark */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              <AnchorIcon />
              <div className="flex flex-col leading-none">
                <span
                  className="text-gold uppercase tracking-widest text-[9px] font-normal"
                  style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
                >
                  THE
                </span>
                <span className="text-white font-bold text-sm tracking-wide uppercase">
                  ANCHOR INITIATIVE
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p
              className="text-sand/70 text-sm leading-relaxed"
              style={{
                fontFamily: "var(--font-display-loaded, Georgia, serif)",
                fontStyle: "italic",
              }}
            >
              {siteConfig.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-sand/60 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-200"
              >
                <Facebook size={15} />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-sand/60 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="Twitter / X"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-sand/60 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-200"
              >
                <Twitter size={15} />
              </a>
              <a
                href={siteConfig.social.youtube}
                aria-label="YouTube"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-sand/60 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-200"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3
              className={sectionHeadingClass}
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-sm text-sand/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div>
            <h3
              className={sectionHeadingClass}
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              Get Involved
            </h3>
            <ul className="flex flex-col">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-1 text-sm text-sand/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3
              className={sectionHeadingClass}
              style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-start">
                <Mail
                  size={14}
                  className="text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-sand/70 hover:text-gold transition-colors duration-200 break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone
                  size={14}
                  className="text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-sand/70 hover:text-gold transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin
                  size={14}
                  className="text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-sand/70">{siteConfig.address}</span>
              </li>
              <li className="flex gap-2 items-start">
                <Clock
                  size={14}
                  className="text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-sand/70">
                  {siteConfig.officeHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="border-t border-gold/30 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-sand/50"
            style={{ fontFamily: "var(--font-mono-loaded, monospace)" }}
          >
            <span>© 2025 The Anchor Initiative. All rights reserved.</span>
            <span>Registered Non-Profit Organization</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
