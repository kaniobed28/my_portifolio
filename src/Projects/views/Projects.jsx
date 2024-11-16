import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

const projects = [
    {
      title: 'Campus Sell',
      description: 'An online marketplace for everyone to buy and sell items. Users can post ads, manage offers, and chat securely with potential buyers.',
      image: '/images/campus-sell-logo-transparent.png',
      liveLink: 'https://campussell.github.io/',
    },
    {
      title: 'Verbo',
      description: 'An interactive language-learning platform with daily challenges, pronunciation exercises, voice transcription, and multilingual options.',
      image: 'images/verbo.jpg', // Replace with the actual image link
      githubLink: 'https://github.com/kaniobed28/verbo/',
      liveLink: 'https://kaniobed28.github.io/',
    },
    {
        title: 'COP Lille',
        description: 'A platform for COP organization, providing tools and resources for effective event management.',
        image: 'images/logo-cop (1).gif',
        githubLink: 'https://github.com/kaniobed28/cop-lille',
        liveLink: 'https://cop-lille.netlify.app/',
    },
    {
        title: 'Quizz Mast',
        description: 'An interactive quiz site for testing and improving knowledge across various topics.',
        image: 'images/quiz.png', // Replace with the actual image link
        liveLink: 'https://quizz-mast.netlify.app/',
    },
    {
        title: 'Birthing Lovers Network',
        description: 'A church website developed for the Ghanaian community, featuring announcements, resources, and event schedules.',
        image: 'images/blnlogo.jpg', // Replace with the actual image link
        liveLink: 'https://birthingloversnetwork.github.io/',
        githubLink: 'https://github.com/kaniobed28/BLN-website',
    },
    {
        title: 'Power of PicoW',
        description: 'A church website developed for the Ghanaian community, featuring announcements, resources, and event schedules.',
        image: 'images/picow.jpg', // Replace with the actual image link
        // liveLink: 'https://birthingloversnetwork.github.io/',
        githubLink: 'https://github.com/kaniobed28/pico_w_project_work',
    },
    {
        title: 'Read It',
        description: 'A desktop application that gives users the ability to read text to audio and control the speed of audio and the number of times it should repeat. It is currently supporting only English and French.',
        image: 'images/readit.png', 
        // liveLink: 'https://birthingloversnetwork.github.io/',
        githubLink: 'https://github.com/kaniobed28/read_it_desktop_version',
    },
  ];
  

const MyWorks = () => (
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
      My Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MyWorks;
