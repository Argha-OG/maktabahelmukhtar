import mongoose from "mongoose";

const DailyFeedSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            enum: ["Quote", "Hadith", "Announcement", "Newsletter", "Article"],
            required: true,
        },
        title: {
            type: String,
            required: [true, "Please provide a title."],
        },
        image: {
            type: String,
        },
        content: {
            type: String,
            required: true,
        },
        description: {
            type: String, // Full article/blog content
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

// Force model refresh for schema changes in development
if (mongoose.models.DailyFeed) {
    delete mongoose.models.DailyFeed;
}

const DailyFeed = mongoose.model("DailyFeed", DailyFeedSchema);
export default DailyFeed;
