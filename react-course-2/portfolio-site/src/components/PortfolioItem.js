import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const PortfolioItem = (props) => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            <p>A page for the item with ID of {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioItem