import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TheNavigation from "./TheNavigation";
import TheHomeProjects from "./TheHomeProjects";
import TheContactForm from "./TheContactForm";

const TheFooter = () => (
  <div className="container px-4">
    <div
      style={{
        backgroundImage: `url("../images/footer-bar.png")`,
        backgroundSize: "1440px",
      }}
      className="h-4 mt-40"
    ></div>
    <div
      id="main-container"
      className="container w-full flex mx-auto mt-8 px-6 mb-12"
    >
      <div id="col1" className="w-1/2">
        <p className="text-2xl mb-10">About Me</p>
        <div id="image-and-text" className="flex flex-wrap">
          <img src="../images/logo.png" className="mr-4 mb-4 h-full" />

          <p className="text-sm w-full xl:w-1/2">
            <strong>Calvin Torra</strong> <i>(no relation)</i> - Web developer based
            in Madrid, working in MERN stack and
            documenting the process. Pizza + Karate!
            <div className="mt-2">
              <i
                className="fab fa-linkedin-in text-3xl text-center mr-2"
                style={{ color: "#000000" }}
              ></i>
              <i
                className="fab fa-github text-3xl text-center mr-2"
                style={{ color: "#000000" }}
              ></i>
            </div>
          </p>
        </div>
      </div>

      <div id="col1" className="w-1/2 ml-4">
        <p className="text-2xl mb-10">Contact Me</p>
        <TheContactForm />
      </div>
    </div>
  </div>
);

export default TheFooter;
