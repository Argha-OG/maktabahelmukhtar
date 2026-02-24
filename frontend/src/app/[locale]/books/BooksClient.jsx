"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Search, BookOpen } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function BooksClient() {
    const t = useTranslations('Books');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setBooks(data.data);
                setLoading(false);
            });
    }, []);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-primary mb-2">{t('title')}</h1>
                    <p className="text-gray-600">{t('subtitle')}</p>
                </div>
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder={t('search')}
                        className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-primary focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredBooks.map((book) => (
                        <div key={book._id} className="bg-white border rounded-xl overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden bg-gray-100">
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2">
                                    <span className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                        {book.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-5 flex-grow flex flex-col">
                                <h3 className="font-bold text-lg mb-1 text-primary group-hover:text-primary-dark line-clamp-2">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-3 italic">By {book.author}</p>
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                                    {book.description}
                                </p>
                                <a
                                    href={`https://wa.me/${book.whatsappLink}?text=I would like to order: ${book.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-primary text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
                                >
                                    <MessageSquare className="h-4 w-4" /> {t('order')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && filteredBooks.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <p className="text-xl">{t('no_results')}</p>
                </div>
            )}
        </div>
    );
}
