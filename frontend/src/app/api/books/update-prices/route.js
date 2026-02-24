import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Book from "@/models/Book";

export async function GET() {
    try {
        await dbConnect();

        const books = await Book.find({});

        for (let i = 0; i < books.length; i++) {
            const book = books[i];
            // Random price between 35 and 125
            const randomPrice = Math.floor(Math.random() * (125 - 35 + 1) + 35);
            const isBestSeller = i % 3 === 0; // Every 3rd book is a best seller

            await Book.findByIdAndUpdate(book._id, {
                price: randomPrice,
                isBestSeller: isBestSeller
            });
        }

        return NextResponse.json({
            success: true,
            message: `Updated ${books.length} books with prices and best-seller tags.`,
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
