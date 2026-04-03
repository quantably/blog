import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import ScrollReveal from "../components/ScrollReveal"
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
      <ScrollReveal as="section" className="testimonials">
        <div className="section-label">Testimonials</div>
        <ScrollReveal className="t-list" staggerChildren>
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
        </ScrollReveal>
      </ScrollReveal>

      {/* Story / Problem */}
      <ScrollReveal as="section" className="story">
        <div className="section-label">Results</div>
        <h2>Real results, not roadmaps.</h2>
        <div className="story-grid">
          <div>
            <p>I helped one client scale from 15 to 100 participants without adding headcount. Another validated a new market offering in six weeks.</p>
          </div>
          <div>
            <div className="accent-text">The companies winning with AI aren't the ones with the biggest budgets — they're the ones willing to deploy fast and learn. That's the gap I help you close.</div>
          </div>
        </div>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal as="section" className="services">
        <div className="section-label">Services</div>
        <h2>Two Ways to Work Together</h2>
        <p className="services-sub">Whether you need it built or need your team equipped to build it themselves.</p>

        <ScrollReveal className="modes-grid" staggerChildren>
          <div className="mode-card">
            <div className="mode-label">Done-For-You</div>
            <div className="mode-price">From £15k</div>
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
            <div className="mode-label">Done-With-You</div>
            <div className="mode-price">From £2k/mo</div>
            <div className="mode-retainer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6"/>
                <path d="M21.34 13a10 10 0 1 1-2.84-8.36L21.5 8"/>
              </svg>
              <span>Monthly retainer</span>
            </div>
            <h3>Enable</h3>
            <p className="mode-desc">Your team doesn't need to be technical to benefit from AI. They need someone showing them what's possible, keeping them on track, and making sure they're using the right tools for the job.</p>
            <ul>
              <li>Use bleeding-edge AI tools safely and securely</li>
              <li>Curated guidance based on what's working right now</li>
              <li>Clear paths from experimentation to real results</li>
              <li>AI costs stay lean as usage scales</li>
              <li>Answers when you need them, via Slack or your preferred channel</li>
            </ul>
            <div className="mode-fit">Best for: Any team that wants to use AI effectively, whether they're technical or not.</div>
          </div>
        </ScrollReveal>
      </ScrollReveal>

      {/* Work */}
      <ScrollReveal as="section" className="work">
        <div className="section-label">Case Studies</div>
        <div className="work-item">
          <h3 className="work-headline">Scaling coaching with AI agents</h3>
          <div className="work-meta">
            <span className="work-name">Zinc VC</span>
            <span>Solo Delivery</span>
            <span>2025</span>
            <em>Client Project</em>
          </div>
          <p className="work-desc">
            6 conversational AI agents replaced manual processes to scale a
            career coaching platform from 15 to 100 participants in 3 months.
          </p>
          <div className="work-links">
            <Link to="/work/zinc" className="work-link">Read case study &#8594;</Link>
          </div>
        </div>

        <div className="work-item">
          <h3 className="work-headline">Training app for diabetic athletes</h3>
          <div className="work-meta">
            <span className="work-name">GlucoseInsights</span>
            <span>Solo</span>
            <span>2024</span>
            <em>Creator</em>
          </div>
          <p className="work-desc">
            Multi-platform training app for Type 1 diabetic athletes, from
            concept to 100+ active users. Integrates Dexcom, Strava, Apple
            Health, Nightscout, and Tandem.
          </p>
          <div className="work-links">
            <a href="https://glucoseinsights.com/" target="_blank" rel="noopener noreferrer" className="work-link">Live site &#8599;</a>
          </div>
        </div>
      </ScrollReveal>

      {/* About */}
      <ScrollReveal as="section" className="about">
        <div className="section-label">About</div>
        <div className="about-intro">
          <div className="about-photo">
            <StaticImage
              src="../images/profile-pic.jpg"
              alt="Peter Wooldridge"
              width={240}
              height={240}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              quality={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2>Hey, I'm Peter</h2>
            <p>I've spent 15 years in tech across IBM, Elsevier, Experian, and the startup ecosystem, where I scaled teams from 3 to 20+ people across data science, ML engineering, software development, and DevOps. My job is to help you start simple, prove value quickly, and focus on what actually solves your problems.</p>
          </div>
        </div>

        <ScrollReveal className="timeline" staggerChildren>
          <div className="timeline-item">
            <div className="timeline-year">Now</div>
            <div className="timeline-text">Independent AI consultant. Helping companies ship AI products fast.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020 - 2025</div>
            <div className="timeline-text">Monolith AI. Head of Data Science to Director of AI. Scaled teams from 3 to 20+, through to acquisition.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2018 - 2019</div>
            <div className="timeline-text">Experian. ML for financial transaction categorisation at scale.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2015 - 2018</div>
            <div className="timeline-text">Elsevier. ML across 500+ academic journals.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2010 - 2015</div>
            <div className="timeline-text">IBM. Where it all started.</div>
          </div>
        </ScrollReveal>
      </ScrollReveal>

      {/* Recent Posts */}
      <ScrollReveal as="section" className="posts">
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
      </ScrollReveal>

      {/* CTA Footer */}
      <ScrollReveal className="cta-section">
        <h2>Get in touch.</h2>
        <div className="cta-links">
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a href="https://linkedin.com/in/peterwooldridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </ScrollReveal>
    </Layout>
  )
}

export default HomePage

export const Head = ({ data }) => {
  const siteUrl = data.site.siteMetadata?.siteUrl
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Quantably",
        "url": siteUrl,
      },
      {
        "@type": "ProfessionalService",
        "name": "Quantably",
        "url": siteUrl,
        "description": "Independent AI consulting. Helping companies move fast using AI.",
        "founder": {
          "@type": "Person",
          "name": "Peter Wooldridge",
          "jobTitle": "AI Consultant",
          "url": siteUrl,
        },
      },
    ],
  }
  return (
    <>
      <Seo title="Peter Wooldridge | AI Consultant" description="Hi, I'm Peter. I'm an independent AI consultant that helps companies move fast using AI." image={`${siteUrl}/social-cards/homepage.png`} twitterCardType="summary_large_image" pathname="/" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
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
