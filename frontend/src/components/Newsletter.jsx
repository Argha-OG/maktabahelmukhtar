"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "@/navigation";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success
    const pathname = usePathname();

    const isAdminPage = pathname?.includes('/admin');
    if (isAdminPage) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 5000);
        }, 1500);
    };

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right scale-110"></div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto glass-card p-10 md:p-20 relative overflow-hidden border-primary/10 shadow-2xl shadow-primary/5"
                >
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6">
                                <Mail className="h-8 w-8" />
                            </div>
                            <h2 className="text-4xl font-bold text-primary-dark mb-6 tracking-tight">
                                Daily Spiritual Enrichment
                            </h2>
                            <p className="text-lg text-primary/60 leading-relaxed mb-0">
                                Join our community to receive updates on new publications,
                                exclusive scholarly insights, and the latest spiritual wisdom
                                from Maktabah El Mukhtar.
                            </p>
                        </div>

                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-green-500/10 border border-green-500/20 p-8 rounded-3xl text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 className="h-8 w-8" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-green-700 mb-2">Terima Kasih!</h4>
                                        <p className="text-green-600 font-medium">Anda telah berjaya melanggan buletin kami.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-white/50 backdrop-blur-md border border-primary/20 rounded-2xl px-6 py-5 text-lg text-primary-dark focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-primary/30"
                                            />
                                            <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-focus-within:border-primary/5 pointer-events-none transition-all"></div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-70 group"
                                        >
                                            {status === "loading" ? (
                                                <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    Subscribe Now
                                                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-xs text-primary/40 mt-4">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
