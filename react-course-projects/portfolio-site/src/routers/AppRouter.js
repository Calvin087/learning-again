import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
               
                <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter