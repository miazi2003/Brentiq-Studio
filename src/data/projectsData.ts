export interface ProjectItemData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string; // "shopify" | "custom-development" | "wordpress" | "wix" | "squarespace" | "ui-ux" | "branding" | "web-development"
  platform: string; // e.g. "Shopify Plus", "Next.js / Node.js", "WordPress / Headless", "Wix Studio", "Squarespace", "Figma Design System", "Brand Identity"
  client: string;
  year: string;
  image: string;
  tags: string[];
  featured?: boolean;
  link: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface ProjectCategory {
  id: string;
  label: string;
  description?: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: "all", label: "All Works" },
  { id: "web-development", label: "Web Development" },
  { id: "shopify", label: "Shopify" },
  { id: "custom-development", label: "Custom Development" },
  { id: "wix", label: "Wix" },
  { id: "squarespace", label: "Squarespace" },
  { id: "wordpress", label: "WordPress" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "branding", label: "Branding" },
];

export const PROJECTS_DATA: ProjectItemData[] = [
  {
    id: "proj-1",
    slug: "relax-studio",
    title: "Relax Studio",
    subtitle: "Digital flagship platform & immersive soundscapes",
    description:
      "A high-performance digital flagship featuring spatial audio curation, custom 60fps WebGL transitions, and headless e-commerce architecture engineered for international scale.",
    category: "custom-development",
    platform: "Next.js / Full-Stack",
    client: "Relax Studio Global",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    tags: ["Custom Architecture", "WebGL Motion", "UI/UX Design"],
    featured: true,
    link: "/#contact",
    liveUrl: "https://relax-studio.example.com",
    metrics: [
      { label: "Performance Score", value: "99/100" },
      { label: "Avg Session Duration", value: "+140%" },
    ],
  },
  {
    id: "proj-2",
    slug: "aura-acoustics",
    title: "Aura Acoustics",
    subtitle: "Luxury sound equipment & brand visual universe",
    description:
      "Complete brand identity system, editorial art direction, and Shopify Plus store designed to reflect the acoustic purity and handcrafted precision of audiophile gear.",
    category: "shopify",
    platform: "Shopify Plus",
    client: "Aura Audio Group",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify Plus", "E-Commerce", "Brand Strategy"],
    featured: true,
    link: "/#contact",
    liveUrl: "https://aura-acoustics.example.com",
    metrics: [
      { label: "Conversion Lift", value: "+48%" },
      { label: "Checkout Speed", value: "1.2s" },
    ],
  },
  {
    id: "proj-3",
    slug: "horizon-enterprise",
    title: "Horizon Enterprise",
    subtitle: "Enterprise cloud intelligence & executive dashboard",
    description:
      "End-to-end design system, high-throughput interactive data visualization interface, and performant web architecture for high-frequency cloud resource orchestration.",
    category: "ui-ux",
    platform: "Design System & UI",
    client: "Horizon Cloud Inc.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    tags: ["Product Design", "Design Tokens", "Dashboard UX"],
    featured: true,
    link: "/#contact",
    liveUrl: "https://horizon-studio.example.com",
    metrics: [
      { label: "User Task Efficiency", value: "+62%" },
      { label: "Adoption Rate", value: "94%" },
    ],
  },
  {
    id: "proj-4",
    slug: "vortex-motion",
    title: "Vortex Motion",
    subtitle: "Automotive film studio & bespoke digital showcase",
    description:
      "A cinematic visual portfolio engineered for seamless video streaming, zero-latency frame scrubbing, and high-impact editorial storytelling.",
    category: "web-development",
    platform: "Next.js / Video Engine",
    client: "Vortex Motion Films",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1600&auto=format&fit=crop",
    tags: ["Interactive Video", "Next.js", "Creative Direction"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://vortex-motion.example.com",
    metrics: [
      { label: "Video Load Time", value: "<0.4s" },
      { label: "Brand Retention", value: "+85%" },
    ],
  },
  {
    id: "proj-5",
    slug: "luxe-botanicals",
    title: "Luxe Botanicals",
    subtitle: "Organic skincare & direct-to-consumer store",
    description:
      "Custom Shopify storefront with tailored product subscription flows, ingredient traceability widgets, and bespoke luxury packaging guidelines.",
    category: "shopify",
    platform: "Shopify",
    client: "Luxe Botanicals Co.",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop",
    tags: ["Shopify", "Subscriptions", "Brand Identity"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://luxe-botanicals.example.com",
    metrics: [
      { label: "Repeat Order Rate", value: "42%" },
      { label: "Mobile Revenue", value: "+74%" },
    ],
  },
  {
    id: "proj-6",
    slug: "strata-capital",
    title: "Strata Capital",
    subtitle: "Institutional venture fund & market insights portal",
    description:
      "Headless WordPress architecture delivering real-time portfolio tracking, restricted LP portal access, and institutional editorial publications.",
    category: "wordpress",
    platform: "WordPress / Headless",
    client: "Strata Ventures",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    tags: ["Headless WordPress", "Editorial", "LP Portal"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://strata-capital.example.com",
    metrics: [
      { label: "Lighthouse Speed", value: "100/100" },
      { label: "Security Rating", value: "A+" },
    ],
  },
  {
    id: "proj-7",
    slug: "atelier-nordic",
    title: "Atelier Nordic",
    subtitle: "Scandinavian architectural studio & monograph showcase",
    description:
      "Bespoke Wix Studio architecture with fluid breakpoint layouts, horizontal gallery cascades, and precise minimalist typography built for international architects.",
    category: "wix",
    platform: "Wix Studio",
    client: "Atelier Nordic Arkitekter",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    tags: ["Wix Studio", "Architecture", "Minimalism"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://atelier-nordic.example.com",
    metrics: [
      { label: "Inquiry Growth", value: "+90%" },
      { label: "Global Reach", value: "32 Countries" },
    ],
  },
  {
    id: "proj-8",
    slug: "maya-lin-personal",
    title: "Maya Lin Collective",
    subtitle: "Creative director & keynote speaker portfolio",
    description:
      "A high-impact Squarespace custom-coded portfolio featuring editorial typography, fluid video reels, and seamless newsletter integration.",
    category: "squarespace",
    platform: "Squarespace",
    client: "Maya Lin Agency",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop",
    tags: ["Squarespace", "Personal Brand", "Media Kit"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://maya-lin.example.com",
    metrics: [
      { label: "Keynote Inquiries", value: "+115%" },
      { label: "Bounce Rate", value: "24%" },
    ],
  },
  {
    id: "proj-9",
    slug: "novus-fintech",
    title: "Novus Pay",
    subtitle: "Next-generation cross-border payment app interface",
    description:
      "Mobile iOS and Android UI/UX architecture, tokenized micro-interactions, multi-currency wallet management, and comprehensive product design system.",
    category: "ui-ux",
    platform: "Mobile UI/UX",
    client: "Novus Technologies",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1600&auto=format&fit=crop",
    tags: ["Mobile UX", "Design Systems", "FinTech"],
    featured: true,
    link: "/#contact",
    liveUrl: "https://novus-pay.example.com",
    metrics: [
      { label: "App Store Rating", value: "4.9★" },
      { label: "Daily Active Users", value: "180k" },
    ],
  },
  {
    id: "proj-10",
    slug: "zenith-spirits",
    title: "Zenith Distillers",
    subtitle: "Artisanal spirits branding, packaging & identity",
    description:
      "Comprehensive brand identity system, custom foil-embossed bottle packaging, brand guidelines, and an interactive digital tasting room.",
    category: "branding",
    platform: "Brand Identity",
    client: "Zenith Spirits Ltd.",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1600&auto=format&fit=crop",
    tags: ["Brand Identity", "Packaging", "Art Direction"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://zenith-spirits.example.com",
    metrics: [
      { label: "Retail Distribution", value: "+300%" },
      { label: "Design Awards", value: "2 Gold" },
    ],
  },
  {
    id: "proj-11",
    slug: "flight-sync",
    title: "FlightSync SaaS",
    subtitle: "Private aviation charter booking & logistics engine",
    description:
      "Full-stack web application featuring real-time empty-leg route matching, automated pilot scheduling, and Stripe corporate billing integration.",
    category: "custom-development",
    platform: "Custom Web App",
    client: "FlightSync Aviation",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    tags: ["React / Node", "Live WebSockets", "SaaS Platform"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://flightsync.example.com",
    metrics: [
      { label: "Booking Velocity", value: "4.2x Faster" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    id: "proj-12",
    slug: "lumina-health",
    title: "Lumina Longevity",
    subtitle: "Clinical wellness & functional medicine practice",
    description:
      "High-converting WordPress custom theme with integrated HIPAA-compliant intake forms, patient lab portal, and educational medical journal.",
    category: "wordpress",
    platform: "WordPress",
    client: "Lumina Health Network",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
    tags: ["WordPress", "Healthcare", "SEO Architecture"],
    featured: false,
    link: "/#contact",
    liveUrl: "https://lumina-health.example.com",
    metrics: [
      { label: "Organic Search Traffic", value: "+210%" },
      { label: "Patient Signups", value: "+88%" },
    ],
  },
];

