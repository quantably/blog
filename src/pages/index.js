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
        <h1>AI lets you build <em>anything.</em> I help you ship the <em>right</em> AI products.</h1>
        <p className="hero-body">The barrier to building has never been lower. The barrier to choosing has never been higher. I bring the focus.</p>
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

      {/* Services */}
      <ScrollReveal as="section" id="services" className="services">
        <div className="section-label">Services</div>
        <h2>Ways to Work Together</h2>

        <ScrollReveal className="modes-grid" staggerChildren>
          <div className="mode-card">
            <h3>Strategy Workshop</h3>
            <p className="mode-desc">A half-day workshop plus write-up to help you:</p>
            <ul>
              <li>Clear picture of where AI fits in your business</li>
              <li>A prioritised roadmap, not a hundred ideas</li>
              <li>Aligned to your goals, not the hype cycle</li>
            </ul>
            <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="mode-cta">Learn more &#8594;</a>
          </div>
          <div className="mode-card">
            <h3>Advisory</h3>
            <p className="mode-desc">Regular checkpoints to keep your AI efforts on track.</p>
            <ul>
              <li>Know which tools and use cases are worth your time</li>
              <li>Your team owns the execution, I keep them on track</li>
              <li>Fast answers when they hit technical blockers</li>
            </ul>
            <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="mode-cta">Learn more &#8594;</a>
          </div>
          <div className="mode-card">
            <h3>Build</h3>
            <p className="mode-desc">A working AI product, shipped into your environment.</p>
            <ul>
              <li>Go from idea to production in weeks, not months</li>
              <li>Conversational apps, agents, automations</li>
              <li>Your team doesn't need to build or maintain it</li>
            </ul>
            <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="mode-cta">Learn more &#8594;</a>
          </div>
          <div className="mode-card">
            <h3>Fractional / Interim CTO</h3>
            <p className="mode-desc">I embed in your team as a technical owner within the business.</p>
            <ul>
              <li>A product roadmap you can execute</li>
              <li>Team processes adapted for the AI era</li>
              <li>Support with hiring, funding rounds, and scaling</li>
            </ul>
            <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer" className="mode-cta">Learn more &#8594;</a>
          </div>
        </ScrollReveal>
      </ScrollReveal>

      {/* Work */}
      <ScrollReveal as="section" id="case-studies" className="work">
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

      </ScrollReveal>

      {/* About */}
      <ScrollReveal as="section" id="about" className="about">
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
            <div className="timeline-year">2025 - Now</div>
            <div className="timeline-text">Founded Quantably, a high-touch AI consultancy focused on helping companies build the right AI products.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2020 - 2025</div>
            <div className="timeline-text">Monolith AI. Head of Data Science to Director of AI. Scaled teams from 3 to 20+, through to acquisition.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2018 - 2019</div>
            <div className="timeline-text">Experian. AI for financial transaction categorisation at scale.</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2015 - 2018</div>
            <div className="timeline-text">Elsevier. AI across 500+ academic journals.</div>
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
