import React from "react";
import CardComponent from "./CardComponent";

const WordpressProjectsHome = () => (
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <i class="fab fa-react" aria-hidden="true">
              {" "}
            </i>{" "}
            Wordpress Clients
          </h1>
          <h2 class="subtitle">
            Before I learned to code, I spent a lot of time building things with
            WordPress. I use WordPress to rapidly prototype ideas and build
            websites for people to manage for themselves. I considered learning
            PHP but opted for Javascript and ReactJS instead.
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

export default WordpressProjectsHome;
