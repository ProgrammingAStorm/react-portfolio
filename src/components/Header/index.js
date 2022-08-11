import React from "react"
import Nav from '../Nav';

export default function Header(props) {
    const { content, setContent } = props;

    return (
        <header>
            <h1>Mark Pavel</h1>

            <Nav 
                content={content}
                setContent={setContent}
            />
        </header>
    );
};