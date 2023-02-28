import type { AppProps } from 'next/app';
import { useNextCssRemovalPrevention } from '@/hooks/useCssRemovalPrevention';

import Layout from '@/components/layout';
import '@/styles/shared/globals.scss';


export default function App({ Component, pageProps }: AppProps) {
  useNextCssRemovalPrevention();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
