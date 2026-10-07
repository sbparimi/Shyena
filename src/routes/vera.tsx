import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/vera")({
  head: () => ({
    meta: [
      { title: "Vera | Cognigy Agent Evaluation | Shyena" },
      {
        name: "description",
        content:
          "Vera turns Cognigy agent conversations into inspectable evidence, risk findings and release decisions.",
      },
    ],
  }),
  component: Vera,
});

const evidenceChecks = [
  {
    number: "01",
    title: "Business outcome",
    question: "Did the agent complete the job it was supposed to complete?",
    detail:
      "Verify the expected journey, outcome and business rules rather than judging the final sentence alone.",
    icon: Target,
  },
  {
    number: "02",
    title: "Tool calls & arguments",
    question: "Did the agent call the right tool with the right inputs?",
    detail:
      "Preserve the tool invocation and arguments as evidence so failures can be traced to the actual execution.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Resulting state",
    question: "Did the system end in the correct state?",
    detail:
      "Check what changed in the journey, not just what the user saw in the chat.",
    icon: GitBranch,
  },
  {
    number: "04",
    title: "Semantic quality",
    question: "Was the response correct, relevant and appropriate?",
    detail:
      "Use semantic evaluation with inspectable reasoning instead of treating an LLM score as a black box.",
    icon: Search,
  },
  {
    number: "05",
    title: "Execution integrity",
    question: "Can this run be trusted as test evidence?",
    detail:
      "A broken, incomplete or errored execution cannot become a passing result.",
    icon: FileCheck2,
  },
  {
    number: "06",
    title: "Security boundaries",
    question: "Did the agent stay inside the boundaries it was given?",
    detail:
      "Test prompt injection, unverified actions and cross-customer data boundaries alongside normal journeys.",
    icon: ShieldCheck,
  },
];

const audiences = [
  {
    title: "For business & release leaders",
    outcome: "Know whether the agent is safe to release.",
    points: [
      "See the journeys that passed, failed or need review.",
      "Understand the business impact behind a failure.",
      "Keep evidence behind every release decision.",
    ],
  },
  {
    title: "For QA & test engineering",
    outcome: "Move from conversation checks to evidence-driven evaluation.",
    points: [
      "Combine deterministic assertions with semantic judgement.",
      "Inspect the full execution trajectory and resulting state.",
      "Reproduce failures with the evidence that caused the verdict.",
    ],
  },
  {
    title: "For AI & security teams",
    outcome: "Test behaviour at the boundaries, not only the happy path.",
    points: [
      "Exercise adversarial and unsafe scenarios.",
      "Verify actions before treating them as successful.",
      "Test data isolation and policy boundaries.",
    ],
  },
];

function Vera() {
  return (
    <div className="bg-white text-[#17213f]">
      <section className="overflow-hidden bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f18a32]">
              Vera · Evidence-first evaluation
            </p>
            <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6.2rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">
              Don't just test the conversation.
              <span className="block text-white/45">Prove what happened.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
              Vera turns a Cognigy agent run into evidence that a business
              owner, QA engineer and security reviewer can all inspect — then
              turns that evidence into a release decision.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/sample-report"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-[#07101f]"
              >
                See the evidence
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-bold text-white"
              >
                Discuss a pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e7e9ed] bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">
                From run to decision
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em]">
                One conversation.
                <br />
                Four kinds of proof.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#596273]">
                A passing response is not enough. Vera connects the
                conversation, system behaviour, evaluation and security checks
                so the final verdict has an evidence trail behind it.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e1e4e8] bg-white p-3 shadow-[0_20px_60px_rgba(23,33,63,0.08)]">
              <img
                src="/evaluation-model-diagram.svg"
                alt="Shyena evaluation model showing conversations and context flowing through deterministic, semantic, trajectory and security evaluation into evidence, traceability and release readiness."
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">
              What Vera proves
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Every verdict answers a question a reviewer actually cares about.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {evidenceChecks.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-[#e1e4e8] bg-white p-7 text-[#17213f] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(23,33,63,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-bold text-[#a0a7b2]">
                      {item.number}
                    </span>
                    <Icon className="h-5 w-5 text-[#f18a32]" />
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.03em] text-[#17213f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-semibold leading-6 text-[#303a52]">
                    {item.question}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#687184]">
                    {item.detail}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">
              Same evidence. Different decision.
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Built for the people who have to trust the result.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article
                key={audience.title}
                className="rounded-2xl border border-white/10 bg-white p-7 text-[#17213f] shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
              >
                <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#667085]">
                  {audience.title}
                </p>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#17213f]">
                  {audience.outcome}
                </h3>
                <ul className="mt-7 space-y-4">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-[#596273]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f18a32]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-5 py-16 text-center sm:px-8 lg:py-24">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e8]">
            <LockKeyhole className="h-5 w-5 text-[#f18a32]" />
          </div>
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em]">
            A green check is only useful when you can explain why it is green.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#596273]">
            Vera preserves the evidence behind the verdict: what was executed,
            what the agent did, what was evaluated, what failed and what should
            happen next.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe3e8] px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-[#188b70]" /> Evidence
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe3e8] px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-[#188b70]" /> Traceability
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dfe3e8] px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-[#188b70]" /> Release decision
            </span>
          </div>
          <div className="mt-10">
            <Link
              to="/sample-report"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#17213f] px-6 text-sm font-bold text-white"
            >
              Open a sample report
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
