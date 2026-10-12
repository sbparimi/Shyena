import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";
const FAQ = [
  [
    "Is Vera only an LLM-as-judge?",
    "No. Semantic judgement is one layer. Deterministic and execution-integrity checks remain explicit.",
  ],
  [
    "What can Vera evaluate?",
    "Vera evaluates predictive model outputs, classifications, generated content, RAG responses, document extraction and multi-step AI workflows using metrics and checks suited to each system.",
  ],
  [
    "Can a semantic pass hide a failure?",
    "No. Hard deterministic and security gates remain explicit.",
  ],
];

export const Route = createFileRoute("/vera")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE + "/vera" }],
    meta: [
      { title: "Evaluate AI outcomes (Vera) | Shyena AI Assurance" },
      {
        name: "description",
        content:
          "Run realistic journeys and evaluate whether the business outcome was actually achieved.",
      },
      { property: "og:title", content: "Evaluate AI outcomes (Vera) | Shyena AI Assurance" },
      {
        property: "og:description",
        content:
          "Run realistic journeys and evaluate whether the business outcome was actually achieved.",
      },
      { property: "og:url", content: SITE + "/vera" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Judge every answer (Vera) | Shyena AI Assurance" },
      {
        name: "twitter:description",
        content:
          "Run realistic journeys and evaluate whether the business outcome was actually achieved.",
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
              Vera · Evaluate AI outcomes
            </div>
            <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Evaluate AI outcomes.
              <br />
              <span className="text-[var(--warp-accent-text)]">
                Measure predictions, generated outputs and end-to-end system behaviour against clear
                criteria.
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--warp-muted)]">
              Run realistic journeys and evaluate whether the business outcome was actually
              achieved.
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
              Illustrative Vera evidence
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Input</div>
                <div className="mt-2 text-sm font-semibold">AI input + expected outcome</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Evidence</div>
                <div className="mt-2 text-sm font-semibold">Metric results + evaluation trace</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Output</div>
                <div className="mt-2 text-sm font-semibold">Release finding</div>
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
                <div className="mt-4 text-sm font-bold">Task completion</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Business-rule adherence</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Answer relevance and correctness</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Intent and routing</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Tool selection and execution</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">State and trajectory integrity</div>
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
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Turn-by-turn evidence
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Deterministic assertions
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Bounded semantic evaluation
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Release-ready findings and verdicts
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
              Questions about Vera.
            </h2>
          </div>
          <div className="mt-9 space-y-3">
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                Is Vera only an LLM-as-judge?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                No. Semantic judgement is one layer. Deterministic and execution-integrity checks
                remain explicit.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                What can Vera evaluate?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                Vera evaluates predictive model outputs, classifications, generated content, RAG
                responses, document extraction and multi-step AI workflows using metrics and checks
                suited to each system.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                Can a semantic pass hide a failure?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                No. Hard deterministic and security gates remain explicit.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-[var(--warp-surface-soft)] text-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className=" text-3xl font-extrabold tracking-[-.04em]">
            See Vera against one real AI journey.
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
