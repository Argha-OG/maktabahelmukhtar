import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || 'https://maktabahelmukhtar-66zs.vercel.app';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const url = id ? `${BACKEND_URL}/api/feed?id=${id}` : `${BACKEND_URL}/api/feed`;
        const res = await fetch(url);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/feed`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/feed`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const res = await fetch(`${BACKEND_URL}/api/feed?id=${id}`, { method: "DELETE" });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

async function getAdminSession() {
    const { getServerSession } = await import("next-auth/next");
    const { authOptions } = await import("@/lib/auth");
    const session = await getServerSession(authOptions);
    return session && session.user.role === "admin" ? session : null;
}
