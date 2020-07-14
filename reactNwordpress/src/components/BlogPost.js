import React, { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { WordpressContext } from "../contexts/WordpressContext";
import NavBar from "./NavBar";
import Footer from './Footer'

function BlogPost() {
  const { posts } = useContext(WordpressContext);
  const { slug } = useParams();
  const post = posts.filter((post) => post.slug === slug); 
  const date = post.date

  console.log(date);
  

  return (
    <div>
      <NavBar />
      <div>
        {post.map((post, index) => (
          <Fragment key={post.id}>
            <section class="hero is-dark is-bold">
              <div class="hero-body">
                <div class="container">
                  <div class="columns">
                    <div class="column is-two-thirds">
                      <h1 class="title">{post.title.rendered}</h1>
                      <h1 class="title">{post.date}</h1>
                      <p>By {post._embedded.author[0].name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <br />

            <div class="container">
              <div class="columns">
                <div class="column is-three-fifths">
                  <p
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPost;
// < img className = "blog-feature-img" src = { post._embedded['wp:featuredmedia'][0].source_url } /> {/* Apparently this is bracket notation */ }

// <p>{post._embedded["wp:featuredmedia"][0].date}</p>;
//  <img
//    className="blog-feature-img"
//    src={post._embedded["wp:featuredmedia"][0].source_url}
//  />;