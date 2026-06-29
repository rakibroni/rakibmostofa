"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalLinks, projects, type Project } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group glass-premium rounded-2xl overflow-hidden border border-border hover:border-border transition-all duration-400 flex flex-col"
    >
      <div className={`relative h-44 bg-linear-to-br ${project.gradient} overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-premium opacity-40" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accent}15, transparent 70%)`,
          }}
        />
        {project.featured && (
          <span className="absolute top-4 left-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-border">
            Featured
          </span>
        )}
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-foreground/60 mt-0.5">{project.subtitle}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground bg-muted/50 rounded-md border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground glass-premium rounded-lg hover:border-border transition-all"
          >
            Case Study
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground glass-premium rounded-lg hover:border-border transition-all"
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
    <section id="projects" className="py-28 relative overflow-hidden bg-background">
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
            href={externalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground border border-border hover:border-border rounded-xl transition-all"
          >
            View open source on GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
