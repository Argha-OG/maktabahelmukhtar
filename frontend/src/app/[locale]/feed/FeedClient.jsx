"use client";

import { useEffect, useState } from "react";
import { Quote, MessageSquare, Bell, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Link } from "@/navigation";

export default function FeedClient() {
    const t = useTranslations('Feed');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/feed")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setItems(data.data);
                setLoading(false);
            });
    }, []);

    const getIcon = (type) => {
        switch (type) {
            case 'Hadith': return <Quote className="h-5 w-5" />;
            case 'Announcement': return <Bell className="h-5 w-5" />;
            case 'Quote': return <MessageSquare className="h-5 w-5" />;
            case 'Article': return <BookOpen className="h-5 w-5" />;
            default: return <MessageSquare className="h-5 w-5" />;
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
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="bg-primary/5 py-24 border-b border-primary/5">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{t('journal_label')}</span>
                        <h1 className="text-5xl font-black text-primary-dark mb-6 tracking-tight">{t('journal_title')}</h1>
                        <p className="text-xl text-primary/60 font-medium leading-relaxed">
                            {t('journal_subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                {loading ? (
                    <div className="flex justify-center py-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card group flex flex-col h-full border-primary/5 shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all overflow-hidden"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Link href={`/feed/${item._id}`}>
                                        <img
                                            src={item.image || "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800"}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </Link>
                                    <div className="absolute top-4 left-4">
                                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 font-bold text-[10px] uppercase tracking-widest ${getColorClass(item.type)}`}>
                                            {getIcon(item.type)}
                                            {item.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-primary/40 text-[10px] font-black uppercase tracking-widest mb-4">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(item.date).toLocaleDateString()}
                                    </div>
                                    <Link href={`/feed/${item._id}`}>
                                        <h3 className="text-2xl font-black text-primary-dark mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <p className="text-primary/60 line-clamp-3 mb-8 flex-grow font-medium leading-relaxed italic">
                                        "{item.content}"
                                    </p>

                                    <Link
                                        href={`/feed/${item._id}`}
                                        className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                                    >
                                        {t('read_selection')} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}

                        {items.length === 0 && (
                            <div className="col-span-full text-center py-40 glass-card bg-primary/5 border-dashed border-2 border-primary/10">
                                <Calendar className="h-16 w-16 mx-auto mb-6 text-primary/20" />
                                <h3 className="text-2xl font-bold text-primary-dark">{t('no_results_title')}</h3>
                                <p className="text-primary/60">{t('no_results_subtitle')}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
