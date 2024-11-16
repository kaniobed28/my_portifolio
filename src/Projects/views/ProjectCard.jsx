import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  if (!project || !project.image) {
    return <div>Loading...</div>; // Return a fallback if data is missing
  }

  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width: 300, // Set consistent width for all cards
        height: 400, // Set consistent height for all cards
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Ensures content is evenly spaced
        ':hover': {
          boxShadow: 6,
          transform: 'scale(1.03)',
          transition: '0.3s',
        },
      }}
    >
      <CardActionArea sx={{ flex: '1 0 auto' }}>
        <CardMedia
          component="img"
          height="150" // Fixed height for images
          image={project.image}
          alt={project.title}
          sx={{
            objectFit: 'contain', // Ensures image fits without distortion
            backgroundColor: '#f0f0f0',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem', // Consistent font size
              mb: 1,
              textAlign: 'center', // Center-align text
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: '0.875rem', textAlign: 'center' }} // Center-align description
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center', // Align buttons centrally
          alignItems: 'center',
          gap: 1,
        }}
      >
        {project.githubLink && (
          <Tooltip title="View on GitHub">
            <IconButton
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="small"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}

        {project.liveLink && (
          <Tooltip title="View Live Project">
            <IconButton
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="small"
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string, // Optional GitHub link
    liveLink: PropTypes.string, // Optional Live project link
  }).isRequired,
};

export default ProjectCard;
