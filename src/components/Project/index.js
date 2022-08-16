import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, CardContent, CardHeader, CardMedia, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Project(props) {
    const {
        title,
        link,
        image,
        deploy
    } = props;

    return (
        <Grid2
            xs={12}
            sm={6}
            md={4}
        >
            <Card>
                <CardHeader
                    title={title}
                    action={
                        <div>
                            <Tooltip title='Repo'>
                                <IconButton
                                    component="a"
                                    href={link}
                                    target="_blank"
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title='Deployment'>
                                <IconButton
                                    component="a"
                                    href={deploy}
                                    target="_blank"
                                >
                                    <OpenInNewIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    }
                />

                <CardContent>
                    <CardMedia component="img" src={image} alt={title} ></CardMedia>
                </CardContent>
            </Card>
        </Grid2>
    );
};