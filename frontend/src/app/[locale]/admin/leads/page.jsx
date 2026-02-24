"use client";

import { useEffect, useState } from "react";
import { Mail, User, BookOpen, Trash2, CheckCircle, Clock, Loader2, Search, Filter } from "lucide-react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadsManagement() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/admin/leads");
            const data = await res.json();
            if (data.success) {
                setLeads(data.data);
            }
        } catch (error) {
            toast.error("Failed to fetch leads");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const updateStatus = async (id, newStatus) => {
        try {
            const res = await fetch("/api/admin/leads", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status: newStatus })
            });
            const data = await res.json();
            if (data.success) {
                setLeads(leads.map(l => l._id === id ? { ...l, status: newStatus } : l));
                toast.success(`Lead marked as ${newStatus}`);
            }
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const deleteLead = async (id) => {
        if (!confirm("Are you sure you want to delete this lead?")) return;

        try {
            const res = await fetch(`/api/admin/leads?id=${id}`, {
                method: "DELETE"
            });
            const data = await res.json();
            if (data.success) {
                setLeads(leads.filter(l => l._id !== id));
                toast.success("Lead deleted successfully");
            }
        } catch (error) {
            toast.error("Failed to delete lead");
        }
    };

    const filteredLeads = leads.filter(lead => {
        const matchesSearch =
            lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.subject.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterStatus === "all" || lead.status === filterStatus;

        return matchesSearch && matchesFilter;
    });

    const getStatusStyle = (status) => {
        switch (status) {
            case "new": return "bg-blue-100 text-blue-800 border-blue-200";
            case "read": return "bg-gray-100 text-gray-800 border-gray-200";
            case "contacted": return "bg-green-100 text-green-800 border-green-200";
            case "archived": return "bg-amber-100 text-amber-800 border-amber-200";
            default: return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    if (loading) return (
        <div className="h-96 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
            <p className="text-primary/40 font-black uppercase tracking-widest text-xs">Synchronizing Inquiries...</p>
        </div>
    );

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-primary-dark tracking-tight">Lead Repository</h1>
                    <p className="text-primary/60 font-medium mt-1">Monitor and manage institutional inquiries and contact requests.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
                        <input
                            type="text"
                            placeholder="Search names, emails..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 bg-white border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none text-sm w-full sm:w-64"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="pl-10 pr-8 py-2.5 bg-white border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none text-sm appearance-none leading-tight"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="contacted">Contacted</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary/5 border-b border-primary/10">
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-primary/40">Respondent</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-primary/40">Inquiry Details</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-primary/40">Submission Date</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-primary/40 text-right">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/5">
                            <AnimatePresence mode="popLayout">
                                {filteredLeads.map((lead) => (
                                    <motion.tr
                                        key={lead._id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="hover:bg-primary/[0.02] transition-colors group"
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                                                    {lead.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-primary-dark">{lead.name}</p>
                                                    <p className="text-xs text-primary/50 font-medium">{lead.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 max-w-md">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black uppercase border ${getStatusStyle(lead.status)}`}>
                                                    {lead.status}
                                                </span>
                                                <p className="font-bold text-sm text-primary-dark line-clamp-1">{lead.subject}</p>
                                            </div>
                                            <p className="text-xs text-primary/60 line-clamp-2 leading-relaxed">{lead.message}</p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2 text-xs text-primary/40 font-medium">
                                                <Clock className="h-3 w-3" />
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {lead.status === "new" && (
                                                    <button
                                                        onClick={() => updateStatus(lead._id, "read")}
                                                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                        title="Mark as Read"
                                                    >
                                                        <CheckCircle className="h-5 w-5" />
                                                    </button>
                                                )}
                                                {lead.status === "read" && (
                                                    <button
                                                        onClick={() => updateStatus(lead._id, "contacted")}
                                                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                                        title="Mark as Contacted"
                                                    >
                                                        <CheckCircle className="h-5 w-5" />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => deleteLead(lead._id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete Lead"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                            {filteredLeads.length === 0 && (
                                <tr>
                                    <td colSpan="4" className="px-8 py-20 text-center">
                                        <div className="flex flex-col items-center gap-4 opacity-20">
                                            <Mail className="h-12 w-12" />
                                            <p className="font-black uppercase tracking-widest text-xs text-primary">No communications found</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
