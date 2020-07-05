import React, { useEffect, useState, Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import base from "../styles/base.css";
import { WordpressContext } from "../contexts/WordpressContext";

function Blog() {
  const { posts } = useContext(WordpressContext);
  console.log(posts);

  // const [posts, setPosts] = useState([])
  const { slug } = useParams();
  const post = posts.filter((post) => post.slug === slug);

  return (
    <div>
      <div>
        {post.map((post, index) => (
          <Fragment key={post.id}>
            <div>
              <h1>{post.title.rendered}</h1>

              <div>
                <p
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                ></p>
                <img src={post.acf.featured_image_png} />
              </div>
            </div>

            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Blog;
// < img className = "blog-feature-img" src = { post._embedded['wp:featuredmedia'][0].source_url } /> {/* Apparently this is bracket notation */ }
