import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';
import AboutMeDialog from './AboutMeDialog';

const HomeBanner = ({ onMyWorksClick, onContactMeClick, onAchievementsClick }) => {
  const theme = useTheme();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true });
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  const handleOpenAboutMe = () => setIsAboutMeOpen(true);
  const handleCloseAboutMe = () => setIsAboutMeOpen(false);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          minHeight: '100vh',
          background: `url(/images/backg.avif)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          overflow: 'hidden',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(90deg, ${theme.palette.background.default} 0%, rgba(18, 18, 18, 0.8) 50%, rgba(18, 18, 18, 0.4) 100%)`,
            zIndex: 1,
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 8, md: 0 },
            textAlign: { xs: 'center', md: 'left' } // Center on mobile, left on desktop
          }}
        >
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                mb: 2,
                display: 'block'
              }}
            >
              Software Engineer
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3.5rem', md: '5.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 2,
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Hi, I'm <br />
              <Typography component="span" variant="inherit" sx={{ color: 'primary.main' }}>
                Obed KANI
              </Typography>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 6,
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: { xs: '100%', md: '600px' },
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                lineHeight: 1.6
              }}
            >
              Crafting bespoke digital solutions. I build accessible, pixel-perfect, and performant web applications.
            </Typography>
          </motion.div>

          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems={{ xs: 'center', md: 'flex-start' }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={onMyWorksClick}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  boxShadow: '0 4px 14px 0 rgba(0, 230, 118, 0.39)',
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleOpenAboutMe}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
                  borderWidth: '2px',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.5)',
                  ':hover': {
                    borderColor: '#fff',
                    bgcolor: 'rgba(255,255,255,0.1)'
                  },
                }}
              >
                About Me
              </Button>
            </Stack>

            {/* Social Media Icons */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 6, justifyContent: { xs: 'center', md: 'flex-start' } }}
            >
              <IconButton href="https://www.linkedin.com/in/kani-obed" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}>
                <LinkedIn fontSize="large" />
              </IconButton>
              <IconButton href="https://github.com/kaniobed28" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}>
                <GitHub fontSize="large" />
              </IconButton>
              <IconButton href="https://wa.me/+233593626857" target="_blank" sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'primary.main', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}>
                <WhatsApp fontSize="large" />
              </IconButton>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      <AboutMeDialog open={isAboutMeOpen} onClose={handleCloseAboutMe} />
    </>
  );
};

export default HomeBanner;

