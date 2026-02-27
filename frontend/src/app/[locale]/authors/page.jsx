"use client";

import { useState, useEffect } from "react";
import { User, ShieldCheck, History, Edit, MapPin, Mail, Award, ArrowRight, Loader2 } from "lucide-react";

export default function AuthorsPage() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const res = await fetch("/api/admin/authors");
                const data = await res.json();
                if (data.success) {
                    setAuthors(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch authors:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAuthors();
    }, []);

    const filteredAuthors = authors.filter(author => {
        const matchesFilter = filter === "All" || author.role === filter;
        const matchesSearch = author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            author.bio.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch && author.active;
    });

    const writers = filteredAuthors.filter(a => a.role !== "Editor");
    const editors = filteredAuthors.filter(a => a.role === "Editor");

    return (
        <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-serif antialiased">
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative bg-slate-50 dark:bg-slate-900 py-16 sm:py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary blur-3xl"></div>
                        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-amber-500 blur-3xl"></div>
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600 ring-1 ring-inset ring-amber-500/20 mb-6">
                            <ShieldCheck className="h-4 w-4" />
                            Board of Experts & Scholars
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl mb-6">
                            Guardians of Knowledge & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-primary">Islamic Intellectuals</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-sans">
                            Get closer to the visionary writers and expert editors behind every Maktabah El Mukhtar publication. We are dedicated to presenting authentic and profound Islamic literature.
                        </p>
                    </div>
                </section>

                {/* Filter / Search Bar */}
                <div className="sticky top-16 z-40 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800 py-4">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex space-x-1 rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
                            {["All", "Researcher", "Scholar", "Editor"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${filter === cat ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-black/5" : "text-slate-600 dark:text-slate-400 hover:text-primary"}`}
                                >
                                    {cat === "Researcher" ? "Writers" : cat === "Scholar" ? "Scholars" : cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full sm:w-64">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Search className="h-4 w-4" />
                            </span>
                            <input
                                className="block w-full rounded-lg border-0 py-2.5 pl-10 pr-3 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white dark:bg-slate-800"
                                placeholder="Search for experts..."
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20 font-sans">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <Loader2 className="h-10 w-10 text-primary animate-spin" />
                            <p className="text-primary/40 font-black uppercase tracking-widest text-xs">Assembling Repository...</p>
                        </div>
                    ) : (
                        <>
                            {/* Penulis (Writers) */}
                            {writers.length > 0 && (
                                <section>
                                    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                                        <History className="text-primary h-8 w-8" />
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Authors & researchers</h3>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {writers.map((author) => (
                                            <div key={author._id} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:border-primary/30">
                                                <div className="flex flex-col sm:flex-row h-full">
                                                    <div className="relative w-full sm:w-56 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                                                        <img alt={author.name} className="h-64 sm:h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={author.image || "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=400"} />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <div className="flex flex-1 flex-col p-8">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div>
                                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">{author.role || 'Scholar'}</p>
                                                                <h4 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">{author.name}</h4>
                                                            </div>
                                                            <Award className="h-6 w-6 text-amber-500 shrink-0" />
                                                        </div>
                                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium italic line-clamp-4">
                                                            "{author.bio}"
                                                        </p>
                                                        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex items-center gap-3 text-slate-400">
                                                                    <MapPin className="h-4 w-4" />
                                                                    <Mail className="h-4 w-4" />
                                                                </div>
                                                                <button className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary-dark flex items-center gap-2 group/btn">
                                                                    View Profile <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Editor (Editors) */}
                            {editors.length > 0 && (
                                <section>
                                    <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                                        <Edit className="text-amber-500 h-8 w-8" />
                                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Editors & Curators</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {editors.map((author) => (
                                            <div key={author._id} className="bg-white dark:bg-slate-800 rounded-3xl shadow-sm p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:border-amber-500/50 hover:shadow-xl transition-all">
                                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <Edit className="h-16 w-16 text-amber-500" />
                                                </div>
                                                <div className="flex items-center gap-5 mb-6">
                                                    <div className="h-20 w-20 rounded-2xl overflow-hidden border-2 border-amber-500/10 shrink-0">
                                                        <img alt={author.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={author.image || "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=200"} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">{author.name}</h4>
                                                        <p className="text-[10px] text-amber-500 font-black uppercase tracking-widest mt-1">Institutional Editor</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed italic line-clamp-3">
                                                    "{author.bio}"
                                                </p>
                                                <button className="w-full py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-amber-500 group-hover:border-amber-500 transition-all">
                                                    Author Portfolio
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {filteredAuthors.length === 0 && (
                                <div className="text-center py-20 flex flex-col items-center gap-4 opacity-30">
                                    <User className="h-16 w-16" />
                                    <h3 className="text-xl font-black uppercase tracking-widest">No Experts Found</h3>
                                    <p className="max-w-xs mx-auto">None of our repository records matched your current institutional search filters.</p>
                                </div>
                            )}
                        </>
                    )}

                    {/* Join Us CTA */}
                    <section className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark px-6 py-20 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left relative z-10">
                            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-tight">Join as a Contributor.<br /><span className="text-amber-500">Spread Beneficial Knowledge.</span></h2>
                            <p className="mt-8 text-lg leading-relaxed text-blue-100/60 font-medium">We always open our doors to talented writers and editors who share the same vision in literary da'wah.</p>
                            <div className="mt-12 flex items-center justify-center gap-x-8 lg:justify-start">
                                <a className="rounded-2xl bg-amber-500 px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-dark shadow-xl shadow-amber-500/20 hover:bg-amber-400 transition-all active:scale-95" href="#">Submit Manuscript</a>
                                <a className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-amber-400 transition-colors" href="#">Manifesto <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
