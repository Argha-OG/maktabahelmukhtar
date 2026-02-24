import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for the book."],
            maxlength: [100, "Title cannot be more than 100 characters"],
        },
        author: {
            type: String,
            required: [true, "Please provide an author name."],
        },
        editor: {
            type: String,
        },
        description: {
            type: String,
            required: [true, "Please provide a book description."],
        },
        coverImage: {
            type: String,
            required: [true, "Please provide a cover image URL."],
        },
        authorImage: {
            type: String,
        },
        authorBio: {
            type: String,
        },
        price: {
            type: Number,
            default: 0,
        },
        isBestSeller: {
            type: Boolean,
            default: false,
        },
        whatsappLink: {
            type: String,
            required: [true, "Please provide a WhatsApp order link."],
        },
        category: {
            type: String,
            enum: ["Fiqh", "Hadith", "History", "Theology", "General"],
            default: "General",
        },
    },
    { timestamps: true }
);

// Ensure model is updated even if cached with old schema
if (mongoose.models.Book) {
    delete mongoose.models.Book;
}

const Book = mongoose.model("Book", BookSchema);
export default Book;
