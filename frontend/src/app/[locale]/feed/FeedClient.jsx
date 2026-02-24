"use client";

import { useEffect, useState } from "react";
import { Quote, MessageSquare, Bell, Calendar } from "lucide-react";
import { useTranslations } from 'next-intl';

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

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-primary mb-2">{t('title')}</h1>
                <p className="text-gray-600">{t('subtitle')}</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="max-w-4xl mx-auto space-y-8">
                    {items.map((item) => (
                        <div key={item._id} className={`p-8 rounded-2xl border-l-8 bg-white shadow-sm transition-all hover:shadow-md ${item.type === 'Hadith' ? 'border-primary' :
                            item.type === 'Announcement' ? 'border-yellow-500' : 'border-blue-300'
                            }`}>
                            <div className="flex items-center gap-3 mb-4">
                                {item.type === 'Hadith' && <Quote className="h-6 w-6 text-primary" />}
                                {item.type === 'Announcement' && <Bell className="h-6 w-6 text-yellow-500" />}
                                {item.type === 'Quote' && <MessageSquare className="h-6 w-6 text-blue-300" />}
                                <span className={`text-sm font-bold uppercase tracking-wider ${item.type === 'Hadith' ? 'text-primary' :
                                    item.type === 'Announcement' ? 'text-yellow-600' : 'text-blue-400'
                                    }`}>
                                    {item.type}
                                </span>
                                <span className="text-gray-400 text-sm ml-auto flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {new Date(item.date).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                                "{item.content}"
                            </p>
                            {item.source && (
                                <p className="text-sm font-semibold text-primary/70">— {item.source}</p>
                            )}
                        </div>
                    ))}

                    {items.length === 0 && (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
                            <Calendar className="h-16 w-16 mx-auto mb-4 opacity-10" />
                            <p className="text-xl">{t('no_results')}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
