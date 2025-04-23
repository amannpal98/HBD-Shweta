import React, { useEffect } from 'react';

const CursorEffect: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      // Animate and remove
      requestAnimationFrame(() => {
        trail.style.opacity = '0.6';
        trail.style.transform = 'scale(1)';
        
        setTimeout(() => {
          trail.style.opacity = '0';
          trail.style.transform = 'scale(3)';
          trail.style.transition = 'all 0.8s ease-out';
          
          setTimeout(() => {
            document.body.removeChild(trail);
          }, 800);
        }, 10);
      });
    };

    const throttledMouseMove = throttle(handleMouseMove, 50);
    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

// Simple throttle function
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default CursorEffect;