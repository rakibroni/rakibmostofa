"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Heart, Globe, Code2, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Master's Degree",
    description: "Automotive Software Engineering in Germany — combining software excellence with cutting-edge automotive tech.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    description: "Computer Science & Engineering — solid foundation in algorithms, data structures, and software design.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    description: "5+ years building React, React Native, Next.js, and Node.js applications for production-scale products.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Globe,
    title: "Global Projects",
    description: "Experience working on marketplace and social networking applications used by thousands of users.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "Advocate for clean code, SOLID principles, and scalable architecture patterns that stand the test of time.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Heart,
    title: "UI/UX Passion",
    description: "Deep love for creating pixel-perfect, accessible, and delightful user interfaces and experiences.",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const techStack = [
  "React", "Next.js", "React Native", "TypeScript", "Node.js", "NestJS", "Go", "PostgreSQL", "Docker",
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Crafting Digital Experiences"
          subtitle="A passionate Full-Stack Engineer with a Master's in Automotive Software Engineering, building scalable applications that make a difference."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m <span className="text-foreground font-semibold">Md Rakib Mostofa</span>, a Full-Stack Software Engineer based in{" "}
                <span className="text-primary font-semibold">Chemnitz, Germany</span>. Currently pursuing my Master&apos;s in Automotive Software Engineering while delivering production-grade software.
              </p>
              <p>
                My journey spans 5+ years of building everything from complex{" "}
                <span className="text-primary font-medium">marketplace platforms</span> to{" "}
                <span className="text-accent font-medium">cross-platform mobile apps</span>. I thrive at the intersection of elegant UI and robust backend architecture.
              </p>
              <p>
                I have a strong passion for <span className="text-foreground font-medium">clean architecture</span>, performance optimization, and creating applications that scale. From React hooks to NestJS microservices, I&apos;m always pushing the boundaries of what&apos;s possible.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, or tinkering with automotive software systems — merging my two great passions.
              </p>
            </div>

            {/* Quick tech tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-3 py-1 text-sm font-mono font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Experience", icon: "⚡" },
                { value: "50+", label: "Projects Completed", icon: "🚀" },
                { value: "1K+", label: "GitHub Contributions", icon: "📦" },
                { value: "20+", label: "Technologies", icon: "🛠️" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass rounded-2xl p-6 text-center border border-white/10 cursor-default"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass rounded-2xl p-6 border ${item.border} cursor-default group`}
            >
              <div
                className={`w-12 h-12 ${item.bg} ${item.border} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
