import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { PageMeta } from '../types';

interface Props {
    children: ReactNode;
    meta?: PageMeta;
}

export default function Layout({ children, meta: pageMeta }: Props) {
    const router = useRouter();
    const meta = {
        title: 'Hotel Central',
        description:
            'Das „Hotel Central“ ist ein digitaler und realer Ort mit dem Ziel, kreative Persönlichkeiten unterschiedlicher Disziplinen zu vernetzen und in ihrer Entwicklung zu unterstützen.',
        cardImage: '/og.png',
        ...pageMeta,
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name='robots' content='follow, index' />
                <link href='/favicon.ico' rel='shortcut icon' />
                <meta content={meta.description} name='description' />
                <meta property='og:url' content={`https://www.welcome-to-hotel-central.eu${router.asPath}`} />
                <meta property='og:type' content='website' />
                <meta property='og:site_name' content={meta.title} />
                <meta property='og:description' content={meta.description} />
                <meta property='og:title' content={meta.title} />
                <meta property='og:image' content={meta.cardImage} />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name='twitter:title' content={meta.title} />
                <meta name='twitter:description' content={meta.description} />
                <meta name='twitter:image' content={meta.cardImage} />
            </Head>
            <main>{children}</main>
        </>
    );
}
