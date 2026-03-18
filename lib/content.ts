// All copy and content for The Anchor Initiative website

export const siteConfig = {
  name: "The Anchor Initiative",
  acronym: "TAI",
  tagline: "Anchored in Faith. Equipped for Life.",
  motto: "Restoring Hope. Building Resilience. Anchoring Lives.",
  mission:
    "To train community leaders as 'Mental Health Anchors' who provide emotional first aid, promote mental literacy, and connect individuals to professional support.",
  vision:
    "To build resilient communities anchored in faith and strengthened by mental wellness education.",
  email: "info@theanchorinitiative.org",
  phone: "+1 (555) 000-0000",
  address: "123 Anchor Way, Community District, CA 90210",
  officeHours: "Monday–Friday: 9am–5pm",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Anchor Academy", href: "/anchor-academy" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Get Involved", href: "/get-involved" },
];

export const heroContent = {
  eyebrow: "Faith · Resilience · Community",
  headline: ["Anchored in Faith.", "Equipped for Life."],
  subheadline:
    "The Anchor Initiative trains community leaders to provide emotional first aid, promote mental wellness, and restore hope where it's needed most.",
  ctas: [
    { label: "Become an Anchor", href: "/anchor-academy", variant: "primary" },
    { label: "Our Programs", href: "/programs", variant: "secondary" },
    { label: "Donate Today", href: "/donate", variant: "outline" },
  ],
  ticker: [
    "Training Community Leaders",
    "Restoring Hope",
    "Building Resilience",
    "Anchoring Lives",
    "Healing Communities",
    "Equipping the Faithful",
  ],
};

export const aboutContent = {
  label: "Who We Are",
  sectionNumber: "01",
  heading: "Addressing the Double Poverty Crisis",
  body: [
    "In communities across our nation, individuals face not one but two forms of poverty: the lack of material resources, and the absence of mental health resilience. At The Anchor Initiative, we believe lasting change begins from the inside out.",
    "We are a faith-rooted organization equipping community leaders — called Mental Health Anchors — to walk alongside the vulnerable, provide emotional first aid, and connect people to the support they deserve.",
  ],
  pullQuote:
    "True poverty is not only empty hands — it is also a broken sense of hope.",
  stats: [
    { value: "12+", label: "Communities Reached" },
    { value: "80+", label: "Anchors Trained" },
    { value: "500+", label: "Lives Touched" },
  ],
  cta: { label: "Read Our Full Story", href: "/about" },
};

export const programs = [
  {
    id: "community-outreach",
    icon: "Heart",
    title: "Community Outreach",
    description:
      "Feeding drives, clothing support, and wellness events that meet immediate physical needs while opening doors to mental health conversations.",
    href: "/programs#community-outreach",
  },
  {
    id: "emotional-first-aid",
    icon: "Shield",
    title: "Emotional First Aid",
    description:
      "Trained Anchors provide on-the-ground emotional support during crises — listening, stabilizing, and walking with individuals through their hardest moments.",
    href: "/programs#emotional-first-aid",
  },
  {
    id: "referral-support",
    icon: "Link",
    title: "Referral & Professional Support",
    description:
      "We bridge the gap between community needs and professional mental health services, ensuring no one falls through the cracks.",
    href: "/programs#referral-support",
  },
  {
    id: "anchor-academy",
    icon: "GraduationCap",
    title: "Anchor Academy",
    description:
      "Structured training and certification programs that equip community leaders with evidence-informed mental health skills grounded in faith values.",
    href: "/anchor-academy",
  },
  {
    id: "mental-literacy",
    icon: "BookOpen",
    title: "Mental Literacy Campaigns",
    description:
      "Workshops, awareness events, and educational content that reduce stigma and build a shared language around mental wellness.",
    href: "/programs#mental-literacy",
  },
  {
    id: "faith-integration",
    icon: "Users",
    title: "Faith Community Integration",
    description:
      "Partnering with churches, mosques, and faith groups to embed mental wellness into their pastoral care and community life.",
    href: "/programs#faith-integration",
  },
];

export const academyContent = {
  label: "Anchor Academy",
  heading: ["Become a Certified", "Mental Health Anchor"],
  body: [
    "The Anchor Academy is our flagship training program — designed to transform willing community members into skilled, compassionate Mental Health Anchors.",
    "No prior clinical experience required. Just a heart for your community and a readiness to serve.",
  ],
  steps: [
    {
      number: "01",
      title: "Enroll",
      description: "Complete your application and join a cohort",
    },
    {
      number: "02",
      title: "Train",
      description:
        "Attend intensive workshops on emotional first aid, mental literacy, and faith-informed care",
    },
    {
      number: "03",
      title: "Certify & Deploy",
      description:
        "Receive your certification and join our network of active Anchors in your community",
    },
  ],
  benefits: [
    "Nationally recognized certification",
    "Ongoing mentorship and community",
    "Access to TAI resources and referral network",
    "Opportunities for advanced training",
    "Make a measurable difference in your community",
  ],
  cta: { label: "Apply for the Next Cohort", href: "/anchor-academy" },
};

export const impactStats = [
  { value: 500, suffix: "+", label: "Lives Directly Impacted" },
  { value: 80, suffix: "+", label: "Mental Health Anchors Trained" },
  { value: 12, suffix: "+", label: "Communities Reached" },
  { value: 6, suffix: "", label: "Active Outreach Programs" },
  { value: 3, suffix: "", label: "Annual Wellness Drives" },
  { value: 1, suffix: "", label: "Vision: Resilient Communities" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Before TAI, I didn't know it was okay to not be okay. The Anchor training gave me words for my pain and tools to help others.",
    author: "Community Anchor",
    role: "Cohort 2",
    initials: "CA",
  },
  {
    id: 2,
    quote:
      "The feeding drive was where I met my Anchor. That conversation changed the direction of my life.",
    author: "Program Beneficiary",
    role: "Outreach Participant",
    initials: "PB",
  },
  {
    id: 3,
    quote:
      "Partnering with TAI has transformed how our church approaches mental health. Our congregation is stronger for it.",
    author: "Pastor",
    role: "Partner Church",
    initials: "PC",
  },
];

export const getInvolvedCards = [
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Show up. Show love. Make a difference in your community.",
    cta: { label: "Sign Up to Volunteer", href: "/get-involved#volunteer" },
    variant: "white",
    icon: "HandHeart",
  },
  {
    id: "member",
    title: "Become a Member",
    description:
      "Join our growing network of advocates, leaders, and change-makers.",
    cta: { label: "Join TAI Today", href: "/get-involved#membership" },
    variant: "anchor",
    icon: "UserPlus",
  },
  {
    id: "partner",
    title: "Partner With Us",
    description:
      "Organizations and faith communities: let's build resilient communities together.",
    cta: { label: "Explore Partnership", href: "/get-involved#partner" },
    variant: "gold-light",
    icon: "Handshake",
  },
];

export const donationTiers = [
  {
    amount: 10,
    impact: "Provides mental health literacy materials for one person",
  },
  {
    amount: 25,
    impact: "Supports one Anchor's training session",
  },
  {
    amount: 50,
    impact: "Sponsors a community wellness event",
  },
  {
    amount: 100,
    impact: "Funds a full Anchor certification for one leader",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "What Is Emotional First Aid — And Why Every Community Needs It",
    category: "Mental Health",
    readTime: "5 min read",
    excerpt:
      "Emotional first aid is the practice of treating everyday psychological wounds with the same urgency we give physical injuries. Here's why it matters.",
    slug: "what-is-emotional-first-aid",
    date: "March 10, 2025",
    image: "/images/blog-emotional-first-aid.jpg",
    content: [
      {
        type: "paragraph",
        text: "When someone breaks their arm, we don't tell them to pray harder and keep moving. We get them to a doctor. We treat the wound. Yet when someone experiences grief, shame, failure, or rejection — the kinds of psychological injuries that happen to all of us — we often expect people to simply push through.",
      },
      {
        type: "paragraph",
        text: "Emotional first aid is the practice of applying the same logic of care to our inner lives. Coined by psychologist Guy Winch, the concept is simple: just as physical first aid addresses wounds before they become infections, emotional first aid addresses psychological wounds before they become lasting damage.",
      },
      {
        type: "heading",
        text: "What Are Psychological Wounds?",
      },
      {
        type: "paragraph",
        text: "Psychological wounds include loneliness, rejection, failure, guilt, rumination, and loss. Left untreated, these experiences don't just fade — they compound. Loneliness deepens into isolation. Guilt hardens into shame. Failure unchecked becomes a story about who you are rather than something that happened to you.",
      },
      {
        type: "paragraph",
        text: "Emotional first aid means recognizing these wounds early and taking small, intentional steps to address them — before they define a person's trajectory.",
      },
      {
        type: "heading",
        text: "Why Every Community Needs It",
      },
      {
        type: "paragraph",
        text: "Professional mental health care is essential — but it is not always accessible. Cost, stigma, wait times, and cultural barriers mean that many people never see a therapist or counselor. In the meantime, they are surrounded by neighbors, friends, family members, and faith community members who could offer meaningful support if they only knew how.",
      },
      {
        type: "paragraph",
        text: "At The Anchor Initiative, we train community leaders as Mental Health Anchors — equipping them with the skills to recognize distress, offer compassionate support, and connect people to professional care when needed. Emotional first aid is the foundation of everything we do.",
      },
      {
        type: "paragraph",
        text: "You don't need a clinical degree to make a difference. You need awareness, empathy, and a few practical tools. That's what we provide.",
      },
    ],
  },
  {
    id: 2,
    title: "Faith and Mental Wellness: Breaking the Silence in Our Congregations",
    category: "Faith & Wellness",
    readTime: "7 min read",
    excerpt:
      "For too long, mental health has been a topic spoken of in hushed tones — or not at all — in faith communities. It's time to change that narrative.",
    slug: "faith-and-mental-wellness",
    date: "February 22, 2025",
    image: "/images/blog-faith-wellness.jpg",
    content: [
      {
        type: "paragraph",
        text: "In many faith communities, mental health struggles are still treated as spiritual failures — evidence of weak faith, unconfessed sin, or insufficient trust in God. This narrative is not only theologically incomplete; it is actively harmful.",
      },
      {
        type: "paragraph",
        text: "The result is a painful silence. People sit in pews, smile during fellowship, and carry invisible weights home with them. They fear that asking for help will mark them as spiritually deficient. And so they suffer alone.",
      },
      {
        type: "heading",
        text: "Faith Does Not Immunize Against Struggle",
      },
      {
        type: "paragraph",
        text: "The Psalms are full of anguish. Elijah collapsed in despair under a broom tree and asked to die. Job cried out from the depths of his suffering. Jesus himself wept at the tomb of Lazarus and prayed in agony in the garden of Gethsemane.",
      },
      {
        type: "paragraph",
        text: "Faith does not make us immune to mental health challenges. Depression, anxiety, trauma, and grief are not signs of spiritual failure — they are part of the human experience, and they are addressed with compassion throughout scripture.",
      },
      {
        type: "heading",
        text: "The Church as a Place of Healing",
      },
      {
        type: "paragraph",
        text: "Faith communities have always been places of care. At their best, they offer belonging, meaning, accountability, and support through life's hardest seasons. These are precisely the conditions that mental health research tells us are protective against psychological distress.",
      },
      {
        type: "paragraph",
        text: "But to fully embrace that healing role, congregations must name mental health struggles openly — from the pulpit, in small groups, in pastoral conversations — and create environments where people feel safe enough to be honest about what they're carrying.",
      },
      {
        type: "heading",
        text: "What TAI Is Doing",
      },
      {
        type: "paragraph",
        text: "The Anchor Initiative partners with faith communities to do exactly this. Through our Faith Community Integration program, we work with pastors and leaders to embed mental wellness into their care structures — not replacing faith, but enriching it with practical skills and a more complete theology of suffering and healing.",
      },
      {
        type: "paragraph",
        text: "If your congregation is ready to break the silence and become a place where the whole person is welcomed and cared for, we'd love to partner with you.",
      },
    ],
  },
  {
    id: 3,
    title: "The 5 Signs Someone in Your Community Needs Support",
    category: "Community",
    readTime: "4 min read",
    excerpt:
      "Knowing how to recognize when someone is struggling can be the difference between timely help and a deepening crisis. Here are the signs to watch for.",
    slug: "5-signs-someone-needs-support",
    date: "January 15, 2025",
    image: "/images/blog-community-support.jpg",
    content: [
      {
        type: "paragraph",
        text: "One of the most powerful things a community can do is pay attention. Not the kind of surveillance that invades privacy, but the kind of caring attention that notices when someone seems off — and shows up.",
      },
      {
        type: "paragraph",
        text: "Many mental health crises don't happen suddenly. They build over time, marked by signals that the people around us can learn to recognize. Here are five of the most common signs that someone may need support.",
      },
      {
        type: "heading",
        text: "1. Withdrawal from People and Activities",
      },
      {
        type: "paragraph",
        text: "When someone who was previously engaged starts pulling back — missing gatherings, declining invitations, going quiet on communication — it's often a sign that something is wrong. Isolation is both a symptom and a risk factor for mental health decline. Don't take it personally. Reach out with warmth.",
      },
      {
        type: "heading",
        text: "2. Changes in Mood or Behavior",
      },
      {
        type: "paragraph",
        text: "Unexplained irritability, increased tearfulness, emotional numbness, or dramatic shifts in personality can all indicate underlying distress. You may notice someone who was cheerful becoming flat, or someone who was calm becoming easily agitated. Trust your instincts when something seems different.",
      },
      {
        type: "heading",
        text: "3. Neglecting Basic Self-Care",
      },
      {
        type: "paragraph",
        text: "When people are struggling, basic maintenance — bathing, eating, sleeping, keeping their living space — often slips. This isn't laziness. It's a sign that their capacity has been overwhelmed. If someone who normally takes care of themselves appears disheveled, exhausted, or mentions not sleeping or eating, that's worth checking on.",
      },
      {
        type: "heading",
        text: "4. Expressing Hopelessness or Helplessness",
      },
      {
        type: "paragraph",
        text: "Listen for language that signals a loss of hope: 'Nothing ever changes,' 'What's the point,' 'I just can't do this anymore.' These statements sometimes pass as venting — and sometimes they're much more serious. Create space for honest conversation, and never minimize what you hear.",
      },
      {
        type: "heading",
        text: "5. Increased Use of Substances or Risky Behavior",
      },
      {
        type: "paragraph",
        text: "People in pain often reach for things that numb it — alcohol, substances, risky behaviors that offer a sense of control or escape. An increase in these patterns is a red flag. It doesn't mean the person is a bad person — it means they're hurting and have found an imperfect coping mechanism.",
      },
      {
        type: "heading",
        text: "What to Do When You Notice These Signs",
      },
      {
        type: "paragraph",
        text: "The first step is the simplest: show up and ask. You don't need to have all the answers. A genuine 'I've noticed you seem like you're having a hard time — how are you really doing?' can open a door that changes everything.",
      },
      {
        type: "paragraph",
        text: "If you want to be better equipped to have these conversations and connect people to real support, consider joining our Anchor Academy training. We'll give you the tools to move from noticing to helping — with compassion, skill, and confidence.",
      },
    ],
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Dr. Amara Osei",
    role: "President & Founder",
    bio: "Pioneering the intersection of faith and mental wellness in underserved communities.",
    initials: "AO",
    image: "/images/team-president.jpg",
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "Vice President",
    bio: "Leading strategic partnerships and organizational growth across communities.",
    initials: "MA",
    image: "/images/team-vp.jpg",
  },
  {
    id: 3,
    name: "Sarah Mensah",
    role: "Secretary General",
    bio: "Ensuring TAI's operations run with excellence and transparency.",
    initials: "SM",
    image: "/images/team-secretary.jpg",
  },
  {
    id: 4,
    name: "Dr. James Boateng",
    role: "Director of Programs",
    bio: "Designing and overseeing evidence-based community outreach initiatives.",
    initials: "JB",
    image: "/images/team-programs.jpg",
  },
  {
    id: 5,
    name: "Priscilla Nkrumah",
    role: "Director of Training",
    bio: "Building the curriculum and community that makes Anchor Academy transformative.",
    initials: "PN",
    image: "/images/team-training.jpg",
  },
  {
    id: 6,
    name: "Dr. Emmanuel Asante",
    role: "Mental Health Advisor",
    bio: "Providing clinical expertise and professional oversight to all TAI programs.",
    initials: "EA",
    image: "/images/team-advisor.jpg",
  },
  {
    id: 7,
    name: "Grace Ofori",
    role: "Community Outreach Coordinator",
    bio: "Connecting communities to resources, events, and the TAI network.",
    initials: "GO",
    image: "/images/team-outreach.jpg",
  },
  {
    id: 8,
    name: "Kwame Darko",
    role: "Communications Lead",
    bio: "Telling the TAI story with clarity, warmth, and purpose.",
    initials: "KD",
    image: "/images/team-comms.jpg",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Academy", href: "/anchor-academy" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
  ],
  getInvolved: [
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Partner", href: "/get-involved#partner" },
    { label: "Membership", href: "/get-involved#membership" },
  ],
};
