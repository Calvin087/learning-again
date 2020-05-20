import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import PortfolioItem from '../components/PortfolioItem'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact={true} />
                <Route path='/portfolio/:id' component={PortfolioItem} exact={true}/>
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter