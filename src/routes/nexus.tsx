import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";
const FAQ = [
  [
    "Does Nexus replace architecture documentation?",
    "No. It creates an assurance-oriented view of the runtime system and its critical journeys.",
  ],
  [
    "What types of AI systems can it map?",
    "Nexus can map predictive models, data and feature pipelines, generative AI applications, RAG, computer vision, document AI, APIs and agentic workflows, including their dependencies and critical outcomes.",
  ],
  ["What happens next?", "The mapped journeys become inputs for evaluation and security testing."],
];

export const Route = createFileRoute("/nexus")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE + "/nexus" }],
    meta: [
      { title: "Map your AI system (Nexus) | Shyena AI Assurance" },
      {
        name: "description",
        content: "Understand the real system before you decide what to test.",
      },
      { property: "og:title", content: "Map your AI system (Nexus) | Shyena AI Assurance" },
      {
        property: "og:description",
        content: "Understand the real system before you decide what to test.",
      },
      { property: "og:url", content: SITE + "/nexus" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Map your agent (Nexus) | Shyena AI Assurance" },
      {
        name: "twitter:description",
        content: "Understand the real system before you decide what to test.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="bg-white text-[var(--warp-ink)]">
      <section className="bg-[var(--warp-canvas)] text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[var(--warp-accent-text)]">
              Nexus · Map your agent
            </div>
            <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Map your AI system.
              <br />
              <span className="text-[var(--warp-accent-text)]">
                Understand the real system before you decide what to test.
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--warp-muted)]">
              Understand the real system before you decide what to test.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--warp-lime)] px-5 text-sm font-bold text-[var(--warp-on-accent)]"
              >
                Book a 30-min call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sample-report"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-[var(--warp-muted)]"
              >
                See sample evidence <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-2xl border border-[var(--warp-border)] bg-white p-6 sm:p-8">
            <div className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[.16em] text-[var(--warp-muted)]">
              Illustrative Nexus evidence
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Input</div>
                <div className="mt-2 text-sm font-semibold">
                  AI system + data and dependency map
                </div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Evidence</div>
                <div className="mt-2 text-sm font-semibold">Journey graph + dependency path</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Output</div>
                <div className="mt-2 text-sm font-semibold">Assurance target</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="text-sm font-bold text-[var(--warp-accent-text)]">What it checks</div>
              <h2 className="mt-3 text-4xl font-extrabold tracking-[-.045em]">
                Concrete checks, not a black-box score.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Model, data and pipeline dependencies</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Decision paths and system behaviour</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Tool and API dependencies</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Critical business journeys</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Recovery and handover paths</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">
                  Coverage gaps between requirements and execution
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--warp-border)] bg-[var(--warp-surface-soft)]">
        <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="text-sm font-bold text-[var(--warp-accent-text)]">What you get</div>
              <h2 className="mt-3 text-4xl font-extrabold tracking-[-.045em]">
                An artefact your engineering team can act on.
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />A
                system-aware journey map
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Prioritised assurance targets
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Implementation-independent test intent
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Traceable links between journeys and system components
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="text-center">
            <div className="text-sm font-bold text-[var(--warp-accent-text)]">FAQ</div>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-.045em]">
              Questions about Nexus.
            </h2>
          </div>
          <div className="mt-9 space-y-3">
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                Does Nexus replace architecture documentation?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                No. It creates an assurance-oriented view of the runtime system and its critical
                journeys.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                What types of AI systems can it map?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                It can map predictive models, data and feature pipelines, generative AI
                applications, RAG, computer vision, document AI, APIs and agentic workflows,
                including their dependencies and critical outcomes.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">What happens next?</summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                The mapped journeys become inputs for evaluation and security testing.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-[var(--warp-surface-soft)] text-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className=" text-3xl font-extrabold tracking-[-.04em]">
            See Nexus against one real AI journey.
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--warp-lime)] px-5 text-sm font-bold text-[var(--warp-on-accent)]"
          >
            Book a 30-min call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
