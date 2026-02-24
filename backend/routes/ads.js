const express = require('express');
const router = express.Router();
const Ads = require('../models/Ads');

// GET all ads
router.get('/', async (req, res) => {
    try {
        const ads = await Ads.find({}).sort({ order: 1 });
        res.json({ success: true, data: ads });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST create ad
router.post('/', async (req, res) => {
    try {
        const ad = await Ads.create(req.body);
        res.status(201).json({ success: true, data: ad });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// PUT update ad
router.put('/', async (req, res) => {
    try {
        const { id, ...updateData } = req.body;
        const ad = await Ads.findByIdAndUpdate(id, updateData, { new: true });
        res.json({ success: true, data: ad });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE ad
router.delete('/', async (req, res) => {
    try {
        await Ads.findByIdAndDelete(req.query.id);
        res.json({ success: true, message: 'Ad deleted' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
