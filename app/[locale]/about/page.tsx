import { Link } from '@/navigation';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'AboutPage.metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function AboutPage() {
    const t = useTranslations('AboutPage');

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

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <div className="text-accent-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{t('mission.title')}</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {t('mission.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <div className="text-accent-500 mb-4">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{t('vision.title')}</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {t('vision.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lawyer Profile */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('counsel.title')}</h2>
                        <p className="text-xl text-gray-600">{t('counsel.subtitle')}</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <div className="md:flex gap-8 items-start">
                            <div className="md:w-1/3 mb-6 md:mb-0">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
                                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                                        <svg className="w-20 h-20 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold">NTAZIKA Néhémie</h3>
                                    <p className="text-accent-200 mt-2">{t('counsel.role')}</p>
                                </div>
                            </div>

                            <div className="md:w-2/3">
                                <h3 className="text-2xl font-semibold mb-4 text-primary-700">{t('counsel.background.title')}</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    {t('counsel.background.description')}
                                </p>

                                <h4 className="text-xl font-semibold mb-3 text-primary-700">{t('counsel.expertise.title')}</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{t('counsel.expertise.banking')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{t('counsel.expertise.debt')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{t('counsel.expertise.mediation')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-accent-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-700">{t('counsel.expertise.legalAid')}</span>
                                    </li>
                                </ul>

                                <h4 className="text-xl font-semibold mb-3 text-primary-700">{t('counsel.commitment.title')}</h4>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('counsel.commitment.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('values.title')}</h2>
                        <p className="text-xl text-gray-600">{t('values.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('values.integrity.title')}</h3>
                            <p className="text-gray-600">{t('values.integrity.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('values.excellence.title')}</h3>
                            <p className="text-gray-600">{t('values.excellence.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('values.clientFocus.title')}</h3>
                            <p className="text-gray-600">{t('values.clientFocus.description')}</p>
                        </div>

                        <div className="text-center">
                            <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t('values.results.title')}</h3>
                            <p className="text-gray-600">{t('values.results.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-primary-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">{t('cta.title')}</h2>
                    <p className="text-xl mb-8 text-gray-100">
                        {t('cta.subtitle')}
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="large">
                            {t('cta.button')}
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}