"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShoppingCart } from "lucide-react";
import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';

import { useCart } from "@/context/CartContext";

export default function BookCard({ book }) {
    const t = useTranslations('Books');
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="book-card bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-all group/card"
        >
            <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center bg-[#f4f1ea] text-[#8c8c8c]">
                    <Link href={`/books/${book._id}`} className="w-full h-full block">
                        <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        />
                    </Link>
                </div>
                {book.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
                        TERLARIS
                    </div>
                )}
                <div
                    onClick={() => addToCart(book)}
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer hover:bg-gold-500 hover:text-white transition-colors z-20"
                    title={t('add_to_cart')}
                >
                    <ShoppingCart className="text-scholarly-blue-950 w-5 h-5 group-hover/card:text-scholarly-blue-950 transition-colors" />
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                {book.category && (
                    <div className="mb-1 text-xs text-scholarly-blue-900 font-semibold uppercase tracking-wide">
                        {book.category}
                    </div>
                )}
                <Link href={`/books/${book._id}`}>
                    <h3 className="font-serif text-xl font-bold text-slate-900 leading-tight mb-2 hover:text-scholarly-blue-900 cursor-pointer line-clamp-2">
                        {book.title}
                    </h3>
                </Link>
                <p className="text-sm text-slate-500 mb-4 truncate">Oleh {book.author}</p>

                <div className="mt-auto flex items-end justify-between border-t border-slate-100 pt-4">
                    <div>
                        <span className="block text-xs text-slate-400 mb-0.5">Harga</span>
                        <span className="text-lg font-bold text-slate-900">
                            RM {book.price ? parseFloat(book.price).toFixed(2) : '0.00'}
                        </span>
                    </div>
                </div>

                <a
                    href={`https://wa.me/${book.whatsappLink || '60195328616'}?text=${encodeURIComponent(`Assalam Admin, saya ingin memesan:\n📚 Buku: ${book.title}\n💰 Harga: RM ${book.price}\n\nSila konfirmasi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm"
                >
                    <MessageSquare className="w-5 h-5" /> Beli di WhatsApp
                </a>
            </div>
        </motion.div>
    );
}
