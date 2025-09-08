import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MediaPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const markdown = data.markdownRemark

  return (
    <Layout location={location} title={siteTitle}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">
            {markdown.frontmatter.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interviews, podcasts, and media appearances
          </p>
        </div>
        
        <div className="space-y-6">
          {/* AI Career Spotlight */}
          <div className="group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors duration-200 mb-2">
                  AI Career Spotlight
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  An interview with Catherine Breslin where I discuss my journey into AI, leadership, meta-skills and more
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 md:flex-shrink-0">
                <a
                  href="https://www.linkedin.com/pulse/ai-career-spotlight-peter-wooldridge-catherine-breslin-hfzje/?trackingId=ZbMXcWTRSButGuiWfRKIHw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  Read interview
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium text-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
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