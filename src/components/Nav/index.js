import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Nav(props) {
    const { content, setContent } = props;

    const handleContent = (event, newContent) => {
        setContent(newContent);
        console.log(newContent)
    };

    return (
        <ToggleButtonGroup
            value={content}
            exclusive
            onChange={handleContent}
        >
            <ToggleButton value="About Me">
                About Me
            </ToggleButton>

            <ToggleButton value="Portfolio">
                Portfolio
            </ToggleButton>

            <ToggleButton value="Contact">
                Contact
            </ToggleButton>

            <ToggleButton value="Resume">
                Resume
            </ToggleButton>
        </ToggleButtonGroup>
    );
};