const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please provide a title.'] },
        description: { type: String },
        imageUrl: { type: String, required: [true, 'Please provide an image URL.'] },
        date: { type: Date, default: Date.now },
        category: { type: String, enum: ['Event', 'Institution', 'Scholars', 'Workshop'], default: 'Event' },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Gallery || mongoose.model('Gallery', GallerySchema);
