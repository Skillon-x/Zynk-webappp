const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  answer: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['pending', 'answered', 'rejected'],
    default: 'pending'
  },
  frequency: {
    type: Number,
    default: 1
  },
  category: {
    type: String,
    enum: ['event', 'hackathon', 'general', 'technical', 'other'],
    default: 'other'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Add text index for search functionality
questionSchema.index({ question: 'text' });

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;