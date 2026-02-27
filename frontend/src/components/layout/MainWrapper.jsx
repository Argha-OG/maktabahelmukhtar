"use client";

import { usePathname } from "@/navigation";

export default function MainWrapper({ children }) {
    const pathname = usePathname();
    const isAdmin = pathname?.includes('/admin');

    return (
        <main className="flex-grow">
            {children}
        </main>
    );
}
