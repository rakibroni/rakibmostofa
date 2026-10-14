"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Frontend / Full-Stack Developer",
    company: "SCC Group",
    location: "Chemnitz, Germany",
    period: "April 2024 – Present",
    current: true,
    responsibilities: [
      "Develop and maintain production web and mobile applications using React, Next.js, React Native, and TypeScript",
      "Contribute to marketplace and social-network functionality across the TRADEFOOX product",
      "Contribute to migrating React SPA functionality to the Next.js App Router, including server rendering, routing, SEO, and maintainability",
      "Develop and integrate authentication flows across web and mobile, including session management, token refresh, and authorization",
      "Integrate seller profiles, product and listing flows, search, and Stripe Connect functionality",
      "Work with REST APIs backed by Go/Gin and NestJS services, including PostgreSQL and Elasticsearch-backed functionality",
      "Integrate and troubleshoot GA4, Google Ads/AdMob, Firebase, and other third-party services",
      "Contribute to GitHub Actions, CI/CD workflows, and Docker-based deployments",
    ],
    tech: ["React", "Next.js", "React Native", "TypeScript", "Go / Gin", "NestJS", "PostgreSQL", "Elasticsearch", "Stripe Connect", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mailingwork GmbH",
    location: "Chemnitz, Germany",
    period: "02/2022 – 10/2023",
    current: false,
    responsibilities: [
      "Developed features and resolved defects for an email marketing platform",
      "Built and maintained microsites and landing pages for marketing campaigns",
      "Documented troubleshooting approaches and collaborated within an Agile team",
    ],
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Agile", "Email Marketing"],
  },
  {
    role: "Full-Stack Developer (Intern)",
    company: "Curawork GmbH",
    location: "Chemnitz, Germany",
    period: "09/2021 – 02/2022",
    current: false,
    responsibilities: [
      "Supported the development and optimization of a career platform",
      "Handled user data in GDPR-aware development workflows",
      "Contributed to implementation and planning with cross-functional team members",
    ],
    tech: ["React", "Node.js", "TypeScript", "GDPR", "PostgreSQL"],
  },
  {
    role: "Web Developer",
    company: "ATI Limited",
    location: "Dhaka, Bangladesh",
    period: "01/2015 – 03/2019",
    current: false,
    responsibilities: [
      "Developed backend services and REST APIs using PHP and Node.js",
      "Built ERP and enterprise application modules for admissions, courses, examinations, payments, inventory, HR, and library workflows",
      "Implemented role-based access control (RBAC) for secure administration",
      "Contributed to project coordination and technical documentation",
    ],
    tech: ["PHP", "Node.js", "MySQL", "ERP", "RBAC", "REST APIs"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-premium opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Production experience across frontend architecture, full-stack development, and product delivery."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
                  )}
                </div>

                <div className="glass-premium rounded-xl p-6 glow-border">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 rounded-full border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium text-muted-foreground bg-muted/50 rounded border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
