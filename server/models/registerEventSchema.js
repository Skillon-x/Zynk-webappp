const mongoose = require('mongoose');

const registerEventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    organization: { type: String },
    eventDetails: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('RegisterEvent', registerEventSchema);
