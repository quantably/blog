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
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Problem/Attention Section - White */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8">The AI Implementation Challenge</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                When I first started doing outreach for going independent, the companies I spoke to knew there was an AI revolution happening but felt very ill-equipped with how to actually get started. Here's what I kept hearing:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {/* Challenge 1 */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>"How do I actually integrate AI into my product set?</strong> Should I be creating bolt-ons or should I be re-designing and implementing products with an AI-first approach?"
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Challenge 2 */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>"I keep seeing LinkedIn posts claiming they've outsourced entire departments</strong> with 'agentic workflows', but when I try them out, they're overfit to specific scenarios and don't deliver the promised value."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Challenge 3 */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>"When I reach out to consultancies, it's difficult to find someone</strong> who can work strategically but also execute and deliver technically."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Challenge 4 */}
              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>"We have no shortage of problems and use cases</strong> which we know can be disrupted by AI, but we don't know where to start and how to prioritise our efforts."
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="text-center">
              <p className="text-xl font-medium text-gray-900">
                I felt there must be a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {/* About Section - White Background */}
      <section className="bg-white py-12">        
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-12">My Story</h2>
            
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
              <div className="text-3xl md:text-4xl font-handwriting text-gray-900 transform -rotate-2">
                Hey, I'm Peter!
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-left space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I took an unusual path into AI. Started with a <strong>mathematics degree</strong>, then spent 3 years on a software development graduate scheme in <strong>2010</strong>. I loved programming, but missed the mathematical challenge. So I decided to combine both - and dove into data science and machine learning.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Those early days were brutal. <strong>Hadoop, MapReduce, distributed computing</strong> - everything required massive complexity just to process data. But it taught me two things that still drive my work today: how to build systems that scale, and that <strong>data quality beats fancy algorithms</strong> every time.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Fast forward through years of enterprise work, leading teams of <strong>20+ engineers</strong>. I learned that great leadership isn't about being the smartest person in the room - it's about <strong>clarity of vision</strong> and knowing when to step in (and when not to). But I kept seeing the same pattern: brilliant technical solutions failing because of poor communication with the business.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The breaking point came when I watched yet another AI project stall for months because expectations weren't set correctly. The technology worked perfectly, but the business felt alienated. That's when I realised: <strong>the real value isn't in being a better programmer</strong> (AI tools are levelling that playing field anyway). It's in bridging the gap between technical complexity and business value.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                So I went independent. Now I work as your <strong>AI Product Partner</strong> - combining technical depth with product thinking. My recent projects include integrating AI into a FinOps platform and building a conversational agent for a top tier VC. I focus on pragmatic choices and transparent collaboration, not corporate fluff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Ali-style Background */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0F182B' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#213FDD' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21ABF9' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21D2F9' }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Our Approach</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lean startup principles applied to AI development
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ship Early and Be Lean */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Ship Early & Be Lean</h3>
              <p className="text-gray-300 leading-relaxed">
                Build working products in weeks, not months. Focus on core functionality that delivers immediate value.
              </p>
            </div>
            
            {/* Iterate with Customers */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Iterate with Customers</h3>
              <p className="text-gray-300 leading-relaxed">
                Test with real users early and often. Use feedback to refine and improve rather than perfect in isolation.
              </p>
            </div>
            
            {/* AI-Native from Ground Up */}
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Native from Ground Up</h3>
              <p className="text-gray-300 leading-relaxed">
                Reimagine workflows with AI at the core, not bolt-on features. Build for the AI-first future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - White */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">What People Say</h2>
            <p className="text-xl text-gray-600">Real results from real partnerships</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Richard's testimonial */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-start mb-6">
                <svg className="w-8 h-8 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div>
                  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    "What makes Peter unique is how he applies lean startup principles to AI. Build fast, test with users, iterate on feedback - not months of theoretical planning. That methodology is what turns AI experiments into valuable products."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Richard Ahlfeld</p>
                    <p className="text-gray-600 text-sm">CEO & Founder, Monolith</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Andy's testimonial */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="flex items-start mb-6">
                <svg className="w-8 h-8 text-emerald-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <div>
                  <p className="text-lg text-gray-800 mb-4 leading-relaxed">
                    "Capable, conscientious and collaborative are just three of the reasons we continue to work with him. Peter works hard to ensure he understands the context of the work he is doing, in our case building a key component of a new product. He is proactive, delivers great results and manages to translate the complex work he is doing into language even I can understand."
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">Andy Watson</p>
                    <p className="text-gray-600 text-sm">Chief Product Officer, Strategic Blue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Ali-style Background */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0F182B' }}>
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#213FDD' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21ABF9' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#21D2F9' }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right level of partnership for your AI journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Use Case Discovery */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Use Case Discovery</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Starts at £1,500</div>
                <p className="text-gray-600">Delivered in 2 weeks</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Companies that need help prioritising possible AI avenues. Have lots of ideas but need clarity on where to get started and a clear direction for AI.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI opportunity audit</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">ROI projections</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Implementation roadmap</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Team capability assessment</span>
                </div>
              </div>
              
              <a
                href="https://cal.com/quantably/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors block"
              >
                Get Started
              </a>
            </div>

            {/* AI Agent Builder */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-emerald-200 hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Alpha Release</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <p className="text-gray-600">Testing the waters • &lt;100 users</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Businesses testing AI disruption with early adopters. Need to validate market fit before scaling up to enterprise deployment.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">MVP AI product development</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Basic user testing & feedback</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Proof of concept validation</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">6-8 weeks to product live</span>
                </div>
              </div>
              
              <a
                href="https://cal.com/quantably/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors block"
              >
                Get Started
              </a>
            </div>

            {/* ML Product Development */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Production Scale</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <p className="text-gray-600">Enterprise-ready • High throughput</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enterprises ready for large-scale AI deployment. Need bulletproof reliability, high throughput, and 24/7 monitoring for mission-critical applications.
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Production-grade architecture & testing</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Enterprise-grade monitoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">High-throughput optimization</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">24/7 reliability & support</span>
                </div>
              </div>
              
              <a
                href="https://cal.com/quantably/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-6 rounded-lg font-medium transition-colors block"
              >
                Get Started
              </a>
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
