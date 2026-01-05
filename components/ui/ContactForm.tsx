'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        legalIssue: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', legalIssue: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Contact form submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('labels.name')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder={t('placeholders.name')}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('labels.email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder={t('placeholders.email')}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('labels.phone')}
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    placeholder={t('placeholders.phone')}
                />
            </div>

            <div>
                <label htmlFor="legalIssue" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('labels.issue')}
                </label>
                <select
                    id="legalIssue"
                    name="legalIssue"
                    required
                    value={formData.legalIssue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                >
                    <option value="">{t('placeholders.issue')}</option>
                    <option value="corporate">{t('issues.corporate')}</option>
                    <option value="civil">{t('issues.civil')}</option>
                    <option value="criminal">{t('issues.criminal')}</option>
                    <option value="family">{t('issues.family')}</option>
                    <option value="property">{t('issues.property')}</option>
                    <option value="employment">{t('issues.employment')}</option>
                    <option value="other">{t('issues.other')}</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('labels.message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    placeholder={t('placeholders.message')}
                />
            </div>

            {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                    {t('messages.success')}
                </div>
            )}

            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                    {t('messages.error')}
                </div>
            )}

            <Button type="submit" variant="primary" size="large" className="w-full">
                {status === 'loading' ? t('buttons.sending') : t('buttons.send')}
            </Button>

            <p className="text-sm text-gray-500 text-center">
                {t('footer')}
            </p>
        </form>
    );
}
