import PaymentClient from "./PaymentClient";

export const metadata = {
    title: "Payment",
    description: "Complete your purchase securely via bank transfer or QR code payment. Maktabah El Mukhtar accepts multiple payment methods.",
    openGraph: {
        title: "Payment | Maktabah El Mukhtar",
        description: "Complete your purchase securely via bank transfer or QR code payment.",
        url: "https://maktabahelmukhtar.vercel.app/en/payment",
        images: [{ url: "/mem-logo.jpg", width: 1200, height: 630, alt: "Maktabah El Mukhtar Payment" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Payment | Maktabah El Mukhtar",
        description: "Complete your purchase securely. Maktabah El Mukhtar accepts multiple payment methods.",
    },
};

export default function PaymentPage() {
    return <PaymentClient />;
}
