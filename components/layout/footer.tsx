"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { externalLinks } from "@/lib/projects";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: externalLinks.github, label: "GitHub" },
  { icon: LinkedinIcon, href: externalLinks.linkedin, label: "LinkedIn" },
  { icon: Mail, href: externalLinks.email, label: "Email" },
];

export function Footer() {
  const pathname = usePathname();
  const getHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border flex items-center justify-center font-mono text-xs text-primary">
              {"</>"}
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Rakib.dev</p>
              <p className="text-xs text-muted-foreground">
                Frontend-Focused Full-Stack / Product Engineer
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
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
                className="w-9 h-9 rounded-full glass-premium flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Md Rakib Mostofa. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
