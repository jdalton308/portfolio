import { useCallback, useState, useEffect } from 'react';
import projectData, { IProject, categoryMap } from '@/data/projects';
import ProjectGrid from '@/components/project-grid';

import ls from '@/styles/shared/layout.module.scss';
import buttons from '@/styles/shared/buttons.module.scss';
import s from './work.module.scss';

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

const CATEGORY_ENTRIES = Object.entries(categoryMap);


export default function Work({
  allProjects
}: IWorkProps) {

  const [shownProjects, setShownProjects] = useState(allProjects);
  const [selectedFilters, setSelectedFilters] = useState(new Set());


  const onSelectCategoryFilter = useCallback((categoryKey: string) => {
    let newFilters = new Set(selectedFilters);

    if (newFilters.has(categoryKey)) {
      newFilters.delete(categoryKey);

    } else {
      newFilters.add(categoryKey);
    }

    setSelectedFilters(newFilters);
  }, [selectedFilters]); 

  const onClearFilters = useCallback(() => {
    setSelectedFilters(new Set());
  }, [setSelectedFilters])


  useEffect(() => {
    const filters = [...selectedFilters];

    if (filters.length) {
      const newProjects = allProjects.filter((proj) => {
        return proj.categories.some((projCat) => {
          return filters.includes(projCat);
        });
      });
      setShownProjects(newProjects);

    } else {
      setShownProjects(allProjects);
    }
  }, [selectedFilters]);


  return (
    <div className={ls.page}>
      <div className={ls.wrapper}>
        <h1>All Work</h1>

        <div className={s.filter_button_row}>

          { CATEGORY_ENTRIES.map((categoryArr) => (
              <button
                key={categoryArr[0]}
                type="button"
                onClick={ () => {onSelectCategoryFilter(categoryArr[1])} }
                className={`
                  ${selectedFilters.has(categoryArr[1]) ? s.filter_active : ''}
                  ${s.filter_button}
                `}
              >
                { categoryArr[1] }
              </button>
            ))
          }

          <button
            type="button"
            onClick={() => onClearFilters()}
            className={ buttons.tertiary_button }
          >
            Reset Filters
          </button>

        </div>

        <div className={ s.count_details }>
          Showing {shownProjects.length} / {allProjects.length}
        </div>

        <ProjectGrid projects={shownProjects} />
      </div>
    </div>
  );
}