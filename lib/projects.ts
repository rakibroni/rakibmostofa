export const siteUrl = "https://rakibmostofa.dev";

export const externalLinks = {
  github: "https://github.com/rakibroni",
  linkedin: "https://www.linkedin.com/in/md-rakib-mostofa/",
  medium: "https://medium.com/@rakibmostofa",
  email: "mailto:rakibronicse@gmail.com",
  location: "https://maps.google.com/?q=Chemnitz,Germany",
  cvEnglish: "/Md_Rakib_Mostofa_CV.pdf",
  cvGerman: "/Md_Rakib_Mostofa_Lebenslauf.pdf",
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
  role: string[];
  keyContributions: string[];
};

export const projects: Project[] = [
  {
    slug: "tradefoox-marketplace",
    title: "TRADEFOOX Marketplace",
    subtitle: "Marketplace Web Application",
    description:
      "A production marketplace web application covering seller profiles, listings, search, authentication, Stripe Connect, and SEO-ready Next.js pages.",
    gradient: "from-violet-600/20 to-purple-600/10",
    accent: "#8B5CF6",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "RTK Query",
      "Go / Gin",
      "NestJS",
      "PostgreSQL",
      "Elasticsearch",
      "Stripe Connect",
    ],
    github: null,
    liveLinks: [{ label: "Live Site", href: externalLinks.tradefooxWeb }],
    featured: true,
    overview: [
      "TRADEFOOX Marketplace is the web commerce surface for seller profiles, product listings, search, and payment-related workflows within the broader TRADEFOOX product.",
      "The application is being moved from a React SPA toward Next.js App Router pages, with attention to server rendering, routing, SEO, and maintainability.",
    ],
    role: [
      "As part of the SCC Group team, I contribute to frontend architecture, feature development, API integration, authentication, payment integrations, and production delivery. I did not build the TRADEFOOX platform on my own.",
    ],
    keyContributions: [
      "Developed seller profile, product, listing, and search experiences in Next.js and TypeScript.",
      "Contributed to migrating React SPA functionality to the Next.js App Router, including server rendering, routing, and SEO readiness.",
      "Integrated authentication and authorization with REST APIs backed by Go/Gin and NestJS services.",
      "Worked with PostgreSQL and Elasticsearch-backed marketplace and search functionality.",
      "Integrated Stripe Connect onboarding and checkout-related marketplace workflows.",
    ],
  },
  {
    slug: "tradefoox-mobile",
    title: "TRADEFOOX Mobile",
    subtitle: "React Native Social & Marketplace App",
    description:
      "A production React Native application combining social and marketplace functionality with authentication, state management, and API integration.",
    gradient: "from-blue-600/20 to-indigo-600/10",
    accent: "#3B82F6",
    tech: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Firebase",
      "REST APIs",
    ],
    github: null,
    liveLinks: [
      { label: "Google Play", href: externalLinks.tradefooxAndroid },
      { label: "App Store", href: externalLinks.tradefooxIos },
    ],
    featured: true,
    overview: [
      "TRADEFOOX Mobile brings social networking and marketplace workflows into one cross-platform product for iOS and Android.",
      "The app covers user-facing flows such as authentication, profiles, listings, and API-backed product features rather than a standalone consumer clone.",
    ],
    role: [
      "I contribute to the mobile product using React Native and TypeScript, working across user-facing features, authentication, state management, API integration, and production delivery as part of the SCC Group team.",
    ],
    keyContributions: [
      "Developed social and marketplace functionality with reusable React Native components.",
      "Implemented authentication, session handling, token refresh, and authorization flows.",
      "Integrated REST APIs with Redux Toolkit and RTK Query for client state and caching.",
      "Worked with Firebase-backed push notifications and other third-party mobile services.",
    ],
  },
  {
    slug: "tradefoox-community",
    title: "TRADEFOOX Social Platform",
    subtitle: "Feeds, Profiles & Marketplace Integration",
    description:
      "Social networking functionality across web and mobile, including feeds, profiles, authentication, and marketplace integration.",
    gradient: "from-rose-600/20 to-pink-600/10",
    accent: "#EC4899",
    tech: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
    ],
    github: null,
    liveLinks: [
      { label: "Google Play", href: externalLinks.tradefooxAndroid },
      { label: "App Store", href: externalLinks.tradefooxIos },
    ],
    featured: true,
    overview: [
      "TRADEFOOX Social Platform connects feeds, profiles, and user interactions with marketplace discovery across web and mobile.",
      "The work sits inside the same production product as the marketplace and mobile apps, sharing authentication and API contracts.",
    ],
    role: [
      "I contribute to frontend and mobile features across React, Next.js, and React Native, including shared authentication, state management, and API integration.",
    ],
    keyContributions: [
      "Developed feed and profile interfaces across web and mobile.",
      "Integrated authentication and authorization flows shared across product surfaces.",
      "Used Redux Toolkit and RTK Query for state management and REST API access.",
      "Connected social interactions with marketplace journeys while keeping interfaces maintainable.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
