import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MessageSquare, Scale, ShieldX, XCircle } from "lucide-react";

/**
 * Homepage section for the capability that is live today: testing Cognigy-built
 * chat and voice agents. Claims here must stay within what Vera implements
 * (agentic personas, real conversations, LLM-as-judge with reasoning,
 * deterministic contracts, execution-integrity gate, audit trail).
 */

const TRANSCRIPT = [
  {
    who: "Persona",
    text: "I've moved. Please change the address on my account to Keizersgracht 12.",
  },
  { who: "Agent", text: "Done! Your account address is now Keizersgracht 12, Amsterdam." },
] as const;

const JUDGE = [
  ["Goal understood", "PASS"],
  ["Helpfulness", "PASS"],
  ["Tone", "PASS"],
] as const;

const STEPS = [
  {
    icon: MessageSquare,
    step: "01 / Converse",
    title: "A persona talks to your live agent",
    body: "Each test is a goal, a persona and a playbook. A real browser or channel drives your Cognigy agent, and every turn answers what the agent actually said.",
  },
  {
    icon: Scale,
    step: "02 / Judge",
    title: "Every turn is scored with reasoning",
    body: "LLM-as-judge scores turns and the full run against your quality pillars, and writes down why. Here the conversation reads well.",
  },
  {
    icon: ShieldX,
    step: "03 / Check facts",
    title: "Hard facts must hold",
    body: "A deterministic contract checks the system, not the wording: was the address field actually updated? It was not — the update call never ran.",
  },
  {
    icon: XCircle,
    step: "04 / Decide",
    title: "The case fails, with evidence",
    body: "A broken journey cannot report a green pass. The verdict ships with the transcript, the judge's reasoning, the failed contract and a log of every evaluation call.",
  },
] as const;

export function LiveTodayCognigy() {
  return (
    <section
      aria-labelledby="live-today-heading"
      className="border-b border-[var(--warp-border)] bg-[var(--warp-canvas)]"
    >
      <div className="mx-auto max-w-[1132px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[.14em]">
          <span className="text-[var(--warp-accent-text)]">Live today</span>
          <span className="text-[var(--warp-subtle)]">/ Cognigy chat and voice agents</span>
        </div>
        <h2
          id="live-today-heading"
          className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-.04em] sm:text-5xl"
        >
          A good answer can still fail your customer.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--warp-muted)]">
          Shyena tests Cognigy-built conversational and voice agents today. This is what one run
          reports when a bot sounds right but does not do the job.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <figure className="border border-[var(--warp-border)] bg-[var(--warp-surface)] p-5">
            <figcaption className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.12em] text-[var(--warp-subtle)]">
              <span>Run transcript</span>
              <span className="border border-[var(--warp-border)] px-2 py-0.5">
                Illustrative run · not customer data
              </span>
            </figcaption>
            <ol className="mt-5 space-y-3">
              {TRANSCRIPT.map((turn) => (
                <li key={turn.who} className="grid grid-cols-[72px_1fr] gap-3 text-sm leading-6">
                  <span className="font-mono text-[11px] uppercase tracking-[.1em] text-[var(--warp-subtle)]">
                    {turn.who}
                  </span>
                  <span className="text-[var(--warp-ink)]">{turn.text}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 grid gap-2 border-t border-[var(--warp-border)] pt-5 sm:grid-cols-3">
              {JUDGE.map(([pillar, result]) => (
                <div
                  key={pillar}
                  className="flex items-center gap-2 text-sm text-[var(--warp-muted)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  {pillar}
                  <span className="sr-only">{result}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-red-400/40 bg-red-500/10 p-4 font-mono text-[12px] leading-6">
              <div className="text-red-300">
                contract address.updated → expected true, got false
              </div>
              <div className="text-[var(--warp-ink)]">verdict FAIL · evidence attached</div>
            </div>
          </figure>

          <ol className="grid gap-3 sm:grid-cols-2">
            {STEPS.map(({ icon: Icon, step, title, body }) => (
              <li
                key={step}
                className="border border-[var(--warp-border)] bg-[var(--warp-surface)] p-5"
              >
                <Icon className="h-5 w-5 text-[var(--warp-accent-text)]" aria-hidden="true" />
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[.12em] text-[var(--warp-subtle)]">
                  {step}
                </div>
                <h3 className="mt-2 text-base font-semibold text-[var(--warp-ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--warp-muted)]">{body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="warp-btn inline-flex h-11 items-center gap-2 bg-[var(--warp-lime)] px-5 text-[var(--warp-on-accent)]"
          >
            Test one of your journeys <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/vera"
            className="inline-flex h-11 items-center gap-2 border border-[var(--warp-border-strong)] px-5 text-sm font-medium text-[var(--warp-ink)]"
          >
            How Vera evaluates
          </Link>
        </div>
      </div>
    </section>
  );
}
