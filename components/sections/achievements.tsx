"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years Coding",
    description: "Building production applications",
    icon: "⚡",
    gradient: "from-primary to-blue-400",
  },
  {
    value: 50,
    suffix: "+",
    label: "Projects Built",
    description: "From MVPs to enterprise apps",
    icon: "🚀",
    gradient: "from-accent to-cyan-400",
  },
  {
    value: 1000,
    suffix: "+",
    label: "GitHub Contributions",
    description: "Open source & private repos",
    icon: "📦",
    gradient: "from-purple-500 to-violet-400",
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies",
    description: "Across the full stack",
    icon: "🛠️",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    value: 10,
    suffix: "+",
    label: "Team Collaborations",
    description: "Cross-functional projects",
    icon: "🤝",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    value: 3,
    suffix: "",
    label: "Countries Worked",
    description: "Germany, Remote, Bangladesh",
    icon: "🌍",
    gradient: "from-rose-500 to-pink-400",
  },
];

function AnimatedCounter({
  value,
  suffix,
  gradient,
}: {
  value: number;
  suffix: string;
  gradient: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started && ref.current) {
      setStarted(true);
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.round(latest).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix, started]);

  return (
    <span
      ref={ref}
      className={`text-5xl lg:text-6xl font-bold bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}
    >
      0{suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Large bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20rem] font-black text-white/[0.02] select-none">
          STATS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Achievements"
          title="By The Numbers"
          subtitle="Milestones that define my journey as a software engineer — every number tells a story of growth and impact."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/20 text-center cursor-default overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
                className="text-4xl mb-4 inline-block"
              >
                {stat.icon}
              </motion.div>

              {/* Counter */}
              <div className="mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  gradient={stat.gradient}
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>

              {/* Bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
