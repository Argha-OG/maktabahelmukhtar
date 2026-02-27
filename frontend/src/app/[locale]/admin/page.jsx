"use client";

import { useEffect, useState } from "react";
import { Book, Newspaper, Users, ArrowUpRight, Plus, Eye, Image as ImageIcon, Home, Loader2, Star, Shield, Mail, Trash, MessageCircle, Library, TrendingUp } from "lucide-react";
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

    if (loading) return (
        <div className="h-96 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 text-blue-800 animate-spin" />
            <p className="text-blue-800/40 font-black uppercase tracking-widest text-xs">Loading Dashboard...</p>
        </div>
    );

    return (
        <div className="space-y-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Book Stat */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-800/10 rounded-lg text-blue-800">
                            <Library className="w-6 h-6" />
                        </div>
                        <span className="flex items-center text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                            Active <TrendingUp className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Books</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.books}</h3>
                </div>

                {/* Feed Stat */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-emerald-600/10 rounded-lg text-emerald-600">
                            <Newspaper className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Daily Feed Posts</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.feed}</h3>
                </div>

                {/* Leads Stat */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gold-500/20 dark:border-gold-500/10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-gold-600">
                            <Mail className="w-6 h-6" />
                        </div>
                        {stats.leads > 0 && (
                            <span className="flex items-center text-xs font-medium text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
                                Needs Action
                            </span>
                        )}
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Leads</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.leads}</h3>
                </div>

                {/* Authors Stat */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-600/10 rounded-lg text-purple-600">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Writers & Scholars</p>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{stats.authors}</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Management Module Links */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden flex-1">
                        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Management Modules</h3>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-700">
                            {[
                                { title: "Manage Books", desc: "Add or update the book catalog", link: "/admin/books", color: "text-blue-600", bg: "bg-blue-100", icon: Book },
                                { title: "Daily Feed", desc: "Manage Islamic reminders and articles", link: "/admin/feed", color: "text-emerald-600", bg: "bg-emerald-100", icon: Newspaper },
                                { title: "Writers Directory", desc: "Add or remove scholars and writers", link: "/admin/authors", color: "text-purple-600", bg: "bg-purple-100", icon: Users },
                                { title: "Media Gallery", desc: "Manage images and events", link: "/admin/gallery", color: "text-amber-600", bg: "bg-amber-100", icon: ImageIcon },
                            ].map((mod, i) => (
                                <Link key={i} href={mod.link} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex gap-4 items-center">
                                    <div className={`w-10 h-10 rounded-full ${mod.bg} dark:bg-slate-700 flex items-center justify-center shrink-0 ${mod.color}`}>
                                        <mod.icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">{mod.title}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{mod.desc}</p>
                                    </div>
                                    <ArrowUpRight className="text-slate-400 w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">

                    {/* System Status */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <div className="relative z-10">
                            <h4 className="font-bold text-sm text-slate-300 uppercase tracking-wider mb-4">System Status</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
                                        <span className="text-sm font-medium">Database (MongoDB)</span>
                                    </div>
                                    <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Healthy</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></span>
                                        <span className="text-sm font-medium">Next.js App Router</span>
                                    </div>
                                    <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Optimal</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="text-xs text-slate-400">All systems operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
