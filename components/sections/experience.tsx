"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Frontend Developer",
    company: "SCC Group",
    location: "Chemnitz, Germany",
    period: "04/2024 – Present",
    current: true,
    responsibilities: [
      "Developed and maintained React.js, React Native, and Next.js applications, enhancing UI/UX",
      "Integrated RESTful APIs using Golang (Gin framework), supporting 10,000+ concurrent users",
      "Optimized Redux Toolkit & RTK Query, reducing API latency by 30%",
      "Designed responsive UIs with Tailwind CSS & Bootstrap, improving usability by 25%",
      "Improved CI/CD pipeline configurations and contributed to Dockerized deployments",
    ],
    tech: ["React", "React Native", "Next.js", "Go", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Mailingwork GmbH",
    location: "Chemnitz, Germany",
    period: "02/2022 – 10/2023",
    current: false,
    responsibilities: [
      "Built new features & resolved bugs for an email marketing platform, improving functionality",
      "Developed and maintained dynamic microsite & landing pages, enhancing marketing campaigns",
      "Reduced support tickets by 15% by documenting troubleshooting techniques",
      "Collaborated in an Agile team of 8, ensuring timely project delivery",
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
      "Assisted in the development & optimization of a career platform, improving performance",
      "Ensured secure administration & processing of user data, following GDPR standards",
      "Contributed to project planning & implementation, collaborating with cross-functional teams",
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
      "Developed scalable backend services and APIs using PHP and Node.js",
      "Led and collaborated on projects, managing documentation and team coordination",
      "Designed and implemented custom ERP solutions for 10,000+ users",
      "Managed role-based access control (RBAC) for secure administration",
      "Designed modules for admission, courses, exams, payments, inventory, HR, and library",
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
