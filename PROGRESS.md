# Progress

## Done

- **RESICO Tax Calculator** — ISR/IVA calculator with gross-to-net and net-to-gross modes (`lib/tax-calculator.ts`, `app/calculadora-resico/`)
- **Landing page** — hero, section cluster, footer, value proposition, comparison sections
- **Blog system** — 11 hand-written blog posts (`app/blog/<slug>/`), listing page, SEO optimization per post
- **Waitlist signup** — server action (`actions/signupWaitlist.ts`) writing to Airtable + sending confirmation via Resend
- **Email system** — thank-you and update email templates (React Email), admin preview page
- **OG images** — dynamic OG Image API route (`app/api/og/route.tsx`, edge runtime)
- **Admin tools** — design preview, email preview, LinkedIn carousel, OG generator, PDF template, tax timeline component
- **SEO infrastructure** — sitemap (`app/sitemap.ts`), Google Analytics (`NEXT_PUBLIC_GA_ID`), meta tags, `llms.txt` dynamic route
- **Design system docs** — `docs/DESIGN.md`, `docs/CONTENT.md`, `AGENTS.md`
- **LinkedIn carousel creator** — admin tool for generating LinkedIn carousel posts
- **Airtable-gated PDF download** — `app/api/download-pdf/route.ts`
- **PROGRESS.md** — project state tracking file

## In-Progress — June Week 1 (Declaración Mensual)

### 1. Publish new blog post: "cuánto debo pagar de impuestos RESICO"
   - Target keyword: `cuánto debo pagar de impuestos RESICO`
   - Secondary: `calcular impuestos RESICO`, `cuanto pagar al sat`, `impuestos freelancer mexico`
   - Angle: Quick-reference table by income level (e.g., "$10k → $100 ISR, $50k → $550 ISR") + month-by-month ISR table progression + ISR vs IVA pocket impact + retentions effect + neto real per scenario
   - Fill gap: existing posts cover *process* and *timing* but not the direct "how much" answer

### 2. Update calculator messaging
   - Current framing: "Know exactly what's yours — and what belongs to the SAT" (operational)
   - Target framing: Also answer "Why do you have to pay this?" (civic/philosophical)
   - Add a "Por qué pagas impuestos" section or info box in the Guía Detallada area
   - Explain what taxes fund (infrastructure, healthcare, education) — shift from pure mechanics to purpose

### 3. Review and deepen internal links
   - Status: All 11 posts already link to calculator (100% coverage)
   - Candidates for second links: `porque-sat-no-precarga-facturas`, `pue-vs-ppd`, `exportar-servicios`, `que-es-resico` (only 1 link each)
   - Standardize bottom-of-post calculator CTA across all posts

## Blocked

- None

## KPIs (Week 1)

- Calculator: impressions and position on Google
- Declaración mensual post: impressions
