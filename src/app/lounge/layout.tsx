import {getLoungeMenu} from '@/app/lib/lounge-menu';
import Link from 'next/link';
import Image from 'next/image';
import {useTranslationServer} from '../lib/i18n-server';
import Promotion from '@/app/components/promotion';

export default async function LoungeLayout({children}: {
    children: React.ReactNode;
}) {
    const menu = await getLoungeMenu();
    const sortedMenu = [...menu].sort((a, b) => a.fields.priority - b.fields.priority);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslationServer();

    return (
        <section className="p-4">
            <div className="flex justify-center mt-4 mb-8">
                <Image src="/logo.svg" alt="Logo" width={100} height={100}/>
            </div>
            <nav>
                <Promotion/>
                <div className="flex justify-center my-2">
                    <a className="w-[80%] no-underline text-inherit" href="tel:0774080300">
                    <button
                            className="w-full pointer primary-gradient text-gray-800 py-2 rounded-full uppercase text-xl">{t('bookATable')}</button>
                    </a>
                </div>
                {sortedMenu.map((item) => (
                    <Link href={`/${item.fields.slug}`} key={item.sys.id}>
                        <div className="flex justify-center my-2">
                            <button
                                className="min-w-[80%] border-1 py-2 border-solid border-primary rounded-xl uppercase px-1 pointer">{item.fields.foodType}</button>
                        </div>
                    </Link>
                ))}
            </nav>
            {children}
        </section>
    );
}
