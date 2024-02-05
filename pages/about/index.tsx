import Image from 'next/image';
import portaitImage from '@/data/images/portrait.jpg'

import s from './about.module.scss';
import ls from '@/styles/shared/layout.module.scss';
import buttons from '@/styles/shared/buttons.module.scss';

export default function About() {
  return (
    <div className={ls.page}>
      <div className={ls.wrapper}>
        <h1>About Me</h1>

        <div className={s.split_section}>
          <div className={s.section_column}>
            <p>I have been a software developer for the past decade, and in that time have loved building highly interactive, performant, and thoughtful web applications. Almost all of that time has been spent on the front-end of the stack, writing efficient and organized JavaScript, as well as accessible HTML, and pixel-perfect CSS.</p>

            <p>And while building user interfaces, I have been lucky enough to collaborate closely with many talented designers over the years. They have imparted knowledge and appreciation for excellent UX and UI design, and I find myself always championing the user and their experience within an app.  And to that end, for years I was also deeply involved in user testing, cultivating feedback on new features to iterate and continually improve apps.</p>

            <p>All that to say: While I love writing code and solving technical problems, I also love building something beautiful and effective.</p>

            <p>Outside of work, I am passionate about health and fitness, rock climbing, construction and building trades, and all types of live music. I am currently living in Denver, Colorado.
            </p>
          </div>

          <div className={s.photo_column}>
            <Image
              src={portaitImage}
              alt="portait of my"
              className={s.portait_image}
            />
          </div>

        </div>

        <div className={s.about_section}>
          <h3>Types of Work</h3>
          <ul>
            <li>Front-end Development & Architecture</li>
            <li>JavaScript Development</li>
            <li>Interaction, Animation, and Motion Development</li>
            <li>App Prototype Development</li>
            <li>Headless CMS Architecture</li>
            <li>Design System Development</li>
          </ul>
        </div>

        <a
          className={buttons.secondary_button}
          href="/resume.pdf"
          download
        >
          Download My Resume
        </a>

      </div>
    </div>
  );
}