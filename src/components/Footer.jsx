import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                py: 6,
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            Obed KANI
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            © {new Date().getFullYear()} All rights reserved.
                        </Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <IconButton href="https://www.linkedin.com/in/kani-obed" target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton href="https://github.com/kaniobed28" target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                            <GitHub />
                        </IconButton>
                        <IconButton href="https://wa.me/+233593626857" target="_blank" size="small" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                            <WhatsApp />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
