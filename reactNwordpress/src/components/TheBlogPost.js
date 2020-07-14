import React, { Fragment, useContext } from "react";
import TheNavigation from "./TheNavigation";
import TheBlogPostContent from './TheBlogPostContent'
import { Link, useParams } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";

const TheBlogPost = () => {
  const { posts } = useContext(WordpressContext);
  const { slug } = useParams();
  const post = posts.filter((post) => post.slug === slug);
  const date = new Date(post.date).toDateString();
  
  

  return (
    <div>
      {post.map((post, index) => (
        <div key={post.id}>
          <TheBlogPostContent {...post} />
        </div>
      ))}
    </div>
  );
};


export default TheBlogPost;
