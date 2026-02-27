"use client";

import { motion } from "framer-motion";
import { Link } from "@/navigation";

export default function AboutClient() {
    return (
        <div className="antialiased min-h-screen flex flex-col bg-white font-sans text-slate-900">
            {/* Header Section */}
            <header className="relative bg-sand-50 py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#0A192F" fillOpacity="0.05"></path>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-gold-600 font-medium tracking-widest text-sm uppercase mb-4 block">About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-scholarly-blue-950 mb-6">
                            Leadership & Legacy of Knowledge
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
                            Get to know the leadership team spearheading the writing, editing, and publishing of scholarly works at Maktabah El Mukhtar.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Organization Chart Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-scholarly-blue-950 mb-2">Organization Chart</h2>
                        <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
                    </div>

                    {/* Director */}
                    <div className="flex justify-center mb-16">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-scholarly-blue-900 to-gold-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-72 bg-white rounded-xl shadow-xl overflow-hidden border border-blue-50">
                                <div className="h-80 w-full overflow-hidden bg-slate-100">
                                    <img alt="Director" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-x2QKBlW0JzX1BkN9fNSWWevlIMVgk8pMApu5RaeNnbO6YfloOVhy7Oh0PnDAoO0QKB-Khy0ettbUcj1fZXVc9fYYwJsGS8gUVhjVDpppDzTM5if6eUhzE5j-1oeXGAeqW_dLjokf1yw_B3AQz8WzLx2tKuo5b11rPnqGD7_bLp1LM3r4fwGNPc60MU25qvRdzbbXHsULxUSjpafvqNb6z0G62BqNKXhYwvT8KGzwnPaRONxRGWtSvzq6_mR0FMqrVc66AEV9HA0" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-serif font-bold text-scholarly-blue-950">Dr. Ahmad Al-Faruqi</h3>
                                    <p className="text-gold-600 font-medium text-sm mt-1 uppercase tracking-wider">Managing Director</p>
                                </div>
                            </div>
                            <div className="absolute top-full left-1/2 w-0.5 h-16 bg-slate-200 transform -translate-x-1/2 hidden lg:block"></div>
                        </div>
                    </div>

                    {/* Lines connectors */}
                    <div className="hidden lg:block relative h-0.5 bg-slate-200 w-3/4 mx-auto mb-16">
                        <div className="absolute -top-16 left-1/2 w-0.5 h-16 bg-slate-200 transform -translate-x-1/2"></div>
                        <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-slate-200 transform -translate-x-1/2"></div>
                        <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-slate-200 transform -translate-x-1/2"></div>
                        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-slate-200 transform -translate-x-1/2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                        {/* Head Writer */}
                        <div className="flex flex-col items-center">
                            <div className="w-64 bg-white rounded-lg shadow-lg border border-blue-50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 overflow-hidden bg-slate-100">
                                    <img alt="Head Writer" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVAbWW_zKkad059pw89JirL2doQYhPGBmdDO5__Hzpb1MM3aaNCM5FJaVFTUhLxCf3Do-rLWYmC7TEMjyCAlGSMFEl21ID_f4r8e-B2ZYHQy7hHP_-axyldSKdIxtACHavQ2cTlGJ4ZGu2ORJNJsbhFGOCDTYbXpyoLxHej_Lmf5F66XhgxGCQ7qrvBDSQAqicGb9LKP0BN5CfhvfmEMLyNiM9Phuu77AQ56TPrQG7VEhW-afq_wtzIns0yZfEbsb43cLg4MxGFgo" />
                                </div>
                                <div className="p-5 text-center bg-white">
                                    <h4 className="text-lg font-serif font-bold text-scholarly-blue-950">Ustaz Haziq Iman</h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">Head of Writing Department</p>
                                </div>
                            </div>
                        </div>

                        {/* Head Editor */}
                        <div className="flex flex-col items-center">
                            <div className="w-64 bg-white rounded-lg shadow-lg border border-blue-50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 overflow-hidden bg-slate-100">
                                    <img alt="Head Editor" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCv6rsmXmZaQYGjOgsQQu4n0iA9blKpYd1LaaYskAoA3Fie_ulzZSWSpe6tkm6BybwCe-1-OAjrFSF9QuygEQctRRHvEagnX-XVjXQrLyxjtxGthpCSFVA4Hbf2hMrzY2hn8QgpOnFhGWRe9oNPkfWstfb4Djo_XZtkUmAN8vN1AZOrX5Gty2bKWIGRxyPyz3_Dw6xMzYSKTokEaHn1zqsqtfZz8AhmebNrOOek7Ar6fUSi0gXGmUYJ2ZlUkKLkx6K8qaQchBsQ38" />
                                </div>
                                <div className="p-5 text-center bg-white">
                                    <h4 className="text-lg font-serif font-bold text-scholarly-blue-950">Puan Sarah Aminah</h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">Head Editor</p>
                                </div>
                            </div>
                        </div>

                        {/* Operations */}
                        <div className="flex flex-col items-center">
                            <div className="w-64 bg-white rounded-lg shadow-lg border border-blue-50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 overflow-hidden bg-slate-100">
                                    <img alt="Operations" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXoIQzed4aPTnZeUJmPty8GkdZXMMvZwHEEVBBj1Mclb5pLUXf40t0Qz0B17mghZbEoddxrPnanMjW2PInIXGDeFZOHFpYTB9dilq9wDQ_2k66--Px0_vVGGBjdei4nLRUZGp5BuWAh1x9hr1Qn2esP2f4gqTAf5IcY6PFX0NGVZ2GSOI6R4FOKpWBNcMMD2wLG7sRvG7ylVkmJBx4WzTap6c3S7ftVGckxbjCyXR62e9m_BUlNqZeCMl60vax3ozlGtu5hfXOoQ0" />
                                </div>
                                <div className="p-5 text-center bg-white">
                                    <h4 className="text-lg font-serif font-bold text-scholarly-blue-950">Encik Yusuf Hadi</h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">Operations Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Team & Researchers */}
                    <div className="mt-20">
                        <h3 className="text-center text-xl font-medium text-slate-400 mb-10">Support Team & Researchers</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[
                                { name: 'Zainal Abidin', role: 'Senior Researcher', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWey4YgsFvr3FEr9NP5RF-UZuRJSKS-ley3kBfFOO62uCHPygpbIL3RZljftifxg3Rbi0T76K8-MzmadWM5n6ZAy_ykP4eq1UEKnsk_4o2XoJktULuY41oyPcIyebJlpE35WNw2jAwSmSTS2zZPZn2Jtxcup2p2vv3s-kfqKi1gJoJeUk2pxPfwqOCr6Cc4hog32Kgnz1LKckPZ69BJtd9mTK_gAZcuE8ZwJL8LrfkAY5wKwPwfrcdbdXYNwBxPCsD8U04sxnweG8' },
                                { name: 'Nurul Huda', role: 'Language Editor', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA47QYkKj6T-jj1LgXwqieJqCTJshlYwOpjo2CNEUo42fB_LGkf1JXJJf9DaZXFpAkxRA2Oc3HdJS8vmyKrGN-U4pbdt53HpTtiGbegb-T-TKCwTCdIz8zfNa0nwSEO44IJPvDdKNgNX1KqdT-X4wT4WIvwabU1asTGlHWwWxU-Yh3599PzlBgOolMR5wMm0kLFwuQ98POrHCzlIEwd_0GK_bFgm4y1QzpV_25QUxwXt75Qc0UU2_qYJ3vFeaKsqUx2cdnzk669Z7s' },
                                { name: 'Farid Kamil', role: 'Translator', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDVATWZIcmvVeLBfUkqRPin4H7SC_Kh9Tj1kO06m8frJk26N3TKVLIdearffbInKMbn8Hp_5Ai68A0sY1hVAo7nb_YyT-0xevw2zGz6n2vlT4mclEj4qWJ-S5TysAny-D0G__WqUBpAKTzc4YzWfqm7PND2imfO1EzTH2-I-AyK2A9MEESP005C0diq5Ow1HdrOpfuSAMv2z_e-eD3BNbXx16ZNdt83kRm2Ca43C1IghM7jRglHwAB-OQNQZZHQgT7P9F62pjV2XE' },
                                { name: 'Aisyah Razak', role: 'Graphic Designer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-RtkqGegRr7geAms3MrFnjE19J7eVtXMB7_Ke1T_2ZFe7flz7eNxSAup-wr7iamB7EPMZG4699XGNmGummrdiODGL8icsOLXMSX1x5oczEvl5j1Ii_bIBQ1humgV5uJ_00sDKMo9tyz5yhcsLFAIDsm_1hTUX7dJmplfXxx7aV598NCbc0ZgJIjR1c3-Pj7jok-EVUco1Sxcg12-T8lnutpZwhUuaa-pVm5GWzMHiSKG2JtZ6IiUhggUliOBfqWQYSyM7ERHqpSg' },
                                { name: 'Imran Yusof', role: 'Marketing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-8OcqIistMgfGHEbnEwpwm_eWCHwy8E50E6_Z5FEKHQ3vc1UKJ3aysZnrNXjDSSwZ8YOyfuOjZPvjbr984Nxt6MQTCRpN43eio4RrZJwQ8lqicP_XVe-SoIIDfSKGT82fe0gQo-dha-ALglQVU0puVIFpTHo2ehk1MxTvyqBhGhMwsrQDTAGpdNt_i6PlWoay83GQV2JYWsM4n0dJyluZ57jeMbo2rl0AKWxCENl9gymu2zOdtNC4xtRc688edF6ZeahA1w3x5oA' }
                            ].map((person, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-scholarly-blue-950 transition-all">
                                        <img className="w-full h-full object-cover" src={person.img} alt={person.name} />
                                    </div>
                                    <h5 className="text-sm font-bold text-slate-800">{person.name}</h5>
                                    <p className="text-xs text-slate-500">{person.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-sand-50 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-gold-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Services</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-scholarly-blue-950 mb-6">Cultivating Knowledge Through Publishing</h2>
                        <p className="text-slate-600 text-lg">Maktabah El Mukhtar offers a comprehensive publishing ecosystem, from the author's ink to the reader's hands.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-blue-50">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-scholarly-blue-950 transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl text-scholarly-blue-900 group-hover:text-white transition-colors duration-300">edit_note</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-scholarly-blue-950 mb-4">Scholarly Writing</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                We provide services for writing original works, research articles, and biographies of figures with authentic references and high linguistic style.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Manuscript Research',
                                    'Biography Writing',
                                    'Islamic Ghostwriting'
                                ].map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">check_circle</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-blue-50 relative">
                            <div className="absolute top-0 right-0 bg-gold-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-scholarly-blue-950 transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl text-scholarly-blue-900 group-hover:text-white transition-colors duration-300">fact_check</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-scholarly-blue-950 mb-4">Editing</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Ensuring manuscripts are free from grammatical, factual, and structural errors. Our focus is preserving authenticity while refining the language.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Substantive Editing',
                                    'Fact & Hadith Checking',
                                    'Proofreading'
                                ].map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">check_circle</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-blue-50">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-scholarly-blue-950 transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl text-scholarly-blue-900 group-hover:text-white transition-colors duration-300">print_connect</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-scholarly-blue-950 mb-4">Publishing</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                The complete publishing process from typesetting, cover design, ISBN application, to physical and digital printing.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Typesetting & Design',
                                    'ISBN & e-Book',
                                    'Digital Marketing'
                                ].map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                        <span className="material-symbols-outlined text-gold-500 text-lg">check_circle</span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/contact" className="inline-flex items-center gap-2 text-scholarly-blue-950 border border-scholarly-blue-900 px-8 py-3 rounded-full hover:bg-scholarly-blue-900 hover:text-white transition-all duration-300 font-medium">
                            View Full Packages
                            <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
