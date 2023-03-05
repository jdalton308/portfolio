import { useEffect, useState, useRef } from 'react';
// @ts-ignore
import throttle from 'lodash.throttle';
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
  const heroRef = useRef(null);
  const textRef = useRef(null);

  const [yScroll, setYScroll] = useState(0);

  const onHeroScroll = (e: MouseEvent) => {
    if (heroRef.current && textRef.current) {
      const scrollPosition = window.scrollY;
      const heroHeight = (heroRef.current.scrollHeight - (window.innerHeight * 0.8));
      const percentHeroScrolled = scrollPosition / heroHeight;

      const textWidth = textRef.current.scrollWidth - 220; // for "Creative developer" text

      if (percentHeroScrolled <= 1) {
        setYScroll(percentHeroScrolled * textWidth);
      } else {
        setYScroll(textWidth);
      }
    }
  }

  useEffect(() => {
    const throttledHeroScroll = throttle(onHeroScroll, 100);
    document.addEventListener('scroll', throttledHeroScroll);
    
    return () => {
      document.removeEventListener('scroll', throttledHeroScroll);
    }
  }, []);


  return (
    <div className="page_home">
      <section
        ref={heroRef}
        className={s.hero}
        data-bg="background"
      >
        <div className={s.hero_wrapper}>
          <h1>Joe Dalton</h1>
          <h3
            ref={textRef}
            style={{transform: `translateX(-${yScroll}px)`}}
          >
            Front-end Development. User Interface Development. Interaction Design. Motion Design. Front-end Architecture. Component Library Development. Prototype Development. Headless Architecture. <strong>Creative Developer.</strong>
          </h3>
        </div>
      </section>

      <section
        className={s.section_featured_work}
        data-bg="surface3"
      >
        <div className={ls.wrapper}>
          <h2>Featured Work</h2>
          <ProjectGrid projects={ featuredProjects }/>
        </div>
      </section>

      <section
        className={s.section_contact}
        id="contact"
        data-bg="background"
      >
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