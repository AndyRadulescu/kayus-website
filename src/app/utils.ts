import 'server-only';

import {cookies} from 'next/headers';

export const getServerLocaleFromCookies = async () => {
    const cookieStore = await cookies();
    return cookieStore.get('NEXT_LOCALE')?.value || 'ro';
}
