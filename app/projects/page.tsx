import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects, siteUrl } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Detailed full-stack, React Native, Next.js, and NX project case studies by Md Rakib Mostofa.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects | Md Rakib Mostofa",
    description:
      "Explore production web, mobile, marketplace, and monorepo architecture projects by Md Rakib Mostofa.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-32 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-4">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Production Work and Case Studies
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            A deeper look at full-stack web applications, React Native mobile
            products, marketplace experiences, and NX monorepo architecture I
            have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="glass-premium rounded-2xl overflow-hidden border border-border flex flex-col"
            >
              <div className={`relative h-44 bg-linear-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-grid-premium opacity-40" />
                {project.featured && (
                  <span className="absolute top-4 left-4 text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white border border-border">
                    Featured
                  </span>
                )}
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-sm text-foreground/60 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium text-muted-foreground bg-muted/50 rounded-md border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white btn-gradient rounded-lg"
                  >
                    Read Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  {project.liveLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground glass-premium rounded-lg hover:border-border transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
