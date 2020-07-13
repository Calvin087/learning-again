import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TheHeaderHero from "../components/TheHeaderHero";
import TheBlogPost from "../components/TheBlogPost";
import TheBlogList from "../components/TheBlogList";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={TheHeaderHero} exact={true} />
      <Route path="/blog" component={TheBlogList} exact={true} />
      <Route path="/blog/:slug" component={TheBlogPost} />
    </Switch>
  );
}

export default AppRouter;
