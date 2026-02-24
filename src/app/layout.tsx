import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.scss';
import {Analytics} from '@vercel/analytics/next';
import {getServerLocaleFromCookies} from '@/app/utils';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kayus - Restaurant & Hotel Menu',
    description: 'Explore the digital menu of Kayus. High-quality food and drinks from our Lounge and Hotel, curated with the best ingredients.',
    keywords: ['Kayus', 'Menu', 'Lounge', 'Hotel', 'Restaurant', 'Busteni', 'Romania', 'Digital Menu'],
    authors: [{ name: 'Kayus' }],
    creator: 'Kayus',
    publisher: 'Kayus',
    metadataBase: new URL('https://menu.kayus.ro'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'ro': '/ro',
        },
    },
    openGraph: {
        title: 'Kayus - Restaurant & Hotel Menu',
        description: 'Explore the digital menu of Kayus. High-quality food and drinks from our Lounge and Hotel.',
        url: 'https://menu.kayus.ro',
        siteName: 'Kayus Menu',
        images: [
            {
                url: '/logo-lounge.png', // Fallback to logo if no specific OG image is provided
                width: 800,
                height: 600,
                alt: 'Kayus Lounge Logo',
            },
        ],
        locale: 'ro',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kayus - Restaurant & Hotel Menu',
        description: 'Explore the digital menu of Kayus. High-quality food and drinks.',
        images: ['/logo-lounge.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    // verification: {
        // google: 'dr9JlS0Vc93Q971H7F90_-4ry6EH742RzQdQ3D3BvoI',
    // },
};

export default async function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    const locale = await getServerLocaleFromCookies();
    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} key={locale}>
        <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">{children}</div>
        <Analytics/>
        </body>
        </html>
    );
}
