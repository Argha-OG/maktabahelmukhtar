import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs/promises";

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Create a unique filename
        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        // Ensure directory exists
        await mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, filename);
        await writeFile(filePath, buffer);

        const fileUrl = `/uploads/${filename}`;

        return NextResponse.json({
            success: true,
            url: fileUrl,
            message: "File uploaded successfully"
        });
    } catch (error) {
        console.error("Upload Error:", error);
        return NextResponse.json({ success: false, message: "File upload failed" }, { status: 500 });
    }
}
