import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Lora, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans-loaded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif-loaded",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono-loaded",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase is required so Next.js can resolve the auto-generated OG image URL
  metadataBase: new URL("https://theanchorinitiative.org"),
  title: {
    default: "The Anchor Initiative | Anchored in Faith. Equipped for Life.",
    template: "%s | The Anchor Initiative",
  },
  description:
    "TAI trains community leaders as Mental Health Anchors — providing emotional first aid, promoting mental wellness, and restoring hope in underserved communities.",
  keywords: [
    "mental health",
    "faith-based nonprofit",
    "community outreach",
    "mental wellness",
    "emotional first aid",
    "anchor academy",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theanchorinitiative.org",
    siteName: "The Anchor Initiative",
    title: "The Anchor Initiative | Anchored in Faith. Equipped for Life.",
    description:
      "TAI trains community leaders as Mental Health Anchors — providing emotional first aid, promoting mental wellness, and restoring hope in underserved communities.",
    // og:image is auto-injected by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    // twitter:image is auto-injected from app/opengraph-image.tsx
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "The Anchor Initiative",
  alternateName: "TAI",
  url: "https://theanchorinitiative.org",
  description:
    "A faith-based non-profit training community leaders as Mental Health Anchors to provide emotional first aid and promote mental wellness.",
  slogan: "Anchored in Faith. Equipped for Life.",
  foundingDate: "2020",
  areaServed: "Community",
  knowsAbout: ["Mental Health", "Community Outreach", "Emotional First Aid", "Faith-Based Wellness"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} ${lora.variable} ${dmMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-serif-loaded, var(--font-serif))",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
