const mongoose = require('mongoose');

const AdsSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please provide a title for the ad.'] },
        subtitle: { type: String },
        imageUrl: { type: String, required: [true, 'Please provide an image URL.'] },
        link: { type: String, default: '/books' },
        active: { type: Boolean, default: true },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Ads || mongoose.model('Ads', AdsSchema);
