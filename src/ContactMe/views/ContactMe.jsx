import React from 'react';
import { Box, Typography, Grid, Button, Link, Container, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ContactMe = () => {
  return (
    <Box 
      sx={{
        py: 10, 
        backgroundColor: '#f4f6f9', 
        backgroundImage: 'url(/background-image.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Typography 
          variant="h3" 
          sx={{
            fontWeight: '700', 
            textAlign: 'center', 
            mb: 6, 
            color: '#333', 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            fontSize: '2.5rem',
          }}
        >
          Get In Touch
        </Typography>

        {/* Contact Information Section */}
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              sx={{
                fontWeight: '600', 
                mb: 3, 
                color: '#444', 
                fontSize: '1.25rem', 
                textTransform: 'uppercase'
              }}
            >
              Reach Me At:
            </Typography>

            {/* Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PhoneIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
              <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem' }}>
                +33 7 53 38 41 84
              </Typography>
            </Box>

            {/* Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <EmailIcon sx={{ mr: 2, color: 'primary.main', fontSize: '2rem' }} />
              <Typography variant="body1" sx={{ color: '#555', fontSize: '1.2rem' }}>
                kaniobed28@gmail.com
              </Typography>
            </Box>

            <Divider sx={{ my: 5, borderColor: '#ddd' }} />

            <Typography 
              variant="h5" 
              sx={{
                fontWeight: '600', 
                mb: 3, 
                color: '#444', 
                fontSize: '1.25rem', 
                textTransform: 'uppercase'
              }}
            >
              Follow Me:
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Link href="https://github.com/kaniobed28" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  startIcon={<GitHubIcon />} 
                  sx={{ fontSize: '1.1rem', padding: '12px 0' }}
                >
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/kani-obed" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  startIcon={<LinkedInIcon />} 
                  sx={{ fontSize: '1.1rem', padding: '12px 0' }}
                >
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://wa.me/233593626857" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="contained" 
                  color="success" 
                  fullWidth 
                  startIcon={<WhatsAppIcon />} 
                  sx={{ fontSize: '1.1rem', padding: '12px 0' }}
                >
                  WhatsApp
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@kaniobed28" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="contained" 
                  color="error" 
                  fullWidth 
                  startIcon={<YouTubeIcon />} 
                  sx={{ fontSize: '1.1rem', padding: '12px 0' }}
                >
                  YouTube
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;