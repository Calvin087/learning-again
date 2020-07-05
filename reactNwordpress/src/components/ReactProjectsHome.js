import React from "react";
import CardComponent from "./CardComponent";

const ReactProjectsHome = () => (
  <div>
    <section class="hero">
      <div class="hero-body" id="projects">
        <div class="container">
          <h1 class="title">
            <i class="fab fa-react" aria-hidden="true">
              {" "}
            </i>{" "}
            React Projects
          </h1>
          <h2 class="subtitle">
            Using ReactJS I have put together a few simple programs that display
            CRUD operations as well as pulling data from a Firebase API
            database. I wish to continue my path down the reactRoute(er) and
            eventually become the go to guy in the office for all things React.
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns">
        <div class="column">
          <CardComponent />
        </div>
        <div class="column">
          <CardComponent />
        </div>
        <div class="column">
          <CardComponent />
        </div>
        <div class="column">
          <CardComponent />
        </div>
      </div>
    </div>

  </div>
);

export default ReactProjectsHome;
