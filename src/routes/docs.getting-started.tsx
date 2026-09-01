import { ArrowRight, BookOpen, GraduationCap, Layers3 } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

export const Route = createFileRoute("/docs/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Shyena Docs" },
      { name: "description", content: "A structured learning path for AI-agent assurance, from foundational concepts through practitioner methods and expert evaluation science." },
      { property: "og:title", content: "Getting Started — Shyena Docs" },
      { property: "og:description", content: "Ten progressively deeper documentation guides for understanding, testing, evaluating and assuring AI agents." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/docs/getting-started" }],
  }),
  component: GettingStartedPage,
});

const GUIDES = [
  { number: "01", level: "Basic", title: "AI Agent Assurance Foundations", description: "Establish the engineering vocabulary: what an agent is, what assurance means, why conventional test assumptions fail, and what must be measured instead.", to: "/docs/getting-started/01-ai-agent-assurance-foundations" },
  { number: "02", level: "Basic", title: "Anatomy of an AI Agent", description: "Map the model, instructions, memory, retrieval, tools, policies, orchestration and environment into an explicit system under test.", to: "/docs/getting-started/02-anatomy-of-an-ai-agent" },
  { number: "03", level: "Basic", title: "Deterministic & Semantic Evaluation", description: "Learn when a boolean assertion is appropriate, when meaning must be judged, and how the two forms of evidence can coexist.", to: "/docs/getting-started/03-deterministic-and-semantic-evaluation" },
  { number: "04", level: "Practitioner", title: "Goal-Based Test Design", description: "Translate business outcomes into executable personas, goals, playbooks, invariants, termination conditions and evidence requirements.", to: "/docs/getting-started/04-goal-based-test-design" },
  { number: "05", level: "Practitioner", title: "Conversation Trajectories & Integrity", description: "Reason about multi-turn paths, equivalent trajectories, premature completion, looping, handovers and the difference between transcript validity and goal attainment.", to: "/docs/getting-started/05-conversation-trajectories-and-integrity" },
  { number: "06", level: "Practitioner", title: "Tool Use, State & Side Effects", description: "Test action selection, arguments, authorization, state transitions and externally visible effects—not merely the text emitted by the agent.", to: "/docs/getting-started/06-tool-use-state-and-side-effects" },
  { number: "07", level: "Practitioner", title: "RAG Groundedness & Evidence", description: "Evaluate retrieval, citation support, evidence sufficiency and grounded answer construction as a traceable measurement problem.", to: "/docs/getting-started/07-rag-groundedness-and-evidence" },
  { number: "08", level: "Expert", title: "LLM-as-Judge & Calibration", description: "Treat model-based judging as a measurement instrument: define constructs, rubrics, uncertainty, calibration sets, agreement and judge failure modes.", to: "/docs/getting-started/08-llm-as-judge-and-calibration" },
  { number: "09", level: "Expert", title: "Reliability, Robustness & Fault Injection", description: "Move beyond single-run success into repeated trials, semantic perturbations, metamorphic relations, controlled failures and reliability surfaces.", to: "/docs/getting-started/09-reliability-robustness-and-fault-injection" },
  { number: "10", level: "Expert", title: "Release Gates & Assurance Evidence", description: "Build defensible release decisions from layered signals, risk-weighted gates, evidence chains, residual risk and governance controls.", to: "/docs/getting-started/10-release-gates-and-assurance-evidence" },
] as const;

const LEVELS = [
  { level: "Basic", icon: BookOpen, text: "First principles and mental models. Start here." },
  { level: "Practitioner", icon: Layers3, text: "Methods you can implement in an engineering workflow." },
  { level: "Expert", icon: GraduationCap, text: "Measurement theory, reliability and assurance science." },
] as const;

function GettingStartedPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
          <div className="grid gap-10 lg:grid-cols-[258px_minmax(0,1fr)] lg:gap-12">
            <div className="hidden lg:block"><DocsSidebar /></div>
            <div className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Documentation path</p>
              <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Learn AI agent assurance in layers.</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">Ten guides move from the first principles of AI-agent testing to expert methods for semantic measurement, reliability engineering and defensible release assurance.</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {LEVELS.map(({ level, icon: Icon, text }) => (
                  <div key={level} className="rounded-2xl border border-[#2b2350] bg-[#15102d] p-4">
                    <Icon className="h-4 w-4 text-[#a855f7]" />
                    <p className="mt-3 text-sm font-semibold text-[#faf8ff]">{level}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#918aa8]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="lg:ml-[310px]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The learning sequence</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From mental model to release decision.</h2>
            <p className="mt-4 text-muted-foreground">Read in order. Each guide introduces the concepts required by the next layer, then turns them into an engineering artifact or decision model.</p>
          </div>
          <div className="mt-10 space-y-4">
            {GUIDES.map((guide) => (
              <Link key={guide.to} to={guide.to} className="group block rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-elevated sm:p-7">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 font-mono text-sm font-semibold text-primary">{guide.number}</div>
                    <div className="min-w-0">
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">{guide.level}</span>
                      <h3 className="mt-3 text-xl font-bold leading-snug">{guide.title}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary sm:pt-1">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
