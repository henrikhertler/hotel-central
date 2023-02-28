import 'styles/main.css';
import 'styles/chrome-bug.css';
import React from 'react';
import Layout from 'components/Layout';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <MyUserContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MyUserContextProvider>
        </div>
    );
}
