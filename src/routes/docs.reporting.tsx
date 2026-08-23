import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { H2, P, Ul } from "@/components/docs/doc-prose";

export const Route = createFileRoute("/docs/reporting")({
  head: () => ({
    meta: [
      { title: "Reporting & Dashboards — Shyena Docs" },
      {
        name: "description",
        content:
          "How to read the run-level view, a single case's verdict, and the automatic root-cause report — and how to tell a real failure from an infrastructure hiccup.",
      },
      { property: "og:title", content: "Reporting & Dashboards — Shyena Docs" },
      {
        property: "og:description",
        content:
          "How to read the run-level view, a single case's verdict, and the automatic root-cause report — and how to tell a real failure from an infrastructure hiccup.",
      },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/reporting" }],
  }),
  component: ReportingDoc,
});

function ReportingDoc() {
  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
            Docs · Reporting &amp; Dashboards
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
            From a dashboard to a root cause
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A finished run gives you pass/fail counts first, then lets you drill into any single
            case's reasoning. Here's how to read both, and how to tell a real agent defect from an
            infrastructure hiccup.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <H2>The run-level view</H2>
        <P>
          After a suite finishes, the run view gives you the shape of the result before any of the
          detail: how many cases passed, how many failed, how many were skipped, and — once you've
          run the same suite more than once — how that balance is trending over time. This is the
          first place to look after any regression run: a sudden dip tells you something changed,
          even before you know what.
        </P>
        <P>From here you drill into individual cases, usually starting with whatever failed.</P>

        <H2>Reading a single case's verdict</H2>
        <P>Each case has its own verdict page, and it's built to show its reasoning, not just its outcome. You'll find:</P>
        <Ul
          items={[
            <>
              <strong className="font-semibold text-foreground">The verdict itself</strong> — pass
              or fail, the final word after every check has been applied.
            </>,
            <>
              <strong className="font-semibold text-foreground">The pre-gate score</strong> — what
              the conversation would have scored on quality alone, kept visible even when the
              verdict is fail. This is what lets you tell "the conversation broke early" apart from
              "the conversation completed but was actually poor," which are very different problems
              to chase.
            </>,
            <>
              <strong className="font-semibold text-foreground">The reasoning behind judged scores</strong>{" "}
              — for anything scored by quality judgment rather than a hard fact, the explanation for
              that score is attached, not just the number. You can see why a tone score was low or
              why a resolution was judged incomplete, not just that it was.
            </>,
          ]}
        />
        <P>
          Reading the verdict alongside the conversation transcript is usually the fastest way to
          understand what happened — the verdict tells you what to look for, and the transcript
          tells you where.
        </P>

        <H2>Real failure vs. infrastructure hiccup</H2>
        <P>
          Not every fail on the run view means the agent did something wrong. Some failures happen
          before the conversation ever really gets going — a session that never opened, a
          connection that dropped, a page that didn't load in time. These read differently from a
          genuine agent defect: the transcript is short or empty, there's no meaningful
          back-and-forth to evaluate, and the failure reason points at the mechanics of running the
          test rather than at anything the agent said or did.
        </P>
        <P>
          A genuine failure, by contrast, usually has a full transcript: the conversation happened,
          and somewhere in it the agent gave a wrong answer, missed the point, or failed to resolve
          what the customer actually needed. When you're triaging a batch of failures, sorting these
          two categories apart first saves you from spending investigation time on cases that just
          need to be re-run. (
          <Link
            to="/docs/troubleshooting"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            Troubleshooting
          </Link>{" "}
          covers what to do once you've spotted one.)
        </P>

        <H2>How the root-cause report helps</H2>
        <P>
          Every failed case automatically gets a generated root-cause report — not just a red mark
          telling you something broke, but a structured explanation of what went wrong and why,
          written in a format ready to drop into a ticket. Rather than starting your investigation
          from a bare transcript, you start from an explanation that's already worked backward from
          the failure to a plausible cause.
        </P>
        <P>
          This matters most at volume: when a regression run comes back with a dozen failures,
          reading a dozen full transcripts cold is slow. Reading a dozen root-cause summaries first —
          then opening the transcript only for the ones that need closer confirmation — is not. The
          report is a starting hypothesis, not a final verdict on its own; it's there to make sure
          you're not doing the same reasoning work by hand that the report has already done for you.
        </P>

        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want to see a real report on your own agent?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We'll run a scenario against your live agent and walk through the run view, a verdict,
            and a root-cause report together.
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
