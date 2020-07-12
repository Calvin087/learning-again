import React from "react";
import TheNavigation from "./TheNavigation";

const TheBlogPost = () => (
  <div>
    <div
      style={{
        backgroundImage: `url("../images/background-dots.png")`,
        backgroundSize: "1440px",
      }}
    >
      <TheNavigation />

      {/* END OF NAV */}

      <div
        id="main-container"
        className="container mx-auto px-6 py-12 w-full lg:w-2/4"
      >
        <div className="text-4xl lg:text-5xl">
          <p className="text-black font-thin text-center">
            Building a New Website using Wordpress Headless CMS
          </p>
        </div>

        <div className="flex border-b border-red-500 py-10 relative">
          <p
            className="bg-black text-white font-hairline text-xs px-4 py-1"
            style={{ fontSize: "10px" }}
          >
            2020-06-27T16:00:25
          </p>
          <img src="../images/black-stripes-box.png" className=" h-6" />

          <div className="bg-gray-400 rounded-full h-5 text-xs px-4 mb-5 absolute middle-0 right-0">
            <p className="text-gray-600">#js-beginners</p>
          </div>
        </div>
      </div>
    </div>

    {/* END OF HERO */}

    <div
      id="BlogPost-col-centered"
      className="w-full lg:w-2/4 mx-auto py-10 px-10"
    >

      <div id="HTML-insert-of-blog-post">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
          tellus luctus, porta nisi sed, placerat justo. Donec pretium leo
          sapien, quis mollis dolor rhoncus a. Praesent maximus vel nibh varius
          faucibus. Fusce dapibus, libero vel ultricies hendrerit, nunc justo
          blandit arcu, eu convallis urna arcu nec ipsum.
        </p>
        <p>
          Aenean efficitur dolor eu leo vestibulum, vitae finibus turpis auctor.
          Morbi in mauris quis velit dictum rutrum. Curabitur turpis felis,
          dapibus vel aliquet non, ornare quis nisi. Suspendisse vitae enim
          mattis, blandit nibh molestie, egestas turpis. Fusce vitae justo
          metus.
        </p>
      </div>
    </div>
  </div>
);

export default TheBlogPost;
