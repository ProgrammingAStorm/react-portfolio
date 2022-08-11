import React from "react";
import {
    List,
    ListSubheader,
    Typography,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function Resume() {
    return (
        <section>
            <h2>
                Download my&nbsp;
                <a href={require('../../assets/files/Resume.pdf')}>
                    resume.
                </a>
            </h2>

            <List
                subheader={
                    <ListSubheader>
                        <Typography>
                            Front-End Proficiencies
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        React
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Bulma
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Bootstrap
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Handlebars
                    </ListItemText>
                </ListItemButton>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        <Typography>
                            Back-End Proficiencies
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Node.js
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Express
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        MySQL
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        MongoDB
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Sequelize
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Mongoose
                    </ListItemText>
                </ListItemButton>
            </List>

            <List
                subheader={
                    <ListSubheader>
                        <Typography>
                            Misc. Proficiencies
                        </Typography>
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        Inquirer
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        MVC
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        PWA
                    </ListItemText>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <FiberManualRecordIcon />
                    </ListItemIcon>

                    <ListItemText>
                        jQuery
                    </ListItemText>
                </ListItemButton>
            </List>
        </section>
    );
};