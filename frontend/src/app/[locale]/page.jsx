import Link from "next/link";
import { BookOpen, Users, Target, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative bg-primary py-20 md:py-32 text-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/books"
                            className="bg-white text-primary hover:bg-primary-light px-8 py-3 rounded-md font-bold text-lg transition-all flex items-center gap-2"
                        >
                            {t('explore')} <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 transform skew-x-12 translate-x-1/2"></div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="bg-primary-light p-8 rounded-2xl border-l-8 border-primary">
                                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <BookOpen className="h-8 w-8" /> About The Institution
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Maktabah El Mukhtar is a dedicated Islamic institution focused on the meticulous writing,
                                    editing, and publishing of religious texts. Our mission is to bridge the gap between
                                    classical scholarship and modern readers, ensuring that authentic knowledge remains
                                    accessible and relevant.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                                <Target className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                                <p className="text-sm text-gray-600">
                                    To become a global beacon for authentic Islamic literature and daily spiritual enrichment.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
                                <Users className="h-10 w-10 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                                <p className="text-sm text-gray-600">
                                    Our scholars, writers, and editors work tirelessly to maintain the highest standards of accuracy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizational Chart Section */}
            <section className="py-20 bg-primary-light/30">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-12">Organizational Structure</h2>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary text-white p-4 rounded-lg w-64 font-bold shadow-md">
                            Chairman / Lead Scholar
                        </div>
                        <div className="w-px h-10 bg-primary/30"></div>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-4">
                            <div className="flex flex-col items-center">
                                <div className="bg-white border-2 border-primary text-primary p-3 rounded-lg w-48 font-semibold shadow-sm">
                                    Editorial Board
                                </div>
                                <div className="w-px h-8 bg-primary/30"></div>
                                <div className="bg-gray-50 border p-2 rounded w-40 text-sm">Reviewers</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white border-2 border-primary text-primary p-3 rounded-lg w-48 font-semibold shadow-sm">
                                    Research Dept
                                </div>
                                <div className="w-px h-8 bg-primary/30"></div>
                                <div className="bg-gray-50 border p-2 rounded w-40 text-sm">Researchers</div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-white border-2 border-primary text-primary p-3 rounded-lg w-48 font-semibold shadow-sm">
                                    Publishing Unit
                                </div>
                                <div className="w-px h-8 bg-primary/30"></div>
                                <div className="bg-gray-50 border p-2 rounded w-40 text-sm">Design & Print</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
