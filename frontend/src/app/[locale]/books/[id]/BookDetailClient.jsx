"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
    MessageSquare,
    ShoppingCart,
    ArrowLeft,
    ChevronRight,
    BookOpen,
    Star,
    Share2,
    Clock,
    Globe,
    Building,
    CheckCircle,
    Tag,
    ArrowRight
} from "lucide-react";
import { Link, useRouter } from "@/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from 'next-intl';
import BookCard from "@/components/BookCard";

export default function BookDetailClient({ id }) {
    const t = useTranslations('Books');
    const [book, setBook] = useState(null);
    const [relatedBooks, setRelatedBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const { addToCart } = useCart();
    const router = useRouter();

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const bookRes = await fetch(`/api/books/${id}`);
                const bookData = await bookRes.json();

                if (bookData.success) {
                    setBook(bookData.data);

                    // Fetch related books by category
                    const allRes = await fetch("/api/books");
                    const allData = await allRes.json();
                    if (allData.success) {
                        const related = allData.data
                            .filter(b => b.category === bookData.data.category && b._id !== id)
                            .slice(0, 4);
                        setRelatedBooks(related);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching book details:", error);
                setLoading(false);
            }
        };

        fetchBookData();

        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
    );

    if (!book) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">{t('no_results')}</h2>
            <Link href="/books" className="text-primary hover:underline flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> {t('view_all')}
            </Link>
        </div>
    );

    return (
        <div className="min-h-screen pb-20 pt-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-primary/50 mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">{t('title')}</Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href="/books" className="hover:text-primary transition-colors">{t('catalog')}</Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-primary font-medium truncate max-w-[200px]">{book.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-5"
                    >
                        <div className="glass-card p-4 sticky top-32">
                            <div className="aspect-[3/4] relative overflow-hidden rounded-xl shadow-2xl">
                                <img
                                    src={book.coverImage}
                                    alt={book.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className="bg-primary/20 text-primary-dark text-[10px] font-bold px-4 py-1 uppercase tracking-[0.2em] flex items-center justify-center text-center"
                                style={{
                                    clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                                    minWidth: "100px",
                                    paddingTop: "12px",
                                    paddingBottom: "12px"
                                }}
                            >
                                {book.category}
                            </div>
                            <div className="flex items-center gap-1 text-yellow-500 ml-2">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="text-sm font-bold text-primary-dark">4.9</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-2 leading-tight">
                                    {book.title}
                                </h1>
                                <p className="text-xl text-primary/60 italic">By {book.author}</p>
                            </div>
                            <div className="bg-primary shadow-2xl shadow-primary/20 p-6 rounded-3xl text-white min-w-[180px] text-center transform hover:scale-105 transition-transform">
                                <span className="block text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">{t('institutional_price')}</span>
                                <span className="text-4xl font-black">RM {book.price || '0'}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 items-center mb-12">
                            <button
                                onClick={() => addToCart(book)}
                                className="btn-premium bg-primary text-white hover:bg-primary-dark px-10 py-4 shadow-xl shadow-primary/30 flex items-center gap-3 text-lg flex-1 md:flex-none"
                            >
                                <ShoppingCart className="h-5 w-5" /> {t('add_to_cart')}
                            </button>
                            <a
                                href={`https://wa.me/601136787525?text=Assalam%20admin%2C%20saya%20berminat%20dengan%20buku%3A%20${encodeURIComponent(book.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-premium bg-white/50 backdrop-blur-md border border-primary/10 text-primary hover:bg-white/80 px-10 py-4 flex items-center gap-3 text-lg flex-1 md:flex-none"
                            >
                                <MessageSquare className="h-5 w-5" /> {t('ask_whatsapp')}
                            </a>
                            <button className="p-4 rounded-full glass-card hover:bg-primary/5 transition-colors border-primary/5">
                                <Share2 className="h-5 w-5 text-primary" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 border-y border-primary/5 mb-12 bg-white/20 rounded-3xl px-6">
                            {[
                                { icon: CheckCircle, label: t('status_label'), value: t('status_available'), color: "text-green-500" },
                                { icon: Tag, label: t('type_label'), value: t('type_paperback'), color: "text-primary" },
                                { icon: Globe, label: t('language_label'), value: t('language_value'), color: "text-primary" },
                                { icon: Building, label: t('publisher_label'), value: t('publisher_value'), color: "text-primary" }
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className={`p-2 rounded-xl bg-white/50 mb-2 ${stat.color}`}>
                                        <stat.icon className="h-4 w-4" />
                                    </div>
                                    <p className="text-[10px] text-primary/40 uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                                    <p className="text-xs font-bold text-primary-dark">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Description Section */}
                <div className="max-w-4xl mx-auto space-y-24 mt-32">
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-primary/10 flex-grow"></div>
                            <h2 className="text-3xl font-bold text-primary-dark flex items-center gap-3 px-6 whitespace-nowrap">
                                <BookOpen className="h-8 w-8 text-primary" />
                                {t('synopsis_title')}
                            </h2>
                            <div className="h-px bg-primary/10 flex-grow"></div>
                        </div>
                        <div className="glass-card p-10 md:p-20 border-primary/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                            <p className="text-xl text-primary/70 leading-[1.8] whitespace-pre-line relative z-10 font-medium">
                                {book.description}
                            </p>
                        </div>
                    </motion.section>

                    {/* Author Profile Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px bg-primary/10 flex-grow"></div>
                            <h2 className="text-3xl font-bold text-primary-dark px-6">{t('about_author')}</h2>
                            <div className="h-px bg-primary/10 flex-grow"></div>
                        </div>
                        <div className="glass-card p-10 md:p-14 border-primary/5 flex flex-col md:flex-row gap-16 items-center md:items-start bg-white/40 group">
                            <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 relative">
                                <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-6 scale-105 group-hover:rotate-12 transition-transform duration-500"></div>
                                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] -rotate-3 scale-110 group-hover:-rotate-6 transition-transform duration-500 delay-75"></div>
                                <img
                                    src={book.authorImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"}
                                    alt={book.author}
                                    className="w-full h-full object-cover rounded-[2.5rem] relative z-10 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                            <div className="flex-grow text-center md:text-left pt-6">
                                <h3 className="text-4xl font-bold text-primary-dark mb-3">{book.author}</h3>
                                <p className="text-primary font-extrabold uppercase tracking-[0.2em] text-sm mb-8 flex items-center justify-center md:justify-start gap-3">
                                    <span className="w-8 h-px bg-primary/30"></span>
                                    {t('author_role')}
                                </p>
                                <p className="text-xl text-primary/70 leading-relaxed italic border-l-4 border-primary/10 pl-8 ml-2">
                                    {book.authorBio || `Sheikh ${book.author} is a distinguished scholar at Maktabah El Mukhtar, specializing in the meticulous preservation and dissemination of authentic Islamic literature. With years of experience in editing and classical research.`}
                                </p>
                            </div>
                        </div>
                    </motion.section>
                </div>

                {/* Related Books Section */}
                {relatedBooks.length > 0 && (
                    <section className="mt-32 pb-20">
                        <div className="flex items-end justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-primary-dark mb-2">{t('related_title')}</h2>
                                <p className="text-primary/50 font-medium">{t('related_subtitle', { category: book.category })}</p>
                            </div>
                            <Link href="/books" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                                {t('view_all')} <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedBooks.map((relatedBook) => (
                                <motion.div
                                    key={relatedBook._id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <BookCard book={relatedBook} />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Sticky Mobile Action Bar */}
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-2xl border-t border-primary/10 p-4 z-40 lg:hidden flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                    >
                        <button
                            onClick={() => addToCart(book)}
                            className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            <ShoppingCart className="h-5 w-5" /> {t('add_to_cart')}
                        </button>
                        <a
                            href={`https://wa.me/601136787525?text=Saya%20berminat%20dengan: ${encodeURIComponent(book.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white p-4 rounded-2xl shadow-xl shadow-green-500/20"
                        >
                            <MessageSquare className="h-6 w-6" />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
