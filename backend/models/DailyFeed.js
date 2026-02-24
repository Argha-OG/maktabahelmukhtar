const mongoose = require('mongoose');

const DailyFeedSchema = new mongoose.Schema(
    {
        type: { type: String, enum: ['Quote', 'Hadith', 'Announcement', 'Newsletter', 'Article'], required: true },
        title: { type: String, required: [true, 'Please provide a title.'] },
        image: { type: String },
        content: { type: String, required: true },
        description: { type: String },
        source: { type: String },
        date: { type: Date, default: Date.now },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.models.DailyFeed || mongoose.model('DailyFeed', DailyFeedSchema);
