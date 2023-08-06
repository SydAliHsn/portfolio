// useIsElementInViewport.js

import { useState, useEffect } from 'react';

const useIsElementInViewport = ref => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsInViewport(entry.isIntersecting);
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No additional margin
        threshold: 0.2, // 10% of the element visible is considered in the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInViewport;
};

export default useIsElementInViewport;
