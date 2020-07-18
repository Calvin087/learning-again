import React from "react";
import Disqus from "disqus-react";


const TheDisqusBox = (props) => {
  const disqusShortname = "portfolio-ut7bhkhj3l";
  const disqusConfig = {
    url: props.url,
    identifier: props.identifier,
    title: props.title,
  };

  return (
    <Disqus.DiscussionEmbed
      shortname={disqusShortname}
      config={disqusConfig}
    />
  );
};

export default TheDisqusBox;
