import { NextResponse } from "next/server";

// Seed route has been DISABLED to prevent overwriting admin data.
export async function GET() {
    return NextResponse.json({ success: false, error: "Seed route disabled." }, { status: 403 });
}
export async function POST() {
    return NextResponse.json({ success: false, error: "Seed route disabled." }, { status: 403 });
}
