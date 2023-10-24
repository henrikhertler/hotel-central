import '@/styles/main.css';
import '@/styles/chrome-bug.css';
import { ReactNode } from 'react';

export const metadata = {
    title: 'Hotel Central',
    description:
        'Das „Hotel Central“ ist ein digitaler und realer Ort mit dem Ziel, kreative Persönlichkeiten unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen.',
    openGraph: {
        images: '/og.png',
        type: 'website',
        siteName: 'Hotel Central',
        url: 'https://www.welcome-to-hotel-central.eu',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
    },
    metadataBase: new URL('https://www.welcome-to-hotel-central.eu'),
    twitter: {
        card: 'summary_large_image',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='de'>
            <body id='root'>
                <main>{children}</main>
            </body>
        </html>
    );
}
