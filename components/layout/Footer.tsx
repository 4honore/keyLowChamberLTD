import { Link } from '@/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations('Footer');
    const navT = useTranslations('Navbar');

    return (
        <footer className="bg-primary-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Logo and Description */}
                    <div className="space-y-4">
                        <Image
                            src="/images/logo.png"
                            alt="Key Law Chambers Ltd"
                            width={160}
                            height={50}
                            className="h-12 w-auto brightness-0 invert"
                        />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('about')}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-accent-400">{t('quickLinks')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-accent-400 transition-colors">
                                    {navT('home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-accent-400 transition-colors">
                                    {navT('about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice-areas" className="text-gray-300 hover:text-accent-400 transition-colors">
                                    {navT('practiceAreas')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">
                                    {navT('contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-300 hover:text-accent-400 transition-colors">
                                    {t('privacyPolicy')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-accent-400">{t('contactUs')}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+250 788 304 792</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>ishimwehonore450@gmail.com</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{t('hours')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>{t('rights', { year: currentYear })}</p>
                </div>
            </div>
        </footer>
    );
}
