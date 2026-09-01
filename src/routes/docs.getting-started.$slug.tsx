import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Markdown } from "@tanstack/markdown/react";
import { Button } from "@/components/ui/button";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { AnimatedAssuranceVisual } from "@/components/docs/animated-assurance-visual";
import source01 from "@/content/docs/getting-started/01-ai-agent-assurance-foundations.md?raw";
import source02 from "@/content/docs/getting-started/02-anatomy-of-an-ai-agent.md?raw";
import source03 from "@/content/docs/getting-started/03-deterministic-and-semantic-evaluation.md?raw";
import source04 from "@/content/docs/getting-started/04-goal-based-test-design.md?raw";
import source05 from "@/content/docs/getting-started/05-conversation-trajectories-and-integrity.md?raw";
import source06 from "@/content/docs/getting-started/06-tool-use-state-and-side-effects.md?raw";
import source07 from "@/content/docs/getting-started/07-rag-groundedness-and-evidence.md?raw";
import source08 from "@/content/docs/getting-started/08-llm-as-judge-and-calibration.md?raw";
import source09 from "@/content/docs/getting-started/09-reliability-robustness-and-fault-injection.md?raw";
import source10 from "@/content/docs/getting-started/10-release-gates-and-assurance-evidence.md?raw";

export const Route = createFileRoute("/docs/getting-started/$slug")({
  head: ({ params }) => {
    const doc = DOCS[params.slug];
    return {
      meta: [
        { title: `${doc?.title ?? "Getting Started"} — Shyena Docs` },
        { name: "description", content: doc?.description ?? "Shyena AI-agent assurance documentation." },
        { property: "og:title", content: `${doc?.title ?? "Getting Started"} — Shyena Docs` },
        { property: "og:description", content: doc?.description ?? "Shyena AI-agent assurance documentation." },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `https://shyena.eu/docs/getting-started/${params.slug}` }],
    };
  },
  component: GettingStartedArticlePage,
});

type Doc = { order: number; level: "Basic" | "Practitioner" | "Expert"; title: string; description: string; source: string; slug: string };

const DOCS: Record<string, Doc> = {
  "01-ai-agent-assurance-foundations": { order: 1, level: "Basic", title: "AI Agent Assurance Foundations", description: "First principles for testing and assuring AI agents as engineered systems.", source: source01, slug: "01-ai-agent-assurance-foundations" },
  "02-anatomy-of-an-ai-agent": { order: 2, level: "Basic", title: "Anatomy of an AI Agent", description: "Decompose the model, context, memory, retrieval, tools, policy and environment into a testable system.", source: source02, slug: "02-anatomy-of-an-ai-agent" },
  "03-deterministic-and-semantic-evaluation": { order: 3, level: "Basic", title: "Deterministic & Semantic Evaluation", description: "Separate factual contract checks from semantic judgments and understand why both are required.", source: source03, slug: "03-deterministic-and-semantic-evaluation" },
  "04-goal-based-test-design": { order: 4, level: "Practitioner", title: "Goal-Based Test Design", description: "Translate business outcomes into executable personas, goals, invariants, evidence and termination rules.", source: source04, slug: "04-goal-based-test-design" },
  "05-conversation-trajectories-and-integrity": { order: 5, level: "Practitioner", title: "Conversation Trajectories & Integrity", description: "Evaluate multi-turn paths, handovers, retries, premature completion and execution integrity.", source: source05, slug: "05-conversation-trajectories-and-integrity" },
  "06-tool-use-state-and-side-effects": { order: 6, level: "Practitioner", title: "Tool Use, State & Side Effects", description: "Test action selection, authorization, arguments, state transitions and external effects.", source: source06, slug: "06-tool-use-state-and-side-effects" },
  "07-rag-groundedness-and-evidence": { order: 7, level: "Practitioner", title: "RAG Groundedness & Evidence", description: "Measure retrieval adequacy, claim support, citations, permissions and evidence chains.", source: source07, slug: "07-rag-groundedness-and-evidence" },
  "08-llm-as-judge-and-calibration": { order: 8, level: "Expert", title: "LLM-as-Judge & Calibration", description: "Design model-based evaluation as a calibrated measurement instrument with explicit constructs and uncertainty.", source: source08, slug: "08-llm-as-judge-and-calibration" },
  "09-reliability-robustness-and-fault-injection": { order: 9, level: "Expert", title: "Reliability, Robustness & Fault Injection", description: "Move from single-run success to repeated execution, metamorphic testing and controlled dependency failures.", source: source09, slug: "09-reliability-robustness-and-fault-injection" },
  "10-release-gates-and-assurance-evidence": { order: 10, level: "Expert", title: "Release Gates & Assurance Evidence", description: "Construct risk-weighted release decisions from layered evidence, regressions and residual risk.", source: source10, slug: "10-release-gates-and-assurance-evidence" },
};

const ORDERED_DOCS = Object.values(DOCS).sort((a, b) => a.order - b.order);

function GettingStartedArticlePage() {
  const { slug } = Route.useParams();
  const doc = DOCS[slug];

  if (!doc) {
    return <div className="mx-auto max-w-3xl px-5 py-24"><h1 className="text-3xl font-bold">Document not found</h1><Button asChild className="mt-6"><Link to="/docs/getting-started">Back to Getting Started</Link></Button></div>;
  }

  const currentIndex = ORDERED_DOCS.findIndex((item) => item.slug === slug);
  const previous = currentIndex > 0 ? ORDERED_DOCS[currentIndex - 1] : null;
  const next = currentIndex < ORDERED_DOCS.length - 1 ? ORDERED_DOCS[currentIndex + 1] : null;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a071d] text-white">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(168,85,247,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl motion-safe:animate-pulse" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-12 pt-16 sm:px-8 sm:pb-14 sm:pt-24 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
          <DocsSidebar />
          <div className="grid items-center gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:gap-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
                <span className="rounded-full bg-[#7c3aed]/15 px-3 py-1.5 text-[#a855f7]">Getting Started</span>
                <span className="rounded-full border border-[#514778] px-3 py-1.5 text-[#c9c4d8]">{doc.level}</span>
                <span className="text-[#918aa8]">Guide {String(doc.order).padStart(2, "0")} / 10</span>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">{doc.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">{doc.description}</p>
            </div>
            <AnimatedAssuranceVisual compact />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        <div className="hidden lg:block"><div className="sticky top-[92px] rounded-2xl border border-border bg-card p-4 shadow-card"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">In this path</p><p className="mt-2 text-sm text-muted-foreground">{ORDERED_DOCS.length} progressive guides from basic principles to expert assurance practice.</p></div></div>
        <article className="min-w-0 max-w-3xl">
          <div className="text-[15px] leading-7 [&_h1]:mt-0 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h2]:mt-14 [&_h2]:scroll-mt-28 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h3]:mt-9 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-muted-foreground [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-border [&_pre]:bg-[#090713] [&_pre]:p-5 [&_pre]:text-[13px] [&_pre]:leading-6 [&_table]:mt-6 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:bg-secondary [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:uppercase [&_th]:tracking-wide [&_td]:border [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_td]:text-muted-foreground">
            <Markdown>{doc.source}</Markdown>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to={previous ? "/docs/getting-started/$slug" : "/docs/getting-started"} params={previous ? { slug: previous.slug } : undefined}><ArrowLeft className="mr-2 h-4 w-4" />{previous ? previous.title : "Getting Started"}</Link></Button>
            {next ? <Button asChild className="rounded-full"><Link to="/docs/getting-started/$slug" params={{ slug: next.slug }}>{next.title}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button> : <Button asChild className="rounded-full"><Link to="/docs">Back to Documentation<CheckCircle2 className="ml-2 h-4 w-4" /></Link></Button>}
          </div>
        </article>
      </section>
    </>
  );
}
