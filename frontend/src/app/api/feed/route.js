import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import DailyFeed from "@/models/DailyFeed";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(req) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) {
            const item = await DailyFeed.findById(id);
            if (!item) return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
            return NextResponse.json({ success: true, data: item });
        }

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
export async function PUT(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const { id, ...updateData } = body;
        const item = await DailyFeed.findByIdAndUpdate(id, updateData, { new: true });
        return NextResponse.json({ success: true, data: item });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        await dbConnect();
        await DailyFeed.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Deleted" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
