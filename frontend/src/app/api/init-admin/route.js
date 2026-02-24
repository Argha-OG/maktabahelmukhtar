import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
    try {
        await dbConnect();
        const adminExists = await User.findOne({ role: "admin" });

        if (adminExists) {
            return NextResponse.json({ success: false, message: "Admin already exists" }, { status: 400 });
        }

        const admin = await User.create({
            username: "admin",
            password: "adminpassword123", // User should change this immediately
            role: "admin",
        });

        return NextResponse.json({
            success: true,
            message: "Admin created successfully",
            credentials: { username: "admin", password: "adminpassword123" }
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
