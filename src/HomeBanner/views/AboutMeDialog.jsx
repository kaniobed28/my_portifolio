import React from 'react';
import { Dialog, Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { tokens } from '../../theme';

const capabilities = [
  {
    title: 'Frontend',
    details: 'React and Next.js, Material UI and Tailwind, with an eye for typography and motion that stays out of the way.',
  },
  {
    title: 'Mobile',
    details: 'Flutter apps shipped to production — Firebase and Supabase auth, offline-tolerant state, WebRTC voice calling, NFC and QR flows, Paystack checkout and signed release builds.',
  },
  {
    title: 'Backend',
    details: 'Laravel, NestJS, Django and Flask. REST APIs with tenancy, API keys and webhooks; background jobs and queues.',
  },
  {
    title: 'Data & infrastructure',
    details: 'PostgreSQL and PostGIS, Redis caching and queues, Firebase Realtime Database and Firestore. Deployed on Render, Vercel and Supabase.',
  },
  {
    title: 'Machine learning',
    details: 'Model development and data preprocessing with PyTorch, TensorFlow and Pandas; computer vision with OpenCV for image processing and object detection.',
  },
  {
    title: 'Away from the keyboard',
    details: 'Keyboard and drums.',
  },
];

const AboutMeDialog = ({ open, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="sm"
    fullWidth
    PaperProps={{
      sx: {
        bgcolor: tokens.raised,
        border: `1px solid ${tokens.hairline}`,
        backgroundImage: 'none',
        borderRadius: 1,
      },
    }}
  >
    <Box sx={{ p: { xs: 3, md: 5 } }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
        <Box>
          <Typography variant="overline" sx={{ color: tokens.accent }}>
            About
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1.5 }}>
            Obed Kani
          </Typography>
        </Box>
        <IconButton aria-label="Close" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        A software engineer who prefers owning a product end to end — the app,
        the API, the data model and the deploy — rather than a single slice of it.
      </Typography>

      <Divider sx={{ borderColor: tokens.hairline, mb: 1 }} />

      {capabilities.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '150px 1fr' },
            gap: { xs: 0.75, sm: 3 },
            py: 2.5,
            borderBottom: `1px solid ${tokens.hairline}`,
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary', pt: 0.4 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.9rem' }}>
            {item.details}
          </Typography>
        </Box>
      ))}
    </Box>
  </Dialog>
);

AboutMeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AboutMeDialog;
