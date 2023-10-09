import {
  // ReactNode,
  useRef,
} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Playfair_Display, Source_Sans_3  } from 'next/font/google';

import Navigation from '../navigation';
import Footer from '../footer';
import s from './layout.module.scss';


// interface ILayoutProps {
//   children: ReactNode;
// }


const playfairDisplay = Playfair_Display({
  weight: '800',
  subsets: ['latin'],
  style: 'normal',
  variable: '--playfair-font',
});

const sourceSansPro = Source_Sans_3({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--source-sans-font',
});




export default function Layout({
  children,
}) {
  const router = useRouter();
  const mainRef = useRef(null);


  const afterPageLeave = () => {
    window.scrollTo(0, 0);
  }


  return (
    <>
      <Head>
        <title>Joe Dalton | Front-end Portfolio</title>

        <meta name="description" content="Joe Dalton, an independent web and JavaScript software developer, based in Denver, Colorado, and available for freelance and contract projects. I specialize in JavaScript development, Front-end development, single-page app development, React, and Vue projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#006B56" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#5DDBB9" />
        <link rel="icon" href="/favicon-32.png" sizes="any" />
        <link rel="icon" href="/favicon-100.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-180.png" />
        <link rel="manifest" href="/manifest.webmanifest"></link>

        <link rel="canonical" href="https://www.joedalton.io" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={`
        ${sourceSansPro.className}
        ${playfairDisplay.variable}
        ${sourceSansPro.variable}
        ${s.app_layout}
      `}>
        <Navigation />

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={router.pathname}
            nodeRef={mainRef}
            timeout={{
              enter: 900,
              exit: 600,
            }}
            unmountOnExit
            classNames={{
              enter: s.page_enter,
              enterActive: s.page_enter_active,
              exit: s.page_exit,
              exitActive: s.page_exit_active,
             }}
            onExited={afterPageLeave}
          >
            <main
              ref={mainRef}
              className={ s.layout_main }
            >
              {children}
            </main>
          </CSSTransition>
        </SwitchTransition>

        <Footer />
      </div>
    </>
  );
}
