import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from '@/components/my-link';
import { CSSTransition } from 'react-transition-group';
import Logo from '../logo';

import s from './navigation.module.scss';


export default function Navigation() {
  const router = useRouter();

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const [navIsOpen, setNavIsOpen] = useState(false);


  useEffect(() => {
    const handleRouteChange = () => {
      setNavIsOpen(false);
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('hashChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('hashChangeStart', handleRouteChange);
    }
  }, [router])


  return (
    <header className={s.my_header}>
      <div className={s.header_wrapper}>
        <Logo />

        <CSSTransition
          in={navIsOpen}
          nodeRef={burgerRef}
          timeout={800}
          classNames={{
            enter: s.burger_enter,
            enterActive: s.burger_enter_active,
            enterDone: s.burger_enter_done,
            exit: s.burger_exit,
            exitActive: s.burger_exit_active,
            exitDone: s.burger_exit_done,
          }}
        >
          <button
            type="button"
            ref={burgerRef}
            className={`${s.hamburger} ${navIsOpen ? s.hamburger_open : ''}`}
            aria-label="Open navigation menu"
            onClick={() => setNavIsOpen(!navIsOpen)}
          />
        </CSSTransition>
      </div>

      <CSSTransition
        in={navIsOpen}
        nodeRef={navRef}
        timeout={700}
        unmountOnExit
        mountOnEnter
        classNames={{
          enter: s.nav_enter,
          enterActive: s.nav_enter_active,
          enterDone: s.nav_enter_done,
          exit: s.nav_exit,
          exitActive: s.nav_exit_active,
          exitDone: s.nav_exit_done,
        }}
      >
        <nav
          key="nav"
          ref={navRef}
          className={s.navigation_panel}
        >
          <div className={s.nav_links}>
            <Link
              href="/"
              className={s.nav_link}
            >
              Home
            </Link>
            <Link
              href="/work"
              className={s.nav_link}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={s.nav_link}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className={s.nav_link}
            >
              Contact
            </Link>
          </div>
        </nav>
      </CSSTransition>
    </header>
  )
}