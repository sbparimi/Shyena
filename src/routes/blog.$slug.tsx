import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users, Briefcase, BookOpen } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { EvaluationIllustration } from "@/components/product/platform-illustrations";

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
      links: [{ rel: "canonical", href: `https://shyena.eu/blog/${params.slug}` }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();

  if (slug === "why-conversational-ai-needs-a-different-testing-model") {
    return (
      <ArticleShell category="Testing Strategy" title="Why Conversational AI Needs a Different Testing Model" readTime="6 min read">
        <FullArticleBody />
      </ArticleShell>
    );
  }
  if (slug === "the-problem-with-green-checkmarks-on-broken-conversations") {
    return (
      <ArticleShell category="Quality Assurance" title="The Problem With Green Checkmarks on Broken Conversations" readTime="5 min read">
        <GreenCheckmarksBody />
      </ArticleShell>
    );
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

/* ── Shared prose primitives ─────────────────────────────────────────── */

function Lead({ children }: { children: ReactNode }) {
  return <p className="text-xl leading-relaxed text-foreground">{children}</p>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 text-2xl font-bold text-foreground sm:text-3xl">{children}</h2>;
}

function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="glass-card my-8 rounded-2xl border-l-4 border-l-primary px-6 py-5">
      <p className="text-lg font-medium leading-snug text-foreground">{children}</p>
    </blockquote>
  );
}

function NumberedList({ items }: { items: { label: string; body: ReactNode }[] }) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((item, i) => (
        <li key={item.label} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
            {i + 1}
          </span>
          <p className="leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{item.label} </span>
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

function CompareCallout({
  left,
  right,
}: {
  left: { label: string; body: ReactNode };
  right: { label: string; body: ReactNode };
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{left.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{left.body}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{right.label}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{right.body}</p>
      </div>
    </div>
  );
}

function ArticleFigure({ caption }: { caption: string }) {
  return (
    <figure className="my-10">
      <div className="aspect-[1200/340] w-full overflow-hidden rounded-2xl border border-navy-border bg-navy">
        <EvaluationIllustration />
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

/* ── Sidebar ──────────────────────────────────────────────────────────── */

function ArticleSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-4">
        <div className="glass-card rounded-2xl p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ArrowRight className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-foreground">See it on your own agent</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Bring one real scenario. We'll run it against your live agent and walk through every
            judged turn with you — free.
          </p>
          <Button asChild size="sm" className="mt-4 w-full">
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Briefcase className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-foreground">Hire our evaluation engineers</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            We'll scope your first personas, quality pillars, and judge rubrics — and wire the gate
            into your release process.
          </p>
          <Button asChild size="sm" variant="outline" className="mt-4 w-full">
            <Link to="/services">View Services</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple/10 text-purple">
            <BookOpen className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-foreground">Read the evaluation model</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            How LLM-as-judge scoring, deterministic assertions, and the integrity gate combine into
            one verdict.
          </p>
          <Button asChild size="sm" variant="outline" className="mt-4 w-full">
            <Link to="/docs/evaluation-model">Read the Docs</Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-dashed border-border p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Users className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-foreground">Not ready to talk yet?</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Start with a free pilot on your own agent — no cost, no contract.
          </p>
          <Button asChild size="sm" variant="ghost" className="mt-4 w-full">
            <Link to="/pricing">See Pricing</Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}

/* ── Shell (header + layout + CTA band + back link, shared by both posts) ── */

function ArticleShell({
  category,
  title,
  readTime,
  children,
}: {
  category: string;
  title: string;
  readTime: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* Article header */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-6 pt-20 sm:px-8 sm:pt-28">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">
              {category}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-[1.1] sm:text-5xl">{title}</h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              {readTime} · Published on the Shyena blog
            </p>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <article className="min-w-0 max-w-3xl">
            {children}

            {/* Article CTA */}
            <div className="mt-16 rounded-2xl border border-navy-border bg-navy px-6 py-10 text-center sm:px-10">
              <h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">
                Want to see this model run against your agent?
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-navy-muted">
                We will set up one real scenario, run it against your live conversational AI, and
                walk through every judged turn with you.
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

          <ArticleSidebar />
        </div>
      </div>
    </>
  );
}

/* ── Article 1 body ───────────────────────────────────────────────────── */

function FullArticleBody() {
  return (
    <>
      <Lead>
        For years, test automation has meant the same thing: model a user flow as a script, drive
        the UI through each step, and assert that the expected state appears at the end. Click the
        add-to-cart button, assert the cart badge increments. Fill the form, assert the confirmation
        message. The model is deterministic, linear, and built on the assumption that a correct
        execution looks the same every time.
      </Lead>
      <P>
        That assumption is reasonable for traditional software. It collapses the moment you start
        testing a modern conversational AI agent.
      </P>

      <H2>The same persona, a different path every time</H2>
      <P>
        A conversational agent does not expose a fixed UI tree. It exposes language, and language is
        underdetermined. Ask ten real users to check an order status, and some will say "Where is my
        order?", others will give the order number unprompted, and a few will start with an unrelated
        complaint before getting to the point. A good agent should handle all of them. A scripted test
        cannot.
      </P>
      <P>
        Worse, the same test persona can reach the same goal through different but equally valid
        routes:
      </P>
      <CompareCallout
        left={{
          label: "Run A",
          body: "Agent offers a refund. User accepts. Goal reached.",
        }}
        right={{
          label: "Run B — same persona, same goal",
          body: "Agent offers a replacement instead. User prefers that. Goal reached.",
        }}
      />
      <P>
        Both are correct. A script that hardcodes "refund" will fail Run B even though the outcome is
        good. The result is not a real bug — it is a test that mistook non-determinism for a defect.
      </P>
      <P>Teams react to this in two ways, and neither scales:</P>
      <NumberedList
        items={[
          {
            label: "Keep adding branches.",
            body: "If the agent says A, do X; if B, do Y; if C, do Z. The script balloons into a brittle decision tree that takes more effort to maintain than the agent itself.",
          },
          {
            label: "Fall back to manual QA.",
            body: "A human reads transcripts and marks them pass or fail. That works for a pilot, but it is a non-starter for nightly regression suites across dozens of personas and environments.",
          },
        ]}
      />

      <H2>"Correct" is not always a boolean</H2>
      <P>
        Conventional QA is optimized for assertions that are either true or false. The total is $129,
        the button is disabled, the confirmation email was sent. These are hard facts, and a
        deterministic assertion is the right tool for them.
      </P>
      <P>
        But many of the qualities that matter in a conversation are not hard facts. Was the agent
        empathetic when the customer was frustrated? Did it stay on task without being evasive? Did it
        explain the policy clearly without overloading the user? These are judgment calls. You can
        write rubrics for them, but the rubrics themselves require interpretation.
      </P>
      <Pullquote>A human reviewer can make that call. A traditional assertion cannot.</Pullquote>
      <P>
        That is why LLM-as-judge evaluation has become central to conversational AI testing. A
        language model, given a clear rubric and the transcript, can score subjective dimensions the
        way a trained QA reviewer would. It captures reasoning, so a verdict is inspectable. It is
        consistent enough to run across thousands of conversations, and fast enough to gate a release.
        It is not perfect, but it is the first scalable approach to a problem that was previously
        manual by definition.
      </P>

      <H2>Subjective judgment is not enough on its own</H2>
      <P>
        LLM-as-judge handles the dimensions that require interpretation. It does not replace the hard
        facts. A healthcare agent must not disclose the wrong patient name. A banking agent must
        confirm the exact transfer amount before executing it. These are deterministic contracts, and
        they should be checked deterministically. The two approaches complement each other: subjective
        scoring for quality, deterministic assertions for safety and correctness.
      </P>
      <P>
        There is also a third layer that conventional testing rarely considers: execution integrity. A
        conversation that failed, truncated, or never reached its goal is not a partial success. It is
        a failed run. If you score only the turns that happened to execute, you can get a flattering
        quality number on a conversation that never resolved anything. The metrics look green; the
        release is broken.
      </P>
      <ArticleFigure caption="Shyena's execution-integrity gate: a truncated run is capped at FAIL before quality is even scored." />
      <P>
        A sound testing model treats execution integrity as a hard gate. The subjective score and the
        deterministic assertions still matter, but they are only meaningful if the conversation
        actually completed. If the run failed, the verdict is fail. The raw score can be kept visible
        for diagnosis, but it is never allowed to masquerade as a pass.
      </P>

      <H2>What a better model looks like</H2>
      <P>Put these pieces together and the shape of a better testing model emerges:</P>
      <NumberedList
        items={[
          {
            label: "Define tests as goal-driven personas, not scripts.",
            body: "A persona has a goal, a tone, and a playbook of likely turns, but the executor decides what to say next based on the agent's actual response, the way a real user would.",
          },
          {
            label: "Score every run with both LLM-based judgment and deterministic assertions,",
            body: "capturing reasoning for anything subjective.",
          },
          {
            label: "Cap the verdict at fail if the execution itself was incomplete or broken,",
            body: "regardless of how well the partial transcript scored.",
          },
        ]}
      />
      <P>
        This model does not eliminate non-determinism. It accepts it. The goal is not to force every
        run down the same path. It is to verify that, across many valid paths, the agent consistently
        reaches the right outcome, behaves well along the way, and never violates hard constraints.
        That is the standard a production conversational agent should be held to.
      </P>

      <H2>See it against your own agent</H2>
      <P>
        Shyena is built around this model. It runs real conversations against live agents, judges
        them with LLM-based quality scoring and deterministic assertions, and refuses to report a green
        verdict on a run that never completed. If you are shipping a conversational agent, that is the
        kind of testing your users deserve.
      </P>
    </>
  );
}

/* ── Article 2 body ───────────────────────────────────────────────────── */

function GreenCheckmarksBody() {
  return (
    <>
      <Lead>
        A regression suite runs overnight. In the morning, the dashboard is green. The release
        ships. Two days later, a customer posts a screenshot of a conversation that fell apart
        halfway through — the agent froze, looped, or handed off to nowhere. Someone goes back
        to check the test run. It passed. The scores were fine. Nothing about the report said
        this was coming.
      </Lead>
      <P>
        This isn't a rare edge case. It's the predictable result of how most conversational AI
        testing tools score a run, and once you see the mechanism, you can't unsee it in every
        "green" dashboard that's ever surprised you.
      </P>

      <H2>Scoring what happened, not what was supposed to happen</H2>
      <P>
        Most evaluation tools work the same way: run the conversation, collect whatever
        transcript comes out, score it. That sounds reasonable until you ask what happens when
        the conversation doesn't finish. The agent times out at turn 6 of a planned 14. The
        session drops. A tool call throws and the conversation dead-ends. The scorer doesn't
        know the plan was 14 turns — it only sees the 6 that happened, and it scores exactly
        those.
      </P>
      <P>
        If those 6 turns were polite, on-topic, and grounded, they'll score well. The report
        says PASS. Nobody lied. The tool did precisely what it was built to do: score the
        transcript it was given. The problem is that transcript was never the whole story.
      </P>

      <H2>Why the truncated run often scores better, not worse</H2>
      <P>
        Here's the part that makes this genuinely dangerous rather than just an edge case: a
        conversation that stops early frequently scores higher than one that runs to
        completion, not lower.
      </P>
      <CompareCallout
        left={{
          label: "14-turn conversation, completed",
          body: "14 chances to say something slightly off-policy, misread an amount, or handle an edge case clumsily.",
        }}
        right={{
          label: "Same conversation, dies at turn 6",
          body: "Only 6 chances to violate anything — so the average score looks cleaner, not worse.",
        }}
      />
      <Pullquote>
        The bot didn't behave better. It just didn't get far enough to behave worse.
      </Pullquote>
      <P>
        A scoring model that doesn't distinguish "this conversation succeeded cleanly" from
        "this conversation never got the chance to fail" will systematically reward the second
        case. That's not a tuning problem you fix with a stricter threshold. It's a structural
        gap in what's being measured.
      </P>

      <H2>Completion is a gate, not a metric</H2>
      <P>
        The fix isn't a smarter quality score. It's a different question, asked first: did this
        conversation actually complete? Not "did it look fine while it lasted" — did it reach
        the goal, or terminate in a real resolution state, rather than stalling, erroring, or
        timing out partway through.
      </P>
      <P>
        That question has to be answered before quality scoring counts for anything. If the
        answer is no, the verdict is FAIL — full stop, regardless of how clean the partial
        transcript looked. Execution integrity is evaluated ahead of quality, not folded into
        the same average.
      </P>
      <ArticleFigure caption="Same 0.81 quality score, opposite verdict — because execution integrity is checked first." />
      <P>
        This doesn't mean throwing away the partial score. It stays visible, attached to the
        run, because it's genuinely useful for diagnosis — it tells you exactly how the agent
        was behaving in the turns it did complete, which is often the fastest way to find where
        things started going wrong. What it can't do is stand in for a passing verdict.
      </P>
      <Pullquote>
        A broken conversation should never look like a passing one, even when the broken part
        was well-behaved.
      </Pullquote>

      <H2>What to check in your own pipeline</H2>
      <P>
        If you're running any kind of automated evaluation on a conversational agent, it's
        worth asking directly:
      </P>
      <Pullquote>
        Does a truncated, timed-out, or errored run get scored as if it were a complete one?
      </Pullquote>
      <P>
        If the answer is yes — even implicitly, because nothing in the pipeline explicitly
        checks for completion before scoring — there's a real chance your "green" dashboard has
        been quietly rewarding conversations for not getting far enough to fail.
      </P>

      <H2>See it against your own agent</H2>
      <P>
        Shyena treats execution integrity as a hard gate, checked before any quality score is
        allowed to count. A conversation that didn't complete is capped at FAIL, with the raw
        score preserved alongside it for diagnosis — never presented as a pass. If you want to
        see what your current pipeline would say about a run like this, we'll run one against
        your live agent and show you.
      </P>
    </>
  );
}
