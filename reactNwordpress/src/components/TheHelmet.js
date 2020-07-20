import React from "react";
import { Helmet } from "react-helmet";

const TheHelmet = (props) => {
    return (
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={props.content} />
          <title>{props.title}</title>
          <link rel="canonical" href={props.href} />
        </Helmet>
    );
};

export default TheHelmet;