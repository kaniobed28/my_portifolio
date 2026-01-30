import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Container,
} from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// AchievementCard Component for individual achievement/certificate
const AchievementCard = ({ title, description, year, image }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{ height: '100%' }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease-in-out',
            boxShadow: 'none',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(0, 230, 118, 0.3)',
            },
          }}
        >
          {/* Image Section */}
          <Box sx={{ p: 2, height: 180, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0,0,0,0.2)' }}>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
          {/* Text Content */}
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, mb: 1, fontSize: '1.1rem', textAlign: 'center', color: 'primary.main' }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1, fontSize: '0.9rem', textAlign: 'center', mb: 2 }}
            >
              {description}
            </Typography>
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', color: 'text.secondary', opacity: 0.7 }}
            >
              Year: {year}
            </Typography>
          </CardContent>
          {/* Learn More Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 'auto',
              mb: 2,
              p: 2,
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderRadius: 20,
              }}
              onClick={handleOpen}
            >
              Learn More
            </Button>
          </Box>
        </Card>
      </motion.div>

      {/* Full-Screen Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            background: '#121212',
            color: '#fff'
          }
        }}
      >
        <DialogTitle sx={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            {title}
            <Button onClick={handleClose} variant="contained" color="error">
              Close
            </Button>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Container maxWidth="md">
            <Typography variant="h5" sx={{ mb: 4, color: 'text.primary' }}>
              {description}
            </Typography>
            <Box
              sx={{
                width: '100%',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'rgba(255,255,255,0.05)',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              <img
                src={image}
                alt={title}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </Box>
            <Typography variant="h6" sx={{ mt: 4, color: 'primary.main' }}>
              Year: {year}
            </Typography>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Main AchievementsAndCertificates Component
const AchievementsAndCertificates = () => {
  const achievements = [
    {
      title: 'National Science & Math Quiz (NSMQ National)',
      description: 'Participated in the National Science and Mathematics Quiz in Ghana.',
      year: '2020',
      image: '/images/nsmq.jpg',
    },
    {
      title: 'Civic Education Club President',
      description: 'Led a student civic education club to promote societal awareness.',
      year: '2020',
      image: '/images/cec.png',
    },
    {
      title: 'Student Representative (SRC President)',
      description: 'Represented students for the academic year 2019-2020.',
      year: '2019',
      image: '/images/testimonial.png',
    },
    {
      title: 'NSMQ Regional Qualifiers',
      description: 'Took my school to Regional level and won for the first time 2020.',
      year: '2020',
      image: '/images/regional.png',
    },
  ];

  return (
    <Box sx={{ py: 12, px: { xs: 2, md: 8 }, backgroundColor: 'background.default' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 8,
            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Achievements
        </Typography>
      </motion.div>
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <AchievementCard
              title={achievement.title}
              description={achievement.description}
              year={achievement.year}
              image={achievement.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// PropTypes for validation
AchievementsAndCertificates.propTypes = {
  achievements: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

AchievementCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AchievementsAndCertificates;
