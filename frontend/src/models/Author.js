import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide the author's name."],
        },
        image: {
            type: String,
            required: [true, "Please provide an image URL."],
        },
        bio: {
            type: String,
            required: [true, "Please provide a biography."],
        },
        role: {
            type: String,
            default: "Researcher",
        },
        active: {
            type: Boolean,
            default: true,
        }
    },
    { timestamps: true }
);

export default mongoose.models.Author || mongoose.model("Author", AuthorSchema);
