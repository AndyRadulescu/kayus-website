'use client';

import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import Cookies from 'js-cookie';
import {getOptions} from '@/app/lib/18n-config';

const lng = Cookies.get('NEXT_LOCALE') || 'ro';

i18next
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) =>
        import(`@/locales/${language}/.json`)))
    .init(getOptions(lng));

export default i18next;
