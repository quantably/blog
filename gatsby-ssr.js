// import React from 'react';
// import Layout from './src/components/layout';

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

// export const wrapPageElement = ({ element, props }) => {
//   console.log(`[gatsby-ssr.js] Wrapping element for path: ${props.location.pathname}`);
//   return <Layout {...props}>{element}</Layout>;
// };
