const express = require('express');
const router = express.Router();
const DailyFeed = require('../models/DailyFeed');

// GET all active feed items (or single by ?id=)
router.get('/', async (req, res) => {
    try {
        if (req.query.id) {
            const item = await DailyFeed.findById(req.query.id);
            if (!item) return res.status(404).json({ success: false, error: 'Item not found' });
            return res.json({ success: true, data: item });
        }
        const feedItems = await DailyFeed.find({}).sort({ date: -1 });
        res.json({ success: true, data: feedItems });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST create feed item
router.post('/', async (req, res) => {
    try {
        const item = await DailyFeed.create(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// PUT update feed item
router.put('/', async (req, res) => {
    try {
        const { id, ...updateData } = req.body;
        const item = await DailyFeed.findByIdAndUpdate(id, updateData, { new: true });
        res.json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE feed item
router.delete('/', async (req, res) => {
    try {
        await DailyFeed.findByIdAndDelete(req.query.id);
        res.json({ success: true, message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
