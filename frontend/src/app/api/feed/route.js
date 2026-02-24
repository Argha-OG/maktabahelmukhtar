import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import DailyFeed from "@/models/DailyFeed";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        await dbConnect();
        const feedItems = await DailyFeed.find({ active: true }).sort({ date: -1 });
        return NextResponse.json({ success: true, data: feedItems });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const feedItem = await DailyFeed.create(body);
        return NextResponse.json({ success: true, data: feedItem }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
