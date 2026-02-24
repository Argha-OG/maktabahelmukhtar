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

export default mongoose.models.Book || mongoose.model("Book", BookSchema);
