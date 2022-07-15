import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Dr. Ernst Gassebner</title>
        <meta
          name="description"
          content="Verlässliche, umfangreiche & professionelle Gutachten, Schätzungen und Fachberatungen mit Schwerpunkt  Obst- und Weinbau."
        />
        <meta
          name="keywords"
          content="Agronom, Südtirol, Schätzungsgutachten, GlobalGap, Vorbereitung, Obstbau, Weinbau, Beratung"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dqfcbw5tz/image/upload/v1657816980/Ernst/og-image_k310kn.jpg"
        />
        <meta name="twitter:creator" content="Dr. Ernst Sebastian Gassebner" />
        <meta name="twitter:title" content="Dr. Ernst Sebastian Gassebner" />
        <meta
          name="twitter:description"
          content="Verlässliche, umfangreiche & professionelle Gutachten, Schätzungen und Fachberatungen mit Schwerpunkt  Obst- und Weinbau."
        />
        <meta property="og:url" content="https://ernstgassebner.com" />
        <meta property="og:title" content="Dr. Ernst Gassebner" />
        <meta
          property="og:description"
          content="Verlässliche, umfangreiche & professionelle Gutachten, Schätzungen und Fachberatungen mit Schwerpunkt  Obst- und Weinbau."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dqfcbw5tz/image/upload/v1657816980/Ernst/og-image_k310kn.jpg"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
