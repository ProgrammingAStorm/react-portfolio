import { Card, CardMedia, Typography } from '@mui/material';
import React from 'react';
import me from '../../assets/images/me.jpg'

export default function AboutMe() {
    return (
        <section>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    image={me}
                />
            </Card>

            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel facilisis volutpat est velit. Arcu cursus vitae congue mauris rhoncus aenean vel. Ornare massa eget egestas purus viverra accumsan in nisl. Blandit aliquam etiam erat velit. Nulla posuere sollicitudin aliquam ultrices. Arcu dui vivamus arcu felis bibendum ut. Vitae justo eget magna fermentum iaculis eu non. Sed felis eget velit aliquet sagittis. Ultricies tristique nulla aliquet enim. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Auctor elit sed vulputate mi sit amet mauris commodo quis. Vitae nunc sed velit dignissim. Diam vulputate ut pharetra sit amet aliquam id diam.
            </Typography>
        </section>
    );
};