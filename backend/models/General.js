const mongoose = require('mongoose');

// This stores your Hero, About, and Contact info
const generalSchema = new mongoose.Schema({
  section: String, // "hero", "about", "contact"
  content: mongoose.Schema.Types.Mixed // Allows flexible data structure
});

module.exports = mongoose.model('General', generalSchema);