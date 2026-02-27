import AboutClient from "./AboutClient";

export const metadata = {
    title: "Tentang Kami & Perkhidmatan",
    description: "Mengenali barisan kepimpinan dan perkhidmatan penerbitan, penulisan, dan penyuntingan di Maktabah El Mukhtar.",
    openGraph: {
        title: "Tentang Kami | Maktabah El Mukhtar",
        description: "Mengenali barisan kepimpinan dan perkhidmatan penerbitan, penulisan, dan penyuntingan di Maktabah El Mukhtar.",
        url: "https://maktabahelmukhtar.vercel.app/en/about",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Maktabah El Mukhtar About" }],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
