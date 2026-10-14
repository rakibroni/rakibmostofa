"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Certifications"
          title="Professional Credentials"
          subtitle="Meta-backed certificates on Coursera, aligned with React and React Native work in production."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-6 border border-border relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-2xl" />

              <div className="flex items-start gap-4 mb-4">
                <span className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-primary" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer} · {cert.platform}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Issued {cert.issuedShort}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5">
                {cert.displaySkills.join(" · ")}
              </p>

              <motion.a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View credential for ${cert.title} (opens in new tab)`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md w-fit"
              >
                View Credential
                <ExternalLink className="w-3.5 h-3.5" aria-hidden />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
