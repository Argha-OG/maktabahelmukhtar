"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Search, X, Check, Book as BookIcon, User as UserIcon, DollarSign, Star, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";

export default function BookManagement() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);
    const [editingBook, setEditingBook] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        editor: "",
        description: "",
        coverImage: "",
        authorImage: "",
        authorBio: "",
        price: 0,
        isBestSeller: false,
        whatsappLink: "",
        category: "General",
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/books");
            const data = await res.json();
            if (data.success) setBooks(data.data);
        } catch (error) {
            toast.error("Failed to load catalog");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingBook ? "PUT" : "POST";
        const url = editingBook ? `/api/books/${editingBook._id}` : "/api/books";

        const loadToast = toast.loading(editingBook ? "Updating repository..." : "Adding to catalog...");

        try {
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success(editingBook ? "Book updated successfully" : "New book added to library", { id: loadToast });
                fetchBooks();
                closeModal();
            } else {
                toast.error("Process failed. Please verify data.", { id: loadToast });
            }
        } catch (error) {
            toast.error("Network synchronization error", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Removing from repository...");
        try {
            const res = await fetch(`/api/books/${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Book removed from catalog", { id: loadToast });
                fetchBooks();
            } else {
                toast.error("Failed to delete record", { id: loadToast });
            }
        } catch (error) {
            toast.error("Critical deletion error", { id: loadToast });
        }
    };

    const confirmDelete = (book) => {
        setBookToDelete(book);
        setShowConfirm(true);
    };

    const openModal = (book = null) => {
        if (book) {
            setEditingBook(book);
            setFormData({
                title: book.title || "",
                author: book.author || "",
                editor: book.editor || "",
                description: book.description || "",
                coverImage: book.coverImage || "",
                authorImage: book.authorImage || "",
                authorBio: book.authorBio || "",
                price: book.price || 0,
                isBestSeller: book.isBestSeller || false,
                whatsappLink: book.whatsappLink || "",
                category: book.category || "General",
            });
        } else {
            setEditingBook(null);
            setFormData({
                title: "",
                author: "",
                editor: "",
                description: "",
                coverImage: "",
                authorImage: "",
                authorBio: "",
                price: 35,
                isBestSeller: false,
                whatsappLink: "60195328616",
                category: "General",
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingBook(null);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-primary-dark">Books Management</h1>
                    <p className="text-primary/60 font-medium">Manage your elite book collection and scholarly data.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                    <Plus className="h-5 w-5" /> Add New Book
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary"></div>
                </div>
            ) : (
                <div className="bg-white rounded-3xl border border-primary/5 shadow-xl shadow-primary/5 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-primary/5 border-b border-primary/5">
                                <tr>
                                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-primary/40">Book & Author</th>
                                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-primary/40">Pricing</th>
                                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-primary/40">Status</th>
                                    <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-primary/40 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-primary/5">
                                {books.map((book) => (
                                    <tr key={book._id} className="hover:bg-primary/5 transition-colors group">
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-10 flex-shrink-0 bg-primary/5 rounded-lg overflow-hidden border border-primary/10">
                                                    <img src={book.coverImage} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <span className="block font-black text-primary-dark group-hover:text-primary transition-colors">{book.title}</span>
                                                    <span className="text-xs font-bold text-primary/40 uppercase tracking-widest flex items-center gap-1.5 mt-1">
                                                        <UserIcon className="h-3 w-3" /> {book.author}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex flex-col">
                                                <span className="font-black text-primary-dark text-lg">RM {book.price || '0'}</span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary/30">Institutional Price</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-3">
                                                <span className="bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-primary/10">
                                                    {book.category}
                                                </span>
                                                {book.isBestSeller && (
                                                    <span className="bg-yellow-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-yellow-500/20">
                                                        Best Seller
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => openModal(book)}
                                                    className="p-3 text-primary hover:bg-primary/10 rounded-xl transition-all"
                                                >
                                                    <Edit className="h-5 w-5" />
                                                </button>
                                                <button
                                                    onClick={() => confirmDelete(book)}
                                                    className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => handleDelete(bookToDelete?._id)}
                title="Remove from Catalog"
                message={`Are you sure you want to permanently delete "${bookToDelete?.title}"? This action is irreversible.`}
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
                            className="bg-white rounded-[2.5rem] w-full max-w-4xl relative z-10 shadow-2xl overflow-hidden"
                        >
                            <div className="bg-primary-dark p-10 text-white flex justify-between items-center">
                                <div>
                                    <h2 className="text-3xl font-black">{editingBook ? "Scholarly Record" : "Register Book"}</h2>
                                    <p className="text-white/60 font-medium mt-1">Institutional Publication Management</p>
                                </div>
                                <button onClick={closeModal} className="p-3 hover:bg-white/10 rounded-full transition-colors">
                                    <X className="h-7 w-7" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                {/* Basic Info */}
                                <div className="space-y-6">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 border-b border-primary/5 pb-2">Core Information</h3>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Book Title</label>
                                        <input
                                            required placeholder="The Eternal Message..."
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Author Name</label>
                                            <input
                                                required placeholder="Al-Imam..."
                                                className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                                value={formData.author}
                                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Editor (Tahqiq)</label>
                                            <input
                                                placeholder="Sheikh..."
                                                className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                                value={formData.editor}
                                                onChange={(e) => setFormData({ ...formData, editor: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Synopsis / Description</label>
                                        <textarea
                                            required rows="4" placeholder="Brief summary of the work..."
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark resize-none"
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Metadata & Media */}
                                <div className="space-y-6 text-primary-dark">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 border-b border-primary/5 pb-2">Catalog & Pricing</h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Price (RM)</label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                                                <input
                                                    type="number" required step="0.01"
                                                    className="w-full bg-primary/5 border border-primary/10 rounded-2xl pl-10 pr-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-black text-primary-dark"
                                                    value={formData.price}
                                                    onChange={(e) => {
                                                        const val = e.target.value === "" ? 0 : parseFloat(e.target.value);
                                                        setFormData({ ...formData, price: val });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">Category</label>
                                            <select
                                                className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-black text-primary-dark"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            >
                                                <option value="Fiqh">Fiqh</option>
                                                <option value="Hadith">Hadith</option>
                                                <option value="History">History</option>
                                                <option value="Theology">Theology</option>
                                                <option value="General">General</option>
                                            </select>
                                        </div>
                                    </div>

                                    <ImageUpload
                                        label="Cover Image"
                                        value={formData.coverImage}
                                        onChange={(url) => setFormData({ ...formData, coverImage: url })}
                                    />

                                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <input
                                                type="checkbox" id="bestSellerCheck"
                                                className="h-5 w-5 rounded border-primary/10 text-primary focus:ring-primary/20"
                                                checked={formData.isBestSeller}
                                                onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                                            />
                                            <label htmlFor="bestSellerCheck" className="font-black text-xs uppercase tracking-widest text-primary-dark">Feature as Best Seller</label>
                                        </div>
                                        <p className="text-[10px] text-primary/40 font-bold leading-relaxed">Featured books appear with a gold badge and are prioritized in search results and homepage sliders.</p>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40 mb-2">WhatsApp Contact (Admin)</label>
                                        <input
                                            required placeholder="601136787525"
                                            className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark"
                                            value={formData.whatsappLink}
                                            onChange={(e) => setFormData({ ...formData, whatsappLink: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </form>

                            <div className="p-10 border-t bg-gray-50 flex justify-end gap-6">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-100 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary/90 shadow-2xl shadow-primary/20 transition-all flex items-center gap-2"
                                >
                                    <Check className="h-4 w-4" /> {editingBook ? "Submit Update" : "Finalize Publication"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
