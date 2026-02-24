"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    if (totalPages <= 1) return null;

    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= left && i <= right)) {
            pages.push(i);
        }
    }

    // Insert ellipsis
    const withEllipsis = [];
    let prev = null;
    for (const page of pages) {
        if (prev && page - prev > 1) {
            withEllipsis.push("...");
        }
        withEllipsis.push(page);
        prev = page;
    }

    return (
        <div className="flex items-center justify-center gap-1 mt-12 select-none">
            {/* Prev button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Page buttons */}
            {withEllipsis.map((page, i) =>
                page === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-3 py-2 text-primary/40 font-bold">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${page === currentPage
                                ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                                : "text-primary border border-primary/20 hover:bg-primary hover:text-white"
                            }`}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
}
