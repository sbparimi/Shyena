import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const SITE = "https://www.shyena.eu";

const faq = [
  ["Is Shyena just another test automation tool?", "No. Shyena is autonomous QA: it discovers coverage, generates journeys, executes them, evaluates agent behaviour, diagnoses failures and feeds new cases back into regression. Governance evidence is a downstream output."],
  ["How is it different from LLM evaluation libraries?", "Those libraries primarily score model outputs. Shyena evaluates complete business journeys, including routing, APIs, tools, execution integrity and security, then links findings to release decisions."],
  ["Does Shyena make us EU AI Act compliant?", "No. Shyena produces technical evidence that can support legal and compliance work. It is not legal advice or a certification body."],
  ["Which platforms do you support?", "Shyena is designed for agentic and conversational AI systems, with integrations across agent orchestration, browser automation, APIs, CI/CD and observability. Contact us for your stack."],
  ["Do you need access to production?", "No for the initial assessment. The preferred boundary is a customer-controlled test or staging environment using scoped API credentials and least-privilege access. Read-only logs are preferred where logs are needed. Production access is only used when explicitly agreed for the engagement."],
  ["Where does our data go?", "Engagement architecture is designed around customer-controlled environments and customer-funded model/API accounts. See Security for the current boundary."],
  ["Can we start small?", "Yes. Start with an Autonomous QA Pilot or the €7,500 Agentic Evaluation Programme."]
];

function IllustrativeRun() {
  const lines = [
    ["10:02", "map", "Found representative intents and customer journeys"],
    ["10:04", "test", "Simulated realistic multi-turn conversations"],
    ["10:06", "judge", "Detected answer-quality and business-rule findings"],
    ["10:07", "attack", "Probed prompt-injection and unsafe tool paths"],
    ["10:08", "report", "Created reproducible release evidence"],
    ["10:09", "verdict", "BLOCK release · evidence pack attached"],
  ];
  return <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07101f] shadow-[0_30px_90px_-45px_rgba(7,16,31,.8)]">
    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/45">Illustrative run</span>
      <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] text-white/35">SYNTHETIC</span>
    </div>
    <div className="space-y-3 p-5 font-mono text-[11px] leading-5 sm:p-7">
      <div className="text-white/35">$ shyena assure --agent customer-service-bot</div>
      {lines.map(([time,phase,text],i)=><div key={phase} className="grid grid-cols-[42px_52px_1fr] gap-2">
        <span className="text-white/30">{time}</span><span className={i===5 ? "text-[#ff8b43]" : "text-[#8fa1ff]"}>{phase}</span><span className={i===5 ? "font-bold text-white" : "text-white/65"}>{text}</span>
      </div>)}
    </div>
  </div>;
}

function OutcomeCard({title,body,items,mock}:{title:string;body:string;items:string[];mock:React.ReactNode}) {
  return <article className="rounded-2xl border border-[#e1e4e9] bg-white p-6 shadow-[0_20px_60px_-45px_rgba(23,35,63,.4)] sm:p-7">
    <div className="text-xs font-bold uppercase tracking-[.16em] text-[#e87512]">{title}</div>
    <h3 className="mt-3 text-2xl font-extrabold tracking-[-.03em]">{body}</h3>
    <ul className="mt-5 space-y-2">{items.map(item=><li key={item} className="flex gap-2 text-sm text-[#596273]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />{item}</li>)}</ul>
    <div className="mt-7">{mock}</div>
  </article>;
}

function Mock({children}:{children:React.ReactNode}) {
  return <div className="rounded-xl border border-[#dfe3e8] bg-[#f7f8fa] p-4"><div className="mb-3 font-mono text-[8px] font-bold uppercase tracking-[.15em] text-[#8b929d]">Illustrative</div>{children}</div>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel:"canonical", href:SITE+"/" }],
    meta: [
      { title:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { name:"description", content:"Shyena autonomously discovers journeys, generates and executes tests, evaluates AI-agent behaviour, diagnoses failures and expands regression coverage." },
      { property:"og:title", content:"Shyena Autonomous QA | Agentic AI Testing & Evaluation" },
      { property:"og:description", content:"Test AI agents with realistic journeys, evaluate behaviour, attack critical paths and produce traceable evidence before release." },
      { property:"og:type", content:"website" }, { property:"og:url", content:SITE+"/" }, { property:"og:site_name", content:"Shyena" },
      { property:"og:image", content:SITE+"/shyena-logo-exact.webp" }, { name:"twitter:card", content:"summary_large_image" },
      { name:"twitter:title", content:"Shyena: AI Assurance Engineer for AI agents | Evaluation, security & EU AI Act evidence" },
      { name:"twitter:description", content:"AI assurance, evaluation, security testing and governance evidence for production AI agents." },
      { name:"twitter:image", content:SITE+"/shyena-logo-exact.webp" }
    ],
    scripts:[
      {type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))})}
    ]
  }),
  component:HomePage,
});

function HomePage() {
  return <main className="overflow-hidden bg-white text-[#17213f]">
    <section className="bg-[#07101f] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-24">
        <div>
          <div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">AUTONOMOUS QA · AGENTIC AI EVALUATION</div>
          <h1 className="mt-5 font-[Sora] text-[clamp(3.2rem,7vw,6.8rem)] font-extrabold leading-[.88] tracking-[-.07em]">Shyena is your<br/><span className="text-[#f18a32]">Autonomous</span><br/>QA Engineer.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">It discovers what to test, executes real customer journeys, evaluates agent behaviour, reproduces failures and continuously expands regression coverage.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Book a 30-min call <ArrowRight className="h-4 w-4"/></Link>
            <Link to="/sample-report" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/85">See a sample report <ArrowRight className="h-4 w-4"/></Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/45">
            <span>Built in the Netherlands</span><span>Founder-led</span><span>Autonomous QA · Agentic evaluation</span>
          </div>
        </div>
        <IllustrativeRun/>
      </div>
    </section>

    <section className="border-b border-[#e6e8ed] bg-[#fff8f2]"><div className="mx-auto max-w-[1280px] px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#a55410]">AUTONOMOUS QA · TEST EVERY RELEASE · EVALUATE EVERY AGENT</div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">How Shyena works</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Assurance that runs where your AI does.</h2><p className="mt-5 text-lg leading-8 text-[#69707d]">From release testing to production learning to audit preparation, the same evidence chain connects what happened to what you decide.</p></div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <OutcomeCard title="Before every release" body="Every change gets tested." items={["Journey generation","Four-layer evaluation","Security probes","Release gate"]} mock={<Mock><div className="flex items-center justify-between text-sm font-bold"><span>Release 2.8</span><span className="text-red-600">BLOCKED</span></div><div className="mt-3 text-xs text-[#69707d]">3 P1 findings · evidence attached</div></Mock>}/>
        <OutcomeCard title="In production" body="Every conversation teaches the next test." items={["Conversation monitoring","Failure detection","Drift signals","New regression tests"]} mock={<Mock><div className="text-sm font-bold">Production failure → regression</div><div className="mt-3 flex items-center gap-2 text-xs text-[#69707d]"><span className="rounded bg-white px-2 py-1">Trace</span><ArrowRight className="h-3 w-3"/><span className="rounded bg-white px-2 py-1">Finding</span><ArrowRight className="h-3 w-3"/><span className="rounded bg-white px-2 py-1">Test</span></div></Mock>}/>
        <OutcomeCard title="Every model change" body="Regression runs itself." items={["Model-version comparison","Behaviour drift detection","Journey replay","New regression cases"]} mock={<Mock><div className="text-sm font-bold">Model v4.2 → v4.3</div><div className="mt-3 text-xs text-[#69707d]">3 behavioural changes · 1 release blocker</div></Mock>}/>
      </div>
      <p className="mt-8 text-center text-sm font-semibold text-[#596273]">No test scripts to maintain. No evidence to assemble by hand.</p>
    </div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">What Shyena checks</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Four layers. One release decision.</h2></div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[
        ["Deterministic","Did the APIs, states, routes and business rules behave correctly?"],
        ["Semantic","Was the answer correct, relevant and on-brand?"],
        ["Orchestration","Did the agent pick the right intent, tool and next step?"],
        ["Security","Could someone manipulate it into doing something unsafe?"]
      ].map(([title,body])=><div key={title} className="rounded-2xl border border-[#e1e4e9] bg-white p-6"><ShieldCheck className="h-5 w-5 text-[#e87512]"/><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p></div>)}</div>
      <p className="mt-8 text-sm leading-6 text-[#596273]">A convincing answer cannot hide a failed journey. Hard rule and security failures cannot be averaged away by a good semantic score.</p>
    </div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="text-sm font-bold text-[#e87512]">Works with</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Fit the assurance layer to your stack.</h2></div><p className="max-w-xl text-sm leading-6 text-[#69707d]">Agent orchestration, browser automation, CI/CD, observability and model infrastructure can remain in place.</p></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["Agent systems","Connect the assurance layer to the agent or orchestration interface."],["Browser journeys","Exercise customer-facing flows through browser automation."],["APIs & tools","Validate API calls, tool usage and business-rule outcomes."],["CI/CD & evidence","Run assurance in release workflows and preserve evidence." ]].map(([title,body])=><div key={title} className="rounded-2xl border border-[#dfe3e8] bg-[#fafbfc] p-5"><div className="text-sm font-bold">{title}</div><p className="mt-2 text-xs leading-5 text-[#69707d]">{body}</p></div>)}</div>
      <p className="mt-4 text-xs text-[#8b929d]">Integration scope is agreed against your architecture; Shyena does not require replacing the systems already used to build or operate your AI agent.</p>
    </div></section>

    <section className="border-y border-[#e6e8ed] bg-[#07101f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><div className="text-sm font-bold text-[#f18a32]">Sample release assurance report</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Know whether to ship, and prove why.</h2><p className="mt-5 text-base leading-7 text-white/60">A synthetic example showing autonomous journey execution, agent evaluation, security findings, failure reproduction and the evidence behind a release verdict.</p><Link to="/sample-report" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">Open sample report <ArrowRight className="h-4 w-4"/></Link></div>
      <Mock><div className="text-[#17213f]"><div className="flex items-center justify-between"><span className="font-bold">Customer Service Bot v2.8</span><span className="rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-700">BLOCK</span></div><div className="mt-5 grid grid-cols-2 gap-2 text-xs"><span>Deterministic</span><b>PASS</b><span>Semantic</span><b>REVIEW</b><span>Orchestration</span><b>FAIL</b><span>Security</span><b>FAIL</b></div><div className="mt-5 border-t border-[#dfe3e8] pt-4 text-xs text-[#69707d]">Sample report · Synthetic demo bot · No client data</div></div></Mock></div>
    </div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="text-sm font-bold text-[#e87512]">Outcomes</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">The result is evidence you can use.</h2></div><div className="mt-9 grid gap-3 md:grid-cols-4">{["Catch journey failures that answer-quality scores miss.","Turn production failures into permanent tests.","Give auditors evidence, not screenshots.","Make release decisions you can defend."].map(x=><div key={x} className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 text-sm font-semibold leading-6">{x}</div>)}</div></div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-8 lg:grid-cols-3"><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Proof</div><h3 className="mt-3 text-2xl font-extrabold">Design partner programme</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">A small number of European organisations can work directly with the founder during an assurance pilot.</p><Link to="/design-partners" className="mt-5 inline-flex text-sm font-bold">Apply as a design partner <ArrowRight className="ml-1 h-4 w-4"/></Link></div><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Founder-led</div><h3 className="mt-3 text-2xl font-extrabold">Built close to the engineering problem.</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">Parimi's background is in test leadership and conversational-AI quality engineering.</p><Link to="/about" className="mt-5 inline-flex text-sm font-bold">Meet the founder <ArrowRight className="ml-1 h-4 w-4"/></Link></div><div className="rounded-2xl border border-[#e1e4e9] bg-white p-7"><div className="text-sm font-bold text-[#e87512]">Knowledge</div><h3 className="mt-3 text-2xl font-extrabold">Engineering thinking, published.</h3><p className="mt-3 text-sm leading-6 text-[#69707d]">Read practical work on LLM evaluation, conversational testing and AI-agent assurance.</p><Link to="/blog" className="mt-5 inline-flex text-sm font-bold">Read the blog <ArrowRight className="ml-1 h-4 w-4"/></Link></div></div></div></section>

    <section className="bg-white"><div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">Start small</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">Autonomous QA Pilot.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">A focused engagement that connects one real system, discovers critical journeys, executes autonomous tests and shows where meaningful coverage can replace manual effort.</p><Link to="/pricing" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg border border-[#17213f] px-5 text-sm font-bold">See pricing <ArrowRight className="h-4 w-4"/></Link></div></div></section>

    <section className="border-y border-[#e6e8ed] bg-[#fafbfc]"><div className="mx-auto max-w-[1000px] px-5 py-20 sm:px-8 lg:py-24"><div className="text-center"><div className="text-sm font-bold text-[#e87512]">FAQ</div><h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em]">Questions buyers ask.</h2></div><div className="mt-10 space-y-3">{faq.map(([q,a])=><details key={q} className="rounded-xl border border-[#e1e4e9] bg-white p-5"><summary className="cursor-pointer list-none font-bold">{q}</summary><p className="mt-3 max-w-3xl text-sm leading-6 text-[#69707d]">{a}</p></details>)}</div></div></section>

    <section className="bg-[#17213f] text-white"><div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20"><h2 className="font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Give every AI release an engineer whose only job is proving it's safe to ship.</h2><Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-bold">Book a 30-min call <ArrowRight className="h-4 w-4"/></Link></div></section>
  </main>;
}
