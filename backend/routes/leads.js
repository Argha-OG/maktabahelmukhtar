const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');

// GET all leads
router.get('/', async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        res.json({ success: true, data: leads });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST create a lead (public contact form submission)
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'All fields are required.' });
        }
        const lead = await Lead.create({ name, email, subject, message });
        res.status(201).json({ success: true, data: lead });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// PUT update lead status
router.put('/', async (req, res) => {
    try {
        const { id, status } = req.body;
        const lead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
        res.json({ success: true, data: lead });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE lead
router.delete('/', async (req, res) => {
    try {
        await Lead.findByIdAndDelete(req.query.id);
        res.json({ success: true, message: 'Lead deleted' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
