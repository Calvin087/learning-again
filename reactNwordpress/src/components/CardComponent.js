import React from "react";

const CardComponent = () => (
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <br />
          <br />
          <div class="buttons">
            <button class="button is-small is-info is-light">Code</button>
            <button class="button is-success is-light is-small">Live Site</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardComponent;
