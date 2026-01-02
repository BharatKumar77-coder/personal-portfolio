const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: String, // e.g., "Frontend", "Backend"
  items: [String],  // e.g., ["React", "CSS"]
});

module.exports = mongoose.model('Skill', skillSchema);