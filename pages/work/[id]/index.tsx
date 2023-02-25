import projectData, { IProject } from '@/data/projects';
import ls from '@/styles/shared/layout.module.scss';

export async function getStaticPaths() {
  const paths = projectData.map((proj) => ({
    params: {
      id: proj.slug
    }
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const project = projectData.find((proj) => proj.slug === params.id);

  return (project) ? {
    props: { project },
  } : {
    notFound: true,
  }
}


export default function ProjectPage({ project }: { project: IProject }) {
  return (
    <div>
      Project page:
      <div>
        {project.title}
      </div>
    </div>
  )
}