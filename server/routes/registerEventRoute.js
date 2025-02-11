const express = require('express');
const { registerEvent } = require('../controllers/registerEventController'); // Adjust path as needed

const router = express.Router();

// Route for registering an event
router.post('/Eventregister', registerEvent);

module.exports = router;
