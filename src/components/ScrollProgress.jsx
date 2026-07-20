import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import { tokens } from '../theme';

/**
 * Hairline reading-progress indicator pinned above the nav.
 * Spring-smoothed so it glides rather than snapping to the scroll position.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <Box
      component={motion.div}
      style={{ scaleX }}
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        bgcolor: tokens.accent,
        transformOrigin: 'left',
        zIndex: (theme) => theme.zIndex.appBar + 1,
      }}
    />
  );
};

export default ScrollProgress;
