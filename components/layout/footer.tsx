"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/rakibroni", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/md-rakib-mostofa/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rakibronicse@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050816] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs text-primary">
              {"</>"}
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Rakib.dev</p>
              <p className="text-xs text-[#94A3B8]">Full Stack Developer</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.08, y: -2 }}
                className="w-9 h-9 rounded-full glass-premium flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Md Rakib Mostofa. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
