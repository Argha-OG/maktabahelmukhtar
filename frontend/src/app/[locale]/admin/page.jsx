"use client";

import { useEffect, useState } from "react";
import { Book, Newspaper, Users, ArrowUpRight, Plus, Eye, Image as ImageIcon, Home, Loader2, Star, Shield, Mail, Trash, AlertTriangle } from "lucide-react";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        books: 0,
        feed: 0,
        authors: 0,
        gallery: 0,
        ads: 0,
        leads: 0
    });
    const [loading, setLoading] = useState(true);
    const [clearing, setClearing] = useState(false);

    const handleClearSeed = async () => {
        const confirm = window.prompt(`⚠️ DANGER ZONE\n\nThis will permanently delete ALL books, feed items, gallery images, authors, and ads from the database.\n\nType DELETE to confirm:`);
        if (confirm !== 'DELETE') {
            toast.error('Cancelled — you must type DELETE exactly.');
            return;
        }
        setClearing(true);
        try {
            const res = await fetch('/api/admin/clear-seed', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                toast.success(`Cleared: ${data.deleted.books} books, ${data.deleted.feed} feed, ${data.deleted.gallery} gallery, ${data.deleted.authors} authors, ${data.deleted.ads} ads.`);
                // Refresh stats
                setStats({ books: 0, feed: 0, authors: 0, gallery: 0, ads: 0, leads: stats.leads });
            } else {
                toast.error(data.error || 'Clear failed.');
            }
        } catch (e) {
            toast.error('Network error while clearing data.');
        } finally {
            setClearing(false);
        }
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [booksRes, feedRes, authorsRes, galleryRes, adsRes, leadsRes] = await Promise.all([
                    fetch("/api/books"),
                    fetch("/api/feed"),
                    fetch("/api/admin/authors"),
                    fetch("/api/admin/gallery"),
                    fetch("/api/admin/ads"),
                    fetch("/api/admin/leads")
                ]);

                const [booksData, feedData, authorsData, galleryData, adsData, leadsData] = await Promise.all([
                    booksRes.json(),
                    feedRes.json(),
                    authorsRes.json(),
                    galleryRes.json(),
                    adsRes.json(),
                    leadsRes.json()
                ]);

                setStats({
                    books: booksData.data?.length || 0,
                    feed: feedData.data?.length || 0,
                    authors: authorsData.data?.length || 0,
                    gallery: galleryData.data?.length || 0,
                    ads: adsData.data?.length || 0,
                    leads: leadsData.data?.length || 0
                });
            } catch (error) {
                console.error("Failed to fetch stats", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const cards = [
        { title: "Books Catalog", value: stats.books, icon: Book, color: "bg-blue-600", link: "/admin/books" },
        { title: "Journal Posts", value: stats.feed, icon: Newspaper, color: "bg-emerald-600", link: "/admin/feed" },
        { title: "Our Scholars", value: stats.authors, icon: Users, color: "bg-purple-600", link: "/admin/authors" },
        { title: "Gallery Events", value: stats.gallery, icon: ImageIcon, color: "bg-amber-600", link: "/admin/gallery" },
        { title: "Hero Banners", value: stats.ads, icon: Home, color: "bg-rose-600", link: "/admin/ads" },
        { title: "Inbound Leads", value: stats.leads, icon: Mail, color: "bg-indigo-600", link: "/admin/leads" },
    ];

    if (loading) return (
        <div className="h-96 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
            <p className="text-primary/40 font-black uppercase tracking-widest text-xs">Synchronizing Repository...</p>
        </div>
    );

    return (
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
                <div>
                    <h1 className="text-4xl font-black text-primary-dark tracking-tight">System Overview</h1>
                    <p className="text-primary/60 font-medium mt-1">Welcome to the Maktabah El Mukhtar Institutional Command Center.</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/30 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Operational Status: Optimal
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-8 rounded-[2rem] shadow-xl shadow-primary/5 border border-primary/5 flex items-center justify-between group hover:border-primary/20 transition-all"
                    >
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">{card.title}</p>
                            <h3 className="text-4xl font-black text-primary-dark tracking-tight">{card.value}</h3>
                            <Link href={card.link} className="text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center mt-6 group-hover:gap-2 transition-all">
                                Manage Module <ArrowUpRight className="h-3 w-3" />
                            </Link>
                        </div>
                        <div className={`${card.color} p-5 rounded-[1.5rem] text-white shadow-2xl shadow-current/20`}>
                            <card.icon className="h-8 w-8" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-xl shadow-primary/5 border border-primary/5">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-primary-dark tracking-tight">Command Shortcuts</h2>
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <Link href="/admin/books" className="p-6 bg-primary/5 rounded-3xl hover:bg-primary hover:text-white transition-all flex flex-col items-center gap-3 group">
                            <Plus className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-center">New Book</span>
                        </Link>
                        <Link href="/admin/feed" className="p-6 bg-primary/5 rounded-3xl hover:bg-emerald-600 hover:text-white transition-all flex flex-col items-center gap-3 group">
                            <Plus className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-center">New Article</span>
                        </Link>
                        <Link href="/admin/authors" className="p-6 bg-primary/5 rounded-3xl hover:bg-purple-600 hover:text-white transition-all flex flex-col items-center gap-3 group">
                            <Plus className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-center">New Author</span>
                        </Link>
                        <Link href="/" className="p-6 bg-primary/5 rounded-3xl hover:bg-gray-800 hover:text-white transition-all flex flex-col items-center gap-3 group">
                            <Eye className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-center">Live Site</span>
                        </Link>
                    </div>
                </div>

                <div className="bg-primary-dark p-10 rounded-[3rem] text-white flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight mb-4 text-white">Institutional Support</h2>
                        <p className="text-white/60 font-medium text-sm leading-relaxed mb-8">Need assistance with the repository or management tools? Our technical team is available for elite support.</p>
                    </div>
                    <Link href="https://wa.me/60195328616" target="_blank" className="w-full bg-white text-primary-dark py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-center hover:bg-primary hover:text-white transition-all shadow-xl">
                        Contact Tech Support
                    </Link>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="border-2 border-red-200 bg-red-50 p-8 rounded-[2rem]">
                <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                    <h2 className="text-lg font-black text-red-700 uppercase tracking-widest">Danger Zone</h2>
                </div>
                <p className="text-sm text-red-600 font-medium mb-6 leading-relaxed">
                    <strong>Clear All Seeded Data</strong> — permanently deletes every book, feed item, gallery image, author, and ad from the database. Use this to remove old demo/seeded records so only your real admin-added data remains. This action is <strong>irreversible</strong>.
                </p>
                <button
                    onClick={handleClearSeed}
                    disabled={clearing}
                    className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                    {clearing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash className="h-4 w-4" />}
                    {clearing ? 'Clearing...' : 'Clear All Data'}
                </button>
            </div>
        </div>
    );
}
