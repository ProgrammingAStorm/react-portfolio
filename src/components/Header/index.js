import { Box } from "@mui/material";
import React from "react"
import Nav from '../Nav';

export default function Header(props) {
    const { content, setContent } = props;

    return (
        <Box sx={[
            { backgroundColor: '#1956FF' },
            { display: 'flex' },
            { alignItems: 'center' },
            { justifyContent: 'space-around' }
        ]}>
            <h1 style={{ padding: '1rem', backgroundColor: '#FF1053' }} >Mark Pavel</h1>

            <Nav 
                content={content}
                setContent={setContent}
            />
        </Box>
    );
};