import { useState, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import Logo from '../logo';

import s from './navigation.module.scss';


export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const navRef = useRef(null);

  return (
    <header className={s.my_header}>
      <div className={s.header_wrapper}>
        <Logo />

        <button
          type="button"
          className={`${s.hamburger} ${navIsOpen ? s.hamburger_open : ''}`}
          aria-label="Open navigation menu"
          onClick={(e) => setNavIsOpen(!navIsOpen)}
        />
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