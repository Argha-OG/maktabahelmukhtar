"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "@/navigation";
import Image from "next/image";

export default function CartSidebar() {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();
    const pathname = usePathname();

    const isAdminPage = pathname?.includes('/admin');
    if (isAdminPage) return null;

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white/80 backdrop-blur-xl border-l border-white/20 z-[101] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 flex items-center justify-between border-b border-primary/10">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                <h2 className="text-xl font-bold text-primary-dark">Your Cart</h2>
                                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-bold">
                                    {cart.length}
                                </span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-primary/5 rounded-full transition-colors"
                            >
                                <X className="h-6 w-6 text-primary/50" />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <ShoppingBag className="h-16 w-16 mb-4" />
                                    <p className="text-lg font-medium">Your cart is empty</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item._id} className="flex gap-4 group">
                                        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-primary/10 bg-gray-50">
                                            <img
                                                src={item.coverImage}
                                                alt={item.title}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="font-bold text-primary-dark line-clamp-1">{item.title}</h3>
                                                <p className="text-xs text-primary/50 font-medium uppercase tracking-wider">{item.category}</p>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-primary/5 rounded-lg px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item._id, -1)}
                                                        className="p-1 hover:text-primary transition-colors"
                                                    >
                                                        <Minus className="h-3 w-3" />
                                                    </button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item._id, 1)}
                                                        className="p-1 hover:text-primary transition-colors"
                                                    >
                                                        <Plus className="h-3 w-3" />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item._id)}
                                                    className="text-red-400 hover:text-red-600 transition-colors p-1"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-6 bg-white/50 border-t border-primary/10 space-y-4">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-primary/60 font-medium tracking-tight">Estimated Total</span>
                                    <span className="text-2xl font-bold text-primary-dark italic">Check via WA</span>
                                </div>
                                <p className="text-xs text-primary/40 leading-relaxed italic border-l-2 border-primary/20 pl-3">
                                    Final price (including shipping) will be calculated and sent to you via WhatsApp.
                                </p>
                                <button
                                    onClick={() => {
                                        const message = `Assalam admin, saya ingin membuat pesanan:\n\n${cart.map(item => `- ${item.title} (x${item.quantity})`).join('\n')}\n\nSila maklumkan jumlah termasuk pos. Terima kasih.`;
                                        const waLink = `https://wa.me/601136787525?text=${encodeURIComponent(message)}`;
                                        window.open(waLink, '_blank');
                                    }}
                                    className="w-full btn-premium bg-primary text-white py-4 shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-dark transition-all group"
                                >
                                    Checkout via WhatsApp <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
