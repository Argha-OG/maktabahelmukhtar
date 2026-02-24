import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

export async function GET() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/books`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await getAdminSession(req);
        if (!session) return NextResponse.json({ success: false, error: "Not authorized" }, { status: 401 });

        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/books`, {
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

async function getAdminSession(req) {
    const { getServerSession } = await import("next-auth/next");
    const { authOptions } = await import("@/lib/auth");
    const session = await getServerSession(authOptions);
    return session && session.user.role === "admin" ? session : null;
}
