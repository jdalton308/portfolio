import { useRouter } from 'next/router';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import type { AppProps } from 'next/app';
import { useNextCssRemovalPrevention } from '@/hooks/useCssRemovalPrevention';

import Layout from '@/components/layout';
import '@/styles/shared/globals.scss';
import s from '@/components/layout/layout.module.scss';


function afterPageLeave() {
  window.scrollTo(0, 0);
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useNextCssRemovalPrevention();

  return (
    <Layout>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={router.pathname}
          timeout={{
            enter: 900,
            exit: 600,
          }}
          classNames={{
            enter: s.page_enter,
            enterActive: s.page_enter_active,
            exit: s.page_exit,
            exitActive: s.page_exit_active,
            }}
          onExited={afterPageLeave}
        >
          <Component {...pageProps} />
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
}
