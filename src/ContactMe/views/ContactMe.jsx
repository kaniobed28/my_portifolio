import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion } from 'framer-motion';

const ContactMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 230, 118, 0.05) 100%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Title with animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              textAlign: 'center',
              mb: 8,
              background: (theme) => `linear-gradient(45deg, #fff 30%, ${theme.palette.primary.main} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Get In Touch
          </Typography>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              p: { xs: 4, md: 8 },
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} md={6}>
                {/* Contact Details */}
                <motion.div variants={itemVariants}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Reach Me At:
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <PhoneIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem' }}>
                      +33 7 53 38 41 84
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmailIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.2rem' }}>
                      kaniobed28@gmail.com
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div variants={itemVariants}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 4, color: 'text.primary', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Follow Me:
                  </Typography>
                </motion.div>

                <motion.div variants={containerVariants}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <motion.div variants={itemVariants}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<GitHubIcon />}
                        href="https://github.com/kaniobed28"
                        target="_blank"
                        sx={{ py: 1.5, justifyContent: 'flex-start', px: 4, borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(0,230,118,0.1)' } }}
                      >
                        GitHub
                      </Button>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<LinkedInIcon />}
                        href="https://www.linkedin.com/in/kani-obed"
                        target="_blank"
                        sx={{ py: 1.5, justifyContent: 'flex-start', px: 4, borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary', '&:hover': { borderColor: '#0077b5', bgcolor: 'rgba(0,119,181,0.1)' } }}
                      >
                        LinkedIn
                      </Button>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<WhatsAppIcon />}
                        href="https://wa.me/233593626857"
                        target="_blank"
                        sx={{ py: 1.5, justifyContent: 'flex-start', px: 4, borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary', '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37,211,102,0.1)' } }}
                      >
                        WhatsApp
                      </Button>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<YouTubeIcon />}
                        href="https://www.youtube.com/@kaniobed28"
                        target="_blank"
                        sx={{ py: 1.5, justifyContent: 'flex-start', px: 4, borderColor: 'rgba(255,255,255,0.2)', color: 'text.primary', '&:hover': { borderColor: '#FF0000', bgcolor: 'rgba(255,0,0,0.1)' } }}
                      >
                        YouTube
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactMe;
