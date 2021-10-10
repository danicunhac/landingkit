import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/starter-logo-large.svg" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
