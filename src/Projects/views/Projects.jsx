import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from '../../components/SectionHeading';
import { FeaturedProject, ArchiveProject } from './ProjectCard';
import projects from '../projectData';
import { tokens } from '../../theme';

const featured = projects.filter((p) => p.featured);
const archive = projects.filter((p) => !p.featured);

const MyWorks = () => (
  <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: tokens.ink }}>
    <Container maxWidth="lg">
      <SectionHeading
        label="Selected work"
        title="Platforms I have taken from empty repo to production."
        meta={`01 — ${String(projects.length).padStart(2, '0')}`}
      />

      {featured.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <FeaturedProject project={project} index={index} />
        </motion.div>
      ))}

      {/* Archive */}
      <Box sx={{ mt: { xs: 10, md: 16 } }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 3, mb: 4 }}>
          <Typography variant="overline" sx={{ color: 'text.secondary', flexShrink: 0 }}>
            Archive
          </Typography>
          <Box sx={{ flexGrow: 1, height: '1px', bgcolor: tokens.hairline }} />
          <Typography variant="overline" sx={{ color: 'text.secondary', flexShrink: 0 }}>
            {String(archive.length).padStart(2, '0')} projects
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {archive.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ height: '100%' }}
              >
                <ArchiveProject project={project} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

export default MyWorks;
