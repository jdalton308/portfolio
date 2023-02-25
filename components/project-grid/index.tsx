import ProjectGridCard from '../project-grid-card';
import { IProject } from '@/data/projects';

import s from './project-grid.module.scss';


export default function ProjectGrid({ projects }: { projects: IProject[]}) {
  return (
    <div className={s.featured_grid}>

      { projects.map((proj) => (
          <ProjectGridCard
            key={proj.slug}
            project={proj}
          />
        ))
      }

    </div>
  )
}