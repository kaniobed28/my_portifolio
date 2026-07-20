import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Drawer,
  Stack,
  Typography,
  ButtonBase,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { tokens } from '../theme';
import useActiveSection from '../hooks/useActiveSection';

const navItems = [
  { label: 'Work', section: 'projects' },
  { label: 'Achievements', section: 'achievements' },
  { label: 'Contact', section: 'contact' },
];

// Module-level constant: a new array each render would restart the observer.
const SECTION_IDS = ['home', 'projects', 'achievements', 'contact'];

const Navbar = ({ onScrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    onScrollToSection(section);
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(9, 9, 11, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(16px)' : 'none',
          borderBottom: `1px solid ${scrolled ? tokens.hairline : 'transparent'}`,
          transition: 'background-color 300ms, border-color 300ms, backdrop-filter 300ms',
        }}
      >
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 76 }, px: { xs: 2, sm: 3 } }}>
            <ButtonBase
              onClick={() => handleNavClick('home')}
              disableRipple
              sx={{ borderRadius: 1, px: 0.5 }}
              aria-label="Back to top"
            >
              <Typography
                sx={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: '1.35rem',
                  color: 'text.primary',
                  lineHeight: 1,
                }}
              >
                Obed Kani
              </Typography>
            </ButtonBase>

            <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.section;
                return (
                  <ButtonBase
                    key={item.label}
                    onClick={() => handleNavClick(item.section)}
                    disableRipple
                    aria-current={isActive ? 'true' : undefined}
                    sx={{
                      position: 'relative',
                      py: 0.5,
                      color: isActive ? 'text.primary' : 'text.secondary',
                      transition: 'color 250ms',
                      '&:hover': { color: 'text.primary' },
                      '&:hover .nav-underline': { transform: 'scaleX(1)' },
                    }}
                  >
                    <Typography variant="overline" sx={{ fontSize: '0.68rem' }}>
                      {item.label}
                    </Typography>
                    <Box
                      className="nav-underline"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '1px',
                        bgcolor: tokens.accent,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </ButtonBase>
                );
              })}
            </Stack>

            <IconButton
              aria-label="Open menu"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { sm: 'none' }, color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: '78%',
            maxWidth: 320,
            bgcolor: tokens.surface,
            borderLeft: `1px solid ${tokens.hairline}`,
            backgroundImage: 'none',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton aria-label="Close menu" onClick={() => setMobileOpen(false)} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Stack sx={{ px: 3, pt: 2 }}>
          {navItems.map((item, i) => (
            <ButtonBase
              key={item.label}
              onClick={() => handleNavClick(item.section)}
              disableRipple
              sx={{
                justifyContent: 'space-between',
                py: 2.5,
                borderTop: i === 0 ? `1px solid ${tokens.hairline}` : 'none',
                borderBottom: `1px solid ${tokens.hairline}`,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: '1.75rem',
                  color: 'text.primary',
                }}
              >
                {item.label}
              </Typography>
              <Typography variant="overline" sx={{ color: tokens.accent }}>
                {String(i + 1).padStart(2, '0')}
              </Typography>
            </ButtonBase>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
