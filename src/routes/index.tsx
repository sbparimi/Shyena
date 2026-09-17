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
          <div className="mx-auto mt-16 max-w-[1180px]">
            <div className="text-center">
              <div className="font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-[#e87512]">Real agent. Real task. Real evidence.</div>
              <h2 className="mt-4 font-[Sora] text-[clamp(2.1rem,4.5vw,4.2rem)] font-extrabold leading-[1] tracking-[-.05em] text-[#17233f]">See it evaluate your own agent.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#626976] sm:text-lg">One business scenario goes through execution, evaluation and evidence—ending in a release signal your team can act on.</p>
            </div>

            <div className="relative mx-auto mt-10 max-w-5xl">
              <div className="hidden h-px bg-[#dfe4eb] md:block absolute left-[13%] right-[13%] top-6" />
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  ["01", "Simulate", "Run a real customer journey through the agent.", "bg-[#eef6ff] text-[#2376d8]"],
                  ["02", "Evaluate", "Check rules, responses, routing, tools and security.", "bg-[#f3efff] text-[#7357c7]"],
                  ["03", "Decide", "Turn execution evidence into a release signal.", "bg-[#ecfaf2] text-[#15945a]"],
                ].map(([number, title, text, badge]) => (
                  <div key={number} className="relative z-10 flex items-start gap-3 rounded-xl border border-[#e4e7ec] bg-white p-4 text-left shadow-[0_12px_35px_-28px_rgba(23,35,63,.5)] md:block md:border-0 md:p-0 md:text-center md:shadow-none">
                    <div className={`mx-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold md:mx-auto ${badge}`}>{number}</div>
                    <div className="pt-0.5 md:pt-4"><div className="text-base font-bold text-[#17233f]">{title}</div><p className="mt-1 text-xs leading-5 text-[#69707d] sm:text-sm">{text}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-[#dfe3e8] bg-[#f8fafc] shadow-[0_30px_80px_-50px_rgba(23,35,63,.45)]">
              <div className="flex items-center justify-between gap-4 border-b border-[#e5e8ed] bg-white px-4 py-3 sm:px-5">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" /><span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
                  <span className="ml-2 truncate font-mono text-[9px] uppercase tracking-[.16em] text-[#8b93a1] sm:text-[10px]">Shyena · agent assurance workspace</span>
                </div>
                <span className="hidden shrink-0 text-[10px] font-semibold text-[#64748b] sm:block">Customer Service Agent · Live</span>
              </div>

              <div className="grid lg:grid-cols-[.9fr_1.25fr_.82fr]">
                <div className="border-b border-[#e5e8ed] bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r">
                  <div className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-[#2376d8]">Business scenario</div>
                  <h3 className="mt-3 text-lg font-bold tracking-[-.02em] text-[#17233f]">Change customer address</h3>
                  <p className="mt-1 text-xs leading-5 text-[#69707d]">A real customer goal executed end-to-end.</p>
                  <div className="relative mt-5 space-y-2.5">
                    {["Customer asks for address change", "Agent identifies account", "Identity verification", "Update address", "Confirmation"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2.5 rounded-lg border border-[#e8ebef] bg-[#fbfcfd] px-3 py-2.5 text-xs font-medium text-[#46505f] sm:text-sm">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-[10px] font-extrabold text-[#2376d8]">{i + 1}</span>{step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-b border-[#e5e8ed] bg-[#f8fafc] p-5 sm:p-7 lg:border-b-0 lg:border-r">
                  <div className="flex items-start justify-between gap-3">
                    <div><div className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-[#7357c7]">Agent execution + evaluation</div><h3 className="mt-2 text-lg font-bold tracking-[-.02em] text-[#17233f]">Journey completed</h3></div>
                    <span className="shrink-0 rounded-full bg-[#eafaf1] px-2.5 py-1 text-[9px] font-bold text-[#13834f]">17 / 17 PASSED</span>
                  </div>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {[
                      ["Business rules", "14 / 15", "1 finding", "bg-[#fff8ed]"],
                      ["Response quality", "0.91", "semantic score", "bg-[#f7f3ff]"],
                      ["Tool execution", "Complete", "actions verified", "bg-[#eef7ff]"],
                      ["Security", "No critical", "findings", "bg-[#eefaf3]"],
                    ].map(([label, value, state, bg]) => (
                      <div key={label} className={`rounded-lg border border-[#e6e9ed] ${bg} p-3`}>
                        <div className="text-[10px] font-semibold text-[#687180]">{label}</div>
                        <div className="mt-1 text-base font-extrabold text-[#17233f] sm:text-lg">{value}</div>
                        <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[.1em] text-[#8b93a1]">{state}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between rounded-lg border border-[#e6e9ed] bg-white px-3 py-2.5">
                    <div><div className="text-[10px] font-semibold text-[#687180]">Evidence trace</div><div className="text-xs font-bold text-[#17233f]">Linked to execution</div></div>
                    <span className="rounded-full bg-[#eefaf3] px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-[.1em] text-[#13834f]">Auditable</span>
                  </div>
                </div>

                <div className="bg-white p-5 sm:p-7">
                  <div className="font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-[#e87512]">Release signal</div>
                  <div className="mt-3 rounded-xl border border-[#f0d4bc] bg-[#fff8f2] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e5] text-lg">!</div>
                    <h3 className="mt-3 text-base font-extrabold leading-5 text-[#17233f]">Review required<br />before release</h3>
                    <p className="mt-2 text-xs leading-5 text-[#5f6672]">The journey works, but one business-rule finding needs review.</p>
                  </div>
                  <div className="mt-4 space-y-2.5">
                    {[
                      ["Journey works end-to-end", "All expected steps completed"],
                      ["1 business-rule finding", "Needs review before release"],
                      ["No critical security issues", "No critical finding detected"],
                      ["Evidence available", "Results linked to execution"],
                    ].map(([title, text], i) => (
                      <div key={title} className="flex gap-2.5">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${i === 1 ? "bg-[#fff0e5] text-[#e87512]" : "bg-[#eafaf1] text-[#15945a]"}`}>{i === 1 ? "!" : "✓"}</span>
                        <div><div className="text-[11px] font-semibold text-[#263247]">{title}</div><div className="text-[10px] leading-4 text-[#7a8290]">{text}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-[#e5e8ed] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                <div className="flex items-center gap-2 text-[11px] text-[#687180]"><ShieldCheck className="h-4 w-4 text-[#e87512]" /> Every finding stays linked to execution evidence.</div>
                <div className="flex gap-2">
                  <Link to="/ai-agent-testing" className="inline-flex h-9 items-center justify-center rounded-md border border-[#cfd5de] px-3.5 text-[11px] font-semibold text-[#17233f] hover:border-[#17233f]">Run your own scenario <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                  <Link to="/contact" className="inline-flex h-9 items-center justify-center rounded-md bg-[#e87512] px-3.5 text-[11px] font-semibold text-white hover:bg-[#d96900]">Book a demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Test real business journeys", "Not just prompts"],
                ["Validate what matters", "Rules, tools, security and responses"],
                ["Get traceable evidence", "For engineering and governance"],
                ["Make a release decision", "Go, review or no-go"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-[#e6e9ed] bg-white p-3.5 text-center">
                  <div className="text-xs font-bold text-[#17233f]">{title}</div>
                  <div className="mt-1 text-[10px] leading-4 text-[#7a8290]">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">Assurance signals</div>
              <h2 className="mt-3 font-[Sora] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1] tracking-[-.05em] text-[#17233f]">Evaluate what actually matters.</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-[#69707d]">One journey can be checked across system facts, behaviour, orchestration and security—not just whether the final answer sounds right.</p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Deterministic", "APIs, states, routes, business rules and tool contracts."],
              ["Semantic", "Relevance, correctness, tone and business meaning."],
              ["Orchestrator", "Intent, routing, tool selection and next action."],
              ["Security", "Prompt injection, unsafe tools and trust-boundary failures."],
            ].map(([title, text], i) => (
              <div key={title} className="rounded-lg border border-[#e1e3e7] bg-[#fafafa] p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff2e8] text-xs font-bold text-[#e87512]">{i + 1}</span>
                  <h3 className="text-sm font-bold text-[#17233f]">{title}</h3>
                </div>
                <p className="mt-3 text-xs leading-5 text-[#69707d]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e8e8] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="text-center"><div className="text-sm font-semibold text-[#e87512]">Customers</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-.045em] text-[#17233f]">Trusted by industry leaders.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69707d]">Enterprise teams use Shyena to test, evaluate, secure and prove their AI systems.</p></div><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">{customers.map(([name,logo])=><LogoCard key={name} name={name} logo={logo} />)}</div><p className="mt-6 text-center text-[11px] leading-5 text-[#7a8290]">Logos are used for identification purposes only and remain the property of their respective owners.</p></div></section>


      <section className="border-y border-[#e8e8e8] bg-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">Autonomous quality engineering</div>
              <h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,5vw,4.3rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">Test the applications your agents depend on.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#626976]">Extend the same autonomous quality approach across web, mobile and API—covering journeys, regression, accessibility and integration behaviour.</p>
              <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-md border border-[#d8dce3] bg-white px-5 text-sm font-semibold text-[#17233f] transition hover:border-[#17233f]">Discuss your QA stack <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#e1e3e7] bg-[#fafafa] p-6"><div className="font-mono text-[10px] font-bold tracking-[.16em] text-[#e87512]">01</div><h3 className="mt-6 text-xl font-bold text-[#17233f]">WEB</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">End-to-end journeys, regression and accessibility.</p></div>
              <div className="rounded-xl border border-[#e1e3e7] bg-[#fafafa] p-6"><div className="font-mono text-[10px] font-bold tracking-[.16em] text-[#e87512]">02</div><h3 className="mt-6 text-xl font-bold text-[#17233f]">MOBILE</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Real device journeys and critical mobile flows.</p></div>
              <div className="rounded-xl border border-[#e1e3e7] bg-[#fafafa] p-6"><div className="font-mono text-[10px] font-bold tracking-[.16em] text-[#e87512]">03</div><h3 className="mt-6 text-xl font-bold text-[#17233f]">API</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Contracts, integrations, data and service behaviour.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-[#e8e8e8] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="text-sm font-semibold text-[#e87512]">Integrations</div><h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,4.5vw,4rem)] font-extrabold leading-[.98] tracking-[-.05em] text-[#17233f]">Works with your existing stack.</h2></div><Link to="/docs" className="text-sm font-semibold text-[#17233f]">View documentation <ArrowRight className="ml-1 inline h-4 w-4" /></Link></div><div className="mt-10 flex flex-wrap gap-2">{integrations.map((item)=><span key={item} className="rounded-md border border-[#e0e2e6] bg-[#fafafa] px-4 py-2.5 text-sm font-medium text-[#5f6672]">{item}</span>)}</div></div></section>

      <section className="bg-[#17233f] text-white"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><div className="text-sm font-semibold text-[#f59a4b]">Production readiness</div><h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.6rem,5vw,5rem)] font-extrabold leading-[.98] tracking-[-.055em]">Know what happened.<br />Know whether to ship.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Bring one critical AI journey. Shyena shows how it can be tested, evaluated, secured and connected to release evidence.</p></div><Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-[#e87512] px-6 text-sm font-semibold text-white transition hover:bg-[#f18a32]">Book a demo <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
  );
}
