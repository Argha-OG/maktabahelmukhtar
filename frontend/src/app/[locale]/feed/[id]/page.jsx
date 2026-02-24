import FeedDetailClient from "./FeedDetailClient";

const BACKEND_URL = process.env.BACKEND_URL || "https://maktabahelmukhtar-66zs.vercel.app";

export async function generateMetadata({ params }) {
    try {
        const res = await fetch(`${BACKEND_URL}/api/feed?id=${params.id}`, {
            next: { revalidate: 3600 },
        });
        const data = await res.json();

        if (data.success && data.data) {
            const item = data.data;
            const description = item.content
                ? `${item.content.slice(0, 155)}...`
                : `${item.title} — ${item.type} from Maktabah El Mukhtar Daily Feed.`;

            return {
                title: item.title,
                description,
                openGraph: {
                    type: "article",
                    title: `${item.title} | Maktabah El Mukhtar`,
                    description,
                    url: `https://maktabahelmukhtar.vercel.app/en/feed/${params.id}`,
                    images: item.image
                        ? [{ url: item.image, width: 1200, height: 630, alt: item.title }]
                        : [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: item.title }],
                    publishedTime: item.date,
                },
                twitter: {
                    card: "summary_large_image",
                    title: `${item.title} | Maktabah El Mukhtar`,
                    description,
                    images: item.image ? [item.image] : ["/mem-logo.jpg"],
                },
            };
        }
    } catch (e) {
        // fallback to default metadata
    }

    return {
        title: "Daily Feed Post",
        description: "Read Islamic reminders, Hadith, and articles from Maktabah El Mukhtar.",
    };
}

export default function FeedDetailPage({ params }) {
    return <FeedDetailClient id={params.id} />;
}
