import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, P, Ul } from "@/components/docs/doc-prose";

export const Route = createFileRoute("/docs/writing-test-specs")({
  head: () => ({
    meta: [
      { title: "Writing Test Specs — Shyena Docs" },
      {
        name: "description",
        content:
          "How to write a good goal, persona, and playbook for a Shyena test case, plus data hints, success and failure patterns, and the per-spec quality configuration.",
      },
      { property: "og:title", content: "Writing Test Specs — Shyena Docs" },
      {
        property: "og:description",
        content:
          "How to write a good goal, persona, and playbook for a Shyena test case, plus data hints, success and failure patterns, and the per-spec quality configuration.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/writing-test-specs" }],
  }),
  component: WritingTestSpecsDoc,
});

function WritingTestSpecsDoc() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            Docs · Writing Test Specs
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
            Goal, persona, playbook
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Three ingredients replace the fixed script in every Shyena test case. This page goes one
            level deeper than Getting Started: what makes each part good, with a worked example you
            can adapt.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <H2>The shape of a test case</H2>
        <P>
          Every Shyena test case is built from a goal, a persona, and a playbook — the same
          intent-over-script shape introduced in{" "}
          <Link
            to="/docs/getting-started"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Getting Started
          </Link>
          . This page goes one level deeper: what makes each part good, and how they fit together in
          practice.
        </P>

        <H2>A worked example</H2>
        <P>
          Say you want to test whether an agent can handle a customer checking on a delayed order.
          You might write:
        </P>
        <Ul
          items={[
            <>
              <strong className="font-semibold text-foreground">Goal:</strong> The customer learns
              the current status of their order and, if it's delayed, receives an explanation and a
              realistic new delivery estimate.
            </>,
            <>
              <strong className="font-semibold text-foreground">Persona:</strong> A mildly frustrated
              customer who provides their order number when asked, follows up if the first answer is
              vague, and pushes back once if the agent doesn't address the delay directly.
            </>,
            <>
              <strong className="font-semibold text-foreground">Playbook:</strong> Stay focused on the
              order-status conversation. If the agent offers to file a complaint or escalate, accept
              once and see how it's handled, but don't pursue unrelated topics like billing or
              account changes.
            </>,
          ]}
        />
        <P>
          None of this specifies exact phrasing. The persona improvises its way through the
          conversation using the goal and playbook as its compass, adapting to whatever the agent
          actually says.
        </P>

        <H2>What makes a good goal</H2>
        <P>
          A good goal is specific and outcome-oriented: it names a condition that's either true or
          false at the end of the conversation. "The customer receives a delivery estimate" is
          testable. "The customer has a good experience" is not — it's too vague to check against,
          and it gives the test persona nothing concrete to pursue. If you can't picture what the
          transcript looks like when the goal succeeds, the goal isn't specific enough yet.
        </P>
        <P>
          Vague goals also tend to produce vague playbooks, because there's nothing concrete to
          bound. Write the goal first, and let the playbook exist to keep the conversation from
          wandering away from it.
        </P>

        <H2>What a playbook does — and doesn't do</H2>
        <P>
          A playbook sets the boundaries of the conversation without dictating its exact path. It's
          the difference between "stay on topic, escalate once if offered" and a fixed sequence of
          turns. A playbook that's too rigid defeats the point of an improvising test persona; one
          that's too loose lets the conversation wander into territory your goal was never trying to
          test. The right level of detail is usually: what's in scope, what's out of scope, and how
          the persona should react to a small number of predictable branches (an escalation offer, a
          request for identifying information, an unexpected error message).
        </P>

        <H2>Data hints</H2>
        <P>
          Real conversations often require real answers — an order number, a postcode, an account
          email. Data hints tell Shyena which piece of your test data answers which kind of question
          the agent might ask, so the persona can respond naturally instead of guessing or making
          something up. If your persona might be asked to confirm a postcode, a data hint maps that
          kind of question to the postcode value in your test data, regardless of exactly how the
          agent phrases the ask.
        </P>

        <H2>Success and failure patterns, and max turns</H2>
        <P>Beyond the goal, you can define spec-level settings that shape how a run concludes:</P>
        <Ul
          items={[
            <>
              <strong className="font-semibold text-foreground">Success patterns</strong> describe
              recognizable signs that the goal was reached, beyond just "the persona decided it
              was."
            </>,
            <>
              <strong className="font-semibold text-foreground">Failure patterns</strong> describe
              recognizable signs that the conversation has gone wrong in a specific, known way —
              useful for catching failure modes you already know to watch for.
            </>,
            <>
              <strong className="font-semibold text-foreground">Max turns</strong> caps how long a
              conversation is allowed to run before it's treated as inconclusive, preventing a stuck
              conversation from running indefinitely.
            </>,
          ]}
        />
        <P>
          These settings don't replace the goal-driven evaluation — they sit alongside it, giving you
          finer control over how a run is interpreted when you already know something specific about
          the scenario you're testing.
        </P>

        <H2>Quality pillars and the assertion contract</H2>
        <P>
          Two more things are configurable per spec, though neither replaces goal/persona/playbook:
          which quality pillars get scored (tone, grounding, resolution, and others) and what the
          deterministic assertion contract checks for hard facts.{" "}
          <Link
            to="/docs/getting-started"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Getting Started
          </Link>{" "}
          shows where these fit into a verdict;{" "}
          <Link
            to="/docs/evaluation-model"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            The Evaluation Model
          </Link>{" "}
          covers them in depth. The thing to know here is just that they live at the spec level like
          everything else on this page — you're not stuck with one fixed set of checks for every
          scenario.
        </P>

        <H2>Keep it generic, then specialize</H2>
        <P>
          Start with the smallest goal that's genuinely useful to verify, a persona simple enough
          that its behavior is predictable, and a playbook loose enough to let the conversation
          breathe. Once that test is reliable, it's easy to add variations — a different persona
          tone, an edge case in the playbook — without rewriting the whole thing.
        </P>

        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want help writing your first test spec?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We'll scope a goal, persona, and playbook for one of your real scenarios together.
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
