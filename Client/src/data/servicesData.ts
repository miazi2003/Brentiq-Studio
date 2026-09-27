export interface ServiceProjectItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  metric?: {
    value: string;
    label: string;
  };
}

export interface ServiceItemData {
  slug: string;
  category: "development" | "app-development" | "uiux" | "motion" | "branding" | "ecommerce" | "marketing";
  categoryLabel: string;
  number: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  capabilities: string[];
  techStack: string[];
  image: string;
  isFlagship?: boolean;
  aspectStyle: {
    width: string;
    height: string;
    offset: string;
  };
  projects: ServiceProjectItem[];
}

export const SERVICES_DATA: ServiceItemData[] = [
  {
    slug: "web-development",
    category: "development",
    categoryLabel: "Core Specialty",
    number: "01",
    title: "Web Development",
    subtitle: "Custom Next.js, React & Full-Stack",
    headline: "Blazing fast, pixel-perfect web experiences engineered for 60fps fluidity.",
    description:
      "Our premier specialty. Zero disconnect between design and code. We engineer bespoke frontend architectures and modern web applications with clean TypeScript, seamless GSAP micro-animations, and full responsiveness that scale flawlessly.",
    capabilities: [
      "Bespoke Next.js & React Applications",
      "GSAP Motion & 60fps Smooth Scrolling",
      "Interactive 3D / WebGL Elements",
      "Custom API & Full-Stack Architecture",
      "SEO-Optimized Semantic Markup",
      "Core Web Vitals 95+ Guarantee",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    isFlagship: true,
    aspectStyle: {
      width: "w-[360px] sm:w-[480px] md:w-[580px]",
      height: "h-[380px] sm:h-[440px] md:h-[480px]",
      offset: "-translate-y-4",
    },
    projects: [
      {
        id: "WD-01",
        title: "Nexus Global SaaS",
        client: "Nexus Cloud Corp",
        year: "2025",
        category: "Web Application",
        description: "Enterprise multi-tenant dashboard with instantaneous real-time sync and 60fps charts.",
        tags: ["Next.js 15", "TypeScript", "Tailwind", "GSAP"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://nexus-cloud.example.com",
        metric: {
          value: "0.4s",
          label: "LCP Load Speed",
        },
      },
      {
        id: "WD-02",
        title: "Relax Studio Interactive",
        client: "Relax Creative Group",
        year: "2025",
        category: "Digital Experience",
        description: "Award-winning portfolio with interactive WebGL shaders and kinetic typography transitions.",
        tags: ["React", "Three.js", "GSAP ScrollTrigger", "Web Vitals"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://relax-studio.example.com",
        metric: {
          value: "+180%",
          label: "Average Session Duration",
        },
      },
      {
        id: "WD-03",
        title: "Horizon Enterprise Portal",
        client: "Horizon Systems",
        year: "2024",
        category: "Enterprise Platform",
        description: "Modern micro-frontend architecture powering 100k+ daily active business users.",
        tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://horizon-studio.example.com",
        metric: {
          value: "99.99%",
          label: "Uptime Reliability",
        },
      },
      {
        id: "WD-04",
        title: "Aura Audio Web Platform",
        client: "Aura Acoustics",
        year: "2024",
        category: "Interactive Audio Experience",
        description: "Audio-reactive web interface with smooth sound waveform rendering and seamless navigation.",
        tags: ["TypeScript", "Web Audio API", "Tailwind", "Framer"],
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://aura-acoustics.example.com",
        metric: {
          value: "99/100",
          label: "Performance Score",
        },
      },
    ],
  },
  {
    slug: "app-development",
    category: "app-development",
    categoryLabel: "Flagship Specialty",
    number: "02",
    title: "Mobile App Development",
    subtitle: "iOS, Android & Cross-Platform",
    headline: "Native performance, high-speed fluid mobile applications engineered for scale.",
    description:
      "We design and build bespoke iOS and Android applications from zero to App Store launch. Utilizing React Native, Flutter, and native Swift/Kotlin, we engineer high-performance mobile architectures with 120Hz smooth animations, offline-first sync, and rock-solid reliability.",
    capabilities: [
      "Cross-Platform iOS & Android Apps",
      "Native React Native & Flutter Architecture",
      "Offline-First & Real-time Cloud Sync",
      "Native Swift & Kotlin Integrations",
      "App Store & Google Play Launch Management",
      "Push Notifications & In-App Purchases",
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "Expo", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    isFlagship: true,
    aspectStyle: {
      width: "w-[330px] sm:w-[420px] md:w-[490px]",
      height: "h-[390px] sm:h-[450px] md:h-[490px]",
      offset: "-translate-y-3",
    },
    projects: [
      {
        id: "AD-01",
        title: "Zenith Crypto & Asset Wallet",
        client: "Zenith Financial Technologies",
        year: "2025",
        category: "Mobile FinTech Application",
        description: "Ultra-secure non-custodial crypto wallet and trading app with biometric authentication and 120Hz live price charts.",
        tags: ["React Native", "TypeScript", "Biometrics", "WebSockets"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://zenith-app.example.com",
        metric: {
          value: "4.9 ★",
          label: "App Store Rating",
        },
      },
      {
        id: "AD-02",
        title: "PulseFlow Health & Workout Companion",
        client: "PulseFlow Fitness Labs",
        year: "2025",
        category: "Health & Fitness App",
        description: "AI-guided personalized workout tracker with Apple HealthKit, Google Fit integration and real-time audio coaching.",
        tags: ["Flutter", "HealthKit", "Audio Engine", "Offline-First"],
        image: "https://images.unsplash.com/photo-1510519138197-06b8628cbf62?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://pulseflow.example.com",
        metric: {
          value: "500k+",
          label: "Active Downloads",
        },
      },
      {
        id: "AD-03",
        title: "Kova On-Demand Delivery Platform",
        client: "Kova Logistics Network",
        year: "2024",
        category: "Logistics & On-Demand App",
        description: "Real-time geolocation tracking driver and customer dual app with sub-second order dispatching and live route optimization.",
        tags: ["React Native", "Mapbox", "Firebase", "Push API"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://kova-delivery.example.com",
        metric: {
          value: "< 1.2s",
          label: "Dispatch Latency",
        },
      },
    ],
  },
  {
    slug: "ui-ux",
    category: "uiux",
    categoryLabel: "UI/UX",
    number: "03",
    title: "UI/UX Design",
    subtitle: "Product Design & Design Systems",
    headline: "Intuitive user journeys crafted with scientific empathy and aesthetic mastery.",
    description:
      "We design digital interfaces that reduce cognitive friction and convert visitors into loyal users. Our systematic design process marries user psychology with cutting-edge UI design systems.",
    capabilities: [
      "User Research & Journey Mapping",
      "Interactive High-Fidelity Prototypes",
      "Scalable Multi-Platform Design Systems",
      "SaaS & Web App Dashboard UX",
      "Conversion-Rate-Optimized (CRO) Flows",
      "Design-to-Code Tokens & Specs",
    ],
    techStack: ["Figma", "Design Tokens", "FigJam", "ProtoPie"],
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1200&auto=format&fit=crop",
    aspectStyle: {
      width: "w-[300px] sm:w-[380px] md:w-[440px]",
      height: "h-[360px] sm:h-[400px] md:h-[440px]",
      offset: "translate-y-4",
    },
    projects: [
      {
        id: "UX-01",
        title: "Vortex Intelligence UX",
        client: "Vortex Analytics",
        year: "2025",
        category: "Product & System Design",
        description: "High-density data visualization system redesigned for effortless user decision-making.",
        tags: ["Design System", "Figma", "Design Tokens", "ProtoPie"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://vortex-motion.example.com",
        metric: {
          value: "+45%",
          label: "Task Completion Speed",
        },
      },
      {
        id: "UX-02",
        title: "Lumina Mobile Banking",
        client: "Lumina Financial",
        year: "2025",
        category: "FinTech Mobile App",
        description: "Zero-friction onboarding and biometric financial transactions with dark & light mode systems.",
        tags: ["iOS & Android UI", "User Research", "Micro-Interactions"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://lumina-finance.example.com",
        metric: {
          value: "4.9 ★",
          label: "App Store Rating",
        },
      },
      {
        id: "UX-03",
        title: "Hyperion Design System v3",
        client: "Hyperion Ecosystem",
        year: "2024",
        category: "Design System",
        description: "Universal design tokens and 250+ accessible component primitives adopted by 40+ squads.",
        tags: ["Design Tokens", "Component Library", "WCAG AAA"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://hyperion-system.example.com",
        metric: {
          value: "60%",
          label: "Reduced Dev Time",
        },
      },
    ],
  },
  {
    slug: "motion-video",
    category: "motion",
    categoryLabel: "Motion & Video",
    number: "04",
    title: "Motion & Video",
    subtitle: "Creative Direction & 3D",
    headline: "Cinematic visuals and fluid motion graphics that bring brand stories to life.",
    description:
      "Engage your audience with high-impact video reels, dynamic kinetic typography, and 3D product visualizations designed to captivate across web hero sections, socials, and campaigns.",
    capabilities: [
      "High-End Hero Video Production",
      "Kinetic Typography & Logo Reveals",
      "3D Product Renders & Animations",
      "Social Ad Creatives & Reels",
      "Lottie & Web Micro-Interactions",
      "Color Grading & Post-Production",
    ],
    techStack: ["After Effects", "Premiere Pro", "Blender", "LottieFiles"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    aspectStyle: {
      width: "w-[290px] sm:w-[350px] md:w-[390px]",
      height: "h-[430px] sm:h-[480px] md:h-[520px]",
      offset: "-translate-y-3",
    },
    projects: [
      {
        id: "MV-01",
        title: "Vortex 3D Product Film",
        client: "Vortex Motion",
        year: "2025",
        category: "3D Motion & CGI",
        description: "Photorealistic 3D product reveal film with custom acoustic sound design and kinetic lighting.",
        tags: ["Blender 3D", "After Effects", "Sound Design", "4K Render"],
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://vortex-motion.example.com",
        metric: {
          value: "2.4M",
          label: "Campaign Video Views",
        },
      },
      {
        id: "MV-02",
        title: "Aura Soundscapes Visualizer",
        client: "Aura Acoustics",
        year: "2025",
        category: "Audio-Reactive CGI",
        description: "Fluid particulate visualizer syncing dynamically with acoustic frequencies.",
        tags: ["Cinema 4D", "Octane Render", "Post-Production"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://aura-soundscapes.example.com",
        metric: {
          value: "100k+",
          label: "Streams in 48 Hours",
        },
      },
      {
        id: "MV-03",
        title: "Cyberpunk Kinetic Launch Reel",
        client: "NeoTech World",
        year: "2024",
        category: "Kinetic Typography",
        description: "Fast-paced kinetic typography and futuristic visual effects for global tech keynote.",
        tags: ["After Effects", "Typography", "Keynote Reel"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://neotech-reel.example.com",
        metric: {
          value: "Featured",
          label: "Behance Motion Awards",
        },
      },
    ],
  },
  {
    slug: "branding",
    category: "branding",
    categoryLabel: "Branding",
    number: "05",
    title: "Branding & Identity",
    subtitle: "Brand Identity & Strategy",
    headline: "Distinctive brand identities that command attention and stand the test of time.",
    description:
      "We build cohesive visual languages that tell your story with conviction. From initial positioning to typography, color science, and comprehensive design systems, we craft brands that are instantly recognizable across every touchpoint.",
    capabilities: [
      "Brand Positioning & Core Strategy",
      "Logo Suite & Scalable Marks",
      "Comprehensive Brand Guidelines",
      "Typography & Color Hierarchy",
      "Packaging & Print Collateral",
      "Social & Digital Identity Kits",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Brand Books"],
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
    aspectStyle: {
      width: "w-[280px] sm:w-[340px] md:w-[390px]",
      height: "h-[420px] sm:h-[470px] md:h-[510px]",
      offset: "-translate-y-2",
    },
    projects: [
      {
        id: "BR-01",
        title: "Aura Acoustics Identity",
        client: "Aura Sound Labs",
        year: "2025",
        category: "Brand Identity & Packaging",
        description: "Minimalist Scandinavian aesthetic paired with tactile luxury packaging and sonic branding guidelines.",
        tags: ["Brand Book", "Logo Suite", "Packaging", "Art Direction"],
        image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://aura-acoustics.example.com",
        metric: {
          value: "Winner",
          label: "Red Dot Best Design",
        },
      },
      {
        id: "BR-02",
        title: "Monolith Architecture Studio",
        client: "Monolith Atelier",
        year: "2024",
        category: "Visual Identity System",
        description: "Monospaced bespoke typography and brutalist editorial layouts for an international architecture studio.",
        tags: ["Editorial Design", "Typography", "Signage", "Print"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://monolith-atelier.example.com",
        metric: {
          value: "+320%",
          label: "Brand Recall Rate",
        },
      },
      {
        id: "BR-03",
        title: "Krypton Web3 Brand Kit",
        client: "Krypton Protocol",
        year: "2024",
        category: "Digital Brand System",
        description: "Future-forward visual identity featuring dynamic holographic 3D emblems and dark mode guidelines.",
        tags: ["3D Branding", "Digital Identity", "Guidelines"],
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://krypton-protocol.example.com",
        metric: {
          value: "$14M",
          label: "Series A Raised",
        },
      },
    ],
  },
  {
    slug: "shopify-cms",
    category: "ecommerce",
    categoryLabel: "Shopify & CMS",
    number: "06",
    title: "Shopify & CMS",
    subtitle: "Commerce & Visual Platforms",
    headline: "High-converting online stores and visual CMS platforms tailored to your business.",
    description:
      "Whether you need an enterprise Shopify Plus storefront or a lightning-fast Webflow or Framer landing experience, we build easy-to-manage, customizable CMS websites that empower your team.",
    capabilities: [
      "Custom Shopify Theme & Liquid Code",
      "Shopify App & Checkout Customization",
      "Bespoke Webflow & Framer Development",
      "WordPress & Headless Architecture",
      "Payment Gateway & ERP Integrations",
      "Speed & Mobile Commerce Optimization",
    ],
    techStack: ["Shopify Plus", "Liquid", "Webflow", "Framer", "WordPress"],
    image:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1200&auto=format&fit=crop",
    aspectStyle: {
      width: "w-[340px] sm:w-[440px] md:w-[520px]",
      height: "h-[360px] sm:h-[410px] md:h-[450px]",
      offset: "translate-y-5",
    },
    projects: [
      {
        id: "SH-01",
        title: "Velvet Luxe Fashion Flagship",
        client: "Velvet Maison Paris",
        year: "2025",
        category: "Shopify Plus Flagship",
        description: "High-end bespoke Shopify Plus storefront featuring custom 1-click checkout and visual lookbooks.",
        tags: ["Shopify Plus", "Custom Liquid", "Tailwind", "Cart Drawer"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://velvet-luxe.example.com",
        metric: {
          value: "+210%",
          label: "Checkout Conversion",
        },
      },
      {
        id: "SH-02",
        title: "Nordic Living Framer CMS",
        client: "Nordic Interiors",
        year: "2025",
        category: "Framer CMS Store",
        description: "Editorial furniture collection site built with Framer CMS for effortless internal product updates.",
        tags: ["Framer", "CMS", "Micro-Interactions", "SEO"],
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://nordic-living.example.com",
        metric: {
          value: "0.3s",
          label: "Instant Page Transitions",
        },
      },
      {
        id: "SH-03",
        title: "Botanica Organics Storefront",
        client: "Botanica Skincare",
        year: "2024",
        category: "Headless E-Commerce",
        description: "Next.js storefront connected to Shopify API for lightning speeds and automated subscription funnels.",
        tags: ["Next.js", "Shopify Storefront API", "Recharge"],
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
        liveUrl: "https://botanica-organics.example.com",
        metric: {
          value: "$3.8M",
          label: "Annual Revenue Run Rate",
        },
      },
    ],
  },
];

export const CATEGORIES_LIST = [
  { id: "all", label: "All Services" },
  { id: "development", label: "Web Dev" },
  { id: "app-development", label: "App Dev" },
  { id: "uiux", label: "UI/UX" },
  { id: "motion", label: "Motion & Video" },
  { id: "branding", label: "Branding" },
  { id: "ecommerce", label: "Shopify & CMS" },
] as const;
