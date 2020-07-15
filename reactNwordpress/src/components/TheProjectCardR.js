import React from "react";
import { Link } from "react-router-dom";

const TheProjectCardR = (props) => (
  <div className="w-full md:w-1/2 xl:w-1/4 p-2">
    <div className="bg-gray-200 rounded-lg border-2 border-black">
      <div id="header-image-border-bottom">
        <img
          className="h-48 w-full object-cover object-top rounded-tl-lg rounded-tr-lg border-b-2 border-black"
          src={props.image}
        />
      </div>

      <div className="flex px-4 py-4">
        <div
          className="w-1/4 bg-blue-900 rounded-lg mr-4 bg-bottom"
          style={{
            backgroundImage: `url("../images/border-bottom.png")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-2 text-center">
            <i
              className="fab fa-react text-5xl text-center"
              style={{ color: "#61dafb" }}
            ></i>
          </div>

          <p
            className="text-sm px-2 text-blue-200 mb-10 text-center"
            style={{ fontSize: "8px" }}
          >
            ReactJS framework.
          </p>
        </div>

        <div id="left-label-background-bottom-fixed-image" className="w-3/4">
          <div className="text-2xl pb-4">
            <p className="text-black font-thin">{props.title}</p>
          </div>
          <p className="text-sm">{props.description}</p>

          <div className="pt-4">
            <a href={props.link} target="_blank">
              <button
                style={{
                  backgroundImage: `url("../images/button-150-50.png")`,
                  width: "150px",
                  height: "50px",
                }}
                className="w-1/2 text-white"
              >
                Live Project<span className="text-red-500"> _</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TheProjectCardR;
