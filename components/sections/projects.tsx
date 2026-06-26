"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Tradefoox Mobile",
    subtitle: "Marketplace Mobile Application",
    description:
      "A feature-rich marketplace mobile application built with React Native. Enables users to buy and sell products with a seamless, native-feeling experience across iOS and Android.",
    gradient: "from-blue-600 to-cyan-500",
    icon: "🛒",
    featured: true,
    features: [
      "OAuth & JWT Authentication",
      "Shopping Cart & Checkout",
      "Push Notifications (FCM)",
      "Multi-language Localization",
      "Responsive & Accessible UI",
      "Real-time Updates",
    ],
    tech: ["React Native", "Redux Toolkit", "TypeScript", "RTK Query", "Expo"],
    github: "https://github.com/rakibmostofa",
    demo: "#",
    stats: { stars: 48, forks: 12 },
  },
  {
    title: "Marketplace Platform",
    subtitle: "Modern E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with advanced product management, real-time inventory, intelligent search with filters, and a streamlined checkout experience.",
    gradient: "from-violet-600 to-purple-500",
    icon: "🏪",
    featured: true,
    features: [
      "Product & Category Management",
      "Advanced Search & Filtering",
      "Secure Checkout Flow",
      "Order Tracking System",
      "Admin Dashboard",
      "Analytics Integration",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Redis"],
    github: "https://github.com/rakibmostofa",
    demo: "#",
    stats: { stars: 63, forks: 19 },
  },
  {
    title: "Social Network App",
    subtitle: "Cross-Platform Social Media",
    description:
      "A cross-platform social networking application with real-time messaging, video reels, user profiles, and rich media upload — built for millions of interactions.",
    gradient: "from-rose-500 to-pink-500",
    icon: "📱",
    featured: true,
    features: [
      "Activity Feed & Stories",
      "User Profiles & Follow",
      "Video Reels & Media",
      "Real-time Messaging",
      "Media Upload & Processing",
      "Multi-language Support",
    ],
    tech: ["React Native", "Expo", "RTK Query", "Node.js", "WebSockets"],
    github: "https://github.com/rakibmostofa",
    demo: "#",
    stats: { stars: 92, forks: 31 },
  },
  {
    title: "NX Monorepo Architecture",
    subtitle: "Shared Component Library",
    description:
      "A scalable monorepo architecture using NX workspace, featuring shared component libraries, design tokens, and automated pipelines for consistent cross-platform development.",
    gradient: "from-emerald-500 to-teal-500",
    icon: "🏗️",
    featured: false,
    features: [
      "Shared UI Component Library",
      "Design Token System",
      "Automated CI/CD Pipeline",
      "Type-safe API Layer",
      "Documentation Site",
      "Storybook Integration",
    ],
    tech: ["NX", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/rakibmostofa",
    demo: "#",
    stats: { stars: 35, forks: 8 },
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
            <Star className="w-3 h-3 fill-primary" />
            Featured
          </span>
        </div>
      )}

      {/* Project visual header */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-2xl rotate-12" />
          <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/30 rounded-xl -rotate-6" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Project icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-7xl"
        >
          {project.icon}
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-white/30 hover:bg-white/30 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-1">{project.title}</h3>
          <p className="text-sm text-primary font-medium">{project.subtitle}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Key Features
          </p>
          <div className="grid grid-cols-2 gap-1">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-1.5 text-xs text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5 flex-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded border border-primary/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5" />
              {project.stats.stars}
            </span>
            <span>·</span>
            <span>{project.stats.forks} forks</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-lg border border-white/10 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary hover:bg-primary/90 text-white rounded-lg transition-all shadow-glow"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Projects"
          title="Featured Work"
          subtitle="A collection of production applications and open-source projects that showcase my technical range and problem-solving approach."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/rakibmostofa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-muted-foreground hover:text-foreground hover:border-white/40 transition-all duration-300"
          >
            <GithubIcon className="w-5 h-5" />
            View all projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
