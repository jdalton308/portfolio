import { useEffect, useLayoutEffect } from 'react';

export const tabletBp = 640;
export const desktopBp = 1024;

export const windowExists = () => typeof window !== 'undefined';

export const useIsomorphicLayoutEffect = windowExists() ? useLayoutEffect : useEffect;
