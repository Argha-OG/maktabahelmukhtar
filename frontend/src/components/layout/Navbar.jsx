"use client";

import { useState } from "react";
import { Book, Newspaper, Home, Info, Phone, Languages, ShoppingCart, MessageSquare, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();
    const { cartCount, setIsCartOpen } = useCart();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isAdminPage = pathname?.includes('/admin');
    if (isAdminPage) return null;

    const otherLocale = locale === 'en' ? 'ms' : 'en';
    const otherLocaleName = locale === 'en' ? 'Malay' : 'English';

    const navLinks = [
        { href: "/", label: t('home') },
        { href: "/about", label: t('about') },
        { href: "/books", label: t('catalog') },
        { href: "/services", label: "Services" },
        { href: "/authors", label: "Authors" },
        { href: "/vision", label: "Vision" },
        { href: "/feed", label: t('feed') },
        { href: "/gallery", label: t('gallery') },
    ];

    return (
        <>
            <header className="bg-scholarly-blue-950 text-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-gold-500 overflow-hidden">
                            <NextImage
                                src="/mem-logo.jpg"
                                alt="Maktabah El Mukhtar Logo"
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-wide">Maktabah El Mukhtar</h1>
                            <p className="text-[10px] text-gold-500 uppercase tracking-widest">Publishing Institution</p>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`transition-colors ${pathname === item.href ? "text-gold-500" : "hover:text-gold-500"}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-gold-500 text-scholarly-blue-950 px-5 py-2 rounded-full font-semibold hover:bg-white transition-all flex items-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            {t('contact')}
                        </Link>

                        {/* Right Actions: Lang & Cart & Whatspp */}
                        <div className="flex items-center gap-4 ml-4 border-l border-white/20 pl-4">
                            <Link
                                href={pathname}
                                locale={otherLocale}
                                className="hover:text-gold-500 transition-colors"
                                title={otherLocaleName}
                            >
                                <Languages className="h-5 w-5" />
                            </Link>

                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="hover:text-gold-500 transition-colors relative"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Menu & Actions */}
                    <div className="flex md:hidden items-center gap-3">
                        <Link
                            href={pathname}
                            locale={otherLocale}
                            className="hover:text-gold-500 transition-colors"
                        >
                            <Languages className="h-5 w-5" />
                        </Link>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="hover:text-gold-500 transition-colors relative"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="text-white hover:text-gold-500 transition-colors ml-2"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>

                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-scholarly-blue-950 border-t border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-sm font-medium ${pathname === item.href ? "text-gold-500" : "text-white hover:text-gold-500"}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="bg-gold-500 text-scholarly-blue-950 px-5 py-2 md:inline-flex rounded-full font-semibold hover:bg-white transition-all text-sm block text-center"
                                >
                                    {t('contact')}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
