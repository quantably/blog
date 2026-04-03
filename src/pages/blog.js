import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ScrollReveal from "../components/ScrollReveal"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <div className="page-header">
          <h1>Writing</h1>
          <p>No blog posts found.</p>
        </div>
      </Layout>
    )
  }

  // Group posts by year
  const postsByYear = {}
  posts.forEach(post => {
    const year = new Date(post.frontmatter.rawDate).getFullYear()
    if (!postsByYear[year]) postsByYear[year] = []
    postsByYear[year].push(post)
  })
  const years = Object.keys(postsByYear).sort((a, b) => b - a)

  return (
    <Layout location={location} title={siteTitle}>
      <div className="page-header">
        <h1>Writing</h1>
        <p>On AI, leadership, and building products that actually work.</p>
      </div>

      <ScrollReveal className="post-list">
        {years.map(year => (
          <React.Fragment key={year}>
            <div className="post-year">{year}</div>
            {postsByYear[year].map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <div key={post.fields.slug} className="post-item">
                  <Link to={`/blog${post.fields.slug}`} className="post-title-link">
                    <span className="post-title">{title}</span>
                  </Link>
                  <div className="post-meta">
                    {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                      <div className="post-tags">
                        {post.frontmatter.tags.map(tag => (
                          <Link key={tag} to={`/tags/${tag}/`} className="post-tag">{tag}</Link>
                        ))}
                      </div>
                    )}
                    <span className="post-date">{post.frontmatter.date}</span>
                  </div>
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </ScrollReveal>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="Writing" description="Thoughts on practical AI implementation and leadership." pathname="/blog/" />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
      }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM YYYY")
          rawDate: date
          title
          tags
        }
      }
    }
  }
`
