"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Master's in Automotive Software Engineering",
    description: "Technische Universität Chemnitz, Germany — merging software excellence with automotive innovation.",
  },
  {
    icon: Globe,
    title: "Global Product Experience",
    description: "Marketplace and social networking applications used by thousands of users worldwide.",
  },
  {
    icon: Code2,
    title: "Clean Architecture Advocate",
    description: "SOLID principles, scalable patterns, and performance-first development across the full stack.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="About"
          title="Building Products That Matter"
          subtitle="Full-stack engineer with 5+ years of experience shipping scalable web and mobile applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[#94A3B8] leading-relaxed text-base"
          >
            <p>
              I&apos;m <span className="text-white font-semibold">Md Rakib Mostofa</span>, a Full Stack
              Developer based in <span className="text-primary font-medium">Chemnitz, Germany</span>.
              I specialize in React, React Native, Next.js, and Node.js — building products that scale.
            </p>
            <p>
              My work spans marketplace platforms, cross-platform mobile apps, and enterprise web
              applications. I care deeply about clean architecture, performance, and pixel-perfect UI.
            </p>
            <p>
              Currently pursuing my Master&apos;s in Automotive Software Engineering while delivering
              production-grade software for clients and companies worldwide.
            </p>
          </motion.div>

          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="glass-premium glow-border rounded-xl p-5 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
