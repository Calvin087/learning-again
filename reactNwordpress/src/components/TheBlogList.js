import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";
import TheNavigation from "./TheNavigation";
import TheBlogCardT from "./TheBlogCardT";

const TheBlogList = () => {
  const { posts } = useContext(WordpressContext);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("../images/background-dots.png")`,
          backgroundSize: "1440px",
        }}
      >
        <TheNavigation />

        <div className="container mx-auto px-6 py-12 lg:w-2/6 xl:w-2/6">
          <div className="w-full ">
            <img src="../images/the-blog.png" />
          </div>

          <div className="text-5xl">
            <p>
              <span className="font-semibold">Thoughts</span>
              <span className="font-thin">&</span>
              <span className="text-red-700 font-thin">Ideas</span>
            </p>
          </div>

          <div className="flex mb-2 mt-4 border-b-4 border-black">
            <div className="w-1/2 mb-2">
              <p className="text-xs">
                Various thoughts while exploring code{" "}
                <span className="dot"></span>
              </p>
            </div>
            <div className="w-1/2 ml-6">
              <p className="text-xs">
                HTML5/CSS3/Javascript/ ReactJS/TheWorld{" "}
                <span className="dot"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-wrap px-6">
        {posts.map((post, index) => (
          <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-2 py-12">
            <TheBlogCardT {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheBlogList;