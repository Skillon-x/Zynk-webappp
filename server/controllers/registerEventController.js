const RegisterEvent = require('../models/registerEventSchema'); // Adjust path as needed

exports.registerEvent = async (req, res) => {
    try {
        const { name, email, phone, organization, eventDetails } = req.body;

        // Validate input
        if (!name || !email || !phone || !eventDetails) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Save to database
        const registration = new RegisterEvent({
            name,
            email,
            phone,
            organization,
            eventDetails,
        });

        await registration.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        console.error('Error registering event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
