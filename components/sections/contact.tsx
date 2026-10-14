"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { toast } from "sonner";
import { externalLinks } from "@/lib/projects";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rakibronicse@gmail.com",
    href: externalLinks.email,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/md-rakib-mostofa",
    href: externalLinks.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "/rakibroni",
    href: externalLinks.github,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chemnitz, Germany",
    href: externalLinks.location,
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Failed to send message");
      }

      setSubmitted(true);
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", website: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email me directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          subtitle="Interested in working together or discussing a software engineering opportunity? Feel free to get in touch."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -2 }}
                  className="glass-premium glow-border rounded-xl p-4 flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={externalLinks.email}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white btn-gradient rounded-xl"
            >
              Email Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="relative glass-premium rounded-2xl p-8 border border-border space-y-5">
              <h3 className="text-lg font-bold text-foreground mb-1">Send a Message</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Share a role, product challenge, or collaboration opportunity.
              </p>

              {/* Honeypot — hidden from users, catches bots */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 pointer-events-none h-0 w-0"
              />

              {(["name", "email", "subject"] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={`contact-${field}`}
                    className="block text-sm font-medium text-foreground mb-2 capitalize"
                  >
                    {field} <span className="text-red-400">*</span>
                  </label>
                  <input
                    id={`contact-${field}`}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    required
                    maxLength={field === "subject" ? 200 : 100}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "you@example.com" : field === "subject" ? "Software engineering opportunity" : "Your name"}
                    aria-invalid={Boolean(errors[field])}
                    aria-describedby={errors[field] ? `contact-${field}-error` : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-muted/40 border ${
                      errors[field] ? "border-red-500/50" : "border-border"
                    } text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm`}
                  />
                  {errors[field] && (
                    <p id={`contact-${field}-error`} className="mt-1 text-xs text-red-400">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`w-full px-4 py-3 rounded-xl bg-muted/40 border ${
                    errors.message ? "border-red-500/50" : "border-border"
                  } text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm resize-none`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={submitting || submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 flex items-center justify-center gap-2 btn-gradient text-white font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed text-sm"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
