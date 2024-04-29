import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import type { ReactElement, ReactNode } from 'react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.css';
import SEO from '../../next-seo.config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export type NextPageWithLayout<P = unknown> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <main className={`${inter.variable} font-sans`}>
          <DefaultSeo {...SEO} />
          {getLayout(
            <>
              <NextNProgress
                color="#8b5cf6"
                height={3}
                options={{ showSpinner: false }}
              />
              <Component {...pageProps} />
            </>,
          )}
        </main>
        <ReactQueryDevtools />
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
