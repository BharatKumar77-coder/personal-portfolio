import { Code2, Database, Layout, Server, Settings, Terminal } from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  name: "Bharat Kumar",
  role: "Full Stack Developer",
  tagline: "I build scalable full-stack web applications using MERN stack.",
};

export const ABOUT_CONTENT = {
  text: "I'm a final-year Computer Science student with hands-on experience in building full-stack web applications. I specialize in the MERN stack and enjoy designing clean APIs, scalable backends, and responsive user interfaces. Currently seeking full-time or internship opportunities where I can contribute to real-world products and grow as a software engineer."
};

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    icon: <Layout className="w-6 h-6 text-accent" />,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    icon: <Server className="w-6 h-6 text-accent" />,
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
    icon: <Database className="w-6 h-6 text-accent" />,
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel"],
    icon: <Settings className="w-6 h-6 text-accent" />,
  },
];

export const PROJECTS = [
  {
    id: "job-portal",
    title: "Job Portal Web App",
    description: "Full-stack job portal with recruiter and applicant roles, secure authentication, and resume management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication for seekers and recruiters",
      "Job posting and application management",
      "Real-time status updates"
    ],
    links: {
      demo: "https://job-portal-web-app-beta.vercel.app/",
      github: "https://github.com/BharatKumar77-coder/job-portal-web-app",
    }
  },
  {
    id: "rentify",
    title: "Rentify",
    description: "MERN-based equipment rental platform for cameras, drones, and laptops.",
    techStack: ["React", "Tailwind", "Firebase"],
    features: [
      "Product CRUD with Mongoose",
      "Category-based filtering",
      "Reusable API-driven UI"
    ],
    links: {
      demo: "https://rentify-platform-silk.vercel.app/",
      github: "https://github.com/BharatKumar77-coder/rentify-platform",
    }
  },
  {
    id: "movie-recommender",
    title: "Movie Recommender System",
    description: "Content-based movie recommendation system using similarity analysis.",
    techStack: ["Python", "Flask", "React", "ML"],
    features: [
      "Cosine similarity recommendations",
      "Top-N movie suggestions",
      "Feature-based data analysis"
    ],
    links: {
      demo: "https://github.com/BharatKumar77-coder/movie-recommender-system",
      github: "https://github.com/BharatKumar77-coder/movie-recommender-system",
    }
  },
];

export const CONTACT_INFO = {
  email: "bharatkumarch1122@gmail.com",
  linkedin: "https://www.linkedin.com/in/bharat-kumar-69a735257/",
  github: "https://github.com/BharatKumar77-coder"
};