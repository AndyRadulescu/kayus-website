import {cookies} from 'next/headers';
import LanguageToggle from '@/app/components/language-togler';

export default async function Lounge() {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';

    return (
        <div className="flex justify-center p-8">
            <LanguageToggle initialLocale={locale}/>
        </div>
    );
}
