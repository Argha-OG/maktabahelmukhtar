import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET(req, { params }) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/books/${params.id}`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/books/${params.id}`, {
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

export async function DELETE(req, { params }) {
    try {
        const session = await getAdminSession();
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const res = await fetch(`${BACKEND_URL}/api/books/${params.id}`, { method: "DELETE" });
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
