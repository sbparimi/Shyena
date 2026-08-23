import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Plug,
  Network,
  Workflow,
  FileCheck2,
  Fingerprint,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/cis")({
  head: () => ({
    meta: [
      { title: "CIS — Conversation Intelligence System for Cognigy Agents — Shyena" },
      {
        name: "description",
        content:
          "CIS reads your live Cognigy agent, builds a structural model of its logic, and drafts high-coverage test specs from it — every generated spec passes semantic review and carries full provenance before it's marked ready.",
      },
      { property: "og:title", content: "CIS — Conversation Intelligence System for Cognigy Agents — Shyena" },
      {
        property: "og:description",
        content: "One business rule, understood once. Thousands of test conversations generated from it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/cis" }],
  }),
  component: CisPage,
});

const STAGES = [
  {
    icon: Plug,
    title: "Source adapters",
    body: "Reads your agent as it's actually built — live Cognigy flow definitions, not a re-typed description of your logic.",
  },
  {
    icon: Network,
    title: "Canonical agent model",
    body: "Normalizes what it reads into a structural model — journeys, decisions, modules, integrations, and target outcomes — a real model, not a black-box summary.",
  },
  {
    icon: Workflow,
    title: "Intelligence engine",
    body: "Graph, path, and dependency-impact analysis surface the decision points, branches, and flow interactions actually worth testing.",
  },
  {
    icon: FileCheck2,
    title: "Test intelligence",
    body: "Drafts test specs against coverage obligations, validates them structurally, and runs a semantic review pass with one bounded revision before anything is marked ready.",
  },
  {
    icon: Fingerprint,
    title: "Provenance & evidence",
    body: "Every generated spec carries model-invocation evidence and revision lineage, hashed and persisted — a generated test can be defended, not just trusted.",
  },
] as const;

function CisPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-accent)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Intelligence · CIS
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              One business rule.{" "}
              <span className="text-gradient-brand">Thousands of test conversations.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              CIS reads your live Cognigy agent, builds a structural model of its logic, and drafts
              high-coverage test specs from that model — so coverage grows with your agent instead
              of your team's authoring time. Every generated spec passes semantic review and carries
              full provenance before it's marked ready.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  See CIS Generate a Spec
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="#pipeline">See How It Works</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground">
                Cognigy — live today
              </span>
              {["LangGraph", "LangChain", "RAG / KB"].map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-dashed border-border bg-transparent px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {platform} — next
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product visual */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl shadow-elevated"
            style={{ aspectRatio: "16 / 8" }}
          >
            <img
              src="/images/cis-hero.jpg"
              alt="One business rule flowing into many labeled, validated test-conversation paths — happy path, edge case, boundary, multilingual"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/30 to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Pipeline */}
      <section id="pipeline" className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">How it works</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              From any agent, to assured quality.
            </h2>
            <p className="mt-4 text-navy-muted">
              Five stages, each producing evidence the next one is allowed to trust — from your
              agent's live logic to an approved test spec with a full paper trail behind it.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 90}>
                <div className="relative h-full rounded-xl border border-navy-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent shadow-[0_0_24px_-6px_var(--color-accent)]">
                      <stage.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-navy-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy-foreground">{stage.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-muted">{stage.body}</p>
                  {i < STAGES.length - 1 && (
                    <ArrowRight className="absolute -right-[19px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-navy-border lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What it is / isn't */}
      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">CIS is</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A test-generation engine for Cognigy conversational agents, live today. It reads
                your agent's actual flow definitions, builds a structural model of the logic, and
                drafts test specs against real coverage obligations — every generated spec goes
                through structural validation and a semantic review pass, with one bounded revision,
                before it's marked ready to run.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">It is not</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>
                  Multi-platform yet — Cognigy is the live source adapter today; LangGraph,
                  LangChain, and RAG/knowledge-base ingestion are on the roadmap, not shipped.
                </li>
                <li>
                  A replacement for the hand-written edge-case specs your team already trusts — CIS
                  grows coverage alongside them, it doesn't retire manual authoring.
                </li>
                <li>
                  A black box — every generated spec carries model-invocation evidence and revision
                  lineage you can inspect, not just a pass/fail label.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy-border bg-navy px-8 py-16 text-center shadow-elevated sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-navy-foreground sm:text-4xl">
            Bring one business rule. See the coverage it generates.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-muted">
            We'll run CIS against one real rule from your live Cognigy agent and walk through every
            generated spec — the model, the coverage obligations, and the provenance behind it —
            with you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-navy-border bg-transparent text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
            >
              <Link to="/product">See the Evaluation Platform</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
