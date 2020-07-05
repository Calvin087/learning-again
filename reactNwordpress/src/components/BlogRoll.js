import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";

function BlogRoll() {
  const { posts } = useContext(WordpressContext);

  return (
    <div>
      <section class="hero is-dark is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="column is-half">
              <h1 class="title">Thoughts and Ideas</h1>
              <h2 class="subtitle">
                After studying coding for a while I decided to start documenting
                my process of understanding. This is not only for myself but for
                others that have asked me how to get started.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section class="section"></section>

      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths">
            {posts.map((post, index) => (
              <div class="container" key={post.id}>
                <article class="media">
                  <figure class="media-left">
                    <p class="image is-128x128">
                      <img
                        src={post._embedded["wp:featuredmedia"][0].source_url}
                      />
                    </p>
                  </figure>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <Link to={`blog/${post.slug}`}>
                          <h4>{post.title.rendered}</h4>{" "}
                        </Link>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></span>
                        <br />
                      </p>
                    </div>
                  </div>
                </article>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogRoll;

// <div className="blog-body wrap">
//   {posts.map((post, index) => (
//     <div className="blog-body-item">
//       <Link to={`/post/${post.slug}`} key={post.id}>
//         <img
//           className="blog-body-item-img"
//           src={post._embedded["wp:featuredmedia"][0].source_url}
//         />{" "}
//         {/* Apparently this is bracket notation */}
//         <p>{post.title.rendered}</p>
//       </Link>
//     </div>
//   ))}
// </div>;
