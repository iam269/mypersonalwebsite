export interface Certification {
  id: string;
  name: string;
  institution: string;
  logo: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Web Development Fundamentals",
    institution: "freeCodeCamp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/FreeCodeCamp_logo.svg",
    date: "2024",
    credentialUrl: "https://freecodecamp.org/certification",
  },
  {
    id: "2",
    name: "React Developer Certificate",
    institution: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    date: "2024",
    credentialUrl: "https://coursera.org/verify",
  },
  {
    id: "3",
    name: "JavaScript Algorithms",
    institution: "HackerRank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
    date: "2023",
    credentialUrl: "https://hackerrank.com/certificates",
  },
  {
    id: "4",
    name: "TypeScript Fundamentals",
    institution: "Udemy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
    date: "2024",
    credentialUrl: "https://udemy.com/certificate",
  },
];
