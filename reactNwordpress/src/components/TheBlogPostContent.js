import React from "react";
import { useParams } from "react-router-dom";
import TheNavigation from "./TheNavigation";
import TheScrollToTop from "./TheScrollToTop";
import TheDisqusBox from "./TheDisqusBox";
import TheHelmet from "./TheHelmet";

const TheBlogPostContent = (props) => {
  console.log(props);
  const { slug } = useParams();
  const websiteName = `https://calvintorraportfolio.web.app/${slug}`;
  const TheDate = new Date(props.date).toDateString();

  return (
    <div key={props.id}>
      <div
        style={{
          backgroundImage: `url("../images/background-dots.png")`,
          backgroundSize: "1440px",
        }}
      >
        <TheHelmet
          title={props.title.rendered}
          content={props.acf.excerpt}
          href={websiteName}
        />

        <TheScrollToTop />
        <TheNavigation />

        {/* END OF NAV */}

        <div className="container mx-auto px-6 py-12 w-full lg:w-2/4">
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

      <div className="max-w-xl mx-auto py-10 px-10">
      {/* <div className="w-full lg:w-1/2 xl:w-1/2 mx-auto py-10 px-10"> */}
        <div className="pb-12">
          <div
            dangerouslySetInnerHTML={{ __html: props.content.rendered }}
            className="blog"

          ></div>
        </div>

        <TheDisqusBox
          url={`${websiteName}`}
          identifier={"10"}
          title={props.title.rendered}
        />
      </div>
    </div>
  );
};

export default TheBlogPostContent;
