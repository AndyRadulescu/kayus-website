'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Languages } from 'lucide-react';
import { useState } from 'react';

export default function LanguageToggle({ initialLocale }: { initialLocale: string }) {
    const router = useRouter();
    const [locale, setLocale] = useState(initialLocale);

    const toggleLanguage = () => {
        const newLocale = locale === 'en-US' ? 'ro' : 'en-US';
        setLocale(newLocale);
        Cookies.set('NEXT_LOCALE', newLocale, { expires: 365 });
        router.refresh();
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-black-900 border-solid border-1 border-primary rounded-full shadow-sm transition-colors text-sm font-medium text-gray-100"
        >
            <Languages
                size={16}
                className="text-primary"
            />
            <span>
                {locale === 'en-US' ? 'English' : 'Română'}
            </span>
            <span className="text-xs text-gray-100 border-l pl-2 ml-1">
                {locale === 'en-US' ? 'RO' : 'EN'}
            </span>
        </button>
    );
}
