import { externalLinks, siteUrl } from "@/lib/projects";

type JsonLdProps = {
  data?: Record<string, unknown>;
};

const defaultSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Md Rakib Mostofa",
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: "Frontend-Focused Full-Stack / Product Engineer",
      description:
        "Frontend-Focused Full-Stack / Product Engineer based in Chemnitz, Germany, specializing in React, Next.js, React Native, TypeScript, and scalable web and mobile applications.",
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
        {
          "@type": "CollegeOrUniversity",
          name: "University of Information Technology and Sciences",
          description: "Bachelor of Science in Computer Science / Informatics and Technology",
        },
      ],
      knowsLanguage: ["Bengali", "English", "German"],
      knowsAbout: [
        "React",
        "Next.js",
        "React Native",
        "TypeScript",
        "Node.js",
        "NestJS",
        "Go",
        "PostgreSQL",
        "Elasticsearch",
        "Stripe Connect",
        "Docker",
      ],
      sameAs: [externalLinks.github, externalLinks.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Md Rakib Mostofa Portfolio",
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en",
    },
  ],
};

export function JsonLd({ data = defaultSchema }: JsonLdProps) {
  const serializedSchema = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedSchema }}
    />
  );
}
