import LanguageToggle from '@/app/components/language-togler';
import CookieBanner from '@/app/components/cookie-banner';
import Image from 'next/image';
import {getLoungeMenu} from '@/app/lib/lounge-menu';
import Link from 'next/link';
import {useTranslationServer} from '../lib/i18n-server';
import Promotion from '@/app/components/promotion';
import {notFound} from 'next/navigation';
import {PropsType, validRestaurantTypes} from '@/app/model/restaurant-type';
import {getServerLocaleFromCookies} from '@/app/utils';

export default async function Lounge({params}: PropsType) {
    const {type} = await params;

    if (!validRestaurantTypes.includes(type)) {
        notFound();
    }
    const locale = await getServerLocaleFromCookies();

    const menu = await getLoungeMenu(locale);
    const sortedMenu = [...menu].sort((a, b) => a.fields.priority - b.fields.priority);

    const {width, height} = type === 'lounge' ? {width: 200, height: 54} : {width: 100, height: 100};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {i18n, t} = await useTranslationServer();
    return (
        <main className="p-4">
            <div className="flex justify-center mt-4 mb-8">
                <Image src={`/logo-${type}.png`} alt="Logo" width={width} height={height}/>
            </div>
            <nav>
                <Promotion type={type}/>
                <div className="flex justify-center my-2">
                    <a className="w-[80%] no-underline text-inherit" href="tel:0774080300">
                        <button
                            className="w-full pointer primary-gradient text-black py-2 rounded-full uppercase text-xl">{t('bookATable')}</button>
                    </a>
                </div>
                {sortedMenu.map((item) => (
                    <Link href={`/${type}/${item.fields.slug}`} key={item.sys.id}>
                        <div className="flex justify-center my-2">
                            <button
                                className="min-w-[80%] border-1 py-2 border-solid border-primary rounded-xl uppercase px-1 pointer">{item.fields.foodType}</button>
                        </div>
                    </Link>
                ))}
            </nav>
            <section className="flex justify-center p-8">
                <LanguageToggle initialLocale={locale}/>
                <CookieBanner
                    language={i18n.language} cookieTitleLabel={t('cookie.title')}
                    cookieDescriptionLabel={t('cookie.description')} cookieAcceptLabel={t('cookie.accept')}
                    cookieRejectLabel={t('cookie.reject')}/>
            </section>
        </main>
    );
}
