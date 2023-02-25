import s from './footer.module.scss';
import ls from '@/styles/shared/layout.module.scss';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={ls.wrapper}>
        <div className={s.footer_copyright}>
          &copy; 2023
          <br/>
          Designed and Built by Joe Dalton
        </div>
      </div>
    </footer>
  )
}