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
        <p>
          Hi, I'm Peter. I'm an AI leader with over 15 years experience building disruptive AI systems at companies like Monolith, Elsevier, Experian, and IBM). In this site, I share my experiences on real-world strategies for leading AI teams, overcoming project hurdles, leveraging modern tools, and ultimately delivering AI solutions that create tangible business value.
        </p>
      )}
    </div>
  )
}

export default Bio
