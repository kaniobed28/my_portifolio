import React from 'react';
import { Box, Container, Typography, Stack, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import PropTypes from 'prop-types';
import { tokens } from '../../theme';

const channels = [
  { label: 'Email', value: 'kaniobed28@gmail.com', href: 'mailto:kaniobed28@gmail.com' },
  { label: 'Phone', value: '+33 7 53 38 41 84', href: 'tel:+33753384184' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/kaniobed28', icon: <GitHubIcon sx={{ fontSize: 18 }} /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kani-obed', icon: <LinkedInIcon sx={{ fontSize: 18 }} /> },
  { label: 'WhatsApp', href: 'https://wa.me/233593626857', icon: <WhatsAppIcon sx={{ fontSize: 18 }} /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@kaniobed28', icon: <YouTubeIcon sx={{ fontSize: 18 }} /> },
];

const ChannelRow = ({ channel }) => (
  <MuiLink
    href={channel.href}
    underline="none"
    sx={{
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 2,
      py: 3,
      borderTop: `1px solid ${tokens.hairline}`,
      transition: 'border-color 250ms',
      '&:hover': { borderColor: tokens.hairlineStrong },
      '&:hover .channel-value': { color: tokens.accent },
    }}
  >
    <Typography variant="overline" sx={{ color: 'text.secondary', flexShrink: 0 }}>
      {channel.label}
    </Typography>
    <Typography
      className="channel-value"
      sx={{
        fontFamily: '"Instrument Serif", Georgia, serif',
        fontSize: { xs: '1.35rem', md: '1.9rem' },
        color: 'text.primary',
        transition: 'color 250ms',
        textAlign: 'right',
        wordBreak: 'break-word',
      }}
    >
      {channel.value}
    </Typography>
  </MuiLink>
);

ChannelRow.propTypes = { channel: PropTypes.object.isRequired };

const ContactMe = () => (
  <Box component="section" sx={{ position: 'relative', py: { xs: 10, md: 16 }, bgcolor: tokens.ink, overflow: 'hidden' }}>
    <Box
      className="accent-bloom"
      sx={{ position: 'absolute', inset: 0, transform: 'scaleX(-1)', opacity: 0.8 }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 3, mb: 3 }}>
        <Typography variant="overline" sx={{ color: tokens.accent, flexShrink: 0 }}>
          Contact
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', bgcolor: tokens.hairline }} />
      </Box>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2.75rem', md: '4.5rem' }, color: 'text.primary', maxWidth: '14ch', mb: 3 }}
        >
          Let’s build something.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '46ch', mb: { xs: 6, md: 8 } }}>
          Open to engineering roles and freelance work. The fastest way to reach
          me is email — I answer everything.
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
          gap: { xs: 6, md: 10 },
          alignItems: 'start',
        }}
      >
        <Box>
          {channels.map((channel) => (
            <ChannelRow key={channel.label} channel={channel} />
          ))}
        </Box>

        <Box>
          <Typography variant="overline" sx={{ color: 'text.secondary', display: 'block', mb: 2.5 }}>
            Elsewhere
          </Typography>
          <Stack spacing={0}>
            {socials.map((s, i) => (
              <MuiLink
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  py: 1.75,
                  color: 'text.secondary',
                  borderTop: i === 0 ? `1px solid ${tokens.hairline}` : 'none',
                  borderBottom: `1px solid ${tokens.hairline}`,
                  transition: 'color 200ms, padding-left 200ms',
                  '&:hover': { color: 'text.primary', pl: 1 },
                  '&:hover .social-arrow': { opacity: 1 },
                }}
              >
                {s.icon}
                <Typography sx={{ fontSize: '0.95rem', flexGrow: 1 }}>{s.label}</Typography>
                <NorthEastIcon
                  className="social-arrow"
                  sx={{ fontSize: 13, opacity: 0, transition: 'opacity 200ms', color: tokens.accent }}
                />
              </MuiLink>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
);

export default ContactMe;
