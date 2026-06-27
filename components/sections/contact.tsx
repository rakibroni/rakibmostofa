"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rakibronicse@gmail.com",
    href: "mailto:rakibronicse@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/in/md-rakib-mostofa",
    href: "https://www.linkedin.com/in/md-rakib-mostofa/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "/rakibroni",
    href: "https://github.com/rakibroni",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chemnitz, Germany",
    href: "https://maps.google.com/?q=Chemnitz,Germany",
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
    <section id="contact" className="py-28 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Amazing Together"
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
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
                    <p className="text-[10px] uppercase tracking-wider text-[#94A3B8] mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium text-white truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:rakibronicse@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white btn-gradient rounded-xl"
            >
              Let&apos;s Build Something Amazing Together
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-premium rounded-2xl p-8 border border-white/[0.08] space-y-5">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-sm text-[#94A3B8] mb-4">I typically respond within 24 hours.</p>

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
                  <label className="block text-sm font-medium text-white mb-2 capitalize">
                    {field} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={field === "email" ? "you@example.com" : field === "subject" ? "Project inquiry" : "Your name"}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      errors[field] ? "border-red-500/50" : "border-white/[0.08]"
                    } text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm`}
                  />
                  {errors[field] && <p className="mt-1 text-xs text-red-400">{errors[field]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                    errors.message ? "border-red-500/50" : "border-white/[0.08]"
                  } text-white placeholder:text-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
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
