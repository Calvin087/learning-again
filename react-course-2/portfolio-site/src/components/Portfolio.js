import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div>
            <h1>
                My Work
            </h1>
            <p>Check out the following things i've done:</p>
            <Link to='/portfolio/one'>Item one</Link>
            <Link to='/portfolio/two'>Item two</Link>
            <Link to='/portfolio/three'>Item three</Link>
        </div>
    )
}

export default Portfolio