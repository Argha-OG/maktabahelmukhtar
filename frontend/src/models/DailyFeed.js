import mongoose from "mongoose";

const DailyFeedSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Quote", "Hadith", "Announcement", "Newsletter"],
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        source: {
            type: String, // e.g., Bukhari, Muslim, or institutional source
        },
        date: {
            type: Date,
            default: Date.now,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.DailyFeed || mongoose.model("DailyFeed", DailyFeedSchema);
