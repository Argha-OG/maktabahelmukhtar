"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Facebook, Instagram, Music, MapPin, Mail, MessageSquare, Phone } from "lucide-react";

const Footer = () => {
    const t = useTranslations('Footer');
    const nt = useTranslations('Navbar');
    const pathname = usePathname();

    const isAdminPage = pathname?.includes('/admin');
    if (isAdminPage) return null;

    return (
        <footer className="bg-scholarly-blue-950 text-white pt-20 pb-10 border-t-4 border-gold-500">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand / About */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-gold-500 overflow-hidden">
                                <Image
                                    src="/mem-logo.jpg"
                                    alt="Maktabah El Mukhtar Logo"
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h2 className="text-xl font-bold font-serif">Maktabah <br /> El Mukhtar</h2>
                        </div>
                        <p className="text-blue-100 text-sm leading-relaxed mb-6">
                            {t('about_desc')}
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/17DXcPKvT4/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-scholarly-blue-950 transition-colors" title="Facebook">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://www.instagram.com/maktabah_el.mukhtar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-scholarly-blue-950 transition-colors" title="Instagram">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="https://www.tiktok.com/@maktabah.em" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-scholarly-blue-950 transition-colors" title="TikTok">
                                <Music className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Explore / Links */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">{t('links_title')}</h4>
                        <ul className="space-y-3 text-blue-100 text-sm">
                            <li><Link href="/" className="hover:text-white hover:pl-1 transition-all">{nt('home')}</Link></li>
                            <li><Link href="/books" className="hover:text-white hover:pl-1 transition-all">{nt('catalog')}</Link></li>
                            <li><Link href="/feed" className="hover:text-white hover:pl-1 transition-all">{nt('feed')}</Link></li>
                            <li><Link href="/gallery" className="hover:text-white hover:pl-1 transition-all">{nt('gallery')}</Link></li>
                            <li><Link href="/services" className="hover:text-white hover:pl-1 transition-all">Services</Link></li>
                            <li><Link href="/authors" className="hover:text-white hover:pl-1 transition-all">Authors</Link></li>
                            <li><Link href="/vision" className="hover:text-white hover:pl-1 transition-all">Vision</Link></li>
                            <li><Link href="/contact" className="hover:text-white hover:pl-1 transition-all">{nt('contact')}</Link></li>
                            <li><Link href="/admin" className="hover:text-white hover:pl-1 transition-all text-blue-300">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">{t('contact_title')}</h4>
                        <ul className="space-y-3 text-blue-100 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold-500" />
                                <span>{t('address_val')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 flex-shrink-0 text-gold-500" />
                                <span>+60 11-3678 7525</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 flex-shrink-0 text-gold-500" />
                                <span>maktabahelmukhtar@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Additional info or CTA (Replacing Office Hours if NA but I will use office hours placeholder or whatsapp CTA) */}
                    <div>
                        <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Connect</h4>
                        <div className="space-y-4">
                            <p className="text-sm text-blue-100">Have any questions or inquiries? Message us directly.</p>
                            <a
                                href="https://wa.me/60195328616"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors text-sm"
                            >
                                <MessageSquare className="w-4 h-4" /> WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
                    <p>© {new Date().getFullYear()} Maktabah El Mukhtar. {t('all_rights')}</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
