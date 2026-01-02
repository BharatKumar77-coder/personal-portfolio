require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Models
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const General = require('./models/General');

const app = express();

// Middleware
app.use(cors({
  origin: ["https://personal-portfolio-theta-azure-50.vercel.app", "http://localhost:5173"], 
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// --- API ROUTES ---

// 1. Get All Projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. Get All Skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 3. Get General Info (Hero, About, etc.)
app.get('/api/general', async (req, res) => {
  try {
    const data = await General.find();
    // Convert array to object for easier frontend use: { hero: ..., about: ... }
    const formatted = data.reduce((acc, curr) => {
      acc[curr.section] = curr.content;
      return acc;
    }, {});
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Keep-Alive Route
app.get('/ping', (req, res) => {
  res.status(200).send('Pong! Server is awake.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));