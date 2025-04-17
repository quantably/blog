import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MediaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const markdown = data.markdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{markdown.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}

export default MediaPage

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/src/pages/media.md$/" }) {
      html
      frontmatter {
        title
      }
    }
  }
` 