import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Book from "@/models/Book";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET(req, { params }) {
    try {
        await dbConnect();
        const book = await Book.findById(params.id);
        if (!book) return NextResponse.json({ success: false, error: "Book not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: book });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function PUT(req, { params }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        await dbConnect();
        const body = await req.json();
        const book = await Book.findByIdAndUpdate(params.id, body, { new: true, runValidators: true });
        if (!book) return NextResponse.json({ success: false, error: "Book not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: book });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        await dbConnect();
        const book = await Book.findByIdAndDelete(params.id);
        if (!book) return NextResponse.json({ success: false, error: "Book not found" }, { status: 404 });
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
