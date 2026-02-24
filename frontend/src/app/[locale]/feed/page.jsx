import FeedClient from "./FeedClient";

export const metadata = {
    title: "Daily Feed",
    description: "Stay connected with daily Islamic reminders, Hadith, articles, and announcements from Maktabah El Mukhtar.",
    openGraph: {
        title: "Daily Feed | Maktabah El Mukhtar",
        description: "Stay connected with daily Islamic reminders, Hadith, articles, and announcements from Maktabah El Mukhtar.",
        url: "https://maktabahelmukhtar.vercel.app/en/feed",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Maktabah El Mukhtar Daily Feed" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Daily Feed | Maktabah El Mukhtar",
        description: "Daily Islamic reminders, Hadith, and articles from Maktabah El Mukhtar.",
    },
};

export default function FeedPage() {
    return <FeedClient />;
}
