import React from "react";

const TheProjectCardW = () => (
  <div className="w-full lg:w-1/3 p-2">
    <div className="bg-gray-200 rounded-lg border-2 border-black">
      <div id="header-image-border-bottom">
        <img
          className="h-48 w-full object-cover object-top rounded-tl-lg rounded-tr-lg border-b-2 border-black"
          src="https://wallpaperboat.com/wp-content/uploads/2020/04/gundam-wallpaper-full-hd.jpg"
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
          <div className="py-3 text-center">
            <i className="fab fa-wordpress text-6xl text-center text-gray-100"></i>
          </div>

          <p
            className="text-sm p-2 text-gray-100 mb-10 text-center"
            style={{ fontSize: "8px" }}
          >
            WordPress is open source software you can use to create a beautiful
            website, blog, or app.
          </p>
        </div>

        <div id="left-label-background-bottom-fixed-image" className="w-3/4">
          <div className="text-2xl pb-4">
            <p className="text-black font-thin">
              Building the JS Calculator app using Tailwind CSS
            </p>
          </div>
          <p className="text-sm">
            A website focused on SEO for an occupational therapist in Madrid.
            Wordpress // SEO // Design // DIVI A website focused on SEO for an
            occupational therapist in Madrid.
          </p>

          <button
            style={{
              backgroundImage: `url("../images/button-150-50.png")`,
              width: "150px",
              height: "50px",
            }}
            className="text-white mt-4"
          >
            Live Project<span className="text-red-500"> _</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TheProjectCardW;
