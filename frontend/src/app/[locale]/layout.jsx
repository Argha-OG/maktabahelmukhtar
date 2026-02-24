import { Inter } from "next/font/google";
import "../globals.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL("https://maktabahelmukhtar.vercel.app"),
    title: {
        default: "Maktabah El Mukhtar | Islamic Book Publisher",
        template: "%s | Maktabah El Mukhtar",
    },
    description: "Official web presence for Maktabah El Mukhtar, an Islamic book writing, editing, and publishing institution based in Malaysia.",
    keywords: ["Islamic books", "Maktabah El Mukhtar", "Islamic publishing", "Malaysia", "Islamic literature", "Arabic books"],
    authors: [{ name: "Maktabah El Mukhtar" }],
    creator: "Maktabah El Mukhtar",
    icons: {
        icon: "/mem-logo.jpg",
        apple: "/mem-logo.jpg",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    openGraph: {
        type: "website",
        siteName: "Maktabah El Mukhtar",
        title: "Maktabah El Mukhtar | Islamic Book Publisher",
        description: "Official web presence for Maktabah El Mukhtar, an Islamic book writing, editing, and publishing institution based in Malaysia.",
        url: "https://maktabahelmukhtar.vercel.app",
        images: [
            {
                url: "/mem-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Maktabah El Mukhtar Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Maktabah El Mukhtar | Islamic Book Publisher",
        description: "Official web presence for Maktabah El Mukhtar, an Islamic book writing, editing, and publishing institution based in Malaysia.",
        images: ["/mem-logo.jpg"],
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
