import { ImageResponse } from "next/og";

// Next.js App Router special file — auto-generates og:image and twitter:image meta tags
export const runtime = "edge";
export const alt = "The Anchor Initiative — Anchored in Faith. Equipped for Life.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A2E",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle gold radial glow behind the icon */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
          }}
        />

        {/* Anchor icon — mirrors the Navbar AnchorIcon SVG exactly */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 28 28"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="14" cy="6" r="2.5" />
          <line x1="14" y1="8.5" x2="14" y2="22" />
          <line x1="8" y1="13" x2="20" y2="13" />
          <path d="M8 19 C8 23 5 24 5 24" />
          <path d="M20 19 C20 23 23 24 23 24" />
          <path d="M5 24 Q14 27 23 24" />
        </svg>

        {/* "THE" label in gold monospace */}
        <div
          style={{
            color: "#C9A84C",
            fontSize: 20,
            letterSpacing: 14,
            marginTop: 28,
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          THE
        </div>

        {/* "ANCHOR INITIATIVE" in white bold */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: 8,
            marginTop: 6,
            textTransform: "uppercase",
          }}
        >
          ANCHOR INITIATIVE
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 26,
            marginTop: 20,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Anchored in Faith. Equipped for Life.
        </div>

        {/* Bottom gold rule */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            width: 80,
            height: 2,
            background: "#C9A84C",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
