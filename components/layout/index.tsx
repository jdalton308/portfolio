import { ReactNode, useRef } from 'react';
import { useRouter } from 'next/router';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Head from 'next/head';
import { Playfair_Display, Source_Sans_Pro  } from '@next/font/google';

import Navigation from '../navigation';
import Footer from '../footer';

import s from './layout.module.scss';


interface ILayoutProps {
  children: ReactNode;
}


const playfairDisplay = Playfair_Display({
  weight: '800',
  subsets: ['latin'],
  style: 'normal',
  variable: '--playfair-font',
});

const sourceSansPro = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  variable: '--source-sans-font',
});


function afterPageLeave() {
  window.scrollTo(0, 0);
}


export default function Layout({
  children,
}: ILayoutProps) {
  const router = useRouter();
  const mainRef = useRef(null);

  return (
    <>
      <Head>
        <title>Joe Dalton | Front-end Portfolio</title>

        <meta name="description" content="Joe Dalton web development, available for freelance and contract web developemnt, JavaScript development, Front-end development, single-page app development, React development, and Vue projects. Located in Denver, Colorado." />
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
            <main ref={mainRef}>
              {children}
            </main>
          </CSSTransition>
        </SwitchTransition>

        <Footer />
      </div>
    </>
  );
}
