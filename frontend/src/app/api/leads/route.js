import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL;

// POST - Public contact form submission
export async function POST(req) {
    try {
        const body = await req.json();
        const res = await fetch(`${BACKEND_URL}/api/admin/leads`, {
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
