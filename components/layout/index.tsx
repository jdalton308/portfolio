import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Playfair_Display, Source_Sans_Pro  } from '@next/font/google';

import Navigation from '../navigation';
import Footer from '../footer';


import s from './layout.module.scss';

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

interface ILayoutProps {
  children: ReactNode;
  routeChanging: boolean;
}


export default function Layout({
  children,
  routeChanging
}: ILayoutProps) {

  return (
    <>
      <Head>
        <title>Joe Dalton | Creative Developer</title>
        <meta name="description" content="Joe Dalton web development, available for freelance and contract web developemnt, JavaScript development, Front-end development, single-page app development, React development, and Vue projects. Located in Denver, Colorado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="canonical" href="https://www.joedalton.io" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={`
        ${sourceSansPro.className}
        ${playfairDisplay.variable}
        ${sourceSansPro.variable}
        ${s.app_layout}
        ${routeChanging ? s.page_transition : ''}
      `}>
        <Navigation />

        <main>
          {children}
        </main>

        <Footer />

        <div className={s.corner_overlay}>
          <span>Denver, CO, USA</span>
          <span>
            Independent Developer
            <br/>
            <Link
              href="/#contact"
            >
              Available for work
              </Link>
          </span>
        </div>
      </div>
    </>
  );
}
