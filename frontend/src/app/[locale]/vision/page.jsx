export const metadata = {
    title: "Vision & Mission | Maktabah El Mukhtar",
    description: "Our vision is to become the global beacon of Islamic literature, bridging the gap between sacred tradition and the modern seeker."
};

export default function VisionPage() {
    return (
        <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-serif antialiased">
            <main className="flex-grow flex flex-col w-full">
                {/* Hero */}
                <section className="relative w-full py-20 lg:py-32 px-4 lg:px-10 overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-950">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-900 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#1e3a8a 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="flex flex-col items-center max-w-4xl text-center z-10 gap-8">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 font-sans">
                            Vision & Mission
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            Illuminating hearts through <span className="text-primary italic">authentic knowledge</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                            Our vision is to become the global beacon of Islamic literature, bridging the gap between sacred tradition and the modern seeker.
                        </p>
                        <div className="w-24 h-1 bg-primary rounded-full mt-4"></div>
                    </div>
                </section>

                {/* Our Sacred Mission */}
                <section className="px-4 lg:px-10 py-16 bg-white dark:bg-slate-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] group">
                            <img alt="Antique manuscript" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542488827-0b1a0e10e118?q=80&w=2070&auto=format&fit=crop" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-lg font-sans">Preserving Heritage</p>
                                <p className="text-sm opacity-90 font-sans">Digitizing rare manuscripts since 1999</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Sacred Mission</h2>
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                                    We strive to publish authentic Islamic literature that bridges tradition with modernity. Our commitment lies in not just printing books, but in preserving a legacy of scholarship for future generations.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Authenticity First</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">Strict adherence to scholarly sources and verification processes for every publication.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">menu_book</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Preservation</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">Recovering and digitizing rare manuscripts to ensure they remain accessible.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">public</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Global Accessibility</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">Making knowledge available across all platforms, physical and digital, worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="bg-primary/5 py-12 border-y border-primary/10">
                    <div className="max-w-7xl mx-auto px-4 lg:px-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-4xl md:text-5xl font-bold text-primary font-sans">25</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-slate-300 uppercase tracking-wider font-sans">Years of Service</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-4xl md:text-5xl font-bold text-primary font-sans">500+</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-slate-300 uppercase tracking-wider font-sans">Publications</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-4xl md:text-5xl font-bold text-primary font-sans">12</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-slate-300 uppercase tracking-wider font-sans">Countries Reached</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-4xl md:text-5xl font-bold text-primary font-sans">100+</span>
                                <span className="text-sm font-medium text-slate-900 dark:text-slate-300 uppercase tracking-wider font-sans">Scholars Engaged</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20 px-4 lg:px-10 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto flex flex-col gap-12">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Core Values</h2>
                            <p className="text-slate-600 dark:text-slate-400">Guided by principles that reflect our commitment to the Ummah and the sanctity of knowledge.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-blue-50 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">handshake</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Amanah (Trust)</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm">
                                    Upholding the highest standards of integrity in every word we publish. We view every book as a trust placed in our hands.
                                </p>
                            </div>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-blue-50 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">school</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Ilm (Knowledge)</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm">
                                    Prioritizing beneficial knowledge that nurtures the soul. We focus on content that builds character and understanding.
                                </p>
                            </div>
                            <div className="group bg-white dark:bg-slate-800 p-8 rounded-xl border border-blue-50 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">diamond</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Ihsan (Excellence)</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm">
                                    Striving for perfection in design, content, and distribution. Because the message of Islam deserves the most beautiful presentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-20 px-4 lg:px-10 bg-white dark:bg-slate-800">
                    <div className="max-w-5xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 md:p-12 lg:p-16 border border-blue-100 dark:border-slate-700 relative overflow-hidden">
                        <span className="material-symbols-outlined absolute top-8 left-8 text-8xl text-primary/10 select-none">format_quote</span>
                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full md:rounded-xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg">
                                <img alt="Sheikh Ahmad" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <blockquote className="text-xl md:text-2xl font-medium italic text-slate-900 dark:text-white mb-6 leading-relaxed">
                                    "Knowledge is the life of the heart and the light of the eyes. Our duty at Maktabah El Mukhtar is not merely to print ink on paper, but to ignite that light in every home we reach."
                                </blockquote>
                                <div className="flex flex-col md:items-start items-center">
                                    <cite className="not-italic text-lg font-bold text-slate-900 dark:text-white">Sheikh Ahmad Al-Mukhtar</cite>
                                    <span className="text-primary text-sm font-sans font-medium uppercase tracking-wide">Founder & Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Us */}
                <section className="py-20 px-4 lg:px-10 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Join Us in Our Mission</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                            Whether through reading our publications, attending our events, or supporting our preservation efforts, you play a vital role in keeping this legacy alive.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center mt-4">
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold font-sans shadow-md">
                                Explore Publications
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-900 dark:text-white text-base font-medium font-sans transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
