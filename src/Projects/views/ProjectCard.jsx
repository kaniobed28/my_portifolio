import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, IconButton, Tooltip, Box } from '@mui/material';
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(0, 230, 118, 0.5)',
        },
      }}
    >
      <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ width: '100%', overflow: 'hidden', height: 200, bgcolor: 'rgba(0,0,0,0.2)' }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.title}
            sx={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
              padding: 2,
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: 'primary.main',
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              fontSize: '0.9rem'
            }}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 1,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
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
              sx={{
                border: '1px solid rgba(0, 230, 118, 0.3)',
                '&:hover': { bgcolor: 'rgba(0, 230, 118, 0.1)' }
              }}
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
              color="secondary"
              size="small"
              sx={{
                border: '1px solid rgba(41, 182, 246, 0.3)',
                '&:hover': { bgcolor: 'rgba(41, 182, 246, 0.1)' }
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
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
