"use client";

import { Link, usePathname } from "@/navigation";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Facebook, Instagram, Music, MapPin, Mail, MessageSquare } from "lucide-react";

const Footer = () => {
    const t = useTranslations('Footer');
    const nt = useTranslations('Navbar');
    const pathname = usePathname();

    const isAdminPage = pathname?.includes('/admin');
    if (isAdminPage) return null;

    return (
        <footer className="w-full bg-white/30 backdrop-blur-md border-t border-white/20 py-16 text-primary mt-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/mem-logo.jpg"
                                alt="Maktabah El Mukhtar Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 object-contain rounded-lg shadow-sm"
                            />
                            <h3 className="text-xl font-bold tracking-tight text-primary-dark">{t('about_title')}</h3>
                        </div>
                        <p className="text-sm text-primary/70 leading-relaxed">
                            {t('about_desc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-dark">{t('links_title')}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-primary-dark transition-colors inline-block">{nt('home')}</Link></li>
                            <li><Link href="/books" className="hover:text-primary-dark transition-colors inline-block">{nt('catalog')}</Link></li>
                            <li><Link href="/feed" className="hover:text-primary-dark transition-colors inline-block">{nt('feed')}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-dark transition-colors inline-block">{nt('contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-dark">{t('social_title')}</h4>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/share/17DXcPKvT4/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all" title="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/maktabah_el.mukhtar" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all" title="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.tiktok.com/@maktabah.em" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all" title="TikTok">
                                <Music className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-dark">{t('contact_title')}</h4>
                        <div className="text-sm text-primary/70 space-y-4">
                            <p className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary/40" /> maktabahelmukhtar@gmail.com
                            </p>
                            <a
                                href="https://wa.me/601136787525"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                            >
                                <MessageSquare className="h-4 w-4" /> +60 11-3678 7525
                            </a>
                            <p className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-primary/40 flex-shrink-0" />
                                <span>{t('address_val')}</span>
                            </p>

                        </div>

                    </div>
                </div>
                <div className="mt-16 border-t border-primary/10 pt-8 text-center text-sm text-primary/50">
                    <p>© {new Date().getFullYear()} Maktabah El Mukhtar. {t('all_rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
