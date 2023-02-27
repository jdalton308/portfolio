import projectData, { IProject } from '@/data/projects';
import ProjectGrid from '@/components/project-grid';

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
    <div className={ls.page}>
      <div className={ls.wrapper}>
        <h1>All Work</h1>
        <ProjectGrid projects={allProjects} />
      </div>
    </div>
  );
}