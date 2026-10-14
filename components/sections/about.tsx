"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "M.Sc. Automotive Software Engineering",
    description: "Completed at Technische Universität Chemnitz.",
  },
  {
    icon: Globe,
    title: "Production Product Experience",
    description: "Marketplace, social networking, enterprise, and cross-platform mobile applications.",
  },
  {
    icon: Code2,
    title: "Frontend to Delivery",
    description: "Architecture, APIs, authentication, payments, performance, and production delivery.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="About"
          title="Product Engineering, Frontend First"
          subtitle="Building reliable web and mobile products across the frontend, backend, and delivery lifecycle."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-base"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Md Rakib Mostofa</span>, a
              Frontend-Focused Full-Stack / Product Engineer based in{" "}
              <span className="text-primary font-medium">Chemnitz, Germany</span>.
            </p>
            <p>
              I specialize in building scalable web and mobile applications using
              React, Next.js, React Native, TypeScript and Node.js. My professional
              experience spans marketplace platforms, social networking applications,
              enterprise software and cross-platform mobile development.
            </p>
            <p>
              At SCC Group, I work on the TRADEFOOX platform, contributing to its
              marketplace, social networking features and mobile applications. My
              responsibilities include frontend architecture, API integration,
              authentication and authorization, payment integrations, performance
              optimization and production delivery.
            </p>
            <p>
              I have hands-on experience with NestJS, Go, PostgreSQL, Elasticsearch,
              Stripe Connect, Docker and CI/CD pipelines.
            </p>
            <p>
              I hold a Master of Science in Automotive Software Engineering from
              Technische Universität Chemnitz.
            </p>
            <p>
              I&apos;m interested in technically challenging product engineering roles
              where I can contribute to reliable, scalable software while continuing
              to grow as an engineer.
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
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
