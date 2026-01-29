'use client';

import {useEffect, useState} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import LanguageToggle from '@/app/components/language-togler';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const {i18n} = useTranslation();

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000); // Slight delay for better UX
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAction = (accepted: boolean) => {
        if (accepted) {
            localStorage.setItem('cookie-consent', 'true');
        }
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
            <div
                className="max-w-5xl mx-auto bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-center justify-between gap-6 transition-all animate-in fade-in slide-in-from-bottom-10 duration-700">
                <div className="flex items-center gap-4">
                    <span className="text-3xl">🍪</span>
                    <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                        <p className="font-semibold text-gray-900"><Trans i18nKey="cookie.title"/></p>
                        <p><Trans i18nKey="cookie.description"/></p>
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                        onClick={() => handleAction(false)}
                        className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                        <Trans i18nKey="cookie.reject"/>
                    </button>
                    <button
                        onClick={() => handleAction(true)}
                        className="flex-1 md:flex-none px-8 py-2.5 primary-gradient text-black text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-yellow-200 active:scale-95"
                    >
                        <Trans i18nKey="cookie.accept"/>
                    </button>
                </div>
                <LanguageToggle initialLocale={i18n.language}/>
            </div>
        </div>
    );
}
