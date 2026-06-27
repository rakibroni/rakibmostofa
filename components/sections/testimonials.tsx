"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Sarah Mueller",
    role: "CTO at Tradefoox GmbH",
    avatar: "SM",
    rating: 5,
    gradient: "from-primary to-accent",
    text: "Rakib is an exceptional engineer who consistently delivers high-quality code. His expertise in React Native and Next.js helped us scale our marketplace app to thousands of users. His attention to performance and clean architecture is outstanding.",
    company: "Tradefoox GmbH",
    location: "Chemnitz, Germany",
  },
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    avatar: "AJ",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
    text: "Working with Rakib has been a pleasure. He brings deep technical knowledge combined with excellent communication skills. His ability to architect complex features while keeping the codebase clean is impressive. A true full-stack professional.",
    company: "Tech Startup",
    location: "Remote",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager",
    avatar: "PS",
    rating: 5,
    gradient: "from-green-500 to-teal-500",
    text: "Rakib has an incredible ability to translate complex product requirements into elegant technical solutions. He proactively identifies potential issues and always delivers on time. His mobile app work on our social platform was exceptional.",
    company: "SocialApp Inc.",
    location: "Remote",
  },
  {
    name: "Thomas Weber",
    role: "Senior Engineer",
    avatar: "TW",
    rating: 5,
    gradient: "from-orange-500 to-amber-500",
    text: "Rakib's contributions to our NX monorepo architecture were game-changing. He established patterns and tooling that improved our entire team's productivity. His TypeScript expertise and commitment to code quality set a high standard.",
    company: "Enterprise Tech",
    location: "Germany",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-premium opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from colleagues, managers, and clients who have worked with me firsthand."
        />

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass-premium rounded-2xl p-8 border border-border relative glow-border"
              >
                {/* Quote icon */}
                <div
                  className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br ${testimonials[current].gradient} rounded-lg flex items-center justify-center shadow-glow`}
                >
                  <Quote className="w-4 h-4 text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 mt-2">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-lg text-foreground/90 leading-relaxed italic mb-8">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role} · {testimonials[current].company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      📍 {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-primary"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of all testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setCurrent(i)}
              className={`glass rounded-xl p-4 border text-left transition-all duration-300 ${
                i === current
                  ? "border-primary/40 shadow-glow"
                  : "border-border hover:border-border"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-xs`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-3">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
