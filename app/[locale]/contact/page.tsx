import { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';
import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ContactPage.metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{t('hero.title')}</h1>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-100">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">{t('info.title')}</h2>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                {t('info.description')}
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{t('info.phone')}</h3>
                                        <a href="tel:+250788304792" className="text-gray-700 hover:text-accent-600 transition-colors">
                                            +250 788 304 792
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{t('info.email')}</h3>
                                        <a href="mailto:ishimwehonore450@gmail.com" className="text-gray-700 hover:text-accent-600 transition-colors">
                                            ishimwehonore450@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{t('info.hours.title')}</h3>
                                        <p className="text-gray-700">{t('info.hours.days')}</p>
                                        <p className="text-gray-700">{t('info.hours.time')}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start">
                                    <div className="bg-accent-100 p-3 rounded-lg mr-4">
                                        <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">{t('info.location.title')}</h3>
                                        <p className="text-gray-700">{t('info.location.city')}</p>
                                        <p className="text-gray-600 text-sm mt-1">{t('info.location.note')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-8 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                                    <div className="text-center p-8">
                                        <svg className="w-16 h-16 mx-auto mb-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-primary-700 font-medium">{t('info.map.title')}</p>
                                        <p className="text-primary-600 text-sm mt-2">{t('info.map.subtitle')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold mb-6">{t('form.title')}</h2>
                            <p className="text-gray-600 mb-8">
                                {t('form.subtitle')}
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional CTA */}
            <section className="py-16 bg-primary-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        {t('cta.subtitle')}
                    </p>
                    <a
                        href="tel:+250788304792"
                        className="inline-block bg-accent-500 text-white px-8 py-3 rounded-md hover:bg-accent-600 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-lg"
                    >
                        {t('cta.button')}
                    </a>
                </div>
            </section>
        </div>
    );
}
