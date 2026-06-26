"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tradefoox GmbH",
    location: "Chemnitz, Germany",
    period: "2022 – Present",
    type: "Full-time",
    current: true,
    color: "from-primary to-accent",
    icon: "🏢",
    responsibilities: [
      "Developed and maintained React Native marketplace mobile application used by thousands of active users",
      "Implemented complex features including authentication flows, shopping cart, checkout, and push notifications",
      "Architected NX monorepo with shared component library across web and mobile platforms",
      "Integrated multiple third-party APIs including payment gateways and localization services",
      "Optimized application performance, reducing load times by 40% through code splitting and lazy loading",
      "Collaborated with cross-functional teams in agile sprints using Git workflow and code reviews",
      "Led technical discussions and mentored junior developers on best practices",
    ],
    tech: ["React Native", "Next.js", "TypeScript", "Redux Toolkit", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Tech Startup",
    location: "Remote",
    period: "2020 – 2022",
    type: "Full-time",
    current: false,
    color: "from-purple-500 to-pink-500",
    icon: "💻",
    responsibilities: [
      "Built responsive web applications using React and Next.js with TypeScript",
      "Developed reusable component libraries following atomic design principles",
      "Implemented state management solutions with Redux Toolkit and RTK Query",
      "Collaborated with UI/UX designers to translate Figma designs into pixel-perfect code",
      "Integrated RESTful APIs and GraphQL endpoints with proper error handling",
      "Wrote unit and integration tests using Jest and React Testing Library",
    ],
    tech: ["React", "Next.js", "TypeScript", "Redux", "GraphQL", "Tailwind CSS"],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Agency",
    location: "Bangladesh",
    period: "2019 – 2020",
    type: "Full-time",
    current: false,
    color: "from-green-500 to-teal-500",
    icon: "🌱",
    responsibilities: [
      "Built and maintained PHP/Laravel web applications for various clients",
      "Created responsive layouts using HTML, CSS, and vanilla JavaScript",
      "Integrated MySQL databases with Eloquent ORM",
      "Developed RESTful APIs consumed by frontend applications",
      "Participated in code reviews and learned modern development practices",
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML/CSS"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Experience"
          title="Professional Journey"
          subtitle="A timeline of my professional growth — from junior developer to full-stack engineer building products at scale."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 hidden sm:block">
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                    className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} shadow-glow z-10 relative`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-primary/50" />
                    )}
                  </motion.div>
                </div>

                {/* Spacer for desktop alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="w-full md:w-1/2 sm:pl-16 md:pl-0">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{exp.icon}</span>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className={`font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-5">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + i * 0.05 }}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
