"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";

export default function Home() {
    const t = useTranslations('HomePage');
    const [books, setBooks] = useState([]);

    // Derived lists
    const latestBooks = books.slice(0, 4);

    useEffect(() => {
        // Fetch Books
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) setBooks(data.data);
            });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col w-full bg-sand-50 font-sans">
            <Hero />

            {/* Our Expertise / Scholarly Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-scholarly-blue-900 font-medium text-sm tracking-widest uppercase">Our Expertise</span>
                        <h2 className="text-4xl font-serif text-scholarly-blue-950 mt-2 mb-4">Scholarly Services</h2>
                        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-sand-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 bg-scholarly-blue-950 text-gold-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-scholarly-blue-950 transition-colors">
                                <span className="material-symbols-outlined text-3xl">edit_note</span>
                            </div>
                            <h3 className="text-xl font-bold text-scholarly-blue-950 mb-3">Academic Writing</h3>
                            <p className="text-gray-600 mb-4">Professional authoring of Islamic texts, research papers, and educational materials grounded in authentic sources.</p>
                        </div>
                        <div className="bg-sand-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 bg-scholarly-blue-950 text-gold-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-scholarly-blue-950 transition-colors">
                                <span className="material-symbols-outlined text-3xl">history_edu</span>
                            </div>
                            <h3 className="text-xl font-bold text-scholarly-blue-950 mb-3">Editorial Services</h3>
                            <p className="text-gray-600 mb-4">Detailed editing, proofreading, and formatting to ensure clarity, accuracy, and flow in manuscripts.</p>
                        </div>
                        <div className="bg-sand-50 p-8 rounded-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                            <div className="w-14 h-14 bg-scholarly-blue-950 text-gold-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-scholarly-blue-950 transition-colors">
                                <span className="material-symbols-outlined text-3xl">print</span>
                            </div>
                            <h3 className="text-xl font-bold text-scholarly-blue-950 mb-3">Publishing & Distribution</h3>
                            <p className="text-gray-600 mb-4">Complete publishing solutions from cover design to printing and digital distribution across platforms.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Daily Wisdom / Hadith SECTION */}
            <section className="py-16 bg-scholarly-blue-50 border-y border-scholarly-blue-900/10">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-scholarly-blue-950 p-10 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-2 z-10">Daily Wisdom</span>
                            <h3 className="text-white text-3xl font-serif z-10">Hadith & Quotes</h3>
                            <p className="text-blue-100 mt-4 z-10">Subscribe to our daily feed for spiritual nourishment delivered to your inbox.</p>
                            <div className="mt-8 z-10">
                                <Link href="/feed" className="block w-full text-center bg-white text-scholarly-blue-950 py-3 px-4 rounded font-semibold hover:bg-gold-500 hover:text-white transition-colors">
                                    Subscribe Now
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-10 flex flex-col justify-center">
                            <div className="max-w-xl mx-auto text-center">
                                <span className="material-symbols-outlined text-5xl text-gold-500 opacity-50 mb-4">format_quote</span>
                                <p className="text-3xl font-arabic text-scholarly-blue-950 mb-4" dir="rtl">خَيْرُكُم مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
                                <p className="text-xl font-serif text-gray-800 italic mb-6">"The best among you is he who learns the Quran and teaches it."</p>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">- Prophet Muhammad (ﷺ), Sahih Al-Bukhari</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Publications */}
            <section className="py-20 bg-sand-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-serif text-scholarly-blue-950">Latest Publications</h2>
                            <p className="text-gray-600 mt-2">Browse our newest collection of scholarly works.</p>
                        </div>
                        <Link className="hidden md:flex items-center text-scholarly-blue-950 font-semibold hover:text-gold-600 transition-colors" href="/books">
                            View All Books <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

                    <div className="mt-12 text-center md:hidden">
                        <Link className="inline-flex items-center text-scholarly-blue-950 font-semibold border-b border-scholarly-blue-950 pb-1" href="/books">
                            View All Books <ArrowRight className="w-5 h-5 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
