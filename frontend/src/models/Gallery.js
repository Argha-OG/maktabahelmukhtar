import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for the gallery item."],
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: [true, "Please provide an image URL."],
        },
        date: {
            type: Date,
            default: Date.now,
        },
        category: {
            type: String,
            enum: ["Event", "Institution", "Scholars", "Workshop"],
            default: "Event",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);
