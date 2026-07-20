import { useState, useEffect } from 'react';

/**
 * Scroll-spy. Reports which section id is currently occupying the reading
 * position, so the nav can reflect where the visitor actually is.
 *
 * Uses a top-biased rootMargin rather than a plain intersection ratio so a
 * tall section still wins while its bottom half is on screen.
 */
const useActiveSection = (ids, offset = 76) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActive(visible[0].target.id);
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.4, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
};

export default useActiveSection;
