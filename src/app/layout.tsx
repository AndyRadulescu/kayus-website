import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.scss';
import {ClientTranslationProvider} from '@/app/lib/i18n-client';

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

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientTranslationProvider>{children}</ClientTranslationProvider>
        </body>
        </html>
    );
}
