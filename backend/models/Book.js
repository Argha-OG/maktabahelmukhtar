const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, 'Please provide a title.'], maxlength: 100 },
        author: { type: String, required: [true, 'Please provide an author name.'] },
        editor: { type: String },
        description: { type: String, required: [true, 'Please provide a description.'] },
        coverImage: { type: String, required: [true, 'Please provide a cover image URL.'] },
        authorImage: { type: String },
        authorBio: { type: String },
        price: { type: Number, default: 0 },
        isBestSeller: { type: Boolean, default: false },
        whatsappLink: { type: String, required: [true, 'Please provide a WhatsApp order link.'] },
        category: { type: String, enum: ['Fiqh', 'Hadith', 'History', 'Theology', 'General'], default: 'General' },
    },
    { timestamps: true }
);

module.exports = mongoose.models.Book || mongoose.model('Book', BookSchema);
