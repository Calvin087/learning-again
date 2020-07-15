import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import AppRouter from "./Routers/AppRouter";
import WordpressContextProvidor from "./contexts/WordpressContext";
import TheFooter from "./components/TheFooter";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WordpressContextProvidor>
        <AppRouter />
        <TheFooter />
      </WordpressContextProvidor>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
