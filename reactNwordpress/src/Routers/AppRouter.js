import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from '../components/HomePage'
import Blog from '../components/Blog'
import BlogPost from '../components/BlogPost'

function AppRouter() {
    return (
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/blog' component={Blog} />
                <Route path='/post/:slug' component={BlogPost} />
            </Switch>
    )
}

export default AppRouter