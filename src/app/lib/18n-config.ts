export const fallbackLng = 'ro';
export const languages = [fallbackLng, 'en-US'];
export const cookieName = 'NEXT_LOCALE';

export function getOptions(lng = fallbackLng) {
    return {
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: 'common',
        defaultNS: 'common',
        ns: 'common'
    };
}
