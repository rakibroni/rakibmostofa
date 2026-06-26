"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { TypeAnimation } from "react-type-animation";

const floatingTechs = [
  { name: "React", color: "#61DAFB", symbol: "⚛" },
  { name: "Next.js", color: "#ffffff", symbol: "▲" },
  { name: "Node.js", color: "#339933", symbol: "⬡" },
  { name: "TypeScript", color: "#3178C6", symbol: "TS" },
  { name: "React Native", color: "#61DAFB", symbol: "📱" },
  { name: "NestJS", color: "#E0234E", symbol: "🐈" },
  { name: "Docker", color: "#2496ED", symbol: "🐳" },
  { name: "PostgreSQL", color: "#336791", symbol: "🐘" },
];

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/rakibmostofa",
    label: "GitHub",
    color: "hover:text-white",
  },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/rakibmostofa",
    label: "LinkedIn",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Mail,
    href: "mailto:rakib.mostofa@example.com",
    label: "Email",
    color: "hover:text-accent",
  },
];

function FloatingTechIcon({
  tech,
  index,
}: {
  tech: (typeof floatingTechs)[0];
  index: number;
}) {
  const angle = (index / floatingTechs.length) * 2 * Math.PI;
  const radius = 280;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3 + index * 0.5,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl glass flex flex-col items-center justify-center gap-1 shadow-card-dark border border-white/10 hover:scale-110 transition-transform cursor-default"
        style={{ boxShadow: `0 0 20px ${tech.color}20` }}
      >
        <span className="text-xl leading-none">{tech.symbol}</span>
        <span className="text-[9px] font-medium text-muted-foreground hidden sm:block">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px]"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for new opportunities
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground font-medium mb-2"
            >
              Hi, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="gradient-text-hero">Md Rakib</span>
              <br />
              <span>Mostofa</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-3 h-8"
            >
              <TypeAnimation
                sequence={[
                  "Full-Stack Software Engineer",
                  2000,
                  "Web Application Developer",
                  2000,
                  "Mobile App Developer",
                  2000,
                  "React & Next.js Expert",
                  2000,
                  "Node.js & NestJS Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-2 text-muted-foreground mb-6"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Chemnitz, Germany</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              I build{" "}
              <span className="text-primary font-semibold">scalable</span> web
              and mobile applications with modern technologies, focusing on{" "}
              <span className="text-accent font-semibold">performance</span>,
              clean architecture, and exceptional user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-secondary/50 dark:bg-white/5 hover:bg-secondary/70 dark:hover:bg-white/10 text-foreground font-semibold rounded-xl border border-white/10 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-xl border border-accent/20 transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Find me on:</span>
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-muted-foreground ${color} transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Floating tech icons - visible on larger screens */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              {floatingTechs.slice(0, 6).map((tech, i) => {
                const angles = [0, 60, 120, 180, 240, 300];
                const angle = (angles[i] * Math.PI) / 180;
                const r = 220;
                const px = Math.cos(angle) * r;
                const py = Math.sin(angle) * r;
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${px}px - 28px)`,
                      top: `calc(50% + ${py}px - 28px)`,
                    }}
                    animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                    transition={{
                      duration: 3 + i * 0.7,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl glass flex flex-col items-center justify-center gap-0.5 border border-white/10"
                      style={{ boxShadow: `0 4px 20px ${tech.color}30` }}
                    >
                      <span className="text-xl leading-none">{tech.symbol}</span>
                      <span className="text-[8px] font-medium text-muted-foreground">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Profile image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              style={{ rotateX, rotateY }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl scale-110 animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 scale-105" />

              {/* Avatar container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-glow-lg">
                {/* Placeholder avatar with initials */}
                <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/90">
                      RM
                    </div>
                    <div className="text-white/60 text-sm mt-2">
                      Full-Stack Engineer
                    </div>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 -right-4 bg-background border border-primary/20 rounded-2xl px-4 py-2 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  <span className="text-sm font-medium">Open to Work</span>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute top-4 -left-4 bg-background border border-accent/20 rounded-2xl px-4 py-2 shadow-card"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
