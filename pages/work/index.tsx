import projectData, { IProject, categoryMap } from '@/data/projects';
import ProjectGrid from '@/components/project-grid';

import s from './work.module.scss';
import ls from '@/styles/shared/layout.module.scss';

export async function getStaticProps() {
  return {
    props: {
      allProjects: projectData,
    },
  }
}

interface IWorkProps {
  allProjects: IProject[];
}

export default function Work({
  allProjects
}: IWorkProps) {


  return (
    <div className={s.page_work}>
      <div className={ls.wrapper}>
        <h1>All Work</h1>
        <ProjectGrid projects={allProjects} />
      </div>
    </div>
  );
}