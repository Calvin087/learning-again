import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TheNavigation from "./TheNavigation";
import TheHomeProjects from "./TheHomeProjects";
import TheHelmet from "./TheHelmet";

const TheHeaderHero = () => (
  <div>
    <TheHelmet
      title={"Calvin T - FrontEnd Developer"}
      content={
        "My life has taken me through various roles, from Graphic Designer to Marketing Consultant, through Sales and now Frontend Development. I'm currently seeking a long term relationship with a product based company where we can raise lots of little web components and live happily ever after."
      }
      href={"https://calvintorra.com/"}
    />

    <div
      style={{
        backgroundImage: `url("../images/background-dots.png")`,
        backgroundSize: "1440px",
      }}
    >
      <TheNavigation />

      <div
        id="main-container"
        className="container flex flex-wrap mx-auto -mt-12 px-6 py-2"
      >
        <div id="col-container-1" class="w-full xl:w-2/6 mt-20 pr-16 xl:p-0">
          <div id="great087-image">
            <img src="../images/great087.png" />
          </div>

          <div className="pr-16">
            <p className="font-semibold text-4xl lg:text-5xl xl:text-5xl">
              Frontend<span className="text-red-700 font-thin">Developer</span>
            </p>
          </div>

          <div className="flex mb-2 border-b-4 border-black">
            <div className="w-1/2 mb-4">
              <p className="text-xs">
                Designer by education, salesman by necessity, builder and
                problem solver by passion <span className="dot"></span>
              </p>
            </div>
            <div className="w-1/2 ml-2 pl-4">
              <p className="text-xs">
                HTML5/CSS3/Javascript/ ReactJS/TheWorld{" "}
                <span className="dot"></span>
              </p>
            </div>
          </div>

          <div className="pr-6 mt-4">
            <p className="pb-4">
              My life has taken me through various roles, from Graphic Designer
              to Marketing Consultant, through Sales and now Frontend
              Development.
            </p>
            <p className="pb-6">
              I'm currently seeking a long term relationship with a product
              based company where we can raise lots of little web components and
              live happily ever after.
            </p>
          </div>

          <div id="button-container">
            <HashLink to={`/#projects`}>
              <button
                style={{
                  backgroundImage: `url("../images/button-150-50.png")`,
                  width: "150px",
                  height: "50px",
                }}
                className="w-1/2 text-white mr-4 hover:bg-black"
              >
                The Projects<span className="text-red-500"> _</span>
              </button>
            </HashLink>

            <Link to={`/blog`}>
              <button
                style={{
                  backgroundImage: `url("../images/button-150-50.png")`,
                  width: "150px",
                  height: "50px",
                }}
                className="w-1/2 text-white mr-4 hover:bg-black"
              >
                The Blog<span className="text-red-500"> _</span>
              </button>
            </Link>
          </div>
        </div>

        <div class="w-full xl:w-3/6 xl:px-4 pt-6">
          <div id="gundam-image-middle-col">
            <img className="w-full" src="../images/gundam.png" />
          </div>
        </div>

        <div
          id="gundam-weapons-right-col"
          class="flex flex-wrap w-full xl:w-1/6 mb-4 xl:mt-16 lg:mt-16 mt-4"
        >
          <div className="mb-3 w-1/3 lg:w-1/3 lg:px-8 xl:w-full pr-4 lg:p-0 xl:p-0">
            <img
              className="w-full inset-x-0.bottom-0 mb-4"
              src="../images/gun1.png"
            />

            <div
              style={{ alignItems: "center" }}
              className="flex justify-end bg-red-700 h-3"
            >
              <div className="bg-white">
                <p className="text-right ml-2 text-lg">HTML/CSS</p>
              </div>
            </div>

            <p style={{ fontSize: "9px" }} className="mt-2 mb-4">
              Hypertext Markup Language (HTML) is the standard markup language
              for documents designed to be displayed in a web browser.
            </p>
          </div>
          <div className="mb-3 w-1/3 lg:w-1/3 lg:px-8 xl:w-full pr-4 lg:p-0 xl:p-0">
            <img
              className="w-full inset-x-0.bottom-0 mb-4"
              src="../images/gun2.png"
            />

            <div
              style={{ alignItems: "center" }}
              className="flex justify-end bg-red-700 h-3"
            >
              <div className="bg-white">
                <p className="text-right ml-2 text-lg">Javascript</p>
              </div>
            </div>

            <p style={{ fontSize: "9px" }} className="mt-2 mb-4">
              a programming language that conforms to the ECMAScript
              specification. JavaScript is high-level, often just-in-time
              compiled.
            </p>
          </div>
          <div className="mb-3 w-1/3 lg:1/3 lg:px-8 xl:w-full pr-4 lg:p-0 xl:p-0">
            <img
              className="w-full inset-x-0.bottom-0 mb-4"
              src="../images/gun3.png"
            />

            <div
              style={{ alignItems: "center" }}
              className="flex justify-end bg-red-700 h-3"
            >
              <div className="bg-white">
                <p className="text-right ml-2 text-lg">ReactJS</p>
              </div>
            </div>

            <p style={{ fontSize: "9px" }} className="mt-2 mb-4">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and updates and render
              just the right components when your data changes.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" className="container">
      <TheHomeProjects />
    </div>
  </div>
);

export default TheHeaderHero;
