import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plug, Network, Workflow, FileCheck2, Fingerprint, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/nexus")({
  head: () => ({
    meta: [
      { title: "Nexus — System Map Intelligence for Cognigy Agents — Shyena" },
      {
        name: "description",
        content:
          "Nexus is Shyena's system-map intelligence product, powered by CIS: it reads your live Cognigy agent, builds a structural model of its logic, and drafts high-coverage test specs from it — every generated spec passes semantic review and carries full provenance before it's marked ready.",
      },
      { property: "og:title", content: "Nexus — System Map Intelligence for Cognigy Agents — Shyena" },
      {
        property: "og:description",
        content: "One business rule, understood once. Thousands of test conversations generated from it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/nexus" }],
  }),
  component: NexusPage,
});

const STAGES = [
  { icon: Plug, title: "Source adapters", body: "Reads your agent as it's actually built — live Cognigy flow definitions, not a re-typed description of your logic." },
  { icon: Network, title: "Canonical agent model", body: "Normalizes what it reads into a structural model — journeys, decisions, modules, integrations, and target outcomes — a real model, not a black-box summary." },
  { icon: Workflow, title: "Intelligence engine", body: "Graph, path, and dependency-impact analysis surface the decision points, branches, and flow interactions actually worth testing." },
  { icon: FileCheck2, title: "Test intelligence", body: "Drafts test specs against coverage obligations, validates them structurally, and runs a semantic review pass with one bounded revision before anything is marked ready." },
  { icon: Fingerprint, title: "Provenance & evidence", body: "Every generated spec carries model-invocation evidence and revision lineage, hashed and persisted — a generated test can be defended, not just trusted." },
] as const;

function NexusPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="flex flex-col items-start">
                <div className="mb-7 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-600">
                  Nexus · Understand — System Map Intelligence
                </div>
                <h1 className="max-w-3xl font-[Sora] text-[clamp(3.5rem,6.5vw,6.8rem)] font-extrabold leading-[0.9] tracking-[-0.065em] text-slate-950">
                  One business rule.
                  <span className="block text-[#a87900]">Thousands of test conversations.</span>
                </h1>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="max-w-2xl lg:ml-auto">
                <p className="text-lg leading-8 text-slate-600 sm:text-xl">
                  Nexus, powered by CIS, reads your live Cognigy agent, builds a structural model of its logic, and drafts high-coverage test specs from that model — so coverage grows with your agent instead of your team's authoring time. Every generated spec passes semantic review and carries full provenance before it's marked ready.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">
                    See Nexus Generate a Spec <ArrowRight className="h-5 w-5" />
                  </Link>
                  <a href="#pipeline" className="inline-flex h-13 items-center justify-center gap-2 border border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950">
                    See How It Works
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-300 pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              <span className="text-[#a87900]">Cognigy — live today</span>
              <span>LangGraph — next</span>
              <span>LangChain — next</span>
              <span>RAG / KB — next</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="relative overflow-hidden border border-slate-300 bg-[#080711]" style={{ aspectRatio: "16 / 8" }}>
              <img
                src="/images/cis-hero.jpg"
                alt="One business rule flowing into many labeled, validated test-conversation paths — happy path, edge case, boundary, multilingual"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080711]/85 via-[#080711]/20 to-transparent" />
              <div className="absolute left-5 top-5 border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                SHYENA · NEXUS · SYSTEM MAP INTELLIGENCE
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="pipeline" className="scroll-mt-20 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How it works</div>
              <h2 className="mt-5 font-[Sora] text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[0.9] tracking-[-0.06em] text-slate-950">From any agent, to assured quality.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Five stages, each producing evidence the next one is allowed to trust — from your agent's live logic to an approved test spec with a full paper trail behind it.</p>
            </div>

            <div className="grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-1">
              {STAGES.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <Reveal key={stage.title} delay={i * 70}>
                    <div className="group grid gap-6 border-b border-slate-300 py-8 sm:grid-cols-[72px_1fr] sm:py-9">
                      <div className="flex h-11 w-11 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950 transition-transform duration-200 group-hover:-translate-y-1">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs tracking-[0.18em] text-slate-400">0{i + 1}</span>
                          <h3 className="text-2xl font-extrabold tracking-tight text-slate-950">{stage.title}</h3>
                        </div>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{stage.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2">
            <div className="bg-white p-8 sm:p-10 lg:p-12">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Nexus is</div>
              <h3 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-0.04em] text-slate-950">System-aware test generation.</h3>
              <p className="mt-5 text-base leading-7 text-slate-600">
                A test-generation engine for Cognigy conversational agents, powered by CIS and live today. It reads your agent's actual flow definitions, builds a structural model of the logic, and drafts test specs against real coverage obligations — every generated spec goes through structural validation and a semantic review pass, with one bounded revision, before it's marked ready to run.
              </p>
            </div>
            <div className="bg-[#f5f8fc] p-8 sm:p-10 lg:p-12">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">It is not</div>
              <ul className="mt-5 space-y-5 text-base leading-7 text-slate-600">
                <li><strong className="text-slate-950">Not multi-platform yet.</strong> Cognigy is the live source adapter today; LangGraph, LangChain, and RAG/knowledge-base ingestion are on the roadmap, not shipped.</li>
                <li><strong className="text-slate-950">Not a replacement for manual expertise.</strong> Nexus grows coverage alongside the hand-written edge-case specs your team already trusts.</li>
                <li><strong className="text-slate-950">Not a black box.</strong> Every generated spec carries model-invocation evidence and revision lineage you can inspect, not just a pass/fail label.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Nexus · Understand</div>
          <h2 className="mx-auto mt-5 max-w-4xl font-[Sora] text-[clamp(3rem,5.2vw,5.6rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">Bring one business rule. See the coverage it generates.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">We'll run Nexus against one real rule from your live Cognigy agent and walk through every generated spec — the model, the coverage obligations, and the provenance behind it — with you.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex h-13 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]">
              Request a Demo <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/vera" className="inline-flex h-13 items-center justify-center gap-2 border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
              See Vera, the Quality &amp; Evaluation Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
