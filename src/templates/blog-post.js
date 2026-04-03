import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ScrollReveal from "../components/ScrollReveal"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article itemScope itemType="http://schema.org/Article">
        <div className="blog-post-header">
          <Link to="/blog" className="blog-post-back">&#8592; Back to blog</Link>

          {/* Optional header image */}
          {post.frontmatter.headerImage && post.frontmatter.headerImage.childImageSharp && (
            <div style={{ marginBottom: "2rem" }}>
              <GatsbyImage
                image={getImage(post.frontmatter.headerImage)}
                alt={post.frontmatter.title}
                style={{ borderRadius: "8px", maxWidth: "500px" }}
              />
            </div>
          )}

          <h1 className="blog-post-title" itemProp="headline">
            {post.frontmatter.title}
          </h1>
          <div className="blog-post-date">{post.frontmatter.date}</div>

          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="blog-post-tags">
              {post.frontmatter.tags.map(tag => (
                <Link key={tag} to={`/tags/${tag}/`}>{tag}</Link>
              ))}
            </div>
          )}
        </div>

        <ScrollReveal className="blog-post-content">
          <section
            className="prose prose-lg prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </ScrollReveal>
      </article>

      {(previous || next) && (
        <ScrollReveal as="nav" className="blog-post-nav">
          <div className="blog-post-nav-grid">
            <div>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  <span className="nav-label">Previous</span>
                  <span className="nav-title">{previous.frontmatter.title}</span>
                </Link>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  <span className="nav-label">Next</span>
                  <span className="nav-title">{next.frontmatter.title}</span>
                </Link>
              )}
            </div>
          </div>
        </ScrollReveal>
      )}
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post, site } }) => {
  const folder = post.fields?.folder;
  const slug = post.fields?.slug;
  let siteUrl = site.siteMetadata?.siteUrl || '';
  if (siteUrl.endsWith('/')) siteUrl = siteUrl.slice(0, -1);
  const imageUrl = folder ? `${siteUrl}/social-cards/${folder}.png?v=2` : undefined;
  const author = site.siteMetadata?.author?.name;
  const publishedTime = post.frontmatter?.date
    ? new Date(post.frontmatter.date).toISOString()
    : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": post.frontmatter.title,
        "description": post.frontmatter.description || post.excerpt,
        "author": { "@type": "Person", "name": author },
        "datePublished": publishedTime,
        "publisher": { "@type": "Organization", "name": "Quantably", "url": siteUrl },
        ...(imageUrl ? { "image": imageUrl } : {}),
        ...(slug ? { "mainEntityOfPage": `${siteUrl}/blog${slug}` } : {}),
      },
      ...(slug ? [{
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog/` },
          { "@type": "ListItem", "position": 3, "name": post.frontmatter.title, "item": `${siteUrl}/blog${slug}` },
        ],
      }] : []),
    ],
  }
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={imageUrl}
        twitterCardType="summary_large_image"
        pathname={slug ? `/blog${slug}` : undefined}
        type="article"
      />
      <meta name="author" content={author} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
        slug
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
