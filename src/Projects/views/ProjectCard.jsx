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
        ':hover': {
          boxShadow: 6,
          transform: 'scale(1.05)',
          transition: '0.3s',
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt={project.title}
          sx={{
            objectFit: 'contain', // the image fits within the container
            backgroundColor: '#f0f0f0', 
          }}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        {/* GitHub Icon */}
        {project.githubLink && (
          <Tooltip title="View on GitHub">
            <IconButton
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        )}

        {/* Internet Icon (for live project link) */}
        {project.liveLink && (
          <Tooltip title="View Live Project">
            <IconButton
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LaunchIcon />
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
    githubLink: PropTypes.string,  // Optional GitHub link
    liveLink: PropTypes.string,   // Optional Live project link
  }).isRequired,
};

export default ProjectCard;
