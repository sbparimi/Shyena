import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  "why-conversational-ai-needs-a-different-testing-model": {
    title: "Why Conversational AI Needs a Different Testing Model — Shyena Blog",
    description:
      "Conventional QA automation breaks against LLM-driven agents. Here is why, and what a better testing model looks like.",
  },
  "the-problem-with-green-checkmarks-on-broken-conversations": {
    title: "The Problem With Green Checkmarks on Broken Conversations — Shyena Blog",
    description:
      "When a test runner reports success on a conversation that never reached its goal, your metrics are lying to you.",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const meta = ARTICLE_META[params.slug];
    if (!meta) {
      return {
        meta: [
          { title: "Article — Shyena Blog" },
          {
            name: "description",
            content: "An article from the Shyena blog on conversational AI evaluation.",
          },
          { property: "og:title", content: "Article — Shyena Blog" },
          {
            property: "og:description",
            content: "An article from the Shyena blog on conversational AI evaluation.",
          },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    return {
      meta: [
        { title: meta.title },
        { name: "description", content: meta.description },
        { property: "og:title", content: meta.title },
        { property: "og:description", content: meta.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();

  if (slug === "why-conversational-ai-needs-a-different-testing-model") {
    return <FullArticle />;
  }
  if (slug === "the-problem-with-green-checkmarks-on-broken-conversations") {
    return <GreenCheckmarksArticle />;
  }
  return <ArticleNotFound />;
}

function ArticleNotFound() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-8">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <p className="mt-4 text-muted-foreground">
        This article is not published yet. Check the blog index for what is available.
      </p>
      <Button asChild className="mt-8" variant="outline">
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
    </div>
  );
}

function FullArticle() {
  return (
    <>
      {/* Article header */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
              Testing Strategy
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
              Why Conversational AI Needs a Different Testing Model
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              6 min read · Published on the Shyena blog
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="lead text-xl leading-relaxed text-foreground">
            For years, test automation has meant the same thing: model a user flow as a script, drive
            the UI through each step, and assert that the expected state appears at the end. Click the
            add-to-cart button, assert the cart badge increments. Fill the form, assert the confirmation
            message. The model is deterministic, linear, and built on the assumption that a correct
            execution looks the same every time.
          </p>

          <p>
            That assumption is reasonable for traditional software. It collapses the moment you start
            testing a modern conversational AI agent.
          </p>

          <h2>The same persona, a different path every time</h2>

          <p>
            A conversational agent does not expose a fixed UI tree. It exposes language, and language is
            underdetermined. Ask ten real users to check an order status, and some will say “Where is my
            order?”, others will give the order number unprompted, and a few will start with an unrelated
            complaint before getting to the point. A good agent should handle all of them. A scripted test
            cannot.
          </p>

          <p>
            Worse, the same test persona can reach the same goal through different but equally valid
            routes. In one run the agent offers a refund and the user accepts. In another run the agent
            offers a replacement and the user prefers that. Both are correct. A script that hardcodes
            “refund” will fail the second run even though the outcome is good. The result is not a real
            bug. It is a test that mistook non-determinism for a defect.
          </p>

          <p>
            Teams react to this in two ways, and neither scales. The first is to keep adding branches to
            the script: if the agent says A, do X; if B, do Y; if C, do Z. The script balloons into a
            brittle decision tree that takes more effort to maintain than the agent itself. The second
            is to fall back to manual QA: a human reads transcripts and marks them pass or fail. That
            works for a pilot, but it is a non-starter for nightly regression suites across dozens of
            personas and environments.
          </p>

          <h2>"Correct" is not always a boolean</h2>

          <p>
            Conventional QA is optimized for assertions that are either true or false. The total is $129,
            the button is disabled, the confirmation email was sent. These are hard facts, and a
            deterministic assertion is the right tool for them.
          </p>

          <p>
            But many of the qualities that matter in a conversation are not hard facts. Was the agent
            empathetic when the customer was frustrated? Did it stay on task without being evasive? Did it
            explain the policy clearly without overloading the user? These are judgment calls. You can
            write rubrics for them, but the rubrics themselves require interpretation. A human reviewer
            can do it. A traditional assertion cannot.
          </p>

          <p>
            That is why LLM-as-judge evaluation has become central to conversational AI testing. A
            language model, given a clear rubric and the transcript, can score subjective dimensions the
            way a trained QA reviewer would. It captures reasoning, so a verdict is inspectable. It is
            consistent enough to run across thousands of conversations, and fast enough to gate a release.
            It is not perfect, but it is the first scalable approach to a problem that was previously
            manual by definition.
          </p>

          <h2>Subjective judgment is not enough on its own</h2>

          <p>
            LLM-as-judge handles the dimensions that require interpretation. It does not replace the hard
            facts. A healthcare agent must not disclose the wrong patient name. A banking agent must
            confirm the exact transfer amount before executing it. These are deterministic contracts, and
            they should be checked deterministically. The two approaches complement each other: subjective
            scoring for quality, deterministic assertions for safety and correctness.
          </p>

          <p>
            There is also a third layer that conventional testing rarely considers: execution integrity. A
            conversation that failed, truncated, or never reached its goal is not a partial success. It is
            a failed run. If you score only the turns that happened to execute, you can get a flattering
            quality number on a conversation that never resolved anything. The metrics look green; the
            release is broken.
          </p>

          <p>
            A sound testing model treats execution integrity as a hard gate. The subjective score and the
            deterministic assertions still matter, but they are only meaningful if the conversation
            actually completed. If the run failed, the verdict is fail. The raw score can be kept visible
            for diagnosis, but it is never allowed to masquerade as a pass.
          </p>

          <h2>What a better model looks like</h2>

          <p>
            Put these pieces together and the shape of a better testing model emerges. First, define tests
            as goal-driven personas, not scripts. A persona has a goal, a tone, and a playbook of likely
            turns, but the executor decides what to say next based on the agent’s actual response, the way
            a real user would. Second, score every run with both LLM-based judgment and deterministic
            assertions, capturing reasoning for anything subjective. Third, cap the verdict at fail if the
            execution itself was incomplete or broken, regardless of how well the partial transcript
            scored.
          </p>

          <p>
            This model does not eliminate non-determinism. It accepts it. The goal is not to force every
            run down the same path. It is to verify that, across many valid paths, the agent consistently
            reaches the right outcome, behaves well along the way, and never violates hard constraints.
            That is the standard a production conversational agent should be held to.
          </p>

          <h2>See it against your own agent</h2>

          <p>
            Shyena is built around this model. It runs real conversations against live agents, judges
            them with LLM-based quality scoring and deterministic assertions, and refuses to report a green
            verdict on a run that never completed. If you are shipping a conversational agent, that is the
            kind of testing your users deserve.
          </p>
        </div>

        {/* Article CTA */}
        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want to see this model run against your agent?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We will set up one real scenario, run it against your live conversational AI, and walk through
            every judged turn with you.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}

function GreenCheckmarksArticle() {
  return (
    <>
      {/* Article header */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
              Quality Assurance
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">
              The Problem With Green Checkmarks on Broken Conversations
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              5 min read · Published on the Shyena blog
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto w-full max-w-3xl px-5 pb-24 sm:px-8">
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="lead text-xl leading-relaxed text-foreground">
            A regression suite runs overnight. In the morning, the dashboard is green. The release
            ships. Two days later, a customer posts a screenshot of a conversation that fell apart
            halfway through — the agent froze, looped, or handed off to nowhere. Someone goes back
            to check the test run. It passed. The scores were fine. Nothing about the report said
            this was coming.
          </p>

          <p>
            This isn't a rare edge case. It's the predictable result of how most conversational AI
            testing tools score a run, and once you see the mechanism, you can't unsee it in every
            "green" dashboard that's ever surprised you.
          </p>

          <h2>Scoring what happened, not what was supposed to happen</h2>

          <p>
            Most evaluation tools work the same way: run the conversation, collect whatever
            transcript comes out, score it. That sounds reasonable until you ask what happens when
            the conversation doesn't finish. The agent times out at turn 6 of a planned 14. The
            session drops. A tool call throws and the conversation dead-ends. The scorer doesn't
            know the plan was 14 turns — it only sees the 6 that happened, and it scores exactly
            those.
          </p>

          <p>
            If those 6 turns were polite, on-topic, and grounded, they'll score well. The report
            says PASS. Nobody lied. The tool did precisely what it was built to do: score the
            transcript it was given. The problem is that transcript was never the whole story.
          </p>

          <h2>Why the truncated run often scores better, not worse</h2>

          <p>
            Here's the part that makes this genuinely dangerous rather than just an edge case: a
            conversation that stops early frequently scores <em>higher</em> than one that runs to
            completion, not lower. A full 14-turn conversation about a damage claim has 14 chances
            to say something slightly off-policy, misread an amount, or handle an edge case
            clumsily. A conversation that dies at turn 6 has only had 6 chances. Fewer turns means
            fewer opportunities to violate anything — so the average score often looks cleaner, not
            worse. The bot didn't behave better. It just didn't get far enough to behave worse.
          </p>

          <p>
            A scoring model that doesn't distinguish "this conversation succeeded cleanly" from
            "this conversation never got the chance to fail" will systematically reward the second
            case. That's not a tuning problem you fix with a stricter threshold. It's a structural
            gap in what's being measured.
          </p>

          <h2>Completion is a gate, not a metric</h2>

          <p>
            The fix isn't a smarter quality score. It's a different question, asked first:
            <em> did this conversation actually complete?</em> Not "did it look fine while it
            lasted" — did it reach the goal, or terminate in a real resolution state, rather than
            stalling, erroring, or timing out partway through.
          </p>

          <p>
            That question has to be answered before quality scoring counts for anything. If the
            answer is no, the verdict is FAIL — full stop, regardless of how clean the partial
            transcript looked. Execution integrity is evaluated ahead of quality, not folded into
            the same average.
          </p>

          <p>
            This doesn't mean throwing away the partial score. It stays visible, attached to the
            run, because it's genuinely useful for diagnosis — it tells you exactly how the agent
            was behaving in the turns it did complete, which is often the fastest way to find where
            things started going wrong. What it can't do is stand in for a passing verdict. A
            broken conversation should never look like a passing one, even when the broken part was
            well-behaved.
          </p>

          <h2>What to check in your own pipeline</h2>

          <p>
            If you're running any kind of automated evaluation on a conversational agent, it's
            worth asking directly: does a truncated, timed-out, or errored run get scored as if it
            were a complete one? If the answer is yes — even implicitly, because nothing in the
            pipeline explicitly checks for completion before scoring — there's a real chance your
            "green" dashboard has been quietly rewarding conversations for not getting far enough
            to fail.
          </p>

          <h2>See it against your own agent</h2>

          <p>
            Shyena treats execution integrity as a hard gate, checked before any quality score is
            allowed to count. A conversation that didn't complete is capped at FAIL, with the raw
            score preserved alongside it for diagnosis — never presented as a pass. If you want to
            see what your current pipeline would say about a run like this, we'll run one against
            your live agent and show you.
          </p>
        </div>

        {/* Article CTA */}
        <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
          <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
            Want to see this model run against your agent?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-navy-muted">
            We will set up one real scenario, run it against your live conversational AI, and walk through
            every judged turn with you.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/contact">
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
}
