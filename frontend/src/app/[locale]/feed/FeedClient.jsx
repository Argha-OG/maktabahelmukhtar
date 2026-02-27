"use client";

import { useEffect, useState, useMemo } from "react";
import { Search, Calendar as CalendarIcon, ArrowRight, Share2, Heart, Lightbulb } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Link } from "@/navigation";
import Pagination from "@/components/Pagination";

const FEED_PER_PAGE = 10;

export default function FeedClient() {
    const t = useTranslations('Feed');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterDate, setFilterDate] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        fetch("/api/feed")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setItems(data.data);
                setLoading(false);
            });
    }, []);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, filterDate, activeCategory]);

    // Compute categories with counts
    const categoriesInfo = useMemo(() => {
        const counts = { All: items.length };
        items.forEach(b => {
            if (b.type) {
                counts[b.type] = (counts[b.type] || 0) + 1;
            }
        });
        return counts;
    }, [items]);

    const filteredItems = useMemo(() => {
        let result = items;

        // Search filter
        if (searchTerm) {
            result = result.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.content.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (activeCategory !== "All") {
            result = result.filter(item => item.type === activeCategory);
        }

        // Date filter
        if (filterDate) {
            result = result.filter(item => {
                const itemDate = new Date(item.date).toISOString().split('T')[0];
                return itemDate === filterDate;
            });
        }

        // Default sort by date descending
        result.sort((a, b) => new Date(b.date) - new Date(a.date));

        return result;
    }, [items, searchTerm, activeCategory, filterDate]);

    const totalPages = Math.ceil(filteredItems.length / FEED_PER_PAGE);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * FEED_PER_PAGE,
        currentPage * FEED_PER_PAGE
    );

    const renderFeedItem = (item) => {
        if (item.type === 'Hadith') {
            return (
                <article key={item._id} className="bg-white rounded-xl shadow-sm border-t-4 border-gold-500 overflow-hidden relative group hover:shadow-md transition-shadow duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <span className="material-symbols-outlined text-8xl text-scholarly-blue-950">format_quote</span>
                    </div>
                    <div className="p-8 relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-blue-50 text-scholarly-blue-950 text-xs font-semibold uppercase tracking-wider rounded-sm border border-blue-100">{item.type}</span>
                            <span className="text-gray-400 text-sm flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" /> {new Date(item.date).toLocaleDateString()}
                            </span>
                        </div>
                        <div className="text-center my-6">
                            <Link href={`/feed/${item._id}`}>
                                <h2 className="font-serif text-2xl mb-4 text-slate-900 group-hover:text-scholarly-blue-900 transition-colors cursor-pointer">{item.title}</h2>
                            </Link>
                            <p className="font-serif text-xl italic text-gray-700 leading-relaxed max-w-2xl mx-auto">
                                "{item.content}"
                            </p>
                            <div className="mt-4 flex justify-center items-center">
                                <span className="h-px w-16 bg-gold-500"></span>
                                <span className="mx-3 text-sm text-gray-500 font-semibold uppercase tracking-wide">Maktabah El Mukhtar</span>
                                <span className="h-px w-16 bg-gold-500"></span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                            <div className="flex gap-4">
                                <button className="text-gray-400 hover:text-scholarly-blue-950 transition-colors" title="Share">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="text-gray-400 hover:text-red-500 transition-colors" title="Like">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>
                            <Link href={`/feed/${item._id}`} className="text-scholarly-blue-950 hover:text-slate-900 text-sm font-medium flex items-center gap-1">
                                Read Context <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </article>
            );
        } else if (item.type === 'Article') {
            return (
                <article key={item._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row hover:border-gold-500 transition-colors duration-300">
                    {item.image && (
                        <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 relative">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="absolute inset-0 bg-black/10"></div>
                            </div>
                        </div>
                    )}
                    <div className={`${item.image ? 'md:w-2/3' : 'w-full'} p-6 md:p-8 flex flex-col justify-center`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider rounded-sm">{item.type}</span>
                            <span className="text-gray-400 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <Link href={`/feed/${item._id}`}>
                            <h2 className="font-serif text-2xl font-bold text-scholarly-blue-950 mb-3 hover:text-slate-900 cursor-pointer">
                                {item.title}
                            </h2>
                        </Link>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {item.content}
                        </p>
                        <div className="mt-auto">
                            <Link href={`/feed/${item._id}`} className="inline-flex items-center text-sm font-semibold text-scholarly-blue-950 hover:underline">
                                Read Full Article
                            </Link>
                        </div>
                    </div>
                </article>
            );
        } else if (item.type === 'Quote') {
            return (
                <article key={item._id} className="bg-scholarly-blue-950 rounded-xl shadow-sm text-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold-500"></div>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    <div className="p-8 md:p-10 text-center relative z-10">
                        <Lightbulb className="w-10 h-10 mx-auto text-gold-500 mb-4" />
                        <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-6 font-light">
                            "{item.content}"
                        </blockquote>
                        <cite className="block text-gold-500 text-sm uppercase tracking-widest font-semibold not-italic">
                            — {item.title}
                        </cite>
                        <div className="mt-6 text-xs text-blue-200/60">
                            Posted on {new Date(item.date).toLocaleDateString()}
                        </div>
                    </div>
                </article>
            );
        } else {
            // Announcement
            return (
                <article key={item._id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 relative hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-50 text-scholarly-blue-950 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">campaign</span>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <Link href={`/feed/${item._id}`}>
                                    <h3 className="font-serif text-lg font-bold text-scholarly-blue-950 hover:text-slate-900">{item.title}</h3>
                                </Link>
                                <span className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-2">
                                {item.content}
                            </p>
                            <div className="flex gap-3">
                                <Link href={`/feed/${item._id}`} className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded hover:bg-blue-50 hover:text-scholarly-blue-950 transition-colors border border-gray-200">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            );
        }
    };

    return (
        <div className="flex flex-col w-full bg-sand-50 font-sans">
            {/* Header Section */}
            <header className="bg-white shadow-sm py-12 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-gold-500 uppercase tracking-widest text-xs font-semibold mb-2 block">Insights & Wisdom</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-scholarly-blue-950 mb-4">{t('journal_title') || "Daily Feed & Islamic Quotes"}</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        {t('journal_subtitle') || "Explore our daily curated selection of Hadith, inspirational Islamic quotes, and the latest updates from Maktabah El Mukhtar."}
                    </p>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-6 py-10 w-full">
                <div className="flex flex-col lg:flex-row gap-10">
                    <aside className="w-full lg:w-1/4 lg:flex-shrink-0 space-y-8 lg:sticky lg:top-24 lg:h-fit">
                        {/* Search Focus */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-serif text-lg font-semibold mb-4 text-scholarly-blue-950">Search Feed</h3>
                            <div className="relative">
                                <input
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-scholarly-blue-950 focus:outline-none text-sm"
                                    placeholder="Search keywords..."
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="text-gray-400 w-4 h-4" />
                                </div>
                            </div>
                        </div>

                        {/* Filter by Date */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-serif text-lg font-semibold mb-4 text-scholarly-blue-950">Filter by Date</h3>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-scholarly-blue-950 focus:outline-none text-sm mb-3 text-gray-600"
                                type="date"
                                value={filterDate}
                                onChange={(e) => setFilterDate(e.target.value)}
                            />
                            {(filterDate) && (
                                <button
                                    onClick={() => setFilterDate("")}
                                    className="w-full bg-slate-100 text-slate-700 py-2 rounded-md text-sm hover:bg-slate-200 transition"
                                >
                                    Clear Filter
                                </button>
                            )}
                        </div>

                        {/* Categories List */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="font-serif text-lg font-semibold mb-4 text-scholarly-blue-950">Categories</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <button onClick={() => setActiveCategory("All")} className={`w-full flex items-center justify-between group transition-colors ${activeCategory === "All" ? "text-scholarly-blue-950 font-bold" : "text-gray-600 hover:text-scholarly-blue-950"}`}>
                                        <span>All Entries</span>
                                        <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === "All" ? "bg-blue-50 text-scholarly-blue-950" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-scholarly-blue-950"}`}>{categoriesInfo["All"]}</span>
                                    </button>
                                </li>
                                {Object.keys(categoriesInfo).filter(k => k !== 'All').map(cat => (
                                    <li key={cat}>
                                        <button onClick={() => setActiveCategory(cat)} className={`w-full flex items-center justify-between group transition-colors ${activeCategory === cat ? "text-scholarly-blue-950 font-bold" : "text-gray-600 hover:text-scholarly-blue-950"}`}>
                                            <span>{cat}</span>
                                            <span className={`px-2 py-0.5 rounded-full text-xs ${activeCategory === cat ? "bg-blue-50 text-scholarly-blue-950" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-scholarly-blue-950"}`}>{categoriesInfo[cat]}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <section className="w-full lg:w-3/4 flex flex-col space-y-8">
                        {loading ? (
                            <div className="flex justify-center py-40">
                                <div className="animate-spin rounded-full h-12 w-12 border-4 border-scholarly-blue-950/20 border-t-scholarly-blue-950"></div>
                            </div>
                        ) : (
                            <>
                                {/* Results */}
                                {filteredItems.length === 0 && (
                                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                                        <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                                        <h3 className="text-xl font-serif text-scholarly-blue-950">{t('no_results_title') || "No entries found."}</h3>
                                        <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                                    </div>
                                )}

                                {paginatedItems.map((item, idx) => (
                                    <motion.div
                                        key={item._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        {renderFeedItem(item)}
                                    </motion.div>
                                ))}

                                {filteredItems.length > 0 && (
                                    <div className="mt-8">
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
            </main>
        </div>
    );
}
