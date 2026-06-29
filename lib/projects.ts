export const siteUrl = "https://rakibmostofa.dev";

export const externalLinks = {
  github: "https://github.com/rakibroni",
  linkedin: "https://www.linkedin.com/in/md-rakib-mostofa/",
  tradefooxAndroid:
    "https://play.google.com/store/apps/details?id=app.tradefoox.mobile&hl=en",
  tradefooxIos:
    "https://apps.apple.com/de/app/tradefoox-community-videos/id6477870055",
  tradefooxWeb: "https://tradefoox.com/app/offers",
} as const;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  accent: string;
  tech: string[];
  github: string | null;
  liveLinks: { label: string; href: string }[];
  featured: boolean;
  overview: string[];
  highlights: string[];
  architecture: string[];
  challenges: string[];
};

export const projects: Project[] = [
  {
    slug: "tradefoox-mobile",
    title: "TRADEFOOX Mobile",
    subtitle: "Community & Marketplace - 1M+ Downloads",
    description:
      "Production React Native app for Tradefoox GmbH with community feeds, short-form video, classifieds, messaging, push notifications, and multilingual support on iOS and Android.",
    gradient: "from-blue-600/20 to-indigo-600/10",
    accent: "#3B82F6",
    tech: ["React Native", "Redux Toolkit", "TypeScript", "RTK Query", "NX"],
    github: null,
    liveLinks: [
      { label: "Google Play", href: externalLinks.tradefooxAndroid },
      { label: "App Store", href: externalLinks.tradefooxIos },
    ],
    featured: true,
    overview: [
      "TRADEFOOX Mobile brings marketplace, social community, and video discovery workflows into a single cross-platform application.",
      "The app supports user profiles, offer browsing, media-rich feeds, messaging flows, push notifications, and multilingual product experiences for iOS and Android users.",
    ],
    highlights: [
      "Cross-platform mobile app shipped to Google Play and the App Store.",
      "Community, video, marketplace, and messaging features in one production product.",
      "Shared TypeScript patterns and API access through RTK Query.",
    ],
    architecture: [
      "React Native UI composed from reusable feature modules.",
      "Redux Toolkit and RTK Query for predictable client state and API caching.",
      "NX workspace foundations for sharing code between mobile and web surfaces.",
    ],
    challenges: [
      "Keeping marketplace and social experiences consistent across iOS and Android.",
      "Managing media-heavy screens while preserving responsive interactions.",
      "Coordinating app store delivery with a fast-moving product roadmap.",
    ],
  },
  {
    slug: "tradefoox-marketplace",
    title: "TRADEFOOX Marketplace",
    subtitle: "Web E-Commerce Platform",
    description:
      "Full-featured marketplace on tradefoox.com with product listings, advanced search, category browsing, and a seamless buy and sell experience integrated with the community platform.",
    gradient: "from-violet-600/20 to-purple-600/10",
    accent: "#8B5CF6",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
    github: null,
    liveLinks: [{ label: "Live Site", href: externalLinks.tradefooxWeb }],
    featured: true,
    overview: [
      "TRADEFOOX Marketplace is the web commerce surface for browsing offers, discovering categories, and connecting product listings to the broader community platform.",
      "The platform focuses on fast discovery, clear listing presentation, and reliable full-stack delivery for marketplace workflows.",
    ],
    highlights: [
      "Live marketplace experience for product discovery and category browsing.",
      "Full-stack implementation across frontend, backend, database, and deployment concerns.",
      "Integrated user journey between marketplace offers and community features.",
    ],
    architecture: [
      "Next.js and React frontend for performant web experiences.",
      "Node.js services backed by PostgreSQL data models.",
      "Docker-based development and deployment workflows.",
    ],
    challenges: [
      "Designing product discovery flows that stay usable as marketplace content grows.",
      "Balancing SEO-friendly pages with interactive marketplace behavior.",
      "Integrating commerce workflows with community-oriented product areas.",
    ],
  },
  {
    slug: "tradefoox-community",
    title: "TRADEFOOX Community",
    subtitle: "Social Network & Video Platform",
    description:
      "Cross-platform social experience with activity feeds, reels, user profiles, real-time interaction, and media uploads powering an active community across web and mobile.",
    gradient: "from-rose-600/20 to-pink-600/10",
    accent: "#EC4899",
    tech: ["React Native", "Next.js", "RTK Query", "WebSockets", "Expo"],
    github: null,
    liveLinks: [
      { label: "Google Play", href: externalLinks.tradefooxAndroid },
      { label: "App Store", href: externalLinks.tradefooxIos },
    ],
    featured: true,
    overview: [
      "TRADEFOOX Community connects users through feeds, short-form media, profiles, and real-time interactions across mobile and web experiences.",
      "The product combines social discovery with marketplace context, helping users move between content, people, and offers.",
    ],
    highlights: [
      "Activity feeds, reels, profiles, and media upload workflows.",
      "Shared web and mobile product thinking across Next.js and React Native.",
      "Real-time interaction patterns for a responsive community experience.",
    ],
    architecture: [
      "React Native and Next.js clients sharing product concepts and API contracts.",
      "RTK Query for normalized API consumption and cache management.",
      "WebSocket-enabled interaction patterns where real-time feedback matters.",
    ],
    challenges: [
      "Making media-heavy community screens feel responsive on different devices.",
      "Keeping social features aligned across web and mobile entry points.",
      "Connecting community activity to marketplace discovery without cluttering the UI.",
    ],
  },
  {
    slug: "nx-monorepo-architecture",
    title: "NX Monorepo Architecture",
    subtitle: "Shared Codebase - Web & Mobile",
    description:
      "Scalable NX workspace powering TRADEFOOX with shared UI libraries, design tokens, and CI/CD pipelines delivering consistent experiences across web marketplace and mobile apps.",
    gradient: "from-emerald-600/20 to-teal-600/10",
    accent: "#10B981",
    tech: ["NX", "React", "Next.js", "React Native", "TypeScript"],
    github: null,
    liveLinks: [{ label: "View Platform", href: externalLinks.tradefooxWeb }],
    featured: false,
    overview: [
      "The NX monorepo architecture supports multiple TRADEFOOX applications while keeping shared TypeScript code, product conventions, and delivery workflows organized.",
      "It creates a foundation for shipping web and mobile features with less duplication and more consistent behavior across product surfaces.",
    ],
    highlights: [
      "Shared codebase for web and mobile product development.",
      "Reusable libraries for UI, data access, and product conventions.",
      "Workspace structure designed for scalable team delivery.",
    ],
    architecture: [
      "NX workspace coordinating React, Next.js, and React Native packages.",
      "Shared TypeScript libraries for reusable product logic.",
      "CI/CD workflows structured around affected projects and repeatable builds.",
    ],
    challenges: [
      "Keeping shared abstractions useful without slowing product teams down.",
      "Maintaining clear ownership boundaries between app-specific and shared code.",
      "Supporting multiple deployment targets from one workspace.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
