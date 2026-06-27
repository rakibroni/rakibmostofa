"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tradefoox GmbH",
    location: "Chemnitz, Germany",
    period: "2022 – Present",
    current: true,
    responsibilities: [
      "Developed React Native marketplace app used by thousands of active users",
      "Architected NX monorepo with shared component library across web and mobile",
      "Optimized performance, reducing load times by 40% through code splitting",
      "Led technical discussions and mentored junior developers",
    ],
    tech: ["React Native", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    location: "Remote",
    period: "2020 – 2022",
    current: false,
    responsibilities: [
      "Built responsive web applications using React and Next.js with TypeScript",
      "Developed reusable component libraries following atomic design principles",
      "Integrated RESTful APIs and GraphQL endpoints with proper error handling",
    ],
    tech: ["React", "Next.js", "TypeScript", "Redux", "GraphQL", "Tailwind CSS"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    location: "Bangladesh",
    period: "2019 – 2020",
    current: false,
    responsibilities: [
      "Built and maintained PHP/Laravel web applications for various clients",
      "Developed RESTful APIs consumed by frontend applications",
      "Participated in code reviews and learned modern development practices",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
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
          subtitle="A timeline of growth — from junior developer to full-stack engineer building products at scale."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent" />

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
                          <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-emerald-500/15 text-emerald-400 rounded-full border border-emerald-500/20">
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
