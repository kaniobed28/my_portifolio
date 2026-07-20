import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { tokens } from '../theme';

const STACK = [
  'Flutter', 'Next.js', 'React', 'NestJS', 'Laravel', 'TypeScript',
  'PostgreSQL', 'PostGIS', 'Redis', 'Supabase', 'Firebase', 'WebRTC',
  'Paystack', 'Docker', 'Prisma', 'Python',
];

/**
 * Infinite marquee of the working stack — a quiet band that separates the
 * hero from the work without needing another headline.
 *
 * The track is duplicated and translated by exactly -50%, so the seam lands
 * on an identical frame and the loop is invisible.
 */
const StackTicker = () => (
  <Box
    aria-label="Technologies I work with"
    sx={{
      position: 'relative',
      py: 2.5,
      bgcolor: tokens.ink,
      borderTop: `1px solid ${tokens.hairline}`,
      borderBottom: `1px solid ${tokens.hairline}`,
      overflow: 'hidden',
      // Fade the ends so items enter and leave rather than getting clipped.
      maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        width: 'max-content',
        animation: 'ticker 42s linear infinite',
        '&:hover': { animationPlayState: 'paused' },
        '@keyframes ticker': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      {[0, 1].map((copy) => (
        <Stack key={copy} direction="row" aria-hidden={copy === 1}>
          {STACK.map((item) => (
            <Stack key={`${copy}-${item}`} direction="row" alignItems="center" spacing={3} sx={{ px: 3 }}>
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', whiteSpace: 'nowrap', opacity: 0.75 }}
              >
                {item}
              </Typography>
              <Box sx={{ width: 3, height: 3, borderRadius: '50%', bgcolor: tokens.accent, opacity: 0.5 }} />
            </Stack>
          ))}
        </Stack>
      ))}
    </Box>
  </Box>
);

export default StackTicker;
