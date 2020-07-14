import React from "react";
import { Link } from "react-router-dom";
// w-full lg:w-1/3 flex-1 p-2
const TheBlogCard = (props) => {
  const date = new Date(props.date).toDateString()
  
  return (
    <div className="">
      <div className="flex">
        <p
          className="bg-black text-white font-hairline text-xs px-4 py-1"
          style={{ fontSize: "10px" }}
        >
          {date}
        </p>
        <img src="../images/black-stripes-box.png" className=" h-6" />
      </div>

      <div className="bg-gray-200 rounded-tl-none rounded-lg border-2 border-black">
        <div id="header-image-border-bottom">
          <img
            className="h-48 w-full object-cover object-top rounded-tr-lg rounded-tl-none border-b-2 border-black"
            src={props.acf.Featured_Image}
          />
        </div>

        <div className="px-4">
          <div id="left-label-background-bottom-fixed-image">
            <div className="text-2xl">
              <p className="text-black font-thin text-center py-4 mx-auto">
                {props.title.rendered}
              </p>
            </div>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}
              style={{ webKitLineClamp: "3" }}
            ></p>
          </div>

          <div
            id="button-container"
            className="flex justify-between pt-4 pb-5 relative"
          >
            <Link to={`blog/${props.slug}`}>
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
            </Link>
            <div className="bg-gray-400 rounded-full h-5 text-xs px-4 mb-5 absolute bottom-0 right-0">
              <p className="text-gray-600">
                #{props.acf.jsxTag}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBlogCard;
