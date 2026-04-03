const React = require('react')

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    React.createElement('link', {
      key: 'preconnect-fonts',
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    }),
    React.createElement('link', {
      key: 'preconnect-gstatic',
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    }),
    React.createElement('link', {
      key: 'google-fonts',
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap',
    }),
  ])
}
