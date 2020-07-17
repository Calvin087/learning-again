import React, { Fragment, useContext } from "react";
import TheNavigation from "./TheNavigation";
import { Link, useParams } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";

const TheBlogPost = (props) => {
  console.log(props);
  const TheDate = new Date(props.date).toDateString();

const divStlye = {
  h2: ""
}

  return (
    <div key={props.id}>
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
              {props.title.rendered}
            </p>
          </div>

          <div className="flex border-b border-red-500 py-10 relative">
            <p
              className="bg-black text-white font-hairline text-xs px-4 py-1"
              style={{ fontSize: "10px" }}
            >
              {TheDate}
            </p>
            <img src="../images/black-stripes-box.png" className=" h-6" />

            <div className="bg-gray-400 rounded-full h-5 text-xs px-4 mb-5 absolute middle-0 right-0">
              <p className="text-gray-600">#{props.acf.jsxTag}</p>
            </div>
          </div>
        </div>
      </div>

      {/* END OF HERO */}

      <div
        id="BlogPost-col-centered"
        className="w-full lg:w-1/2 xl:w-1/2 mx-auto py-10 px-10"
      >
        <div id="HTML-insert-of-blog-post">
          <div dangerouslySetInnerHTML={{ __html: props.content.rendered }} className="text-xl "></div>
        </div>
      </div>
    </div>
  );
};

export default TheBlogPost;
