const express = require('express');
const router = express.Router();
const Author = require('../models/Author');

// GET all authors
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find({});
        console.log(`Backend API: Found ${authors.length} authors in DB`);
        res.json({ success: true, data: authors });
    } catch (err) {
        console.error("Backend API: GET authors error:", err);
        res.status(400).json({ success: false, error: err.message });
    }
});

// POST create author
router.post('/', async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json({ success: true, data: author });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// PUT update author
router.put('/', async (req, res) => {
    try {
        const { id, ...updateData } = req.body;
        const author = await Author.findByIdAndUpdate(id, updateData, { new: true });
        res.json({ success: true, data: author });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

// DELETE author
router.delete('/', async (req, res) => {
    try {
        await Author.findByIdAndDelete(req.query.id);
        res.json({ success: true, message: 'Author deleted' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
});

module.exports = router;
