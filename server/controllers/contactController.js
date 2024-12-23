const Contact = require('../models/contactSchema');

// Handle creating a new contact entry
const createContact = async (req, res) => {
  try {
    const { name, email, phone, company, subject, inquiryType, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      email,
      phone,
      company,
      subject,
      inquiryType,
      message
    });

    // Save the contact form data to the database
    await newContact.save();

    // Respond with success message
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createContact };
