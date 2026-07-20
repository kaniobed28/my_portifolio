import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Dropping — Ride & Delivery Platform (Flutter · Next.js · NestJS)',
    description:
      'A call-based ride-hailing and courier platform for Ghana. Riders hail a ride, nearby drivers claim it through an expanding-ring dispatch, and fare is agreed on an in-app WebRTC voice call — no phone numbers exchanged. Backed by an authoritative NestJS + PostGIS + Redis core API with Firebase for realtime, plus a Partner API that lets businesses dispatch their own deliveries into the driver network. Rider and driver both ship as Flutter apps and Next.js web apps sharing one fare engine.',
    image: '/images/dropping.png',
    liveLink: 'https://dropping-client.vercel.app/',
  },
  {
    title: 'Campus Sell — Marketplace Platform (Next.js · Laravel · Flutter)',
    description:
      'A multi-vendor marketplace where students and sellers run real storefronts. Personalized feed rails, Paystack checkout, order management, an integrated delivery system, buyer-to-seller voice calls and a Gemini-powered shopping assistant that can search, fill a basket and take you to checkout. Ships as a buyer web client, a seller console and a native Flutter app over one headless Laravel commerce API.',
    image: '/images/campus-sell-logo-transparent.png',
    liveLink: 'https://campus-sell-client.vercel.app/',
  },
  {
    title: 'TapPay (Flutter · NestJS)',
    description:
      'A contactless peer-to-peer payments platform. Two phones tap over NFC or scan a QR code to open a cryptographically signed payment session, and money settles through Paystack — no card credentials ever pass between devices. NestJS + Prisma + Postgres backend with a swappable payment provider.',
    image: '/images/tappay.png',
    liveLink: 'https://tappay-nine.vercel.app/',
  },
  {
    title: 'Ghana Room Finder (React · Firebase)',
    description:
      'A rental marketplace for rooms and apartments in Ghana. Tenants search and filter listings by location and budget, landlords post and manage properties with photo uploads, and admins moderate — built on Firestore, Firebase Auth and Storage with a NestJS backend in progress.',
    image: '/images/ghana-room-finder.svg',
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
    liveLink: 'https://lille-city-church.vercel.app/',
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
    title: 'SPEC-GEN (React.js)',
    description: 'A specification generator tool that helps developers create specifications quickly and easily by providing a user-friendly interface.',
    image: 'images/marketx.png',
    liveLink: 'https://spec-generator.netlify.app/',
    githubLink: 'https://github.com/kaniobed28/spec_generator',
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
          background: (theme) => `linear-gradient(45deg, #fff 30%, ${theme.palette.secondary.main} 90%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '2.5rem', md: '3.5rem' },
        }}
      >
        Featured Projects
      </Typography>
    </motion.div>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ height: '100%' }}
          >
            <ProjectCard project={project} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default MyWorks;
