import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function Nav(props) {
    const { content, setContent } = props;

    const handleContent = (event, newContent) => {
        setContent(newContent);
    };

    return (
        <ToggleButtonGroup
            value={content}
            exclusive
            onChange={handleContent}
            style={{ backgroundColor: "#FFFFFF" }}
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