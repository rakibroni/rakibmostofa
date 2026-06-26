"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const TRADEFOOX_ANDROID =
  "https://play.google.com/store/apps/details?id=app.tradefoox.mobile&hl=en";
const TRADEFOOX_IOS =
  "https://apps.apple.com/de/app/tradefoox-community-videos/id6477870055";
const TRADEFOOX_WEB = "https://tradefoox.com/app/offers";

const projects = [
  {
    title: "TRADEFOOX Mobile",
    subtitle: "Community & Marketplace · 1M+ Downloads",
    description:
      "Production React Native app for Tradefoox GmbH — community feeds, short-form video, classifieds, messaging, push notifications, and multilingual support on iOS & Android.",
    gradient: "from-blue-600/20 to-indigo-600/10",
    accent: "#3B82F6",
    tech: ["React Native", "Redux Toolkit", "TypeScript", "RTK Query", "NX"],
    github: null,
    liveLinks: [
      { label: "Google Play", href: TRADEFOOX_ANDROID },
      { label: "App Store", href: TRADEFOOX_IOS },
    ],
    featured: true,
  },
  {
    title: "TRADEFOOX Marketplace",
    subtitle: "Web E-Commerce Platform",
    description:
      "Full-featured marketplace on tradefoox.com — product listings, advanced search, category browsing, and a seamless buy & sell experience integrated with the community platform.",
    gradient: "from-violet-600/20 to-purple-600/10",
    accent: "#8B5CF6",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
    github: null,
    liveLinks: [{ label: "Live Site", href: TRADEFOOX_WEB }],
    featured: true,
  },
  {
    title: "TRADEFOOX Community",
    subtitle: "Social Network & Video Platform",
    description:
      "Cross-platform social experience — activity feeds, reels, user profiles, real-time interaction, and media uploads powering an active community across web and mobile.",
    gradient: "from-rose-600/20 to-pink-600/10",
    accent: "#EC4899",
    tech: ["React Native", "Next.js", "RTK Query", "WebSockets", "Expo"],
    github: null,
    liveLinks: [
      { label: "Google Play", href: TRADEFOOX_ANDROID },
      { label: "App Store", href: TRADEFOOX_IOS },
    ],
    featured: true,
  },
  {
    title: "NX Monorepo Architecture",
    subtitle: "Shared Codebase · Web & Mobile",
    description:
      "Scalable NX workspace powering TRADEFOOX — shared UI libraries, design tokens, and CI/CD pipelines delivering consistent experiences across web marketplace and mobile apps.",
    gradient: "from-emerald-600/20 to-teal-600/10",
    accent: "#10B981",
    tech: ["NX", "React", "Next.js", "React Native", "TypeScript"],
    github: null,
    liveLinks: [{ label: "View Platform", href: TRADEFOOX_WEB }],
    featured: false,
  },
];

type Project = (typeof projects)[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass-premium rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/15 transition-all duration-400 flex flex-col"
    >
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-premium opacity-40" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accent}15, transparent 70%)`,
          }}
        />
        {project.featured && (
          <span className="absolute top-4 left-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-white/10">
            Featured
          </span>
        )}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-white/60 mt-0.5">{project.subtitle}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium text-[#94A3B8] bg-white/[0.04] rounded-md border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white glass-premium rounded-lg hover:border-white/20 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              GitHub
            </motion.a>
          )}
          {project.liveLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white btn-gradient rounded-lg"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Projects"
          title="Featured Work"
          subtitle="Production applications built at Tradefoox GmbH — live on Google Play, App Store, and the web."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/rakibroni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#94A3B8] hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
          >
            View open source on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
