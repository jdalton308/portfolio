import { useLayoutEffect, useEffect, useState, useRef } from 'react';
// @ts-ignore
import throttle from 'lodash.throttle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import projectData, { categoryMap, IProject } from '@/data/projects';
import { desktopBp } from '@/util';

import ProjectGrid from '@/components/project-grid';
import Link from '@/components/my-link';
import IconCodepen from '@/components/icons/codepen';
import IconGithub from '@/components/icons/github';
import IconInstagram from '@/components/icons/instagram';
import IconLinkedin from '@/components/icons/linkedin';

import s from './index.module.scss';
import ls from '@/styles/shared/layout.module.scss';
import buttons from '@/styles/shared/buttons.module.scss';

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
  // const tlRef = useRef(null);

  // Init Greensock scroll animation
  useLayoutEffect(() => {
    let gsapCtx = gsap.context(() => {

      // TEST
      // gsap.to(s.hero_bg_spot, {
      //   scrollTrigger: {
      //     trigger: s.hero,
      //     scrub: true,
      //     pin: true,
      //     start: "top top",
      //     end: "+=200%",
      //   },
      //   ease: 'none',
      //   rotation: 180,
      // });

      // gsap.to(textRef.current, {
      //   x: -1900,
      //   duration: 4,
      // });

      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: heroSectionRef.current,
      //     pin: true,
      //     // pinSpacing: false,
      //     start: "top top",
      //     end: "50% top",
      //     // end: "+=300",
      //     scrub: 1,
      //     markers: true,
      //   }
      // });

      // const maxX = (window.innerWidth / 3);
      // const maxY = (window.innerHeight / 3);

      // const randomPosition = {
      //   duration: 1,
      //   x: `random(-${maxX}, ${maxX}, 10)`,
      //   y: `random(-${maxY}, ${maxY}, 10)`,
      //   rotation: 'random(-360, 360, 5)',
      // };

      // tl.to(textRef.current, {
      //   x: -1900,
      //   // ease: 'none',
      // });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: heroSectionRef.current,
          scrub: 1,
          start: "top top",
          end: "90% top",
          // markers: true,
        },
        x: -1900,
      });


      // tl.to(s.hero_bg_spot, randomPosition);
        // .to(spotRef.current, randomPosition)
        // .to(spotRef.current, {
        //   duration: 1,
        //   x: '0',
        //   y: '0',
        //   ease: 'circ.out',
        // })
        // .to(spotRef.current, {
        //   duration: 2,
        //   scale: 8,
        // });
      
      return () => gsapCtx.revert();

    }, pageRef);
  }, []);


  // const [yScroll, setYScroll] = useState(0);


  // const onHeroScroll = useCallback(throttle(() => {
  //   if (heroRef.current && textRef.current) {
  //     const scrollPosition = window.scrollY;
  //     const heroHeight = (heroRef.current?.scrollHeight - (window.innerHeight * 0.8));
  //     const percentHeroScrolled = scrollPosition / heroHeight;

  //     const textWidth = textRef.current.scrollWidth - 220; // for "Creative developer" text

  //     if (percentHeroScrolled <= 1) {
  //       setYScroll(percentHeroScrolled * textWidth);
  //     } else {
  //       setYScroll(textWidth);
  //     }
  //   }
  // }, 100), [heroRef, textRef]);


  // const addScrollListner = useCallback(() => {
  //   const scrollClean = () => {
  //     document.removeEventListener('scroll', onHeroScroll);
  //   };

  //   if (window.innerWidth > desktopBp) {
  //     scrollClean();
  //     document.addEventListener('scroll', onHeroScroll);

  //   } else {
  //     scrollClean();
  //   }

  //   return scrollClean;
  // }, [onHeroScroll]);


  // useEffect(() => {
  //   const scrollCleanFn = addScrollListner();
  //   window.addEventListener('resize', addScrollListner);

  //   return () => {
  //     window.removeEventListener('resize', addScrollListner);
  //     scrollCleanFn();
  //   }
  // }, [addScrollListner]);


  return (
    <div
      className="page_home"
      ref={pageRef}
    >
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
            <span
              ref={spotRef}
              className={s.hero_bg_spot}
            />
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