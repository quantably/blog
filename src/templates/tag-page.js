import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TagPageTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { nodes: posts, totalCount } = data.allMarkdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`

  return (
    <Layout location={location} title={`${tag} | ${siteTitle}`}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to blog
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            {tag}
          </h1>
          <p className="text-xl text-gray-300">
            {tagHeader}
          </p>
        </div>
        
        <div className="space-y-6">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <article
                key={post.fields.slug}
                className="group"
                itemScope
                itemType="http://schema.org/Article"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30">
                  <div className="flex-1">
                    <Link 
                      to={`/blog${post.fields.slug}`} 
                      itemProp="url"
                      className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors duration-200"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                    {(post.frontmatter.description || post.excerpt) && (
                      <p 
                        className="text-gray-300 mt-2 text-sm"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-400 mt-3 md:mt-0 md:ml-6 md:flex-shrink-0 font-mono">
                    {post.frontmatter.date}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            View all posts
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default TagPageTemplate

// Use page context variable $tag to filter posts
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
      # Filter by the tag passed in context AND ensure it's a blog post
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
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`

// Add Head export for SEO
export const Head = ({ pageContext }) => {
  const { tag } = pageContext
  return <Seo title={`Posts tagged "${tag}"`} />
} 