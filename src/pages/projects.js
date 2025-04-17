import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const markdown = data.markdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <h1>{markdown.frontmatter.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  )
}

export default ProjectsPage

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/src/pages/projects.md$/" }) {
      html
      frontmatter {
        title
      }
    }
  }
` 