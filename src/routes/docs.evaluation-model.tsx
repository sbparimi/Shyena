import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Gauge, Ruler, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/docs/evaluation-model")({
  head: () => ({
    meta: [
      { title: "The Evaluation Model — Shyena Docs" },
      {
        name: "description",
        content:
          "How LLM-as-judge scoring, deterministic assertions, and the execution-integrity gate combine into a single verdict.",
      },
      { property: "og:title", content: "The Evaluation Model — Shyena Docs" },
      {
        property: "og:description",
        content:
          "How LLM-as-judge scoring, deterministic assertions, and the execution-integrity gate combine into a single verdict.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: EvaluationModelDoc,
});

function EvaluationModelDoc() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            Docs · The Evaluation Model
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
            How a verdict gets built
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Every run produces a verdict from three layers, checked in a specific order. Understanding
            that order matters more than any individual score — it's what stops a broken run from
            reporting a pass.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>The three layers</h2>
          <p>
            A single verdict is built from three distinct checks. Each answers a different kind of
            question, and they are deliberately not averaged together into one blended score.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">1. Execution integrity</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Did the conversation actually complete? Checked first, before anything else counts.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Ruler className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">2. Deterministic assertions</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Hard facts that must be exactly right: values, fields, state transitions, policy clauses.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple/10 text-purple">
              <Gauge className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">3. LLM-as-judge scoring</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Subjective quality — tone, grounding, resolution — scored with reasoning attached.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Why the order is the whole point</h2>
          <p>
            Execution integrity is checked first because it's a gate, not a metric. If a conversation
            timed out, errored, or never reached a resolution state, the verdict is capped at{" "}
            <strong>FAIL</strong> immediately — regardless of how well the turns that did happen
            scored. A truncated run doesn't get averaged in with the complete ones; it's disqualified
            before scoring is even relevant.
          </p>
          <p>
            This matters because a short, broken conversation often scores deceptively well on quality
            alone — fewer turns means fewer chances to say something wrong. Gating on completion first
            is what prevents that from turning into a false pass. (We wrote more about why this
            specific failure mode is so common in{" "}
            <Link to="/blog/$slug" params={{ slug: "the-problem-with-green-checkmarks-on-broken-conversations" }}>
              a separate post
            </Link>
            .)
          </p>
          <p>
            Deterministic assertions and LLM-as-judge scoring only run their full weight once
            execution integrity has passed. They answer different questions and stay separate rather
            than blending into one number:
          </p>
          <ul>
            <li>
              <strong>Deterministic assertions</strong> check things that must be exactly right, not
              approximately right — a refund amount, a required disclosure, whether PII was redacted,
              whether a state machine transitioned correctly. These are boolean by nature: they pass or
              they don't, and there's no LLM judgment involved in evaluating them.
            </li>
            <li>
              <strong>LLM-as-judge scoring</strong> handles everything that isn't a hard fact — was the
              agent's tone appropriate for a frustrated customer, did it stay grounded in what the user
              actually said, did it resolve the underlying request rather than just responding
              politely. A language model scores each dimension against a defined rubric and returns its
              reasoning alongside the score, so a low score is debuggable, not just a number to dispute.
            </li>
          </ul>

          <h2>What you get back</h2>
          <p>
            The final verdict reflects the gate: PASS only if execution completed <em>and</em> the
            deterministic and judged scores clear their thresholds. But the raw, pre-gate score is
            preserved and stays visible even on a failed run — because knowing exactly how the agent
            behaved in the turns it did complete is often the fastest way to diagnose what went wrong,
            even though that score can never stand in for a pass on its own.
          </p>

          <h2>What's configurable</h2>
          <p>
            Quality pillars for LLM-as-judge scoring, deterministic assertion contracts, and completion
            criteria for execution integrity are all defined per test spec — there's no fixed universal
            rubric. What's fixed is the order: integrity, then assertions and judgment together, never
            the reverse.
          </p>
        </div>

        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want to see a real verdict built this way?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We'll run one real scenario against your live agent and walk through every layer of the
            verdict with you.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
            <Link to="/docs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Docs
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
