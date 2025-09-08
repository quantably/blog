/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          # social { # Commented out
          #  twitter # Commented out
          # } # Commented out
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social // Commented out

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={75}
        height={75}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            15 years shipping AI. From IBM to startups. Led teams of 20+, built solo too. Now I turn AI potential into products people use.
          </p>
          <p>
            <strong>How I work:</strong> Build fast. Test with users. Iterate on data. No drawn-out discovery. No junior armies. Just senior execution.
          </p>
          <p>
            <strong>Recent builds:</strong> Predictive analytics for FinOps. Conversational AI for career coaching. Both live in under 6 weeks.
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
