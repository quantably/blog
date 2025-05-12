import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {/* Move Back Button Here (Above Title/Date) */}
          <div style={{ marginBottom: '1rem' }}> {/* Adjust margin as needed */}
            <button 
              onClick={() => window.history.back()} 
              style={{ background: 'none', border: 'none', padding: 0, color: 'var(--color-primary)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              ← Go back
            </button>
          </div>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {/* Display Tags if they exist */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div style={{ marginTop: '-0.5rem', marginBottom: '1rem', fontSize: 'var(--fontSize-0)' }}>
              Tags:{` `}
              {post.frontmatter.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <Link to={`/tags/${tag}/`} style={{ marginRight: '0.5rem' }}>
                    {tag}
                  </Link>
                  {/* Add comma separator except for the last tag - adjust if needed */}
                  {/* {index < post.frontmatter.tags.length - 1 ? ', ' : ''} */}
                </React.Fragment>
              ))}
            </div>
          )}
        </header>
        <section
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr className="mt-8" />
        <footer>
          {/* Remove Bio component */}
          {/* <Bio /> */}
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post, site } }) => {
  const folder = post.fields?.folder;
  let siteUrl = site.siteMetadata?.siteUrl || '';
  // Remove trailing slash if present
  if (siteUrl.endsWith('/')) siteUrl = siteUrl.slice(0, -1);
  const imageUrl = folder ? `${siteUrl}/social-cards/${folder}.png` : undefined;
  const author = site.siteMetadata?.author?.name;
  // Use the raw date from frontmatter for ISO string
  const publishedTime = post.frontmatter?.date
    ? new Date(post.frontmatter.date).toISOString()
    : undefined;
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={imageUrl}
        twitterCardType="summary_large_image"
      />
      <meta name="author" content={author} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        author {
          name
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        folder
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        summary
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
