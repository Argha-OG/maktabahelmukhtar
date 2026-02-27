export const metadata = {
    title: "Publishing & Editing Services | Maktabah El Mukhtar",
    description: "Preserving the integrity of knowledge through professional ghostwriting, meticulous editing, and world-class publishing standards."
};

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-serif antialiased">
            <main className="flex-grow">
                {/* Hero */}
                <section className="relative bg-slate-900 py-24 px-4 overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
                        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Excellence in Islamic Scholarship</span>
                        <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mb-6 max-w-4xl">
                            Publishing & Editing Services
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Preserving the integrity of knowledge through professional ghostwriting, meticulous editing, and world-class publishing standards.
                        </p>
                        <div className="flex gap-4 mt-10">
                            <button className="h-12 px-8 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">
                                Start Your Project
                            </button>
                            <button className="h-12 px-8 border border-slate-600 text-white rounded-lg font-bold hover:bg-white/10 transition-all">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </section>

                {/* Intro */}
                <section className="py-20 px-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="material-symbols-outlined text-4xl text-amber-500 mb-4">auto_stories</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-6">Honoring Your Manuscript</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            At Maktabah El Mukhtar, we understand that an Islamic manuscript is more than just words—it is a vessel of tradition and faith. Our specialized team treats every page with the *Adab* (etiquette) it deserves, ensuring accuracy, eloquence, and beauty in presentation.
                        </p>
                    </div>
                </section>

                {/* Service 01: Ghostwriting */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900" id="writing">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-24">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="material-symbols-outlined text-sm">edit_note</span>
                                Service 01
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Ghostwriting & <br />Manuscript Development</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Transform your initial concepts or recorded lectures into professionally written books. Our team of scholars and expert writers ensures your voice is preserved while maintaining theological accuracy and linguistic eloquence.
                            </p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Concept structuring & outlining</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Theological verification of references</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Academic & general audience tones</span>
                                </li>
                            </ul>
                            <button className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                                Get a Writing Quote <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                            <h3 className="text-xl font-bold mb-8 border-b border-slate-100 dark:border-slate-700 pb-4">Our Writing Process</h3>
                            <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-slate-100 dark:before:bg-slate-700">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-primary flex items-center justify-center text-primary font-bold text-sm">1</div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Consultation & Discovery</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We meet to understand your vision, target audience, and scope. A detailed roadmap is created.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-primary flex items-center justify-center text-primary font-bold text-sm">2</div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Outline Approval</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">A comprehensive chapter-by-chapter outline is developed for your approval before writing begins.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-primary flex items-center justify-center text-primary font-bold text-sm">3</div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Drafting & Review</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">We write in milestones, allowing for your feedback at every stage.</p>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-primary flex items-center justify-center text-primary font-bold text-sm">4</div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Final Polish</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">The manuscript undergoes a rigorous final polish for flow, tone, and impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service 02: Editing */}
                <section className="py-24 px-6 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700" id="editing">
                    <div className="max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">
                        <div className="w-full bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-amber-500">
                                        <span className="material-symbols-outlined text-3xl">rate_review</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Detailed Assessment</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Initial evaluation of manuscript strengths and weaknesses.</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 ml-8"></div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-amber-500">
                                        <span className="material-symbols-outlined text-3xl">fact_check</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Fact-Checking & Takhrij</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Verification of hadith, verses, and scholarly quotes.</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 ml-8"></div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-amber-500">
                                        <span className="material-symbols-outlined text-3xl">spellcheck</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Copyediting & Proofreading</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Correcting grammar, syntax, and style consistency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:pl-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="material-symbols-outlined text-sm">history_edu</span>
                                Service 02
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Scholarly Editing & <br />Proofreading</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                A polished manuscript reflects the seriousness of its content. Our editors go beyond grammar; they enhance clarity, verify sources (Takhrij), and ensure your work adheres to the highest academic and Islamic standards.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                                    <span className="text-sm font-semibold">Developmental Editing</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                                    <span className="text-sm font-semibold">Line Editing</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                                    <span className="text-sm font-semibold">Citation Formatting</span>
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
                                    <span className="material-symbols-outlined text-amber-500 text-sm">star</span>
                                    <span className="text-sm font-semibold">Translation Review</span>
                                </li>
                            </ul>
                            <button className="text-primary font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all">
                                Get an Editing Quote <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Service 03: Publishing */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900" id="publishing">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="material-symbols-outlined text-sm">print</span>
                                Service 03
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Publishing & Distribution</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Bring your work to the world with our premium publishing services. We handle everything from elegant typesetting to global distribution.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                                <div className="h-48 w-full bg-slate-100 dark:bg-slate-900 rounded-lg mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 opacity-80"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <span className="material-symbols-outlined text-6xl">book_2</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">Design & Typesetting</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    Custom interior layout design ensuring readability and aesthetic beauty, paired with striking cover art.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                                <div className="h-48 w-full bg-slate-100 dark:bg-slate-900 rounded-lg mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-80"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <span className="material-symbols-outlined text-6xl">print_connect</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">Print Management</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    High-quality offset and digital printing management, ensuring premium paper stock and binding quality.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-colors group">
                                <div className="h-48 w-full bg-slate-100 dark:bg-slate-900 rounded-lg mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-900 opacity-80"></div>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <span className="material-symbols-outlined text-6xl">public</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary transition-colors">Global Distribution</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    Access to major online retailers, Islamic bookstores worldwide, and eBook platforms.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <button className="bg-primary text-white hover:bg-primary-dark h-12 px-8 rounded-lg font-bold transition-all shadow-lg shadow-primary/30">
                                Request Publishing Kit
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-20 px-6 bg-slate-100 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="material-symbols-outlined text-5xl text-primary/40 mb-6">format_quote</span>
                        <blockquote className="text-2xl md:text-3xl font-medium italic text-slate-800 dark:text-slate-200 leading-normal mb-8">
                            "Maktabah El Mukhtar treated my manuscript with incredible respect. Their editing team didn't just fix errors; they refined the arguments and verified every single reference. A truly scholarly service."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-primary font-bold">A</div>
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900 dark:text-slate-100">Dr. Ahmed Al-Farsi</div>
                                <div className="text-sm text-primary">Author of "Reflections on Heritage"</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form */}
                <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900 scroll-mt-24" id="request-quote">
                    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-400 to-amber-500"></div>
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Request a Service Quote</h2>
                            <p className="text-slate-600 dark:text-slate-400">Please fill out the form below. Our team reviews every submission carefully and will respond within 48 hours.</p>
                        </div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="name">Full Name</label>
                                    <input className="h-12 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-full" id="name" placeholder="Ex. Yusuf Ali" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                                    <input className="h-12 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-full" id="email" placeholder="Ex. yusuf@example.com" type="email" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="service">Service Required</label>
                                <select className="h-12 rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-full text-slate-600 dark:text-slate-300" id="service">
                                    <option>Ghostwriting & Writing Support</option>
                                    <option>Editing & Proofreading</option>
                                    <option>Publishing & Distribution</option>
                                    <option>Full Package (Writing to Publishing)</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="details">Project Details</label>
                                <textarea className="rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all w-full" id="details" placeholder="Tell us about your manuscript, estimated word count, and goals..." rows={4}></textarea>
                            </div>
                            <div className="flex items-start gap-3">
                                <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" id="terms" type="checkbox" />
                                <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">I consent to Maktabah El Mukhtar storing my data for the purpose of this inquiry. We respect your privacy.</label>
                            </div>
                            <button className="w-full h-14 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 mt-4" type="button">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
