import React from "react";
import { Breadcrumbs, Link } from "@mui/material";

export default function Nav() {
    return (
        <Breadcrumbs>
            <Link
                underline="hover"
                color="inherit"                
            >
                About Me
            </Link>

            <Link
                underline="hover"
                color="inherit"                
            >
                Portfolio
            </Link>

            <Link
                underline="hover"
                color="inherit"                
            >
                Contact
            </Link>

            <Link
                underline="hover"
                color="inherit"                
            >
                Resume
            </Link>
        </Breadcrumbs>
    );
};