import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shyena | Vision, Precision, Assurance" },
      { name: "description", content: "The story behind Shyena: inspired by the Vedic image of the swift Shyena, we built an evidence-first AI assurance platform to see the whole system and prove what it did." },
      { property: "og:title", content: "About Shyena | Vision, Precision, Assurance" },
      { property: "og:description", content: "How a real AI assurance problem became Shyena: an evidence-first platform built to understand, evaluate and defend AI systems." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/about" }],
  }),
  component: AboutPage,
});

const JOURNEY = [
  { number: "01", label: "THE PROBLEM", title: "AI testing stopped at the answer.", copy: "AI systems were becoming more capable, but assurance remained fragmented. One tool checked the answer, another checked deterministic behavior, another scanned security. No one view explained what the complete agent actually did across the journey." },
  { number: "02", label: "THE BUILD", title: "We built the assurance layer we could not find.", copy: "The work began as an engineering response to that gap. We connected system behavior, execution, evaluation and evidence so a release decision could be based on what happened — not only on what a model scored." },
  { number: "03", label: "THE EVOLUTION", title: "The problem became a platform. The platform became Shyena.", copy: "As the problem widened beyond one implementation, the idea evolved into a product architecture and a brand. The name Shyena gave that architecture a point of view: see higher, move with purpose, and return with what matters." },
  { number: "04", label: "TODAY", title: "One platform. Three assurance suites.", copy: "NEXUS understands the system. VERA evaluates real behavior. CHAKRA defends the security boundary. Together they turn fragmented signals into one evidence chain for engineering and release decisions." },
] as const;

const SUITES = [
  { label: "NEXUS", title: "Understand the system", copy: "Maps flows, rules, orchestration and system intent so assurance starts from how the agent is designed to behave.", icon: Compass, to: "/nexus" },
  { label: "VERA", title: "Evaluate what happened", copy: "Runs real journeys and combines deterministic, semantic and execution evidence into defensible verdicts.", icon: Target, to: "/vera" },
  { label: "CHAKRA", title: "Defend the boundary", copy: "Probes agentic systems for security weaknesses and connects adversarial findings to the same release evidence chain.", icon: ShieldCheck, to: "/chakra" },
] as const;

const PRINCIPLES = [
  ["01", "Evidence over scores", "A score without the evidence behind it is not a release decision."],
  ["02", "The whole system matters", "Conversation quality alone cannot prove orchestration, tools, retrieval, state or security."],
  ["03", "No false confidence", "A failed or incomplete execution must never be presented as a passing evaluation."],
  ["04", "Purpose over noise", "Every capability should help an engineering team see the system more clearly and make a decision with evidence."],
] as const;

function ShyenaMark() {
  return (
    <svg viewBox="0 0 240 200" role="img" aria-label="Shyena eagle mountain mark" className="h-full w-full">
      <defs>
        <clipPath id="aboutShyenaEagle">
          <path d="M18 108 61 65 45 54 98 28 84 17 151 12c38 1 65 15 72 37 7 20-3 36-21 39-14 2-25-4-35-12l7 19 32 67-61-20-24 26-20-28-39 27 14-39-58-20Z" />
        </clipPath>
        <linearGradient id="aboutShyenaSky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dbeefa" />
          <stop offset="0.55" stopColor="#f7a45b" />
          <stop offset="1" stopColor="#e56a24" />
        </linearGradient>
        <linearGradient id="aboutShyenaMountain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#233a61" />
          <stop offset="1" stopColor="#071a3a" />
        </linearGradient>
      </defs>
      <g clipPath="url(#aboutShyenaEagle)">
        <rect width="240" height="200" fill="url(#aboutShyenaSky)" />
        <path d="M0 170 48 116 76 139 111 77 137 116 166 69 240 158V200H0Z" fill="url(#aboutShyenaMountain)" />
        <path d="m48 116 28 23 35-62-13 48-19 7-18-8Z" fill="#f8fbff" />
        <path d="m111 77 26 39-14-10-12 22-11-16Z" fill="#eaf4fb" />
        <path d="m166 69 74 89-49-29-17-28-14 19-13-12Z" fill="#f5f9fc" />
        <path d="M0 176 61 148 91 158 125 139 155 156 196 143 240 171V200H0Z" fill="#0b2347" opacity=".92" />
      </g>
      <path d="M18 108 61 65 45 54 98 28 84 17 151 12c38 1 65 15 72 37 7 20-3 36-21 39-14 2-25-4-35-12l7 19 32 67-61-20-24 26-20-28-39 27 14-39-58-20Z" fill="none" stroke="#0b1833" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M187 52c7 1 14 4 18 8-7 4-14 4-21 1-3-2-4-5-4-8Z" fill="#071226" />
      <circle cx="192" cy="53" r="2.2" fill="#ffb703" />
    </svg>
  );
}

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-24 sm:pt-14 lg:pb-28">
          <div className="flex items-center justify-between border-b border-slate-300 pb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#ffb703]" /><span>About Shyena</span><span className="text-slate-300">/</span><span>Our story</span></div>
            <span className="hidden sm:block">VISION · PRECISION · ASSURANCE</span>
          </div>

          <div className="grid gap-12 pt-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a87900]">Our name. Our inspiration.</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.2rem]">Shyena is vision.<br />Shyena is precision.<br /><span className="text-[#a87900]">Shyena returns.</span></h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">Our name is inspired by the Vedic image of the <em>śyena</em> — a swift bird of prey associated in the Rigveda with carrying Soma. We took that image as a brand metaphor: see higher, move with purpose, and return with what matters.</p>
              <div className="mt-7 border-l-2 border-[#ffb703] pl-5 text-base font-semibold leading-7 text-slate-800">That spirit shapes how we build assurance: a higher view of the system, a sharper view of its behavior, and evidence that returns to the people making the release decision.</div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-none bg-[#ffb703] px-6 text-sm font-semibold text-slate-950 hover:bg-[#f2aa00]"><Link to="/contact">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-slate-400 bg-white px-6 text-sm text-slate-900 hover:bg-slate-50"><Link to="/docs">Explore the platform</Link></Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute inset-8 bg-white/40 blur-2xl" />
              <div className="relative aspect-[6/5] border border-slate-300 bg-white/40 p-5 sm:p-8">
                <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">THE SHYENA MARK</div>
                <div className="h-full w-full pt-5"><ShyenaMark /></div>
                <div className="absolute bottom-5 left-5 right-5 flex justify-between border-t border-slate-300 pt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400"><span>See higher</span><span>Move with purpose</span><span>Return with evidence</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Why Shyena exists</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">The tools were good at pieces of the problem. The release decision was still ours to make.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">That was the engineering problem. Answer quality, deterministic checks, security scans and runtime logs all had value, but the evidence lived in separate places. We needed a way to understand the system, evaluate what actually happened and defend the resulting decision.</p>
          </div>
          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {[
              ["ANSWER", "Is the response good?", "Useful, but incomplete."],
              ["EXECUTION", "Did the journey actually work?", "Necessary, but not enough."],
              ["ASSURANCE", "Can we prove the release decision?", "That is the layer we built."],
            ].map(([label, title, copy]) => (
              <article key={label} className="bg-[#f5f8fc] p-7 sm:p-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#a87900]">{label}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f5f8fc]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-slate-300 pb-8 lg:flex-row lg:items-end">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">The Shyena story</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">A problem became a purpose. A purpose became a platform.</h2></div>
            <p className="max-w-md text-sm leading-6 text-slate-600">The brand is not separate from the engineering problem. The name expresses the way we chose to solve it.</p>
          </div>
          <div className="mt-10 border-t border-slate-300">
            {JOURNEY.map((item) => (
              <article key={item.number} className="grid gap-5 border-b border-slate-300 py-8 lg:grid-cols-[80px_190px_1fr] lg:gap-8">
                <span className="font-mono text-sm text-[#a87900]">{item.number}</span>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <div className="max-w-3xl"><h3 className="text-2xl font-bold tracking-tight">{item.title}</h3><p className="mt-3 text-base leading-7 text-slate-600">{item.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">What Shyena became</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Understand. Evaluate. Defend.</h2><p className="mt-5 max-w-md text-base leading-7 text-slate-600">Three purpose-built suites, connected by one evidence chain and one mission: help teams make AI release decisions they can defend.</p></div>
            <div className="border-t border-slate-300">
              {SUITES.map((suite, index) => { const Icon = suite.icon; return <Link key={suite.label} to={suite.to} className="group grid gap-5 border-b border-slate-300 py-7 sm:grid-cols-[60px_110px_1fr_auto] sm:items-start"><span className="font-mono text-xs text-[#a87900]">0{index + 1}</span><span className="flex h-10 w-10 items-center justify-center bg-[#fff4cf] text-[#a87900]"><Icon className="h-4 w-4" /></span><div><p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">{suite.label}</p><h3 className="mt-1 text-xl font-bold">{suite.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{suite.copy}</p></div><ArrowRight className="mt-2 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#a87900]" /></Link>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">What we believe</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">See the whole. Prove the decision.</h2></div>
            <div className="border-t border-slate-300">
              {PRINCIPLES.map(([number, title, copy]) => <article key={number} className="grid gap-4 border-b border-slate-300 py-6 sm:grid-cols-[50px_190px_1fr]"><span className="font-mono text-xs text-[#a87900]">{number}</span><h3 className="font-bold">{title}</h3><p className="text-sm leading-6 text-slate-600">{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#ffb703]">The next chapter</p><h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">The story is no longer about testing whether AI works. It is about proving what it did.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/60">That is the boundary Shyena is building for engineering teams that need confidence they can defend.</p></div>
          <Button asChild className="h-12 rounded-none bg-[#ffb703] px-6 text-sm font-semibold text-slate-950 hover:bg-[#f2aa00]"><Link to="/contact">Start the conversation <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
