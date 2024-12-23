const express = require('express');
const router = express.Router();
const organizeController = require("../controllers/organizeController");

// Create a new event
router.post('/create', organizeController.createOrganize);

// Fetch all events
router.get('/list', organizeController.getAllOrganizes);

module.exports = router;
