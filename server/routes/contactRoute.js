const express = require('express');
const { createContact } = require('../controllers/contactController');
const router = express.Router();

// Route to handle contact form submission
router.post('/create', createContact);

module.exports = router;
