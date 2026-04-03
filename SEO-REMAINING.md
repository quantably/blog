# Remaining SEO Issues — quantably.co

Audit date: March 2026 | Initial score: 61/100
Top 5 fixes deployed March 2026 (RSS, sitemap, canonical/og:url, JSON-LD, font loading).

---

## Content: Expand Thin Posts (Critical)

- [ ] **"Stop Scaling Everything"** (~223 words) — expand to 1,000+ words with frameworks and examples, or merge into a longer post
- [ ] **"Conversational Strava"** (~595 words) — expand with technical walkthrough and implementation details
- [ ] **"Empirical AI"** (~656 words) — good thesis, needs practical examples and depth. Add external citations (claims lack linked sources)
- [ ] **"Deterministic to Probabilistic"** (~758 words) — needs more depth to meet 1,500-word topical coverage floor

## Content: Expand Thin Pages (High)

- [ ] **Media page** (~35 words) — build out with more appearances, or fold the single interview into About and remove the page
- [ ] **Zinc case study** (~280 words) — expand to 600-800+ words. Add measurable outcomes, client testimonial, challenges/lessons, before/after

## E-E-A-T Signals (High)

- [ ] **Author bylines on blog posts** — add visible byline with brief bio and link to About section
- [ ] **Privacy policy page** — required for trust signals and UK GDPR/PECR (site uses GA, offers 15k+ consulting)
- [ ] **Email contact option** — not everyone wants to book a 30-min call as first touchpoint
- [ ] **Testimonial verification** — link quotes to LinkedIn recommendations/profiles
- [ ] **Formal credentials** — mention qualifications or certifications for YMYL-adjacent consulting
- [ ] **Business address** — consider adding registered business details for B2B trust
- [ ] **More case studies + media appearances** — currently only 1 of each

## Blog Post Improvements (Medium)

- [ ] **Add `article:modified_time` meta** — currently only `article:published_time` exists
- [ ] **Add reading time estimates** — display on blog post pages
- [ ] **Add TL;DR summaries** — "what you'll learn" at top of longer posts
- [ ] **Add external citations** — "Stop Scaling Everything" references Steve Jobs with no source; "Empirical AI" claims lack benchmarks

## Site-Wide Meta (Low-Medium)

- [ ] **Add `og:site_name`** — `<meta property="og:site_name" content="Quantably">` in seo.js
- [ ] **Add `theme-color`** — `<meta name="theme-color" content="#0d0e12">` and `theme_color` in manifest
- [ ] **Fix Microdata protocol** — blog-post.js line 17: `http://schema.org` → `https://schema.org`
- [ ] **More descriptive blog listing title** — "Writing | Quantably" could be "AI Insights & Blog | Quantably"

## Schema Enhancements (Low-Medium)

- [ ] **Service schema** — for "Build" and "Enable" offerings with pricing
- [ ] **CollectionPage schema** — on `/blog/` listing page
- [ ] **Review/Testimonial schema** — for the three homepage testimonials

## AI Search Readiness (Medium)

- [ ] **Create `llms.txt`** — for AI crawler discovery
- [ ] **AI crawler directives in robots.txt** — explicit policy for GPTBot, CCBot, Google-Extended, anthropic-ai
- [ ] **Structured quotable data points** — formatted stats with sources, definition-style sentences, comparison tables, key takeaway callouts

## Performance (Medium)

- [ ] **Audit JS bundle** (490KB uncompressed / 145KB gzipped) — use `gatsby-plugin-webpack-bundle-analyser-v2`, consider Partial Hydration
- [ ] **Per-page CSS splitting** (~55KB inlined on every page) — separate Prism.js CSS to blog posts only
- [ ] **Font swap CLS** — use `size-adjust` CSS to match fallback font metrics
- [ ] **AVIF profile image** — larger than JPEG fallback (50.9KB vs 35.8KB), re-encode or remove AVIF source

## Infrastructure / Hosting (Backlog)

GitHub Pages limitations block several improvements. Migrating to Cloudflare Pages, Vercel, or Netlify would unlock:

- [ ] **Immutable caching** — hashed assets currently get 10-min cache instead of 1 year
- [ ] **Brotli compression** — 15-20% better than gzip, ~30-40KB savings
- [ ] **Security headers** — HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- [ ] **Edge redirects/functions**

## Housekeeping

- [ ] **Clean up empty blog directory** — `putting-it-on-a-mac-mini-doesnt-make-it-secure/` has no `index.md`
