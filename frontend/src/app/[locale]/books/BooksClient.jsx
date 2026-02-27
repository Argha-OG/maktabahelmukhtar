"use client";

import { useEffect, useState, useMemo } from "react";
import { Search, BookOpen, Edit, FileText, Printer, MessageSquare, ShoppingCart } from "lucide-react";
import { useTranslations } from 'next-intl';
import BookCard from "@/components/BookCard";
import Pagination from "@/components/Pagination";
import { Link } from "@/navigation";

const BOOKS_PER_PAGE = 12;

export default function BooksClient() {
    const t = useTranslations('Books');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState("Latest");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setBooks(data.data);
                setLoading(false);
            });
    }, []);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, activeCategory, sortBy]);

    // Compute categories with counts
    const categoriesInfo = useMemo(() => {
        const counts = { All: books.length };
        books.forEach(b => {
            if (b.category) {
                counts[b.category] = (counts[b.category] || 0) + 1;
            }
        });
        return counts;
    }, [books]);

    const filteredBooks = useMemo(() => {
        let result = books;

        // Search filter
        if (searchTerm) {
            result = result.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (activeCategory !== "All") {
            result = result.filter(book => book.category === activeCategory);
        }

        // Sort
        if (sortBy === "Price: Low to High") {
            result.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
        } else if (sortBy === "Price: High to Low") {
            result.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
        } else if (sortBy === "Best Seller") {
            result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        } else {
            // "Latest" - default order or sort by date if available
        }

        return result;
    }, [books, searchTerm, activeCategory, sortBy]);

    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const paginatedBooks = filteredBooks.slice(
        (currentPage - 1) * BOOKS_PER_PAGE,
        currentPage * BOOKS_PER_PAGE
    );

    return (
        <div className="flex-grow container mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 lg:h-fit">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    {/* Search inside sidebar or above categories is good. Let's add Search above. */}
                    <div className="relative w-full mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder={t('search')}
                            className="w-full text-sm pl-9 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-scholarly-blue-950 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <h3 className="font-serif text-xl font-bold mb-6 text-scholarly-blue-950 pb-2 border-b border-slate-100">Categories</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className={`w-full flex items-center justify-between group transition-colors ${activeCategory === "All" ? "text-scholarly-blue-950 font-medium" : "text-slate-600 hover:text-scholarly-blue-950"}`}
                            >
                                <span>All Books</span>
                                <span className={`${activeCategory === "All" ? "bg-blue-50 text-scholarly-blue-950" : "bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-scholarly-blue-950"} px-2 py-0.5 rounded text-xs transition-colors`}>{categoriesInfo["All"] || 0}</span>
                            </button>
                        </li>
                        {Object.keys(categoriesInfo).filter(c => c !== "All").map(cat => (
                            <li key={cat}>
                                <button
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full flex items-center justify-between group transition-colors ${activeCategory === cat ? "text-scholarly-blue-950 font-medium" : "text-slate-600 hover:text-scholarly-blue-950"}`}
                                >
                                    <span>{cat}</span>
                                    <span className={`${activeCategory === cat ? "bg-blue-50 text-scholarly-blue-950" : "bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-scholarly-blue-950"} px-2 py-0.5 rounded text-xs transition-colors`}>{categoriesInfo[cat]}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-serif text-xl font-bold mt-8 mb-6 text-scholarly-blue-950 pb-2 border-b border-slate-100">Services</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link className="flex items-center gap-2 group text-slate-600 hover:text-scholarly-blue-950 transition-colors" href="/services">
                                <span className="material-symbols-outlined text-[18px]">edit_note</span>
                                <span>Writing</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2 group text-slate-600 hover:text-scholarly-blue-950 transition-colors" href="/services">
                                <span className="material-symbols-outlined text-[18px]">rate_review</span>
                                <span>Editing</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2 group text-slate-600 hover:text-scholarly-blue-950 transition-colors" href="/services">
                                <span className="material-symbols-outlined text-[18px]">print</span>
                                <span>Publishing</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="mt-8 p-4 bg-scholarly-blue-950 rounded-lg text-white text-center">
                        <p className="font-serif text-lg font-bold mb-2">Want to Publish Your Work?</p>
                        <p className="text-xs text-blue-100 mb-4">We are ready to help you realize your writing dreams.</p>
                        <Link href="/contact" className="block w-full text-center bg-white text-scholarly-blue-950 py-2 rounded text-sm font-semibold hover:bg-slate-100 transition-colors">
                            Contact an Editor
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <section className="flex-grow w-full">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-slate-900 mb-1">{t('title')}</h2>
                        <p className="text-sm text-slate-500">Showing {filteredBooks.length} results</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        {/* Mobile Category Dropdown (shown on mobile, hidden on lg as sidebar is visible) */}
                        <div className="lg:hidden flex items-center gap-3 w-full">
                            <span className="text-sm text-slate-500 whitespace-nowrap">Category:</span>
                            <select
                                value={activeCategory}
                                onChange={(e) => setActiveCategory(e.target.value)}
                                className="w-full border-slate-300 rounded-md text-sm focus:ring-scholarly-blue-950 focus:border-scholarly-blue-950 py-2 px-3 bg-white shadow-sm"
                            >
                                <option value="All">All Books</option>
                                {Object.keys(categoriesInfo).filter(c => c !== "All").map(cat => (
                                    <option key={cat} value={cat}>{cat} ({categoriesInfo[cat]})</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="min-w-[150px] w-full sm:w-auto border border-slate-300 rounded-md text-sm focus:ring-scholarly-blue-950 focus:border-scholarly-blue-950 py-2 px-3 bg-white shadow-sm"
                            >
                                <option>Latest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Best Seller</option>
                            </select>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-scholarly-blue-950"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {paginatedBooks.map((book) => (
                                <BookCard key={book._id} book={book} />
                            ))}
                        </div>

                        {filteredBooks.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-20" />
                                <p className="text-xl">{t('no_results')}</p>
                            </div>
                        )}

                        {filteredBooks.length > 0 && (
                            <div className="mt-12 flex justify-center">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={(page) => {
                                        setCurrentPage(page);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                />
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}
