import { CreditCard, QrCode, Landmark } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Payment() {
    const t = useTranslations('Payment');

    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-primary mb-6 text-center">{t('title')}</h1>
                <p className="text-gray-600 mb-12 text-lg">
                    {t('subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Bank Transfer */}
                    <div className="bg-white border p-8 rounded-2xl shadow-sm text-center">
                        <Landmark className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-4">{t('bank_transfer')}</h2>
                        <div className="space-y-2 text-gray-700">
                            <p className="font-semibold">Bank Name: Islami Bank</p>
                            <p>Account Name: Maktabah El Mukhtar</p>
                            <p>Account Number: 123 4567 8901</p>
                            <p>Branch: Main Branch</p>
                        </div>
                    </div>

                    {/* QR Code */}
                    <div className="bg-white border p-8 rounded-2xl shadow-sm text-center">
                        <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-4">{t('scan_to_pay')}</h2>
                        <div className="bg-gray-100 p-4 rounded-xl inline-block mb-4">
                            <div className="w-40 h-40 bg-gray-300 flex items-center justify-center text-gray-500 rounded border-2 border-dashed border-gray-400">
                                <span className="text-xs">QR Code Placeholder</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">{t('supports')}</p>
                    </div>
                </div>

                <div className="bg-primary-light p-6 rounded-xl border-l-4 border-primary">
                    <p className="text-primary-dark font-medium italic">
                        "{t('contribution')}"
                    </p>
                </div>
            </div>
        </div>
    );
}
