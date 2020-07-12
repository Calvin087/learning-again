import React from "react";
import TheNavigation from "./TheNavigation";

const TheHeaderHero = () => (
  <div
    style={{
      backgroundImage: `url("../images/background-dots.png")`,
      backgroundSize: "1440px",
    }}
  >

    <TheNavigation />

    <div
      id="main-container"
      className="container flex flex-wrap mx-auto -my-12 px-6 py-2"
    >
      <div id="col-container-1" class="w-full lg:w-2/6 xl:w-2/6 mt-20 pr-4">
        <div id="great087-image">
          <img src="../images/great087.png" />
        </div>

        <div className="text-5xl">
          <p className="font-semibold">
            Frontend<span className="text-red-700 font-thin">Developer</span>
          </p>
        </div>

        <div className="flex mb-2 border-b-4 border-black">
          <div className="w-1/2 mb-2">
            <p className="text-xs">
              Designer by education, salesman by necessity, builder and problem
              solver by passion
            </p>
          </div>
          <div className="w-1/2 ml-2">
            <p className="text-xs">HTML5/CSS3/Javascript/ ReactJS/TheWorld</p>
          </div>
        </div>

        <div className="pr-6 pb-8">
          <p className="pb-4">
            Frontend Developer based in Madrid. Currently on the path to
            mastering ReactJS…..but we’re not sure how long that will take.
          </p>
          <p>
            I’m also working on learning NodeJS and at some point I’d love to
            get into MongoDB and Express.
          </p>
        </div>

        <div id="button-container">
          <button
            style={{
              backgroundImage: `url("../images/button-150-50.png")`,
              width: "150px",
              height: "50px",
            }}
            className="w-1/2 text-white mr-4"
          >
            The Projects<span className="text-red-500"> _</span>
          </button>
          <button
            style={{
              backgroundImage: `url("../images/button-150-50.png")`,
              width: "150px",
              height: "50px",
            }}
            className="w-1/2 text-white"
          >
            The Blog<span className="text-red-500"> _</span>
          </button>
        </div>
      </div>

      <div class="w-full lg:w-3/6 xl:w-3/6 px-4 pt-6">
        <div id="gundam-image-middle-col">
          <img className="w-full" src="../images/gundam.png" />
        </div>
      </div>

      <div
        id="gundam-weapons-right-col"
        class="w-full lg:w-1/6 xl:w-1/6 mb-4 mt-16"
      >
        <div className="mb-3">
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

          <p style={{ fontSize: "9px" }} className="mt-2 mb-8">
            Hypertext Markup Language (HTML) is the standard markup language for
            documents designed to be displayed in a web browser.
          </p>
        </div>
        <div className="mb-3">
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

          <p style={{ fontSize: "9px" }} className="mt-2 mb-8">
            a programming language that conforms to the ECMAScript
            specification. JavaScript is high-level, often just-in-time
            compiled.
          </p>
        </div>
        <div className="mb-3">
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

          <p style={{ fontSize: "9px" }} className="mt-2 mb-8">
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, and updates and render
            just the right components when your data changes.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default TheHeaderHero;
