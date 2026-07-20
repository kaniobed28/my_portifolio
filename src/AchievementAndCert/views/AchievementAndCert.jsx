import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Dialog,
  IconButton,
  ButtonBase,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionHeading from '../../components/SectionHeading';
import { tokens } from '../../theme';

const achievements = [
  {
    title: 'National Science & Math Quiz — Nationals',
    description: 'Represented my school at the National Science and Mathematics Quiz in Ghana.',
    year: '2020',
    image: '/images/nsmq.jpg',
  },
  {
    title: 'NSMQ Regional Qualifiers',
    description: 'Took my school to the regional level and won it for the first time.',
    year: '2020',
    image: '/images/regional.png',
  },
  {
    title: 'Civic Education Club President',
    description: 'Led a student civic education club promoting societal awareness.',
    year: '2020',
    image: '/images/cec.png',
  },
  {
    title: 'SRC President',
    description: 'Elected student representative for the 2019–2020 academic year.',
    year: '2019',
    image: '/images/testimonial.png',
  },
];

const AchievementRow = ({ item, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
  >
    <ButtonBase
      onClick={onOpen}
      disableRipple
      sx={{
        width: '100%',
        textAlign: 'left',
        display: 'grid',
        gridTemplateColumns: { xs: 'auto 1fr auto', md: '80px auto 1fr auto' },
        alignItems: 'center',
        gap: { xs: 2, md: 4 },
        py: { xs: 3, md: 4 },
        borderTop: `1px solid ${tokens.hairline}`,
        transition: 'background-color 250ms',
        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.02)' },
        '&:hover .ach-title': { color: tokens.accent },
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: 'text.secondary', display: { xs: 'none', md: 'block' } }}
      >
        {item.year}
      </Typography>

      <Box
        sx={{
          width: { xs: 48, md: 64 },
          height: { xs: 48, md: 64 },
          flexShrink: 0,
          bgcolor: tokens.surface,
          border: `1px solid ${tokens.hairline}`,
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt=""
          loading="lazy"
          sx={{ maxWidth: '78%', maxHeight: '78%', objectFit: 'contain' }}
        />
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          className="ach-title"
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', md: '1.15rem' },
            color: 'text.primary',
            transition: 'color 250ms',
            mb: 0.5,
          }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
          {item.description}
        </Typography>
        <Typography
          variant="overline"
          sx={{ color: 'text.secondary', mt: 1, display: { xs: 'block', md: 'none' } }}
        >
          {item.year}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.6, whiteSpace: 'nowrap' }}>
        View
      </Typography>
    </ButtonBase>
  </motion.div>
);

AchievementRow.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

const AchievementsAndCertificates = () => {
  const [active, setActive] = useState(null);

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 16 }, bgcolor: tokens.surface }}>
      <Container maxWidth="lg">
        <SectionHeading
          label="Beyond the code"
          title="Leading, competing, representing."
          meta={`${String(achievements.length).padStart(2, '0')} entries`}
        />

        <Box sx={{ borderBottom: `1px solid ${tokens.hairline}` }}>
          {achievements.map((item, index) => (
            <AchievementRow
              key={item.title}
              item={item}
              index={index}
              onOpen={() => setActive(item)}
            />
          ))}
        </Box>
      </Container>

      <Dialog
        open={Boolean(active)}
        onClose={() => setActive(null)}
        maxWidth="md"
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
        {active && (
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
              <Box>
                <Typography variant="overline" sx={{ color: tokens.accent }}>
                  {active.year}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mt: 1 }}>
                  {active.title}
                </Typography>
              </Box>
              <IconButton aria-label="Close" onClick={() => setActive(null)} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </Stack>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: '60ch' }}>
              {active.description}
            </Typography>

            <Box
              sx={{
                bgcolor: tokens.ink,
                border: `1px solid ${tokens.hairline}`,
                borderRadius: 1,
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                maxHeight: '60vh',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={active.image}
                alt={active.title}
                sx={{ maxWidth: '100%', maxHeight: '56vh', objectFit: 'contain' }}
              />
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default AchievementsAndCertificates;
