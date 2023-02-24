import projectData, { categoryMap, IProject } from '@/data/projects';

export async function getStaticPaths() {
  const paths = projectData.map((proj) => ({
    params: {
      id: proj.slug
    }
  }));

  return {
    paths,
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

export default function Work({ project }: { project: IProject }) {
  return (
    <>
      <h1>Work</h1>
    </>
  );
}