import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import DailyFeed from "@/models/DailyFeed";

const demoFeeds = [
    {
        type: "Article",
        title: "Kepentingan Memelihara Khazanah Turats",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800",
        content: "Khazanah turats merupakan warisan intelek yang sangat berharga bagi umat Islam...",
        description: "Dalam era moden yang serba pantas ini, sering kali kita terlupa akan akar pemikiran yang telah dibina oleh ribuan ulama terdahulu. Kitab-kitab turats bukan sekadar kertas lama, tetapi ia adalah kompas bagi mendepani cabaran semasa.\n\nDi Maktabah El Mukhtar, kami komited untuk memastikan naskhah-naskhah ini bukan sahaja dipelihara secara fizikal, tetapi juga dihidupkan semula melalui pengajian yang sistematik. Pemeliharaan turats adalah tanggungjawab bersama bagi memastikan identiti keilmuan umat tidak hanyut ditelan zaman.\n\nKami mengajak seluruh lapisan masyarakat untuk mula mengenali karya-karya agung Nusantara dan antarabangsa yang telah membentuk tamadun kita.",
        source: "Dr. Sheikh Mukhtar",
        active: true,
    },
    {
        type: "Hadith",
        title: "Kelebihan Menuntut Ilmu",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800",
        content: "Barangsiapa yang menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.",
        description: "Hadith ini memberikan motivasi yang sangat besar bagi setiap Muslim. Menuntut ilmu bukan sahaja satu kewajipan, tetapi ia adalah jambatan utama menuju keredaan Allah SWT. Setiap langkah yang diambil, setiap helaian muka surat yang dibaca dengan ikhlas, adalah pelaburan untuk akhirat kita.",
        source: "HR. Muslim",
        active: true,
    },
    {
        type: "Announcement",
        title: "Pelancaran Kitab Adab Al-Alim",
        image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=800",
        content: "Kami berbesar hati mengumumkan pelancaran edisi terbaru kitab Adab Al-Alim wa Al-Muta'allim.",
        description: "Edisi kali ini hadir dengan nota kaki yang lebih mendalam dan kualiti cetakan yang premium. Sesuai untuk dijadikan koleksi peribadi mahupun teks pengajian di madrasah-madrasah. Pelancaran akan diadakan pada hari Jumaat ini di Galeri Maktabah El Mukhtar.",
        source: "Unit Penerbitan MEM",
        active: true,
    },
    {
        type: "Quote",
        title: "Mutiara Kata Imam Syafi'i",
        image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=800",
        content: "Ilmu itu bukan apa yang dihafal, tetapi apa yang memberi manfaat.",
        description: "Kata-kata hikmah ini mengingatkan kita bahawa tujuan utama ilmu adalah untuk diamalkan. Hafalan yang banyak tanpa perubahan akhlak dan amalan hanyalah beban yang tidak bernyawa. Carilah ilmu yang mampu mendekatkan diri kita kepada Pencipta dan memberi sinar kepada sesama makhluk.",
        source: "Imam Ash-Shafi'i",
        active: true,
    }
];

export async function GET() {
    try {
        await dbConnect();
        await DailyFeed.deleteMany({});
        await DailyFeed.insertMany(demoFeeds);

        return NextResponse.json({
            success: true,
            message: "Successfully seeded rich blog-style feed data.",
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
