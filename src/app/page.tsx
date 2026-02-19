import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '@/app/components/language-togler';
import {useTranslationServer} from '@/app/lib/i18n-server';

export default async function Home() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t, i18n} = await useTranslationServer();
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
            <h1 className="text-3xl font-bold text-primary mb-4 uppercase tracking-widest text-center">
                {t('select.menu', 'Select menu')}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl px-8 md:px-0">
                <Link href="/lounge" className="flex-1">
                    <div className="bg-neutral-900 border border-primary rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-transform hover:scale-105 active:scale-95 group shadow-xl">
                        <div className="relative w-full h-full max-w-[200px] max-h-[100px]">
                            <Image 
                                src="/logo-lounge.png" 
                                alt="Kayus Lounge" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="mt-6 text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">Lounge</span>
                    </div>
                </Link>

                <Link href="/hotel" className="flex-1">
                    <div className="bg-neutral-900 border border-primary rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-transform hover:scale-105 active:scale-95 group shadow-xl">
                        <div className="relative w-full h-full max-w-[150px] max-h-[150px]">
                            <Image 
                                src="/logo-hotel.png" 
                                alt="Kayus Hotel" 
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="mt-6 text-xl font-bold uppercase tracking-wide group-hover:text-primary transition-colors">Hotel</span>
                    </div>
                </Link>
            </div>

            <LanguageToggle initialLocale={i18n.language}/>
        </main>
    );
}
