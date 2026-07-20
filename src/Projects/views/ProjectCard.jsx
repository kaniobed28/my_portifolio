import React from 'react';
import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';
import { tokens } from '../../theme';

const projectShape = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  year: PropTypes.string,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

const Tag = ({ children }) => (
  <Typography
    component="span"
    variant="caption"
    sx={{
      color: 'text.secondary',
      border: `1px solid ${tokens.hairline}`,
      borderRadius: 999,
      px: 1.25,
      py: 0.4,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </Typography>
);

Tag.propTypes = { children: PropTypes.node.isRequired };

const ActionLink = ({ href, icon, children }) => (
  <MuiLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    underline="none"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 0.75,
      color: 'text.primary',
      fontSize: '0.875rem',
      fontWeight: 500,
      pb: 0.5,
      borderBottom: `1px solid ${tokens.hairlineStrong}`,
      transition: 'color 200ms, border-color 200ms',
      '&:hover': { color: tokens.accent, borderColor: tokens.accent },
    }}
  >
    {children}
    {icon}
  </MuiLink>
);

ActionLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node,
  children: PropTypes.node.isRequired,
};

/**
 * Featured row — image on one side, copy on the other, alternating per index
 * so the eye zig-zags down the page.
 */
export const FeaturedProject = ({ project, index }) => {
  const flip = index % 2 === 1;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: { xs: 4, md: 8 },
        alignItems: 'center',
        py: { xs: 6, md: 9 },
        borderTop: `1px solid ${tokens.hairline}`,
      }}
    >
      <Box
        sx={{
          gridColumn: { md: flip ? 2 : 1 },
          gridRow: { md: 1 },
          position: 'relative',
          aspectRatio: '16 / 10',
          bgcolor: tokens.surface,
          border: `1px solid ${tokens.hairline}`,
          borderRadius: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 300ms',
          '&:hover': { borderColor: tokens.hairlineStrong },
          '&:hover img': { transform: 'scale(1.04)' },
        }}
      >
        <Box className="grid-field" sx={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

        {/* Oversized index, bled off the corner as a compositional anchor. */}
        <Typography
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: -28,
            right: 8,
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: '9rem',
            lineHeight: 1,
            color: 'rgba(255, 255, 255, 0.035)',
            userSelect: 'none',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>

        <Box
          component="img"
          src={project.image}
          alt=""
          loading="lazy"
          sx={{
            position: 'relative',
            maxWidth: '58%',
            maxHeight: '62%',
            objectFit: 'contain',
            transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />

        {project.liveLink && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.75}
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              px: 1.25,
              py: 0.5,
              borderRadius: 999,
              bgcolor: 'rgba(9, 9, 11, 0.72)',
              border: `1px solid ${tokens.hairline}`,
              backdropFilter: 'blur(8px)',
            }}
          >
            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#4ADE80' }} />
            <Typography variant="overline" sx={{ fontSize: '0.58rem', color: 'text.secondary' }}>
              Live
            </Typography>
          </Stack>
        )}
      </Box>

      <Box sx={{ gridColumn: { md: flip ? 1 : 2 }, gridRow: { md: 1 } }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="overline" sx={{ color: tokens.accent }}>
            {String(index + 1).padStart(2, '0')}
          </Typography>
          {project.subtitle && (
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              {project.subtitle}
            </Typography>
          )}
        </Stack>

        <Typography
          variant="h3"
          sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, color: 'text.primary', mb: 2 }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', maxWidth: '52ch', mb: 3, fontSize: '0.95rem' }}
        >
          {project.description}
        </Typography>

        {project.tags && (
          <Stack direction="row" flexWrap="wrap" useFlexGap gap={1} sx={{ mb: 3.5 }}>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </Stack>
        )}

        <Stack direction="row" spacing={3} alignItems="center">
          {project.liveLink && (
            <ActionLink href={project.liveLink} icon={<NorthEastIcon sx={{ fontSize: 14 }} />}>
              Visit live site
            </ActionLink>
          )}
          {project.githubLink && (
            <ActionLink href={project.githubLink} icon={<GitHubIcon sx={{ fontSize: 15 }} />}>
              Source
            </ActionLink>
          )}
          {!project.liveLink && !project.githubLink && (
            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
              Private repository
            </Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

FeaturedProject.propTypes = {
  project: PropTypes.shape(projectShape).isRequired,
  index: PropTypes.number.isRequired,
};

/**
 * Archive entry — a compact row. The whole row is the live link when there
 * is one, so the hit target is generous.
 */
export const ArchiveProject = ({ project }) => {
  const links = [
    project.liveLink && { key: 'live', href: project.liveLink, label: 'Live', icon: <NorthEastIcon sx={{ fontSize: 12 }} /> },
    project.githubLink && { key: 'code', href: project.githubLink, label: 'Code', icon: <GitHubIcon sx={{ fontSize: 13 }} /> },
  ].filter(Boolean);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2.5,
        border: `1px solid ${tokens.hairline}`,
        borderRadius: 1,
        height: '100%',
        overflow: 'hidden',
        transition: 'border-color 250ms, transform 250ms cubic-bezier(0.22, 1, 0.36, 1)',
        '&:hover': {
          borderColor: tokens.hairlineStrong,
          transform: 'translateY(-3px)',
          '& .archive-sheen': { opacity: 1 },
        },
        '&:focus-within': { borderColor: tokens.accent },
      }}
    >
      {/* Hover sheen — sits behind content, never intercepts clicks. */}
      <Box
        className="archive-sheen"
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 350ms',
          background: `radial-gradient(90% 70% at 0% 0%, ${tokens.accentSoft} 0%, transparent 70%)`,
        }}
      />

      <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ position: 'relative' }}>
        <Box
          sx={{
            flexShrink: 0,
            width: 44,
            height: 44,
            borderRadius: 1,
            bgcolor: tokens.surface,
            border: `1px solid ${tokens.hairline}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt=""
            loading="lazy"
            sx={{ maxWidth: '62%', maxHeight: '62%', objectFit: 'contain' }}
          />
        </Box>

        <Box sx={{ minWidth: 0, flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontSize: '1rem', color: 'text.primary', mb: 0.25 }}>
            {project.title}
          </Typography>
          {project.subtitle && (
            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
              {project.subtitle}
            </Typography>
          )}
        </Box>
      </Stack>

      <Typography
        variant="body2"
        sx={{
          position: 'relative',
          color: 'text.secondary',
          fontSize: '0.85rem',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {project.description}
      </Typography>

      {project.tags && (
        <Typography
          variant="caption"
          sx={{ position: 'relative', color: 'text.secondary', opacity: 0.6, mt: -0.5 }}
        >
          {project.tags.join(' · ')}
        </Typography>
      )}

      {/* Every available link gets its own affordance. */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'relative',
          mt: 'auto',
          pt: 1.5,
          borderTop: `1px solid ${tokens.hairline}`,
        }}
      >
        {links.length > 0 ? (
          links.map((link) => (
            <MuiLink
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              aria-label={`${project.title} — ${link.label}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                px: 1.25,
                py: 0.5,
                borderRadius: 999,
                border: `1px solid ${tokens.hairline}`,
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 200ms, border-color 200ms, background-color 200ms',
                '&:hover': {
                  color: tokens.accent,
                  borderColor: tokens.accent,
                  bgcolor: tokens.accentSoft,
                },
              }}
            >
              {link.label}
              {link.icon}
            </MuiLink>
          ))
        ) : (
          <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.5 }}>
            Private repository
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

ArchiveProject.propTypes = {
  project: PropTypes.shape(projectShape).isRequired,
};

export default FeaturedProject;
