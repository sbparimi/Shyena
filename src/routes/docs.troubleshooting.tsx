import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, OrderedList, P } from "@/components/docs/doc-prose";

export const Route = createFileRoute("/docs/troubleshooting")({
  head: () => ({
    meta: [
      { title: "Troubleshooting — Shyena Docs" },
      {
        name: "description",
        content:
          "How to debug an inconsistent test, a persona that doesn't reach its goal, a verdict that seems too strict or too lenient, and infrastructure-style failures.",
      },
      { property: "og:title", content: "Troubleshooting — Shyena Docs" },
      {
        property: "og:description",
        content:
          "How to debug an inconsistent test, a persona that doesn't reach its goal, a verdict that seems too strict or too lenient, and infrastructure-style failures.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/troubleshooting" }],
  }),
  component: TroubleshootingDoc,
});

function TroubleshootingDoc() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            Docs · Troubleshooting
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
            When a test doesn't behave as expected
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Common failure patterns you'll hit while writing and running Shyena tests, and how to
            work backward to the actual cause — whether that's the agent, the spec, or the
            environment.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <H2>A test fails inconsistently across runs</H2>
        <P>
          If the same test case passes on one run and fails on another with nothing else obviously
          different, the first question is whether the agent is genuinely behaving inconsistently,
          or whether it's reaching a different — but still valid — outcome each time.
        </P>
        <P>
          Because test personas improvise rather than follow a fixed script, and because agent
          responses can vary run to run, some variation in the exact path a conversation takes is
          expected. Compare the transcripts side by side: if both runs reach a state that satisfies
          the goal, just by a different route, that's not a bug — it's the test correctly tolerating
          legitimate variation. If one run reaches a valid resolution and the other genuinely
          doesn't, you have a real, reproducible problem worth chasing, even if it doesn't reproduce
          on every attempt.
        </P>
        <P>
          If failures cluster around a particular kind of agent response — a specific phrasing, a
          specific branch of the conversation — that pattern is usually more informative than any
          single run.
        </P>

        <H2>A persona doesn't reach its goal</H2>
        <P>
          When a persona consistently fails to reach its goal, work backward through three questions
          in order:
        </P>
        <OrderedList
          items={[
            {
              label: "Is the playbook too rigid?",
              body: "If it locks the persona into a narrow path and the agent's real conversation flow doesn't match that path, the persona can get stuck trying to force a turn that doesn't fit. Loosen the playbook's constraints where they're assuming a flow the agent doesn't actually use.",
            },
            {
              label: "Is the playbook too vague?",
              body: "The opposite problem — a persona with too little guidance can wander away from the goal entirely, especially in a longer conversation with several plausible directions.",
            },
            {
              label: "Is the goal actually achievable given how the agent really behaves?",
              body: "Sometimes the goal was written against an assumption about agent behavior that turns out to be wrong. If the agent genuinely can't do what the goal expects — even correctly used — the goal needs to change, not the test.",
            },
          ]}
        />
        <P>
          Reading the transcript of a failed attempt almost always shows which of these it is: a
          persona stuck repeating itself points at a too-rigid playbook, a persona drifting
          off-topic points at a too-vague one, and a persona doing everything reasonably but never
          getting the expected response points at the goal itself.
        </P>

        <H2>A verdict seems too strict or too lenient</H2>
        <P>
          Verdicts aren't governed by one fixed rubric — the quality pillars used for judgment
          scoring and the deterministic assertion contract used for hard-fact checks are both
          defined per test spec. If a verdict feels off in either direction, that configuration is
          the first place to look, not the scoring mechanism itself.
        </P>
        <P>
          Too strict often means a deterministic assertion is checking something more narrowly than
          intended — an exact match where a looser check would be more appropriate. Too lenient
          often means a quality pillar's threshold is set low enough to let a mediocre response
          through, or a pillar that matters for this scenario isn't being scored at all. Revisit
          both against what you actually meant the test to guarantee, and adjust the spec rather
          than treating the verdict as unreliable.
        </P>

        <H2>An infrastructure-style failure</H2>
        <P>
          <Link
            to="/docs/reporting"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Reporting &amp; Dashboards
          </Link>{" "}
          covers how to spot this pattern — a short or missing transcript, a failure reason that
          points at the run itself rather than anything the agent said. Once you've identified one,
          the reliable move is to re-run the case.
        </P>
        <P>
          If it passes cleanly, the original result was infrastructure noise and isn't worth
          investigating further. If it fails the same way again, treat it as a real problem — either
          with the environment the test is running against, or, less often, with something about the
          test case itself that makes a session hard to establish. Don't let an infrastructure
          failure sit in a report unexamined; it looks identical to a real one until you've ruled it
          out.
        </P>

        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Stuck on a failure you can't explain?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            Bring us a real failing run. We'll work through the transcript and verdict with you.
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
