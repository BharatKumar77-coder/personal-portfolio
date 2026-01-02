const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String], // Array of strings like ["React", "Node"]
  features: [String],
  links: {
    demo: String,
    github: String
  }
});

module.exports = mongoose.model('Project', projectSchema);