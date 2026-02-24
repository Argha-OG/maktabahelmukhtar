"use client";

import { useEffect, useState } from "react";
import { Book, Newspaper, Users, ArrowUpRight, Plus, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
    const [stats, setStats] = useState({ books: 0, feed: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            const [booksRes, feedRes] = await Promise.all([
                fetch("/api/books"),
                fetch("/api/feed")
            ]);
            const booksData = await booksRes.json();
            const feedData = await feedRes.json();

            setStats({
                books: booksData.data?.length || 0,
                feed: feedData.data?.length || 0
            });
            setLoading(false);
        };
        fetchStats();
    }, []);

    const cards = [
        { title: "Total Books", value: stats.books, icon: Book, color: "bg-blue-500", link: "/admin/books" },
        { title: "Feed Items", value: stats.feed, icon: Newspaper, color: "bg-green-500", link: "/admin/feed" },
        { title: "Admin Users", value: 1, icon: Users, color: "bg-purple-500", link: "#" },
    ];

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back to the Maktabah Admin Portal.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">{card.title}</p>
                            <h3 className="text-3xl font-bold mt-1 text-gray-800">{card.value}</h3>
                            <Link href={card.link} className="text-primary text-xs font-semibold flex items-center mt-4 hover:underline">
                                Manage all <ArrowUpRight className="h-3 w-3 ml-1" />
                            </Link>
                        </div>
                        <div className={`${card.color} p-4 rounded-2xl text-white`}>
                            <card.icon className="h-8 w-8" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold text-gray-800">Quick Actions</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/books" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors flex flex-col items-center gap-2">
                            <Plus className="h-6 w-6 text-primary" />
                            <span className="text-sm font-medium">Add New Book</span>
                        </Link>
                        <Link href="/admin/feed" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors flex flex-col items-center gap-2">
                            <Plus className="h-6 w-6 text-green-500" />
                            <span className="text-sm font-medium">Post Daily Update</span>
                        </Link>
                        <Link href="/books" className="p-4 border rounded-xl hover:bg-gray-50 transition-colors flex flex-col items-center gap-2">
                            <Eye className="h-6 w-6 text-blue-400" />
                            <span className="text-sm font-medium">View Website</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
