import projectData, { categoryMap, IProject } from '@/data/projects';
import ProjectGrid from '@/components/project-grid';

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
          <ProjectGrid projects={ featuredProjects }/>
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