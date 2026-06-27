"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const GITHUB_USERNAME = "rakibroni";

const stats = [
  {
    title: "GitHub Stats",
    src: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=2563eb&icon_color=06b6d4&text_color=c9d1d9&count_private=true`,
    alt: "GitHub Stats",
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Top Languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=2563eb&text_color=c9d1d9`,
    alt: "Top Languages",
    span: "col-span-1 lg:col-span-1",
  },
  {
    title: "Contribution Streak",
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=tokyonight&hide_border=true&background=0d1117&stroke=2563eb&ring=06b6d4&fire=06b6d4&currStreakNum=ffffff&sideNums=c9d1d9&currStreakLabel=2563eb&sideLabels=8b949e&dates=8b949e`,
    alt: "GitHub Streak",
    span: "col-span-1 lg:col-span-2",
  },
];

export function GithubStats() {
  return (
    <section id="github" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-premium opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="GitHub"
          title="Open Source Contributions"
          subtitle="Contributions to open source and personal projects — where passion meets code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {stats.slice(0, 2).map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-premium rounded-2xl p-4 border border-border overflow-hidden glow-border"
            >
              <img
                src={stat.src}
                alt={stat.alt}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Streak - full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01, y: -4 }}
          className="glass-premium rounded-2xl p-4 border border-border overflow-hidden glow-border"
        >
          <img
            src={stats[2].src}
            alt={stats[2].alt}
            className="w-full h-auto rounded-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 glass-premium rounded-2xl p-6 border border-border"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Contribution Graph</h3>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
          <img
            src={`https://ghchart.rshah.org/2563eb/${GITHUB_USERNAME}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded-lg opacity-80"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
