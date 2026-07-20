import React from 'react';
import { Box, Container, Typography, Stack, ButtonBase } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { tokens } from '../theme';

const Footer = () => (
  <Box
    component="footer"
    sx={{ bgcolor: tokens.ink, borderTop: `1px solid ${tokens.hairline}`, py: 5 }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
      >
        <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
          © {new Date().getFullYear()} Obed Kani — built with React & MUI
        </Typography>

        <ButtonBase
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          disableRipple
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'text.secondary',
            transition: 'color 200ms',
            '&:hover': { color: 'text.primary' },
            '&:hover .footer-arrow': { transform: 'translateY(-3px)' },
          }}
        >
          <Typography variant="overline" sx={{ fontSize: '0.65rem' }}>
            Back to top
          </Typography>
          <ArrowUpwardIcon
            className="footer-arrow"
            sx={{ fontSize: 14, transition: 'transform 250ms' }}
          />
        </ButtonBase>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
