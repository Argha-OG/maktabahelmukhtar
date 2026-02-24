import BooksClient from "./BooksClient";

export const metadata = {
    title: "Book Catalog",
    description: "Browse the full catalog of Islamic books published by Maktabah El Mukhtar — authentic literature on Fiqh, Aqeedah, Hadith, Tafsir, and more.",
    openGraph: {
        title: "Book Catalog | Maktabah El Mukhtar",
        description: "Browse the full catalog of Islamic books published by Maktabah El Mukhtar — authentic literature on Fiqh, Aqeedah, Hadith, Tafsir, and more.",
        url: "https://maktabahelmukhtar.vercel.app/en/books",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Maktabah El Mukhtar Book Catalog" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Catalog | Maktabah El Mukhtar",
        description: "Browse the full catalog of Islamic books published by Maktabah El Mukhtar.",
    },
};

export default function BooksPage() {
    return <BooksClient />;
}
