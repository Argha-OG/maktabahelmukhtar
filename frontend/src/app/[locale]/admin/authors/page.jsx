"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Users, User, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";

export default function AuthorManagement() {
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [authorToDelete, setAuthorToDelete] = useState(null);
    const [editingAuthor, setEditingAuthor] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        bio: "",
        role: "Researcher",
        active: true
    });

    const fetchAuthors = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/authors");
            const data = await res.json();
            console.log("Authors API Response:", data);
            if (data.success) {
                setAuthors(data.data);
            } else {
                console.error("Authors fetch failed:", data.error);
            }
        } catch (error) {
            console.error("Authors fetch exception:", error);
            toast.error("Cloud synchronization failed");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAuthors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingAuthor ? "PUT" : "POST";
        const body = editingAuthor ? { ...formData, id: editingAuthor._id } : formData;

        const loadToast = toast.loading(editingAuthor ? "Updating scholarly records..." : "Registering new scholar...");

        try {
            const res = await fetch("/api/admin/authors", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            if (data.success) {
                toast.success(editingAuthor ? "Author profile updated" : "Scholar registered successfully", { id: loadToast });
                setShowModal(false);
                setEditingAuthor(null);
                setFormData({ name: "", image: "", bio: "", role: "Researcher", active: true });
                fetchAuthors();
            } else {
                toast.error("Registration failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("Network communication error", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Expunging record...");
        try {
            const res = await fetch(`/api/admin/authors?id=${id}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                toast.success("Record expunged successfully", { id: loadToast });
                fetchAuthors();
            } else {
                toast.error("Deletion failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("Critical system error during deletion", { id: loadToast });
        }
    };

    const confirmDelete = (author) => {
        setAuthorToDelete(author);
        setShowConfirm(true);
    };

    const handleEdit = (author) => {
        setEditingAuthor(author);
        setFormData({
            name: author.name,
            image: author.image,
            bio: author.bio,
            role: author.role || "Researcher",
            active: author.active
        });
        setShowModal(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Author Management</h1>
                    <p className="text-gray-500">Manage scholars and institutional researchers.</p>
                </div>
                <button
                    onClick={() => { setEditingAuthor(null); setFormData({ name: "", image: "", bio: "", role: "Researcher", active: true }); setShowModal(true); }}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all"
                >
                    <Plus className="h-5 w-5" /> Add New Author
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-primary-dark">
                    {authors.map((author) => (
                        <div key={author._id} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={author.image} alt={author.name} className="h-16 w-16 rounded-full object-cover border-2 border-primary/10" />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-black">{author.name}</h3>
                                    <div className="flex items-center gap-1.5 text-primary/40 text-[10px] font-black uppercase tracking-widest">
                                        <Shield className="h-3 w-3" /> {author.role}
                                    </div>
                                </div>
                            </div>
                            <p className="text-primary/60 text-sm mb-6 line-clamp-3 font-medium leading-relaxed italic">
                                "{author.bio}"
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                                <span className={`text-[10px] font-black uppercase tracking-widest ${author.active ? 'text-green-500' : 'text-gray-400'}`}>
                                    {author.active ? 'Active Profile' : 'Hidden'}
                                </span>
                                <div className="flex gap-2">
                                    <button onClick={() => handleEdit(author)} className="p-2 hover:bg-primary/5 rounded-lg text-primary transition-all">
                                        <Edit2 className="h-4 w-4" />
                                    </button>
                                    <button onClick={() => confirmDelete(author)} className="p-2 hover:bg-red-50 rounded-lg text-red-500 hover:text-white transition-all">
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => handleDelete(authorToDelete?._id)}
                title="Expunge Scholar Record"
                message={`Are you sure you want to permanently delete the profile for "${authorToDelete?.name}"? All associated data will be removed.`}
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
                            <h2 className="text-2xl font-black text-primary-dark mb-6">{editingAuthor ? "Edit Author" : "New Author"}</h2>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Full Name</label>
                                    <input
                                        type="text" required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Author / Scholar Name"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Role</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="e.g. Lead Scholar"
                                        />
                                    </div>
                                    <ImageUpload
                                        label="Author Photo"
                                        value={formData.image}
                                        onChange={(url) => setFormData({ ...formData, image: url })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-primary/40 mb-2">Biography</label>
                                    <textarea
                                        required rows={4}
                                        value={formData.bio}
                                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                        className="w-full bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                                        placeholder="Full academic and personal background..."
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox" id="activeAuthor"
                                        checked={formData.active}
                                        onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                        className="w-4 h-4 rounded text-primary focus:ring-primary/20"
                                    />
                                    <label htmlFor="activeAuthor" className="text-sm font-bold text-primary-dark">Visible on Site</label>
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
