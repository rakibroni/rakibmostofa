export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Rakib Mostofa",
    url: "https://rakibmostofa.dev",
    jobTitle: "Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in React, React Native, Next.js, and Node.js. Based in Chemnitz, Germany.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chemnitz",
      addressCountry: "Germany",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Technische Universität Chemnitz",
        description: "Master of Science in Automotive Software Engineering",
      },
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Docker",
    ],
    sameAs: [
      "https://github.com/rakibroni",
      "https://www.linkedin.com/in/md-rakib-mostofa/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
