"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const skills = [
  { name: "React", symbol: "⚛", color: "#61DAFB" },
  { name: "React Native", symbol: "📱", color: "#61DAFB" },
  { name: "Next.js", symbol: "▲", color: "#ffffff" },
  { name: "NestJS", symbol: "🐈", color: "#E0234E" },
  { name: "Node.js", symbol: "⬡", color: "#339933" },
  { name: "TypeScript", symbol: "TS", color: "#3178C6" },
  { name: "Redux", symbol: "◆", color: "#764ABC" },
  { name: "PostgreSQL", symbol: "🐘", color: "#336791" },
  { name: "Docker", symbol: "🐳", color: "#2496ED" },
  { name: "AWS", symbol: "☁", color: "#FF9900" },
  { name: "Tailwind CSS", symbol: "🌊", color: "#06B6D4" },
  { name: "GraphQL", symbol: "◈", color: "#E535AB" },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-premium opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Skills"
          title="Tech Stack"
          subtitle="Technologies I use to build production-grade applications — from mobile to cloud."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass-premium glow-border rounded-xl p-5 flex flex-col items-center gap-3 cursor-default group"
              style={{ boxShadow: `0 0 0 0 ${skill.color}00` }}
            >
              <span
                className="text-2xl group-hover:scale-110 transition-transform duration-300"
                style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
              >
                {skill.symbol}
              </span>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
