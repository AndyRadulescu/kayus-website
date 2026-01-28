'use client';

import {useRouter} from 'next/navigation';
import Cookies from 'js-cookie';
import {Languages} from 'lucide-react';

export default function LanguageToggle() {
    const router = useRouter();
    const currentLocale = Cookies.get('NEXT_LOCALE') || 'ro';

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'en-US' ? 'ro' : 'en-US';
        Cookies.set('NEXT_LOCALE', newLocale, {expires: 365});
        router.refresh();
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200
                 rounded-full shadow-sm hover:bg-slate-50 transition-colors
                 text-sm font-medium text-slate-700"
        >
            <Languages size={16} className="text-blue-500"/>
            <span>
        {currentLocale === 'en-US' ? 'English' : 'Română'}
      </span>
            <span className="text-xs text-slate-400 border-l pl-2 ml-1">
        {currentLocale === 'en-US' ? 'RO' : 'EN'}
      </span>
        </button>
    );
}
