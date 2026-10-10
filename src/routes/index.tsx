import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDownRight, ArrowRight, Check, ChevronRight, Circle, Play, ShieldCheck, Terminal, Workflow } from "lucide-react";

const commands = [
  {
    id: "audit",
    label: "Content",
    command: "npm run content:validate",
    output: [
      { tone: "muted", text: "$ npm run content:validate" },
      { tone: "normal", text: "Public content validation" },
      { tone: "normal", text: "✓ required metadata fields checked" },
      { tone: "normal", text: "✓ duplicate slugs and titles checked" },
      { tone: "warn", text: "! product test runner: not yet configured" },
      { tone: "warn", text: "! product environments: not yet connected" },
      { tone: "accent", text: "Validation result: process exit code" },
    ],
    description: "Catch invalid or unsafe public content before build.",
  },
  {
    id: "test",
    label: "Generate",
    command: "npm run content:generate",
    output: [
      { tone: "muted", text: "$ npm run content:generate" },
      { tone: "normal", text: "Generate public content metadata" },
      { tone: "normal", text: "✓ read published blog and docs files" },
      { tone: "normal", text: "✓ validate required frontmatter" },
      { tone: "normal", text: "✓ write generated-content.ts" },
      { tone: "accent", text: "Output: src/content/generated-content.ts" },
    ],
    description: "Generate the metadata consumed by the site.",
  },
  {
    id: "lint",
    label: "Lint",
    command: "npm run lint",
    output: [
      { tone: "muted", text: "$ npm run lint" },
      { tone: "normal", text: "ESLint · TypeScript / React source" },
      { tone: "normal", text: "Checks code quality and configured rules" },
      { tone: "accent", text: "Exit status determines the CI gate" },
    ],
    description: "Catch code-quality regressions before merge.",
  },
  {
    id: "build",
    label: "Build",
    command: "npm run build",
    output: [
      { tone: "muted", text: "$ npm run build" },
      { tone: "normal", text: "Validate public content" },
      { tone: "normal", text: "Generate content metadata" },
      { tone: "normal", text: "Compile the Vite / TanStack application" },
      { tone: "accent", text: "Exit status determines the CI gate" },
    ],
    description: "Verify that the application can be built.",
  },
];

const lifecycle = [
  ["01", "Understand", "Read the issue, requirements, code changes and affected journeys."],
  ["02", "Plan", "Select risk-based tests and define what passing means."],
  ["03", "Execute", "Run unit, API, browser, integration and AI-specific tests."],
  ["04", "Evaluate", "Check outputs, behaviour, security, reliability and business rules."],
  ["05", "Repair", "Diagnose failures and propose a patch with a regression test."],
  ["06", "Verify", "Re-run independent checks and publish evidence for human review."],
  ["07", "Improve", "Benchmark failures and propose changes to the factory itself."],
] as const;

const products = [
  { name: "Nexus", role: "Understand the system", detail: "Map requirements, components, dependencies and change impact.", to: "/nexus", command: "shyena nexus map --repo ." },
  { name: "Vera", role: "Evaluate behaviour", detail: "Verify expected outcomes, model responses and end-to-end journeys.", to: "/vera", command: "shyena vera evaluate --suite regression" },
  { name: "Chakra", role: "Test security", detail: "Exercise adversarial cases, trust boundaries and unsafe behaviour.", to: "/chakra", command: "shyena chakra scan --target staging" },
  { name: "Govern", role: "Prove release readiness", detail: "Collect traceable results and present a release decision with evidence.", to: "/govern", command: "shyena govern report --run latest" },
] as const;

function TerminalLine({ tone, text }: { tone: string; text: string }) {
  const toneClass = tone === "warn" ? "text-amber-300" : tone === "accent" ? "text-orange-300" : tone === "muted" ? "text-slate-500" : "text-slate-200";
  return <div className={`whitespace-pre-wrap break-words ${toneClass}`}>{text}</div>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — The AI Software Testing Factory" },
      { name: "description", content: "Test AI products across the software lifecycle with risk-based automation, evaluation, security checks and evidence-led release gates." },
      { property: "og:title", content: "Shyena — The AI Software Testing Factory" },
      { property: "og:description", content: "One clear workflow for AI product quality: understand, test, evaluate, repair and verify." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeCommand, setActiveCommand] = useState("audit");
  const selected = commands.find((item) => item.id === activeCommand) ?? commands[0]!;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b10] text-white">
      <section className="relative border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_10%,rgba(249,115,22,0.13),transparent_42%)]" />
        <div className="relative mx-auto grid max-w-[1320px] gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-400/5 px-3 py-1.5 font-mono text-[11px] text-orange-200">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              AI QUALITY · FULL SDLC
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Ship AI products.
              <span className="block text-white/45">Know they work.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Shyena is building a self-testing AI software factory that turns code changes into risk-based tests, evidence-backed findings and safer release decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/platform" className="inline-flex h-12 items-center gap-2 rounded-md bg-orange-500 px-5 text-sm font-semibold text-black transition hover:bg-orange-400">
                Explore the factory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white transition hover:bg-white/5">
                View an example run <Play className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-orange-300" /> Risk-based testing</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-orange-300" /> AI evaluation and security</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-orange-300" /> Human-approved changes</span>
            </div>
          </div>

          <div className="min-w-0 rounded-xl border border-white/12 bg-[#0d1118] shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-orange-300" />
                <span className="font-mono text-xs text-slate-200">shyena · factory checks</span>
              </div>
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-400/80" /><span className="h-2 w-2 rounded-full bg-amber-300/80" /><span className="h-2 w-2 rounded-full bg-emerald-400/80" /></div>
            </div>
            <div className="flex gap-1 overflow-x-auto border-b border-white/10 px-3 pt-2">
              {commands.map((item) => (
                <button key={item.id} type="button" onClick={() => setActiveCommand(item.id)} className={`shrink-0 rounded-t-md px-3 py-2 font-mono text-[11px] transition ${activeCommand === item.id ? "border border-b-0 border-white/10 bg-white/[.05] text-orange-200" : "text-slate-500 hover:text-slate-200"}`}>
                  {item.label}
                </button>
              ))}
            </div>
            <div className="min-h-[252px] p-4 sm:p-5">
              <div className="font-mono text-xs leading-6">
                <TerminalLine tone="muted" text={selected.command} />
                <div className="my-3 h-px bg-white/8" />
                {selected.output.slice(1).map((line, index) => <TerminalLine key={`${selected.id}-${index}`} tone={line.tone} text={line.text} />)}
              </div>
              <div className="mt-6 flex items-start gap-2 border-t border-white/8 pt-3 text-xs leading-5 text-slate-400">
                <Circle className="mt-1 h-2 w-2 shrink-0 fill-orange-300 text-orange-300" />
                <span>{selected.description}</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-white/[.025] px-4 py-3 font-mono text-[10px] text-slate-500">
              <span>Current repository commands</span>
              <Link to="/contact" className="inline-flex items-center gap-1 text-orange-200 hover:text-orange-100">Talk to us <ChevronRight className="h-3 w-3" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0c1017]">
        <div className="mx-auto grid max-w-[1320px] gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            ["THE PROBLEM", "AI changes faster than manual regression can keep up."],
            ["THE FACTORY", "One workflow from change intake to test evidence and release decision."],
            ["THE RESULT", "Fewer blind spots. Faster diagnosis. Clearer release confidence."],
          ].map(([title, body]) => <div key={title} className="border-l-2 border-orange-400/70 pl-4"><div className="font-mono text-[10px] tracking-[.16em] text-orange-200">{title}</div><p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">{body}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <div className="font-mono text-xs tracking-[.18em] text-orange-200">HOW THE FACTORY WORKS</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">A clear path from change to proof.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">Developers see what ran and why. Testers see coverage, failures and reproducible evidence. Teams keep control of what ships.</p>
            <Link to="/platform" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 hover:text-orange-100">See the platform <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {lifecycle.map(([number, title, detail]) => <div key={number} className="grid gap-2 py-4 sm:grid-cols-[48px_150px_1fr] sm:items-start">
              <span className="font-mono text-xs text-orange-200">{number}</span>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{detail}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0c1017]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs tracking-[.18em] text-orange-200">THE SHYENA TOOLCHAIN</div>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Four capabilities. One assurance loop.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">The names stay familiar. Each capability solves a distinct part of the testing problem.</p>
            </div>
            <Link to="/platform" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-orange-200 hover:text-orange-100">Explore all capabilities <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => <article key={product.name} className="group flex min-w-0 flex-col rounded-lg border border-white/10 bg-[#080b10] p-5 transition hover:border-orange-300/40">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-orange-200">0{index + 1}</span><ArrowDownRight className="h-4 w-4 text-slate-600 transition group-hover:text-orange-200" /></div>
              <h3 className="mt-7 text-xl font-semibold">{product.name}</h3>
              <div className="mt-1 text-xs font-medium text-orange-200">{product.role}</div>
              <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">{product.detail}</p>
              <div className="mt-5 rounded-md border border-white/8 bg-[#0d1118] p-3">
                <div className="font-mono text-[9px] uppercase tracking-[.13em] text-slate-500">Command concept</div>
                <code className="mt-2 block break-words font-mono text-[10px] leading-5 text-slate-300">{product.command}</code>
              </div>
              <Link to={product.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-orange-200">Explore {product.name} <ArrowRight className="h-4 w-4" /></Link>
            </article>)}
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Nexus, Vera, Chakra and Govern are Shyena product names. The product-specific CLI examples above illustrate the intended workflow and are not yet shipped executable commands.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="font-mono text-xs tracking-[.18em] text-orange-200">SELF-IMPROVEMENT, WITH CONTROL</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] sm:text-4xl">The factory should learn from failures—not hide them.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">Each run produces evidence. Repeated failures become better regression tests and improvement proposals. Proposed changes are benchmarked and reviewed before adoption.</p>
            <div className="mt-6 space-y-3">
              {[
                "Keep the failing case and its evidence.",
                "Find patterns across runs and evaluation scores.",
                "Propose a test, skill or configuration improvement.",
                "Re-run benchmarks and ask a human to approve the change.",
              ].map((item) => <div key={item} className="flex items-start gap-3 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" /><span>{item}</span></div>)}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0d1118] p-5 sm:p-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4"><Workflow className="h-4 w-4 text-orange-200" /><span className="font-mono text-xs text-slate-200">improvement-loop.yaml</span></div>
            <pre className="mt-5 overflow-x-auto font-mono text-xs leading-6"><code><span className="text-orange-200">on</span>:{"\n"}  <span className="text-slate-300">run_completed</span>: true{"\n\n"}<span className="text-orange-200">steps</span>:{"\n"}  - <span className="text-slate-300">score_run</span>{"\n"}  - <span className="text-slate-300">cluster_failures</span>{"\n"}  - <span className="text-slate-300">propose_regression</span>{"\n"}  - <span className="text-slate-300">replay_benchmark</span>{"\n"}  - <span className="text-slate-300">request_approval</span></code></pre>
            <div className="mt-5 flex items-start gap-3 rounded-md border border-amber-300/15 bg-amber-300/5 p-3 text-xs leading-5 text-amber-100/80"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /><span>Agents can propose fixes. They do not silently merge code, weaken gates or deploy to production.</span></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c1017]">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="font-mono text-xs tracking-[.18em] text-orange-200">START WITH ONE REAL PROBLEM</div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-.04em] sm:text-4xl">Find out why your AI product fails before your users do.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">Start with one critical journey. Map the risk, run the available checks, expose the gaps and agree the next automation step.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-orange-500 px-5 text-sm font-semibold text-black hover:bg-orange-400">Discuss your use case <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/pricing" className="inline-flex h-12 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-semibold text-white hover:bg-white/5">Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>SHYENA · AI QUALITY ENGINEERING</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2"><Link to="/platform" className="hover:text-white">Platform</Link><Link to="/security" className="hover:text-white">Security</Link><Link to="/docs" className="hover:text-white">Docs</Link><Link to="/contact" className="hover:text-white">Contact</Link></div>
        </div>
      </footer>
    </main>
  );
}
