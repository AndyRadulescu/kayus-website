'use client';

import { useState, useEffect, ReactNode } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from '@/app/lib/18n-config';

const backend = resourcesToBackend((language: string) =>
    import(`@/locales/${language}.json`)
);

export function ClientTranslationProvider({children, locale}: { children: ReactNode, locale: string }) {
    const [i18n] = useState(() => {
        const instance = createInstance();
        instance
            .use(initReactI18next)
            .use(backend)
            .init({
                ...getOptions(locale),
                lng: locale,
            });
        return instance;
    });

    useEffect(() => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
