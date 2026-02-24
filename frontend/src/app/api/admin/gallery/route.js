import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        await dbConnect();
        const gallery = await Gallery.find({}).sort({ date: -1 });
        return NextResponse.json({ success: true, data: gallery });
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
        const item = await Gallery.create(body);
        return NextResponse.json({ success: true, data: item }, { status: 201 });
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
        const item = await Gallery.findByIdAndUpdate(id, updateData, { new: true });
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
        await Gallery.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Gallery item deleted" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
