import { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import throttle from 'lodash.throttle';
import s from './logo.module.scss';


export default function Logo() {
  const [bgPosStyle, setBgPosStyle] = useState('50% 50%');

  const onMouseMove = useCallback((e: MouseEvent) => {
    const xRatio = e.x/window.innerWidth;
    const yRatio = e.y/window.innerHeight;
    
    const xPerc = 100 - (xRatio * 100);
    const yPerc = 100 - (yRatio * 100);

    setBgPosStyle(`${xPerc}% ${yPerc}%`);
  }, [setBgPosStyle]);


  useEffect(() => {
    console.log('in useEffect');
    const throttledOnMousMove = throttle(onMouseMove, 100);
    window.addEventListener('mousemove', throttledOnMousMove);

    return () => {
      window.removeEventListener('mousemove', throttledOnMousMove);
    };
  }, []);


  return (
    <div
      className={s.logo}
      style={{backgroundPosition: bgPosStyle}}
    >
      J.D.
    </div>
  )
}