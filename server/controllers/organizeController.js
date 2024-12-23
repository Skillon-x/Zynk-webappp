const Organize = require("../models/organizesSchema");

// Create a new event
exports.createOrganize = async (req, res) => {
  try {
    const newOrganize = new Organize(req.body);
    const savedOrganize = await newOrganize.save();
    res.status(201).json({ message: 'Event created successfully', organize: savedOrganize });
  } catch (error) {
    res.status(400).json({ message: 'Error creating event', error });
  }
};

// Get all events
exports.getAllOrganizes = async (req, res) => {
  try {
    const organizes = await Organize.find();
    res.status(200).json(organizes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};
