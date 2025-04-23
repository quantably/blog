import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

// Note: Layout is applied globally via wrapPageElement

// This component now acts as a wrapper that queries markdown
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const mainContent = data.indexPageContent
  const posts = data.latestBlogPosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <section dangerouslySetInnerHTML={{ __html: mainContent.html }} />

      <Bio />
      
      <hr style={{marginBottom: '2rem'}} />

      <section>
        <h2>Recent Posts</h2>
        <table className="table-teal">
          <thead>
            <tr>
              <th className="th-teal">Date</th>
              <th className="th-teal">Title</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <tr key={post.fields.slug} className="tr-teal">
                  <td className="td-teal td-date">
                    {post.frontmatter.date}
                  </td>
                  <td className="td-teal td-title">
                    <Link to={`/blog${post.fields.slug}`} itemProp="url">
                      {title}
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Link to="/blog">See all posts</Link>
      </section>
    </Layout>
  )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => <Seo title={data.indexPageContent.frontmatter.title} />

// Add page query to fetch markdown content
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # Query for the specific index.md file for the main content
    indexPageContent: markdownRemark(fileAbsolutePath: { regex: "/src/pages/index.md$/" }) {
      html
      frontmatter {
        title
      }
    }
    # Query for the 5 most recent blog posts
    latestBlogPosts: allMarkdownRemark(
      # Remove the hardcoded isDraft filter
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
      }
      # Sort by date descending
      sort: { frontmatter: { date: DESC } }
      # Limit to 5 posts
      limit: 5
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
