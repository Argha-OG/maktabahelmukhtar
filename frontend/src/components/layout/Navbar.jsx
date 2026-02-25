"use client";

import { useState } from "react";
import { Book, Newspaper, Home, Info, Phone, Languages, ShoppingCart, MessageSquare, Menu, X, CreditCard, Image } from "lucide-react";
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
        { href: "/", label: t('home'), icon: Home },
        { href: "/books", label: t('catalog'), icon: Book },
        { href: "/feed", label: t('feed'), icon: Newspaper },
        { href: "/gallery", label: t('gallery'), icon: Info },
        { href: "/contact", label: t('contact'), icon: Phone },
    ];

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-nav w-full max-w-6xl px-6 py-3 flex items-center justify-between"
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                        <NextImage
                            src="/mem-logo.jpg"
                            alt="Maktabah El Mukhtar Logo"
                            width={32}
                            height={32}
                            className="h-8 w-8 object-contain rounded-md shadow-sm"
                        />
                        <span className="hidden sm:inline-block tracking-tight">Maktabah El Mukhtar</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 items-center text-sm font-semibold text-primary/80">
                        {navLinks.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`hover:text-primary transition-all flex items-center gap-1 relative group ${pathname === item.href ? "text-primary px-3 py-1 bg-primary/5 rounded-full shadow-sm" : ""}`}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full ${pathname === item.href ? "hidden" : ""}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2">
                        {/* Language switcher */}
                        <Link
                            href={pathname}
                            locale={otherLocale}
                            className="p-2 rounded-full hover:bg-primary/5 transition-colors text-primary"
                            title={otherLocaleName}
                        >
                            <Languages className="h-5 w-5" />
                        </Link>

                        {/* Cart */}
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="p-2 rounded-full hover:bg-primary/5 transition-colors text-primary relative"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* WhatsApp — desktop only */}
                        <a
                            href="https://wa.me/60195328616"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex btn-premium bg-primary text-white hover:bg-primary-dark shadow-md items-center gap-2 text-sm"
                        >
                            <MessageSquare className="h-4 w-4" /> {t('contact_button')}
                        </a>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-primary/5 transition-colors text-primary"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-24 left-4 right-4 z-40 md:hidden"
                    >
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-primary/10 p-4 flex flex-col gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all
                                        ${pathname === item.href
                                            ? "bg-primary text-white shadow-md"
                                            : "text-primary/80 hover:bg-primary/5 hover:text-primary"
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    {item.label}
                                </Link>
                            ))}

                            <div className="border-t border-primary/10 mt-2 pt-3">
                                <a
                                    href="https://wa.me/60195328616"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-2xl font-bold text-sm shadow-lg shadow-primary/20"
                                >
                                    <MessageSquare className="h-4 w-4" /> {t('contact_button')}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-30 md:hidden"
                        onClick={() => setMobileOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
