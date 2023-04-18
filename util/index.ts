import { useEffect, useLayoutEffect } from 'react';

export const tabletBp = 640;
export const desktopBp = 1024;

export const useIsomorphicLayoutEffect = (typeof window !== 'undefined') ? useLayoutEffect : useEffect;
