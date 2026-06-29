import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { getProjectBySlug, projects, siteUrl } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const url = `${siteUrl}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    keywords: [
      project.title,
      "Md Rakib Mostofa",
      "Full Stack Developer",
      ...project.tech,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} | Md Rakib Mostofa`,
      description: project.description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Md Rakib Mostofa`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    url: projectUrl,
    author: {
      "@type": "Person",
      name: "Md Rakib Mostofa",
      url: siteUrl,
    },
    keywords: project.tech.join(", "),
    sameAs: project.liveLinks.map((link) => link.href),
  };

  return (
    <>
      <JsonLd data={projectSchema} />
      <article className="relative min-h-screen overflow-hidden bg-background pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_58%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <header className="glass-premium rounded-3xl overflow-hidden border border-border mb-10">
            <div className={`relative min-h-72 bg-linear-to-br ${project.gradient}`}>
              <div className="absolute inset-0 bg-grid-premium opacity-40" />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.accent}22, transparent 70%)`,
                }}
              />
              <div className="relative z-10 p-8 md:p-12 flex min-h-72 flex-col justify-end">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70 mb-4">
                  Case Study
                </p>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  {project.title}
                </h1>
                <p className="mt-4 text-lg text-white/70 max-w-3xl">
                  {project.subtitle}
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="space-y-8">
              <ProjectSection title="Overview" items={project.overview} />
              <ProjectSection title="Technical Highlights" items={project.highlights} />
              <ProjectSection title="Architecture" items={project.architecture} />
              <ProjectSection title="Challenges" items={project.challenges} />
            </div>

            <aside className="glass-premium rounded-2xl border border-border p-6 lg:sticky lg:top-24">
              <h2 className="text-sm font-semibold text-foreground mb-4">
                Technologies
              </h2>
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

              <div className="space-y-2">
                {project.liveLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-white btn-gradient rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

function ProjectSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="glass-premium rounded-2xl border border-border p-6 md:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground mb-5">
        {title}
      </h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
