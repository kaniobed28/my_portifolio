import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { tokens } from '../theme';

/**
 * Opens a section with a mono eyebrow, a hairline rule and an optional
 * count on the right — the editorial "01 — 14" device.
 */
const SectionHeading = ({ label, title, meta }) => (
  <Box sx={{ mb: { xs: 6, md: 9 } }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        gap: 3,
        mb: 3,
      }}
    >
      <Typography variant="overline" sx={{ color: tokens.accent, flexShrink: 0 }}>
        {label}
      </Typography>
      <Box sx={{ flexGrow: 1, height: '1px', bgcolor: tokens.hairline }} />
      {meta && (
        <Typography variant="overline" sx={{ color: 'text.secondary', flexShrink: 0 }}>
          {meta}
        </Typography>
      )}
    </Box>

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2.75rem', md: '4rem' },
          color: 'text.primary',
          maxWidth: '18ch',
        }}
      >
        {title}
      </Typography>
    </motion.div>
  </Box>
);

SectionHeading.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  meta: PropTypes.string,
};

export default SectionHeading;
