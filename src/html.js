import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (error) {
    console.log(error);
  }
}

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }

  return (
    <html lang="en-NZ" {...htmlAttributes}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="hsl(94, 30%, 95%)" />

        <link rel="icon" type="image/png" href="favicon.png" />

        {headComponents}

        {css}
      </head>

      <body {...bodyAttributes}>
        {preBodyComponents}

        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        {postBodyComponents}
      </body>
    </html>
  );
};

module.exports = HTML;
