import { ArrowLeft, ArrowRight, BookOpen, Briefcase, Users } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentType, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArticleConceptDiagram, type ArticleConcept } from "@/components/blog/article-concept-diagrams";
import {
  DivergentPathsCover,
  FalsePassCover,
  MethodologyCover,
  SecurityGraphCover,
  JudgeGaugeCover,
} from "@/components/blog/blog-cover-art";

const ARTICLE_META: Record<string, { title: string; description: string }> = {
  "why-conversational-ai-needs-a-different-testing-model": {
    title: "Why Conversational AI Needs a Different Testing Model — Shyena",
    description: "Why agent tests should validate goals and acceptable trajectories instead of replaying one fixed conversation transcript.",
  },
  "the-problem-with-green-checkmarks-on-broken-conversations": {
    title: "The Problem With Green Checkmarks on Broken Conversations — Shyena",
    description: "Why semantic scores can look healthy while an agent journey has actually failed, and how an execution-integrity gate prevents false passes.",
  },
  "how-to-test-a-cognigy-agent": {
    title: "How to Test a Cognigy Agent — Shyena",
    description: "A practical assurance model for Cognigy: understand the flow, generate goal-driven journeys, execute live, evaluate evidence and govern the release.",
  },
  "cognigy-agent-security-testing-with-ziran": {
    title: "Cognigy Agent Security Testing: Red-Teaming with Ziran — Shyena",
    description: "How to turn an agent flow and threat model into prioritized security campaigns, adaptive attacks and evidence-backed security decisions.",
  },
  "what-llm-as-judge-actually-means-in-practice": {
    title: "What LLM-as-Judge Actually Means in Practice — Shyena",
    description: "LLM-as-judge is a semantic evaluation layer, not a universal truth oracle. Here is how to use rubrics, context and evidence without creating false confidence.",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const meta = ARTICLE_META[params.slug];
    if (!meta) return { meta: [{ title: "Article not found — Shyena" }] };
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
  const articles: Record<string, ReactNode> = {
    "why-conversational-ai-needs-a-different-testing-model": <ConversationalTestingArticle />,
    "the-problem-with-green-checkmarks-on-broken-conversations": <FalsePassArticle />,
    "how-to-test-a-cognigy-agent": <CognigyTestingArticle />,
    "cognigy-agent-security-testing-with-ziran": <ZiranArticle />,
    "what-llm-as-judge-actually-means-in-practice": <JudgeArticle />,
  };
  const config: Record<string, { category: string; title: string; readTime: string; cover: ComponentType }> = {
    "why-conversational-ai-needs-a-different-testing-model": { category: "Testing Strategy", title: "Why Conversational AI Needs a Different Testing Model", readTime: "6 min read", cover: DivergentPathsCover },
    "the-problem-with-green-checkmarks-on-broken-conversations": { category: "Quality Assurance", title: "The Problem With Green Checkmarks on Broken Conversations", readTime: "6 min read", cover: FalsePassCover },
    "how-to-test-a-cognigy-agent": { category: "Testing Strategy", title: "How to Test a Cognigy Agent", readTime: "7 min read", cover: MethodologyCover },
    "cognigy-agent-security-testing-with-ziran": { category: "Security", title: "Cognigy Agent Security Testing: Red-Teaming with Ziran", readTime: "7 min read", cover: SecurityGraphCover },
    "what-llm-as-judge-actually-means-in-practice": { category: "Evaluation Model", title: "What LLM-as-Judge Actually Means in Practice", readTime: "7 min read", cover: JudgeGaugeCover },
  };
  const selected = config[slug];
  if (!selected) return <ArticleNotFound />;
  return <ArticleShell {...selected}>{articles[slug]}</ArticleShell>;
}

function ArticleNotFound() {
  return <div className="mx-auto w-full max-w-3xl px-5 py-24 text-center sm:px-8"><h1 className="text-3xl font-bold">Article not found</h1><p className="mt-4 text-muted-foreground">This article is not published yet.</p><Button asChild className="mt-8" variant="outline"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blog</Link></Button></div>;
}

function Lead({ children }: { children: ReactNode }) { return <p className="text-xl leading-relaxed text-foreground">{children}</p>; }
function P({ children }: { children: ReactNode }) { return <p className="mt-5 leading-relaxed text-muted-foreground">{children}</p>; }
function H2({ children }: { children: ReactNode }) { return <h2 className="mt-14 text-2xl font-bold text-foreground sm:text-3xl">{children}</h2>; }
function H3({ children }: { children: ReactNode }) { return <h3 className="mt-8 text-lg font-bold text-foreground sm:text-xl">{children}</h3>; }
function Pullquote({ children }: { children: ReactNode }) { return <blockquote className="my-9 border-l-4 border-primary bg-card px-6 py-5"><p className="text-lg font-semibold leading-snug text-foreground">{children}</p></blockquote>; }
function Visual({ concept, label }: { concept: ArticleConcept; label?: string }) { return <div className="my-10"><ArticleConceptDiagram concept={concept} />{label && <p className="mt-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{label}</p>}</div>; }
function Code({ children }: { children: ReactNode }) { return <pre className="my-7 overflow-x-auto rounded-xl border border-border bg-[#111022] p-5 text-sm leading-relaxed text-[#eeeaff]"><code>{children}</code></pre>; }
function Bullets({ children }: { children: ReactNode }) { return <ul className="mt-6 list-disc space-y-3 pl-6 leading-relaxed text-muted-foreground">{children}</ul>; }
function Compare({ left, right }: { left: ReactNode; right: ReactNode }) { return <div className="my-7 grid gap-4 sm:grid-cols-2"><div className="border border-border bg-card p-5"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Conventional model</p><div className="mt-2 text-sm leading-relaxed text-foreground">{left}</div></div><div className="border border-primary/30 bg-primary/5 p-5"><p className="text-xs font-semibold uppercase tracking-wider text-primary">Assurance model</p><div className="mt-2 text-sm leading-relaxed text-foreground">{right}</div></div></div>; }

function ArticleSidebar() {
  return <aside className="hidden lg:block"><div className="sticky top-24 space-y-4">
    <div className="border border-border bg-card p-6"><ArrowRight className="h-5 w-5 text-primary" /><h3 className="mt-4 text-base font-semibold text-foreground">Run the model on your agent</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Bring one real journey. Review the evidence chain with an evaluation engineer.</p><Button asChild size="sm" className="mt-4 w-full"><Link to="/contact">Request a demo</Link></Button></div>
    <div className="border border-border bg-card p-6"><Briefcase className="h-5 w-5 text-accent" /><h3 className="mt-4 text-base font-semibold text-foreground">Evaluation engineering</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Scope personas, contracts, judge rubrics and release gates around real agent behaviour.</p><Button asChild size="sm" variant="outline" className="mt-4 w-full"><Link to="/services">View services</Link></Button></div>
    <div className="border border-border bg-card p-6"><BookOpen className="h-5 w-5 text-purple" /><h3 className="mt-4 text-base font-semibold text-foreground">Evaluation model</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">See how deterministic, semantic, orchestration, security and integrity evidence combine.</p><Button asChild size="sm" variant="outline" className="mt-4 w-full"><Link to="/docs/evaluation-model">Read the docs</Link></Button></div>
    <div className="border border-dashed border-border p-6"><Users className="h-5 w-5 text-primary" /><h3 className="mt-4 text-base font-semibold text-foreground">Start with one journey</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">A useful assurance pilot begins with a real customer outcome, not a synthetic score.</p><Button asChild size="sm" variant="ghost" className="mt-4 w-full"><Link to="/pricing">See pricing</Link></Button></div>
  </div></aside>;
}

function ArticleShell({ category, title, readTime, cover: Cover, children }: { category: string; title: string; readTime: string; cover: ComponentType; children: ReactNode }) {
  return <>
    <section className="relative overflow-hidden bg-lavender text-lavender-foreground"><div className="mx-auto w-full max-w-4xl px-5 pb-8 pt-20 sm:px-8 sm:pt-28"><div className="text-center"><span className="inline-flex items-center rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-primary">{category}</span><h1 className="mt-6 text-3xl font-bold leading-[1.08] sm:text-5xl">{title}</h1><p className="mt-5 text-sm text-muted-foreground">{readTime} · Shyena Engineering</p></div><div className="mx-auto mt-8 aspect-[1200/420] w-full overflow-hidden rounded-2xl border border-navy-border"><Cover /></div></div></section>
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8"><div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]"><article className="min-w-0 max-w-3xl">{children}<div className="mt-16 border border-navy-border bg-navy px-6 py-10 text-center sm:px-10"><h3 className="text-xl font-bold text-navy-foreground sm:text-2xl">Make the release decision defensible.</h3><p className="mx-auto mt-3 max-w-lg text-navy-muted">Shyena connects live agent behaviour to evidence, evaluation and release governance.</p><Button asChild size="lg" className="mt-6"><Link to="/contact">Request a demo<ArrowRight className="h-4 w-4" /></Link></Button></div><div className="mt-10"><Button asChild variant="ghost" className="px-0 text-muted-foreground hover:text-foreground"><Link to="/blog"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link></Button></div></article><ArticleSidebar /></div></div>
  </>;
}

function ConversationalTestingArticle() {
  return <>
    <Lead>A conversational test should not fail because the agent chose a different valid route. It should fail when the route breaks the customer's goal or violates a contract.</Lead>
    <P>That distinction changes the test case itself. Instead of recording one ideal transcript, define the outcome, the constraints and the evidence that must exist when the journey ends.</P>
    <Visual concept="trajectory" label="The unit of testing is the goal, not the transcript." />

    <H2>Why scripts become brittle</H2>
    <P>A UI script has a known sequence: click, type, assert. A conversational agent has a stateful interaction surface. The next turn depends on what the agent understood, what it asked, what the user supplied and which branch the orchestrator selected.</P>
    <Compare left="Replay the exact wording and expected response. A changed but valid response looks like a defect." right="Define the persona, goal, constraints and acceptable outcome. Let the agent choose its wording and valid route." />
    <P>Suppose a customer wants a refund. One run may offer a refund immediately. Another may first ask for the order number. A third may offer replacement because the policy permits it and the customer accepts. The paths differ; the business outcome can still be correct.</P>

    <H2>Model a journey as a contract</H2>
    <P>The test should specify what must be true, not every sentence the agent must produce.</P>
    <Code>{`goal: resolve a damaged-order request
persona: customer with a damaged parcel
allowed_outcomes:
  - refund issued
  - replacement accepted
required_constraints:
  - verify order ownership
  - do not expose another customer's data
success_evidence:
  - authoritative order state changed
  - final response accurately describes the result`}</Code>
    <P>This is closer to a system contract than a chat transcript. The executor can react to the agent, while the evaluator still has hard conditions to check.</P>

    <H2>Use deterministic checks where facts exist</H2>
    <P>Do not ask a judge to decide whether an exact identifier, amount or state transition is correct when the authoritative system can answer that question directly.</P>
    <Bullets><li>Order status and identifiers should come from the source of truth.</li><li>Tool invocation and handoff should come from the execution trace.</li><li>Policy thresholds should be asserted against known values.</li><li>Generated language can be judged separately for clarity, relevance and grounding.</li></Bullets>

    <H2>Trajectory testing still needs boundaries</H2>
    <Visual concept="contracts" label="Different routes are acceptable only inside explicit assurance contracts." />
    <P>Non-determinism is not permission to accept anything. The test must define forbidden behaviour: wrong-account access, unauthorized tool use, skipped identity checks, unsupported claims, unsafe handoffs or an uncompleted customer goal.</P>
    <P>The practical model is therefore: <strong>freedom inside the contract, strictness at the contract boundary.</strong></P>

    <H2>What the test result should explain</H2>
    <Visual concept="evidence" label="A useful result connects the goal to observable execution evidence." />
    <P>A release report should answer: what goal was tested, what path occurred, which contracts were evaluated, what evidence proves the outcome, and why the final verdict was reached.</P>
    <Pullquote>Test the space of acceptable behaviour. Enforce the boundaries that cannot move.</Pullquote>
    <H2>Conclusion</H2>
    <P>Conversational AI does not need less QA because it is probabilistic. It needs a different abstraction for QA. The transcript is evidence of what happened; the journey contract defines what success means.</P>
  </>;
}

function FalsePassArticle() {
  return <>
    <Lead>A green semantic score can be perfectly accurate and still produce the wrong release decision.</Lead>
    <P>Consider a support agent that starts a parcel-address change. The agent sounds confident and the judge rates the response highly. Halfway through the run, the session times out before the address-change operation. If the evaluator scores only the completed turns, the report can look healthy while the business task has failed.</P>
    <Visual concept="false-pass" label="Execution integrity must be evaluated before a quality score becomes a release signal." />

    <H2>The false pass has a specific shape</H2>
    <P>The problem is not that semantic evaluation is wrong. The problem is treating one evaluation layer as the verdict for the whole system.</P>
    <Code>{`Customer goal       = change address
Semantic quality    = 0.92
Conversation quality = PASS
Required tool call   = missing
Business state       = unchanged
Execution integrity  = complete

Release verdict      = FAIL`}</Code>
    <P>The score describes language quality. It does not prove that the agent completed the transaction.</P>

    <H2>Separate the contracts</H2>
    <Visual concept="contracts" label="Quality, correctness, security and integrity answer different questions." />
    <Bullets><li><strong>Goal completion:</strong> did the intended outcome happen?</li><li><strong>Orchestration:</strong> did the correct route, intent or handoff occur?</li><li><strong>Deterministic correctness:</strong> are exact facts and side effects correct?</li><li><strong>Semantic quality:</strong> was the generated interaction useful and grounded?</li><li><strong>Security:</strong> did the agent respect access and tool-use boundaries?</li><li><strong>Execution integrity:</strong> is the run complete and sufficiently observable to support a verdict?</li></Bullets>

    <H2>Do not average away a blocker</H2>
    <P>A release gate should reflect risk. A wording defect and an authorization bypass are not interchangeable observations, so an arithmetic average is usually a poor abstraction for the final decision.</P>
    <Code>{`if execution_integrity_invalid:
    FAIL
elif critical_security_violation:
    FAIL
elif critical_deterministic_failure:
    FAIL
elif goal_not_completed:
    FAIL
else:
    evaluate semantic quality against threshold`}</Code>
    <P>The exact policy is product-specific. The engineering principle is not: a critical failed contract must remain capable of blocking the release even when other scores are high.</P>

    <H2>Evidence must survive the score</H2>
    <Visual concept="evidence" label="The verdict should be reconstructable from the run." />
    <P>When a journey fails, the useful question is not "why was the score low?" It is "what observable event proves the failure?" That evidence may be an orchestration event, missing tool call, API result, security observation, state assertion or incomplete trace.</P>
    <Pullquote>Score is a measurement. Verdict is a decision. Evidence connects the two.</Pullquote>
    <H2>Conclusion</H2>
    <P>The cure for false green is not a larger language model judge. It is a layered assurance model in which execution integrity and hard contracts constrain what a semantic score is allowed to mean.</P>
  </>;
}

function CognigyTestingArticle() {
  return <>
    <Lead>Testing a Cognigy agent starts before the first message is sent. The flow itself is part of the system under test.</Lead>
    <P>A useful test model connects four things: the structure of the Cognigy flow, the customer journey that exercises it, the runtime evidence produced by the live session, and the evaluation rules that turn that evidence into a release decision.</P>
    <Visual concept="cognigy" label="Flow → journey → live execution → evaluation → evidence." />

    <H2>1. Understand the flow before generating tests</H2>
    <P>A flow contains more than visible messages. Intents, nodes, conditions, handoffs, tools, APIs and termination paths create a behavioural graph. A test generator should use that graph to identify meaningful journeys rather than inventing prompts from a blank page.</P>
    <P>The first question is therefore structural: <strong>what can this agent actually do?</strong></P>

    <H2>2. Turn capabilities into goal-driven journeys</H2>
    <P>Each test should represent a customer or business goal. The persona supplies realistic language and state; the goal defines success; the playbook provides guidance without forcing one transcript.</P>
    <Code>{`goal: identify and resolve a bereavement-mail request
persona: customer asking about a bereavement shipment
hard_requirements:
  - recognize the special intent
  - route to the permitted handling path
  - provide the approved contact information
semantic_requirements:
  - answer directly
  - remain respectful
termination:
  - customer has the required next step`}</Code>
    <P>This distinction is important for Cognigy because a flow can contain several paths that are legitimate for different contexts.</P>

    <H2>3. Execute against the real agent</H2>
    <P>Static inspection tells you what the flow contains. It does not prove what happened at runtime. The test needs the live session and its trace: user turns, agent turns, selected intents, nodes, handoffs, tool calls, API outcomes and termination.</P>
    <Visual concept="trajectory" label="The executor can follow the agent while the goal contract stays fixed." />

    <H2>4. Evaluate each evidence layer separately</H2>
    <Visual concept="contracts" label="Do not collapse deterministic and semantic evidence into one score." />
    <Bullets><li>Use deterministic assertions for identifiers, policy values, required tool calls and authoritative state.</li><li>Use semantic evaluation for meaning, relevance, grounding, completeness and conversational quality.</li><li>Use orchestration evidence to confirm the expected intent, route and handoff.</li><li>Use security evidence for authorization, prompt-injection resistance and unsafe tool behaviour.</li><li>Use execution-integrity checks to confirm the run is complete enough to support a verdict.</li></Bullets>

    <H2>5. Preserve the evidence behind the verdict</H2>
    <Visual concept="evidence" label="A Cognigy test becomes an assurance artifact when its evidence is traceable." />
    <P>A report should allow an engineer to move backwards from FAIL to the exact contract and runtime observation that caused it. That makes the test useful for debugging and release governance, not merely regression counting.</P>

    <H2>What changes for Cognigy teams</H2>
    <P>The goal is not to test every possible sentence. It is to cover the important business journeys and the boundaries around them. Flow structure helps discover the test universe; goal-driven execution explores valid trajectories; layered evaluation determines whether the observed behaviour is acceptable.</P>
    <Pullquote>For Cognigy, the flow is the map. The live trace is the evidence. The journey contract is the test oracle.</Pullquote>
    <H2>Conclusion</H2>
    <P>A Cognigy agent should be tested as an executable system, not as a collection of expected messages. That is the difference between checking whether a bot talks and assuring whether the agent performs its job.</P>
  </>;
}

function ZiranArticle() {
  return <>
    <Lead>Agent security testing is not a list of random jailbreak prompts. It is an attack-path problem: understand what the agent can reach, identify the boundaries that matter, then try to cross them and preserve the evidence.</Lead>
    <P>For a Cognigy agent, the relevant surface can include flows, tools, APIs, retrieval, handoffs, identity context and external actions. Security testing therefore benefits from the same structural understanding used for functional assurance, but applies an adversarial objective.</P>
    <Visual concept="security" label="Threat model → prioritize → attack → verify → govern." />

    <H2>Start with the changed surface</H2>
    <P>Security effort should follow exposure. A new tool, permission change, retrieval source or orchestration branch can create a new attack path even when the visible conversation has barely changed.</P>
    <Bullets><li>What data can the agent access?</li><li>Which tools can create side effects?</li><li>Which instructions outrank user input?</li><li>Where are authorization decisions enforced?</li><li>Which handoffs cross trust boundaries?</li></Bullets>

    <H2>Turn the threat model into hypotheses</H2>
    <P>A useful campaign describes an intended boundary violation, not simply a prompt. For example: "cause the agent to invoke a privileged tool without the required authorization" is a stronger test objective than "try prompt injection."</P>
    <Code>{`hypothesis:
  boundary: privileged tool invocation
  attacker_goal: trigger the tool without authorization
  expected_control: deny execution
  evidence_required:
    - attack input
    - agent decision
    - tool invocation attempt
    - authorization result
    - final security verdict`}</Code>

    <H2>Prioritize before attacking</H2>
    <P>Not every hypothesis deserves the same amount of execution budget. Rank by exposure, potential impact, likelihood, exploitability and the cost of proving the result. This makes red teaming a release-engineering activity rather than an unbounded experiment.</P>
    <Visual concept="security" label="The campaign should spend effort where an exploit would matter most." />

    <H2>Adaptive execution with Ziran</H2>
    <P>Ziran can be used as the adversarial execution layer: take a security hypothesis, exercise the live agent, observe the response and continue the attack when the observed state suggests another step is required. The important property is not the number of prompts generated. It is whether the campaign can establish an actual boundary failure.</P>
    <P>A convincing attack result should distinguish <strong>attempted</strong> from <strong>confirmed</strong>. A prompt that produced a strange answer is an observation. A privileged action that executed without authorization is a security finding with materially stronger evidence.</P>

    <H2>Security verdicts need evidence</H2>
    <Visual concept="evidence" label="Attack evidence must remain attached to the security decision." />
    <P>Store the attack input, relevant conversation turns, execution trace, tool/API evidence, control response and final classification. That lets security and engineering teams reproduce the reasoning behind a release blocker.</P>
    <Pullquote>Red teaming is useful when it proves a boundary can be crossed, not when it merely produces a dramatic transcript.</Pullquote>

    <H2>Conclusion</H2>
    <P>Agent security assurance combines system understanding with adversarial execution. The strongest workflow is model the surface, prioritize attack paths, execute adaptively, verify the actual side effect or boundary crossing, and govern the release using the evidence.</P>
  </>;
}

function JudgeArticle() {
  return <>
    <Lead>LLM-as-judge means using a language model to evaluate qualities that do not have a reliable deterministic oracle. It does not mean asking one model to decide whether the entire agent worked.</Lead>
    <P>The distinction matters because language quality is inherently contextual. Relevance, grounding, completeness and conversational appropriateness can require interpretation. But exact amounts, identifiers, tool calls, permissions and state changes usually have stronger sources of truth.</P>
    <Visual concept="judge" label="A judge is one evaluation layer in an evidence chain." />

    <H2>What the judge is actually doing</H2>
    <P>A judge receives an observable interaction, a rubric and enough context to apply that rubric. Its output should be a reasoned evaluation of specified criteria, ideally with evidence references or concise rationale.</P>
    <Code>{`criterion: answer grounding
score: 0–4
context:
  - user request
  - retrieved sources
  - agent response
rule:
  score 4 only when every material claim is supported
failure:
  unsupported claim or source mismatch`}</Code>
    <P>The rubric is part of the test design. "Is this a good answer?" is too vague to be a useful release criterion.</P>

    <H2>Judge what requires judgment</H2>
    <Visual concept="contracts" label="Deterministic facts should not be delegated to probabilistic judgment." />
    <Compare left="Ask the judge whether order ID 3SABC... equals the expected ID." right="Assert the authoritative order ID deterministically; use the judge for whether the explanation is clear and relevant." />
    <P>This separation reduces a common failure mode: using a flexible semantic evaluator to excuse a hard contract failure.</P>

    <H2>Context changes the verdict</H2>
    <P>The same response can be appropriate in one context and wrong in another. A judge therefore needs the relevant evidence: user goal, policy or source context, previous turns and, where applicable, retrieved documents or expected constraints.</P>
    <P>Without context, a judge can reward fluent but unsupported text. With too much irrelevant context, the evaluation can become noisy. The engineering task is to provide enough context to make the rubric decidable.</P>

    <H2>Calibrate the judge before trusting the trend</H2>
    <P>A judge should be evaluated like any other test component. Build a small reference set containing clear passes, clear failures and borderline cases. Compare judge decisions with expert decisions, inspect disagreement patterns and revise the rubric when the disagreement reveals an ambiguous criterion.</P>
    <Bullets><li>Measure agreement on a representative sample.</li><li>Review false positives and false negatives separately.</li><li>Keep rubric versions with the evaluation result.</li><li>Do not compare scores across rubric changes as if they were identical measurements.</li></Bullets>

    <H2>Score is not the verdict</H2>
    <Visual concept="false-pass" label="Semantic scoring must remain subordinate to execution integrity and release policy." />
    <P>A 4/4 semantic score can coexist with a failed business journey. The judge can be correct about the answer while the agent is wrong about the action. That is not a contradiction; it is evidence that different layers are measuring different properties.</P>
    <Visual concept="evidence" label="The judge becomes useful when its result is attached to the evidence that supports the release decision." />
    <Pullquote>LLM-as-judge is strongest when it is precise about what it knows how to judge — and silent about what another oracle can prove better.</Pullquote>

    <H2>Conclusion</H2>
    <P>Use LLM-as-judge for semantic dimensions that genuinely require interpretation. Pair it with deterministic contracts, orchestration evidence, security checks and execution-integrity controls. The goal is not a larger score. The goal is a more defensible decision.</P>
  </>;
}
