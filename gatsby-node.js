// Complete implementation for draft post filtering in Gatsby

// Track all draft posts by slug
// const draftSlugs = new Set(); // Removed: No longer needed

// Define the schema for draft frontmatter
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MdxFrontmatter {
      draft: Boolean
    }
  `)
}

// Mark nodes with draft status field
exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions
  // const isProduction = process.env.NODE_ENV === "production" // Removed: Not used directly here anymore

  // Process MDX nodes to track draft posts
  if (node.internal.type === "Mdx" && node.frontmatter?.draft === true) {
    // Log for verification
    reporter.info(`Identified draft post: ${node.frontmatter.title || "(untitled)"}`)
    
    // Removed slug extraction and draftSlugs logic
    
    // Mark the node for easy identification (Keep if 'isDraft' field is used elsewhere)
    createNodeField({
      node,
      name: "isDraft",
      value: true
    });
  }
}

// Set up resolvers to filter out draft posts from GraphQL queries
exports.createResolvers = ({ createResolvers, reporter }) => {
  createResolvers({
    Query: {
      // Filter all Mdx nodes in queries
      allMdx: {
        resolve(source, args, context, info) {
          const isProduction = process.env.NODE_ENV === "production";
          
          if (isProduction) {
            // Ensure filter argument exists
            if (!args.filter) {
              args.filter = {};
            }
            
            // Add filter for frontmatter.draft
            if (!args.filter.frontmatter) {
              args.filter.frontmatter = {};
            }
            
            // Filter out draft posts
            // Check if the draft filter is already set to avoid overwriting
            if (args.filter.frontmatter.draft === undefined) {
               args.filter.frontmatter.draft = { ne: true };
               reporter.info("Applied draft filter (ne: true) to allMdx query in production");
            } else {
               reporter.info("Draft filter already present or modified in allMdx query, skipping default application.");
            }

          }
          
          // Call original resolver with modified args
          return info.originalResolver(source, args, context, info);
        }
      },
      
      // Filter allPost queries as well (used by theme)
      allPost: {
        resolve(source, args, context, info) {
          const isProduction = process.env.NODE_ENV === "production";
          
          if (isProduction) {
             reporter.info("Applying draft filter to allPost query results in production");
            return info.originalResolver(source, args, context, info)
              .then(result => {
                if (!result || !result.nodes) {
                    reporter.info("allPost query returned no result or nodes, skipping filter.");
                    return result;
                }
                
                // Filter out posts that are drafts
                const originalCount = result.nodes.length;
                result.nodes = result.nodes.filter(post => {
                   if (!post || !post.parent) {
                       // reporter.info(`Post without parent found: ${post?.slug || 'unknown slug'}`);
                       return true; // Keep posts without a parent Mdx node (e.g., manually created pages)
                   }
                  
                  // Check if parent node is a draft
                  const parentNode = context.nodeModel.getNodeById({ id: post.parent });
                   const isDraft = parentNode?.frontmatter?.draft === true;

                   // if (isDraft) {
                   //    reporter.info(`Filtering draft post: ${post.slug} (Parent ID: ${post.parent})`);
                   // }
                  
                  return !isDraft;
                });
                
                const filteredCount = originalCount - result.nodes.length;
                if (filteredCount > 0) {
                  reporter.info(`Filtered ${filteredCount} draft posts from allPost query result`);
                } else {
                   reporter.info(`No draft posts filtered from allPost query result (Original count: ${originalCount})`);
                }
                
                return result;
              });
          }
          
           reporter.info("Skipping draft filter for allPost query in non-production mode.");
          return info.originalResolver(source, args, context, info);
        }
      }
    }
  });
}

// Prevent draft pages from being created - Removed logic relying on draftSlugs
exports.onCreatePage = ({ page, actions, reporter }) => {
  // const { deletePage } = actions; // Removed: deletePage no longer used here
  // const isProduction = process.env.NODE_ENV === "production"; // Removed: Not strictly needed if no filtering happens here

  // No filtering logic needed here anymore if createResolvers handles it effectively.
  // You might keep this hook for other page modifications if necessary.
  // reporter.info(`onCreatePage called for: ${page.path}`); 
};

// Hook to verify content after build
exports.onPostBuild = ({ reporter }) => {
  const isProduction = process.env.NODE_ENV === "production";
  
  if (isProduction) {
    reporter.info(`Production build finished. Draft post filtering handled by createResolvers.`);
    // Removed logging related to draftSlugs.size
  }
}

