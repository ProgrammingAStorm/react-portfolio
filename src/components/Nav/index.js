import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Nav(props) {
    const { content, setContent } = props;

    const handleContent = (event, newContent) => {
        setContent(newContent);
    };

    const matches = useMediaQuery('(min-width:374px)');

    return (
        <ToggleButtonGroup
            size={`${ matches ? 'medium' : 'small' }`}
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