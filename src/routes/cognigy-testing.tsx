import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Network, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/cognigy-testing")({
  head: () => ({
    links: [{ rel: "canonical", href: SITE + "/ai-assurance" }],
    meta: [
      { title: "AI Test Engineering & Assurance | Shyena" },
      { name: "description", content: "Vendor-neutral testing and evaluation for AI chatbots, LLM applications, document AI, OCR, classification pipelines and agentic workflows. Validate quality, integrations, security and release readiness with traceable evidence." },
      { name: "keywords", content: "AI test engineering, LLM evaluation, AI chatbot testing, generative AI testing, agentic workflow testing, OCR testing, document AI validation, hallucination detection, AI drift monitoring, AI release assurance" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: "AI Test Engineering & Assurance | Shyena" },
      { property: "og:description", content: "Test AI outputs and the workflows around them. Turn repeatable evaluation into release evidence for production AI." },
      { property: "og:url", content: SITE + "/ai-assurance" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Test Engineering & Assurance | Shyena" },
      { name: "twitter:description", content: "Practical, vendor-neutral assurance for generative AI, document AI and agentic workflows." }
    ]
  }),
  component: Page
});

const work = [
  ["LLM and chatbot quality", "Create scenario suites for factual accuracy, groundedness, completeness, instruction following, consistency, refusal behaviour and useful uncertainty."],
  ["Document AI and OCR", "Measure field-level extraction accuracy, classification precision and recall, confidence handling, malformed documents, scans, tables and low-quality inputs."],
  ["Agent and workflow execution", "Assert the intended tools and APIs were called with valid arguments, the right identity and permissions were used, and authoritative business state changed correctly."],
  ["Evaluation engineering", "Build reusable Python evaluators, deterministic assertions, semantic rubrics and calibrated LLM-as-judge checks. Keep hard business rules out of subjective scoring."],
  ["Regression and drift", "Run fixed baseline datasets on every material change and on a schedule. Compare results by model, prompt, retrieval configuration, dataset and release."],
  ["Governance and evidence", "Keep dataset versions, model and prompt versions, run IDs, traces, criteria, scores, thresholds, findings and release decisions linked for audit and investigation."]
];

function Page() {
  return <main className="bg-white text-[#17213f]">
    <section className="bg-[#07101f] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-5xl">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#f18a32]">AI QUALITY ENGINEERING · SHYENA</div>
          <h1 className="mt-5 font-[Sora] text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[.92] tracking-[-.065em]">Test the AI.<br/><span className="text-[#f18a32]">Prove the outcome.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">Shyena helps teams validate AI chatbots, generative AI applications, document-processing pipelines and multi-step agent workflows. Test output quality, deterministic business rules, integrations, security and real system state—not just whether a response sounds convincing.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold">Discuss an AI assurance assessment <ArrowRight className="h-4 w-4"/></Link>
            <a href="#approach" className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/80">See the practical approach <ArrowRight className="h-4 w-4"/></a>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto grid max-w-[1240px] gap-4 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
        {[[Network, "Map the full workflow", "Trace user input through retrieval, model calls, classification, tools, APIs, data stores, human review and final business outcome."], [CheckCircle2, "Measure against evidence", "Combine exact assertions and reference datasets with calibrated semantic evaluation. Report failures by criterion, not only as one average score."], [ShieldCheck, "Gate risky releases", "Apply explicit thresholds for critical accuracy, authorization, execution integrity and privacy. Block releases when mandatory controls fail."]].map(([Icon, title, body]) => <div key={title as string} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><Icon className="h-5 w-5 text-[#e87512]"/><h2 className="mt-5 text-lg font-bold">{title as string}</h2><p className="mt-2 text-sm leading-6 text-[#69707d]">{body as string}</p></div>)}
      </div>
    </section>

    <section id="approach">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><div className="text-sm font-bold text-[#e87512]">PRACTICAL DELIVERY MODEL</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">From experiment to production evidence.</h2></div>
          <div className="space-y-5 text-sm leading-7 text-[#596273]">
            <p>Start with one high-impact workflow and define what a correct outcome means with the business owner or subject-matter expert. Build a versioned reference dataset, identify critical and adversarial cases, run the system, compare results to the expected contract, and turn every meaningful failure into a regression test.</p>
            <div className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-5 font-mono text-[10px] text-[#596273]">BUSINESS GOAL → DATASET → SCENARIOS → EXECUTION TRACE → ASSERTIONS + EVALUATION → THRESHOLDS → RELEASE DECISION</div>
            <p>Integrate the checks into CI/CD where possible, and schedule repeat evaluations to detect regressions or drift. Keep the evidence needed to explain what changed, which cases failed, how severe the failures are and whether the release policy permits deployment.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">WHAT WE VALIDATE</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">One quality model. Different AI workloads.</h2><p className="mt-5 text-base leading-7 text-[#69707d]">Choose the tests that fit the system. A chatbot, an extraction pipeline and an autonomous workflow need different metrics, but each needs repeatable scenarios, clear thresholds and evidence that supports a release decision.</p></div>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{work.map(([title, body]) => <article key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><h3 className="text-base font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">{body}</p></article>)}</div>
      </div>
    </section>

    <section>
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div><div className="text-sm font-bold text-[#e87512]">EXAMPLE: DOCUMENT INTAKE</div><h2 className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em]">Test the extracted facts, not the confidence of the explanation.</h2><p className="mt-4 text-sm leading-7 text-[#69707d]">For a tax or immigration document workflow, test document type classification, required-field extraction, source grounding, missing or conflicting evidence, low-quality scans, unsupported claims, routing and escalation. Compare extracted values with expert-labelled ground truth and calculate field-level error rates.</p></div>
          <div className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6"><h3 className="font-bold">Illustrative release checks</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-[#596273]"><li>• Required fields meet agreed accuracy thresholds.</li><li>• Missing or ambiguous evidence triggers clarification or human review.</li><li>• Every extracted value is traceable to its source where required.</li><li>• Downstream records match validated values; no silent data corruption.</li><li>• Regression results are compared with a versioned baseline.</li><li>• Critical privacy, authorization and execution failures block release.</li></ul><p className="mt-5 text-xs leading-5 text-[#818896]">Thresholds must be agreed with process owners and measured on representative, labelled data. No performance figures are assumed here.</p></div>
        </div>
      </div>
    </section>

    <section className="bg-[#07101f] text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em]">Make AI quality measurable.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">Define a critical workflow, build a representative baseline and connect test evidence to deployment decisions.</p></div>
        <Link to="/contact" className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold">Plan an assessment <ArrowRight className="h-4 w-4"/></Link>
      </div>
    </section>
  </main>;
}
