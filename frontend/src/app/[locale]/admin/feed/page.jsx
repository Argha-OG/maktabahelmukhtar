"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Calendar, MessageSquare, Bell, Quote, Edit2, Search, Filter, FilterIcon, Eye, Image as ImageIcon, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/ConfirmModal";
import ImageUpload from "@/components/ImageUpload";
import { useSession } from "next-auth/react";

export default function FeedManagement() {
    const { data: session } = useSession();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [editingItem, setEditingItem] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All Categories");

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
        e?.preventDefault();
        const method = editingItem ? "PUT" : "POST";
        const body = editingItem ? { ...formData, id: editingItem._id } : formData;

        const loadToast = toast.loading(editingItem ? "Revising record..." : "Publishing to feed...");

        try {
            const res = await fetch("/api/feed", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (res.ok) {
                toast.success(editingItem ? "Record revised" : "New entry published", { id: loadToast });
                fetchFeed();
                closeModal();
                setFormData({ type: "Hadith", title: "", image: "", content: "", description: "", source: "", active: true }); // reset quick draft
            } else {
                toast.error("Publication failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("Network error", { id: loadToast });
        }
    };

    const handleDelete = async (id) => {
        const loadToast = toast.loading("Deleting post...");
        try {
            const res = await fetch(`/api/feed?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                toast.success("Post successfully deleted", { id: loadToast });
                fetchFeed();
            } else {
                toast.error("Delete failed", { id: loadToast });
            }
        } catch (error) {
            toast.error("System failure during delete", { id: loadToast });
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

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || item.content?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = categoryFilter === "All Categories" || item.type === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Formatting Helpers
    const getBadgeStyle = (type) => {
        switch (type) {
            case 'Hadith': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-500';
            case 'Announcement': return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-500';
            case 'Quote': return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-500';
            case 'Article': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-500';
            default: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 border-blue-500';
        }
    };

    const stats = {
        total: items.length,
        published: items.filter(i => i.active !== false).length,
        drafts: items.filter(i => i.active === false).length,
        hadith: items.filter(i => i.type === 'Hadith').length
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Posts</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.total}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <MessageSquare className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Published</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.published}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-800">
                        <Check className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Drafts</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.drafts}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <Edit2 className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hadith Collection</p>
                        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{stats.hadith}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Quote className="w-5 h-5" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <select
                            className="appearance-none pl-10 pr-8 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 cursor-pointer"
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option>All Categories</option>
                            <option>Hadith</option>
                            <option>Quote</option>
                            <option>Article</option>
                            <option>Announcement</option>
                        </select>
                        <FilterIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by title or content..."
                            className="pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-800/20 focus:border-blue-800 w-64 text-slate-700 dark:text-slate-200"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    </div>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold shadow-lg shadow-blue-800/20 transition-all active:scale-95 group"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    Create New Post
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-[400px]">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-800/20 border-t-blue-800"></div>
                    </div>
                ) : filteredItems.length > 0 ? (
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Post Details</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Category</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Author</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                                    <th className="py-4 px-6 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                {filteredItems.map(item => (
                                    <tr key={item._id} className="group hover:bg-blue-50/30 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className="h-12 w-16 rounded-md bg-cover bg-center shrink-0 border border-slate-200 dark:border-slate-600 bg-slate-100"
                                                    style={{ backgroundImage: `url(${item.image || "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=200"})` }}
                                                ></div>
                                                <div>
                                                    <p className="font-bold text-sm text-slate-900 dark:text-slate-100 max-w-xs truncate">{item.title}</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 max-w-xs">{item.content}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getBadgeStyle(item.type)}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full bg-current`}></span>
                                                {item.type}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 uppercase">
                                                    {(session?.user?.name || "AD").substring(0, 2)}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded border text-xs font-medium ${item.active !== false ? 'border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30' : 'border-slate-200 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'}`}>
                                                {item.active !== false ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                {new Date(item.createdAt || item.date || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </p>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                                <button onClick={() => openModal(item)} className="p-1.5 rounded-md text-slate-500 hover:text-blue-800 hover:bg-blue-800/10 transition-colors" title="Edit">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => confirmDelete(item)} className="p-1.5 rounded-md text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors" title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                        <ImageIcon className="h-12 w-12 text-slate-300 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No Posts Found</h3>
                        <p className="text-slate-500 text-sm">Try adjusting your filters or search query.</p>
                    </div>
                )}

                <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total: <span className="font-bold text-slate-900 dark:text-white">{filteredItems.length}</span> results</p>
                </div>
            </div>

            {/* Quick Draft Writer */}
            <div className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-6 mt-8 hidden xl:block">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Quick Draft</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-2 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
                            <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-700 text-sm focus:ring-blue-800 focus:border-blue-800 p-2 border"
                                placeholder="Enter post title..."
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Content Excerpt</label>
                            <div className="w-full rounded-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 overflow-hidden">
                                <textarea
                                    className="w-full border-none p-3 text-sm focus:ring-0 dark:bg-slate-700 h-32 resize-none"
                                    placeholder="Start writing the excerpt or quote..."
                                    value={formData.content}
                                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Category</label>
                            <div className="flex flex-col gap-2">
                                {['Hadith', 'Quote', 'Announcement'].map(cat => (
                                    <label key={cat} className="flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 has-[:checked]:bg-blue-800/5 has-[:checked]:border-blue-800/20 transition-all">
                                        <input
                                            className="text-blue-800 focus:ring-blue-800 border-slate-300"
                                            name="quickCategory"
                                            type="radio"
                                            checked={formData.type === cat}
                                            onChange={() => setFormData({ ...formData, type: cat })}
                                        />
                                        <span className="text-sm text-slate-700 dark:text-slate-300">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="pt-2 flex gap-2">
                            <button onClick={() => { setFormData({ ...formData, active: false }); handleSubmit(); }} className="flex-1 py-2 px-3 border border-slate-300 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700">Save Draft</button>
                            <button onClick={handleSubmit} className="flex-1 py-2 px-3 bg-blue-800 text-white rounded-lg text-sm font-medium hover:bg-blue-900">Publish</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Standard Modal for Full Edit/Create */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white dark:bg-slate-800 rounded-xl w-full max-w-3xl relative z-10 shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
                        >
                            <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">{editingItem ? "Edit Post" : "Create New Post"}</h2>
                                </div>
                                <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Category / Type</label>
                                        <select
                                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 dark:text-white"
                                            value={formData.type}
                                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                        >
                                            <option value="Hadith">Hadith</option>
                                            <option value="Quote">Quote</option>
                                            <option value="Article">Article</option>
                                            <option value="Announcement">Announcement</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Display Title</label>
                                        <input
                                            required placeholder="Enter post title..."
                                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 dark:text-white"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Excerpt (Card View)</label>
                                    <textarea
                                        required rows="2" placeholder="Short description or the quote itself..."
                                        className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 dark:text-white resize-none"
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Content</label>
                                    <textarea
                                        rows="6" placeholder="The full article or detailed announcement text..."
                                        className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 dark:text-white resize-none"
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <ImageUpload
                                        label="Featured Image"
                                        value={formData.image}
                                        onChange={(url) => setFormData({ ...formData, image: url })}
                                    />
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Source / Reference</label>
                                        <input
                                            placeholder="e.g., Sahih Bukhari, Event Location"
                                            className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-800 text-slate-900 dark:text-white"
                                            value={formData.source}
                                            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                                        />
                                        <div className="mt-4">
                                            <label className="flex items-center gap-2 cursor-pointer p-3 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 has-[:checked]:bg-blue-800/5 has-[:checked]:border-blue-800/20 transition-all">
                                                <input
                                                    className="text-blue-800 focus:ring-blue-800 border-slate-300 rounded"
                                                    type="checkbox"
                                                    checked={formData.active}
                                                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                                />
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Publish immediately</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="px-5 py-2 bg-blue-800 text-white rounded-lg text-sm font-medium hover:bg-blue-900 shadow-lg shadow-blue-800/20 transition-all flex items-center gap-2"
                                >
                                    <Check className="w-4 h-4" /> {editingItem ? "Update Post" : "Publish Post"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ConfirmModal
                isOpen={showConfirm}
                onClose={() => setShowConfirm(false)}
                onConfirm={() => handleDelete(itemToDelete?._id)}
                title="Delete Post"
                message={`Are you sure you want to permanently delete "${itemToDelete?.title}"?`}
            />
        </div>
    );
}
