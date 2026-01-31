import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.scss';
import {ClientTranslationProvider} from '@/app/lib/i18n-client';
import {cookies} from 'next/headers';
import {Analytics} from '@vercel/analytics/next';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kayus menu',
    description: 'The comprehensive menu of Kayus restaurant.',
};

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} key={locale}>
        <ClientTranslationProvider>
            <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">{children}</div>
        </ClientTranslationProvider>
        <Analytics />;
        </body>
        </html>
    );
}
