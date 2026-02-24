import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Lead from "@/models/Lead";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function GET() {
    try {
        const session = await getServerSession(authOptions);
        if (!session || session.user.role !== "admin") {
            return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        }

        await dbConnect();
        const leads = await Lead.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: leads });
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

        const lead = await Lead.findByIdAndUpdate(id, updateData, { new: true });
        if (!lead) return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });

        return NextResponse.json({ success: true, data: lead });
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
        const lead = await Lead.findByIdAndDelete(id);
        if (!lead) return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });

        return NextResponse.json({ success: true, message: "Lead deleted successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}
