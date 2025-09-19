import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Zap, Clock, Shield } from "lucide-react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

// Note: Layout is applied globally via wrapPageElement

// This component now acts as a wrapper that queries markdown
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const mainContent = data.indexPageContent
  const posts = data.latestBlogPosts.nodes

  return (
    <Layout location={location} title={siteTitle}>
      {/* Hero Section - Ali-style Background */}
      <section className="pt-20 pb-32 relative overflow-hidden" style={{ backgroundColor: '#0F182B' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#213FDD' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21ABF9' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21D2F9' }}></div>
        </div>
        
        {/* Curved bottom cutout */}
        <div className="absolute -bottom-12 left-0 right-0 h-32 bg-white" style={{
          clipPath: 'ellipse(80% 100% at 50% 100%)'
        }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI that delivers ROI in weeks, not months
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I help companies reimagine their business with AI-native products and ship them fast.
            Technical depth meets product thinking.
          </p>
          <a
            href="https://cal.com/quantably/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Let's talk AI
          </a>
        </div>
      </section>


      {/* About Section - White Background */}
      <section id="story" className="bg-white py-12 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-12">Your Path to AI Success</h2>

            <div className="max-w-3xl mx-auto text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Reading about AI these days, you might feel both excited and overwhelmed. Everyone's talking about 'the AI transformation', but few are showing the actual path.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The issue isn't whether AI can deliver value - it clearly can. The real issue is identifying which specific applications will drive results for your particular business. And that means cutting through the noise.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Most companies are drowning in AI information and this overwhelm often leads to analysis paralysis. What separates the leaders from the followers isn't their AI budget or technical expertise, but their approach: rapid experimentation. Instead of perfect planning, they build, measure, learn, and adapt using real feedback. This methodology recently enabled one client I worked with to scale their coaching platform beyond capacity constraints in just 6 weeks, and helped another company validate a completely new AI-driven market offering in the same timeframe.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                These results aren't outliers - they're what's possible when you focus on the right AI applications for your specific challenges.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                The path forward isn't about more AI knowledge - it's about focused action on the right problems.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                If you're navigating these challenges and want to discuss specific approaches, let's talk.
              </p>

              <div className="text-center mt-8">
                <a
                  href="https://cal.com/quantably/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section - Dark Background */}
      <section id="testimonials" className="py-20 relative overflow-hidden scroll-mt-24" style={{ backgroundColor: '#0F182B' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#213FDD' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#21ABF9' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#21D2F9' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">What People Say</h2>
            <p className="text-xl text-gray-300">Real results from real partnerships</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Richard's testimonial */}
            <div className="bg-white/10 backdrop-blur-sm shadow-2xl shadow-black/20 rounded-2xl p-8 ring-1 ring-white/10">
              <div className="flex items-start mb-6">
                <svg className="w-8 h-8 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div>
                  <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                    "What makes Peter unique is how he applies lean startup principles to AI. Build fast, test with users, iterate on feedback - not months of theoretical planning. That methodology is what turns AI experiments into valuable products."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Richard Ahlfeld</p>
                    <p className="text-gray-300 text-sm">CEO & Founder, Monolith</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Andy's testimonial */}
            <div className="bg-white/10 backdrop-blur-sm shadow-2xl shadow-black/20 rounded-2xl p-8 ring-1 ring-white/10">
              <div className="flex items-start mb-6">
                <svg className="w-8 h-8 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div>
                  <p className="text-lg text-gray-100 mb-4 leading-relaxed">
                    "Peter works hard to ensure he understands the context of the work he is doing - in our case, building a key component of a new product. He's capable, conscientious, and collaborative, which is why we continue to work with him. He's proactive, delivers great results, and manages to translate the complex work he is doing into language even I can understand."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Andy Watson</p>
                    <p className="text-gray-300 text-sm">Chief Product Officer, Strategic Blue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to implementation - choose your starting point. We build in phases, starting simple and scale based on results.
            </p>
          </div>

          {/* Step 1: Discovery */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Discovery Workshop</h3>
              <p className="text-gray-600">Start here if you're not sure what to build or where to prioritise</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div></div>
              <div className="relative bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 border-2 border-blue-200/60 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-1 hover:border-blue-300/80 transition-all duration-500 group overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-blue-300"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-blue-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-blue-300"></div>
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-10 h-10 text-blue-700" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">Use Case Workshop</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-4">$3,000</div>
                  <p className="text-base text-gray-700 font-bold leading-relaxed mb-2">Delivered within two weeks</p>
                  <p className="text-base text-blue-800 font-medium leading-relaxed mb-8">Go from AI overwhelm to having a clear strategy, prioritised roadmap, and concrete next steps to begin your AI journey.</p>

                  <div className="text-left space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-800 leading-relaxed">Group workshop with your team</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-800 leading-relaxed">Up to three independent interviews with team members</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-800 leading-relaxed">Consolidated findings report with prioritisation and roadmap</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-gray-800 leading-relaxed">Technology recommendations based on team composition</span>
                    </div>
                  </div>


                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* Divider with branching text */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="bg-white px-4 text-gray-500 text-sm font-medium">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <p className="text-gray-600 text-lg">
              <strong>Already know what to build?</strong> Jump straight to the implementation paths below
            </p>
          </div>

          {/* Step 2: Implementation Path */}
          <div>
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Implementation Paths</h3>
              <p className="text-gray-600">We'll build one of these three types of AI solutions based on your specific needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Conversational Agent */}
              <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-2 border-emerald-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-1 hover:border-emerald-300/80 transition-all duration-500 group overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-emerald-300"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-emerald-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-emerald-300"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                        {/* Robot head */}
                        <rect x="7" y="5" width="10" height="8" rx="2" />
                        {/* Eyes */}
                        <circle cx="10" cy="8" r="1" fill="white"/>
                        <circle cx="14" cy="8" r="1" fill="white"/>
                        {/* Smile */}
                        <path d="M9.5 10.5 Q12 12.5 14.5 10.5" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
                        {/* Antenna */}
                        <circle cx="12" cy="3" r="1"/>
                        <line x1="12" y1="4" x2="12" y2="5" stroke="currentColor" strokeWidth="1"/>
                        {/* Body */}
                        <rect x="8" y="13" width="8" height="6" rx="1"/>
                        {/* Arms */}
                        <rect x="5" y="14" width="2" height="3" rx="1"/>
                        <rect x="17" y="14" width="2" height="3" rx="1"/>
                        {/* Legs */}
                        <rect x="9" y="19" width="2" height="3" rx="1"/>
                        <rect x="13" y="19" width="2" height="3" rx="1"/>
                      </svg>
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-800 transition-colors">Conversational Agent</h4>
                    <p className="text-base text-gray-700 font-medium leading-relaxed">Chat interfaces that help users complete tasks</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-emerald-800">Examples:</span> Customer support chatbot, internal Q&A assistant, document search
                    </div>
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-emerald-800">Benefits:</span> Reduce support workload • 24/7 availability • Instant knowledge access
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Artifact */}
              <div className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 border-2 border-purple-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-100/50 hover:-translate-y-1 hover:border-purple-300/80 transition-all duration-500 group overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-purple-300"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-purple-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-purple-300"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors">Research Generator</h4>
                    <p className="text-base text-gray-700 font-medium leading-relaxed">AI that creates reports, summaries, and analysis</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-purple-800">Examples:</span> Market research reports, financial analysis, content generation
                    </div>
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-purple-800">Benefits:</span> Consistent quality • Hours of work in minutes • Data-driven insights
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Automation */}
              <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-200/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-1 hover:border-orange-300/80 transition-all duration-500 group overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-orange-300"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-orange-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-orange-300"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <svg className="w-10 h-10 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-800 transition-colors">Workflow Automation</h4>
                    <p className="text-base text-gray-700 font-medium leading-relaxed">Behind-the-scenes AI that handles processes</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-orange-800">Examples:</span> Email processing, data extraction, invoice handling
                    </div>
                    <div className="text-base text-gray-800 leading-relaxed">
                      <span className="font-bold text-orange-800">Benefits:</span> Eliminate manual tasks • Error-free processing • Scale without hiring
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Single CTA Button */}
            <div className="text-center mt-12 mb-16">
              <a
                href="https://cal.com/quantably/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-heading font-bold text-xl px-12 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Let's Choose Your Starting Point
              </a>
            </div>

          </div>
        </div>
      </section>
      {/* About Section - Dark Background */}
      <section id="about" className="py-20 relative overflow-hidden scroll-mt-24" style={{ backgroundColor: '#0F182B' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#213FDD' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#21ABF9' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#21D2F9' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-12">About</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="relative">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <StaticImage
                    src="../images/profile-pic.jpg"
                    alt="Peter Wooldridge"
                    className="w-full h-full"
                    width={288}
                    height={288}
                    formats={["auto", "webp", "avif"]}
                    placeholder="none"
                    quality={100}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-handwriting text-white transform -rotate-2">
                Hey, I'm Peter!
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-left space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I've spent 15 years in tech across IBM, Elsevier, Experian, and the startup ecosystem, where I scaled teams from 3 to 20+ people across data science, ML engineering, software development, and DevOps. My experience spans the full AI lifecycle - from research and machine learning to engineering, infrastructure, and forward-deployed customer work. This gives me a unique perspective on not just prototyping solutions but getting them to market and scaling them. After several long stints at companies, I realised I wanted to make an impact across more businesses. Going independent was the natural next step.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My job is to help you start simple, prove value quickly, and focus on what actually solves your problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section - White */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Posts</h2>
            <p className="text-xl text-gray-600">Insights on AI, leadership, and building products that work</p>
          </div>
          
          <div className="space-y-6">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <div key={post.fields.slug} className="group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border border-gray-200 hover:border-gray-300">
                    <div className="flex-1">
                      <Link to={`/blog${post.fields.slug}`} className="text-xl font-medium text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">
                        {title}
                      </Link>
                    </div>
                    <div className="text-sm text-gray-500 mt-3 md:mt-0 md:ml-6 md:flex-shrink-0 font-mono">
                      {post.frontmatter.date}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-lg transition-colors duration-200">
              View all articles 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => <Seo title={data.indexPageContent.frontmatter.title} />

// Add page query to fetch markdown content
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # Query for the specific index.md file for the main content
    indexPageContent: markdownRemark(fileAbsolutePath: { regex: "/src/pages/index.md$/" }) {
      html
      frontmatter {
        title
      }
    }
    # Query for the 5 most recent blog posts
    latestBlogPosts: allMarkdownRemark(
      # Remove the hardcoded isDraft filter
      filter: {
        fileAbsolutePath: { regex: "/content/blog/" }
      }
      # Sort by date descending
      sort: { frontmatter: { date: DESC } }
      # Limit to 5 posts
      limit: 5
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
