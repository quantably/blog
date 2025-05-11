/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { generateCards } = require('./src/scripts/generate-social-cards')

// Define templates
const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
const tagPageTemplate = path.resolve(`./src/templates/tag-page.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  reporter.info(`\n--- Running createPages ---`); // Simplified log

  // Define base filter (blog posts only) - always used
  const baseFilter = { fileAbsolutePath: { regex: "/content/blog/" } };
  // No need for productionFilter

  // Get all markdown blog posts AND tags, sorted by date
  const result = await graphql(`
    # Query variables no longer needed for filter
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
  `, { postFilter: baseFilter, tagFilter: baseFilter }) // Pass baseFilter always

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts or tags`,
      result.errors
    )
    return
  }

  // Filter logging removed, createResolvers will log in production

  // --- Create Blog Post Pages --- 
  const posts = result.data.postsRemark.nodes
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
    // Get the parent node (File node)
    const parent = getNode(node.parent);
    // Get the source instance name from the parent File node
    const sourceInstanceName = parent.sourceInstanceName;

    // Add the source instance name as a field
    createNodeField({
      node,
      name: `sourceInstanceName`,
      value: sourceInstanceName,
    });

    // Add the folder name as a field (directory name containing the markdown file)
    const folder = parent && parent.dir ? path.basename(parent.dir) : null;
    createNodeField({
      node,
      name: `folder`,
      value: folder,
    });

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
      sourceInstanceName: String
      folder: String
    }
  `)
}

// Add createResolvers to filter drafts globally in production
exports.createResolvers = ({ createResolvers, reporter }) => {
  const isProduction = process.env.NODE_ENV === "production";

  // Only apply filter in production
  if (!isProduction) {
    reporter.info("Skipping draft filter via createResolvers in development mode.");
    return;
  }

  reporter.info("Applying draft filter globally via createResolvers in production mode...");

  createResolvers({
    Query: {
      allMarkdownRemark: {
        // Intercept the resolver for allMarkdownRemark
        resolve: async (source, args, context, info) => {
          // Clone args to avoid modifying the original object directly
          const newArgs = { ...args }; 
          
          // Ensure filter and fields objects exist
          if (!newArgs.filter) newArgs.filter = {};
          if (!newArgs.filter.fields) newArgs.filter.fields = {};

          // Apply the draft filter ONLY if one isn't already specifically set
          if (newArgs.filter.fields.isDraft === undefined) {
            newArgs.filter.fields.isDraft = { ne: true };
            reporter.info(`Applied draft filter to allMarkdownRemark args: ${JSON.stringify(newArgs.filter)}`);
          } else {
            reporter.info(`Draft filter already present in args, not overriding: ${JSON.stringify(newArgs.filter.fields.isDraft)}`);
          }

          // Call the original resolver with the potentially modified arguments
          // This ensures other Gatsby plugins or source plugins still function correctly
          const result = await info.originalResolver(source, newArgs, context, info);
          
          // Optional: Log count after filtering if needed
          // if (result && result.nodes) {
          //   reporter.info(`allMarkdownRemark resolver returned ${result.nodes.length} nodes after filtering.`);
          // }

          return result;
        }
      }
    }
  });
};
