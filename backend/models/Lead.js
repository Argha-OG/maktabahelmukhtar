const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Please provide your name.'], maxlength: 100 },
        email: {
            type: String,
            required: [true, 'Please provide your email.'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email.'],
        },
        subject: { type: String, required: [true, 'Please provide a subject.'], maxlength: 200 },
        message: { type: String, required: [true, 'Please provide a message.'], maxlength: 2000 },
        status: { type: String, enum: ['new', 'read', 'contacted', 'archived'], default: 'new' },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
