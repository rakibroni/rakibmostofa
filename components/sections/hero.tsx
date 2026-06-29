"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Briefcase,
  Layers,
  Cpu,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, MediumIcon } from "@/components/ui/icons";

const techBadges = [
  { name: "React", symbol: "⚛", color: "#61DAFB", px: 0, py: -168 },
  { name: "React Native", symbol: "📱", color: "#61DAFB", px: -118, py: -118 },
  { name: "Next.js", symbol: "▲", color: "#ffffff", px: 118, py: -118 },
  { name: "NestJS", symbol: "🐈", color: "#E0234E", px: -168, py: 0 },
  { name: "Node.js", symbol: "⬡", color: "#339933", px: 168, py: 0 },
  { name: "TypeScript", symbol: "TS", color: "#3178C6", px: -118, py: 118 },
  { name: "Redux", symbol: "◆", color: "#764ABC", px: 118, py: 118 },
  { name: "PostgreSQL", symbol: "🐘", color: "#336791", px: 0, py: 168 },
  { name: "Docker", symbol: "🐳", color: "#2496ED", px: -80, py: -40 },
  { name: "AWS", symbol: "☁", color: "#FF9900", px: 80, py: -40 },
] as const;

const stats = [
  { value: "5+", label: "Years Experience", icon: Briefcase },
  { value: "40+", label: "Projects", icon: Layers },
  { value: "20+", label: "Technologies", icon: Cpu },
  { value: "Open", label: "For Work", icon: Sparkles },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/rakibroni", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/md-rakib-mostofa/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rakibronicse@gmail.com", label: "Email" },
  { icon: MediumIcon, href: "https://medium.com/@rakibmostofa", label: "Medium" },
];

const fadeUp = {
  initial: { y: 20 },
  animate: { y: 0 },
};

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-x-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-premium" />
        <div className="absolute inset-0 bg-noise opacity-60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(99,102,241,0.08)_0%,transparent_70%)]" />
        {/* Subtle particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -12, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Left column — first on mobile so CTAs stay above the fold */}
          <div className="order-1">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-premium border border-border mb-6 sm:mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-muted-foreground">
                Available for Full-time & Freelance
              </span>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-muted-foreground text-lg mb-2"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold tracking-tight leading-[1.08] mb-4"
            >
              <span className="text-foreground">Md </span>
              <span className="gradient-text-hero">Rakib</span>
              <br />
              <span className="text-foreground">Mostofa</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl sm:text-2xl font-semibold text-foreground mb-3"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-[15px] text-muted-foreground font-medium mb-6 leading-relaxed"
            >
              React Native • React • Next.js • Node.js • NestJS • TypeScript
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-muted-foreground leading-relaxed mb-6 max-w-lg"
            >
              I build scalable web and mobile applications with clean architecture,
              exceptional user experiences, and high-performance solutions.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-10"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Germany
              </span>
              <span className="text-muted-foreground/40">|</span>
              <span>Available Worldwide</span>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 sm:mb-10"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="glass-premium glow-border rounded-xl p-4 cursor-default"
                >
                  <stat.icon className="w-4 h-4 text-primary mb-2 opacity-80" />
                  <div className="text-xl font-bold text-foreground leading-none">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8 sm:mb-10"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white btn-gradient rounded-xl"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download
                className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground rounded-xl border border-border hover:border-primary/40 hover:bg-muted/50 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-foreground glass-premium rounded-xl hover:border-border transition-all"
              >
                Let&apos;s Talk
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass-premium flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 glow-border transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right column — profile */}
          <div className="order-2 relative flex flex-col items-center justify-center mx-auto w-full min-h-[240px] sm:min-h-[320px] lg:min-h-[480px] lg:min-w-[480px]">
            {/* Radial glow behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.2)_0%,rgba(139,92,246,0.12)_40%,transparent_70%)] blur-2xl" />
            </div>

            {/* Floating tech badges — desktop */}
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
              {techBadges.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="absolute pointer-events-auto"
                  style={{
                    left: `calc(50% + ${tech.px}px - 28px)`,
                    top: `calc(50% + ${tech.py}px - 28px)`,
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.08, y: -4 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl glass-premium flex flex-col items-center justify-center gap-0.5 glow-border cursor-default"
                    style={{ boxShadow: `0 4px 20px ${tech.color}20` }}
                  >
                    <span className="text-base leading-none">{tech.symbol}</span>
                    <span className="text-[7px] font-medium text-muted-foreground text-center leading-tight px-1">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile photo */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ rotateX, rotateY }}
              className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 lg:w-64 lg:h-64"
            >
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 blur-xl scale-110" />
              <div className="absolute inset-[6%] rounded-full overflow-hidden border-2 border-border shadow-[0_0_60px_rgba(59,130,246,0.2)]">
                <Image
                  src="/profile.jpg"
                  alt="Md Rakib Mostofa - Full Stack Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 256px"
                  className="object-cover object-[center_12%]"
                />
              </div>
            </motion.div>

            <div className="relative z-10 mt-6 grid grid-cols-3 gap-2 w-full max-w-sm mx-auto lg:hidden">
              {techBadges.slice(0, 6).map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-lg glass-premium glow-border px-2 py-2.5 flex flex-col items-center justify-center gap-1"
                  style={{ boxShadow: `0 4px 16px ${tech.color}18` }}
                >
                  <span className="text-sm leading-none">{tech.symbol}</span>
                  <span className="text-[9px] font-medium text-muted-foreground text-center leading-tight">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-foreground/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
