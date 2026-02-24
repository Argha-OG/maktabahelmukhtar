import BookDetailClient from "./BookDetailClient";

const BACKEND_URL = process.env.BACKEND_URL || "https://maktabahelmukhtar-66zs.vercel.app";

export async function generateMetadata({ params }) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/books/${params.id}`, {
            next: { revalidate: 3600 },
        });
        const data = await res.json();

        if (data.success && data.data) {
            const book = data.data;
            const description = book.description
                ? `${book.description.slice(0, 155)}...`
                : `${book.title} by ${book.author} — an authentic Islamic book published by Maktabah El Mukhtar.`;

            return {
                title: book.title,
                description,
                openGraph: {
                    type: "book",
                    title: `${book.title} | Maktabah El Mukhtar`,
                    description,
                    url: `https://maktabahelmukhtar.vercel.app/en/books/${params.id}`,
                    images: book.coverImage
                        ? [{ url: book.coverImage, width: 800, height: 1200, alt: book.title }]
                        : [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: book.title }],
                },
                twitter: {
                    card: "summary_large_image",
                    title: `${book.title} | Maktabah El Mukhtar`,
                    description,
                    images: book.coverImage ? [book.coverImage] : ["/mem-logo.jpg"],
                },
            };
        }
    } catch (e) {
        // fallback to default metadata
    }

    return {
        title: "Book Details",
        description: "Explore authentic Islamic books from Maktabah El Mukhtar.",
    };
}

export default function BookDetailPage({ params }) {
    return <BookDetailClient id={params.id} />;
}
