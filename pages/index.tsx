import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';


export default function Home() {
  return (
    <>
      <section className={s.hero}>
        <div className={ls.wrapper}>
          <h1>Joe Dalton</h1>
          <h3>User Interface Development. Interaction Design. Front-end Architecture. Motion Design. Headless CMS Architecture. Creative Developer.</h3>
        </div>
      </section>
    </>
  )
}
