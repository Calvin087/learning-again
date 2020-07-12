import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const TheNavigation = () => (
  <nav class="container flex items-center justify-between flex-wrap px-6">
    <div>
      <Link to={`/`}>
        <img src="../images/logo.png" />
      </Link>
    </div>

    <div class="w-full block flex-grow flex lg:items-center lg:w-auto">
      <div class="lg:flex-grow">
        <p class="block mt-4 lg:inline-block lg:mt-0 mr-4 lg:ml-8">
          Welcome///USER:///
        </p>
      </div>

      <div>
        <ul className="flex">
          <HashLink
            class="mr-6 block mt-4 lg:inline-block lg:mt-0 font-medium"
            to={`/#projects`}
          >
            Projects<span className="text-red-500"> _</span>
          </HashLink>
          <Link
            class="mr-6 block mt-4 lg:inline-block lg:mt-0 font-medium"
            to={`/blog`}
          >
            Blog<span className="text-red-500"> _</span>
          </Link>
          <a
            class="block mt-4 lg:inline-block lg:mt-0 font-medium"
            href={"mailto:calvin@sliame.com"}
          >
            Contact<span className="text-red-500"> _</span>
          </a>
        </ul>
      </div>
    </div>
  </nav>
);

export default TheNavigation;