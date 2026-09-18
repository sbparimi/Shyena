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
      <section className="relative overflow-hidden bg-[#05070b] text-white">
        <style>{`
          @keyframes shyena-float { 0%,100% { transform: translate3d(0,0,0) rotateX(58deg) rotateZ(-12deg); } 50% { transform: translate3d(0,-10px,0) rotateX(58deg) rotateZ(-9deg); } }
          @keyframes shyena-orbit { from { transform: rotateX(67deg) rotateZ(0deg); } to { transform: rotateX(67deg) rotateZ(360deg); } }
          @keyframes shyena-nexus-cinematic { 0%,8% { transform:translate3d(-180px,-34px,-90px) rotateY(18deg) rotateX(8deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } 18%,36% { transform:translate3d(-8px,-18px,310px) rotateY(0) rotateX(0) scale(1.12); opacity:1; filter:blur(0) saturate(1.08); z-index:12; } 48%,100% { transform:translate3d(-180px,-34px,-90px) rotateY(18deg) rotateX(8deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } }
          @keyframes shyena-vera-cinematic { 0%,32% { transform:translate3d(175px,-70px,-80px) rotateY(-18deg) rotateX(8deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } 42%,60% { transform:translate3d(0,-12px,330px) rotateY(0) rotateX(0) scale(1.14); opacity:1; filter:blur(0) saturate(1.08); z-index:13; } 72%,100% { transform:translate3d(175px,-70px,-80px) rotateY(-18deg) rotateX(8deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } }
          @keyframes shyena-chakra-cinematic { 0%,56% { transform:translate3d(0,115px,-70px) rotateY(0) rotateX(-10deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } 68%,88% { transform:translate3d(0,12px,350px) rotateY(0) rotateX(0) scale(1.16); opacity:1; filter:blur(0) saturate(1.08); z-index:14; } 100% { transform:translate3d(0,115px,-70px) rotateY(0) rotateX(-10deg) scale(.78); opacity:.42; filter:blur(.4px) saturate(.72); z-index:2; } }
          @keyframes shyena-breathe { 0%,100% { transform:translate3d(0,0,0); opacity:.55; } 50% { transform:translate3d(0,-8px,0); opacity:.9; } }
          @keyframes shyena-sheen { 0% { transform:translateX(-140%) skewX(-18deg); opacity:0; } 18%,48% { opacity:.18; } 70%,100% { transform:translateX(180%) skewX(-18deg); opacity:0; } }
          @keyframes shyena-scan { 0% { transform:translateY(-120%); opacity:0; } 15%,70% { opacity:.55; } 100% { transform:translateY(120%); opacity:0; } }
          .shyena-grid { background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px); background-size:64px 64px; }
          .shyena-product { transform-style:preserve-3d; will-change:transform,opacity,filter; backface-visibility:hidden; }
          .shyena-product::before { content:""; position:absolute; inset:1px; border-radius:inherit; pointer-events:none; background:linear-gradient(115deg,rgba(255,255,255,.16),transparent 24%,transparent 68%,rgba(255,255,255,.035)); }
          .shyena-product::after { content:""; position:absolute; left:-45%; top:-20%; width:28%; height:150%; pointer-events:none; background:linear-gradient(90deg,transparent,rgba(255,255,255,.32),transparent); transform:skewX(-18deg); opacity:0; animation:shyena-sheen 9s ease-in-out infinite; }
          .shyena-horizon { box-shadow:0 0 80px rgba(85,103,255,.16),0 0 140px rgba(232,117,18,.06); }
          @media (prefers-reduced-motion:reduce) { .shyena-product,.shyena-orbit-motion { animation:none !important; } }
                `}</style>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(70,96,255,.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(232,117,18,.10),transparent_30%)]" />
        <div className="shyena-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
          <nav className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="font-[Sora] text-lg font-extrabold tracking-[-.04em]">SHYENA<span className="text-[#e87512]">.</span></div>
            <div className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[.16em] text-white/55 md:flex">
              <span>Agent Testing</span><span>Assurance</span><span>Security</span><span>Autonomous QA</span>
            </div>
            <Link to="/contact" className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.12em] text-white transition hover:border-white/50">Contact</Link>
          </nav>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-4 lg:py-16">
            <div className="relative z-10 max-w-[610px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e87512]/30 bg-[#e87512]/10 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[.15em] text-[#ffad69]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e87512] shadow-[0_0_12px_rgba(232,117,18,.9)]" />
                AI quality engineering
              </div>
              <h1 className="mt-7 font-[Sora] text-[clamp(3.5rem,7vw,7.8rem)] font-extrabold leading-[.86] tracking-[-.075em]">Make complex<br /><span className="text-[#f18a32]">AI agents</span><br />reliable.</h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">Simulate real business journeys. Evaluate execution. Trace every finding. Know what happened before you ship.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#e87512] px-5 text-sm font-semibold text-white transition hover:bg-[#f18a32]">Book a demo <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/ai-agent-testing" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-5 text-sm font-semibold text-white/80 transition hover:border-white/35 hover:text-white">Explore Shyena <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="mt-10 grid max-w-md grid-cols-3 border-y border-white/10 py-4">
                <div><div className="font-mono text-[9px] uppercase tracking-[.15em] text-white/35">Simulation</div><div className="mt-1 text-sm font-semibold">Real journeys</div></div>
                <div className="border-l border-white/10 pl-4"><div className="font-mono text-[9px] uppercase tracking-[.15em] text-white/35">Evidence</div><div className="mt-1 text-sm font-semibold">Trace linked</div></div>
                <div className="border-l border-white/10 pl-4"><div className="font-mono text-[9px] uppercase tracking-[.15em] text-white/35">Decision</div><div className="mt-1 text-sm font-semibold">Release signal</div></div>
              </div>
            </div>

            <div className="relative mx-auto h-[480px] w-full max-w-[760px] [perspective:1200px] sm:h-[600px]">
              <div className="absolute inset-[8%_4%_12%] rounded-full bg-[#4c63ff]/10 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="shyena-orbit-motion absolute h-[390px] w-[390px] rounded-full border border-white/10 [transform:rotateX(68deg)] [animation:shyena-orbit_22s_linear_infinite] sm:h-[500px] sm:w-[500px]">
                  <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#e87512] shadow-[0_0_18px_#e87512]" />
                </div>

                <div className="absolute left-1/2 top-1/2 h-[310px] w-[520px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] [animation:shyena-float_8s_ease-in-out_infinite] sm:h-[350px] sm:w-[600px]">
                  <div className="absolute left-1/2 top-1/2 h-[210px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/[.025] shadow-[0_50px_120px_rgba(0,0,0,.45)] [transform:translateZ(-40px)_rotateX(12deg)_rotateZ(-4deg)] sm:h-[240px] sm:w-[360px]" />
                  
                  <Link to="/nexus" aria-label="Open NEXUS — understand your AI system" className="shyena-product shyena-nexus absolute left-[2%] top-[18%] w-[190px] rounded-2xl border border-[#6877ff]/30 bg-[#0d1222]/90 p-4 shadow-[0_30px_70px_rgba(0,0,0,.55)] backdrop-blur-md sm:w-[220px]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold tracking-[.18em] text-[#8b96ff]">01 · NEXUS</span>
                      <span className="h-2 w-2 rounded-full bg-[#8b96ff] shadow-[0_0_12px_#6877ff]" />
                    </div>
                    <div className="mt-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em]">Understand</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Map flows, tools, rules and system behaviour.</p>
                    <div className="mt-4 flex gap-1.5"><span className="rounded bg-white/5 px-2 py-1 font-mono text-[8px] text-white/40">FLOW</span><span className="rounded bg-white/5 px-2 py-1 font-mono text-[8px] text-white/40">TOOLS</span><span className="rounded bg-white/5 px-2 py-1 font-mono text-[8px] text-white/40">RULES</span></div>
                  </Link>

                  <Link to="/vera" aria-label="Open VERA — test and evaluate" className="shyena-product shyena-vera absolute right-[2%] top-[7%] w-[190px] rounded-2xl border border-[#55d6ad]/30 bg-[#0b1716]/90 p-4 shadow-[0_30px_70px_rgba(0,0,0,.55)] backdrop-blur-md sm:w-[220px]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold tracking-[.18em] text-[#6ee7b7]">02 · VERA</span>
                      <span className="h-2 w-2 rounded-full bg-[#6ee7b7] shadow-[0_0_12px_#55d6ad]" />
                    </div>
                    <div className="mt-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em]">Evaluate</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Test behaviour, semantics and execution evidence.</p>
                    <div className="mt-4 grid grid-cols-2 gap-1.5 font-mono text-[8px]"><span className="rounded bg-white/5 px-2 py-1 text-white/40">SEMANTIC <b className="text-white/80">0.91</b></span><span className="rounded bg-white/5 px-2 py-1 text-white/40">TRACE <b className="text-[#6ee7b7]">LINKED</b></span></div>
                  </Link>

                  <Link to="/chakra" aria-label="Open CHAKRA — secure your agents" className="shyena-product shyena-chakra absolute bottom-[5%] left-1/2 w-[210px] -translate-x-1/2 rounded-2xl border border-[#f18a32]/35 bg-[#1a110b]/95 p-4 shadow-[0_35px_80px_rgba(0,0,0,.65)] backdrop-blur-md sm:w-[250px]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-bold tracking-[.18em] text-[#ffad69]">03 · CHAKRA</span>
                      <span className="h-2 w-2 rounded-full bg-[#f18a32] shadow-[0_0_12px_#e87512]" />
                    </div>
                    <div className="mt-3 font-[Sora] text-2xl font-extrabold tracking-[-.04em]">Secure</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Attack critical paths and expose unsafe behaviour.</p>
                    <div className="mt-4 flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-2"><span className="font-mono text-[8px] text-white/35">SECURITY</span><span className="font-mono text-[9px] font-bold text-[#6ee7b7]">NO CRITICAL</span></div>
                  </Link>

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[420px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent [transform:translateZ(180px)_rotateZ(-12deg)]" />
                  <div className="pointer-events-none absolute left-1/2 top-[13%] -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.18em] text-white/35 backdrop-blur-sm">understand → evaluate → secure</div>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="font-mono text-[8px] uppercase tracking-[.22em] text-white/25">SHYENA PLATFORM</div>
                <div className="mt-1 text-[11px] font-medium text-white/45">NEXUS → VERA → CHAKRA</div>
              </div>
            </div>          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] px-5 py-4 sm:px-7">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[.06] to-transparent [animation:shyena-scan_6s_ease-in-out_infinite]" />
            <div className="relative grid gap-4 text-center sm:grid-cols-3 sm:text-left">
              <div><div className="font-mono text-[9px] uppercase tracking-[.16em] text-white/30">SIMULATE</div><div className="mt-1 text-sm font-semibold">Real business journeys</div></div>
              <div className="border-white/10 sm:border-l sm:pl-6"><div className="font-mono text-[9px] uppercase tracking-[.16em] text-white/30">EVALUATE</div><div className="mt-1 text-sm font-semibold">Rules · semantics · orchestration · security</div></div>
              <div className="border-white/10 sm:border-l sm:pl-6"><div className="font-mono text-[9px] uppercase tracking-[.16em] text-white/30">PROVE</div><div className="mt-1 text-sm font-semibold">Traceable evidence for release</div></div>
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
