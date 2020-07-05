import React, { createContext, useState, useEffect } from "react";

export const WordpressContext = createContext();

const WordpressContextProvidor = (props) => {
  const [posts, setPosts] = useState([]);

  const siteURL = "http://calvint1.sg-host.com/wp-json/wp/v2/posts?_embed";

  useEffect(() => {
    async function loadposts() {
      const response = await fetch(siteURL);
      if (!response.ok) {
        console.log("not wokring");
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }
    loadposts();
  }, []);

  console.log(posts);
  

  return (
    <WordpressContext.Provider value={{ posts }}>
      {props.children}
    </WordpressContext.Provider>
  );
};

export default WordpressContextProvidor;
