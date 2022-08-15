import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';

export default function Footer() {
    const [value, setValue] = useState(0);

    return (
        <Box
            sx={[
                { display: 'flex' },
                { alignItems: 'center' },
                { justifyContent: 'space-around' },
                { height: '25%' }
            ]}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={[
                    { backgroundColor: '#A69CAC' },
                    { padding: '0.5rem' }
                ]}
            >
                <BottomNavigationAction href='https://github.com/ProgrammingAStorm' target='_blank' component='a' label='GitHub' icon={<GitHubIcon />} />
                <BottomNavigationAction href='https://www.linkedin.com/in/mark-pavel-744297202/' target='_blank' component='a' label='LinkedIn' icon={<LinkedInIcon />} />
                <BottomNavigationAction href='https://www.facebook.com/mark.pavel.528' target='_blank' component='a' label='FaceBook' icon={<FacebookIcon />} />
            </BottomNavigation>
        </Box>
    );
};