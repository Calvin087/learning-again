import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const TheNavigation = () => (
  <nav className="container flex items-center justify-between flex-wrap px-6">
    <div>
      <Link to={`/`}>
        <img src="../images/logo.png" />
      </Link>
    </div>

    <div className="w-full block flex-grow flex lg:items-center lg:w-auto">
      <div className="lg:flex-grow">
        <p className="block mt-4 lg:inline-block lg:mt-0 mr-4 lg:ml-8">
          Welcome///USER:///
        </p>
      </div>

      <div>
        <ul className="flex">
          <HashLink
            className="mr-4 xl:mr-8 block mt-4 lg:inline-block lg:mt-0 font-medium"
            to={`/#projects`}
          >
            Projects<span className="text-red-500"> _</span>
          </HashLink>
          <Link
            className="mr-4 xl:mr-8 block mt-4 lg:inline-block lg:mt-0 font-medium"
            to={`/blog`}
          >
            Blog<span className="text-red-500"> _</span>
          </Link>

          <HashLink
            className=" block mt-4 lg:inline-block lg:mt-0 font-medium"
            to={`/#contact`}
          >
            Contact Me<span className="text-red-500"> _</span>
          </HashLink>
        </ul>
      </div>
    </div>
  </nav>
);

export default TheNavigation;