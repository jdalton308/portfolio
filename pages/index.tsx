import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import projectData, { categoryMap, IProject } from '@/data/projects';
import { useIsomorphicLayoutEffect, desktopBp } from '@/util';

import ProjectGrid from '@/components/project-grid';
import Link from '@/components/my-link';
import IconCodepen from '@/components/icons/codepen';
import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';
import IconLinkedin from '@/components/icons/linkedin';

import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';
import buttons from '@/styles/shared/buttons.module.scss';
import { useIsWindowSmaller } from '@/hooks/useIsWindowSmaller';

gsap.registerPlugin(ScrollTrigger);


interface IHomeProps {
  featuredProjects: IProject[];
}


export default function Home({ featuredProjects }: IHomeProps) {

  const pageRef = useRef<HTMLDivElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const heroWrapperRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const spotRef = useRef<HTMLSpanElement | null>(null);
  const contactSectionRef = useRef<HTMLSpanElement | null>(null);

  const isMobile = useIsWindowSmaller(desktopBp);

  console.log('isMobile: ', isMobile);

  // Scroll Animations
  //----
  useIsomorphicLayoutEffect(() => {
    console.log('layout effect running...')

    let gsapCtx: any;

    if (!isMobile) {
      gsapCtx = gsap.context(() => {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            endTrigger: contactSectionRef.current,
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
          }
        });

        const maxX = (window.innerWidth / 3);
        const maxY = (window.innerHeight / 3);

        const randomPosition = {
          duration: 2,
          x: `random(-${maxX}, ${maxX}, 10)`,
          y: `random(-${maxY}, ${maxY}, 10)`,
          rotation: '+=random(0, 360, 5)',
        };

        // Background Dot
        tl.to(spotRef.current, randomPosition)
          .to(spotRef.current, randomPosition)
          .to(spotRef.current, {
            duration: 2,
            x: '0',
            y: '0',
            ease: 'circ.out',
          })
          .to(spotRef.current, {
            duration: 4,
            scale: 8,
          }) // 9
          .to(spotRef.current, {
            duration: 3,
            scale: 1,
          }, 13)
          .to(spotRef.current, {
            duration: 2,
            x: (index, target) => {
              const contactTitleEl = contactSectionRef.current?.querySelector('#contact');
              if (contactTitleEl) {
                const spotBox = target.getBoundingClientRect();
                const currentX = spotBox.width/2 + spotBox.x;

                const contactTitleBox = contactTitleEl.getBoundingClientRect();
                const targetX = contactTitleBox.left + (2 * contactTitleBox.height);

                const xDelta = targetX - currentX;

                return xDelta;
              } else {
                return -100;
              }
            }
          }, '-=1');

        // Text scroll
        tl.to(textRef.current, {
          x: -1900,
          duration: 6,
        }, 0);
      }, pageRef);
    }

    return () => {
      if (gsapCtx) {
        gsapCtx.revert();
      }
    }

  }, [isMobile]);


  return (
    <div
      className={s.page_home}
      ref={pageRef}
    >
      <span
        ref={spotRef}
        className={s.hero_bg_spot}
      />

      <section
        className={s.hero}
        data-bg="background"
        ref={heroSectionRef}
      >
        <div
          className={s.hero_text_container}
          ref={heroWrapperRef}
        >
          <div
            className={s.hero_wrapper}
          >
            <h1>Joe Dalton</h1>
            <h3 ref={textRef}>
              Front-end Development. User Interface Development. Interaction Design. Motion Design. Front-end Architecture. Component Library Development. Prototype Development. Headless Architecture. <strong>Creative Developer.</strong>
            </h3>

          </div>
        </div>
      </section>

      <section
        className={s.section_featured_work}
        data-bg="surface3"
      >
        <div className={ls.wrapper}>
          <h2>Featured Work</h2>
          <ProjectGrid projects={ featuredProjects }/>

          <div className={s.feature_work_btn}>
            <Link
              href="/work"
              className={buttons.primary_button}
            >
              See all work
            </Link>
          </div>
        </div>
      </section>

      <section
        className={s.section_contact}
        data-bg="background"
        ref={contactSectionRef}
      >
        <div className={ls.wrapper}>
          <h2 id="contact">
            Contact
          </h2>
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