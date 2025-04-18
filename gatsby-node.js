/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define templates
const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
const tagPageTemplate = path.resolve(`./src/templates/tag-page.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const isProduction = process.env.NODE_ENV === 'production';
  reporter.info(`\n--- Running createPages. Production mode: ${isProduction} ---\n`); // Log production status

  // Define base filter (blog posts only)
  const baseFilter = { fileAbsolutePath: { regex: "/content/blog/" } };
  // Add draft filter in production
  const productionFilter = isProduction 
    ? { ...baseFilter, fields: { isDraft: { ne: true } } } 
    : baseFilter;

  // Get all markdown blog posts AND tags, sorted by date
  const result = await graphql(`
    query CreatePagesQuery($postFilter: MarkdownRemarkFilterInput!, $tagFilter: MarkdownRemarkFilterInput!) {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        filter: $postFilter # Use variable for filter
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
          }
          # Also query tags here
          frontmatter {
            tags
          }
        }
      }
      # Query for all unique tags
      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: $tagFilter # Use variable for filter
      ) {
        group(field: { frontmatter: { tags: SELECT }}) {
          fieldValue
        }
      }
    }
  `, { postFilter: productionFilter, tagFilter: productionFilter }) // Pass filter variables

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts or tags`,
      result.errors
    )
    return
  }

  reporter.info(`Filter applied to queries: ${JSON.stringify(productionFilter)}`); // Log the filter being used

  // --- Create Blog Post Pages --- 
  const posts = result.data.postsRemark.nodes
  reporter.info(`Found ${posts.length} posts after filtering.`); // Log post count
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPostTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
    reporter.info(`----> SUCCESS: Created ${posts.length} blog post pages.`)
  }

  // --- Create Tag Pages --- 
  const tags = result.data.tagsGroup.group
  reporter.info(`Found ${tags.length} unique tags after filtering posts.`); // Log tag count
  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.fieldValue}/`, // Create path like /tags/react/
        component: tagPageTemplate,      // Use the new tag template
        context: {
          tag: tag.fieldValue,          // Pass tag value to template query
        },
      })
    })
    reporter.info(`----> SUCCESS: Created ${tags.length} tag pages.`)
  }
  reporter.info(`\n--- Finished createPages ---\n`); // Log completion
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const isDraft = node.frontmatter?.draft === true;
    createNodeField({
      name: `isDraft`,
      node,
      value: isDraft,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
      parent: File @link(from: "parent___NODE")
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      draft: Boolean
      tags: [String]
    }

    type Fields {
      slug: String
      isDraft: Boolean
    }
  `)
}
