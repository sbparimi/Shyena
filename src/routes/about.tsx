import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Layers3, ShieldCheck, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shyena | From a Testing Problem to AI Assurance" },
      { name: "description", content: "The story behind Shyena: how a real assurance problem became ECAAP, evolved into three product suites, and grew into an evidence-first AI assurance platform." },
      { property: "og:title", content: "About Shyena | From a Testing Problem to AI Assurance" },
      { property: "og:description", content: "How Shyena evolved from a practical testing problem into an evidence-first AI assurance platform." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/about" }],
  }),
  component: AboutPage,
});

const JOURNEY = [
  { number: "01", label: "THE PROBLEM", title: "AI testing stopped at the answer.", copy: "Traditional automation could tell us whether a screen changed. LLM evaluators could tell us whether an answer sounded good. Security scanners could find isolated weaknesses. None gave us a trustworthy view of what the complete agent actually did across the journey." },
  { number: "02", label: "THE BUILD", title: "We built ECAAP to close the gap.", copy: "The first solution was not conceived as a brand. It was an engineering response to a real assurance problem: connect system behavior, execution, evaluation and evidence so a release decision could be defended." },
  { number: "03", label: "THE EVOLUTION", title: "ECAAP became Shyena.", copy: "As the problem widened beyond one implementation, the platform evolved into a product architecture and a brand: Shyena. The focus moved from testing individual responses to proving the behavior and security of AI systems as a whole." },
  { number: "04", label: "TODAY", title: "One platform. Three assurance suites.", copy: "NEXUS understands the system. VERA evaluates real behavior. CHAKRA attacks the security boundary. Together they turn fragmented test signals into one evidence chain for engineering and release decisions." },
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
  ["04", "Built from the engineering problem", "Shyena is shaped by the problems teams encounter in production, not by a collection of disconnected AI features."],
] as const;

function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28">
          <div className="flex items-center justify-between border-b border-slate-300 pb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500">
            <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-[#ffb703]" /><span>About Shyena</span><span className="text-slate-300">/</span><span>Our story</span></div>
            <span className="hidden sm:block">NEXUS · VERA · CHAKRA</span>
          </div>

          <div className="grid gap-12 pt-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a87900]">From a problem to a platform</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">We did not start with a product.<br /><span className="text-[#a87900]">We started with a problem.</span></h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">AI systems were becoming more capable, but the evidence needed to trust them for release was still fragmented. Shyena was built to close that gap.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-none bg-[#ffb703] px-6 text-sm font-semibold text-slate-950 hover:bg-[#f2aa00]"><Link to="/contact">Talk to Shyena <ArrowRight className="h-4 w-4" /></Link></Button>
                <Button asChild variant="outline" className="h-12 rounded-none border-slate-400 bg-white px-6 text-sm text-slate-900 hover:bg-slate-50"><Link to="/docs">Explore the platform</Link></Button>
              </div>
            </div>

            <div className="border-l border-slate-300 pl-6 lg:pl-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">The transformation</p>
              <div className="mt-5 space-y-0">
                {["Testing responses", "Understanding systems", "Evaluating journeys", "Defending the boundary", "Proving the release"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-b border-slate-300 py-4 first:border-t">
                    <span className="font-mono text-[10px] text-[#a87900]">0{index + 1}</span><span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-500">The unit of assurance changed from an isolated answer to an evidence-backed system decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">Why Shyena exists</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">The tools were good at pieces of the problem. The release decision was still ours to make.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">That was the problem we kept seeing. One tool evaluated language. Another checked deterministic behavior. Another scanned security. Another exposed logs. The evidence lived in separate places, and none of it explained whether the AI system as a whole had behaved correctly enough to release.</p>
          </div>
          <div className="mt-12 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-3">
            {[
              ["ANSWER", "Is the response good?", "Useful, but incomplete."],
              ["EXECUTION", "Did the journey actually work?", "Necessary, but not enough."],
              ["ASSURANCE", "Can we prove the release is safe?", "That is the missing layer."],
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
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">The Shyena story</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Problem → ECAAP → Shyena → three suites.</h2></div>
            <p className="max-w-md text-sm leading-6 text-slate-600">A product story driven by an engineering problem, not a branding exercise.</p>
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
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">What Shyena became</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Three product suites. One evidence chain.</h2><p className="mt-5 max-w-md text-base leading-7 text-slate-600">Each suite solves a different failure point. Together they address the full assurance problem.</p></div>
            <div className="border-t border-slate-300">
              {SUITES.map((suite, index) => { const Icon = suite.icon; return <Link key={suite.label} to={suite.to} className="group grid gap-5 border-b border-slate-300 py-7 sm:grid-cols-[60px_110px_1fr_auto] sm:items-start"><span className="font-mono text-xs text-[#a87900]">0{index + 1}</span><span className="flex h-10 w-10 items-center justify-center bg-[#fff4cf] text-[#a87900]"><Icon className="h-4 w-4" /></span><div><p className="font-mono text-[10px] tracking-[0.18em] text-slate-500">{suite.label}</p><h3 className="mt-1 text-xl font-bold">{suite.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{suite.copy}</p></div><ArrowRight className="mt-2 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#a87900]" /></Link>; })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#eaf5fa]">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a87900]">What we believe</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Built to solve what fragmented tools could not.</h2></div>
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
