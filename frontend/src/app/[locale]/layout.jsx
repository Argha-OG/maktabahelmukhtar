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
};

export default async function RootLayout({ children, params: { locale } }) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${inter.className} flex min-h-screen flex-col`}>
                <NextIntlClientProvider messages={messages}>
                    <AuthProvider>
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
