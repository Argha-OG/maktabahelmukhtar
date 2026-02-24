"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirm", cancelText = "Cancel", type = "danger" }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white rounded-3xl p-8 w-full max-w-md relative z-10 shadow-2xl border border-primary/5"
                >
                    <button
                        onClick={onClose}
                        className="absolute right-6 top-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <div className={`p-4 rounded-2xl mb-6 ${type === 'danger' ? 'bg-red-50 text-red-500' : 'bg-primary/5 text-primary'}`}>
                            <AlertTriangle className="h-8 w-8" />
                        </div>

                        <h2 className="text-2xl font-black text-primary-dark mb-2 tracking-tight">{title}</h2>
                        <p className="text-primary/60 font-medium text-sm leading-relaxed mb-8">
                            {message}
                        </p>

                        <div className="flex gap-4 w-full">
                            <button
                                onClick={onClose}
                                className="flex-1 px-6 py-4 bg-gray-50 text-primary-dark/40 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-100 transition-all border border-primary/5"
                            >
                                {cancelText}
                            </button>
                            <button
                                onClick={() => {
                                    onConfirm();
                                    onClose();
                                }}
                                className={`flex-1 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-white transition-all shadow-xl shadow-current/20 ${type === 'danger' ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary-dark'
                                    }`}
                            >
                                {confirmText}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
