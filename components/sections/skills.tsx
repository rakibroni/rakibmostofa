"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/5",
    skills: [
      { name: "React", icon: "⚛", level: 95, color: "#61DAFB" },
      { name: "Next.js", icon: "▲", level: 92, color: "#ffffff" },
      { name: "React Native", icon: "📱", level: 90, color: "#61DAFB" },
      { name: "TypeScript", icon: "TS", level: 90, color: "#3178C6" },
      { name: "JavaScript", icon: "JS", level: 95, color: "#F7DF1E" },
      { name: "Vue.js", icon: "🟢", level: 70, color: "#42B883" },
      { name: "Redux Toolkit", icon: "🔄", level: 88, color: "#764ABC" },
      { name: "RTK Query", icon: "⚡", level: 85, color: "#764ABC" },
      { name: "Tailwind CSS", icon: "🌊", level: 93, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/5",
    skills: [
      { name: "Node.js", icon: "⬡", level: 88, color: "#339933" },
      { name: "NestJS", icon: "🐈", level: 85, color: "#E0234E" },
      { name: "Go", icon: "🐹", level: 72, color: "#00ADD8" },
      { name: "PHP", icon: "🐘", level: 75, color: "#777BB4" },
      { name: "Laravel", icon: "🔴", level: 73, color: "#FF2D20" },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/20",
    bgColor: "bg-orange-500/5",
    skills: [
      { name: "PostgreSQL", icon: "🐘", level: 85, color: "#336791" },
      { name: "MySQL", icon: "🐬", level: 82, color: "#4479A1" },
      { name: "Redis", icon: "🔴", level: 78, color: "#DC382D" },
    ],
  },
  {
    category: "DevOps",
    icon: "🚀",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    skills: [
      { name: "Docker", icon: "🐳", level: 82, color: "#2496ED" },
      { name: "Git", icon: "🌿", level: 92, color: "#F05032" },
      { name: "GitHub", icon: "🐙", level: 92, color: "#ffffff" },
      { name: "GitLab", icon: "🦊", level: 85, color: "#FC6D26" },
      { name: "Nginx", icon: "🔧", level: 75, color: "#009639" },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  icon,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  icon: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </motion.div>
  );
}

function SkillCard({
  name,
  icon,
  color,
  delay,
}: {
  name: string;
  icon: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl glass border border-white/10 cursor-default group hover:border-white/20 transition-all duration-300"
      style={{
        boxShadow: `0 0 0 0 ${color}00`,
      }}
    >
      <span
        className="text-2xl group-hover:scale-110 transition-transform duration-300"
      >
        {icon}
      </span>
      <span className="text-xs font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Skills"
          title="Technical Expertise"
          subtitle="A comprehensive stack spanning frontend, backend, databases, and DevOps — built through years of real-world projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className={`rounded-2xl p-6 glass border ${cat.borderColor}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${cat.color} text-white text-lg shadow-lg`}
                >
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold">{cat.category}</h3>
              </div>

              {/* Skill bars for main categories */}
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={catIdx * 0.1 + i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All skills grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 glass rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-bold mb-6 text-center">All Technologies</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((skill, i) => (
                <SkillCard
                  key={`${cat.category}-${skill.name}`}
                  {...skill}
                  delay={i * 0.03}
                />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
