import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, ArrowUpRight, Check, ChevronRight, CircleDot,
  GitPullRequest, Layers3, LockKeyhole, Play, Radar,
  ShieldCheck, Sparkles, Workflow, Zap,
} from "lucide-react";

const stages = [
  { id: "nexus", name: "Nexus", short: "MAP", role: "Understand the system", state: "COMPLETE", color: "#a79bff", detail: "Map components, dependencies and change impact before choosing what to test.", signal: "System surface mapped", event: "Dependencies + affected journeys mapped", icon: Layers3 },
  { id: "vera", name: "Vera", short: "EVAL", role: "Test real behaviour", state: "RUNNING", color: "#8bd5ff", detail: "Execute browser, API, deterministic and semantic checks against intended outcomes.", signal: "Journey evaluation selected", event: "Deterministic + semantic checks selected", icon: Radar },
  { id: "chakra", name: "Chakra", short: "SECURE", role: "Probe trust boundaries", state: "QUEUED", color: "#ffb978", detail: "Challenge permissions, unsafe tool use and security invariants with adversarial cases.", signal: "Security campaign queued", event: "Approval invariant marked as a hard control", icon: ShieldCheck },
  { id: "govern", name: "Govern", short: "PROVE", role: "Make an evidence-led decision", state: "WAITING", color: "#a5e6c1", detail: "Bring failures, traces, policy checks and run integrity into a reviewable release decision.", signal: "Evidence required before verdict", event: "Release verdict waits for verified evidence", icon: GitPullRequest },
] as const;

const runEvents = [
  { time: "00:04", stage: "NEXUS", message: "Change surface mapped", detail: "Components · dependencies · journeys" },
  { time: "00:09", stage: "VERA", message: "Journey evaluation selected", detail: "Deterministic checks + semantic criteria" },
  { time: "00:12", stage: "CHAKRA", message: "Policy boundary identified", detail: "Approval state must be verified" },
  { time: "—", stage: "GOVERN", message: "Waiting for evidence", detail: "No release verdict has been issued" },
];

const capabilities = [
  { n: "01", title: "Understand the change", text: "Map the system and the journeys that could break.", icon: Layers3, to: "/nexus", name: "Nexus" },
  { n: "02", title: "Test the real behaviour", text: "Run deterministic checks alongside semantic evaluation.", icon: Radar, to: "/vera", name: "Vera" },
  { n: "03", title: "Challenge the boundaries", text: "Test security controls, permissions and unsafe behaviour.", icon: ShieldCheck, to: "/chakra", name: "Chakra" },
  { n: "04", title: "Decide from evidence", text: "Turn execution traces and findings into a reviewable verdict.", icon: GitPullRequest, to: "/govern", name: "Govern" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena — AI Assurance Factory" },
      { name: "description", content: "Map AI systems, test behaviour, probe security and produce evidence-led release decisions across the software lifecycle." },
      { property: "og:title", content: "Shyena — AI Assurance Factory" },
      { property: "og:description", content: "One observable workflow from system understanding to an evidence-led release decision." },
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
  const selected = stages.find((stage) => stage.id === activeStage) ?? stages[1]!;

  return (
    <div className="overflow-hidden bg-[#08090d] text-[#f3f3f5]">
      <section className="relative isolate border-b border-white/[0.08]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[44%] top-[-24rem] h-[46rem] w-[46rem] rounded-full bg-[#7566ef]/[0.13] blur-[120px]" />
          <div className="absolute right-[-15rem] top-[12rem] h-[30rem] w-[30rem] rounded-full bg-[#4ac5a0]/[0.06] blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "linear-gradient(to bottom, black, transparent 90%)" }} />
        </div>
        <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[.2em] text-[#aaa7ba] sm:text-[11px]">
            <span className="inline-flex items-center gap-2 text-[#b6aaff]"><span className="h-1.5 w-1.5 rounded-full bg-[#a79bff]" /> AI ASSURANCE FACTORY</span>
            <span className="text-white/20">/</span>
            <span>Across the software lifecycle</span>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.12fr_.62fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.25rem,7.4vw,7.8rem)] font-medium leading-[.91] tracking-[-.075em]">
              Ship AI with<br />
              <span className="text-white/45">evidence,</span> not guesses.
            </h1>
            <div className="max-w-xl pb-2 lg:justify-self-end">
              <p className="text-base leading-7 text-[#b0b0bb] sm:text-lg sm:leading-8">Shyena connects system mapping, behaviour testing, adversarial security checks and release governance in one observable assurance workflow.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/platform" className="group inline-flex h-12 items-center gap-2 rounded-lg bg-[#f1efff] px-5 text-sm font-semibold text-[#15131f] transition hover:bg-white">
                  Explore the factory <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.025] px-5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.06]">
                  <Play className="h-3.5 w-3.5" /> Watch an example run
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14 border-y border-white/[0.12] py-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[.16em] text-[#92919f]">
              <span className="inline-flex items-center gap-2"><Activity className="h-3.5 w-3.5 text-[#a79bff]" /> Assurance workflow / interactive example</span>
              <span className="inline-flex items-center gap-2 text-[#c9c5d7]"><span className="h-1.5 w-1.5 rounded-full bg-[#a79bff]" /> SYNTHETIC DATA · NOT A LIVE CUSTOMER RUN</span>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.13] bg-[#0d0e14]/95 shadow-[0_40px_130px_-65px_rgba(103,88,219,.6)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.09] bg-white/[0.025] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]"><Workflow className="h-4 w-4 text-[#b6aaff]" /></div>
                <div>
                  <div className="text-xs font-semibold tracking-tight text-white">Factory run / RFQ assurance</div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[.14em] text-[#777785]">Interactive reference scenario</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] text-[#bbb7c9]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a79bff]" /> Observer view
              </div>
            </div>
            <div className="grid lg:grid-cols-[1.3fr_.7fr]">
              <div className="relative min-h-[390px] overflow-hidden border-b border-white/[0.09] bg-[#090a10] sm:min-h-[440px] lg:border-b-0 lg:border-r">
                <div aria-hidden="true" className="absolute inset-0 opacity-[0.17]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,.28) 1px, transparent 1px)", backgroundSize: "22px 22px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
                <div className="absolute left-4 top-4 z-10 font-mono text-[9px] uppercase tracking-[.17em] text-[#727282] sm:left-6 sm:top-6">Change → systems → evidence</div>
                <div className="absolute right-4 top-4 z-10 font-mono text-[9px] text-[#727282] sm:right-6 sm:top-6">Scenario 014</div>
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 560" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustrative system graph linking a customer request, AI agent, APIs, policy checks and an evidence-backed release decision">
                  <defs>
                    <linearGradient id="shyenaFlowLine" x1="0" x2="1"><stop stopColor="#8f82ff" stopOpacity=".1" /><stop offset=".5" stopColor="#a79bff" stopOpacity=".9" /><stop offset="1" stopColor="#6acbab" stopOpacity=".55" /></linearGradient>
                    <filter id="shyenaGlow"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  </defs>
                  {[
                    [150,278,310,278],[310,278,450,158],[310,278,450,398],[450,158,600,220],[450,398,600,340],[600,220,745,278],[600,340,745,278]
                  ].map(([x1,y1,x2,y2],i)=><g key={i}><path d={`M${x1} ${y1} L${x2} ${y2}`} fill="none" stroke="url(#shyenaFlowLine)" strokeWidth={i===5||i===6?2:1.5} strokeOpacity=".72" strokeDasharray={i%2===0?"5 8":"none"} />{i%2===0&&<circle r="3.5" fill={i===6?"#70d2ac":"#a79bff"} filter="url(#shyenaGlow)"><animate attributeName="cx" values={`${x1};${x2}`} dur={`${2.4+(i*.23)}s`} repeatCount="indefinite" /><animate attributeName="cy" values={`${y1};${y2}`} dur={`${2.4+(i*.23)}s`} repeatCount="indefinite" /><animate attributeName="opacity" values="0;1;0" dur={`${2.4+(i*.23)}s`} repeatCount="indefinite" /></circle>}</g>)}
                  {[
                    {x:75,y:238,w:150,h:80,title:"CHANGE",sub:"Issue / PR",tone:"#d6d4df"},
                    {x:245,y:238,w:130,h:80,title:"NEXUS",sub:"System map",tone:"#a79bff"},
                    {x:385,y:118,w:130,h:80,title:"VERA",sub:"Behaviour",tone:"#8bd5ff"},
                    {x:385,y:358,w:130,h:80,title:"CHAKRA",sub:"Security",tone:"#ffb978"},
                    {x:535,y:238,w:130,h:80,title:"POLICY",sub:"Hard controls",tone:"#a5e6c1"},
                    {x:675,y:238,w:170,h:80,title:"GOVERN",sub:"Evidence + verdict",tone:"#a5e6c1"},
                  ].map((node)=><g key={node.title} transform={`translate(${node.x},${node.y})`}>
                    <rect width={node.w} height={node.h} rx="10" fill="#11121b" stroke={activeStage===node.title.toLowerCase()?"#b3a7ff":"rgba(255,255,255,.17)"} strokeWidth={activeStage===node.title.toLowerCase()?2:1} />
                    <circle cx="15" cy="16" r="3" fill={node.tone} />
                    <text x="15" y="39" fill="#f1f0f6" fontSize="12" fontFamily="ui-monospace,monospace" fontWeight="600" letterSpacing="1">{node.title}</text>
                    <text x="15" y="58" fill="#858594" fontSize="10" fontFamily="ui-monospace,monospace">{node.sub}</text>
                  </g>)}
                  <text x="32" y="518" fill="#6e6e7e" fontSize="10" fontFamily="ui-monospace,monospace" letterSpacing="1">TRACEABLE EXECUTION PATH</text>
                  <text x="868" y="518" fill="#6e6e7e" fontSize="10" textAnchor="end" fontFamily="ui-monospace,monospace">ILLUSTRATIVE</text>
                </svg>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-6 sm:right-6">
                  {stages.map((stage) => {
                    const Icon = stage.icon;
                    const chosen = activeStage === stage.id;
                    return <button key={stage.id} type="button" onClick={() => setActiveStage(stage.id)} aria-pressed={chosen} className={`inline-flex min-h-9 items-center gap-2 rounded-md border px-3 text-[10px] font-semibold transition ${chosen?"border-white/25 bg-white/[0.1] text-white":"border-white/10 bg-[#101119]/95 text-[#9898a7] hover:border-white/25 hover:text-white"}`}>
                      <Icon className="h-3 w-3" style={{ color: stage.color }} /> {stage.name}
                    </button>;
                  })}
                </div>
              </div>

              <div className="flex min-w-0 flex-col">
                <div className="border-b border-white/[0.09] px-4 py-4 sm:px-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-mono text-[9px] uppercase tracking-[.16em] text-[#787888]">Selected stage / {selected.short}</div>
                    <span className="rounded border border-white/10 px-2 py-1 font-mono text-[9px]" style={{ color: selected.color }}>{selected.state}</span>
                  </div>
                  <div className="mt-3 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]"><selected.icon className="h-4 w-4" style={{ color: selected.color }} /></div>
                    <div><h2 className="text-lg font-medium tracking-tight text-white">{selected.name}</h2><p className="mt-1 text-xs leading-5 text-[#a2a1ae]">{selected.role}</p></div>
                  </div>
                  <p className="mt-4 text-xs leading-6 text-[#aaa9b6]">{selected.detail}</p>
                  <div className="mt-4 flex items-start gap-2 rounded-lg border border-white/[0.09] bg-white/[0.025] p-3 text-[11px] leading-5 text-[#d4d2df]"><CircleDot className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: selected.color }} />{selected.signal}</div>
                </div>
                <div className="flex-1 px-4 py-4 sm:px-5">
                  <div className="flex items-center justify-between"><div className="font-mono text-[9px] uppercase tracking-[.15em] text-[#787888]">Run event stream</div><span className="font-mono text-[9px] text-[#686878]">SAMPLE TRACE</span></div>
                  <div className="mt-4 space-y-0">
                    {runEvents.map((event,index)=><div key={event.stage} className="grid grid-cols-[44px_1fr] gap-3 border-t border-white/[0.08] py-3">
                      <span className="pt-0.5 font-mono text-[9px] text-[#7f7f8f]">{event.time}</span>
                      <div><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: stages.find(s=>s.name.toUpperCase()===event.stage)?.color ?? "#999" }} /><span className="font-mono text-[9px] tracking-[.1em] text-[#9998a8]">{event.stage}</span></div><p className="mt-1 text-[11px] font-medium leading-5 text-[#e2e1e9]">{event.message}</p><p className="mt-0.5 text-[10px] leading-4 text-[#777786]">{event.detail}</p></div>
                    </div>)}
                  </div>
                </div>
                <div className="border-t border-white/[0.09] bg-white/[0.025] px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2 text-[10px] text-[#aaa9b6]"><LockKeyhole className="h-3.5 w-3.5 text-[#a79bff]" /> No verdict without verified evidence.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] leading-5 text-[#777786]">
            <span>Scenario is illustrative. Data and events are synthetic; no live backend execution is implied.</span>
            <Link to="/demo" className="inline-flex items-center gap-1.5 text-[#c5bcff] transition hover:text-white">Open the full cinematic demo <ArrowUpRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0a0b11]">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {capabilities.map(({n,title,text,icon:Icon,to,name})=><Link key={n} to={to} className="group border-t border-white/[0.14] pt-5 transition hover:border-[#a79bff]">
            <div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.14em] text-[#868594]">{n} / {name.toUpperCase()}</span><Icon className="h-4 w-4 text-[#8b8a99] transition group-hover:text-[#b6aaff]" /></div>
            <h3 className="mt-6 text-xl font-medium tracking-[-.035em] text-white">{title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-[#9695a3]">{text}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-[#c0b8ff]">Explore {name}<ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" /></span>
          </Link>)}
        </div>
      </section>

      <section className="relative border-b border-white/[0.08]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:px-12 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[#b6aaff]"><Workflow className="h-3.5 w-3.5" /> The assurance loop</div>
            <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Not another copilot. A workflow that shows its work.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#a09fac]">Move from change intake to reproducible tests, captured traces and a release decision. Keep controls explicit, and keep people in charge of what ships.</p>
            <Link to="/platform" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#c5bcff]">Explore Shyena's approach <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/[0.12] bg-[#0d0e14]">
            {[
              {n:"01",title:"Understand",detail:"Read the change, dependencies, requirements and critical journeys.",label:"NEXUS",icon:Layers3},
              {n:"02",title:"Execute",detail:"Run available browser, API, regression and AI-specific checks.",label:"VERA",icon:Radar},
              {n:"03",title:"Challenge",detail:"Probe security, permissions, policy and failure paths.",label:"CHAKRA",icon:ShieldCheck},
              {n:"04",title:"Evaluate",detail:"Separate execution integrity, deterministic facts and semantic judgement.",label:"EVALUATION",icon:Activity},
              {n:"05",title:"Prove",detail:"Preserve traces, findings and explicit human approval for release.",label:"GOVERN",icon:GitPullRequest},
            ].map(({n,title,detail,label,icon:Icon})=><div key={n} className="grid gap-3 border-b border-white/[0.08] p-4 last:border-0 sm:grid-cols-[52px_1fr_auto] sm:items-center sm:p-5">
              <span className="font-mono text-[10px] text-[#8f8d9d]">{n}</span>
              <div><h3 className="text-sm font-semibold text-white">{title}</h3><p className="mt-1 text-xs leading-5 text-[#92919f]">{detail}</p></div>
              <div className="flex items-center gap-2 font-mono text-[9px] tracking-[.12em] text-[#b9b0ff]"><Icon className="h-3.5 w-3.5" />{label}</div>
            </div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.08] bg-[#0c0d13]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#b6aaff]">Evaluation + governance</div>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-.05em] sm:text-5xl">A score is not proof. Keep the evidence.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#9b9aa7]">Results should be reconstructable: what ran, what failed, why it failed and which release control was applied.</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.10] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-4">
            {[
              {n:"01",title:"Execution integrity",text:"Catch timeouts, truncation and tool failures before scoring a journey.",tag:"RUN CHECKS",icon:Zap},
              {n:"02",title:"Deterministic rules",text:"Keep exact facts, required steps and policy invariants explicit.",tag:"HARD ASSERTIONS",icon:Check},
              {n:"03",title:"Semantic quality",text:"Evaluate meaning and user outcomes where exact matching is too brittle.",tag:"JUDGEMENT",icon:Activity},
              {n:"04",title:"Release governance",text:"Map findings to risk and keep approval boundaries visible.",tag:"EVIDENCE",icon:LockKeyhole},
            ].map(({n,title,text,tag,icon:Icon})=><article key={n} className="bg-[#0d0e14] p-5 sm:p-6">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#898797]">{n}</span><Icon className="h-4 w-4 text-[#aaa0ff]" /></div>
              <h3 className="mt-7 text-base font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9796a3]">{text}</p>
              <div className="mt-7 border-t border-white/[0.09] pt-3 font-mono text-[9px] tracking-[.14em] text-[#b6aaff]">{tag}</div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#12121a]">
        <div aria-hidden="true" className="absolute right-[-10rem] top-[-18rem] h-[36rem] w-[36rem] rounded-full bg-[#7868e7]/[0.12] blur-[110px]" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-[#b6aaff]"><Sparkles className="h-3.5 w-3.5" /> Start with one critical journey</div>
            <h2 className="mt-5 max-w-4xl text-3xl font-medium leading-tight tracking-[-.055em] sm:text-5xl">Make your next release easier to trust.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a09fac]">Map the risk, test the behaviour, challenge the boundaries and decide with evidence.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/demo" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#f1efff] px-5 text-sm font-semibold text-[#15131f] transition hover:bg-white"><Play className="h-3.5 w-3.5" /> View example run</Link>
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/[0.06]">Talk to Shyena <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
