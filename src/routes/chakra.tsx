import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";
const FAQ = [
  [
    "Does Chakra replace a security programme?",
    "No. It is a technical AI security testing capability within a broader security programme.",
  ],
  [
    "What systems can it target?",
    "Machine-learning models, generative AI applications, RAG and retrieval pipelines, multimodal systems, AI agents and tool-using workflows where adversarial behaviour can affect outputs, data or execution.",
  ],
  [
    "How are findings used?",
    "Findings are connected to evidence and remediation priorities rather than treated as an isolated score.",
  ],
];

export const Route = createFileRoute("/chakra")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE + "/chakra" }],
    meta: [
      { title: "AI Security Testing (Chakra) | Shyena AI Assurance" },
      {
        name: "description",
        content:
          "Probe AI models and applications for adversarial inputs, data exposure, unsafe actions, robustness failures and trust-boundary weaknesses before release.",
      },
      { property: "og:title", content: "Attack it safely (Chakra) | Shyena AI Assurance" },
      {
        property: "og:description",
        content:
          "Probe AI models and applications for adversarial inputs, data exposure, unsafe actions, robustness failures and trust-boundary weaknesses before release.",
      },
      { property: "og:url", content: SITE + "/chakra" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Attack it safely (Chakra) | Shyena AI Assurance" },
      {
        name: "twitter:description",
        content:
          "Probe AI agents for adversarial paths, unsafe tool use and trust-boundary failures before release.",
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
              Chakra · Attack it safely
            </div>
            <h1 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.9] tracking-[-.065em]">
              Attack it safely.
              <br />
              <span className="text-[var(--warp-accent-text)]">
                Probe AI agents for adversarial paths, unsafe tool use and trust-boundary failures
                before release.
              </span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--warp-muted)]">
              Probe AI agents for adversarial paths, unsafe tool use and trust-boundary failures
              before release.
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
              Illustrative Chakra evidence
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Input</div>
                <div className="mt-2 text-sm font-semibold">
                  AI model/application + threat surface
                </div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Evidence</div>
                <div className="mt-2 text-sm font-semibold">Attack transcript + control result</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <div className="text-xs font-bold text-[var(--warp-accent-text)]">Output</div>
                <div className="mt-2 text-sm font-semibold">Security finding</div>
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
                <div className="mt-4 text-sm font-bold">Prompt injection</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Unsafe actions and model exploitation</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Privilege and permission boundaries</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Policy and guardrail behaviour</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Data and trust-boundary exposure</div>
              </div>
              <div className="rounded-xl border border-[var(--warp-border)] bg-[var(--warp-surface-soft)] p-5">
                <Check className="h-5 w-5 text-[var(--warp-accent-text)]" />
                <div className="mt-4 text-sm font-bold">Adversarial recovery paths</div>
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
                Reproducible attack evidence
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Control-level findings
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Business-impact context
              </li>
              <li className="flex gap-3 rounded-xl border border-[var(--warp-border)] bg-white p-5 text-sm leading-6 text-[var(--warp-muted)]">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warp-accent-text)]" />
                Security signals connected to release decisions
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
              Questions about Chakra.
            </h2>
          </div>
          <div className="mt-9 space-y-3">
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                Does Chakra replace a security programme?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                No. It is a technical AI-agent security testing capability within a broader security
                programme.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                What systems can it target?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                Machine-learning models, generative AI applications, RAG and retrieval pipelines,
                multimodal systems, AI agents and tool-using workflows where adversarial behaviour
                can affect outputs, data or execution.
              </p>
            </details>
            <details className="rounded-xl border border-[var(--warp-border)] bg-white p-5">
              <summary className="cursor-pointer list-none font-bold">
                How are findings used?
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--warp-muted)]">
                Findings are connected to evidence and remediation priorities rather than treated as
                an isolated score.
              </p>
            </details>
          </div>
        </div>
      </section>
      <section className="bg-[var(--warp-surface-soft)] text-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <h2 className=" text-3xl font-extrabold tracking-[-.04em]">
            See Chakra against one real AI journey.
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
