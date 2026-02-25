import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const BACKEND_URL = process.env.BACKEND_URL || 'https://maktabahelmukhtar-66zs.vercel.app';

async function getAdminSession() {
    const session = await getServerSession(authOptions);
    return session && session.user.role === "admin" ? session : null;
}

export async function GET() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/admin/authors`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        if (!await getAdminSession()) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/admin/authors`, {
            method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
        });
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        if (!await getAdminSession()) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/admin/authors`, {
            method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
        });
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        if (!await getAdminSession()) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });
        const { searchParams } = new URL(req.url);
        const res = await fetch(`${BACKEND_URL}/api/admin/authors?id=${searchParams.get("id")}`, { method: "DELETE" });
        return NextResponse.json(await res.json(), { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
