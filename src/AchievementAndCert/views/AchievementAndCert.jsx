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
  DialogActions,
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
      >
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            width: 300,
            height: 350,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            ':hover': {
              boxShadow: 6,
              transform: 'scale(1.03)',
              transition: '0.3s',
            },
          }}
        >
          {/* Image Section */}
          <CardMedia
            component="img"
            height="150"
            image={image}
            alt={title}
            sx={{
              objectFit: 'contain',
              backgroundColor: '#f0f0f0',
            }}
          />
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
              sx={{ fontWeight: 'bold', mb: 1, fontSize: '1rem', textAlign: 'center' }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1, fontSize: '0.875rem', textAlign: 'center' }}
            >
              {description}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ textAlign: 'center' }}
            >
              {year}
            </Typography>
          </CardContent>
          {/* Learn More Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 'auto',
              mb: 2,
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: '#4caf50',
                borderColor: '#4caf50',
              }}
              onClick={handleOpen}
            >
              Learn More
            </Button>
          </Box>
        </Card>
      </motion.div>

      {/* Full-Screen Dialog */}
      <Dialog fullScreen open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              objectFit: 'contain',
              backgroundColor: '#f0f0f0',
              maxHeight: 400,
              margin: '0 auto',
              display: 'block',
            }}
          />
          <Typography variant="body1" sx={{ mt: 2 }}>
            Year: {year}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
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
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f9f9f9' }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 6,
          color: '#333',
        }}
      >
        Achievements & Certificates
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((achievement, index) => (
          <Grid item key={index}>
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
