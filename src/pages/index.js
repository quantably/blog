import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.latestBlogPosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-above">AI Consulting</div>
        <h1><em>"It's just pattern matching."</em> Your competitors don't care.</h1>
        <p className="hero-body">They're too busy using it to ship faster, serve more clients, and do more with less. I help companies skip the AI debate and start getting results.</p>
        <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="hero-cta">Schedule a conversation &#8594;</a>
        <div className="hero-bullets">
          <span>No long-term commitment</span>
          <span>Results in 6 weeks or less</span>
          <span>15 years across IBM, Experian & startups</span>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-label">Testimonials</div>
        <div className="t-list">
          <div className="t-item">
            <div className="t-quote">"What makes Peter unique is how he applies lean startup principles to AI. Build fast, test with users, iterate on feedback, not months of theoretical planning."</div>
            <div>
              <div className="t-name">Richard Ahlfeld</div>
              <div className="t-role">CEO & Founder, Monolith</div>
            </div>
          </div>
          <div className="t-item">
            <div className="t-quote">"Peter works hard to ensure he understands the context of the work. He's capable, conscientious, and collaborative, which is why we continue to work with him."</div>
            <div>
              <div className="t-name">Andy Watson</div>
              <div className="t-role">Chief Product Officer, Strategic Blue</div>
            </div>
          </div>
          <div className="t-item">
            <div className="t-quote">"A terrific collaborator who helped us quickly bring our genAI ideas to life. Patient, pragmatic and adaptable, he effectively communicates choices and challenges."</div>
            <div>
              <div className="t-name">Matt Walton</div>
              <div className="t-role">Fractional Product Leader</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / Problem */}
      <section className="story">
        <div className="section-label">The Problem</div>
        <h2>Don't get distracted by the wrong conversation</h2>
        <div className="story-grid">
          <div>
            <p>One camp says AI will replace everyone. The other says it's overhyped nonsense. Meanwhile, the companies actually winning aren't in either camp. They're too busy deploying.</p>
            <p>"Is AI truly intelligent?" is a perfectly valid question. But spending too long on it can mean losing sight of the practical value AI delivers right now. It doesn't need to be perfect to be useful.</p>
          </div>
          <div>
            <p>That shift in framing recently helped one client scale their coaching platform beyond capacity constraints in six weeks, and another validate a completely new AI-driven market offering in the same timeframe.</p>
            <div className="accent-text">The gap isn't budget or talent. It's the willingness to experiment fast, learn what works, and double down.</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="section-label">Services</div>
        <h2>Two Ways to Work Together</h2>
        <p className="services-sub">Whether you need it built or need your team equipped to build it themselves.</p>

        <div className="modes-grid">
          <div className="mode-card">
            <div className="mode-label">Mode 01</div>
            <h3>Build</h3>
            <p className="mode-desc">You describe the outcome. I own the execution: architecture, implementation, and deployment into your environment. You get a working AI product.</p>
            <ul>
              <li>A working AI product, not a slide deck</li>
              <li>Shipped into your environment, production-ready</li>
              <li>Your team doesn't need to build or maintain it</li>
              <li>Fixed scope, clear timeline</li>
            </ul>
            <div className="mode-fit">Best for: Companies without in-house AI capability who need a specific product shipped.</div>
          </div>
          <div className="mode-card">
            <div className="mode-label">Mode 02</div>
            <div className="mode-retainer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6"/>
                <path d="M21.34 13a10 10 0 1 1-2.84-8.36L21.5 8"/>
              </svg>
              <span>Monthly retainer</span>
            </div>
            <h3>Enable</h3>
            <p className="mode-desc">Sometimes a capable team doesn't need someone to do the work. They need someone nudging in the right direction, providing regular checkpoints, and keeping them sharp as the landscape shifts under their feet.</p>
            <ul>
              <li>Your team uses the latest tools, configured securely</li>
              <li>AI costs stay lean as usage scales</li>
              <li>Clear paths from experimentation to live automation</li>
              <li>No time lost on infrastructure or DevOps</li>
              <li>Answers when you need them, via Slack or your preferred channel</li>
            </ul>
            <div className="mode-fit">Best for: Teams who want to move fast with AI without managing the infrastructure themselves.</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div className="section-label">About</div>
        <div className="about-intro">
          <div className="about-photo">
            <StaticImage
              src="../images/profile-pic.jpg"
              alt="Peter Wooldridge"
              width={240}
              height={240}
              formats={["auto", "webp", "avif"]}
              placeholder="none"
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2>Hey, I'm Peter</h2>
            <p>I've spent 15 years in tech across IBM, Elsevier, Experian, and the startup ecosystem, where I scaled teams from 3 to 20+ people across data science, ML engineering, software development, and DevOps. My job is to help you start simple, prove value quickly, and focus on what actually solves your problems.</p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">Now</div>
            <div className="timeline-text">Independent AI consultant. Helping companies ship AI products fast.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020 - 2024</div>
            <div className="timeline-text">Startup ecosystem. Scaled teams from 3 to 20+, through to acquisition.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2015 - 2020</div>
            <div className="timeline-text">Experian. Data science & ML engineering leadership.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2012 - 2015</div>
            <div className="timeline-text">Elsevier. Building data products at scale.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2009 - 2012</div>
            <div className="timeline-text">IBM. Where it all started.</div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="posts">
        <div className="section-label">Writing</div>
        <h2>Recent Posts</h2>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <Link key={post.fields.slug} to={`/blog${post.fields.slug}`} className="p-item">
              <span className="p-title">{title}</span>
              <span className="p-date">{post.frontmatter.date}</span>
            </Link>
          )
        })}
        <Link to="/blog" className="posts-link">View all articles &#8594;</Link>
      </section>

      {/* CTA Footer */}
      <div className="cta-section">
        <h2>Get in touch.</h2>
        <div className="cta-links">
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a href="https://linkedin.com/in/peterwooldridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const Head = ({ data }) => <Seo title={data.site.siteMetadata?.title || "Quantably"} />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    indexPageContent: markdownRemark(fileAbsolutePath: { regex: "/src/pages/index.md$/" }) {
      html
      frontmatter {
        title
      }
    }
    latestBlogPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
      }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMM YYYY")
          title
        }
      }
    }
  }
`
