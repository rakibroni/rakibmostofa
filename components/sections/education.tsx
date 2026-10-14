"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Languages } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const education = [
  {
    degree: "Master of Science",
    field: "Automotive Software Engineering",
    institution: "Technische Universität Chemnitz",
    location: "Chemnitz, Germany",
    period: "2019 – 2024",
    status: "Completed",
    description:
      "Master's degree focused on the intersection of software engineering and automotive systems.",
    gradient: "from-primary to-accent",
    icon: "🎓",
    color: "text-primary",
    borderColor: "border-primary/20",
    badgeBg: "bg-primary/10",
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science / Informatics and Technology",
    institution: "University of Information Technology and Sciences",
    location: "Dhaka, Bangladesh",
    period: "2010 – 2014",
    status: "Completed",
    description:
      "Bachelor's degree providing a foundation in computer science, software engineering, and information technology.",
    gradient: "from-purple-500 to-pink-500",
    icon: "📚",
    color: "text-purple-500",
    borderColor: "border-purple-500/20",
    badgeBg: "bg-purple-500/10",
  },
];

const languages = [
  { language: "Bengali", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "German", level: "B2" },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Education"
          title="Education & Languages"
          subtitle="Academic foundation and language skills relevant to international product teams in Germany."
        />

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree + edu.field}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`glass rounded-2xl p-8 border ${edu.borderColor} cursor-default relative overflow-hidden`}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.gradient} rounded-t-2xl`}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${edu.badgeBg} border ${edu.borderColor} flex items-center justify-center text-3xl`}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className={`w-4 h-4 ${edu.color}`} />
                      <span
                        className={`text-sm font-semibold ${edu.color}`}
                      >
                        {edu.degree}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      {edu.field}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Institution info */}
              <div className="space-y-2 mb-5">
                <p className="font-semibold text-foreground">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {edu.status}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {edu.description}
              </p>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Languages className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold">Languages</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {languages.map((item, i) => (
              <motion.div
                key={item.language}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-5 border border-border text-center"
              >
                <h4 className="font-semibold text-foreground">{item.language}</h4>
                <p className="text-sm text-primary mt-1">{item.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
