import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

const demoGallery = [
    {
        title: "Sesi Bedah Kitab",
        description: "Suasana tenang semasa sesi bedah kitab bersama para asatizah di Maktabah El Mukhtar.",
        imageUrl: "https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?q=80&w=800",
        category: "Event",
    },
    {
        title: "Perpustakaan Sheikh Mukhtar",
        description: "Koleksi manuskrip asli dan kitab-kitab klasik yang menjadi rujukan utama penyelidikan kami.",
        imageUrl: "https://images.unsplash.com/photo-1507842217351-5dca9ba840fb?q=80&w=800",
        category: "Institution",
    },
    {
        title: "Bengkel Editorial Turats",
        description: "Latihan intensif bagi para pengarang muda dalam metodologi penyuntingan karya turats.",
        imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=800",
        category: "Workshop",
    },
    {
        title: "Ziarah Ulama Nusantara",
        description: "Kunjungan hormat para ulama tempatan bagi membincangkan masa hadapan penerbitan Islam di Malaysia.",
        imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800",
        category: "Scholars",
    }
];

export async function GET() {
    try {
        await dbConnect();
        await Gallery.deleteMany({});
        await Gallery.insertMany(demoGallery);

        return NextResponse.json({
            success: true,
            message: "Successfully seeded gallery demo data.",
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
