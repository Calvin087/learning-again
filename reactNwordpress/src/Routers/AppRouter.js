import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TheBlogPost from "../components/TheBlogPost";
import Blog from "../components/Blog";
import BlogPost from "../components/BlogPost";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={TheBlogPost} exact={true} />
      <Route path="/blog" component={Blog} exact={true} />
      <Route path="/blog/:slug" component={BlogPost} />
    </Switch>
  );
}

export default AppRouter;
