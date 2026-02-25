import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const BACKEND_URL = process.env.BACKEND_URL || 'https://maktabahelmukhtar-66zs.vercel.app';

async function getAdminSession() {
    const session = await getServerSession(authOptions);
    return session && session.user.role === "admin" ? session : null;
}

// GET - Admin fetch all leads
export async function GET() {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const res = await fetch(`${BACKEND_URL}/api/admin/leads`);
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

// PUT - Update lead status
export async function PUT(req) {
    try {
        if (!await getAdminSession()) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/admin/leads`, {
            method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
        });
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

// DELETE - Remove a lead
export async function DELETE(req) {
    try {
        if (!await getAdminSession()) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const { searchParams } = new URL(req.url);
        const res = await fetch(`${BACKEND_URL}/api/admin/leads?id=${searchParams.get("id")}`, { method: "DELETE" });
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
