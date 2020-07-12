import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import TheProjectCardR from "../components/TheProjectCardR";
import TheBlogList from "../components/TheBlogList";
import BlogPost from "../components/BlogPost";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={TheProjectCardR} exact={true} />
      <Route path="/blog" component={TheBlogList} exact={true} />
      <Route path="/blog/:slug" component={BlogPost} />
    </Switch>
  );
}

export default AppRouter;
