# Agent Guardian

Build a modern, polished B2B SaaS marketing website for [Product Name], an end-to-end

testing and AI evaluation platform for conversational AI agents (chat and voice bots

built on enterprise conversational AI platforms). Do not name any specific vendor

platform anywhere in the copy — refer to "your conversational AI agent" / "your

conversational AI platform" generically.

TARGET BUYER: engineering leaders, QA/CX ops leads, and platform owners at large

enterprises shipping LLM-powered conversational agents who need confidence that a

release won't regress in production.

CORE POSITIONING: Most teams building conversational AI can't tell if a release is

safe. Manual QA doesn't scale to LLM-driven, open-ended conversations, and traditional

test tools assume scripted click-paths, not judgment calls about whether a bot behaved

correctly. [Product Name] runs real, agent-driven conversations against your live bot,

judges the quality of every turn with LLM-based evaluation plus deterministic checks,

and makes it structurally impossible for a broken conversation to report a false green

pass.

DESIGN DIRECTION: clean, confident, modern enterprise SaaS aesthetic — think Linear /

Vercel / Retool. Indigo (#4338EC) primary accent, teal/emerald (#10B596) secondary

accent, deep navy (#0B0F1E) for dark sections (definitely the CTA band and the "how it

works" pipeline visual). Generous whitespace, rounded-xl cards, subtle shadows. No

stock-photo people — use abstract UI mockups, terminal/log snippets, and iconography

instead. Support both light and dark mode.

Set up routing with React Router for these pages (build Home fully now, stub the rest

as blank placeholder pages we'll fill in next): / (Home), /product, /pricing, /docs,

/blog, /blog/:slug, /about, /contact.

GLOBAL LAYOUT:

- Sticky header: wordmark left, nav links (Product, Pricing, Docs, Blog, About) center,

  a ghost "Log in" button + primary "Request a Demo" button right. Mobile: hamburger menu.

- Footer: 5 columns — brand blurb + tagline, Product links, Company links, Resources

  links, Legal links — plus a bottom bar with copyright and social icons (LinkedIn,

  X/Twitter, GitHub placeholders).

HOME PAGE SECTIONS, in order:

1. Hero — eyebrow badge "AI Evaluation for Conversational Agents", headline "Ship

   conversational AI you can actually trust.", one-sentence subheadline on the

   problem/solution, two CTAs ("Request a Demo" primary, "See How It Works" ghost,

   scrolls to section 4). Below the fold: a dark mockup card showing a 4-step pipeline

   (Plan personas → Execute real conversations → Evaluate → Gated verdict) in a

   terminal/log aesthetic.

2. Trust strip — muted row: "Built for enterprise conversational AI teams" with 4-5

   capability badges: "Audited LLM calls", "Retry & backpressure at scale",

   "Accessibility gates", "Enterprise-grade job architecture".

3. Problem section — headline "Conversational agents don't fail like normal software."

   Three columns: (a) LLM-driven bots are non-deterministic — the same test can pass

   and fail across runs, (b) manual QA doesn't scale to open-ended conversations,

   (c) existing test tools assume scripted click-paths, not judgment calls about

   correct behavior. Add an illustrative stat row (mark as illustrative): "1,400+

   evaluation checks per regression run", "3 concurrent conversation runners",

   "0 false green passes on failed executions".

4. How it works — 4-step horizontal pipeline: 1) "Define agentic test personas" (goal,

   persona, playbook — not scripted steps), 2) "Execute real conversations" (a real

   browser/API drives your live agent end-to-end), 3) "Evaluate every turn" (LLM-as-

   judge scoring across quality pillars, plus deterministic assertions for hard facts),

   4) "Gated, trustworthy verdicts" (a failed execution is capped at FAIL regardless of

   score — no false green passes).

5. Feature grid — 6 cards (icon, title, 1-2 sentences): "Agentic Test Personas", "Real

   Conversation Execution", "LLM-as-Judge Metrics", "Deterministic Assertions",

   "Execution-Integrity Gate", "Full Audit Trail".

6. Callout — two-column "before/after" card: a FAIL badge on a conversation that

   stopped early (scored honestly, capped at FAIL) contrasted with a lesser tool

   showing a false PASS just because nothing broke yet. Headline: "A broken

   conversation should never look like a passing one."

7. CTA band — dark rounded card: "See it evaluate your own agent" + "Request a Demo"

   primary / "Talk to Sales" ghost buttons.

Use specific, realistic marketing copy throughout — no lorem ipsum.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bot-verdict.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/add205e4-6e1b-4f07-b52b-48efab77d866).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
