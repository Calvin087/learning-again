import React from "react";
import TheNavigation from "./TheNavigation";
import TheBlogCard from './TheBlogCard'

const TheBlogList = () => (
  <div>
    <div
      style={{
        backgroundImage: `url("../images/background-dots.png")`,
        backgroundSize: "1440px",
      }}
    >
      <TheNavigation />

      <div
        id="main-container"
        className="container mx-auto px-6 py-12 lg:w-2/6 xl:w-2/6"
      >
        <div id="great087-image" class="w-full ">
          <img src="../images/the-blog.png" />
        </div>

        <div className="text-5xl">
          <p>
            <span className="font-semibold">Thoughts</span>
            <span className="font-thin">&</span>
            <span className="text-red-700 font-thin">Ideas</span>
          </p>
        </div>

        <div className="flex mb-2 border-b-4 border-black">
          <div className="w-1/2 mb-2">
            <p className="text-xs">Various thoughts while exploring code</p>
          </div>
          <div className="w-1/2 ml-6">
            <p className="text-xs">HTML5/CSS3/Javascript/ ReactJS/TheWorld</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap p-4">
      <TheBlogCard />
      <TheBlogCard />
      <TheBlogCard />
      <TheBlogCard />
      <TheBlogCard />
      <TheBlogCard />
    </div>
  </div>
);

export default TheBlogList;
