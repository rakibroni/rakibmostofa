"use client";

import { motion } from "framer-motion";
import { Braces, Database, GitBranch, Layers3, Plug, Server } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
  {
    title: "Frontend",
    icon: Braces,
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "State & Data",
    icon: Layers3,
    skills: ["Redux Toolkit", "RTK Query", "Context API", "REST APIs"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "NestJS", "Go / Gin", "PHP", "Laravel", "Symfony", "CodeIgniter"],
  },
  {
    title: "Databases & Search",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Elasticsearch"],
  },
  {
    title: "DevOps & Delivery",
    icon: GitBranch,
    skills: ["Docker", "GitHub Actions", "GitLab CI/CD", "Git"],
  },
  {
    title: "Integrations",
    icon: Plug,
    skills: ["Stripe Connect", "Firebase", "GA4", "Google Ads / AdMob", "Third-party REST APIs"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-premium opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Skills"
          title="Engineering Toolkit"
          subtitle="Technologies I use across product interfaces, APIs, data, integrations, and delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -3 }}
              className="glass-premium glow-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <group.icon className="w-5 h-5 text-primary" />
                </span>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-muted-foreground bg-muted/50 rounded-lg border border-border"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}
