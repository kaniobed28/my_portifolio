import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import AboutMeDialog from './AboutMeDialog';
import { tokens } from '../../theme';

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socials = [
  { href: 'https://www.linkedin.com/in/kani-obed', icon: <LinkedIn fontSize="small" />, label: 'LinkedIn' },
  { href: 'https://github.com/kaniobed28', icon: <GitHub fontSize="small" />, label: 'GitHub' },
  { href: 'https://wa.me/+233593626857', icon: <WhatsApp fontSize="small" />, label: 'WhatsApp' },
];

const HomeBanner = ({ onMyWorksClick }) => {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100svh',
          bgcolor: tokens.ink,
          overflow: 'hidden',
        }}
      >
        {/* Texture layers: dot grid, warm bloom, and a vignette to settle the edges. */}
        <Box className="grid-field" sx={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <Box className="accent-bloom" sx={{ position: 'absolute', inset: 0 }} />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(120% 90% at 50% 40%, transparent 40%, ${tokens.ink} 100%)`,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 14, md: 10 } }}>
          <motion.div initial="hidden" animate="visible" custom={0} variants={rise}>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
              gap={2}
              sx={{ mb: { xs: 4, md: 5 } }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={{ width: 32, height: '1px', bgcolor: tokens.accent }} />
                <Typography variant="overline" sx={{ color: tokens.accent }}>
                  Software Engineer
                </Typography>
              </Stack>

              {/* Availability pill — a live pulse reads as "currently true". */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{
                  px: 1.5,
                  py: 0.6,
                  borderRadius: 999,
                  border: `1px solid ${tokens.hairline}`,
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                }}
              >
                <Box sx={{ position: 'relative', display: 'flex', width: 6, height: 6 }}>
                  <Box
                    component={motion.span}
                    animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                    sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: '#4ADE80' }}
                  />
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4ADE80' }} />
                </Box>
                <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.62rem' }}>
                  Open to work
                </Typography>
              </Stack>
            </Stack>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={1} variants={rise}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4.25rem', sm: '6rem', md: '8.5rem' },
                color: 'text.primary',
                mb: { xs: 3, md: 4 },
              }}
            >
              Obed Kani
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={2} variants={rise}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.3rem' },
                maxWidth: '46ch',
                mb: { xs: 5, md: 7 },
              }}
            >
              I build production platforms end to end — ride-hailing dispatch,
              contactless payments and multi-vendor commerce — from the mobile app
              down to the API and the database.
            </Typography>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={3} variants={rise}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: { xs: 6, md: 8 } }}>
              <Button variant="contained" size="large" onClick={onMyWorksClick} sx={{ py: 1.4 }}>
                View selected work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setIsAboutMeOpen(true)}
                sx={{ py: 1.4 }}
              >
                About me
              </Button>
            </Stack>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={4} variants={rise}>
            <Stack direction="row" spacing={1} sx={{ ml: -1 }}>
              {socials.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{
                    color: 'text.secondary',
                    transition: 'color 200ms',
                    '&:hover': { color: 'text.primary', bgcolor: 'transparent' },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </motion.div>
        </Container>

        {/* Scroll cue */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1.5,
            zIndex: 1,
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.62rem' }}>
            Scroll
          </Typography>
          <Box
            component={motion.div}
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ width: '1px', height: 40, bgcolor: tokens.hairlineStrong }}
          />
        </Box>
      </Box>

      <AboutMeDialog open={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </>
  );
};

export default HomeBanner;
