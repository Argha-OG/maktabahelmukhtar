import GalleryClient from "./GalleryClient";

export const metadata = {
    title: "Gallery",
    description: "Explore the visual gallery of Maktabah El Mukhtar — photographs of our books, events, and publishing work.",
    openGraph: {
        title: "Gallery | Maktabah El Mukhtar",
        description: "Explore the visual gallery of Maktabah El Mukhtar — photographs of our books, events, and publishing work.",
        url: "https://maktabahelmukhtar.vercel.app/en/gallery",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Maktabah El Mukhtar Gallery" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gallery | Maktabah El Mukhtar",
        description: "Explore the visual gallery of Maktabah El Mukhtar.",
    },
};

export default function GalleryPage() {
    return <GalleryClient />;
}
