import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import Layout from '@/components/layout';
import '@/styles/shared/globals.scss';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [routeChanging, setRouteChanging] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url: string, { shallow }: any) => {
      setRouteChanging(true);

      console.log(`\nApp is changing to ${url}`);
      console.log('router: ', router);
    }

    const handleRouteChangeEnd = () => {
      setRouteChanging(false);
      console.log('Route change over');
      console.log('router: ', router);
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
    }
  }, [router])

  return (
    <Layout routeChanging={routeChanging}>
      <Component {...pageProps} />
    </Layout>
  );
}
