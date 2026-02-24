import { Link } from "@/navigation";
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('Footer');
    const nt = useTranslations('Navbar');

    return (
        <footer className="w-full border-t bg-primary-light py-12 text-primary-dark mt-auto">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{t('about_title')}</h3>
                        <p className="text-sm opacity-80">
                            {t('about_desc')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('links_title')}</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:underline">{nt('home')}</Link></li>
                            <li><Link href="/books" className="hover:underline">{nt('catalog')}</Link></li>
                            <li><Link href="/feed" className="hover:underline">{nt('feed')}</Link></li>
                            <li><Link href="/contact" className="hover:underline">{nt('contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('contact_title')}</h4>
                        <p className="text-sm opacity-80">
                            Email: info@maktabahelmukhtar.com<br />
                            {t('contact_whatsapp')}
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-xs opacity-60">
                    <p>© {new Date().getFullYear()} Maktabah El Mukhtar. {t('all_rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
