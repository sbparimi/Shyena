import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Users, Briefcase, BookOpen } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EvaluationIllustration, SecurityIllustration } from "@/components/product/platform-illustrations";

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
  "how-to-test-a-cognigy-agent": {
    title: "How to Test a Cognigy Agent: A Practical Guide — Shyena Blog",
    description:
      "Learn how Shyena tests Cognigy agents: goal-driven cases, deterministic checks, LLM judging, and an execution-integrity gate that stops false passes.",
  },
  "cognigy-agent-security-testing-with-ziran": {
    title: "Cognigy Agent Security Testing: Red-Teaming with Ziran — Shyena Blog",
    description:
      "How we red-team Cognigy agents: a risk-scored pipeline that prioritizes attacks, executes them adaptively with Ziran, then scores the results.",
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
  if (slug === "how-to-test-a-cognigy-agent") {
    return (
      <ArticleShell category="Testing Strategy" title="How to Test a Cognigy Agent" readTime="7 min read">
        <CognigyTestingBody />
      </ArticleShell>
    );
  }
  if (slug === "cognigy-agent-security-testing-with-ziran") {
    return (
      <ArticleShell
        category="Security"
        title="How We Red-Team Cognigy Agents for Security, Using Ziran"
        readTime="7 min read"
      >
        <ZiranPipelineBody />
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

function SecurityArticleFigure({ caption }: { caption: string }) {
  return (
    <figure className="my-10">
      <div className="aspect-[1200/340] w-full overflow-hidden rounded-2xl border border-navy-border bg-navy">
        <SecurityIllustration />
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

/* ── Article 3 body ───────────────────────────────────────────────────── */

const COGNIGY_TESTING_FAQS = [
  {
    question: "How do you test a Cognigy agent?",
    answer:
      "Write test cases as a goal, a persona, and a playbook rather than a fixed script, then have an agentic executor drive a real browser or voice session against the live agent, improvising turns within those boundaries. Check the conversation against deterministic assertions for facts that must never be fuzzy (refund amounts, required disclosures, PII redaction, routing, latency), and use LLM-as-judge scoring with recorded reasoning for everything else — tone, groundedness, whether the customer's actual problem got resolved. Run an execution-integrity check before any of that quality scoring, so a conversation that never finished can't still pass.",
  },
  {
    question: "What's different about testing a Cognigy conversational AI agent vs. a traditional app?",
    answer:
      "A traditional app test targets a closed, deterministic interface — fixed buttons and fields, scripted clicks, exact-match assertions. A Cognigy agent breaks all three assumptions: the input space is unbounded (customers phrase the same request a hundred ways), the output is intentionally non-deterministic (the same input can produce differently worded replies without that being a bug), and state persists across turns rather than resetting per screen, so the test also has to check memory, recovery from contradictions, and mid-conversation topic changes.",
  },
  {
    question: "What should a Cognigy test case include?",
    answer:
      "Three things instead of a scripted line-by-line transcript: a goal (the outcome the test represents), a persona (who's asking, their tone and patience), and a playbook (behavioral boundaries — what to volunteer, what to withhold until asked). Across a suite, cases should cover three layers: happy paths, edge cases (missing info, out-of-policy requests, escalations), and boundary conditions sitting right at a policy threshold, since that's where flow logic bugs actually live.",
  },
  {
    question: "Why do Cognigy test suites report false passes?",
    answer:
      "Because a conversation that times out or gets cut short still looks good in isolation — it simply never had the chance to say anything wrong. A three-turn transcript that ends abruptly can score higher than a full ten-turn one that actually finished, purely for having fewer opportunities to violate anything. The fix is to gate on execution integrity first: a conversation that didn't complete is capped as a failure regardless of what its partial quality score would have been.",
  },
] as const;

const COGNIGY_TESTING_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COGNIGY_TESTING_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function CognigyTestingBody() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COGNIGY_TESTING_FAQ_SCHEMA) }}
      />
      <Lead>
        A Cognigy flow that passed every design review can still fail its first real
        conversation. Not because the flow logic is wrong, but because a customer phrased their
        problem in a way nobody scripted for, or the agent handled turn four correctly and then
        lost the thread by turn seven. Testing a conversational agent is a different discipline
        from testing a web form, and treating it like one is the single most common reason
        Cognigy QA programs stall out at "looks fine in the demo, breaks in production."
      </Lead>
      <P>
        This is a practical guide to actually testing a Cognigy agent: what to test, how to
        structure test cases, what to check deterministically versus what to judge, and the
        order those checks have to happen in so your results are trustworthy rather than just
        green.
      </P>

      <H2>Why Traditional Test Automation Breaks Here</H2>
      <P>
        Most test automation assumes a closed, deterministic interface: a fixed set of buttons,
        fields, and states, and a script that clicks through them in the same order every run.
        Cognigy agents violate every one of those assumptions.
      </P>
      <P>
        The input space is unbounded. A user can ask for the same thing a hundred different
        ways, and your agent has to handle all of them, not just the one your test script types.
        A click-path test that submits "I want to cancel my order" and checks for a specific
        reply string tells you nothing about what happens when the same customer instead types
        "can u stop that delivery its still not out for shipment right".
      </P>
      <P>
        The output is non-deterministic by design. The same input, run twice, can produce
        differently worded — sometimes differently structured — responses, especially once an
        LLM is anywhere in the flow. A test that asserts exact string equality on the bot's
        reply will flake constantly, and that flakiness is the wrong thing to chase: the
        variation isn't a bug, it's the agent behaving normally. If there's a bug, it's in what
        the reply means, not in its exact phrasing.
      </P>
      <P>
        State lives across turns, not within a single request. A traditional UI test verifies
        one screen at a time. A conversational test has to track what the agent has already been
        told, whether it remembers it three turns later, whether it asks for information it was
        already given, and whether it can recover gracefully when the user contradicts
        themselves or changes the subject mid-flow.
      </P>
      <Pullquote>
        A conversational agent is not a form with more steps. It's a system with memory, and
        memory is exactly what most test suites forget to check.
      </Pullquote>
      <P>
        None of this means Cognigy agents are untestable — it means the testing model has to
        shift from exact-match scripting to goal-directed evaluation: does the agent get the
        customer to the right outcome, through a coherent conversation, regardless of the
        specific words either side used to get there.
      </P>

      <H2>A Concrete Methodology for Testing a Cognigy Agent</H2>

      <H2>1. Write test cases as a goal, a persona, and a playbook — not a script</H2>
      <P>
        Instead of hard-coding "the tester says X, then Y, then Z," define three things: the
        goal (what outcome does this test represent), the persona (who is asking — tone,
        patience, how much they already know), and the playbook (behavioral boundaries — what to
        volunteer, what to hold back until asked, how to react to being asked for something it
        doesn't have).
      </P>
      <P>
        The executor then improvises the actual turns inside those boundaries, reacting to what
        the agent really says rather than following a pre-written line. That's what produces
        conversations resembling what real customers actually do, because real customers don't
        follow your script either.
      </P>

      <H2>2. Define coverage the way a conversation earns it</H2>
      <P>
        "Coverage" for a conversational flow isn't line coverage or button coverage. Think in
        three layers:
      </P>
      <NumberedList
        items={[
          {
            label: "Happy path.",
            body: "the customer has everything the agent needs, states their intent clearly, and the flow should resolve cleanly in a small number of turns.",
          },
          {
            label: "Edge cases.",
            body: "missing information, out-of-policy requests, mid-conversation topic changes, the customer asking for something the agent has to explicitly decline, escalation triggers.",
          },
          {
            label: "Boundary conditions.",
            body: "the values right at a policy threshold — the return window's last valid day, the exact refund cutoff amount, an order that's almost eligible but not quite. These are where flow logic bugs actually live.",
          },
        ]}
      />
      <P>
        A test suite that only covers happy paths will pass consistently and tell you almost
        nothing.
      </P>

      <H2>3. Separate what you assert from what you judge</H2>
      <CompareCallout
        left={{
          label: "Deterministic assertions",
          body: "Facts that are unambiguous and must never be fuzzy: the refund amount quoted, whether a required disclosure was actually said, whether PII got redacted before being logged, whether a handoff routed to the correct queue, whether the response came back inside a latency budget. Exact checks, pass or fail, no interpretation.",
        }}
        right={{
          label: "Judged evaluation",
          body: "Everything else — was the tone appropriate, did the agent stay grounded rather than confabulating, did it resolve the customer's actual problem. No single correct string to match against; score against defined quality dimensions, with the reasoning behind each score recorded.",
        }}
      />

      <H2>4. Check that the conversation actually completed before you score its quality</H2>
      <P>
        If a conversation times out or gets stuck and the run is truncated, everything that did
        happen before the cutoff can still look good in isolation — because a conversation that
        stops early has had fewer opportunities to say anything wrong. A three-turn transcript
        that ends abruptly can score better than a full ten-turn transcript that actually
        finished, purely because it never got far enough to violate anything.
      </P>
      <Pullquote>
        A conversation that stops early has had fewer opportunities to say anything wrong. Score
        it before checking whether it finished, and you're rewarding failure for quitting early.
      </Pullquote>
      <P>
        The fix is to make execution integrity a gate that runs before quality scoring: a
        conversation that didn't complete is capped as a failure regardless of what its partial
        score would have been.
      </P>

      <H2>Common Pitfalls Teams Hit</H2>
      <NumberedList
        items={[
          {
            label: "Treating non-determinism as a bug to eliminate.",
            body: "Test the meaning, not the phrasing.",
          },
          {
            label: "Carrying over click-path thinking.",
            body: "A test plan built around \"the user clicks button A, then button B\" under-tests a system where the user can say the equivalent of both in one sentence.",
          },
          {
            label: "False green on truncated runs.",
            body: "A test suite with a high pass rate on a flow that's actually crashing mid-conversation is worse than no test suite, because it hides the problem.",
          },
          {
            label: "Testing the reply and ignoring the decision behind it.",
            body: "A response can read correctly while the agent got there by the wrong route.",
          },
          {
            label: "Skipping boundary conditions because they're tedious to write.",
            body: "They're tedious because they require knowing the flow's actual thresholds, not because they're unimportant.",
          },
        ]}
      />

      <H2>How Shyena Tests Cognigy Agents Today</H2>
      <P>
        This methodology is the actual shape of how <Link to="/product">Shyena tests Cognigy agents</Link>{" "}
        today — Cognigy is Shyena's live, flagship integration. Test cases are written as a goal,
        a persona, and a behavioral playbook, and an agentic executor drives a real browser or
        voice session against the live Cognigy agent — the same channel real customers use, chat
        or voice, no mocks.
      </P>
      <P>
        Each conversation is checked against deterministic assertions for facts that must never
        be fuzzy, and{" "}
        <Link to="/docs/evaluation-model">
          LLM-as-judge scoring across quality pillars, with reasoning kept alongside every score
        </Link>
        . A six-construct semantic model checks whether the conversation's state transitions were
        valid — intent integrity, context memory, dialogue state correctness, business
        compliance, tool decisions, and recovery. A separate layer scores the agent's internal
        decisions: the tool and routing choices behind each reply, not just the reply's wording —
        the exact gap pitfall #4 above describes.
      </P>
      <ArticleFigure caption="Execution integrity is checked before quality is scored — a conversation that failed, timed out, or was cut short is capped at FAIL regardless of how its surviving turns scored." />
      <P>
        Execution integrity is checked before quality is scored, not folded into the same
        number. A conversation that failed, timed out, or was cut short is capped at fail no
        matter how well its surviving turns would otherwise have scored. When something does
        fail, the platform generates a root-cause report automatically — a 5-Whys chain per
        finding, output as Jira-ready markdown.
      </P>
      <P>
        By default, Shyena evaluates 31 metrics per conversation, drawn from a full catalog of
        117 — enough to score deterministic facts, quality dimensions, semantic validity, and
        decision correctness in a single run, without hand-assembling that coverage yourself.
      </P>
      <P>
        None of this replaces judgment. What it changes, when you're testing a Cognigy agent, is
        whether the results you get back are ones you can trust.
      </P>
      <P>
        Ready to see it against your own agent? Shyena offers a <Link to="/pricing">free pilot</Link>{" "}
        to run this evaluation model on your Cognigy build before you commit to anything.
      </P>

      <H2>Frequently Asked Questions</H2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {COGNIGY_TESTING_FAQS.map((faq, i) => (
          <AccordionItem key={faq.question} value={`cognigy-testing-faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

/* ── Article 4 body ───────────────────────────────────────────────────── */

const ZIRAN_PIPELINE_FAQS = [
  {
    question: "How do you red-team a Cognigy agent?",
    answer:
      "The pipeline runs in three phases. A seven-stage planning phase decides what's worth testing — research, threat modeling, a knowledge graph of the agent's flows and tool chains, hypothesis generation, risk scoring, and cost optimization — and outputs a bounded set of attack campaigns. Ziran, an independent adaptive red-teaming engine, then executes those campaigns as multi-turn adversarial conversations. Finally, a security analysis and scoring stage turns the resulting transcripts into a categorized, actionable verdict.",
  },
  {
    question: "Why not run every security test on every change?",
    answer:
      "Because a security probe against a live conversational agent is a real session — real inference calls, sometimes real backend integrations, real wall-clock time to play out a multi-turn attack. Running a comprehensive attack library on every change turns testing into a cost and latency problem: teams either stop running the checks on every change, or thin them down until they're too shallow to catch anything real. Prioritizing which attacks run against which changes, at which cadence, avoids both failure modes.",
  },
  {
    question: "What is Ziran used for in AI agent security testing?",
    answer:
      "Ziran is an independent open-source project for adaptive AI red-teaming — not something built in-house. In this pipeline, it's the execution engine: once the planning phase selects a bounded set of campaigns, Ziran runs the actual adversarial conversations against the live agent, adjusting its approach mid-conversation based on how the agent responds, rather than replaying a fixed script.",
  },
  {
    question: "How do you decide which security campaigns to run?",
    answer:
      "Hypotheses about how an attacker might manipulate the agent are generated from a knowledge graph of its flows and tool chains, then scored for likelihood and potential impact. Those scored hypotheses are weighed against the cost of actually testing them — session time, inference spend, execution complexity — to find the campaigns that give the best signal for the resources spent. The result is a bounded, prioritized set sized to the moment: small for a routine change, larger for a scheduled deep assessment.",
  },
] as const;

const ZIRAN_PIPELINE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ZIRAN_PIPELINE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function ZiranPipelineBody() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ZIRAN_PIPELINE_FAQ_SCHEMA) }}
      />
      <Lead>
        Conversational AI agents built on platforms like Cognigy don't sit still. Every prompt
        tweak, every new flow, every added tool integration changes the agent's attack surface.
        The instinctive response is to treat security testing like unit testing: run the full
        suite on every change, catch regressions immediately, sleep well.
      </Lead>
      <P>
        That instinct breaks down fast once the "test" is an adversarial conversation against a
        live conversational AI platform. Unlike a unit test, a security probe against a deployed
        agent isn't free or instantaneous — it's a real session, consuming real inference calls,
        sometimes touching real backend integrations, taking real wall-clock time to play out a
        multi-turn manipulation attempt. Multiply that by a comprehensive attack library — prompt
        injection variants, jailbreak patterns, tool-misuse attempts, data exfiltration probes,
        social-engineering flows — and running the entire catalog on every change stops being a
        testing strategy and starts being a cost and latency problem. This is the core tension in
        Cognigy agent security testing: the same probes that make a test meaningful are the ones
        that make running all of them, always, unaffordable.
      </P>
      <P>
        The failure mode isn't subtle. Run everything, every time, and one of two things happens:
        the checks get so slow and expensive that teams quietly stop running them on every
        change, or the checks get quietly thinned down to something fast and shallow enough to
        survive CI — at which point they stop catching anything real. Neither outcome is
        acceptable for something as consequential as agent security.
      </P>
      <Pullquote>
        A security check that's too slow to run often, or too shallow to catch anything real, is
        the same failure wearing two different costumes.
      </Pullquote>
      <P>
        What's actually needed is prioritization — a system that decides which attacks are worth
        running, against which changes, at which cadence, before anything touches the live
        platform. That's the problem the pipeline below is built to solve.
      </P>

      <H2>The architecture: deciding what's worth testing</H2>
      <P>
        The pipeline for red-teaming Cognigy agents has three conceptual phases. The first — and
        largest — is entirely about triage: figuring out what's worth attacking before any attack
        actually runs.
      </P>
      <P>
        Change Implemented is the trigger: something about the agent changed — a flow, a prompt,
        an integration, a permission — and that change is what the rest of the pipeline reasons
        about. Nothing downstream runs in a vacuum; it runs in the context of what just moved.
        From there, seven planning stages decide what's worth testing:
      </P>
      <NumberedList
        items={[
          {
            label: "Security Research Agent.",
            body: "Gathers context before deciding what to test — what kinds of weaknesses are known to affect systems like this one, what's changed about the threat landscape, what classes of failure are relevant to a conversational agent with this one's capabilities.",
          },
          {
            label: "Threat Modeling.",
            body: "Turns that research into a structured picture of what could go wrong — not a generic checklist, but a model of this agent's specific exposure: what it can do, what it's connected to, where an adversarial conversation could push it somewhere it shouldn't go.",
          },
          {
            label: "Knowledge Graph.",
            body: "Maps the threat model onto a structural representation of the agent itself — its flows, its tool chains, its decision points — so \"what's exposed\" is a queryable graph the rest of the pipeline can reason over, not a paragraph of prose.",
          },
          {
            label: "Hypothesis Generation.",
            body: "Generates concrete hypotheses from that graph: specific ways an attacker might try to manipulate this specific agent, given its specific structure. This is where \"prompt injection is a risk category\" becomes \"here are the particular paths through this agent where it might matter.\"",
          },
          {
            label: "Risk Scoring.",
            body: "Scores each hypothesis — likelihood, potential impact, how directly it connects to something the agent can actually do — so the pipeline can tell a high-value target apart from a theoretical curiosity.",
          },
          {
            label: "Cost Optimization.",
            body: "Weighs scored hypotheses against the cost of actually testing them — session time, inference spend, execution complexity — to find the set of campaigns that gives the best signal for the resources spent.",
          },
          {
            label: "Campaign Selection.",
            body: "The output of the planning phase: a concrete, bounded set of attack campaigns to actually run, sized appropriately for the moment — a small set for a routine change, a larger set for a scheduled deep assessment.",
          },
        ]}
      />
      <P>
        Everything from Security Research Agent through Campaign Selection is offline,
        planning-stage work — it decides what to test, before anything touches the live agent.
        Whether that planning phase is itself LLM-driven end-to-end is still an open, actively
        evaluated design question, not a settled answer. It would be easy to write this section as
        though the reasoning chain from research to campaign selection is already a proven,
        autonomous pipeline; it isn't yet. What's settled is the shape — research feeds threat
        modeling feeds a structural graph feeds hypotheses feeds scoring feeds cost-aware
        selection. How much of that reasoning is automated versus assisted is still being worked
        out.
      </P>

      <H2>Actually attacking it: Ziran in action</H2>
      <P>
        Once a bounded, prioritized set of campaigns is selected, execution happens using{" "}
        <Link to="/security">adaptive AI red-teaming</Link> — Ziran, an independent open-source
        project. Ziran isn't something built in-house — it's a third-party engine, and campaigns
        selected upstream are handed to it as the thing that actually runs the adversarial
        conversations: multi-turn, adaptive attacks that can adjust their approach mid-conversation
        based on how the agent responds, rather than replaying a fixed script.
      </P>
      <P>
        This is the one stage in the pipeline that's genuinely execution, not planning — real
        sessions against a real agent, driven by real (if adversarial) conversational turns. It's
        also exactly why the upstream prioritization work matters so much: this is the expensive,
        slow part, and the entire point of the planning phase is to make sure only the campaigns
        worth running actually get here.
      </P>
      <CompareCallout
        left={{
          label: "Campaign Selection",
          body: "Decides what to attack — which hypotheses, against which parts of the agent, within what budget.",
        }}
        right={{
          label: "Ziran Execution",
          body: "Decides, adaptively, how to carry out each selected attack — adjusting its approach turn by turn based on how the agent actually responds.",
        }}
      />
      <SecurityArticleFigure caption="Individually-safe tools can form dangerous attack paths when chained — graph-based discovery is what surfaces them." />

      <H2>Turning results into a verdict: security analysis and scoring</H2>
      <P>
        A completed adversarial campaign produces a transcript, not a verdict. The final stage's
        job is to close that gap: take what happened during execution — what the agent revealed,
        what it refused, where it deviated from expected behavior — and turn it into something a
        team can act on, a scored, categorized read on what the campaign actually demonstrated.
      </P>
      <P>
        The tooling and metrics meant to do that are still under investigation, not finalized.
        Turning an adversarial transcript into a reliable, well-calibrated verdict is a hard
        problem in its own right, and it's being treated as one rather than assumed away. What's
        fixed is the role this stage plays in the pipeline — the boundary between "a campaign ran"
        and "here's what it means" — not yet the mechanism that fills it.
      </P>

      <H2>Why this is worth building: matching test depth to cadence</H2>
      <P>
        The payoff of this structure isn't any single stage — it's what the separation between
        planning and execution makes possible. Because campaign selection is cost-aware and
        risk-scored, the same pipeline can support genuinely different testing cadences without
        needing different tooling for each:
      </P>
      <NumberedList
        items={[
          {
            label: "PR-level check.",
            body: "A small, cheap, high-confidence set of campaigns scoped tightly to what actually changed — fast enough to sit in a normal review loop.",
          },
          {
            label: "Nightly run.",
            body: "A wider net, catching things too expensive to check on every single change.",
          },
          {
            label: "Weekly or release-gated assessment.",
            body: "Goes deep — larger campaigns, more adversarial variety, closer to exhaustive within a still-bounded budget.",
          },
        ]}
      />
      <P>
        That's the actual alternative to "run everything, every time." Instead of one scan that's
        forced to be either too slow to run often or too shallow to catch anything real, the
        cost-optimization and campaign-selection stages let the same pipeline dial its depth to
        match the moment — cheap and fast where speed matters, deep and expensive where
        thoroughness matters, without maintaining two separate systems to get there.
      </P>
      <P>
        There's a longer-term shape to this too: as agentic AI systems increasingly talk to other
        agentic systems — MCP-style tool access, agent-to-agent coordination — the attack surface
        stops being "one conversational agent" and starts being a graph of interacting systems. A
        pipeline that already reasons about an agent's structure as a knowledge graph, and already
        separates "what's worth testing" from "how to attack it," has real room to extend in that
        direction rather than needing to be rebuilt for it.
      </P>

      <H2>Where this fits at Shyena: Cognigy red team vs. quality testing</H2>
      <P>
        Shyena's core evaluation product tests Cognigy conversational and voice agents for
        correctness and quality. Security red-teaming, using Ziran as the execution engine, is a
        related but distinct capability — one built around graph-based discovery of an agent's
        tool chains, detection of execution-level side effects, and adaptive multi-phase campaigns
        rather than fixed attack scripts. Read more about how this Cognigy red team capability
        works on <Link to="/security">our security page</Link>. The pipeline described here is the
        architecture we're building toward to make that capability practical to run continuously,
        not a system we're claiming is fully proven end to end today — the planning-phase
        automation and the analysis/scoring tooling are both still active work. What's settled is
        the shape: prioritize before you attack, attack adaptively using Ziran as the engine, and
        score honestly before drawing conclusions. Teams that want this pipeline run as a managed
        engagement rather than built and operated in-house can see how that works on{" "}
        <Link to="/services">our services page</Link>.
      </P>

      <H2>Frequently Asked Questions</H2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {ZIRAN_PIPELINE_FAQS.map((faq, i) => (
          <AccordionItem key={faq.question} value={`ziran-pipeline-faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
