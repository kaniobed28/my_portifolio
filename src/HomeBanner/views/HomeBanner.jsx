import React, { useState } from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutMeDialog from './AboutMeDialog';

const HomeBanner = ({ onMyWorksClick, onContactMeClick, onAchievementsClick }) => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: true });

  // State for showing dialog
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
          justifyContent: 'center',
          height: '100vh',
          backgroundImage: 'url(/images/backg.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#000', // Fallback background
          color: '#fff',
          textAlign: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 'md',
          }}
        >
          {/* Title Animation */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: -50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              Hi, I'm{' '}
              <motion.span
                style={{
                  color: '#4caf50',
                  position: 'relative',
                  zIndex: 2,
                }}
                initial={{ textShadow: '0px 0px 10px rgba(76, 175, 80, 0)' }}
                animate={{ textShadow: '0px 0px 10px rgba(76, 175, 80, 1)' }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              >
                Obed KANI
              </motion.span>
            </Typography>
          </motion.div>

          {/* Call-to-Action Buttons Animation */}
          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={buttonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#4caf50',
                  ':hover': { backgroundColor: '#388e3c' },
                }}
                onClick={onMyWorksClick}
                aria-label="View my projects"
              >
                View My Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#4caf50',
                  borderColor: '#4caf50',
                  ':hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' },
                }}
                onClick={onContactMeClick}
                aria-label="Contact me"
              >
                Contact Me
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#4caf50',
                  ':hover': { backgroundColor: '#388e3c' },
                }}
                onClick={onAchievementsClick}
                aria-label="View my achievements"
              >
                Achievements
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: '#4caf50',
                  borderColor: '#4caf50',
                  ':hover': { backgroundColor: 'rgba(76, 175, 80, 0.1)' },
                }}
                onClick={handleOpenAboutMe}
                aria-label="Know more about me"
              >
                About Me
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* About Me Dialog */}
      <AboutMeDialog open={isAboutMeOpen} onClose={handleCloseAboutMe} />
    </>
  );
};

export default HomeBanner;
