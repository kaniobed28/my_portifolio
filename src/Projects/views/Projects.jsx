import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Campus Sell (Flutter)',
    description: 'An online marketplace for student to enhance buy and sell on Campus. Users can post ads, manage offers, and chat securely with potential buyers.',
    image: '/images/campus-sell-logo-transparent.png',
    liveLink: 'https://campussell.github.io/',
    githubLink: 'https://github.com/kaniobed28/campus_sell',
  },
  {
    title: 'Campus Sell (Next.js)',
    description: 'An online marketplace for student to enhance buy and sell  on Campus. Users can post ads, manage offers, and chat securely with potential buyers.',
    image: '/images/campus-sell-logo-transparent.png',
    liveLink: 'https://campussell.vercel.app/',
    githubLink: 'https://github.com/kaniobed28/campus-sell-next-js',
  },
  {
    title: 'Memory FlashCard (React.js)',
    description: 'A powerful tool to help you easily store and review words, their definitions, and examples for better learning!',
    image: '/images/flashcard.jpg',
    liveLink: 'https://memory-flashcard.netlify.app/',
  },
  {
    title: 'Verbo (Flutter)',
    description: 'An interactive language-learning platform with daily challenges, pronunciation exercises, voice transcription, and multilingual options.',
    image: 'images/verbo.jpg',
    githubLink: 'https://github.com/kaniobed28/verbo/',
    liveLink: 'https://verbo-obed.netlify.app/',
  },
  {
    title: 'COP Lille (React.js)',
    description: 'A platform I am building for the COP-Lille assembly, providing tools and resources for effective event management and everything for services.',
    image: 'images/logo-cop (1).gif',
    githubLink: 'https://github.com/kaniobed28/cop-lille',
    liveLink: 'https://cop-lille.netlify.app/',
  },
  {
    title: 'Quizz Mast (React.js)',
    description: 'An interactive quiz site for made for teacher or educators to test the knowledge level of their students.',
    image: 'images/quiz-app.png',
    githubLink: 'https://github.com/kaniobed28/quiz-app',
    liveLink: 'https://quizz-mast.netlify.app/',
  },
  {
    title: 'Smart Box (React.js)',
    description: 'Smart Box Click Game is a game that challenges players to click on a random box with certain time limit and score points.',
    image: '/images/smart-box.ico',
    liveLink: 'https://the-smart-box.netlify.app/',
  },
  {
    title: 'Class Room (React.js)',
    description: 'An Online class room platform made with alliance française in mind to facilitate easy communication and resources of material between students and teachers.',
    image: '/images/quiz.png',
    liveLink: 'https://blt-classroom.netlify.app/',
  },
  {
    title: 'Birthing Lovers Network (Flutter)',
    description: 'A church website developed for the BLN Ghanaian community, featuring announcements, resources, and event schedules for the SOM25 project.',
    image: 'images/blnlogo.jpg',
    liveLink: 'https://birthingloversnetwork.netlify.app/',
    githubLink: 'https://github.com/kaniobed28/bln-official-site',
  },
  {
    title: 'MarketX (React.js)',
    description: 'A grand version of Campus Sell. An e-commerce platform for everyday people to buy and sell items. Users can post ads, manage offers, and chat securely with potential buyers.',
    image: 'images/marketx.png',
    liveLink: 'https://market-x.netlify.app/',
    githubLink: 'https://github.com/kaniobed28/marketx',
  },
  {
    title: 'Power of PicoW',
    description: 'End of semester project work collaborated with team members to build. In this project, we explored the power of the WIFI capabilities added to the PICO by sending sensor data to the cloud using MQTT and doing live plot using MatplotLib',
    image: 'images/picow.jpg',
    githubLink: 'https://github.com/kaniobed28/pico_w_project_work',
  },
  {
    title: 'Read It (python)',
    description: 'A desktop application that gives users the ability to read text to audio and control the speed of audio and the number of times it should repeat. It is currently supporting only English and French.',
    image: 'images/readit.png',
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MyWorks;
