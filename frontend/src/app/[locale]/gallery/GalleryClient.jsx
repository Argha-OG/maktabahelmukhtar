"use client";

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

export default function GalleryClient() {
    const t = useTranslations('Gallery');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/gallery")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setImages(data.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-primary mb-2">{t('title')}</h1>
                <p className="text-gray-600">{t('subtitle')}</p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : images.length === 0 ? (
                <div className="text-center py-20 text-primary/40 font-medium">
                    No gallery images yet.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <div key={img._id} className="group relative h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all">
                            <img
                                src={img.imageUrl}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <div>
                                    <p className="text-white font-bold text-lg">{img.title}</p>
                                    {img.category && (
                                        <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{img.category}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
