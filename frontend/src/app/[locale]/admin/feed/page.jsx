"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Calendar, MessageSquare, Bell, Quote, X, Check, BookOpen, Image as ImageIcon, Edit2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";

export default function FeedManagement() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        type: "Hadith",
        title: "",
        image: "",
        content: "",
        description: "",
        source: "",
        active: true,
    });

    useEffect(() => {
        fetchFeed();
    }, []);

    const fetchFeed = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/feed");
            const data = await res.json();
            if (data.success) setItems(data.data);
        } catch (error) {
            toast.error("Cloud repository synchronization failed");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingItem ? "PUT" : "POST";
        const body = editingItem ? { ...formData, id: editingItem._id } : formData;

        const loadToast = toast.loading(editingItem ? "Revising scholarly record..." : "Transcribing into journal...");

        try {
            const res = await fetch("/api/feed", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                toast.success(editingItem ? "Scholarly insight revised" : "New entry published to journal", { id: loadToast });
                fetchFeed();
                closeModal();
            } else {
                toast.error("Publication process failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("Institutional link error", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Expunging insight...");
        try {
            const res = await fetch(`/api/feed?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Insight successfully expunged", { id: loadToast });
                fetchFeed();
            } else {
                toast.error("Expunge operation failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("Critical system failure during expunge", { id: loadToast });
        }
    };

    const confirmDelete = (item) => {
        setItemToDelete(item);
        setShowConfirm(true);
    };

    const openModal = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({
                type: item.type || "Hadith",
                title: item.title || "",
                image: item.image || "",
                content: item.content || "",
                description: item.description || "",
                source: item.source || "",
                active: item.active !== undefined ? item.active : true,
            });
        } else {
            setEditingItem(null);
            setFormData({ type: "Hadith", title: "", image: "", content: "", description: "", source: "", active: true });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingItem(null);
    };

    const getIcon = (type) => {
        switch (type) {
            case 'Hadith': return <Quote className="h-5 w-5" />;
            case 'Announcement': return <Bell className="h-5 w-5" />;
            case 'Quote': return <MessageSquare className="h-5 w-5" />;
            case 'Article': return <BookOpen className="h-5 w-5" />;
            default: return <MessageSquare className="h-5 w-5" />;
        }
    };

    const getColorClass = (type) => {
        switch (type) {
            case 'Hadith': return 'text-primary bg-primary/10';
            case 'Announcement': return 'text-yellow-600 bg-yellow-500/10';
            case 'Quote': return 'text-blue-500 bg-blue-500/10';
            case 'Article': return 'text-emerald-600 bg-emerald-500/10';
            default: return 'text-primary bg-primary/10';
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-primary-dark">Feed & Journal Management</h1>
                    <p className="text-primary/60 font-medium">Publish spiritual insights, announcements, and articles.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                    <Plus className="h-5 w-5" /> Write Insight
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 text-primary-dark">
                    {items.map((item) => (
                        <div key={item._id} className="bg-white p-6 rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 flex flex-col md:flex-row items-center gap-8 group hover:border-primary/20 transition-all">
                            <div className="w-full md:w-48 h-32 flex-shrink-0 bg-primary/5 rounded-2xl overflow-hidden border border-primary/10">
                                <img src={item.image || "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-lg ${getColorClass(item.type)}`}>
                                        {getIcon(item.type)}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">{item.type}</span>
                                    <span className="text-primary/10">•</span>
                                    <div className="flex items-center gap-1.5 text-primary/30 text-[10px] font-black uppercase tracking-widest">
                                        <Calendar className="h-3 w-3" /> {new Date(item.date).toLocaleDateString()}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                                <p className="text-primary/60 text-sm line-clamp-1 italic font-medium">"{item.content}"</p>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => openModal(item)}
                                    className="p-3 text-primary hover:bg-primary/5 rounded-xl transition-all"
                                >
                                    <Edit2 className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => confirmDelete(item)}
                                    className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}

                    {items.length === 0 && (
                        <div className="text-center py-40 glass-card bg-primary/5 border-dashed border-2 border-primary/10 rounded-[3rem]">
                            <ImageIcon className="h-16 w-16 mx-auto mb-6 text-primary/10" />
                            <h3 className="text-2xl font-bold text-primary-dark tracking-tight">Feed is Empty</h3>
                            <p className="text-primary/40 font-medium">Start your morning with a new scholarly insight.</p>
                        </div>
                    )}
                </div>
            )}

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => handleDelete(itemToDelete?._id)}
                title="Expunge Insight"
                message={`Are you sure you want to permanently delete this insight: "${itemToDelete?.title}"? This entry will be removed from the public journal.`}
            />

            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[2.5rem] w-full max-w-3xl relative z-10 shadow-2xl overflow-hidden"
                        >
                            <div className="bg-primary p-10 text-white flex justify-between items-center">
                                <div>
                                    <h2 className="text-3xl font-black">{editingItem ? "Edit Insight" : "New Insight"}</h2>
                                    <p className="text-white/60 font-medium mt-1">Institutional Feed Management</p>
                                </div>
                                <button onClick={closeModal} className="p-3 hover:bg-white/10 rounded-full transition-colors">
                                    <X className="h-7 w-7" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Insight Type</label>
                                        <select
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-black text-primary-dark"
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        >
                                            <option value="Hadith">Hadith</option>
                                            <option value="Quote">Mutiara Kata</option>
                                            <option value="Article">Scholarly Article</option>
                                            <option value="Announcement">Announcement</option>
                                            <option value="Newsletter">Newsletter</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Display Title</label>
                                        <input
                                            required placeholder="Enter catchy title..."
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Short Excerpt (Quote)</label>
                                    <textarea
                                        required rows="2" placeholder="The core message or hadith text..."
                                        className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark resize-none italic"
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Full Description / Article Content</label>
                                    <textarea
                                        rows="6" placeholder="Deep scholarly analysis or detailed announcement..."
                                        className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark resize-none lg:text-lg lg:leading-relaxed"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ImageUpload
                                        label="Hero Image"
                                        value={formData.image}
                                        onChange={(url) => setFormData({ ...formData, image: url })}
                                    />
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Source / Attribution</label>
                                        <input
                                            placeholder="e.g. Al-Bukhari, Imam Ash-Shafi'i"
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                            value={formData.source}
                                            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className="p-10 border-t bg-gray-50 flex justify-end gap-6">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-4 border border-primary/10 rounded-2xl font-black text-xs uppercase tracking-widest text-primary/40 hover:bg-gray-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all flex items-center gap-2"
                                >
                                    <Check className="h-4 w-4" /> {editingItem ? "Update Insight" : "Publish Journal"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
