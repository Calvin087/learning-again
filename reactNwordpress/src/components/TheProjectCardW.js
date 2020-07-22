import React from "react";

const TheProjectCardW = (props) => (
  <div className="w-full md:w-1/2 xl:w-1/4 p-2">
    <div className="bg-gray-200 rounded-lg border-2 border-black hover:shadow-2xl transition ease-out duration-500">
      <div>
        <img
          className="h-48 w-full object-cover object-top rounded-tl-lg rounded-tr-lg border-b-2 border-black"
          src={props.image}
        />
      </div>

      <div className="flex px-4 py-4">
        <div
          className="w-1/4 bg-blue-500 rounded-lg mr-4 bg-bottom"
          style={{
            backgroundImage: `url("../images/border-bottom.png")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-2 text-center">
            <i className="fab fa-wordpress text-5xl text-center text-gray-100"></i>
          </div>

          <p
            className="text-sm p-2 text-gray-100 mb-10 text-center"
            style={{ fontSize: "8px" }}
          >
            WordPress Theme custimisation
          </p>
        </div>

        <div className="w-3/4">
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
                className="w-1/2 text-white hover:bg-black"
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

export default TheProjectCardW;
