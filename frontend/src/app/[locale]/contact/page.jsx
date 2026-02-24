"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

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
                                    <p className="font-semibold">info@maktabahelmukhtar.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">{t('phone_label')}</p>
                                    <p className="font-semibold">+1 234 567 890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">{t('visit_label')}</p>
                                    <p className="font-semibold">123 Islamic Center St, Knowledge City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-80 rounded-2xl overflow-hidden border">
                        {/* Embedded Google Map Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.563!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Institution Location"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white border p-8 rounded-2xl shadow-sm">
                    <h2 className="text-2xl font-bold text-primary mb-6">{t('form_title')}</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('form_name')}</label>
                                <input
                                    type="text"
                                    placeholder={t('form_name_placeholder')}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">{t('form_email')}</label>
                                <input
                                    type="email"
                                    placeholder={t('form_email_placeholder')}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t('form_subject')}</label>
                            <input
                                type="text"
                                placeholder={t('form_subject_placeholder')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">{t('form_message')}</label>
                            <textarea
                                rows="5"
                                placeholder={t('form_message_placeholder')}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
                        >
                            <Send className="h-5 w-5" /> {t('form_submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
