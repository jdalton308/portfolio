import projectData, { categoryMap, IProject } from '@/data/projects';

import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';


interface IHomeProps {
  featuredProjects: IProject[];
}


export default function Home({ featuredProjects }: IHomeProps) {
  return (
    <>
      <section className={s.hero}>
        <div className={ls.wrapper}>
          <h1>Joe Dalton</h1>
          <h3>User Interface Development. Interaction Design. Front-end Architecture. Motion Design. Headless CMS Architecture. <strong>Creative Developer.</strong></h3>
        </div>
      </section>

      <section className={s.section_featured_work}>
        <div className={ls.wrapper}>
          <h2>Featured Work</h2>
          <div className={s.featured_grid}>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>

            <div className={s.grid_item}>
              <h3>
                Guac Hunter
              </h3>
              <span className={s.item_detail}>
                Vanilla JS | Animation | Game
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticProps(context: any) {
  const featuredProjects = projectData.filter((proj) => proj.categories.includes(categoryMap.featured));

  return {
    props: {
      featuredProjects,
    },
  }
}