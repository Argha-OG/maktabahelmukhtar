import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name."],
            maxlength: [100, "Name cannot be more than 100 characters"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email address."],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email address."],
        },
        subject: {
            type: String,
            required: [true, "Please provide a subject."],
            maxlength: [200, "Subject cannot be more than 200 characters"],
        },
        message: {
            type: String,
            required: [true, "Please provide a message."],
            maxlength: [2000, "Message cannot be more than 2000 characters"],
        },
        status: {
            type: String,
            enum: ["new", "read", "contacted", "archived"],
            default: "new",
        },
    },
    { timestamps: true }
);

// Ensure model is updated even if cached with old schema
if (mongoose.models.Lead) {
    delete mongoose.models.Lead;
}

const Lead = mongoose.model("Lead", LeadSchema);
export default Lead;
