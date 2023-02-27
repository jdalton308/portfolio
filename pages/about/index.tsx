import s from './about.module.scss';
import ls from '@/styles/shared/layout.module.scss';
import ws from '../work/[id]/work-id.module.scss';

export default function About() {
  return (
    <div className={ls.page}>
      <div className={ls.wrapper}>
        <h1>About Me</h1>

        <div className={s.about_section}>
          <h3>Types of Work</h3>
          <ul>
            <li>Front-end Development & Architecture</li>
            <li>JavaScript Development</li>
            <li>Interaction Design</li>
            <li>Motion Design</li>
            <li>App Prototype Development</li>
            <li>Headless CMS Architecture</li>
          </ul>
        </div>

        <div className={s.about_section}>
          <h3>Background</h3>

          <div className={s.timeline_group}>
            <em>Minneapolis, MN</em>
            <p>2011 - Started coding while in grad school (for Stem Cell Biology)</p>
          </div>

          <div className={s.timeline_group}>
            <em>San Francisco, CA</em>
            <p>2013 - Left my career in science to do freelance design and development</p>
            <p>2014 - First professional job, as an Associate Web Developer at Viscira</p>
            <p>2015 - Front-end Developer at Sequence (now owned by Salesforce)</p>
            <p>2016 - Moved to Colorado</p>
          </div>

          <div className={s.timeline_group}>
            <em>Denver, CO</em>
            <p>2016 - UX Engineer at Athlinks</p>
            <p>2017 - Senior Software Engineer at Charter Communications</p>
            <p>2022 - Contact as Senior Software Engineer/Technical Lead at Designory</p>
            <p>2022 - Senior Software Engineer at Klaviyo</p>
            <p>2023 - Back to freelance</p>
          </div>
        </div>

        <a
          className={ws.secondary_button}
          href="/resume.pdf"
          download
        >
          Download My Resume
        </a>

      </div>
    </div>
  );
}