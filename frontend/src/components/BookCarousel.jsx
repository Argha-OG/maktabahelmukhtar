"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCard from "./BookCard";

export default function BookCarousel({ books }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % books.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [books.length]);

    if (!books || books.length === 0) return null;

    return (
        <div className="relative w-full max-w-6xl mx-auto group">
            <div className="overflow-hidden px-4 py-10">
                <motion.div
                    className="flex gap-6"
                    animate={{ x: `calc(-${currentIndex * 100}% / 4)` }} // Simplified logic for demo
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {books.map((book) => (
                        <div key={book._id} className="min-w-[280px] w-full md:w-1/4 flex-shrink-0">
                            <BookCard book={book} />
                        </div>
                    ))}
                </motion.div>
            </div>

            <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 -ml-6"
            >
                <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/20 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 -mr-6"
            >
                <ChevronRight className="h-6 w-6 text-primary" />
            </button>
        </div>
    );
}
