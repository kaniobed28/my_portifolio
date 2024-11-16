import React from 'react';
import {
    Dialog,
    DialogContent,
    Typography,
    Box,
    Divider,
    Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const AboutMeDialog = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogContent
                sx={{
                    p: 4,
                    background: 'linear-gradient(to bottom right, #4caf50, #81c784)',
                    color: '#fff',
                    borderRadius: '8px',
                    textAlign: 'center',
                }}
            >
                {/* Avatar Section */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        mb: 3,
                    }}
                >
                    <Avatar
                        alt="Kani Obed"
                        src="/images/avatar.png"
                        sx={{
                            width: 100,
                            height: 100,
                            mb: 2,
                            boxShadow: 3,
                            border: '3px solid #fff',
                        }}
                    />
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        sx={{ mb: 1 }}
                    >
                        Hi, I'm Kani Obed
                    </Typography>
                    <Typography variant="body2" fontStyle="italic">
                        Your versatile software developer
                    </Typography>
                </Box>

                {/* Content Section */}
                <Divider sx={{ mb: 3, borderColor: 'rgba(255, 255, 255, 0.5)' }} />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Typography variant="body1" paragraph>
                        I am a passionate developer with expertise in:
                    </Typography>
                </motion.div>
                {[
                    { title: 'Web Development', details: 'React, Angular, and Material-UI' },
                    {
                        title: 'Mobile Development',
                        details: 'Flutter with Firebase and GetX/MobX',
                    },
                    {
                        title: 'Machine Learning',
                        details: 'Malware detection using PyTorch and MALEVIS dataset',
                    },
                    {
                        title: 'Computer Vision',
                        details: 'Solving real-world challenges with CV solutions',
                    },
                    { title: 'Personal Interests', details: 'Playing keyboard and drums' },
                ].map((item, index) => (
                    <Typography
                        key={index}
                        variant="body2"
                        paragraph
                        sx={{ ml: 2, fontSize: '1rem', lineHeight: 1.7 }}
                        component={motion.div}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                        <strong>{item.title}:</strong> {item.details}
                    </Typography>
                ))}

                <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.5)' }} />

                {/* Contact Information */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Contact Me
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                            mb: 1,
                        }}
                    >
                        <EmailIcon />
                        <Typography
                            variant="body2"
                            sx={{ fontSize: '1rem', fontStyle: 'italic' }}
                        >
                            <strong>Email:</strong> kaniobed28@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <PhoneIcon />
                        <Typography
                            variant="body2"
                            sx={{ fontSize: '1rem', fontStyle: 'italic' }}
                        >
                            <strong>Phone:</strong> +33 753384184
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AboutMeDialog;
