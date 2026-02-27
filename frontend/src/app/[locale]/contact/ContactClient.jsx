"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, Menu, HelpCenter } from "lucide-react";
import { useTranslations } from 'next-intl';
import toast from "react-hot-toast";

export default function ContactClient() {
    const t = useTranslations('Contact');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        inquiryType: "General Inquiry",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    subject: formData.inquiryType,
                })
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message || "Message sent successfully!");
                setFormData({ name: "", email: "", phone: "", inquiryType: "General Inquiry", message: "" });
            } else {
                toast.error(data.error || "Failed to send message.");
            }
        } catch (error) {
            toast.error("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col font-serif antialiased selection:bg-primary/20">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-slate-800 py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t('title')}</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
                            {t('subtitle')}
                        </p>
                    </div>
                </section>

                {/* Form & Info */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-10">
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Contact Form */}
                            <div className="p-8 lg:p-12">
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('form_title')}</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className="block">
                                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2 block">{t('form_name')}</span>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400"
                                                placeholder={t('form_name_placeholder')}
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2 block">{t('form_email')}</span>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400"
                                                placeholder={t('form_email_placeholder')}
                                            />
                                        </label>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className="block">
                                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2 block">Phone Number (Optional)</span>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 placeholder:text-slate-400"
                                                placeholder="+20 123 456 789"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2 block">Inquiry Type</span>
                                            <select
                                                value={formData.inquiryType}
                                                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                                className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4"
                                            >
                                                <option>General Inquiry</option>
                                                <option>Publishing Proposal</option>
                                                <option>Order Status</option>
                                                <option>Library Membership</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label className="block">
                                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm mb-2 block">{t('form_message')}</span>
                                        <textarea
                                            rows="4"
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:border-primary focus:ring-primary p-4 resize-none placeholder:text-slate-400"
                                            placeholder={t('form_message_placeholder')}
                                        ></textarea>
                                    </label>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-4 w-4" />}
                                    </button>
                                </form>
                            </div>

                            {/* Info & Map */}
                            <div className="bg-slate-50 dark:bg-slate-900 p-8 lg:p-12 flex flex-col gap-8 border-l border-slate-100 dark:border-slate-800">
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t('info_title')}</h2>

                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Our Main Office</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                                                {t('address_val')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Phone & WhatsApp</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">Mon-Thu, 9 AM - 5 PM</p>
                                            <a href="tel:+601136787525" className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm">
                                                +60 11-3678 7525
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Email Us</h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-2">For general queries & support</p>
                                            <a href="mailto:maktabahelmukhtar@gmail.com" className="text-primary hover:text-primary-dark font-medium text-sm">
                                                maktabahelmukhtar@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg overflow-hidden h-48 w-full border border-slate-200 dark:border-slate-700 bg-slate-200 relative">
                                    <iframe
                                        className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                        height="100%"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127496.4457021246!2d101.64611578151045!3d3.023637588108079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc8f1d0d72595%3A0xa5cbd5dbb0516831!2sBlock%20C2%2C%20Savanna%20Executive%20Suites!5e0!3m2!1sen!2smy!4v1771965692268!5m2!1sen!2smy"
                                        style={{ border: 0 }}
                                        width="100%"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visit Our Library */}
                <section className="py-16 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/2">
                                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] group">
                                    <img
                                        alt="Serene library interior with wooden bookshelves"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2190&auto=format&fit=crop"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <p className="text-sm font-bold uppercase tracking-widest mb-1 text-primary">Our Space</p>
                                        <h3 className="text-2xl font-bold">A Sanctuary for Knowledge</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Visit Our Library</h2>
                                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                                        Maktabah El Mukhtar isn't just a publisher; we are a community hub for scholars and readers. Our library offers a quiet, respectful environment perfect for research and contemplation.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <div className="text-primary mb-2">
                                            <Menu className="h-8 w-8" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Extensive Collection</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Over 50,000 titles available</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <div className="text-primary mb-2">
                                            <Phone className="h-8 w-8" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Reading Rooms</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Quiet spaces for study</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Prompt */}
                <section className="py-16 bg-primary/5 dark:bg-primary/5 border-y border-primary/10">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <div className="mx-auto flex justify-center text-primary mb-4">
                            <Menu className="h-12 w-12" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Have Questions?</h2>
                        <p className="text-slate-600 dark:text-slate-300 mb-8">
                            Before you reach out, you might find the answer you're looking for in our frequently asked questions section.
                        </p>
                        <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-primary hover:text-primary font-bold py-3 px-8 rounded-lg transition-all shadow-sm">
                            View FAQs
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
