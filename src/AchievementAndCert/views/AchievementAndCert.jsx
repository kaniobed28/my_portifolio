import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import PropTypes from 'prop-types';

// AchievementCard Component for individual achievement/certificate
const AchievementCard = ({ title, description, year, image }) => (
  <Card
    sx={{
      borderRadius: 2,
      boxShadow: 3,
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
      height="200"
      image={image}
      alt={title}
      sx={{
        objectFit: 'contain', // Ensures image fits without cropping
        backgroundColor: '#f0f0f0',
      }}
    />
    {/* Text Content */}
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {description}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {year}
      </Typography>
      {/* Optional Action */}
      <Button
        variant="outlined"
        size="small"
        sx={{ mt: 1, color: '#4caf50', borderColor: '#4caf50' }}
        onClick={() => alert(`${title} details coming soon!`)}
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

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
      <Grid container spacing={4}>
        {achievements.map((achievement, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
