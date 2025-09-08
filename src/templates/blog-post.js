import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
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

        <article
          className="prose prose-lg prose-invert max-w-none"
          itemScope
          itemType="http://schema.org/Article"
        >
          {/* Optional header image */}
          {post.frontmatter.headerImage && post.frontmatter.headerImage.childImageSharp && (
            <div className="mb-8">
              <GatsbyImage
                image={getImage(post.frontmatter.headerImage)}
                alt={post.frontmatter.title}
                className="rounded-lg mx-auto"
                style={{ maxWidth: '500px' }}
              />
            </div>
          )}
          
          <header className="mb-8 pb-8 border-b border-white/20">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <p className="text-gray-400 font-mono">{post.frontmatter.date}</p>
            
            {/* Display Tags if they exist */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <Link 
                      key={tag}
                      to={`/tags/${tag}/`} 
                      className="px-3 py-1 text-sm bg-emerald-600/20 text-emerald-400 rounded-full hover:bg-emerald-600/30 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </header>
          
          <section
            className="prose prose-lg prose-invert max-w-none prose-headings:font-heading prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:text-emerald-300 prose-strong:text-white prose-code:text-emerald-400 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>

        {/* Navigation */}
        {(previous || next) && (
          <nav className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                {previous && (
                  <Link 
                    to={`/blog${previous.fields.slug}`} 
                    rel="prev"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    <svg className="w-5 h-5 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-400">Previous</div>
                      <div className="font-medium">{previous.frontmatter.title}</div>
                    </div>
                  </Link>
                )}
              </div>
              
              <div className="flex-1 text-right">
                {next && (
                  <Link 
                    to={`/blog${next.fields.slug}`} 
                    rel="next"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
                  >
                    <div>
                      <div className="text-sm text-gray-400">Next</div>
                      <div className="font-medium">{next.frontmatter.title}</div>
                    </div>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
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
        headerImage {
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
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
