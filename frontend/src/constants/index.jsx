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
  tagline: "I build scalable and user-friendly web applications.",
};

export const ABOUT_CONTENT = `I am a 3rd-year Computer Science student passionate about building full-stack web applications. With a strong foundation in the MERN stack and a curiosity for AI/ML, I focus on writing clean, efficient code. I am currently looking for internship opportunities where I can contribute to real-world projects and continue learning.`;

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    icon: <Layout className="w-6 h-6 text-accent" />,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
    icon: <Server className="w-6 h-6 text-accent" />,
  },
  {
    category: "Database",
    items: ["MongoDB"],
    icon: <Database className="w-6 h-6 text-accent" />,
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Vercel"],
    icon: <Settings className="w-6 h-6 text-accent" />,
  },
];

export const PROJECTS = [
  {
    title: "Job Portal Web App",
    description: "A comprehensive platform connecting job seekers with recruiters.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "User authentication for seekers and recruiters",
      "Job posting and application management",
      "Real-time status updates"
    ],
    links: {
      demo: "#", // Replace with actual URL later
      github: "#",
    }
  },
  {
    title: "Rentify",
    description: "A hassle-free property rental platform.",
    techStack: ["React", "Tailwind", "Firebase"],
    features: [
      "Property listing with image uploads",
      "Advanced filtering by location and price",
      "Direct owner-tenant communication"
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
  {
    title: "Movie Recommender",
    description: "AI-powered movie suggestion system.",
    techStack: ["Python", "Flask", "React", "ML"],
    features: [
      "Content-based filtering algorithm",
      "Interactive user interface",
      "Personalized watchlist creation"
    ],
    links: {
      demo: "#",
      github: "#",
    }
  },
];

export const CONTACT_INFO = {
  email: "your.email@example.com", // Update this
  linkedin: "https://linkedin.com/in/yourprofile", // Update this
  github: "https://github.com/yourusername", // Update this
};