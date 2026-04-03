import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import ScrollReveal from "../components/ScrollReveal"
import Seo from "../components/seo"

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { nodes: posts, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <Layout location={location} title={`${tag} | ${siteTitle}`}>
      <div className="page-header">
        <h1>{tag}</h1>
        <p>{tagHeader}</p>
      </div>

      <ScrollReveal className="post-list">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Link
              key={post.fields.slug}
              to={`/blog${post.fields.slug}`}
              className="post-item"
            >
              <span className="post-title">{title}</span>
              <div className="post-meta">
                <span className="post-date">{post.frontmatter.date}</span>
              </div>
            </Link>
          )
        })}
      </ScrollReveal>
    </Layout>
  )
}

export default TagPageTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/content/blog/" }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMM YYYY")
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => {
  const { tag } = pageContext
  return <Seo title={`Posts tagged "${tag}"`} pathname={`/tags/${tag}/`} />
}
