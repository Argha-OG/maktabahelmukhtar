"use client";

import { useEffect, useState } from "react";
import { BookOpen, Users, Target, ArrowRight, ShieldCheck, Zap, Star, Trophy } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";

export default function Home() {
    const t = useTranslations('HomePage');
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    // Derived lists — computed once books are loaded
    const latestBooks = books.slice(0, 4);
    const bestSellers = [
        ...books.filter(b => b.isBestSeller),
        ...books.filter(b => !b.isBestSeller)
    ].slice(0, 4);

    useEffect(() => {
        // Fetch Books
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setBooks(data.data);
            });

        // Fetch Authors
        fetch("/api/admin/authors")
            .then((res) => res.json())
            .then((data) => {
                if (data.success && data.data.length > 0) {
                    setAuthors(data.data);
                }
            });
    }, []);

    // Fallback authors from books if authors collection is empty
    const displayAuthors = authors.length > 0
        ? authors.slice(0, 5)
        : Array.from(new Set(books.map(b => b.author))).slice(0, 5).map(name => ({
            name,
            image: books.find(b => b.author === name)?.authorImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
            role: t('scholar_role_lead')
        }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col w-full pb-20">
            <Hero />

            {/* Top Selling Section */}
            <section className="py-24 relative overflow-hidden bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-widest text-sm">
                                <Trophy className="h-4 w-4" />
                                <span>{t('most_wanted')}</span>
                            </div>
                            <h2 className="text-4xl font-bold text-primary-dark mb-4 tracking-tight">
                                {t('top_selling_title')}
                            </h2>
                            <p className="text-lg text-primary/60">
                                {t('top_selling_subtitle')}
                            </p>
                        </div>
                        <Link
                            href="/books"
                            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all bg-white px-6 py-3 rounded-2xl shadow-sm border border-primary/5"
                        >
                            {t('explore_best_sellers')} <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bestSellers.map((book) => (
                            <motion.div
                                key={book._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <BookCard book={book} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Collection Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-widest text-sm">
                                <Star className="h-4 w-4" />
                                <span>{t('new_arrivals')}</span>
                            </div>
                            <h2 className="text-4xl font-bold text-primary-dark mb-4 tracking-tight">
                                {t('latest_collection_title')}
                            </h2>
                            <p className="text-lg text-primary/60">
                                {t('latest_collection_subtitle')}
                            </p>
                        </div>
                        <Link
                            href="/books"
                            className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                            {t('view_all_collection')} <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {latestBooks.map((book) => (
                            <motion.div
                                key={book._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <BookCard book={book} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Authors Section */}
            <section className="py-24 relative overflow-hidden bg-primary shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-white/60 font-bold uppercase tracking-[0.3em] text-xs">
                            <Users className="h-4 w-4" />
                            <span>{t('our_scholars')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('scholars_title')}
                        </h2>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto">
                            {t('scholars_subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 justify-center">
                        {displayAuthors.map((author, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-white/20 to-transparent mb-6 relative group-hover:scale-110 transition-transform duration-500">
                                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-primary-dark">
                                        <img
                                            src={author.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"}
                                            alt={author.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                        {t('scholar_badge')}
                                    </div>
                                </div>
                                <h3 className="text-white font-bold text-lg text-center leading-tight mb-1 group-hover:text-white/90">
                                    Sheikh {author.name}
                                </h3>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{author.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About & Stats Section */}
            <section className="py-24 relative bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={itemVariants} className="glass-card p-10 md:p-16">
                            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-8">
                                <BookOpen className="h-10 w-10" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-primary-dark mb-8 tracking-tight">
                                {t('about_main_title')}
                            </h2>
                            <p className="text-lg text-primary/70 leading-relaxed mb-10">
                                {t('about_main_desc')}
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-1">{t('v_authentic')}</h4>
                                    <p className="text-sm text-primary/50">{t('v_authentic_desc')}</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-primary mb-1">{t('v_meticulous')}</h4>
                                    <p className="text-sm text-primary/50">{t('v_meticulous_desc')}</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: Target,
                                    title: t('vision_title'),
                                    desc: t('vision_desc')
                                },
                                {
                                    icon: Users,
                                    title: t('team_title'),
                                    desc: t('team_desc')
                                },
                                {
                                    icon: ShieldCheck,
                                    title: t('integrity_title'),
                                    desc: t('integrity_desc')
                                },
                                {
                                    icon: Zap,
                                    title: t('reach_title'),
                                    desc: t('reach_desc')
                                }
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="p-8 border border-primary/10 rounded-3xl hover:bg-white/40 transition-all group"
                                >
                                    <feature.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-xl mb-3 text-primary-dark">{feature.title}</h3>
                                    <p className="text-sm text-primary/60 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Structure Section */}
            <section className="py-24 bg-primary/5 relative">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-primary-dark mb-16 tracking-tight">{t('structure_title')}</h2>
                        <div className="flex flex-col items-center">
                            <div className="glass-card bg-primary text-white px-8 py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 scale-110 mb-2">
                                {t('chairman_role')}
                            </div>
                            <div className="w-1 h-12 bg-primary/20"></div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-2">
                                {[
                                    { title: t('dept_editorial'), subtitle: t('role_reviewers') },
                                    { title: t('dept_research'), subtitle: t('role_researchers') },
                                    { title: t('dept_publishing'), subtitle: t('role_design_print') }
                                ].map((node, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="glass-card w-full py-5 font-bold text-primary-dark">
                                            {node.title}
                                        </div>
                                        <div className="w-px h-8 bg-primary/20"></div>
                                        <div className="text-sm font-semibold text-primary/40 uppercase tracking-widest">{node.subtitle}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
