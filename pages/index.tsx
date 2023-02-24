import projectData, { categoryMap, IProject } from '@/data/projects';

import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';


interface IHomeProps {
  featuredProjects: IProject[];
}

function projBackground(imgUrl: string) {
  const overlayColor = 'rgba(75, 99, 91, 0.95)';
  return `linear-gradient(${overlayColor}, ${overlayColor}), url(${imgUrl})`;
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

            { featuredProjects.map((proj) => (
                <div
                  key={proj.slug}
                  className={s.grid_item}
                  style={{
                    backgroundImage: projBackground(proj.images[0].src),
                  }}
                >
                  <div className={s.item_title}>
                    <h3>
                      { proj.title }
                    </h3>
                    <h4>
                      { proj.subtitle }
                    </h4>
                  </div>

                  <span className={s.item_detail}>
                    { proj.features.join(' | ') }
                  </span>
                </div>
              ))
            }

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