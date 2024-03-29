import projectData, { IProject } from '@/data/projects';
import Image from 'next/image';
import Link from '@/components/my-link';
import IconChevron from '@/components/icons/chevron';

import s from './work-id.module.scss';
import buttons from '@/styles/shared/buttons.module.scss';

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
    <div className={s.page_project}>
      <div className={s.project_grid}>

        <div className={s.text_column}>

          <Link
            href="/work"
            className={buttons.tertiary_button}
          >
            <IconChevron className={s.back_icon} />
            Back
          </Link>

          <div className={s.project_header}>
            <h1>
              { project.subtitle }<br/>
              { project.title }
            </h1>
            <p className={s.header_details}>
              { project.categories.join(' / ') }
            </p>
            <p className={s.header_details}>
              { project.date } / { project.duration }
            </p>
          </div>
        </div>

        <div className={s.image_column}>
          { project.images.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt={`Screenshot number ${i + 1} of ${project.title}`}
                className={s.project_image}
              />
            ))
          }
        </div>

        <div className={s.text_column}>
          <div className={s.project_section}>
            <h3>Features</h3>
            <ul>
              {project.features.map((feat) => (
                  <li key={feat}>
                    { feat }
                  </li>
                ))
              }
            </ul>
          </div>

          <div className={s.project_section}>
            <h3>About</h3>
            {project.about.map((para, i) => (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{__html: para}}
                />
              ))
            }
          </div>

          { project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Opens ${project.title} in a new tab`}
              className={buttons.secondary_button}
            >
              Open Project
            </a>
          )}
        </div>

      </div>
    </div>
  )
}