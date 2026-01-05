import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PrivacyPolicyPage.metadata' });

    return {
        title: t('title'),
        description: t('description')
    };
}

export default function PrivacyPolicyPage() {
    const t = useTranslations('PrivacyPolicyPage');

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t('hero.title')}</h1>
                    <p className="text-lg text-center text-gray-100">
                        {t('hero.date')}
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                {t('intro')}
                            </p>
                        </div>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s1.title')}</h2>
                            <p className="text-gray-700 mb-4">
                                {t('sections.s1.p1')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{t('sections.s1.list1.0')}</li>
                                <li>{t('sections.s1.list1.1')}</li>
                                <li>{t('sections.s1.list1.2')}</li>
                                <li>{t('sections.s1.list1.3')}</li>
                            </ul>
                            <p className="text-gray-700 mt-4">
                                {t('sections.s1.p2')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{t('sections.s1.list2.0')}</li>
                                <li>{t('sections.s1.list2.1')}</li>
                                <li>{t('sections.s1.list2.2')}</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s2.title')}</h2>
                            <p className="text-gray-700 mb-4">
                                {t('sections.s2.p1')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{t('sections.s2.list.0')}</li>
                                <li>{t('sections.s2.list.1')}</li>
                                <li>{t('sections.s2.list.2')}</li>
                                <li>{t('sections.s2.list.3')}</li>
                                <li>{t('sections.s2.list.4')}</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s3.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s3.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s4.title')}</h2>
                            <p className="text-gray-700 mb-4">
                                {t('sections.s4.p1')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{t('sections.s4.list.0')}</li>
                                <li>{t('sections.s4.list.1')}</li>
                                <li>{t('sections.s4.list.2')}</li>
                                <li>{t('sections.s4.list.3')}</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s5.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s5.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s6.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s6.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s7.title')}</h2>
                            <p className="text-gray-700 mb-4">
                                {t('sections.s7.p1')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>{t('sections.s7.list.0')}</li>
                                <li>{t('sections.s7.list.1')}</li>
                                <li>{t('sections.s7.list.2')}</li>
                                <li>{t('sections.s7.list.3')}</li>
                                <li>{t('sections.s7.list.4')}</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s8.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s8.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s9.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s9.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s10.title')}</h2>
                            <p className="text-gray-700">
                                {t('sections.s10.content')}
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">{t('sections.s11.title')}</h2>
                            <p className="text-gray-700 mb-4">
                                {t('sections.s11.p1')}
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 font-semibold mb-2">{t('sections.s11.info.name')}</p>
                                <p className="text-gray-700">{t('sections.s11.info.phone')}<a href="tel:+250788304792" className="text-accent-600 hover:underline">+250 788 304 792</a></p>
                                <p className="text-gray-700">{t('sections.s11.info.email')}<a href="mailto:ishimwehonore450@gmail.com" className="text-accent-600 hover:underline">ishimwehonore450@gmail.com</a></p>
                                <p className="text-gray-700">{t('sections.s11.info.hours')}</p>
                            </div>
                        </section>

                        <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-10">
                            <p className="text-gray-700">
                                <strong>{t('footer.title')}</strong> {t('footer.content')}
                            </p>
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/contact"
                                className="inline-block bg-accent-500 text-white px-8 py-3 rounded-md hover:bg-accent-600 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                            >
                                {t('footer.button')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
