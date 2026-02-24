import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Ads from "@/models/Ads";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        await dbConnect();
        const ads = await Ads.find({}).sort({ order: 1 });
        return NextResponse.json({ success: true, data: ads });
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
        const ad = await Ads.create(body);
        return NextResponse.json({ success: true, data: ad }, { status: 201 });
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
        const ad = await Ads.findByIdAndUpdate(id, updateData, { new: true });
        return NextResponse.json({ success: true, data: ad });
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
        await Ads.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Ad deleted" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
