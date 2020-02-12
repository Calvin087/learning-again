import React from 'react';

const Portfolio = (props) => (
    <header>
        <h1>A Thing I've Done</h1>
        <p>This page is for the Item of {props.match.params.id}</p>
    </header>
)

export default Portfolio