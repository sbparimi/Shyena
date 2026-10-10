import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, ArrowUpRight, Check,
  CircleCheck, CircleDot, GitPullRequest, Layers3, LockKeyhole, Play,
  Radar, ShieldCheck, Sparkles, Workflow, Zap,
} from "lucide-react";

const stages = [
  { id: "nexus", name: "Nexus", role: "Map the system", state: "Complete", tone: "violet", detail: "Trace the changed surface, dependencies and business-critical journeys.", signal: "Change impact mapped", icon: Layers3 },
  { id: "vera", name: "Vera", role: "Test behaviour", state: "Running", tone: "blue", detail: "Execute deterministic checks and evaluate expected outcomes across journeys.", signal: "Journey evaluation in progress", icon: Radar },
  { id: "chakra", name: "Chakra", role: "Probe security", state: "Queued", tone: "orange", detail: "Exercise trust boundaries, adversarial inputs and unsafe tool behaviour.", signal: "Security suite queued", icon: ShieldCheck },
  { id: "govern", name: "Govern", role: "Decide with evidence", state: "Waiting", tone: "green", detail: "Bring findings, traces and policy controls together for a release decision.", signal: "Awaiting verified evidence", icon: GitPullRequest },
] as const;

const eventFeed = [
  { time: "00:04", label: "Change surface mapped", sub: "Nexus · dependency graph updated", tone: "violet" },
  { time: "00:09", label: "Journey execution started", sub: "Vera · deterministic + semantic checks", tone: "blue" },
  { time: "00:12", label: "Policy boundary selected", sub: "Chakra · approval invariant required", tone: "orange" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — The AI Assurance Factory" },
      { name: "description", content: "An evidence-led AI assurance factory across the software lifecycle: map systems, test behaviour, probe security and govern release decisions." },
      { property: "og:title", content: "Shyena — The AI Assurance Factory" },
      { property: "og:description", content: "Map, test, evaluate and secure AI systems with evidence-led release assurance." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeStage, setActiveStage] = useState<(typeof stages)[number]["id"]>("vera");
  const [activeTab, setActiveTab] = useState("factory");
  const selectedStage = stages.find((stage) => stage.id === activeStage) ?? stages[1]!;

  return (
    <div className="overflow-hidden bg-[#f7f7f5] text-[#191b22]">
      <section className="relative border-b border-[#e5e5e1] bg-[radial-gradient(ellipse_at_76%_10%,rgba(139,124,246,.15),transparent_35%),radial-gradient(ellipse_at_12%_30%,rgba(255,181,106,.14),transparent_32%),#fafaf8]">
        <div className="mx-auto grid max-w-[1380px] gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dedde8] bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-[.12em] text-[#5e527f] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7964e8]" />
              AI ASSURANCE FACTORY
            </div>
            <h1 className="mt-7 max-w-2xl text-[clamp(2.8rem,5.4vw,5.25rem)] font-semibold leading-[.99] tracking-[-.065em]">
              Make every AI release <span className="text-[#7664df]">provable.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5d606b] sm:text-lg sm:leading-8">
              A coordinated assurance workflow that maps the system, tests real behaviour, probes security and turns evidence into release decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/platform" className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#201d2d] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_-12px_rgba(25,20,45,.55)] transition hover:-translate-y-0.5 hover:bg-[#332b49]">
                Explore the factory <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-xl border border-[#dcdce3] bg-white/75 px-5 text-sm font-semibold text-[#292a33] transition hover:border-[#b8b1d6] hover:bg-white">
                <Play className="h-4 w-4" /> Watch an example run
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-[#62636c]">
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#7865df]" /> Whole-SDLC assurance</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#7865df]" /> Evaluation + security</span>
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-[#7865df]" /> Human-governed releases</span>
            </div>
          </div>

          <div className="min-w-0 rounded-[22px] border border-[#dedee5] bg-white/90 p-2 shadow-[0_32px_90px_-50px_rgba(43,36,73,.42)] backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#efeff2] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eeeaff] text-[#7664df]"><Workflow className="h-4 w-4" /></div>
                <div>
                  <div className="text-sm font-semibold">Assurance factory</div>
                  <div className="text-[11px] text-[#858691]">Illustrative workflow · sample data</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e4e2ee] bg-[#f7f5ff] px-2.5 py-1 text-[10px] font-semibold text-[#6958c1]">
                <span className="relative flex h-1.5 w-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8b79ed] opacity-60" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#7964e8]" /></span>
                RUN OBSERVER
              </div>
            </div>
            <div className="grid gap-3 p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {stages.map((stage, index) => {
                  const Icon = stage.icon;
                  const selected = stage.id === activeStage;
                  const tone = stage.tone === "violet" ? "text-[#7664df] bg-[#f0edff]" : stage.tone === "blue" ? "text-[#3673c9] bg-[#eaf3ff]" : stage.tone === "orange" ? "text-[#c77732] bg-[#fff0e2]" : "text-[#37856b] bg-[#e8f6ef]";
                  return (
                    <button key={stage.id} type="button" onClick={() => setActiveStage(stage.id)} className={`relative min-w-0 rounded-xl border p-3 text-left transition ${selected ? "border-[#a99cf0] bg-[#f8f6ff] shadow-[0_0_0_2px_rgba(130,111,226,.08)]" : "border-[#e9e9ed] bg-white hover:border-[#c9c4e3]"}`}>
                      <div className="flex items-center justify-between gap-1">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${tone}`}><Icon className="h-3.5 w-3.5" /></span>
                        <span className="font-mono text-[9px] text-[#a1a1aa]">0{index + 1}</span>
                      </div>
                      <div className="mt-3 text-sm font-semibold">{stage.name}</div>
                      <div className="mt-1 text-[10px] leading-4 text-[#7a7b86]">{stage.role}</div>
                      <div className={`mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold ${stage.state === "Running" ? "text-[#7664df]" : "text-[#858691]"}`}>
                        {stage.state === "Running" ? <CircleDot className="h-3 w-3 animate-pulse" /> : <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />}
                        {stage.state}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-3 md:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-xl border border-[#e9e9ed] bg-[#fbfbfc] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[10px] font-semibold uppercase tracking-[.14em] text-[#858691]">Selected capability</div>
                    <span className="rounded-md bg-white px-2 py-1 font-mono text-[9px] text-[#777986]">stage/{selectedStage.id}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-.03em]">{selectedStage.name}: {selectedStage.role}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#6b6d78]">{selectedStage.detail}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-[#e9e9ed] pt-3 text-[10px] font-medium text-[#4f5060]"><Activity className="h-3.5 w-3.5 text-[#7664df]" /> {selectedStage.signal}</div>
                </div>
                <div className="rounded-xl border border-[#e9e9ed] bg-white p-4">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-[#858691]"><Activity className="h-3.5 w-3.5" /> Run activity</div>
                  <div className="mt-4 space-y-4">
                    {eventFeed.map((event, index) => <div key={event.time} className="relative flex gap-2.5">
                      <div className="relative mt-0.5 flex w-3 shrink-0 justify-center"><span className={`h-2 w-2 rounded-full ${event.tone === "violet" ? "bg-[#8a78eb]" : event.tone === "blue" ? "bg-[#5b9be7]" : "bg-[#df9b56]"}`} />{index < eventFeed.length - 1 && <span className="absolute top-3 h-8 w-px bg-[#e5e4eb]" />}</div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold leading-4 text-[#454650]">{event.label}</div>
                        <div className="mt-0.5 text-[9px] leading-4 text-[#92939c]">{event.sub}</div>
                      </div>
                      <span className="ml-auto font-mono text-[9px] text-[#a0a1aa]">{event.time}</span>
                    </div>)}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-[#f5f4f9] px-4 py-3">
                <div className="flex items-center gap-2 text-[10px] font-medium text-[#5f5d6e]"><LockKeyhole className="h-3.5 w-3.5 text-[#7664df]" /> Release decision stays human-governed</div>
                <span className="font-mono text-[9px] text-[#8b8999]">NO LIVE CUSTOMER DATA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6e5e1] bg-white">
        <div className="mx-auto grid max-w-[1380px] gap-7 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-10">
          {[
            { icon: Radar, title: "Understand change", body: "Map dependencies and select the journeys that matter." },
            { icon: Zap, title: "Evaluate outcomes", body: "Combine deterministic rules with semantic evaluation." },
            { icon: ShieldCheck, title: "Gate with evidence", body: "Keep failures traceable and release decisions reviewable." },
          ].map(({ icon: Icon, title, body }) => <div key={title} className="flex gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#e8e6f2] bg-[#f7f5ff] text-[#7664df]"><Icon className="h-4.5 w-4.5" /></div>
            <div><h2 className="text-sm font-semibold">{title}</h2><p className="mt-1.5 max-w-sm text-sm leading-6 text-[#72737d]">{body}</p></div>
          </div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[#7865df]"><Layers3 className="h-4 w-4" /> Factory architecture</div>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl">A repeatable system, not a collection of disconnected checks.</h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#6c6d77]">Define how changes enter, which agents and tools can run, how quality is measured, and where a human must approve. Use the same assurance loop throughout the SDLC.</p>
            <Link to="/platform" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6554c0] hover:text-[#4d3ca8]">Explore the platform <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#2e2c3c] bg-[#171621] text-[#e7e5ef] shadow-[0_24px_70px_-44px_rgba(30,24,55,.55)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#302a4a] text-[#b7aaff]"><Workflow className="h-4 w-4" /></span><span className="font-mono text-xs">assurance-factory.yaml</span></div>
              <div className="flex gap-1.5 rounded-lg bg-white/5 p-1">
                {[["factory", "Factory"], ["quality", "Quality loop"], ["policy", "Guardrails"]].map(([id, label]) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`rounded-md px-2.5 py-1.5 text-[10px] font-medium transition ${activeTab === id ? "bg-[#45405e] text-white" : "text-[#a7a4b5] hover:text-white"}`}>{label}</button>)}
              </div>
            </div>
            <div className="min-h-[240px] p-5 sm:p-7">
              {activeTab === "factory" && <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-[13px]"><span className="text-[#b6a8ff]">factory</span>:{"\n"}  <span className="text-[#e5c07b]">name</span>: shyena-assurance{"\n"}  <span className="text-[#e5c07b]">stages</span>:{"\n"}    - nexus   <span className="text-[#9390a5]"># map change impact</span>{"\n"}    - vera    <span className="text-[#9390a5]"># evaluate behaviour</span>{"\n"}    - chakra  <span className="text-[#9390a5]"># probe security</span>{"\n"}    - govern  <span className="text-[#9390a5]"># assemble evidence</span>{"\n"}  <span className="text-[#e5c07b]">release</span>:{"\n"}    <span className="text-[#e5c07b]">require_human_approval</span>: true</pre>}
              {activeTab === "quality" && <div className="space-y-4">
                <div className="text-sm font-semibold">Failure-driven improvement loop</div>
                {["Score completed runs against explicit criteria", "Cluster recurring failures and missing coverage", "Propose regression tests or configuration changes", "Replay benchmarks before review"].map((line, i) => <div key={line} className="flex items-start gap-3 text-xs leading-5 text-[#c3c0d0]"><span className="font-mono text-[#b6a8ff]">0{i + 1}</span>{line}</div>)}
              </div>}
              {activeTab === "policy" && <div className="space-y-3">
                {[["Release approval", "Human checkpoint", "A passing score does not bypass approval."], ["Security boundary", "Fail closed", "Critical policy violations block progression."], ["Evidence record", "Traceable", "Keep the inputs, checks, findings and verdict linked."]].map(([title, state, body]) => <div key={title} className="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-0"><div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold"><span>{title}</span><span className="text-[#b6a8ff]">{state}</span></div><p className="text-xs leading-5 text-[#aaa7b8]">{body}</p></div>)}
              </div>}
            </div>
            <div className="flex items-center gap-2 border-t border-white/10 bg-white/[.03] px-5 py-3 text-[10px] text-[#aaa7b8]"><CircleCheck className="h-3.5 w-3.5 text-[#9a8bea]" /> Illustrative configuration · not a deployed runtime contract</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6e5e1] bg-[#f0eff5]">
        <div className="mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[#7865df]"><Sparkles className="h-4 w-4" /> Continuous improvement</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl">Every failure should improve the next run.</h2>
            <p className="mt-4 text-sm leading-7 text-[#6c6d77]">Evaluation scores, regression results and benchmarks make changes measurable. Improvement proposals remain reviewable; the factory does not silently weaken a gate to make a run pass.</p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {[
              { n: "01", title: "Evaluate", text: "Score behaviour against deterministic rules and semantic criteria.", icon: Activity },
              { n: "02", title: "Benchmark", text: "Compare runs against a stable suite before accepting an improvement.", icon: Radar },
              { n: "03", title: "Improve with review", text: "Turn repeated failures into proposed tests and configuration updates.", icon: Sparkles },
            ].map(({ n, title, text, icon: Icon }) => <article key={n} className="rounded-2xl border border-[#dfdce9] bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-28px_rgba(47,37,86,.5)]">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-[#8b7be2]">{n}</span><Icon className="h-4 w-4 text-[#8b7be2]" /></div>
              <h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#72737d]">{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1926] text-white">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[#b6a8ff]"><LockKeyhole className="h-4 w-4" /> Governed autonomy</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl">Autonomy for the work. Human control for the decision.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c1becd]">Keep a traceable path from change to evidence, with explicit approval at release and security boundaries.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#201d2d] transition hover:bg-[#f0edff]">See the example run <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/5">Talk to Shyena <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
