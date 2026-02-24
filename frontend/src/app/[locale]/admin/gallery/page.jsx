"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Image as ImageIcon, Calendar, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";

export default function GalleryManagement() {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageUrl: "",
        date: new Date().toISOString().split('T')[0],
        category: "Institutional"
    });

    const fetchGallery = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/gallery");
            const data = await res.json();
            if (data.success) setGallery(data.data);
        } catch (error) {
            toast.error("Failed to archive institutional records");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingItem ? "PUT" : "POST";
        const body = editingItem ? { ...formData, id: editingItem._id } : formData;

        const loadToast = toast.loading(editingItem ? "Archiving revisions..." : "Capturing new record...");

        try {
            const res = await fetch("/api/admin/gallery", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            if (data.success) {
                toast.success(editingItem ? "Record archived successfully" : "Event captured and registered", { id: loadToast });
                setShowModal(false);
                setEditingItem(null);
                setFormData({ title: "", description: "", imageUrl: "", date: new Date().toISOString().split('T')[0], category: "Institutional" });
                fetchGallery();
            } else {
                toast.error("Process failed. Please verify metadata.", { id: loadToast });
            }
        } catch (error) {
            toast.error("Network communication failure", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Expunging institutional record...");
        try {
            const res = await fetch(`/api/admin/gallery?id=${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                toast.success("Record expunged from archives", { id: loadToast });
                fetchGallery();
            } else {
                toast.error("Deletion operation denied", { id: loadToast });
            }
        } catch (error) {
            toast.error("Critical archival link error", { id: loadToast });
        }
    };

    const confirmDelete = (item) => {
        setItemToDelete(item);
        setShowConfirm(true);
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setFormData({
            title: item.title,
            description: item.description || "",
            imageUrl: item.imageUrl,
            date: new Date(item.date).toISOString().split('T')[0],
            category: item.category || "Institutional"
        });
        setShowModal(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Gallery Management</h1>
                    <p className="text-gray-500">Manage institutional events and photo records.</p>
                </div>
                <button
                    onClick={() => { setEditingItem(null); setFormData({ title: "", description: "", imageUrl: "", date: new Date().toISOString().split('T')[0], category: "Institutional" }); setShowModal(true); }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all"
                >
                    <Plus className="h-5 w-5" /> Add New Event
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-primary-dark">
                    {gallery.map((item) => (
                        <div key={item._id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                            <div className="relative h-48">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button onClick={() => handleEdit(item)} className="p-2 bg-white/90 backdrop-blur shadow-sm rounded-lg text-primary hover:bg-white transition-all">
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button onClick={() => confirmDelete(item)} className="p-2 bg-white/90 backdrop-blur shadow-sm rounded-lg text-red-500 hover:bg-white transition-all">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-primary text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 truncate">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                                <div className="flex items-center gap-4 text-primary/40 text-[10px] font-black uppercase tracking-widest border-t border-primary/5 pt-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3 w-3" /> {new Date(item.date).toLocaleDateString()}
                                    </div>
                                    <div className="flex items-center gap-1.5 ml-auto">
                                        <Tag className="h-3 w-3" /> {item.category}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

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
                            <h2 className="text-2xl font-black text-primary-dark mb-6">{editingItem ? "Edit Event" : "New Event"}</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Event Title</label>
                                    <input
                                        type="text" required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Name of the record/event"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Date</label>
                                        <input
                                            type="date" required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Category</label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        >
                                            <option value="Institutional">Institutional</option>
                                            <option value="Events">Events</option>
                                            <option value="Research">Research</option>
                                            <option value="Community">Community</option>
                                        </select>
                                    </div>
                                </div>
                                <ImageUpload
                                    label="Event Photo"
                                    value={formData.imageUrl}
                                    onChange={(url) => setFormData({ ...formData, imageUrl: url })}
                                />
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Description</label>
                                    <textarea
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                        placeholder="Brief details about the event..."
                                    />
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => setShowModal(false)} className="flex-1 px-6 py-3 border border-primary/10 rounded-xl font-bold hover:bg-gray-50">Cancel</button>
                                    <button type="submit" className="flex-1 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">Save Record</button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
