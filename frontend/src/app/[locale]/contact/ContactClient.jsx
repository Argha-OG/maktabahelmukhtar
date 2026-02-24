"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useTranslations } from 'next-intl';
import toast from "react-hot-toast";

export default function ContactClient() {
    const t = useTranslations('Contact');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (data.success) {
                toast.success(data.message || "Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
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
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-primary text-white p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">{t('info_title')}</h2>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">{t('email_label')}</p>
                                    <p className="font-semibold">maktabahelmukhtar@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">{t('phone_label')}</p>
                                    <p className="font-semibold">+60 11-3678 7525</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">{t('visit_label')}</p>
                                    <p className="font-semibold">{t('address_val')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-80 rounded-2xl overflow-hidden border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127496.4457021246!2d101.64611578151045!3d3.023637588108079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdc8f1d0d72595%3A0xa5cbd5dbb0516831!2sBlock%20C2%2C%20Savanna%20Executive%20Suites!5e0!3m2!1sen!2smy!4v1771965692268!5m2!1sen!2smy"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Institution Location"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white border p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-6">{t('form_title')}</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('form_name')}</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder={t('form_name_placeholder')}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-primary-dark font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('form_email')}</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder={t('form_email_placeholder')}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-primary-dark font-medium"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t('form_subject')}</label>
                            <input
                                type="text"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                placeholder={t('form_subject_placeholder')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-primary-dark font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t('form_message')}</label>
                            <textarea
                                rows="5"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder={t('form_message_placeholder')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none text-primary-dark font-medium"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <Send className="h-5 w-5" />
                            )}
                            {loading ? "Sending..." : t('form_submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
