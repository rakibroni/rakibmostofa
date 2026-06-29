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
          name: "Technische Universitaet Chemnitz",
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
