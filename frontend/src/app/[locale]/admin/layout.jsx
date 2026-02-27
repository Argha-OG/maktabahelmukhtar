"use client";

import { useSession, signOut } from "next-auth/react";
import { Link, usePathname, useRouter } from "@/navigation";
import {
    LayoutDashboard, Book, Newspaper, LogOut, Loader2, Home, Users, Image as ImageIcon, Mail, Menu, Search, Bell
} from "lucide-react";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (status === "unauthenticated" && pathname !== "/admin/login") {
            router.push("/admin/login");
        }
    }, [status, router, pathname]);

    if (status === "loading") {
        return (
            <div className="h-screen flex items-center justify-center bg-slate-100">
                <Loader2 className="h-8 w-8 text-blue-800 animate-spin" />
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
        <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col md:flex-row overflow-hidden font-sans">
            <aside className={`${sidebarOpen ? 'flex absolute z-50' : 'hidden md:flex'} flex-col w-72 h-screen border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shrink-0 transition-colors duration-200`}>
                <div className="p-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-800/10 p-2 rounded-lg text-blue-800">
                            <Book className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Maktabah El Mukhtar</h1>
                            <p className="text-blue-800 text-xs font-semibold tracking-wide uppercase">Admin Console</p>
                        </div>
                    </div>
                    {/* Mobile close button */}
                    <button className="md:hidden text-slate-500" onClick={() => setSidebarOpen(false)}>
                        <Menu />
                    </button>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                    <Link
                        href="/admin"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-colors ${pathname === "/admin" ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <LayoutDashboard className="h-5 w-5" /> Dashboard
                    </Link>
                    <Link
                        href="/admin/books"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/books") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <Book className="h-5 w-5" /> Books Management
                    </Link>
                    <Link
                        href="/admin/feed"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/feed") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <Newspaper className="h-5 w-5" /> Daily Feed
                    </Link>
                    <Link
                        href="/admin/leads"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/leads") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <Mail className="h-5 w-5" /> Services Requests
                    </Link>
                    <Link
                        href="/admin/authors"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/authors") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <Users className="h-5 w-5" /> Writers Directory
                    </Link>
                    <Link
                        href="/admin/gallery"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/gallery") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <ImageIcon className="h-5 w-5" /> Media Gallery
                    </Link>
                    <Link
                        href="/admin/ads"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${pathname.startsWith("/admin/ads") ? "bg-blue-800 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-blue-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"}`}
                    >
                        <Home className="h-5 w-5" /> Hero Ads
                    </Link>
                    {/* Settings / SignOut */}
                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="flex w-full items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 font-medium transition-colors"
                        >
                            <LogOut className="h-5 w-5" /> Sign Out
                        </button>
                    </div>
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center gap-3 px-2">
                        <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center bg-blue-100 text-blue-800 font-bold uppercase">
                            {session?.user?.name?.[0] || "A"}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">{session?.user?.name || "Admin"}</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Super Admin</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <header className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
                    <div className="flex items-center gap-4 md:hidden">
                        <button className="text-slate-500 hover:text-blue-800" onClick={() => setSidebarOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </button>
                        <span className="font-bold text-lg text-blue-800">Maktabah</span>
                    </div>

                    <div className="hidden md:flex flex-col">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Dashboard Overview</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back, here's what's happening today.</p>
                    </div>

                    <div className="flex items-center gap-4 ml-auto">
                        <div className="relative hidden sm:block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <Search className="w-5 h-5" />
                            </span>
                            <input className="w-64 pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-800 placeholder-slate-400" placeholder="Search books, authors..." type="text" />
                        </div>
                        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth bg-slate-100 dark:bg-slate-900">
                    {children}
                </div>
            </main>

            {/* Mobile overlays */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
