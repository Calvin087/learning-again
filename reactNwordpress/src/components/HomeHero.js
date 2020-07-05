import React from "react";

const HomeHero = () => (
  <div>
    <section class="hero is-dark is-medium is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="column is-three-fifths">
            <h1 class="title"> I Design, build and solve problems.</h1>
            <h2 class="subtitle">
              Frontend Developer based in Madrid. Currently on the path to
              mastering ReactJS…..but we’re not sure how long that will take.
              I’m also working on learning NodeJS and at some point I’d love to
              get into MongoDB and Express.
            </h2>
            <span class="icon">
              <a href="www.google.com">
                <i class="fab fa-github fa-2x fa-fw" aria-hidden="true"></i>
              </a>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-adobe fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-html5 fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-css3-alt fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-js-square fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-react fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <span class="icon">
              <i class="fab fa-sass fa-2x" aria-hidden="true"></i>
            </span>{" "}
            <br />
            <br />
            <div class="buttons">
              <button class="button is-link">View My Work</button>
              <button class="button is-danger">Read My Ideas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeHero;
