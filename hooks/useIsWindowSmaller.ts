import { useState, useEffect } from 'react';
import { windowExists } from '@/util';


export const useIsWindowSmaller = (targetWindowSize: number) => {
  const [isSmallerThanTarget, setIsSmallerThanTarget] = useState(windowExists() ? window.innerWidth < targetWindowSize : false)

  function onWindowResize() {
    setIsSmallerThanTarget(window.innerWidth < targetWindowSize)
  }

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    }
  }, []);

  return isSmallerThanTarget
}