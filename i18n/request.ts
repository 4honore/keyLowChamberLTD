import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    // The `requestLocale` corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as (typeof locales)[number])) {
        locale = 'en'; // Fallback to default
    }

    return {
        locale,
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});
