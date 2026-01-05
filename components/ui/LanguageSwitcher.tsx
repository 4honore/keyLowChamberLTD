'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, routing } from '@/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex items-center space-x-2">
            {routing.locales.map((cur) => (
                <button
                    key={cur}
                    onClick={() => onSelectChange(cur)}
                    disabled={isPending || locale === cur}
                    className={`px-2 py-1 text-sm font-medium rounded-md transition-colors ${locale === cur
                            ? 'bg-primary-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    {cur.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
