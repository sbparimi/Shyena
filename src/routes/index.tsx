import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.shyena.eu/" }],
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

mport { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://www.shyena.eu/" }],
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


function ShyenaAssuranceArchitecture() {
  const groups = [
    { title: "BUILD", className: "left-[3%] top-[7%] w-[31%]", items: ["NEXUS", "VERA", "CHAKRA", "AUTONOMOUS QA"] },
    { title: "TEST", className: "right-[3%] top-[12%] w-[27%]", items: ["JOURNEYS", "EVALUATION", "EXPERIMENTS"] },
    { title: "MONITOR", className: "left-[3%] bottom-[8%] w-[28%]", items: ["TRACES", "EVIDENCE", "FINDINGS", "METRICS"] },
    { title: "DEPLOY", className: "right-[3%] bottom-[8%] w-[27%]", items: ["CI/CD", "RELEASE GATES", "ENVIRONMENTS", "INTEGRATIONS"] },
  ];

  return (
    <motion.div
      className="relative mx-auto h-[500px] w-full max-w-[820px] [perspective:1600px] sm:h-[590px]"
      onPointerMove={handleHeroPointer}
      onPointerLeave={resetHeroPointer}
      style={{ rotateX, rotateY }}
      aria-label="Shyena assurance architecture"
    >
      <div className="absolute inset-5 rounded-[38px] bg-[radial-gradient(circle_at_50%_48%,rgba(88,157,215,.20),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(232,117,18,.07),transparent_40%)] blur-2xl" />
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-[34px] border border-[#29445b] bg-[#0a121b] shadow-[0_45px_120px_rgba(0,0,0,.55)]"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(92,166,224,.09),transparent_34%),linear-gradient(145deg,rgba(255,255,255,.035),transparent_30%,transparent_72%,rgba(232,117,18,.025))]" />
        <div className="shyena-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="relative flex h-14 items-center justify-center border-b border-white/10 bg-[#13283a]/90">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-[#7ac9ff]/60 bg-[#72c8ff]/90 text-[#07101a] shadow-[0_0_20px_rgba(114,200,255,.18)]"><span className="text-sm font-black tracking-[-.12em]">S</span></div>
            <div className="font-[Sora] text-lg font-bold tracking-[-.035em] text-[#9ed8ff] sm:text-xl">Shyena <span className="font-normal text-[#7fb6d8]">Assurance Engine</span></div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-14 bottom-0">
          <div className="absolute left-1/2 top-1/2 h-[74%] w-[57%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70 shadow-[0_0_90px_rgba(55,117,169,.16)]" />
          <motion.div className="absolute left-1/2 top-1/2 h-[68%] w-[53%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#72c8ff]/80 shadow-[0_0_25px_rgba(114,200,255,.24),inset_0_0_35px_rgba(114,200,255,.10)]" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
            <span className="absolute -right-2 top-[12%] h-5 w-5 rounded-full bg-[#72c8ff] shadow-[0_0_18px_rgba(114,200,255,.95)]" />
            <span className="absolute bottom-[12%] left-[7%] h-4 w-4 rounded-full bg-[#72c8ff] shadow-[0_0_18px_rgba(114,200,255,.95)]" />
          </motion.div>
          <motion.div className="absolute left-1/2 top-1/2 h-[74%] w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6aa7ce]/45" animate={{ rotate: -360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
            <span className="absolute left-[19%] top-0 h-1 w-24 rounded-full bg-[#72c8ff]/75" />
            <span className="absolute bottom-[8%] right-[18%] h-1 w-20 rounded-full bg-[#72c8ff]/65" />
          </motion.div>
          <motion.div className="absolute left-1/2 top-1/2 h-[51%] w-[39%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#29445b]/70 bg-[#020609]/95 shadow-[inset_0_0_60px_rgba(56,108,148,.13),0_0_35px_rgba(0,0,0,.55)]" animate={{ scale: [1, 1.015, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
            <div className="rounded-full border border-[#69b8e9]/50 bg-[#11202c]/95 px-7 py-3 font-mono text-sm text-[#d7efff] shadow-[0_0_25px_rgba(114,200,255,.08)] sm:text-base">Evidence</div>
            <div className="rounded-full border border-[#69b8e9]/40 bg-[#11202c]/95 px-8 py-3 font-mono text-sm text-[#c4e4f6] shadow-[0_0_25px_rgba(114,200,255,.07)] sm:text-base">Verdict</div>
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 h-[86%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#527e9e]/35" />
          {groups.map((group) => (
            <div key={group.title} className={`absolute z-30 rounded-[26px] border border-[#72c8ff]/65 bg-[#173047]/[.78] p-4 shadow-[0_18px_55px_rgba(0,0,0,.24)] backdrop-blur-md sm:p-5 ${group.className}`}>
              <div className="mb-4 text-center font-mono text-base font-medium tracking-[.04em] text-[#d5edfc] sm:text-lg">{group.title}</div>
              <div className="space-y-2">{group.items.map((item) => <div key={item} className="flex h-9 items-center rounded-full border border-[#5b9bca]/60 bg-[#08131d]/70 px-3 font-mono text-[8px] font-medium text-[#d0e9f9] sm:h-10 sm:px-4 sm:text-[9px]"><span className="mr-2 h-2 w-2 shrink-0 rounded-[3px] border border-[#72c8ff]/75 bg-[#72c8ff]/15" />{item}</div>)}</div>
            </div>
          ))}
          <div className="absolute bottom-[1%] left-1/2 z-40 w-[28%] -translate-x-1/2 rounded-[24px] border border-dashed border-[#72c8ff]/60 bg-[#173047]/90 p-3 text-center shadow-[0_18px_45px_rgba(0,0,0,.3)] backdrop-blur-md sm:p-4">
            <div className="font-mono text-sm font-medium text-[#d5edfc] sm:text-base">GOVERN</div>
            <div className="mt-3 flex h-9 items-center justify-center rounded-full border border-[#5b9bca]/60 bg-[#08131d]/75 px-3 font-mono text-[8px] text-[#d0e9f9] sm:h-10 sm:text-[9px]">RELEASE POLICY</div>
          </div>
          <div className="absolute bottom-3 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap font-mono text-[6px] uppercase tracking-[.20em] text-white/25 sm:text-[7px]">NEXUS · VERA · CHAKRA · EVIDENCE · DECISION</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HomePage() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.7 });
  const rotateX = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.7 });

  const handleHeroPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 7);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * -5);
  };

  const resetHeroPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const sequenceTransition = {
    duration: 12,
    repeat: Infinity,
    ease: [0.45, 0.05, 0.2, 0.95] as const,
    times: [0, 0.08, 0.18, 0.36, 0.48, 1] as const,
  };

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
          .shyena-product { transform-style:preserve-3d; will-change:transform,opacity,filter; backface-visibility:hidden; isolation:isolate; }          .shyena-nexus { animation:shyena-nexus-cinematic 12s cubic-bezier(.45,.05,.2,.95) infinite; }
          .shyena-vera { animation:shyena-vera-cinematic 12s cubic-bezier(.45,.05,.2,.95) infinite; }
          .shyena-chakra { animation:shyena-chakra-cinematic 12s cubic-bezier(.45,.05,.2,.95) infinite; }
          .shyena-product::before { content:""; position:absolute; inset:1px; border-radius:inherit; pointer-events:none; background:linear-gradient(115deg,rgba(255,255,255,.16),transparent 24%,transparent 68%,rgba(255,255,255,.035)); }
          .shyena-product::after { content:""; position:absolute; left:-45%; top:-20%; width:28%; height:150%; pointer-events:none; background:linear-gradient(90deg,transparent,rgba(255,255,255,.32),transparent); transform:skewX(-18deg); opacity:0; animation:shyena-sheen 9s ease-in-out infinite; }
          .shyena-horizon { box-shadow:0 0 80px rgba(85,103,255,.16),0 0 140px rgba(232,117,18,.06); }
          @media (prefers-reduced-motion:reduce) { .shyena-product,.shyena-orbit-motion { animation:none !important; } }
                `}</style>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(70,96,255,.16),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(232,117,18,.10),transparent_30%)]" />
        <div className="shyena-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-10">
          <div className="mb-2 flex items-center justify-end">
            <span className="font-mono text-[8px] uppercase tracking-[.24em] text-white/25">SHYENA · QUALITY INTELLIGENCE</span>
          </div>

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

            <ShyenaAssuranceArchitecture />          </div>

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

      <section className="border-y border-[#e8e8e8] bg-[#f8fafc]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <div className="text-sm font-semibold text-[#e87512]">AI quality engineering</div>
              <h2 className="mt-4 font-[Sora] text-[clamp(2.4rem,5vw,4.3rem)] font-extrabold leading-[.98] tracking-[-.055em] text-[#17233f]">One quality system from development to production.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#626976]">Understand the system. Test realistic journeys. Evaluate behavior. Observe production. Investigate failures. Secure the boundary. Prove the release.</p>
              <Link to="/platform" className="mt-7 inline-flex h-11 items-center gap-2 rounded-md bg-[#17233f] px-5 text-sm font-semibold text-white transition hover:bg-[#24335a]">Explore the platform <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link to="/nexus" className="group rounded-2xl border border-[#dfe3e9] bg-white p-6 transition hover:-translate-y-1 hover:border-[#e87512]/40 hover:shadow-[0_20px_45px_-30px_rgba(23,35,63,.35)]"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#e87512]">01</div><h3 className="mt-5 text-xl font-bold text-[#17233f]">Understand</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Map agents, tools, dependencies and critical journeys.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#17233f]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
              <Link to="/evaluation" className="group rounded-2xl border border-[#dfe3e9] bg-white p-6 transition hover:-translate-y-1 hover:border-[#e87512]/40 hover:shadow-[0_20px_45px_-30px_rgba(23,35,63,.35)]"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#e87512]">02</div><h3 className="mt-5 text-xl font-bold text-[#17233f]">Evaluate</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Combine deterministic, semantic and trajectory evidence.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#17233f]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
              <Link to="/observability" className="group rounded-2xl border border-[#dfe3e9] bg-white p-6 transition hover:-translate-y-1 hover:border-[#e87512]/40 hover:shadow-[0_20px_45px_-30px_rgba(23,35,63,.35)]"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#e87512]">03</div><h3 className="mt-5 text-xl font-bold text-[#17233f]">Observe</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Trace production behavior, quality, latency and cost.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#17233f]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
              <Link to="/docs/reporting" className="group rounded-2xl border border-[#dfe3e9] bg-white p-6 transition hover:-translate-y-1 hover:border-[#e87512]/40 hover:shadow-[0_20px_45px_-30px_rgba(23,35,63,.35)]"><div className="font-mono text-[9px] font-bold tracking-[.16em] text-[#e87512]">04</div><h3 className="mt-5 text-xl font-bold text-[#17233f]">Prove</h3><p className="mt-2 text-sm leading-6 text-[#69707d]">Connect findings to evidence and release decisions.</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#17233f]">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e8e8e8] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm font-semibold text-[#f18a32]">Production evidence</div>
              <h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.055em]">Don't just detect the failure. Find where it came from.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">Trace the path from user goal to agent decision, retrieval, tool call, API state, finding and release disposition.</p>
            </div>
            <Link to="/observability" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 bg-white/[.04] px-5 text-sm font-semibold text-white">Explore observability <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">01</div><div className="mt-8 text-sm font-bold">USER</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Evidence captured</div></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">02</div><div className="mt-8 text-sm font-bold">AGENT</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Evidence captured</div></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">03</div><div className="mt-8 text-sm font-bold">MODEL</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Evidence captured</div></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">04</div><div className="mt-8 text-sm font-bold">RAG</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Evidence captured</div></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">05</div><div className="mt-8 text-sm font-bold">TOOL</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Evidence captured</div></div><div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><div className="font-mono text-[9px] tracking-[.16em] text-white/30">06</div><div className="mt-8 text-sm font-bold">OUTCOME</div><div className="mt-2 h-px bg-gradient-to-r from-[#6877ff]/60 to-transparent"></div><div className="mt-3 text-[10px] text-white/35">Business result</div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e8e8] bg-white"><div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="text-center"><div className="text-sm font-semibold text-[#e87512]">Enterprise environments</div><h2 className="mt-3 font-[Sora] text-[clamp(2rem,4vw,3.4rem)] font-extrabold tracking-[-.045em] text-[#17233f]">Built for complex enterprise workflows.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#69707d]">Designed for teams operating AI agents and enterprise applications across regulated, customer-facing and mission-critical workflows.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["CRM & service","Customer journeys, case management and assisted service workflows."],["ERP & operations","Business processes, approvals, transactions and exception paths."],["Commerce & digital","Checkout, account, identity and high-volume customer journeys."],["Healthcare & regulated","Evidence, policy controls, security boundaries and release governance."]].map(([name,body])=><div key={name} className="rounded-xl border border-[#e4e6ea] bg-[#fafbfc] p-5"><div className="text-sm font-bold text-[#17233f]">{name}</div><p className="mt-2 text-xs leading-5 text-[#69707d]">{body}</p></div>)}</div></div></section>


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