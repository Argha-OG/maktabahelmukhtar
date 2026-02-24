"use client";

import { Book, Newspaper, Home, Info, Phone, LogIn, CreditCard, Languages } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';

const Navbar = () => {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();

    const otherLocale = locale === 'en' ? 'ms' : 'en';
    const otherLocaleName = locale === 'en' ? 'Malay' : 'English';

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white text-primary">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
                    <Book className="h-8 w-8 text-primary" />
                    <span className="hidden sm:inline-block">Maktabah El Mukhtar</span>
                </Link>
                <div className="hidden md:flex gap-8 items-center text-sm font-medium">
                    <Link href="/" className="hover:text-primary-dark transition-colors flex items-center gap-1">
                        <Home className="h-4 w-4" /> {t('home')}
                    </Link>
                    <Link href="/books" className="hover:text-primary-dark transition-colors flex items-center gap-1">
                        <Book className="h-4 w-4" /> {t('catalog')}
                    </Link>
                    <Link href="/feed" className="hover:text-primary-dark transition-colors flex items-center gap-1">
                        <Newspaper className="h-4 w-4" /> {t('feed')}
                    </Link>
                    <Link href="/gallery" className="hover:text-primary-dark transition-colors flex items-center gap-1">
                        <Info className="h-4 w-4" /> {t('gallery')}
                    </Link>
                    <Link href="/contact" className="hover:text-primary-dark transition-colors flex items-center gap-1">
                        <Phone className="h-4 w-4" /> {t('contact')}
                    </Link>
                    <Link href="/payment" className="hover:text-primary-dark transition-colors flex items-center gap-1 font-bold">
                        <CreditCard className="h-4 w-4" /> {t('payment')}
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={pathname}
                        locale={otherLocale}
                        className="flex items-center gap-1 text-sm font-medium hover:text-primary-dark transition-colors mr-2"
                    >
                        <Languages className="h-4 w-4" /> {otherLocaleName}
                    </Link>
                    <Link
                        href="/admin"
                        className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
                    >
                        <LogIn className="h-4 w-4" /> {t('admin')}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
