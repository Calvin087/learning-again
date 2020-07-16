import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TheNavigation from "./TheNavigation";
import TheHomeProjects from "./TheHomeProjects";
import TheContactForm from "./TheContactForm";

const TheFooter = () => (
  <div className="container">
    <div
      style={{
        backgroundImage: `url("../images/footer-bar.png")`,
        backgroundSize: "1440px",
      }}
      className="h-4 mt-40"
    ></div>
    <div
      id="main-container"
      className="container w-full flex mx-auto mt-0 px-4 xl:px-6 mb-12"
      style={{
        backgroundImage: `url("../images/background-dots.png")`,
        backgroundSize: "1440px",
      }}
    >
      <div id="col1" className="w-1/2">
        <div id="image-and-text" className="flex flex-wrap mt-12 mr-6 xl:mt-16">
          <img src="../images/logo.png" className="mr-4 mb-4 h-full xl:ml-6" />

          <div className="text-sm w-full xl:w-1/2">
            <strong>Calvin Torra</strong> <i>(Turner)</i> - Web developer based
            in Madrid, working in MERN stack and documenting the process. Pizza
            + Karate! Built with ReactJs + TailwindCss
            <div className="mt-2">
              <a href="https://www.linkedin.com/in/calvintorra/" target="blank">
                <i
                  className="fab fa-linkedin-in text-3xl text-center mr-2"
                  style={{ color: "#000000" }}
                ></i>
              </a>

              <a href="https://github.com/Calvin087" target="blank">
                <i
                  className="fab fa-github text-3xl text-center mr-2"
                  style={{ color: "#000000" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="col1"
        className="w-1/2 xl:-mt-20 bg-white p-6 mt-10 rounded-lg border-2 border-black"
      >
        <p className="text-2xl mb-10 font-semibold">
          Contact<span className="text-red-700 font-thin">Me</span>
        </p>

        <div id="contact">
          <TheContactForm />
        </div>
      </div>
    </div>
  </div>
);

export default TheFooter;
