"use client";

import { motion } from "framer-motion";
import { MessageSquare, ShoppingCart, Plus } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from 'next-intl';

import { useCart } from "@/context/CartContext";

export default function BookCard({ book }) {
    const t = useTranslations('Books');
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card group flex flex-col h-full overflow-hidden"
        >
            <div className="relative h-72 overflow-hidden">
                <Link href={`/books/${book._id}`}>
                    <img
                        src={book.coverImage}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                    <div className="w-full bg-white/20 backdrop-blur-md text-white border border-white/30 py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-white/40 transition-all font-bold">
                        <Plus className="h-4 w-4" /> {t('view_all')}
                    </div>
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                    <span className="bg-primary/80 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                        {book.category}
                    </span>
                    {book.isBestSeller && (
                        <span className="bg-yellow-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-lg">
                            {t('best_seller')}
                        </span>
                    )}
                </div>
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-2 flex justify-between items-start gap-2">
                    <div className="flex-grow">
                        <Link href={`/books/${book._id}`}>
                            <h3 className="font-bold text-lg text-primary-dark line-clamp-1 group-hover:text-primary transition-colors cursor-pointer">
                                {book.title}
                            </h3>
                        </Link>
                        <p className="text-xs text-primary/60 italic font-medium">By {book.author}</p>
                    </div>
                    <div className="text-right flex flex-col items-end">
                        <span className="text-primary font-black text-xl">RM{book.price || '0'}</span>
                        <span className="text-[10px] text-primary/40 font-bold uppercase">Price</span>
                    </div>
                </div>

                <p className="text-sm text-primary/70 line-clamp-2 mb-6 flex-grow leading-relaxed">
                    {book.description}
                </p>

                <div className="flex gap-2">
                    <button
                        onClick={() => addToCart(book)}
                        className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-md shadow-primary/20"
                    >
                        <ShoppingCart className="h-4 w-4" /> {t('add_to_cart')}
                    </button>
                    <a
                        href={`https://wa.me/${book.whatsappLink}?text=I would like to order: ${book.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/50 backdrop-blur-sm border border-primary/10 p-2.5 rounded-xl text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                        title={t('order')}
                    >
                        <MessageSquare className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
