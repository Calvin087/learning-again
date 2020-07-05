import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";

function Blog() {
  const { posts } = useContext(WordpressContext);

  return (
    <div className="blog-body wrap">
      {posts.map((post, index) => (
        <div className="blog-body-item">
          <Link to={`/post/${post.slug}`} key={post.id}>
            <img
              className="blog-body-item-img"
              src={post._embedded["wp:featuredmedia"][0].source_url}
            />{" "}
            {/* Apparently this is bracket notation */}
            <p>{post.title.rendered}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;
