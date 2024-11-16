import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeBanner = ({ onMyWorksClick, onContactMeClick, onAchievementsClick }) => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false });
  const { ref: buttonsRef, inView: buttonsInView } = useInView({ triggerOnce: false });

  return (
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
            Hi, I'm <span style={{ color: '#4caf50' }}>Obed KANI</span>
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
            >
              Achievements
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomeBanner;
