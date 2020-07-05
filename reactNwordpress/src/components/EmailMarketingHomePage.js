import React from "react";
import CardComponent from "./CardComponent";

const EmailMarketingHomePage = () => (
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <i class="far fa-envelope" aria-hidden="true">
              {" "}
            </i>{" "}
            Email Marketing Work
          </h1>
          <h2 class="subtitle">
            Before we had the pleasure of responsive email HTML, I spent my time
            working for a property marketing agency. I designed and developed up
            to 6 of these templates on a daily basis while managing the delivery
            using a custom built email marketing system. These are all built
            using the old school HTML table format, using inline css and hosted
            images. They all led to landing pages that I also designed (but have
            since died) where the contact could opt in for more details about a
            property offer.
          </h2>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone1.jpg" />
          </figure>
        </div>
        <div class="column">
          <figure class="image is-2by5">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone4.jpg" />
          </figure>
        </div>
        <div class="column">
          {" "}
          <figure class="image is-2by5">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone3.jpg" />
          </figure>
        </div>
        <div class="column">
          {" "}
          <figure class="image is-2by5">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone2.jpg" />
          </figure>
        </div>
        <div class="column">
          {" "}
          <figure class="image is-2by5">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone2.jpg" />
          </figure>
        </div>
        <div class="column">
          {" "}
          <figure class="image is-2by5">
            <img src="https://calvintorra.com/wp-content/uploads/2020/06/iphone2.jpg" />
          </figure>
        </div>
      </div>
    </div>
  </div>
);

export default EmailMarketingHomePage;
