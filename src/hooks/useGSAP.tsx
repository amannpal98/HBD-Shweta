import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface UseGSAPOptions {
  scope?: React.RefObject<HTMLElement> | null;
  dependencies?: any[];
}

export const useGSAP = (
  callback: () => void | (() => void),
  { scope, dependencies = [] }: UseGSAPOptions = {}
) => {
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Store the context to keep animations scoped
    const ctx = gsap.context(() => {
      // Call the callback and store any cleanup function returned
      const cleanup = callback();
      if (typeof cleanup === 'function') {
        cleanupRef.current = cleanup;
      }
    }, scope?.current);

    // Return cleanup function
    return () => {
      // Call any cleanup returned from the callback
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      // Kill all animations created in the context
      ctx.revert();
    };
  }, [callback, scope, ...dependencies]);
};