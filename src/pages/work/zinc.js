import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import ScrollReveal from "../../components/ScrollReveal"
import Seo from "../../components/seo"

const ZincCaseStudy = ({ location }) => {
  return (
    <Layout location={location} title="Quantably">
      {/* Header */}
      <div className="cs-header">
        <Link to="/" className="cs-back">&#8592; Back</Link>

        <div className="cs-client-logo" aria-label="Zinc VC">
          <svg width="140" height="53" viewBox="0 0 187 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#zinc-clip)">
              <path d="M67.8 25.01H46v5.45h12.45L51.72 38.17h9.35l6.73-7.71v-5.45z" fill="currentColor"/>
              <path d="M61.07 38.17H51.72L45 45.87v5.44h23.75v-5.44H54.35l6.72-7.7z" fill="currentColor" opacity="0.45"/>
              <path d="M80.25 38.17h-7.1v13.16h7.1V38.17z" fill="currentColor" opacity="0.45"/>
              <path d="M80.25 25.02h-7.1v13.15h7.1V25.02z" fill="currentColor"/>
              <path d="M80.25 15h-7.1v5.95h7.1V15z" fill="currentColor"/>
              <path d="M93.35 38.17h-7.1v13.16h7.1V38.17z" fill="currentColor" opacity="0.45"/>
              <path d="M110.5 38.17h-7.1v13.16h7.1V38.17z" fill="currentColor" opacity="0.45"/>
              <path d="M110.07 30.7a14.5 14.5 0 00-1.47-3.41 8.86 8.86 0 00-2.88-2.19c-1.22-.53-2.77-.79-4.67-.79-1.5 0-2.97.35-4.4 1.04a8.95 8.95 0 00-3.5 3.33h-.15v-3.66h-6.75v13.15h7.1v-.63c0-2.68.43-4.61 1.3-5.78.87-1.17 2.27-1.75 4.2-1.75 1.7 0 2.88.53 3.55 1.6.67 1.07 1 2.69 1 4.86v1.7h7.1v-3.02c0-1.63-.14-3.12-.42-4.46z" fill="currentColor"/>
              <path d="M122.6 38.17h-7.1c0 .13 0 .27-.01.4 0 1.97.32 3.77.95 5.42a14.08 14.08 0 002.65 4.25 12.2 12.2 0 004.12 2.77c1.62.66 3.4.99 5.33.99 3.43 0 6.25-.91 8.45-2.75 2.2-1.83 3.54-4.49 4-8l-6.85.01c-.23 1.63-.8 2.93-1.72 3.89-1.92 1.94-4.73 1.7-5.4.97-.77-.5-1.38-1.16-1.83-1.95-.45-.8-.77-1.69-.97-2.67-.2-.98-.3-1.95-.3-2.9 0-.05 0-.1.01-.14-.01-.05.01-.1.01-.14.01-.05-.01-.1-.01-.14z" fill="currentColor" opacity="0.45"/>
              <path d="M122.9 35.34c.2-1 .54-1.92 1.02-2.74.49-.83 1.11-1.51 1.88-2.04.77-.52 1.72-.79 2.85-.79 3.03 0 4.78 1.51 5.25 4.53h6.95c-.1-1.69-.5-3.16-1.2-4.4a11.53 11.53 0 00-2.72-3.1 11.82 11.82 0 00-3.8-1.96 14.93 14.93 0 00-4.43-.61c-2.1 0-3.97.36-5.6 1.07-1.63.71-3.02 1.7-4.15 2.97a14.61 14.61 0 00-2.58 4.53c-.54 1.63-.83 3.39-.87 5.27h7.1c0-.94.1-1.88.3-2.83z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="zinc-clip">
                <rect width="96" height="37" fill="white" transform="translate(45 15)"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="cs-meta">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Client</span>
            <span className="cs-meta-value">Zinc VC</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Year</span>
            <span className="cs-meta-value">2025</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Duration</span>
            <span className="cs-meta-value">3 months</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Role</span>
            <span className="cs-meta-value">Solo delivery</span>
          </div>
        </div>

        <h1 className="cs-title">Scaling a Career Coaching Platform from 15 to 100 Participants</h1>
        <p className="cs-subtitle">
          Replacing manual coaching processes with 6 conversational AI agents
          for Zinc VC's Inflection Programme.
        </p>
      </div>

      {/* Content */}
      <div className="cs-content">

        {/* The Challenge */}
        <ScrollReveal className="cs-section">
          <h2>The Challenge</h2>
          <p>
            Zinc VC runs the Inflection Programme, a fellowship for experienced
            mid-career professionals looking to redirect their careers toward
            mission-driven impact. The programme had been running successfully
            with around 15 participants, relying on manual coaching sessions
            and administrative processes.
          </p>
          <p>
            As demand grew, Zinc wanted to scale to 100 participants — but the
            existing manual approach simply wouldn't work at that volume. They
            needed to maintain the quality and personalisation of the coaching
            experience while dramatically reducing the per-participant cost and
            effort.
          </p>
        </ScrollReveal>

        {/* The Approach */}
        <ScrollReveal className="cs-section">
          <h2>The Approach</h2>
          <p>
            Rather than building a monolithic platform, I designed a system of
            specialised conversational AI agents — each handling a distinct part
            of the coaching workflow. This agent-based architecture meant each
            component could be developed, tested, and refined independently.
          </p>
          <p>
            All 6 agents were built in N8N, alongside an orchestration workflow
            that routed incoming messages to the right agent. N8N's visual
            workflow builder meant Zinc's team could understand and modify agent
            behaviours without needing development support.
          </p>
        </ScrollReveal>

        {/* What Was Built */}
        <ScrollReveal className="cs-section">
          <h2>What Was Built</h2>
          <div className="cs-extras">
            <p>6 AI agents specific to each stage of the programme</p>
            <p>Annotation dashboard to review conversation traces and evaluate efficacy of the system</p>
            <p>Embedded into Circle's authentication system</p>
            <p>Conversation interface embedded within the Circle platform</p>
            <p>Recommendation engine for suggesting relevant resources based on participant progress</p>
          </div>
        </ScrollReveal>

        {/* Technical Architecture */}
        <ScrollReveal className="cs-section">
          <h2>Technical Architecture</h2>
          <ul className="cs-tech-list">
            <li className="cs-tech-item">
              <div className="cs-tech-name">N8N</div>
              <p className="cs-tech-reason">
                All 6 agents and the orchestration workflow built here. Visual
                debugging and easy modification by non-technical team members.
              </p>
            </li>
            <li className="cs-tech-item">
              <div className="cs-tech-name">Airtable</div>
              <p className="cs-tech-reason">
                Backend data store for all agents. Already familiar to the
                team — no migration needed.
              </p>
            </li>
            <li className="cs-tech-item">
              <div className="cs-tech-name">Circle API</div>
              <p className="cs-tech-reason">
                Agents posted on participants' behalf to Zinc's existing
                community platform.
              </p>
            </li>
            <li className="cs-tech-item">
              <div className="cs-tech-name">Netlify</div>
              <p className="cs-tech-reason">
                Hosted the annotation dashboard — a web app for exploring
                conversation traces and analysing agent responses.
              </p>
            </li>
          </ul>
        </ScrollReveal>

        {/* Results */}
        <ScrollReveal className="cs-section">
          <h2>Results</h2>
          <div className="cs-results-grid">
            <div className="cs-metric">
              <div className="cs-metric-value">~100</div>
              <div className="cs-metric-label">Participants</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-value">6</div>
              <div className="cs-metric-label">AI Agents</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-value">3 mo</div>
              <div className="cs-metric-label">Timeline</div>
            </div>
            <div className="cs-metric">
              <div className="cs-metric-value">Solo</div>
              <div className="cs-metric-label">Delivery</div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CTA */}
      <ScrollReveal className="cs-cta">
        <h2>Have a similar challenge?</h2>
        <div className="cs-cta-links">
          <a href="https://cal.com/quantably/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a href="https://linkedin.com/in/peterwooldridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </ScrollReveal>
    </Layout>
  )
}

export default ZincCaseStudy

export const Head = () => (
  <Seo
    title="Zinc VC — Inflection Programme"
    description="How 6 conversational AI agents scaled a career coaching platform from 15 to 100 participants in 3 months."
    pathname="/work/zinc/"
  />
)
