import ContactClient from "./ContactClient";

export const metadata = {
    title: "Contact Us",
    description: "Get in touch with Maktabah El Mukhtar. Reach us by email, phone, or visit us at our office in Malaysia.",
    openGraph: {
        title: "Contact Us | Maktabah El Mukhtar",
        description: "Get in touch with Maktabah El Mukhtar. Reach us by email, phone, or visit us at our office in Malaysia.",
        url: "https://maktabahelmukhtar.vercel.app/en/contact",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Contact Maktabah El Mukhtar" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Maktabah El Mukhtar",
        description: "Get in touch with Maktabah El Mukhtar.",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
