import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";

export async function POST(req) {
    try {
        await dbConnect();
        const body = await req.json();

        // Basic validation
        if (!body.name || !body.email || !body.subject || !body.message) {
            return NextResponse.json({
                success: false,
                error: "Please provide all required fields (name, email, subject, message)."
            }, { status: 400 });
        }

        const lead = await Lead.create(body);

        return NextResponse.json({
            success: true,
            data: lead,
            message: "Message received. We will get back to you soon!"
        }, { status: 201 });
    } catch (error) {
        console.error("Lead Submission Error:", error);
        return NextResponse.json({
            success: false,
            error: error.message || "Failed to process your message."
        }, { status: 500 });
    }
}
