import Link from '@/components/my-link';

import s from './footer.module.scss';
import ls from '@/styles/shared/layout.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={ls.wrapper}>
        <div className={s.corner_overlay}>
          <span>Denver, CO, USA</span>
          <span>
            Independent Developer
            <br/>
            <Link href="/#contact">
              Available for work
            </Link>
          </span>
        </div>

        <div className={s.footer_copyright}>
          &copy; 2023
          <br/>
          Designed and Built by Joe Dalton
        </div>
      </div>
    </footer>
  )
}