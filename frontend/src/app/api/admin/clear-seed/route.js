import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";

// Models
import Book from "@/models/Book";
import DailyFeed from "@/models/DailyFeed";
import Gallery from "@/models/Gallery";
import Author from "@/models/Author";
import Ads from "@/models/Ads";

/**
 * POST /api/admin/clear-seed
 * Deletes ALL records from Books, Feed, Gallery, Authors, Ads.
 * USE ONLY ONCE to wipe seeded/demo data.
 * Protected — only callable from the admin panel (future: add session check).
 */
export async function POST() {
    try {
        await dbConnect();

        const [books, feed, gallery, authors, ads] = await Promise.all([
            Book.deleteMany({}),
            DailyFeed.deleteMany({}),
            Gallery.deleteMany({}),
            Author.deleteMany({}),
            Ads.deleteMany({}),
        ]);

        return NextResponse.json({
            success: true,
            message: "All seeded data cleared successfully.",
            deleted: {
                books: books.deletedCount,
                feed: feed.deletedCount,
                gallery: gallery.deletedCount,
                authors: authors.deletedCount,
                ads: ads.deletedCount,
            }
        });
    } catch (err) {
        console.error("Clear seed error:", err);
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
