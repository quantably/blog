import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ScrollReveal from "../components/ScrollReveal"
import Seo from "../components/seo"

const MediaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="page-header">
        <h1>Media</h1>
        <p>Interviews, podcasts, and appearances.</p>
      </div>

      <ScrollReveal className="media-list">
        <div className="media-section-label">Interviews</div>

        <div className="media-item">
          <div>
            <div className="media-title">AI Career Spotlight</div>
            <p className="media-desc">An interview with Catherine Breslin where I discuss my journey into AI, leadership, meta-skills and more.</p>
          </div>
          <a
            href="https://www.linkedin.com/pulse/ai-career-spotlight-peter-wooldridge-catherine-breslin-hfzje/"
            target="_blank"
            rel="noopener noreferrer"
            className="media-link"
          >
            Read on LinkedIn
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>

        <div className="media-cta">
          <p>Interested in having me on your podcast or at your event?</p>
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer">Get in touch &#8594;</a>
        </div>
      </ScrollReveal>
    </Layout>
  )
}

export default MediaPage

export const Head = () => <Seo title="Media" description="Podcasts and appearances on AI, teams, and building products." pathname="/media/" />

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
