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
            
            <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl px-8 md:px-0 items-stretch">
                <Link href="/lounge" className="flex-1 flex flex-col group">
                    <div className="flex-1 bg-neutral-900 border border-primary rounded-3xl p-12 flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl min-h-[320px]">
                        <div className="relative w-full h-28">
                            <Image 
                                src="/logo-lounge.png" 
                                alt="Kayus Lounge" 
                                fill 
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="mt-8 text-xl font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Lounge</span>
                    </div>
                </Link>

                <Link href="/hotel" className="flex-1 flex flex-col group">
                    <div className="flex-1 bg-neutral-900 border border-primary rounded-3xl p-12 flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl min-h-[320px]">
                        <div className="relative w-full h-28">
                            <Image 
                                src="/logo-hotel.png" 
                                alt="Kayus Hotel" 
                                fill 
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="mt-8 text-xl font-bold uppercase tracking-widest group-hover:text-primary transition-colors">Hotel</span>
                    </div>
                </Link>
            </div>

            <LanguageToggle initialLocale={i18n.language}/>
        </main>
    );
}
