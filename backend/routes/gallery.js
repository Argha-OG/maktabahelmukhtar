const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// GET all gallery items
router.get('/', async (req, res) => {
    try {
        const gallery = await Gallery.find({}).sort({ date: -1 });
        res.json({ success: true, data: gallery });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST create gallery item
router.post('/', async (req, res) => {
    try {
        const item = await Gallery.create(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// PUT update gallery item
router.put('/', async (req, res) => {
    try {
        const { id, ...updateData } = req.body;
        const item = await Gallery.findByIdAndUpdate(id, updateData, { new: true });
        res.json({ success: true, data: item });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE gallery item
router.delete('/', async (req, res) => {
    try {
        await Gallery.findByIdAndDelete(req.query.id);
        res.json({ success: true, message: 'Gallery item deleted' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
