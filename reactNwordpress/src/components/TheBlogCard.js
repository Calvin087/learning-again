import React from "react";

const TheBlogCard = () => (
  <div className="w-full lg:w-1/3 p-2">
    <div className="flex">
      <p
        className="bg-black text-white font-hairline text-xs px-4 py-1"
        style={{ fontSize: "10px" }}
      >
        2020-06-27T16:00:25
      </p>
      <img src="../images/black-stripes-box.png" className=" h-6" />
    </div>

    <div className="bg-gray-200 rounded-tl-none rounded-lg border-2 border-black">
      <div>
        <img
          className="h-48 w-full object-cover object-top rounded-tr-lg rounded-tl-none border-b-2 border-black"
          src="https://wallpaperboat.com/wp-content/uploads/2020/04/gundam-wallpaper-full-hd.jpg"
        />
      </div>

      <div className="px-4">
        <div>
          <div className="text-2xl">
            <p className="text-black font-thin text-center py-4 mx-auto">
              Building the JS Calculator app using Tailwind CSS
            </p>
          </div>
          <p className="text-sm">
            A website focused on SEO for an occupational therapist in Madrid.
            Wordpress // SEO // Design // DIVI A website focused on SEO for an
            occupational therapist in Madrid.
          </p>
        </div>

        <div className="flex justify-between pt-4 pb-5 relative">
          <button
            style={{
              backgroundImage: `url("../images/button-150-50.png")`,
              width: "150px",
              height: "50px",
            }}
            className="w-1/2 text-white"
          >
            Read More<span className="text-red-500"> _</span>
          </button>
          <div className="bg-gray-400 rounded-full h-5 text-xs px-4 mb-5 absolute bottom-0 right-0">
            <p className="text-gray-600">#js-beginners</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TheBlogCard;
