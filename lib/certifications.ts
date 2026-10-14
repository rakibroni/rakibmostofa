export type Certification = {
  title: string;
  issuer: string;
  platform: string;
  issued: string;
  issuedShort: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  /** Subset shown on the homepage card */
  displaySkills: string[];
};

export const certifications: Certification[] = [
  {
    title: "React Native",
    issuer: "Meta",
    platform: "Coursera",
    issued: "December 2024",
    issuedShort: "Dec 2024",
    credentialId: "V3H5O6E5DBPX",
    credentialUrl: "https://coursera.org/verify/V3H5O6E5DBPX",
    skills: [
      "React Native",
      "Mobile Development",
      "JavaScript",
      "Cross-Platform Development",
    ],
    displaySkills: ["React Native", "Mobile Development"],
  },
  {
    title: "React Basics",
    issuer: "Meta",
    platform: "Coursera",
    issued: "December 2024",
    issuedShort: "Dec 2024",
    credentialId: "5TPA5BH7Y52K",
    credentialUrl: "https://coursera.org/verify/5TPA5BH7Y52K",
    skills: [
      "React",
      "JavaScript",
      "Frontend Development",
      "Component-Based UI Development",
    ],
    displaySkills: ["React", "JavaScript", "Frontend Development"],
  },
];
