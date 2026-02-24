"use client";

import { useTranslations } from 'next-intl';

export default function GalleryClient() {
    const t = useTranslations('Gallery');
    const images = [
        { src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000", alt: t('img1_alt') },
        { src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000", alt: t('img2_alt') },
        { src: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1000", alt: t('img3_alt') },
        { src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000", alt: t('img4_alt') },
        { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000", alt: t('img5_alt') },
        { src: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=1000", alt: t('img6_alt') },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-primary mb-2">{t('title')}</h1>
                <p className="text-gray-600">{t('subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                    <div key={idx} className="group relative h-72 overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                            <p className="text-white font-bold text-lg">{img.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
