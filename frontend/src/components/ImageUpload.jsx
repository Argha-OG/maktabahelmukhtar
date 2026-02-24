"use client";

import { useState, useRef } from "react";
import { Upload, Link as LinkIcon, X, ImageIcon, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ImageUpload({ value, onChange, label = "Image Selection" }) {
    const [isUploading, setIsUploading] = useState(false);
    const [mode, setMode] = useState("url"); // 'url' or 'upload'
    const fileInputRef = useRef(null);

    const handleUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validation
        if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("File size exceeds 5MB limit");
            return;
        }

        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/admin/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                onChange(data.url);
                toast.success("Image uploaded successfully");
            } else {
                toast.error(data.message || "Upload failed");
            }
        } catch (error) {
            toast.error("System error during upload");
            console.error(error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="block text-[10px] font-black uppercase tracking-widest text-primary/40">
                    {label}
                </label>
                <div className="flex bg-primary/5 p-1 rounded-lg">
                    <button
                        type="button"
                        onClick={() => setMode("url")}
                        className={`px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${mode === "url" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary"}`}
                    >
                        URL Link
                    </button>
                    <button
                        type="button"
                        onClick={() => setMode("upload")}
                        className={`px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-md transition-all ${mode === "upload" ? "bg-white text-primary shadow-sm" : "text-primary/40 hover:text-primary"}`}
                    >
                        Local File
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    {mode === "url" ? (
                        <div className="relative group">
                            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                value={value}
                                onChange={(e) => onChange(e.target.value)}
                                placeholder="Paste institutional image URL..."
                                className="w-full bg-primary/5 border border-primary/10 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/10 font-bold text-primary-dark transition-all"
                            />
                        </div>
                    ) : (
                        <div
                            onClick={() => !isUploading && fileInputRef.current?.click()}
                            className={`border-2 border-dashed border-primary/10 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 hover:bg-primary/5 transition-all group ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
                        >
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleUpload}
                                className="hidden"
                                accept="image/*"
                            />
                            {isUploading ? (
                                <Loader2 className="h-10 w-10 text-primary animate-spin mb-4" />
                            ) : (
                                <Upload className="h-10 w-10 text-primary/20 group-hover:text-primary/40 transition-colors mb-4" />
                            )}
                            <p className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-primary/60 transition-colors">
                                {isUploading ? "Uploading Resource..." : "Select Local Image"}
                            </p>
                            <p className="text-[10px] font-medium text-primary/20 mt-2">Maximum file size: 5MB</p>
                        </div>
                    )}
                </div>

                <div className="relative aspect-video md:aspect-square bg-primary/5 rounded-2xl overflow-hidden border border-primary/10 flex items-center justify-center group">
                    {value ? (
                        <>
                            <img
                                src={value}
                                alt="Preview"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                    type="button"
                                    onClick={() => onChange("")}
                                    className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-xl"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center opacity-10">
                            <ImageIcon className="h-12 w-12 mb-2" />
                            <span className="text-[10px] font-black uppercase tracking-widest">No Preview Available</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
