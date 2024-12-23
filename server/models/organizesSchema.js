const mongoose = require('mongoose');

const prizeSchema = new mongoose.Schema({
  first: String,
  second: String,
  third: String,
  special: String,
});

const judgeSpeakerSchema = new mongoose.Schema({
  name: String,
  designation: String,
  organization: String,
  linkedinProfile: String,
});

const organizeSchema = new mongoose.Schema({
  name: String,
  tagline: String,
  description: String,
  format: { type: String, enum: ['online', 'offline'], default: 'online' },
  university: String,
  participationFee: Number,
  expectedParticipants: Number,
  minTeamSize: Number,
  maxTeamSize: Number,
  domains: [String],
  applicationStart: Date,
  applicationEnd: Date,
  hackathonStart: Date,
  hackathonEnd: Date,
  resultsDate: Date,
  venue: String,
  city: String,
  organizerPhone: String,
  organizerEmail: String,
  websiteUrl: String,
  twitter: String,
  linkedin: String,
  discord: String,
  instagram: String,
  prizes: prizeSchema,
  sponsors: [String],
  partners: [String],
  judges: [judgeSpeakerSchema],
  speakers: [judgeSpeakerSchema],
});

module.exports = mongoose.model('Organize', organizeSchema);
