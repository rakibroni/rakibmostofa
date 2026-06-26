"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const education = [
  {
    degree: "Master of Science",
    field: "Automotive Software Engineering",
    institution: "Technische Universität Chemnitz",
    location: "Chemnitz, Germany",
    period: "2021 – 2024",
    current: true,
    grade: "Successfully Completed",
    description:
      "Pursuing advanced studies at the intersection of automotive systems and software engineering. Covering embedded systems, AUTOSAR, functional safety (ISO 26262), and modern software architectures for connected vehicles.",
    courses: [
      "Embedded Systems",
      "AUTOSAR Architecture",
      "Functional Safety",
      "Software Testing",
      "Connected Vehicles",
      "Real-time Systems",
    ],
    gradient: "from-primary to-accent",
    icon: "🎓",
    color: "text-primary",
    borderColor: "border-primary/20",
    badgeBg: "bg-primary/10",
  },
  {
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    institution: "University of Bangladesh",
    location: "Bangladesh",
    period: "2015 – 2019",
    current: false,
    grade: "Successfully Completed",
    description:
      "Completed a comprehensive computer science program with focus on algorithms, data structures, software engineering principles, database management, and full-stack web development.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "OOP & Design Patterns",
    ],
    gradient: "from-purple-500 to-pink-500",
    icon: "📚",
    color: "text-purple-500",
    borderColor: "border-purple-500/20",
    badgeBg: "bg-purple-500/10",
  },
];

const certifications = [
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    year: "2023",
    icon: "⚛",
  },
  {
    name: "Node.js Application Development",
    issuer: "Linux Foundation",
    year: "2022",
    icon: "🟢",
  },
  {
    name: "Docker & Kubernetes",
    issuer: "Docker Inc.",
    year: "2022",
    icon: "🐳",
  },
  {
    name: "TypeScript Pro",
    issuer: "Microsoft Learn",
    year: "2021",
    icon: "TS",
  },
];

export function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="Strong foundation in computer science combined with specialized automotive software expertise."
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
                      {edu.current && (
                        <span className="px-2 py-0.5 text-[10px] font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          Current
                        </span>
                      )}
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
                    {edu.grade}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {edu.description}
              </p>

              {/* Key courses */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Courses
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className={`px-2.5 py-1 text-xs font-medium ${edu.badgeBg} ${edu.color} rounded-lg border ${edu.borderColor}`}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & Courses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="glass rounded-xl p-5 border border-white/10 text-center cursor-default group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-primary mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
