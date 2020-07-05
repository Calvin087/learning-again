import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";
import NavBar from "./NavBar";
import BlogRoll from "./BlogRoll";
import Footer from './Footer'

function Blog() {
  const { posts } = useContext(WordpressContext);

  return (
    <div>
      <NavBar />
      <BlogRoll />
      <Footer/>
    </div>
  );
}

export default Blog;
