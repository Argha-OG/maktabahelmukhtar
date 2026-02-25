"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Home, Power, MoveUp, MoveDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";

export default function AdsManagement() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [adToDelete, setAdToDelete] = useState(null);
    const [editingAd, setEditingAd] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        imageUrl: "",
        link: "/books",
        active: true,
        order: 0
    });

    const fetchAds = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/ads");
            const data = await res.json();
            if (data.success) setAds(data.data);
        } catch (error) {
            toast.error("Promotion synchronization failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingAd ? "PUT" : "POST";
        const body = editingAd ? { ...formData, id: editingAd._id } : formData;

        const loadToast = toast.loading(editingAd ? "Reconfiguring promotion..." : "Launching new advertisement...");

        try {
            const res = await fetch("/api/admin/ads", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            if (data.success) {
                toast.success(editingAd ? "Advertisement reconfigured" : "New promotion launched successfully", { id: loadToast });
                setShowModal(false);
                setEditingAd(null);
                setFormData({ title: "", subtitle: "", imageUrl: "", link: "/books", active: true, order: 0 });
                fetchAds();
            } else {
                toast.error("Process failed. Verify creative assets.", { id: loadToast });
            }
        } catch (error) {
            toast.error("Institutional uplink error", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Expunging promotion record...");
        try {
            const res = await fetch(`/api/admin/ads?id=${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                toast.success("Promotion record expunged", { id: loadToast });
                fetchAds();
            } else {
                toast.error("Deletion request denied", { id: loadToast });
            }
        } catch (error) {
            toast.error("Critical system error during deletion", { id: loadToast });
        }
    };

    const confirmDelete = (ad) => {
        setAdToDelete(ad);
        setShowConfirm(true);
    };

    const handleEdit = (ad) => {
        setEditingAd(ad);
        setFormData({
            title: ad.title,
            subtitle: ad.subtitle || "",
            imageUrl: ad.imageUrl,
            link: ad.link || "/books",
            active: ad.active,
            order: ad.order || 0
        });
        setShowModal(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Ads Management</h1>
                    <p className="text-gray-500">Manage hero banners and homepage promotions.</p>
                </div>
                <button
                    onClick={() => { setEditingAd(null); setFormData({ title: "", subtitle: "", imageUrl: "", link: "/books", active: true, order: ads.length }); setShowModal(true); }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all"
                >
                    <Plus className="h-5 w-5" /> Add New Ad
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary-dark">
                    {ads.map((ad) => (
                        <div key={ad._id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                            <div className="relative h-48">
                                <img src={ad.imageUrl} alt={ad.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button onClick={() => handleEdit(ad)} className="p-2 bg-white/90 backdrop-blur shadow-sm rounded-lg text-primary hover:bg-white transition-all">
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button onClick={() => confirmDelete(ad)} className="p-2 bg-white/90 backdrop-blur shadow-sm rounded-lg text-red-500 hover:bg-white transition-all">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                                {!ad.active && (
                                    <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center">
                                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Inactive</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold truncate">{ad.title}</h3>
                                    <span className="text-[10px] font-black uppercase text-primary/30 tracking-widest">Order: {ad.order}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-1">{ad.subtitle || "No subtitle provided"}</p>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                    <Home className="h-3 w-3" /> {ad.link}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => handleDelete(adToDelete?._id)}
                title="Expunge Promotion"
                message={`Are you sure you want to permanently delete the advertisement "${adToDelete?.title}"? This creative asset will be removed from all display zones.`}
            />

            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-3xl p-8 w-full max-w-lg relative z-10 shadow-2xl"
                        >
                            <h2 className="text-2xl font-black text-primary-dark mb-6">{editingAd ? "Edit Ad" : "New Ad"}</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Title</label>
                                    <input
                                        type="text" required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Main headline"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Subtitle</label>
                                    <input
                                        type="text"
                                        value={formData.subtitle}
                                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Small text below title"
                                    />
                                </div>
                                <ImageUpload
                                    label="Promotion Creative"
                                    value={formData.imageUrl}
                                    onChange={(url) => setFormData({ ...formData, imageUrl: url })}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Link</label>
                                        <input
                                            type="text"
                                            value={formData.link}
                                            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Order</label>
                                        <input
                                            type="number"
                                            value={formData.order}
                                            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox" id="activeAd"
                                        checked={formData.active}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary/20"
                                    />
                                    <label htmlFor="activeAd" className="text-sm font-bold text-primary-dark">Active Banner</label>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-6 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors">Cancel</button>
                                    <button type="submit" className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">Save Changes</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
