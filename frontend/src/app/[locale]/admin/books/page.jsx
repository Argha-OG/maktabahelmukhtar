"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Search, X, Check } from "lucide-react";

export default function BookManagement() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingBook, setEditingBook] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        editor: "",
        description: "",
        coverImage: "",
        whatsappLink: "",
        category: "General",
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const res = await fetch("/api/books");
        const data = await res.json();
        if (data.success) setBooks(data.data);
        setLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingBook ? "PUT" : "POST";
        const url = editingBook ? `/api/books/${editingBook._id}` : "/api/books";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            fetchBooks();
            closeModal();
        }
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this book?")) {
            await fetch(`/api/books/${id}`, { method: "DELETE" });
            fetchBooks();
        }
    };

    const openModal = (book = null) => {
        if (book) {
            setEditingBook(book);
            setFormData(book);
        } else {
            setEditingBook(null);
            setFormData({
                title: "",
                author: "",
                editor: "",
                description: "",
                coverImage: "",
                whatsappLink: "",
                category: "General",
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingBook(null);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Book Management</h1>
                    <p className="text-gray-500">Add, edit, or delete book listings.</p>
                </div>
                <button
                    onClick={() => openModal()}
                    className="bg-primary text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-primary-dark transition-all"
                >
                    <Plus className="h-5 w-5" /> Add New Book
                </button>
            </div>

            <div className="bg-white border rounded-2xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Book</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Author</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                            <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {books.map((book) => (
                            <tr key={book._id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={book.coverImage} className="w-10 h-10 rounded object-cover border" />
                                        <span className="font-medium text-gray-800">{book.title}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{book.author}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-bold">
                                        {book.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => openModal(book)}
                                            className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                        >
                                            <Edit className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(book._id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                            <h2 className="text-xl font-bold text-gray-800">
                                {editingBook ? "Edit Book" : "Add New Book"}
                            </h2>
                            <button onClick={closeModal} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold">Book Title</label>
                                    <input
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold">Author</label>
                                    <input
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.author}
                                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold">Description</label>
                                <textarea
                                    required
                                    rows="3"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold">Cover Image URL</label>
                                    <input
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.coverImage}
                                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold">WhatsApp Link (Phone #)</label>
                                    <input
                                        required
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.whatsappLink}
                                        onChange={(e) => setFormData({ ...formData, whatsappLink: e.target.value })}
                                        placeholder="e.g. 1234567890"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-semibold">Category</label>
                                <select
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Fiqh</option>
                                    <option>Hadith</option>
                                    <option>History</option>
                                    <option>Theology</option>
                                    <option>General</option>
                                </select>
                            </div>
                        </form>
                        <div className="p-6 border-t bg-gray-50 flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 border rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all flex items-center gap-2"
                            >
                                <Check className="h-5 w-5" /> {editingBook ? "Update Book" : "Create Book"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
