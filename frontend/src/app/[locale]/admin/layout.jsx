"use client";

import { useSession, signOut } from "next-auth/react";
import { Link, usePathname, useRouter } from "@/navigation";
import { LayoutDashboard, Book, Newspaper, LogOut, Loader2, Home, Users, Image as ImageIcon, Mail } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

export default function AdminLayout({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (status === "unauthenticated" && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [status, router, pathname]);

    if (status === "loading") {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-50">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
        );
    }

    if (!session && pathname !== "/admin/login") {
        return null;
    }

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-primary text-white flex-shrink-0">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8">
                        <Image
                            src="/mem-logo.jpg"
                            alt="Maktabah El Mukhtar Logo"
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                        /> Maktabah Admin
                    </Link>
                    <nav className="space-y-1">
                        <Link
                            href="/admin"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === "/admin" ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <LayoutDashboard className="h-5 w-5" /> Dashboard
                        </Link>
                        <Link
                            href="/admin/books"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/books") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <Book className="h-5 w-5" /> Manage Books
                        </Link>
                        <Link
                            href="/admin/feed"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/feed") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <Newspaper className="h-5 w-5" /> Manage Blogs
                        </Link>
                        <Link
                            href="/admin/authors"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/authors") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <Users className="h-5 w-5" /> Manage Authors
                        </Link>
                        <Link
                            href="/admin/gallery"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/gallery") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <ImageIcon className="h-5 w-5" /> Manage Gallery
                        </Link>
                        <Link
                            href="/admin/ads"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/ads") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <Home className="h-5 w-5" /> Manage Ads
                        </Link>
                        <Link
                            href="/admin/leads"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname.startsWith("/admin/leads") ? "bg-white/10" : "hover:bg-white/5"
                                }`}
                        >
                            <Mail className="h-5 w-5" /> Inbound Leads
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-6 border-t border-white/10">
                    <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-200 transition-colors"
                    >
                        <LogOut className="h-5 w-5" /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow p-4 md:p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
