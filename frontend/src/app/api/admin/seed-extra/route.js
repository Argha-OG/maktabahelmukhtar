import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Author from "@/models/Author";
import Ads from "@/models/Ads";

const authorsData = [
    {
        name: "Imam An-Nawawi",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
        bio: "Muhyiddin Abu Zakariya Yahya bin Syaraf al-Nawawi al-Dimasyqi, a giant in Islamic jurisprudence and Hadith scholarship.",
        role: "Lead Scholar",
        active: true
    },
    {
        name: "Ibnu Rusyd (Averroes)",
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400",
        bio: "Abu al-Walid Muhammad ibn Ahmad ibn Rushd, a polymath who wrote on logic, theology, and Islamic law.",
        role: "Scholar",
        active: true
    },
    {
        name: "Imam Ash-Shafi'i",
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=400",
        bio: "Abu Abdullah Muhammad ibn Idris al-Shafi'i, founder of the Shafi'i school of Islamic jurisprudence.",
        role: "Imam al-Mathhab",
        active: true
    },
    {
        name: "Imam Malik",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400",
        bio: "Malik ibn Anas ibn Malik ibn Abi 'Amir al-Asbahi, founder of the Maliki school of jurisprudence and author of Al-Muwatta.",
        role: "Imam al-Madinah",
        active: true
    },
    {
        name: "Imam Al-Ghazali",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc206e?q=80&w=400",
        bio: "Abu Hamid Muhammad ibn Muhammad al-Ghazali, known as Hujjat al-Islam, a philosopher, theologian, and jurist.",
        role: "Hujjat al-Islam",
        active: true
    }
];

const adsData = [
    {
        title: "Preserving Knowledge, Inspiring Faith",
        subtitle: "Official web presence for Maktabah El Mukhtar, providing authentic Islamic literature and daily religious guidance.",
        imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600",
        link: "/books",
        order: 1,
        active: true
    },
    {
        title: "Terbitan Baharu: Koleksi Hadis Sahih",
        subtitle: "A meticulous collection of authentic Hadith, edited by our lead scholars for modern spiritual enrichment.",
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1600",
        link: "/books",
        order: 2,
        active: true
    },
    {
        title: "Daily SPIRITUAL Feeding",
        subtitle: "Subscribe to our daily feed for authentic Hadith reminders and institutional announcements directly from MEM.",
        imageUrl: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1600",
        link: "/feed",
        order: 3,
        active: true
    }
];

export async function GET() {
    try {
        await dbConnect();

        // Clear existing
        await Author.deleteMany({});
        await Ads.deleteMany({});

        await Author.insertMany(authorsData);
        await Ads.insertMany(adsData);

        return NextResponse.json({
            success: true,
            message: "Authors and Ads seeded successfully",
            authorsCount: authorsData.length,
            adsCount: adsData.length
        });
    } catch (error) {
        console.error("Seeding error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
