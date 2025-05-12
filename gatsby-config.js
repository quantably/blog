/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

// Define base plugins array
const plugins = [
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      excerpt_separator: `<!-- excerpt -->`,
      plugins: [
        {
          resolve: require.resolve(`./plugins/gatsby-remark-mermaid`)
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 630,
          },
        },
        {
          resolve: `gatsby-remark-responsive-iframe`,
          options: {
            wrapperStyle: `margin-bottom: 1.0725rem`,
          },
        },
        `gatsby-remark-prismjs`
      ],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  // Add filesystem source for src/pages to pick up .md files
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.nodes.map(node => {
              return Object.assign({}, node.frontmatter, {
                description: node.excerpt,
                date: node.frontmatter.date,
                url: site.siteMetadata.siteUrl + node.fields.slug,
                guid: site.siteMetadata.siteUrl + node.fields.slug,
                custom_elements: [{ "content:encoded": node.html }],
              })
            })
          },
          query: `{ 
            allMarkdownRemark(
              sort: { frontmatter: { date: DESC } } 
              filter: { fields: { sourceInstanceName: { eq: "blog" } } }
            ) {
              nodes {
                excerpt
                html
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                }
              }
            }
          }`,
          output: "/rss.xml",
          title: "Peter Wooldridge | Blog",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Peter Wooldridge Blog`,
      short_name: `Peter Blog`,
      start_url: `/`,
      background_color: `#ffffff`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      // theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
];

// Log the NODE_ENV when gatsby-config.js is loaded
console.log(`[gatsby-config.js] NODE_ENV: ${process.env.NODE_ENV}`);

// Conditionally add Google Analytics in production
if (process.env.NODE_ENV === 'production') {
  console.log('[gatsby-config.js] Adding Google Analytics plugin for production.');
  plugins.splice(6, 0, { // Insert GA config after gatsby-plugin-sharp
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-HZD1YS9Q96", 
      ],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: true, 
        respectDNT: true,
      },
    },
  });
}

module.exports = {
  siteMetadata: {
    title: `Peter Wooldridge`,
    author: {
      name: `Peter Wooldridge`,
      summary: `Living and working in London, Peter Wooldridge explores topics in AI.`,
    },
    description: `Living and working in London, Peter Wooldridge explores topics in AI.`,
    siteUrl: `https://quantably.co`,
    social: {
      twitter: `pwwooldridge`,
    },
  },
  // Use the conditionally built plugins array
  plugins: plugins, 
}
