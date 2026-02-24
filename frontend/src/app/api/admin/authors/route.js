import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Author from "@/models/Author";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        await dbConnect();
        const authors = await Author.find({});
        return NextResponse.json({ success: true, data: authors });
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
        const author = await Author.create(body);
        return NextResponse.json({ success: true, data: author }, { status: 201 });
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
        const author = await Author.findByIdAndUpdate(id, updateData, { new: true });
        return NextResponse.json({ success: true, data: author });
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
        await Author.findByIdAndDelete(id);
        return NextResponse.json({ success: true, message: "Author deleted" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
