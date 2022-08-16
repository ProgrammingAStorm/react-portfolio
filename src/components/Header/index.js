import { Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react"
import Nav from '../Nav';

export default function Header(props) {
    const { content, setContent } = props;

    return (
        <Grid2
            container
            sx={[
                { backgroundColor: '#1956FF' },
                { padding: '1rem' }
            ]}
        >
            <Grid2
                xs={12}
                sm={6}
                sx={[
                    { display: 'flex' },
                    { alignItems: 'center' },
                    { justifyContent: 'space-around' }
                ]}
            >
                <Paper
                    elevation={2}
                    component="h1"
                    style={{
                        padding: '1rem',
                        backgroundColor: '#FF1053'
                    }}
                >
                    Mark Pavel
                </Paper>
            </Grid2>

            <Grid2
                xs={12}
                sm={6}
                sx={[
                    { display: 'flex' },
                    { alignItems: 'center' },
                    { justifyContent: 'space-around' }
                ]}
            >
                <Nav
                    content={content}
                    setContent={setContent}
                />
            </Grid2>
        </Grid2>
    );
};