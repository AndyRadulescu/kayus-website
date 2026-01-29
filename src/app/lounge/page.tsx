import {cookies} from 'next/headers';
import LanguageToggle from '@/app/components/language-togler';
import CookieBanner from '@/app/components/cookie-banner';

export default async function Lounge() {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';

    return (
        <main className="flex justify-center p-8">
            <LanguageToggle initialLocale={locale}/>
            <CookieBanner/>
        </main>
    );
}
