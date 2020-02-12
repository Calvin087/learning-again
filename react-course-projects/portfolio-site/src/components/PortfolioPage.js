import React from 'react';
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
    <header>
        <h1>My Work</h1>
        <p>Check Out My Stuff</p>
        <Link to='/portfolio/1'>Item One</Link>
        <Link to='/portfolio/2'>Item Two</Link>
    </header>
)

export default PortfolioPage