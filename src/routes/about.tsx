import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Eye, Network, ShieldOff, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shyena" },
      { name: "description", content: "Why Shyena is building an evidence layer for AI systems that need trustworthy release decisions." },
      { property: "og:title", content: "About — Shyena" },
      { property: "og:description", content: "The team building trustworthy release gates for AI systems." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Eye,
    number: "01",
    title: "Evidence over vibes",
    description: "A verdict has to be explainable. Every score should be traceable back to the turn, assertion, system behavior or judge call that produced it.",
  },
  {
    icon: ShieldOff,
    number: "02",
    title: "No false confidence",
    description: "A broken run should never look like a passing one. Execution integrity is a release control, not an optional annotation on a quality score.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Built for real agent behavior",
    description: "AI agents do not follow one deterministic script. Assurance should test goals, behavior, state, orchestration and recovery paths as they actually occur.",
  },
];

const CHAIN = [
  { label: "NEXUS", title: "Understand", copy: "System logic, business rules and orchestration behavior." },
  { label: "VERA", title: "Evaluate", copy: "Real journeys with deterministic and semantic evidence." },
  { label: "CHAKRA", title: "Defend", copy: "Adversarial testing inside the same release evidence chain." },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#09051b] text-white">
        <div className="absolute inset-0 bg-grid opacity-45" aria-hidden="true" />
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden="true" />
        <div className="absolute -left-48 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-48 bottom-0 h-[32rem] w-[32rem] rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:mb-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              <span>About Shyena</span>
              <span className="text-white/20">/</span>
              <span>AI assurance infrastructure</span>
            </div>
            <span className="hidden sm:block">NEXUS · VERA · CHAKRA</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-violet-300/20 bg-violet-400/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200">
                The evidence layer
              </span>
              <h1 className="mt-7 text-[clamp(3.2rem,6.4vw,6.6rem)] font-semibold leading-[.94] tracking-[-.055em] text-white">
                We build the evidence layer for <span className="text-gradient-brand">AI systems.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
                Shyena exists for the gap between “the evaluation passed” and “this AI system is safe to release.”
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-violet-600 px-6 text-sm font-semibold text-white shadow-[0_16px_45px_-18px_rgba(124,58,237,.9)] hover:bg-violet-500">
                  <Link to="/contact">See the evidence <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/15 bg-white/[.03] px-6 text-sm text-white/80 hover:bg-white/[.08] hover:text-white">
                  <Link to="/docs">Explore documentation</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-[2rem] bg-violet-500/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#100a29]/90 shadow-[0_30px_90px_-35px_rgba(124,58,237,.75)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                  <span>Shyena · Assurance chain</span>
                  <span>Evidence</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-5 rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/40">
                      <span>Release decision</span>
                      <span className="text-orange-300">Traceable</span>
                    </div>
                    <div className="mt-4 h-px bg-gradient-to-r from-violet-500 via-violet-300/40 to-transparent" />
                    <p className="mt-4 text-sm leading-6 text-white/70">One evidence chain connects understanding, execution, evaluation and adversarial testing.</p>
                  </div>

                  <div className="space-y-3">
                    {CHAIN.map((item, index) => (
                      <div key={item.label} className="relative flex gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4">
                        {index < CHAIN.length - 1 && <span className="absolute left-[27px] top-[52px] h-5 w-px bg-violet-400/30" aria-hidden="true" />}
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 text-violet-200">
                          <Network className="h-3.5 w-3.5" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span className="font-mono text-[9px] tracking-[0.18em] text-orange-300">{item.label}</span>
                            <span className="text-sm font-semibold text-white">{item.title}</span>
                          </div>
                          <p className="mt-1 text-xs leading-5 text-white/45">{item.copy}</p>
                        </div>
                        <Check className="ml-auto mt-1 h-4 w-4 shrink-0 text-emerald-300/80" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 bg-black/15 px-5 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">What the system actually did → what the release can prove</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a071d]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.35fr_.65fr] lg:gap-20">
          <div>
            <p className="section-kicker">Why Shyena exists</p>
            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-4xl">Quality needs a chain of evidence.</h2>
          </div>
          <div className="max-w-3xl space-y-7 text-[1.05rem] leading-8 text-white/60 sm:text-lg">
            <p>AI systems increasingly make decisions through conversations, tool calls, retrieval, orchestration and multi-step workflows. A single response score cannot establish that the complete system behaved correctly.</p>
            <p>Shyena was built around that observation. The platform connects system understanding, executable assurance journeys, deterministic checks, semantic evaluation, orchestration evidence and adversarial testing into a release-oriented evidence chain.</p>
            <p>The result is a different unit of quality: not merely a score, but a verdict that can be traced to what the system actually did. Nexus understands the system. Vera executes and evaluates real journeys. Chakra probes the security boundary. The evidence becomes the basis for a release decision.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#0d0822] py-20 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">What we believe</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl">Principles, not features.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/45">The product follows these principles because release confidence has to survive scrutiny.</p>
          </div>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="group bg-[#100a29] p-7 transition hover:bg-[#140d34] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.18em] text-orange-300">{value.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-violet-200 transition group-hover:bg-violet-400/15"><Icon className="h-4 w-4" /></span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/50">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#09051b] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.35fr_.65fr] lg:gap-20">
            <div>
              <p className="section-kicker">The assurance model</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-.035em] text-white sm:text-4xl">Understand. Evaluate. Defend.</h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">Three complementary capabilities, connected by evidence rather than isolated scores.</p>
            </div>
            <div className="space-y-3">
              {CHAIN.map((stage, index) => (
                <article key={stage.label} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:grid-cols-[72px_1fr_auto] sm:items-center sm:p-6">
                  <span className="font-mono text-xs tracking-[0.15em] text-orange-300">0{index + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-mono text-[10px] tracking-[0.18em] text-violet-300">{stage.label}</span>
                      <h3 className="text-base font-semibold text-white">{stage.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/45">{stage.copy}</p>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 text-white/30 sm:block" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a071d]">
        <div className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-orange-300">Inspect the evidence</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-[-.04em] text-white sm:text-5xl">The best way to understand Shyena is to see the evidence it produces.</h2>
          <Button asChild className="mt-8 h-12 rounded-full bg-violet-600 px-7 text-sm font-semibold text-white hover:bg-violet-500">
            <Link to="/contact">Request a demo <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
