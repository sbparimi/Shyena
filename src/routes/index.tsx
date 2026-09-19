import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";

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

            <motion.div
              className="relative mx-auto h-[540px] w-full max-w-[860px] [perspective:1800px] sm:h-[650px]"
              onPointerMove={handleHeroPointer}
              onPointerLeave={resetHeroPointer}
              style={{ rotateX, rotateY }}
            >
              <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(63,86,255,.24),transparent_58%)] blur-3xl" />
              <div className="absolute left-1/2 top-[54%] h-[2px] w-[78%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent shadow-[0_0_45px_rgba(100,120,255,.25)]" />
              <div className="absolute left-1/2 top-[54%] h-[170px] w-[68%] -translate-x-1/2 rounded-[50%] border border-white/[.07] bg-white/[.012] [transform:rotateX(72deg)_translateZ(-120px)]" />
              
              <div className="absolute inset-0 [transform-style:preserve-3d]">
                <motion.div
                  className="shyena-orbit-motion absolute left-1/2 top-[53%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.07] sm:h-[560px] sm:w-[560px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <span className="absolute left-[7%] top-[20%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_white]" />
                  <span className="absolute bottom-[13%] right-[9%] h-1.5 w-1.5 rounded-full bg-[#e87512] shadow-[0_0_18px_#e87512]" />
                </motion.div>

                <motion.div
                  className="shyena-product shyena-nexus absolute left-[2%] top-[14%] w-[270px] overflow-hidden rounded-[24px] border border-[#6877ff]/45 bg-[#080d1c]/96 shadow-[0_55px_120px_rgba(0,0,0,.78),0_0_70px_rgba(104,119,255,.12)] backdrop-blur-xl sm:w-[330px]"
                  initial={{ x: -180, y: -34, z: -90, rotateY: 18, rotateX: 8, scale: 0.78, opacity: 0.42 }}
                  animate={{ x: [-180, -180, -8, -8, -180, -180], y: [-34,-34,-18,-18,-34,-34], z: [-90,-90,310,310,-90,-90], rotateY:[18,18,0,0,18,18], rotateX:[8,8,0,0,8,8], scale:[.78,.78,1.12,1.12,.78,.78], opacity:[.42,.42,1,1,.42,.42] }}
                  transition={sequenceTransition}
                  whileHover={{ scale: 1.15, opacity: 1 }}
                >
                  <div className="relative h-[190px] overflow-hidden border-b border-white/10 bg-[#070b17] sm:h-[225px]">
                    <div className="absolute inset-0 opacity-40" style={{backgroundImage:"linear-gradient(rgba(104,119,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(104,119,255,.14) 1px,transparent 1px)",backgroundSize:"28px 28px"}} />
                    <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[.22em] text-[#8b96ff]">NEXUS / SYSTEM MAP</div>
                    <svg viewBox="0 0 360 190" className="absolute inset-x-4 bottom-1 h-[155px] w-[calc(100%-2rem)]">
                      <path d="M48 110 C100 55 126 145 174 96 S248 42 312 78" fill="none" stroke="#6877ff" strokeWidth="2" opacity=".8"/>
                      <path d="M174 96 C206 116 226 138 258 132" fill="none" stroke="#6877ff" strokeWidth="1.5" opacity=".45"/>
                      <circle cx="48" cy="110" r="9" fill="#0b1024" stroke="#8b96ff" strokeWidth="2"/><circle cx="174" cy="96" r="13" fill="#6877ff"/><circle cx="312" cy="78" r="10" fill="#0b1024" stroke="#8b96ff" strokeWidth="2"/>
                      <rect x="88" y="66" width="15" height="15" rx="3" fill="#e87512"/><rect x="244" y="123" width="15" height="15" rx="3" fill="#55d6ad"/>
                      <text x="34" y="140" fill="rgba(255,255,255,.45)" fontSize="9">FLOW</text><text x="157" y="79" fill="white" fontSize="9">AGENT</text><text x="292" y="102" fill="rgba(255,255,255,.45)" fontSize="9">TOOL</text>
                    </svg>
                    <div className="absolute bottom-3 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#6877ff]/50 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.2em] text-[#8b96ff]">01 · NEXUS</span><span className="rounded-full border border-[#6877ff]/25 px-2 py-1 font-mono text-[8px] text-[#8b96ff]">UNDERSTAND</span></div>
                    <div className="mt-3 font-[Sora] text-[26px] font-extrabold tracking-[-.045em]">Map the system.</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Flows, tools, rules and system behaviour.</p>
                  </div>
                </motion.div>

                <motion.div className="shyena-product shyena-vera absolute right-[0%] top-[6%] w-[270px] overflow-hidden rounded-[24px] border border-[#55d6ad]/45 bg-[#071312]/96 shadow-[0_55px_120px_rgba(0,0,0,.78),0_0_70px_rgba(85,214,173,.1)] backdrop-blur-xl sm:w-[330px]"
                  initial={{ x: 175, y: -70, z: -80, rotateY: -18, rotateX: 8, scale: .78, opacity: .42 }}
                  animate={{ x:[175,175,0,0,175,175], y:[-70,-70,-12,-12,-70,-70], z:[-80,-80,330,330,-80,-80], rotateY:[-18,-18,0,0,-18,-18], rotateX:[8,8,0,0,8,8], scale:[.78,.78,1.14,1.14,.78,.78], opacity:[.42,.42,1,1,.42,.42] }}
                  transition={{...sequenceTransition, times:[0,.32,.42,.60,.72,1] as const}}
                  whileHover={{ scale: 1.17, opacity: 1 }}
                >
                  <div className="relative h-[190px] overflow-hidden border-b border-white/10 bg-[#06100f] sm:h-[225px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(85,214,173,.16),transparent_42%)]" />
                    <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[.22em] text-[#6ee7b7]">VERA / EVALUATION</div>
                    <svg viewBox="0 0 360 190" className="absolute inset-x-4 bottom-1 h-[155px] w-[calc(100%-2rem)]">
                      <circle cx="180" cy="102" r="60" fill="none" stroke="#55d6ad" strokeWidth="1" opacity=".25"/><circle cx="180" cy="102" r="43" fill="none" stroke="#55d6ad" strokeWidth="2" opacity=".5"/><circle cx="180" cy="102" r="25" fill="none" stroke="#6ee7b7" strokeWidth="5" opacity=".9"/><circle cx="180" cy="102" r="8" fill="#6ee7b7"/>
                      <path d="M42 102 H155 M205 102 H318" stroke="#55d6ad" strokeWidth="2" opacity=".65"/><path d="M180 42 V77 M180 127 V162" stroke="#55d6ad" strokeWidth="1" opacity=".35"/>
                      <text x="153" y="106" fill="#071312" fontSize="8" fontWeight="700">0.91</text><text x="32" y="90" fill="rgba(255,255,255,.42)" fontSize="8">TRACE</text><text x="270" y="90" fill="rgba(255,255,255,.42)" fontSize="8">SEMANTIC</text>
                    </svg>
                    <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#6ee7b7] shadow-[0_0_18px_#55d6ad]" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.2em] text-[#6ee7b7]">02 · VERA</span><span className="rounded-full border border-[#55d6ad]/25 px-2 py-1 font-mono text-[8px] text-[#6ee7b7]">EVALUATE</span></div>
                    <div className="mt-3 font-[Sora] text-[26px] font-extrabold tracking-[-.045em]">Measure the truth.</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Behaviour, semantics and execution evidence.</p>                  </div>
                </motion.div>

                <motion.div className="shyena-product shyena-chakra absolute bottom-[4%] left-1/2 w-[300px] -translate-x-1/2 overflow-hidden rounded-[24px] border border-[#f18a32]/50 bg-[#160b06]/97 shadow-[0_65px_130px_rgba(0,0,0,.82),0_0_80px_rgba(232,117,18,.12)] backdrop-blur-xl sm:w-[370px]"
                  initial={{ x: 0, y: 115, z: -70, rotateY: 0, rotateX: -10, scale: .78, opacity: .42 }}
                  animate={{ x:[0,0,0,0,0,0], y:[115,115,12,12,115,115], z:[-70,-70,350,350,-70,-70], rotateY:[0,0,0,0,0,0], rotateX:[-10,-10,0,0,-10,-10], scale:[.78,.78,1.16,1.16,.78,.78], opacity:[.42,.42,1,1,.42,.42] }}
                  transition={{...sequenceTransition, times:[0,.56,.68,.88,1,1] as const}}
                  whileHover={{ scale: 1.19, opacity: 1 }}
                >
                  <div className="relative h-[205px] overflow-hidden border-b border-white/10 bg-[#100805] sm:h-[245px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(232,117,18,.18),transparent_44%)]" />
                    <div className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[.22em] text-[#ffad69]">CHAKRA / ADVERSARIAL</div>
                    <svg viewBox="0 0 420 210" className="absolute inset-x-4 bottom-0 h-[175px] w-[calc(100%-2rem)]">
                      <g fill="none" stroke="#e87512" opacity=".5"><circle cx="210" cy="112" r="68"/><circle cx="210" cy="112" r="49"/><circle cx="210" cy="112" r="30"/></g>
                      <path d="M210 20 L210 82 M210 142 L210 204 M118 112 L178 112 M242 112 L302 112" stroke="#ffad69" strokeWidth="2"/>
                      <path d="M76 48 L157 92 M344 48 L263 92 M76 176 L157 132 M344 176 L263 132" stroke="#e87512" strokeWidth="2" opacity=".7"/>
                      <path d="M210 72 L250 96 L236 145 L184 145 L170 96 Z" fill="rgba(232,117,18,.13)" stroke="#ffad69" strokeWidth="2"/>
                      <path d="M178 112 L194 112 M226 112 L242 112" stroke="#fff" strokeWidth="3"/>
                      <circle cx="210" cy="112" r="8" fill="#ffad69"/><rect x="68" y="40" width="12" height="12" rx="2" fill="#55d6ad"/><rect x="340" y="40" width="12" height="12" rx="2" fill="#8b96ff"/><rect x="68" y="170" width="12" height="12" rx="2" fill="#8b96ff"/><rect x="340" y="170" width="12" height="12" rx="2" fill="#55d6ad"/>
                    </svg>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.2em] text-[#ffad69]">03 · CHAKRA</span><span className="rounded-full border border-[#e87512]/30 px-2 py-1 font-mono text-[8px] text-[#ffad69]">SECURE</span></div>
                    <div className="mt-3 font-[Sora] text-[28px] font-extrabold tracking-[-.045em]">Break the unsafe path.</div>
                    <p className="mt-2 text-[11px] leading-5 text-white/45">Attack critical paths and expose unsafe behaviour.</p>
                  </div>
                </motion.div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-2 font-mono text-[8px] uppercase tracking-[.22em] text-white/45 shadow-[0_15px_50px_rgba(0,0,0,.45)] backdrop-blur-xl">understand → evaluate → secure</div>
            </motion.div>          </div>

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