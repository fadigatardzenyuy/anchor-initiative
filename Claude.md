# Claude CLI Prompt — The Anchor Initiative (TAI) Website

## PROJECT OVERVIEW

Build a complete, production-ready website for **The Anchor Initiative (TAI)** — a faith-based outreach and mental wellness non-profit. The site should feel like a premium editorial publication meets a human-centered NGO: warm, grounded, credible, and deeply human. Not corporate. Not generic. Not "AI-generated blue gradient."

---

## ORGANIZATION BRIEF

**Name:** The Anchor Initiative (TAI)  
**Type:** Faith-based non-profit (outreach + mental wellness)  
**Core Focus:** Addressing "double poverty" — lack of physical resources AND lack of mental health resilience — in underserved communities.

**Slogan:** Anchored in Faith. Equipped for Life.  
**Motto:** Restoring Hope. Building Resilience. Anchoring Lives.

**Mission:** To train community leaders as "Mental Health Anchors" who provide emotional first aid, promote mental literacy, and connect individuals to professional support.

**Vision:** To build resilient communities anchored in faith and strengthened by mental wellness education.

---

## TECH STACK

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with a custom design system
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **Icons:** Lucide React
- **Fonts:** Via Google Fonts (see Design System below)
- **SEO:** Next.js metadata API, Open Graph tags, structured data

---

## DESIGN SYSTEM

### Aesthetic Direction
**Refined Warmth + Editorial Authority.** Think: the quiet confidence of a well-designed annual report crossed with the warmth of a community storytelling magazine. Clean, spacious, typographically intentional. Every element should feel considered, not templated. Avoid anything that reads as generic SaaS or startup.

### Color Palette
```
--color-ink:        #1A1A2E   /* Deep navy — primary text, authority */
--color-anchor:     #1B4F72   /* Strong ocean blue — brand primary */
--color-faith:      #2E86AB   /* Mid blue — accents, links */
--color-gold:       #C9A84C   /* Warm gold — highlights, CTAs */
--color-gold-light: #F0D9A0   /* Soft gold — backgrounds, borders */
--color-sand:       #F5F0E8   /* Warm off-white — page background */
--color-mist:       #EAF2F8   /* Very pale blue — section alternates */
--color-earth:      #6B4C3B   /* Warm brown — warmth accents */
--color-white:      #FFFFFF
--color-text-muted: #6B7280
```
**Rule:** Never use cold grays, purple, or pure black. The palette should always feel warm, human, and trustworthy.

### Typography
```
Display/Hero:  "Cormorant Garamond" — weight 600–700, elegant, editorial gravitas
Headings:      "DM Sans" — weight 500–700, clean, modern, readable
Body:          "Lora" — weight 400–500, serif warmth, excellent readability
Accent/Labels: "DM Mono" — weight 400, small caps or tracking, for stats and labels
```

### Spacing & Layout
- Max content width: 1200px
- Section padding: py-20 to py-28
- Use asymmetric layouts — never center everything
- Generous white space; let content breathe
- Grid-breaking pull quotes and stat callouts

### Motion Principles
- Staggered fade-up reveals on scroll (Framer Motion `whileInView`)
- Smooth anchor nav highlight transitions
- Hover states: subtle lift + gold underline on links
- No bounce, no spin, no heavy transforms — subtle and dignified

---

## FILE STRUCTURE

```
tai-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Homepage (imports all sections)
│   ├── about/page.tsx
│   ├── programs/page.tsx
│   ├── anchor-academy/page.tsx
│   ├── impact/page.tsx
│   ├── get-involved/page.tsx
│   ├── donate/page.tsx
│   ├── blog/page.tsx
│   ├── team/page.tsx
│   ├── contact/page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── AnchorAcademy.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── GetInvolved.tsx
│   │   ├── DonateSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── BlogPreview.tsx
│   │   └── NewsletterBar.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionLabel.tsx
│       ├── StatCard.tsx
│       ├── ProgramCard.tsx
│       ├── TestimonialCard.tsx
│       ├── TeamCard.tsx
│       ├── BlogCard.tsx
│       └── AnimatedSection.tsx
├── lib/
│   └── content.ts              # All copy/text content as typed constants
├── public/
│   └── images/                 # Placeholder image slots with descriptive names
├── tailwind.config.ts
└── next.config.ts
```

---

## PAGE-BY-PAGE SPECIFICATIONS

---

### 1. NAVBAR (`components/layout/Navbar.tsx`)

- Sticky, transparent on hero → solid `--color-ink` on scroll
- Logo: TAI wordmark (text-based, "THE ANCHOR INITIATIVE" with a minimal anchor icon)
- Nav links: About | Programs | Anchor Academy | Impact | Blog | Get Involved
- CTA button: "Donate" — gold filled button, always visible
- Mobile: hamburger → full-screen slide-in menu
- Smooth active link highlighting with bottom border in gold

---

### 2. HERO SECTION (`components/sections/Hero.tsx`)

**Layout:** Full-viewport height, split — 60% text/left, 40% visual/right (on desktop). On mobile: stacked, image behind with overlay.

**Background:** Deep `--color-ink` with a subtle grain texture overlay. A warm amber/gold gradient bleed from bottom-right.

**Content:**
```
Eyebrow label:  "Faith · Resilience · Community"
Headline:       "Anchored in Faith.
                 Equipped for Life."
Subheadline:    "The Anchor Initiative trains community leaders to provide 
                 emotional first aid, promote mental wellness, and restore 
                 hope where it's needed most."
CTAs:           [Become an Anchor →]  [Our Programs]  [Donate Today]
```

**Visual side:** Large, warm editorial-style placeholder image (community/people/hope theme). Gold anchor graphic element overlaid.

**Bottom strip:** Scrolling ticker or three trust signals: "Training Community Leaders | Restoring Hope | Building Resilience"

**Animation:** Staggered text reveal on load. CTA buttons fade up with delay.

---

### 3. ABOUT PREVIEW (`components/sections/AboutPreview.tsx`)

**Layout:** Asymmetric two-column. Left: large section number "01" in faint gold + heading. Right: body text + pull quote.

**Content:**
```
Label:     "Who We Are"
Heading:   "Addressing the Double Poverty Crisis"
Body:      "In communities across our nation, individuals face not one 
            but two forms of poverty: the lack of material resources, 
            and the absence of mental health resilience. At The Anchor 
            Initiative, we believe lasting change begins from the inside out.

            We are a faith-rooted organization equipping community leaders — 
            called Mental Health Anchors — to walk alongside the vulnerable, 
            provide emotional first aid, and connect people to the support 
            they deserve."

Pull quote: "True poverty is not only empty hands — it is also a 
             broken sense of hope."

Stats row:  [Communities Reached: 12+] [Anchors Trained: 80+] [Lives Touched: 500+]

CTA:        [Read Our Full Story →]
```

**Design:** Section background `--color-sand`. Pull quote in `--color-anchor` with left gold border.

---

### 4. WHAT WE DO (`components/sections/WhatWeDo.tsx`)

**Layout:** Label + heading, then a 2×2 or 2×3 grid of program cards.

**Content:**
```
Label:    "Our Programs"
Heading:  "Healing Communities,
           One Anchor at a Time"
Intro:    "Our outreach goes beyond food and clothing. We address the 
           whole person — mind, body, and spirit."
```

**Program Cards** (each with icon, title, description):

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | Heart | Community Outreach | Feeding drives, clothing support, and wellness events that meet immediate physical needs while opening doors to mental health conversations. |
| 2 | Shield | Emotional First Aid | Trained Anchors provide on-the-ground emotional support during crises — listening, stabilizing, and walking with individuals through their hardest moments. |
| 3 | Link | Referral & Professional Support | We bridge the gap between community needs and professional mental health services, ensuring no one falls through the cracks. |
| 4 | GraduationCap | Anchor Academy | Structured training and certification programs that equip community leaders with evidence-informed mental health skills grounded in faith values. |
| 5 | BookOpen | Mental Literacy Campaigns | Workshops, awareness events, and educational content that reduce stigma and build a shared language around mental wellness. |
| 6 | Users | Faith Community Integration | Partnering with churches, mosques, and faith groups to embed mental wellness into their pastoral care and community life. |

**Card design:** White cards, soft shadow, gold accent top-border on hover, icon in `--color-anchor`.

---

### 5. ANCHOR ACADEMY (`components/sections/AnchorAcademy.tsx`)

**Layout:** Full-width section with `--color-ink` background (dark section for contrast). Two columns: left is description + steps, right is a stylized certification card mockup.

**Content:**
```
Label:   "Anchor Academy"
Heading: "Become a Certified
          Mental Health Anchor"
Body:    "The Anchor Academy is our flagship training program — 
          designed to transform willing community members into 
          skilled, compassionate Mental Health Anchors.

          No prior clinical experience required. Just a heart 
          for your community and a readiness to serve."
```

**3-Step Process:**
```
Step 1: Enroll       — Complete your application and join a cohort
Step 2: Train        — Attend intensive workshops on emotional first aid, 
                        mental literacy, and faith-informed care
Step 3: Certify & Deploy — Receive your certification and join our 
                            network of active Anchors in your community
```

**Benefits list:**
- Nationally recognized certification
- Ongoing mentorship and community
- Access to TAI resources and referral network
- Opportunities for advanced training
- Make a measurable difference in your community

**CTA:** "Apply for the Next Cohort →" (gold button)

**Certification card mockup:** Stylized card showing "Mental Health Anchor — Certified by The Anchor Initiative" with anchor logo and gold seal.

---

### 6. IMPACT STATS (`components/sections/ImpactStats.tsx`)

**Layout:** Full-width, `--color-mist` background. Large animated counter numbers with labels below. Below stats: a horizontal divider, then a two-column testimonials teaser.

**Stats:**
```
500+    Lives Directly Impacted
80+     Mental Health Anchors Trained
12+     Communities Reached
6       Active Outreach Programs
3       Annual Wellness Drives
1       Vision: Resilient Communities
```

**Design:** Numbers in `Cormorant Garamond` extra-large (text-6xl), label in `DM Mono` small caps. Use Framer Motion count-up animation on scroll entry.

---

### 7. TESTIMONIALS (`components/sections/Testimonials.tsx`)

**Layout:** Alternating large testimonial cards or a horizontal scroll carousel on mobile.

**Sample Testimonials:**
```
"Before TAI, I didn't know it was okay to not be okay. The Anchor 
 training gave me words for my pain and tools to help others."
 — Community Anchor, Cohort 2

"The feeding drive was where I met my Anchor. That conversation 
 changed the direction of my life."
 — Program Beneficiary

"Partnering with TAI has transformed how our church approaches 
 mental health. Our congregation is stronger for it."
 — Pastor, Partner Church
```

**Design:** Cards on `--color-sand` bg, large opening quotation mark in gold, name in `DM Mono`.

---

### 8. GET INVOLVED (`components/sections/GetInvolved.tsx`)

**Layout:** Three distinct cards side by side, each with a different action.

**Cards:**
```
Card 1 — Volunteer
  "Show up. Show love. Make a difference in your community."
  [Sign Up to Volunteer →]

Card 2 — Become a Member
  "Join our growing network of advocates, leaders, and change-makers."
  [Join TAI Today →]

Card 3 — Partner With Us
  "Organizations and faith communities: let's build resilient communities together."
  [Explore Partnership →]
```

**Design:** Card 1 in white, Card 2 in `--color-anchor` (inverted, white text), Card 3 in `--color-gold-light`. Each has a large decorative icon.

---

### 9. DONATE SECTION (`components/sections/DonateSection.tsx`)

**Layout:** Centered, warm section. `--color-sand` background with a subtle radial glow.

**Content:**
```
Label:   "Support The Mission"
Heading: "Your Gift Anchors a Life"
Body:    "Every contribution — no matter the size — helps us train 
          another Anchor, reach another community, and restore 
          another life. You are part of this."

Donation tiers:
  $10  — Provides mental health literacy materials for one person
  $25  — Supports one Anchor's training session
  $50  — Sponsors a community wellness event
  $100 — Funds a full Anchor certification for one leader

Payment methods shown: Mobile Money | Bank Transfer | Online Payment

CTA: [Donate Now →]  (large, gold, prominent)

Fine print: "The Anchor Initiative is a registered non-profit. 
             All donations are used directly for mission activities."
```

---

### 10. BLOG PREVIEW (`components/sections/BlogPreview.tsx`)

**Layout:** Label + heading, then 3 horizontal cards.

**Sample Posts:**
```
Post 1: "What Is Emotional First Aid — And Why Every Community Needs It"
        Category: Mental Health | 5 min read

Post 2: "Faith and Mental Wellness: Breaking the Silence in Our Congregations"
        Category: Faith & Wellness | 7 min read

Post 3: "The 5 Signs Someone in Your Community Needs Support"
        Category: Community | 4 min read
```

**CTA:** "Visit the Resource Library →"

---

### 11. TEAM SECTION (`components/sections/TeamSection.tsx`)

**Layout:** Grid of team cards, 3–4 per row.

**Roles to include:**
```
President / Founder
Vice President
Secretary General
Director of Programs
Director of Training (Anchor Academy)
Mental Health Advisor
Community Outreach Coordinator
Communications Lead
```

**Card design:** Circular photo placeholder, name, role in `DM Mono`, brief one-liner. On hover: card lifts, gold border appears, social links fade in.

---

### 12. NEWSLETTER BAR (`components/sections/NewsletterBar.tsx`)

**Layout:** Full-width bar in `--color-anchor`. Single line: headline left, email input + button right.

**Content:**
```
"Stay Anchored — Get Updates on Our Outreach, Training, and Community Stories."
[Email input field]  [Subscribe →]
```

---

### 13. FOOTER (`components/layout/Footer.tsx`)

**Layout:** 4-column footer on dark `--color-ink` background.

**Columns:**
```
Col 1: TAI Logo + tagline + social icons (Facebook, Instagram, Twitter/X, YouTube)
Col 2: Quick Links — Home, About, Programs, Academy, Impact, Blog
Col 3: Get Involved — Volunteer, Donate, Partner, Membership
Col 4: Contact — Email, Phone, Address, Office Hours
```

**Bottom bar:** "© 2025 The Anchor Initiative. All rights reserved. | Registered Non-Profit Organization"

---

## ADDITIONAL INNER PAGES

Build stub pages (full layout with hero + content placeholder sections) for:

- `/about` — Extended about page with full story, values, history timeline
- `/programs` — Full programs listing with detail cards
- `/anchor-academy` — Dedicated academy page with application form
- `/impact` — Reports, gallery, testimonials, annual numbers
- `/get-involved` — Volunteer form (React Hook Form), membership tiers, partnership info
- `/donate` — Full donation page with payment method options
- `/blog` — Blog listing with category filters
- `/team` — Full team page
- `/contact` — Contact form + map embed placeholder + social links

---

## SEO & METADATA

In `app/layout.tsx`, configure:
```typescript
export const metadata: Metadata = {
  title: {
    default: 'The Anchor Initiative | Anchored in Faith. Equipped for Life.',
    template: '%s | The Anchor Initiative'
  },
  description: 'TAI trains community leaders as Mental Health Anchors — providing emotional first aid, promoting mental wellness, and restoring hope in underserved communities.',
  keywords: ['mental health', 'faith-based nonprofit', 'community outreach', 'mental wellness', 'emotional first aid', 'anchor academy'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theanchorinitiative.org',
    siteName: 'The Anchor Initiative',
  },
  twitter: { card: 'summary_large_image' }
}
```

Add JSON-LD structured data for Organization schema.

---

## TAILWIND CONFIG

Extend `tailwind.config.ts` with the full custom design system:
- Custom colors matching the palette above (named `ink`, `anchor`, `faith`, `gold`, `sand`, `mist`, `earth`)
- Custom font families: `display` (Cormorant Garamond), `sans` (DM Sans), `serif` (Lora), `mono` (DM Mono)
- Custom animation utilities for fade-up, count-up, and ticker

---

## IMPLEMENTATION NOTES

1. **No placeholder AI art** — use color blocks, gradients, or SVG illustrations as image placeholders. Name them descriptively (`/images/community-outreach-hero.jpg`) so real images can be dropped in.
2. **All copy** should be fully written — no lorem ipsum anywhere.
3. **All forms** should use React Hook Form with basic validation.
4. **Animations** with Framer Motion — use `whileInView` with `once: true` for scroll reveals, staggered children for card grids.
5. **Accessibility** — proper `aria-labels`, semantic HTML, keyboard nav on all interactive elements, sufficient color contrast.
6. **Mobile-first** — test every section at 375px, 768px, and 1280px.
7. **Performance** — use Next.js `Image` component for all images, lazy load sections below the fold.

---

## DELIVERABLES

Build and output every file in the structure above with:
- Complete, working code (no stubs except inner pages)
- Full copy for every section (no lorem ipsum)
- All Tailwind classes using the custom design tokens
- Framer Motion animations on all major sections
- A `README.md` with setup instructions and design decisions

