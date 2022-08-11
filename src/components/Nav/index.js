import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Nav() {
    const [content, setContent] = useState("About Me");

    const handleContent = (event, newContent) => {
        setContent(newContent);
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