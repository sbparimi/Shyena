import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena | AI Agent Testing, Evaluation & Security" },
      { name: "description", content: "Test, evaluate and secure AI agents with realistic simulations, trace evidence and release-ready assurance." },
      { property: "og:title", content: "Shyena | AI Agent Testing, Evaluation & Security" },
      { property: "og:description", content: "Realistic AI agent testing, evaluation and security with evidence-backed release decisions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/" },
    ],
  }),
  component: HomePage,
});

const platform = [
  ["NEXUS", "Understand your AI system", "Map flows, orchestration, tools, dependencies and business-critical journeys before you test.", "/nexus"],
  ["VERA", "Test and evaluate", "Simulate realistic users, run multi-turn journeys and evaluate outcomes, semantics and execution integrity.", "/vera"],
  ["CHAKRA", "Secure your agents", "Red-team prompts, tools, trust boundaries and unsafe execution paths before production.", "/chakra"],
] as const;

const evaluation = [
  ["Deterministic", "Facts your system must satisfy: APIs, business rules, states, routes and tool contracts."],
  ["Semantic", "Judge relevance, correctness, tone and business meaning across responses and conversations."],
  ["Orchestrator", "Verify that the agent selected the right intent, route, tool and next action."],
  ["Security", "Detect prompt injection, policy breaks, unsafe tool calls and trust-boundary failures."],
] as const;

const integrations = ["Cognigy", "Agentforce", "LangGraph", "LangChain", "CrewAI", "RAG", "AWS Bedrock", "Azure OpenAI", "Playwright", "OpenTelemetry", "GitHub Actions", "GitLab CI"];

const customers = [
  ["BMW", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/bmw.svg"],
  ["Walmart", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/walmart.svg"],
  ["Optum", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/optum.svg"],
  ["adidas", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/adidas.svg"],
  ["Philips", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/philips.svg"],
  ["CGI", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/cgi.svg"],
  ["TCS", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/tcs.svg"],
  ["Crossover", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/crossover.svg"],
  ["Andela", "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/andela.svg"],
] as const;

const seoPhase2 = [
  ["01", "Content expansion", "Publish in-depth guides, pillar pages, long-form resources and use cases for high-intent AI testing queries."],
  ["02", "Technical SEO", "Strengthen internal linking, schema, Core Web Vitals, indexability, canonical structure and crawl paths."],
  ["03", "Comparison & alternative pages", "Create useful Shyena-vs alternatives, category comparisons and decision-support content without keyword stuffing."],
  ["04", "Documentation SEO", "Make product documentation discoverable for long-tail searches around agent testing, evaluation and release assurance."],
  ["05", "Authority & backlinks", "Build credible industry mentions, partner references, expert content and digital PR around AI quality engineering."],
  ["06", "Measure & iterate", "Track rankings, impressions, CTR, conversions and emerging search queries in Search Console and analytics."],
] as const;

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group flex min-w-0 flex-col items-center justify-between rounded-xl border border-[#e4e6ea] bg-white px-4 py-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#d5d9e0] hover:shadow-[0_15px_35px_-25px_rgba(23,35,63,.45)]">
      <div className="flex h-16 w-full items-center justify-center overflow-hidden">
        <img
          src={logo}
          alt={`${name} logo`}
          loading="lazy"
          className="block max-h-12 w-auto max-w-[118px] object-contain opacity-85 transition duration-300 group-hover:opacity-100"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      <div className="mt-4 flex min-h-[24px] w-full items-center justify-center text-center text-[14px] font-semibold leading-5 text-[#17233f]">{name}</div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#17233f]">
      <section className="border-b border-[#e9e9e9] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-[1050px] text-center">
            <div className="inline-flex items-center rounded-full border border-[#f1d6bf] bg-[#fff8f2] px-3.5 py-1.5 text-[12px] font-semibold text-[#d96900]">AI quality engineering for production agents</div>
            <h1 className="mt-7 font-[Sora] text-[clamp(3.2rem,7vw,6.8rem)] font-extrabold leading-[.95] tracking-[-.065em] text-[#17233f]">Make complex AI agents<br /><span className="text-[#e87512]">reliable in production.</span></h1>
            <p className="mx-auto mt-7 max-w-[760px] text-[19px] leading-8 text-[#5d6470] sm:text-[21px]">Simulation-based testing, evaluation and security that shows what your agent did, why it failed and whether it is ready to ship.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#e87512] px-6 text-sm font-semibold text-white transition hover:bg-[#d96900]">Book a demo <ArrowRight className="h-4 w-4" /></Link><Link to="/ai-agent-testing" className="inline-flex h-12 items-center gap-2 rounded-md border border-[#d8dce3] bg-white px-6 text-sm font-semibold text-[#17233f] transition hover:border-[#17233f]">Explore agent testing <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
          <div className="mx-auto mt-16 max-w-[1100px]">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div className="text-left">
                <div className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-[#e87512]">See it evaluate your own agent</div>
                <h2 className="mt-4 font-[Sora] text-[clamp(2rem,4vw,3.6rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-[#17233f]">From business journey<br />to release decision.</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[#626976] sm:text-lg">Bring one real business scenario. Shyena executes the agent, evaluates its decisions and actions, and preserves the evidence behind every finding.</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {[["01", "Simulate", "Run the real customer journey."], ["02", "Evaluate", "Check rules, responses, routing and tools."], ["03", "Decide", "See what needs review before release."]].map(([number, title, text]) => (
                    <div key={number} className="flex gap-3 rounded-lg border border-[#e5e7eb] bg-white p-3.5">
                      <span className="font-mono text-[10px] font-semibold text-[#e87512]">{number}</span>
                      <div><div className="text-sm font-bold text-[#17233f]">{title}</div><div className="mt-0.5 text-xs leading-5 text-[#69707d]">{text}</div></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#dedfe3] bg-[#fbfbfb] shadow-[0_25px_70px_-45px_rgba(23,35,63,.35)]">
                <div className="flex items-center gap-2 border-b border-[#e7e7e7] bg-white px-5 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" /><span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" /><span className="h-2.5 w-2.5 rounded-full bg-[#d1d5db]" />
                  <span className="ml-3 font-mono text-[10px] uppercase tracking-[.16em] text-[#9ca3af]">Shyena · agent assurance workspace</span>
                </div>
                <div className="grid gap-0 md:grid-cols-[0.9fr_1.25fr]">
                  <div className="border-b border-[#e8e8e8] bg-white p-5 text-left md:border-b-0 md:border-r sm:p-7">
                    <div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#e87512]">01 · Business journey</div>
                    <div className="mt-3 text-lg font-bold text-[#17233f]">Change customer address</div>
                    <p className="mt-2 text-xs leading-5 text-[#69707d]">A real customer goal is executed end-to-end.</p>
                    <div className="mt-5 space-y-2">
                      {["Customer asks for address change", "Agent identifies account", "Identity verification", "Update address", "Confirmation"].map((step, i) => (
                        <div key={step} className="flex items-center gap-3 rounded-md border border-[#ececec] bg-[#fafafa] px-3 py-2.5 text-sm text-[#4b5563]">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff1e6] text-[10px] font-bold text-[#e87512]">{i + 1}</span>{step}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#fbfbfb] p-5 text-left sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div><div className="font-mono text-[10px] uppercase tracking-[.18em] text-[#9ca3af]">02 · Evaluation evidence</div><div className="mt-2 text-lg font-bold text-[#17233f]">What happened is measurable.</div></div>
                      <span className="shrink-0 rounded-full bg-[#fff3e8] px-3 py-1 text-[10px] font-bold text-[#d96900]">REVIEW REQUIRED</span>
                    </div>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {[
                        ["Journey completion", "17 / 17", "ALL STEPS PASSED"],
                        ["Business rules", "14 / 15", "1 FINDING"],
                        ["Response quality", "0.91", "SEMANTIC SCORE"],
                        ["Tool execution", "Complete", "ACTIONS VERIFIED"],
                        ["Security", "No critical", "NO CRITICAL FINDINGS"],
                        ["Evidence", "Trace linked", "AUDITABLE"],
                      ].map(([label, value, state]) => (
                        <div key={label} className="rounded-md border border-[#e5e5e5] bg-white p-3.5">
                          <div className="text-[11px] font-semibold text-[#6b7280]">{label}</div>
                          <div className="mt-1 text-lg font-bold text-[#17233f]">{value}</div>
                          <div className="mt-1 font-mono text-[8px] uppercase tracking-[.12em] text-[#9ca3af]">{state}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-lg border border-[#f1d6bf] bg-[#fff8f2] p-4">
                      <div className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-[#a34c00]">03 · Decision signal</div>
                      <div className="mt-1 text-base font-bold text-[#17233f]">Review required before release</div>
                      <p className="mt-1 text-xs leading-5 text-[#5f6672]">The journey completed successfully, but 1 business-rule finding requires review.</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-[#e5e5e5] pt-4 text-xs text-[#667085]">
                      <ShieldCheck className="h-4 w-4 text-[#e87512]" /> Every finding remains linked to execution evidence.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e9e9e9] bg-[#fafafa]"><div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10"><div className="grid gap-8 md:grid-cols-3"><div><div className="text-sm font-bold text-[#17233f]">Realistic simulations</div><p className="mt-2 text-sm leading-6 text-[#69707d]">Push agents through multi-turn journeys instead of checking isolated answers.</p></div><div><div className="text-sm font-bold text-[#17233f]">Evidence, not just scores</div><p className="mt-2 text-sm leading-6 text-[#69707d]">Trace the route, tool calls, business rules and evaluation behind every finding.</p></div><div><div className="text-sm font-bold text-[#17233f]">Release assurance</div><p className="mt-2 text-sm leading-6 text-[#69707d]">Turn test, evaluation and security evidence into a governed release decision.</p></div></div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">The problem</div><h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,5vw,4.6rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">AI agents can look right<br />while doing the wrong thing.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#626976]">A generated answer is only one signal. Production agents make decisions, call tools, change state, follow policies and coordinate multiple systems.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-[#e2e4e8] bg-[#e2e4e8] sm:grid-cols-2 lg:grid-cols-4">{[["Wrong route", "The response looks correct but the agent selected the wrong intent or workflow."],["Wrong tool", "The agent called the wrong API, used the wrong arguments or skipped a required action."],["Broken journey", "A conversation passes individual checks but fails to complete the customer's goal."],["Unsafe path", "A seemingly helpful interaction crosses a policy, security or trust boundary."]].map(([title,text],i)=><div key={title} className="bg-white p-7"><div className="font-mono text-[10px] font-semibold text-[#e87512]">0{i+1}</div><h3 className="mt-8 text-lg font-bold text-[#17233f]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">{text}</p></div>)}</div></div></section>

      <section className="border-y border-[#e8e8e8] bg-[#fafafa]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="text-sm font-semibold text-[#e87512]">Platform</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">One platform for the<br />whole assurance loop.</h2></div><p className="max-w-md text-base leading-7 text-[#69707d]">Understand the system, test realistic behaviour, evaluate outcomes and secure the paths that matter.</p></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{platform.map(([name,title,text,href],i)=><Link key={name} to={href} className="group rounded-xl border border-[#dedfe3] bg-white p-7 transition hover:-translate-y-1 hover:border-[#c8cbd1] hover:shadow-[0_20px_50px_-35px_rgba(23,35,63,.4)] lg:p-8"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold tracking-[.18em] text-[#e87512]">0{i+1} · {name}</span><ChevronRight className="h-4 w-4 text-[#9ca3af] transition group-hover:translate-x-1 group-hover:text-[#e87512]" /></div><h3 className="mt-12 font-[Sora] text-2xl font-bold tracking-[-.035em] text-[#17233f]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#69707d]">{text}</p><div className="mt-7 text-xs font-semibold text-[#e87512]">Explore {name} <ArrowRight className="ml-1 inline h-3.5 w-3.5" /></div></Link>)}</div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="max-w-3xl"><div className="text-sm font-semibold text-[#e87512]">Evaluate</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">Score the whole journey,<br />not just the final answer.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[#626976]">Combine hard system facts with semantic judgement and execution evidence. Each signal answers a different quality question.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{evaluation.map(([title,text],i)=><div key={title} className="rounded-lg border border-[#e1e3e7] p-6 sm:p-7"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff2e8] text-xs font-bold text-[#e87512]">{i+1}</span><h3 className="text-lg font-bold text-[#17233f]">{title}</h3></div><p className="mt-4 pl-11 text-sm leading-7 text-[#69707d]">{text}</p></div>)}</div></div></section>

      <section className="border-y border-[#e8e8e8] bg-[#fafafa]"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start"><div><div className="text-sm font-semibold text-[#e87512]">Autonomous testing</div><h2 className="mt-4 font-[Sora] text-[clamp(2.5rem,5vw,4.3rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">Let your AI test your AI.</h2><p className="mt-6 text-lg leading-8 text-[#626976]">Start with a business goal. Shyena turns it into executable test intent, runs the journey, evaluates the trace and preserves the evidence.</p></div><div className="grid gap-3">{[["01","Goal","Describe the outcome in plain language."],["02","Plan","Generate realistic scenarios and assertions."],["03","Run","Execute conversations and agent actions."],["04","Judge","Evaluate behaviour and execution integrity."],["05","Prove","Create release evidence and a decision."]].map(([n,t,d])=><div key={n} className="flex gap-5 rounded-lg border border-[#e1e3e7] bg-white p-5"><span className="font-mono text-[10px] font-semibold text-[#e87512]">{n}</span><div><div className="font-semibold text-[#17233f]">{t}</div><div className="mt-1 text-sm text-[#69707d]">{d}</div></div><Check className="ml-auto h-4 w-4 shrink-0 text-[#c5c9d0]" /></div>)}</div></div></div></section>

      <section className="border-y border-[#e8e8e8] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="text-center"><div className="text-sm font-semibold text-[#e87512]">Customers</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-.045em] text-[#17233f]">Trusted by industry leaders.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69707d]">Enterprise teams use Shyena to test, evaluate, secure and prove their AI systems.</p></div><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">{customers.map(([name,logo])=><LogoCard key={name} name={name} logo={logo} />)}</div><p className="mt-6 text-center text-[11px] leading-5 text-[#7a8290]">Logos are used for identification purposes only and remain the property of their respective owners.</p></div></section>

      <section className="border-y border-[#e8e8e8] bg-[#fafafa]"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start"><div><div className="text-sm font-semibold uppercase tracking-[.16em] text-[#e87512]">Phase 2 · SEO growth</div><h2 className="mt-4 font-[Sora] text-[clamp(2.3rem,4.5vw,4.1rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[#17233f]">Build authority and expand visibility.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#626976]">The product foundation is established. Phase 2 focuses on scaling organic discovery with high-value content, stronger technical signals, comparison intent, documentation and credible authority.</p></div><div className="rounded-2xl border border-[#f3d7c1] bg-[#fff5ed] p-7"><div className="text-sm font-semibold text-[#e87512]">Primary SEO goal</div><div className="mt-3 text-xl font-bold leading-7 text-[#17233f]">Become a trusted resource for AI agent testing, evaluation and release assurance.</div><div className="mt-4 text-sm leading-6 text-[#69707d]">Content · Technical SEO · Authority · Product-led discovery · Measurement</div></div></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{seoPhase2.map(([n,title,text])=><article key={n} className="rounded-xl border border-[#e1e3e7] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#d4d8df] hover:shadow-[0_18px_40px_-30px_rgba(23,35,63,.45)]"><div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff1e6] font-mono text-[10px] font-bold text-[#e87512]">{n}</span><h3 className="text-[15px] font-bold text-[#17233f]">{title}</h3></div><p className="mt-4 text-sm leading-6 text-[#69707d]">{text}</p></article>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link to="/resources" className="inline-flex h-11 items-center gap-2 rounded-md bg-[#e87512] px-5 text-sm font-semibold text-white transition hover:bg-[#d96900]">Explore our resources <ArrowRight className="h-4 w-4" /></Link><Link to="/docs" className="inline-flex h-11 items-center gap-2 rounded-md border border-[#d8dce3] bg-white px-5 text-sm font-semibold text-[#17233f] transition hover:border-[#17233f]">See documentation <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section className="border-y border-[#e8e8e8] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="text-sm font-semibold text-[#e87512]">Integrations</div><h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[#17233f]">Works with your existing stack.</h2></div><Link to="/docs" className="text-sm font-semibold text-[#17233f]">View documentation <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mt-10 flex flex-wrap gap-2">{integrations.map((item)=><span key={item} className="rounded-md border border-[#e0e2e6] bg-[#fafafa] px-4 py-2.5 text-sm font-medium text-[#5f6672]">{item}</span>)}</div></div></section>

      <section className="bg-[#17233f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="text-sm font-semibold text-[#f59a4b]">Production readiness</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[.98] tracking-[-.055em]">Know what happened.<br />Know whether to ship.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Bring one critical AI journey. Shyena shows how it can be tested, evaluated, secured and connected to release evidence.</p></div><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#e87512] px-6 text-sm font-semibold text-white transition hover:bg-[#f18a32]">Book a demo <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
  );
}
