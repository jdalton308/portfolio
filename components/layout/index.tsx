import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { SwitchTransition, CSSTransition } from "react-transition-group";
// @ts-ignore
import throttle from 'lodash.throttle';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Playfair_Display, Source_Sans_Pro  } from '@next/font/google';
import { desktopBp } from '@/util';

import Navigation from '../navigation';
import Footer from '../footer';
import s from './layout.module.scss';


interface ILayoutProps {
  children: ReactNode;
}

interface ISectionObj {
  top: number;
  el: HTMLElement;
  bg: string | undefined;
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




export default function Layout({
  children,
}: ILayoutProps) {
  const router = useRouter();
  const mainRef = useRef(null);
  const [currentPath, setCurrentPath] = useState('');


  const afterPageLeave = () => {
    window.scrollTo(0, 0);
    setCurrentPath(router.pathname);
  }

  // Scroll watcher for BG
  //-----
  const [sectionStops, setSectionStops] = useState<ISectionObj[]>([]);
  const [backgroundColor, setBackgroundColor] = useState('background');


  const onSectionScroll = useCallback(throttle(() => {
    const { scrollY } = window;

    const currentSection = sectionStops.find((sectionObj, i) => {
      const nextSection = sectionStops[i + 1];
      if (nextSection) {
        return (
          (nextSection.top > scrollY) &&
          (sectionObj.top < scrollY)
        );
      } else {
        return true;
      }
    });

    if (currentSection && currentSection.bg) {
      setBackgroundColor(currentSection.bg);
    } else {
      setBackgroundColor('background');
    }
  }, 100), [sectionStops]);


  const findSectionStops = useCallback(throttle(() => {
    const sectionEls = document.querySelectorAll('section');
    const sectionElsArray = [...sectionEls];

    const newStops = sectionElsArray.map((el) => ({
      top: el.offsetTop - (window.innerHeight * 0.5),
      el: el,
      bg: el.dataset?.bg,
    }));

    setSectionStops(newStops);
  }, 250), []);


  const initScrollWatch = useCallback(() => {
    if (window.innerWidth > desktopBp) {
      document.addEventListener('scroll', onSectionScroll);

      const cleanFn = () => {
        document.removeEventListener('scroll', onSectionScroll);
      }
      return cleanFn;
    }
    return () => {};
  }, [onSectionScroll]);


  useEffect(() => {
    findSectionStops();
    window.addEventListener('resize', findSectionStops);

    return () => {
      window.removeEventListener('resize', findSectionStops);
    }
  }, [findSectionStops, currentPath]);


  useEffect(() => {
    const scrollCleanup = initScrollWatch();
    window.addEventListener('resize', initScrollWatch);

    return () => {
      scrollCleanup();
      window.removeEventListener('resize', initScrollWatch);
    }
  }, [initScrollWatch]);


  // Eng bg scroll
  //-----


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
            <main
              ref={mainRef}
              className={ s.layout_main }
              style={{ backgroundColor: `var(--${backgroundColor})` }}
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
