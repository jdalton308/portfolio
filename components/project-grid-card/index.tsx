import { useState, MouseEvent as ReactMouseEvent } from 'react';
// @ts-ignore
import throttle from 'lodash.throttle';
import Link from 'next/link';

import { IProject } from '@/data/projects';
import s from './project-grid-card.module.scss';

const MAX_ROTATION = 3;


interface IProjectCardProps {
  project: IProject;
}


function cardBackground(imgUrl: string) {
  const overlayColor = 'rgba(75, 99, 91, 0.94)';
  return `linear-gradient(${overlayColor}, ${overlayColor}, rgba(75, 99, 91, 0.3)), url(${imgUrl})`;
}


export default function ProjectGridCard({ project }: IProjectCardProps) {
  const [xRot, setXRot] = useState(0);
  const [yRot, setYRot] = useState(0);

  function onMouseMove(e: MouseEvent) {
    const {
      offsetX,
      offsetY,
      target
    } = e;

    // // get coordinates of mouse in card
    const xPos = -(offsetX - ((target as HTMLElement).offsetWidth/2));
    const yPos = offsetY - ((target as HTMLElement).offsetHeight/2);

    // // get rotation value from coordinate within card
    const xRot = -(yPos / ((target as HTMLElement).offsetHeight/2)) * MAX_ROTATION;
    const yRot = -(xPos / ((target as HTMLElement).offsetWidth/2)) * MAX_ROTATION;
  
    setXRot(xRot);
    setYRot(yRot);
  }

  const throttledOnMousMove = throttle(onMouseMove, 100);
  
  function onMouseEnter(e: ReactMouseEvent) {
    e.target.addEventListener('mousemove', throttledOnMousMove);
    e.target.addEventListener('mouseleave', onMouseExit);
  }
  
  function onMouseExit(e: Event) {
    window.setTimeout(() => {
      setXRot(0);
      setYRot(0);
    }, 150); // wait for throttle to clear

    e.target?.removeEventListener('mousemove', throttledOnMousMove);
    e.target?.removeEventListener('mouseleave', onMouseExit);
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className={s.grid_item}
      style={{
        backgroundImage: cardBackground(project.images[0].src),
        transform: `rotateX(${xRot}deg) rotateY(${yRot}deg)`,
      }}
      onMouseEnter={onMouseEnter}
    >
      <div className={s.item_title}>
        <h3>
          { project.title }
        </h3>
        <h4>
          { project.subtitle }
        </h4>
      </div>

      <span className={s.item_detail}>
        { project.features.join(' / ') }
      </span>
    </Link>
  )
}