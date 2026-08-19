import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, OrderedList, P } from "@/components/docs/doc-prose";

export const Route = createFileRoute("/docs/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Shyena Docs" },
      {
        name: "description",
        content:
          "What a Shyena test case is, what happens when it runs, how a verdict gets built, and how to grow from one test case into a trusted regression suite.",
      },
      { property: "og:title", content: "Getting Started — Shyena Docs" },
      {
        property: "og:description",
        content:
          "What a Shyena test case is, what happens when it runs, how a verdict gets built, and how to grow from one test case into a trusted regression suite.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/getting-started" }],
  }),
  component: GettingStartedDoc,
});

function GettingStartedDoc() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            Docs · Getting Started
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
            Start with one real conversation
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Shyena drives a genuine session against your live agent and judges what actually
            happened, instead of asserting against a scripted transcript. This page covers the
            workflow end to end, before you write anything yourself.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <H2>What you're setting up</H2>
        <P>
          Shyena tests conversational and voice AI agents the way a real customer would: by having
          a conversation with them, live, over the same channel your customers use. Today that
          means agents built on Cognigy. Instead of scripting exact button clicks or expected
          replies, you describe an intent — who's talking to the agent and what they're trying to
          accomplish — and Shyena carries out that conversation for real, then judges what actually
          happened.
        </P>
        <P>This page walks through the shape of that workflow before you write anything yourself.</P>

        <H2>What a test case actually is</H2>
        <P>
          A Shyena test case isn't a script of expected messages. It's three things bundled
          together: a goal (what a successful conversation looks like), a persona (who is having
          this conversation and how they communicate), and a playbook (the boundaries the
          conversation should stay within — what's in scope, what isn't, roughly how it should
          unfold).
        </P>
        <P>
          Given those three things, the test doesn't recite fixed lines. It improvises, the way a
          real customer would, adapting to whatever the agent actually says. That's what makes these
          tests resilient to small wording changes in the agent, and able to catch conversational
          failures a scripted test would walk right past.
        </P>

        <H2>What happens when a test runs</H2>
        <P>
          When you run a test case, Shyena opens a real session against the live agent — the same
          interface, the same channel, a genuine back-and-forth. Each turn, the test persona reads
          what the agent said and decides how to respond in pursuit of its goal, within the
          playbook's boundaries. This continues until the goal is reached, the conversation runs out
          of allowed turns, or something goes wrong.
        </P>
        <P>
          Nothing here is simulated after the fact. If the agent asks an unexpected question, hits
          an error, or takes the conversation somewhere the playbook didn't anticipate, that's
          captured in the transcript along with everything else.
        </P>

        <H2>What a verdict means</H2>
        <P>
          Once a conversation finishes, Shyena doesn't just say pass or fail — it builds a verdict
          from layered checks. First, it asks whether the conversation actually completed in a
          usable way. Then it checks the facts that need to be exactly right. Then it scores the
          qualities that are more a matter of judgment — tone, grounding, whether the underlying
          request actually got resolved — with the reasoning behind those scores attached, not just
          a number.
        </P>
        <P>
          A conversation that broke early is capped at fail regardless of how good the turns it did
          complete looked, because a short conversation has fewer chances to go wrong and can score
          deceptively well on quality alone. The verdict page shows you both the final gated result
          and the underlying scores, so you can see not just what happened but why.
        </P>

        <H2>From one test case to a trusted regression suite</H2>
        <P>A reasonable path through this looks like:</P>
        <OrderedList
          items={[
            {
              label: "Write one test case for a scenario you care about",
              body: "and run it, reading the verdict and transcript closely until you trust what it's telling you.",
            },
            {
              label: "Write a handful more",
              body: "covering related scenarios and variations of the same journey.",
            },
            {
              label: "Group them into a suite",
              body: "you run on demand as you make changes to the agent.",
            },
            {
              label: "Once you trust the suite's verdicts, schedule it to run on a cadence",
              body: "— nightly or otherwise, so regressions surface before customers hit them.",
            },
          ]}
        />
        <P>
          The jump from step 1 to step 4 is really just repetition and growing trust in what the
          reports are telling you — the mechanics don't change.
        </P>

        <H2>Where to go next</H2>
        <P>
          To write your own test cases, read{" "}
          <Link
            to="/docs/writing-test-specs"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Writing Test Specs
          </Link>{" "}
          next — it covers the goal/persona/playbook shape in detail with a worked example. To
          understand verdicts and scoring in depth,{" "}
          <Link
            to="/docs/evaluation-model"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            The Evaluation Model
          </Link>{" "}
          covers how the layered checks fit together and what each one is actually measuring.
        </P>

        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want help writing your first test case?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We'll walk through your first scenario together and set up a suite structure that fits
            your agent.
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
