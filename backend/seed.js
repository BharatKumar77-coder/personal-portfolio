require('dotenv').config();
const mongoose = require('mongoose');

const Project = require('./models/Project');
const Skill = require('./models/Skill');
const General = require('./models/General');

// --- THE DATA TO UPLOAD ---

// 1. General Data (Hero, About, Contact)
const generalData = [
  {
    section: 'hero',
    content: {
      name: "Bharat Kumar",
      role: "Full Stack Developer",
      tagline: "I build scalable full-stack web applications using MERN stack.",
    }
  },
  {
    section: 'about',
    content: {
      text: "I’m a final-year Computer Science student with hands-on experience in building full-stack web applications. I specialize in the MERN stack and enjoy designing clean APIs, scalable backends, and responsive user interfaces. Currently seeking full-time or internship opportunities where I can contribute to real-world products and grow as a software engineer."
    }
  },
  {
    section: 'contact',
    content: {
      email: "bharatkumarch1122@gmail.com",
      linkedin: "https://www.linkedin.com/in/bharat-kumar-69a735257/",
      github: "https://github.com/BharatKumar77-coder"
    }
  }
];

// 2. Skills Data
// NOTE: We store 'iconName' as a string here!
const skillsData = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

// 3. Projects Data
const projectsData = [
  {
    title: "Job Portal Web App",
    description:  "Full-stack job portal with recruiter and applicant roles, secure authentication, and resume management.",
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

// --- SEEDING FUNCTION ---

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for Seeding');

    // 1. Clear existing data (Optional: Remove if you want to keep appending)
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await General.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // 2. Insert new data
    await General.insertMany(generalData);
    await Skill.insertMany(skillsData);
    await Project.insertMany(projectsData);
    console.log('🌱 Database seeded successfully!');

    // 3. Disconnect
    mongoose.connection.close();
    console.log('🔌 Connection closed');
    process.exit(0);

  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedDB();