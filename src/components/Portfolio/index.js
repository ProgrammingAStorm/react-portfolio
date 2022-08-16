import React from "react";
import Project from "../Project";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Portfolio() {
    const projects = [
        {
            title: 'Rippit',
            link: 'https://github.com/ProgrammingAStorm/rippit',
            image: require('../../assets/images/rippit.jpg'),
            deploy: 'https://ancient-retreat-86124.herokuapp.com'
        },
        {
            title: 'Budget Tracker',
            link: 'https://github.com/ProgrammingAStorm/budget-tracker',
            image: require('../../assets/images/budget-tracker.jpg'),
            deploy: 'https://mysterious-depths-45527.herokuapp.com/index.html'
        },
        {
            title: 'Express Note Taker',
            link: 'https://github.com/ProgrammingAStorm/Express-Note-Taker',
            image: require('../../assets/images/express-note-taker.jpg'),
            deploy: 'https://thawing-oasis-83429.herokuapp.com/notes'
        },
        {
            title: 'Pizza Hunt',
            link: 'https://github.com/ProgrammingAStorm/pizza-hunt',
            image: require('../../assets/images/pizza-hunt.jpg'),
            deploy: 'https://boiling-wildwood-23933.herokuapp.com/'
        },
        {
            title: 'Run Buddy',
            link: 'https://programmingastorm.github.io/RunBuddy/',
            image: require('../../assets/images/run-buddy.jpg'),
            deploy: 'https://github.com/ProgrammingAStorm/RunBuddy'
        },
        {
            title: 'TaskmasterPro',
            link: 'https://github.com/ProgrammingAStorm/TaskmasterPro',
            image: require('../../assets/images/taskmaster-pro.jpg'),
            deploy: 'https://programmingastorm.github.io/TaskmasterPro/'
        },
    ]

    return (
        <section>
            <Grid2 container spacing={3}>
                {projects.map((project, i) => (
                    <Project
                        title={project.title}
                        link={project.link}
                        image={project.image}
                        deploy={project.deploy}
                        key={project.title}
                    />
                ))}
            </Grid2>
        </section>
    );
};