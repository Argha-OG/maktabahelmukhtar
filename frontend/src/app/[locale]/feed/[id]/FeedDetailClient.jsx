"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Calendar, Quote, Bell, MessageSquare, ChevronLeft, Share2, BookOpen } from "lucide-react";
import { Link } from "@/navigation";
import { motion } from "framer-motion";

export default function FeedDetailClient({ id }) {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/feed?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setItem(data.data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold text-primary mb-4">Post Not Found</h1>
                <Link href="/feed" className="text-primary hover:underline flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" /> Back to Feed
                </Link>
            </div>
        );
    }

    const getIcon = (type) => {
        switch (type) {
            case 'Hadith': return <Quote className="h-8 w-8" />;
            case 'Announcement': return <Bell className="h-8 w-8" />;
            case 'Quote': return <MessageSquare className="h-8 w-8" />;
            case 'Article': return <BookOpen className="h-8 w-8" />;
            default: return <MessageSquare className="h-8 w-8" />;
        }
    };

    const getColorClass = (type) => {
        switch (type) {
            case 'Hadith': return 'text-primary bg-primary/10';
            case 'Announcement': return 'text-yellow-600 bg-yellow-500/10';
            case 'Quote': return 'text-blue-500 bg-blue-500/10';
            case 'Article': return 'text-emerald-600 bg-emerald-500/10';
            default: return 'text-primary bg-primary/10';
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header / Hero */}
            <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img
                    src={item.image || "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="container mx-auto px-4 pb-12">
                        <Link href="/feed" className="inline-flex items-center gap-2 text-primary font-bold mb-6 hover:gap-3 transition-all">
                            <ChevronLeft className="h-5 w-5" /> Back to Daily Feed
                        </Link>
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 rounded-2xl ${getColorClass(item.type)}`}>
                                {getIcon(item.type)}
                            </div>
                            <span className={`text-sm font-black uppercase tracking-[0.2em] ${getColorClass(item.type).split(' ')[0]}`}>
                                {item.type}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary-dark max-w-4xl leading-tight">
                            {item.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center justify-between gap-6 pb-10 mb-10 border-b border-primary/5">
                        <div className="flex items-center gap-4 text-primary/40 text-sm font-bold uppercase tracking-widest">
                            <Calendar className="h-4 w-4" />
                            {new Date(item.date).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-primary/30 uppercase tracking-widest mr-2">Share</span>
                            <button className="p-3 rounded-full glass-card hover:bg-primary/5 text-primary transition-all border-primary/5">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="prose prose-xl max-w-none prose-headings:text-primary-dark prose-p:text-primary/70 prose-p:leading-[1.8] prose-p:font-medium">
                        <p className="text-2xl text-primary/80 font-bold mb-10 leading-relaxed italic border-l-4 border-primary pl-8">
                            "{item.content}"
                        </p>

                        {item.description && (
                            <div className="mt-12 text-xl whitespace-pre-line text-primary/70 font-medium">
                                {item.description}
                            </div>
                        )}

                        {item.source && (
                            <div className="mt-20 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-1">Source / Attribution</span>
                                    <span className="text-xl font-bold text-primary-dark">— {item.source}</span>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
