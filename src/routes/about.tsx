import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, ShieldOff, Sparkles } from "lucide-react";
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
  { icon: Eye, title: "Evidence over vibes", description: "A verdict has to be explainable. Every score should be traceable back to the turn, assertion, system behavior or judge call that produced it." },
  { icon: ShieldOff, title: "No false confidence", description: "A broken run should never look like a passing one. Execution integrity is a release control, not an optional annotation on a quality score." },
  { icon: Sparkles, title: "Built for real agent behavior", description: "AI agents do not follow one deterministic script. Assurance should test goals, behavior, state, orchestration and recovery paths as they actually occur." },
];

const STAGES = [
  { number: "01", title: "Understand", description: "Map system logic, business rules and orchestration behavior into assurance candidates." },
  { number: "02", title: "Evaluate", description: "Execute real journeys and combine semantic, deterministic and integrity signals." },
  { number: "03", title: "Defend", description: "Probe adversarial behavior and preserve security findings inside the same release evidence chain." },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-[#0d0924] text-white">
        <div className="absolute inset-0 -z-10 bg-grid opacity-45" />
        <div className="absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute -right-24 top-12 -z-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="mx-auto flex min-h-[470px] w-full max-w-7xl items-center px-5 py-20 sm:min-h-[500px] sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-medium tracking-wide text-white/75 backdrop-blur-sm">
              About Shyena
            </span>
            <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-[5.5rem]">
              We build the evidence layer for AI systems.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Shyena exists for the gap between “the evaluation passed” and “this AI system is safe to release.”
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-7 text-lg leading-8 text-muted-foreground sm:text-[1.15rem] sm:leading-8">
          <p>AI systems increasingly make decisions through conversations, tool calls, retrieval, orchestration and multi-step workflows. A single response score cannot establish that the complete system behaved correctly.</p>
          <p>Shyena was built around that observation. The platform connects system understanding, executable assurance journeys, deterministic checks, semantic evaluation, orchestration evidence and adversarial testing into a release-oriented evidence chain.</p>
          <p>The result is a different unit of quality: not merely a score, but a verdict that can be traced to what the system actually did. Nexus understands the system. Vera executes and evaluates real journeys. Chakra probes the security boundary. The evidence becomes the basis for a release decision.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What we believe</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Principles, not features.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-2xl border border-border bg-card p-7 shadow-card transition-transform duration-200 hover:-translate-y-0.5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-base font-semibold">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The assurance chain</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From system understanding to release confidence.</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <article key={stage.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition-transform duration-200 hover:-translate-y-0.5">
              <span className="font-mono text-xs tracking-[0.18em] text-primary">{stage.number}</span>
              <h2 className="mt-5 text-2xl font-bold">{stage.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pb-20 text-center sm:px-8 sm:pb-24">
        <p className="text-muted-foreground">The best way to understand Shyena is to inspect the evidence it produces against a real AI journey.</p>
        <Button asChild className="mt-6"><Link to="/contact">Request a demo <ArrowRight className="h-4 w-4" /></Link></Button>
      </section>

      <CtaBand />
    </>
  );
}
