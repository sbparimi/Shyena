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

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">About Shyena</span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">We build the evidence layer for AI systems.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Shyena exists for the gap between “the evaluation passed” and “this AI system is safe to release.”</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>AI systems increasingly make decisions through conversations, tool calls, retrieval, orchestration and multi-step workflows. A single response score cannot establish that the complete system behaved correctly.</p>
          <p>Shyena was built around that observation. The platform connects system understanding, executable assurance journeys, deterministic checks, semantic evaluation, orchestration evidence and adversarial testing into a release-oriented evidence chain.</p>
          <p>The result is a different unit of quality: not merely a score, but a verdict that can be traced to what the system actually did. Nexus understands the system. Vera executes and evaluates real journeys. Chakra probes the security boundary. The evidence becomes the basis for a release decision.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">What we believe</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Principles, not features.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-base font-semibold">{value.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {["Understand", "Evaluate", "Defend"].map((stage, index) => (
            <article key={stage} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              <h2 className="mt-5 text-2xl font-bold">{stage}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {stage === "Understand" && "Map system logic, business rules and orchestration behavior into assurance candidates."}
                {stage === "Evaluate" && "Execute real journeys and combine semantic, deterministic and integrity signals."}
                {stage === "Defend" && "Probe adversarial behavior and preserve security findings inside the same release evidence chain."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pb-20 text-center sm:px-8">
        <p className="text-muted-foreground">The best way to understand Shyena is to inspect the evidence it produces against a real AI journey.</p>
        <Button asChild className="mt-6"><Link to="/contact">Request a demo <ArrowRight className="h-4 w-4" /></Link></Button>
      </section>

      <CtaBand />
    </>
  );
}
