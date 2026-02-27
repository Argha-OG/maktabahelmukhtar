export const metadata = {
    title: "Writers & Editors Directory | Maktabah El Mukhtar",
    description: "Get closer to the visionary writers and expert editors behind every Maktabah El Mukhtar publication."
};

export default function AuthorsPage() {
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
                            <span className="material-symbols-outlined text-[16px]">verified</span>
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
                            <button className="rounded-lg bg-white dark:bg-slate-700 px-6 py-2.5 text-sm font-medium text-slate-900 dark:text-slate-100 shadow-sm ring-1 ring-black/5 hover:text-primary transition-all">
                                All
                            </button>
                            <button className="rounded-lg px-6 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-primary transition-all">
                                Writers
                            </button>
                            <button className="rounded-lg px-6 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm hover:text-primary transition-all">
                                Editors
                            </button>
                        </div>
                        <div className="relative w-full sm:w-64">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                            </span>
                            <input
                                className="block w-full rounded-lg border-0 py-2.5 pl-10 pr-3 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white dark:bg-slate-800"
                                placeholder="Search for experts or topics..."
                                type="text"
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-20">
                    {/* Penulis (Writers) */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Penulis (Writers)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md hover:border-primary/30">
                                <div className="flex flex-col sm:flex-row h-full">
                                    <div className="relative w-full sm:w-48 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <img alt="Author" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Fiqh & Muamalah</p>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">Ustadz Fulan bin Fulan, Lc.</h4>
                                            </div>
                                            <span className="material-symbols-outlined text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">stars</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow font-sans line-clamp-3">
                                            Lulusan Universitas Islam Madinah dengan predikat Summa Cum Laude. Beliau aktif menulis kajian hukum Islam kontemporer yang relevan dengan tantangan zaman modern.
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">Fikih Kontemporer</span>
                                                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">Muamalah Pasar</span>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <button className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1">
                                                    View Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 transition-all hover:shadow-md hover:border-primary/30">
                                <div className="flex flex-col sm:flex-row h-full">
                                    <div className="relative w-full sm:w-48 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <img alt="Author" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Tafsir & Keluarga</p>
                                                <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">Ustadzah Aisyah, M.Ag</h4>
                                            </div>
                                            <span className="material-symbols-outlined text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">stars</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow font-sans line-clamp-3">
                                            Pakar tafsir tematik yang memfokuskan kajian pada penguatan pondasi keluarga Muslim. Alumni Al-Azhar Kairo yang telah menerbitkan berbagai buku best-seller.
                                        </p>
                                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">Tafsir Keluarga</span>
                                                <span className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-900 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400">Wanita Surga</span>
                                            </div>
                                            <div className="mt-4 flex justify-end">
                                                <button className="text-sm font-bold text-primary hover:text-primary-dark flex items-center gap-1">
                                                    View Profile <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Editor (Editors) */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                            <span className="material-symbols-outlined text-amber-500 text-3xl">edit_note</span>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Editor (Editors)</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:border-amber-500/50 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 text-amber-500">
                                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-amber-500/20 shrink-0">
                                        <img alt="Editor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Ustadz Alan</h4>
                                        <p className="text-xs text-amber-500 font-bold uppercase tracking-wider">Senior Editor</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-sans line-clamp-3">
                                    Spesialis dalam transliterasi dan penyuntingan naskah hadits. Bertanggung jawab atas kualitas terjemahan kitab-kitab induk.
                                </p>
                                <button className="mt-6 w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors">
                                    Lihat Portfolio
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:border-amber-500/50 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 text-amber-500">
                                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-amber-500/20 shrink-0">
                                        <img alt="Editor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Siti Aminah</h4>
                                        <p className="text-xs text-amber-500 font-bold uppercase tracking-wider">Editor Bahasa</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-sans line-clamp-3">
                                    Ahli linguistik Arab-Indonesia dengan pengalaman 10 tahun. Fokus pada menjaga cita rasa bahasa asli dalam terjemahan.
                                </p>
                                <button className="mt-6 w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors">
                                    Lihat Portfolio
                                </button>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden group hover:border-amber-500/50 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 text-amber-500">
                                    <span className="material-symbols-outlined text-6xl">format_quote</span>
                                </div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-amber-500/20 shrink-0">
                                        <img alt="Editor" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Ahmad Zaki</h4>
                                        <p className="text-xs text-amber-500 font-bold uppercase tracking-wider">Layout Editor</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-sans line-clamp-3">
                                    Desainer tata letak yang memastikan kenyamanan visual pembaca. Menggabungkan seni kaligrafi dengan tipografi modern.
                                </p>
                                <button className="mt-6 w-full py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:border-amber-500 hover:text-amber-500 transition-colors">
                                    Lihat Portfolio
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Join Us CTA */}
                    <section className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 shadow-2xl sm:px-16 md:pt-20 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join as a Contributor.<br />Spread Beneficial Knowledge.</h2>
                            <p className="mt-6 text-lg leading-8 text-blue-100 font-sans">We always open our doors to talented writers and editors who share the same vision in literary da'wah.</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-primary-dark shadow-sm hover:bg-amber-400 transition-colors" href="#">Submit Manuscript</a>
                                <a className="text-sm font-semibold leading-6 text-white hover:text-amber-400 transition-colors" href="#">Learn Terms & Conditions <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
