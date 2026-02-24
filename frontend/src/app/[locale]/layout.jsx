import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Maktabah El Mukhtar | Official Website",
    description: "Official web presence for Maktabah El Mukhtar, an Islamic book writing, editing, and publishing institution.",
    icons: {
        icon: "/mem-logo.jpg",
        apple: "/mem-logo.jpg",
    },
    openGraph: {
        title: "Maktabah El Mukhtar | Official Website",
        description: "Official web presence for Maktabah El Mukhtar, an Islamic book writing, editing, and publishing institution.",
        images: [
            {
                url: "/mem-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Maktabah El Mukhtar Logo",
            },
        ],
    },
};

import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import Newsletter from "@/components/Newsletter";
import { Toaster } from "react-hot-toast";
import MainWrapper from "@/components/layout/MainWrapper";

export default async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.className} flex min-h-screen flex-col`}>
                <NextIntlClientProvider messages={messages}>
                    <AuthProvider>
                        <CartProvider>
                            <Toaster position="top-center" reverseOrder={false} />
                            <Navbar />
                            <CartSidebar />
                            <MainWrapper>{children}</MainWrapper>
                            <Newsletter />
                            <Footer />
                        </CartProvider>
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
