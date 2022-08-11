import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';

export default function Footer() {
    const [value, setValue] = useState(0);

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                <BottomNavigationAction label="FaceBook" icon={<FacebookIcon />} />
            </BottomNavigation>
        </Box>
    );
};