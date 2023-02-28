import projectData, { categoryMap, IProject } from '@/data/projects';
import ProjectGrid from '@/components/project-grid';
import Link from '@/components/my-link';

import IconCodepen from '@/components/icons/codepen';
import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';
import IconLinkedin from '@/components/icons/linkedin';

import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';


interface IHomeProps {
  featuredProjects: IProject[];
}

export default function Home({ featuredProjects }: IHomeProps) {
  return (
    <div className="page_home">
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

      <section className={s.section_contact}  id="contact">
        <div className={ls.wrapper}>
          <h2>Contact</h2>
          <div className={s.contact_item}>
            <div className={s.contact_label}>
              Email
            </div>
            <a href="mailto:joe@joedalton.io">
              joe@joedalton.io
            </a>
          </div>
          <div className={s.contact_item}>
            <div className={s.contact_label}>
              Other Outlets
            </div>
            <div>
              <Link
                href="https://www.codepen.io/rnrjd"
                target="_blank"
                className={s.contact_icon}
              >
                <IconCodepen />
              </Link>
              <Link
                href="https://www.github.com/jdalton308"
                target="_blank"
                className={s.contact_icon}
              >
                <IconGithub />
              </Link>
              <Link
                href="https://www.instagram.com/joeshmoedalton/"
                target="_blank"
                className={s.contact_icon}
              >
                <IconInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joedaltonweb"
                target="_blank"
                className={s.contact_icon}
              >
                <IconLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const featuredProjects = projectData.filter((proj) => proj.categories.includes(categoryMap.featured));

  return {
    props: {
      featuredProjects,
    },
  }
}