import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Network,
  Play,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const assuranceNeeds = [
  {
    icon: Target,
    title: "Customer journeys",
    text: "Prove that critical customer goals are actually completed across realistic conversations.",
    href: "/vera",
  },
  {
    icon: Workflow,
    title: "Agent behaviour",
    text: "See whether the agent followed the right path, preserved state and used the right tools.",
    href: "/nexus",
  },
  {
    icon: Gauge,
    title: "Execution quality",
    text: "Combine deterministic, semantic and execution evidence into one view of agent performance.",
    href: "/vera",
  },
  {
    icon: ShieldCheck,
    title: "Security boundaries",
    text: "Find unsafe actions, trust-boundary failures and attack paths before production exposes them.",
    href: "/chakra",
  },
];

const products = [
  {
    name: "NEXUS",
    stage: "UNDERSTAND",
    title: "Know how your agent works.",
    description: "Map the real agent architecture, journeys, branches, conditions, tools and orchestration paths.",
    href: "/nexus",
    icon: Network,
  },
  {
    name: "VERA",
    stage: "TEST + EVALUATE",
    title: "Prove how your agent behaves.",
    description: "Run realistic goal-driven conversations and evaluate behaviour, orchestration and execution together.",
    href: "/vera",
    icon: Gauge,
  },
  {
    name: "CHAKRA",
    stage: "SECURE",
    title: "Prove what your agent can safely do.",
    description: "Test security boundaries and carry verified findings into the same release decision.",
    href: "/chakra",
    icon: ShieldCheck,
  },
];

const proofPoints = [
  ["01", "System-derived", "Start from the agent you actually operate, not a disconnected list of prompts."],
  ["02", "Conversation-native", "Validate goals, state, handovers, tools and outcomes across real multi-turn journeys."],
  ["03", "Release-focused", "Turn runtime evidence into a clear, defensible decision about production readiness."],
];

function AssuranceVideo() {
  return (
    <div className="relative border border-slate-300 bg-[#080711]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0a1c] px-5 py-4 text-xs text-white/60">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          AI agent assurance
        </span>
        <span className="hidden font-mono tracking-wide text-white/45 sm:block">NEXUS · VERA · CHAKRA</span>
      </div>
      <div className="relative aspect-video w-full bg-[#080711]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-video-poster.png"
          aria-label="Shyena AI agent assurance workflow"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute left-5 top-5 border border-white/15 bg-black/55 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/65">
          SHYENA · AI AGENT ASSURANCE
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;
  return (
    <Link
      to={product.href}
      className="group relative flex min-h-[320px] flex-col border border-slate-300 bg-white p-7 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-slate-950 hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb703] focus-visible:ring-offset-4 sm:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#ffb703] transition-transform duration-300 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-6">
        <div className="font-mono text-sm tracking-[0.18em] text-slate-400">{product.name}</div>
        <div className="flex h-10 w-10 items-center justify-center border border-slate-300 bg-white text-slate-700 transition-colors duration-200 group-hover:border-[#ffb703] group-hover:bg-[#ffb703] group-hover:text-slate-950">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{product.stage}</div>
      <h3 className="mt-4 max-w-md font-[Sora] text-[clamp(1.75rem,2.4vw,2.25rem)] font-extrabold leading-[1.06] tracking-[-0.04em] text-slate-950">
        {product.title}
      </h3>
      <p className="mt-4 max-w-md text-[15px] leading-7 text-slate-600">{product.description}</p>
      <span className="mt-auto inline-flex h-11 w-fit items-center justify-center gap-3 border border-[#ffb703] bg-[#ffb703] px-5 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors duration-200 group-hover:bg-[#f5a900]">
        Explore {product.name}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

function EvidenceCard() {
  return (
    <div className="border border-white/15 bg-white/[0.035] p-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <div className="text-[10px] font-semibold tracking-[0.2em] text-white/35">RELEASE EVIDENCE</div>
          <div className="mt-2 text-lg font-semibold text-white">Customer Journey</div>
        </div>
        <span className="border border-red-400/25 bg-red-400/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-red-300">BLOCKED</span>
      </div>
      <div className="grid gap-3 py-5 sm:grid-cols-2">
        <div className="border border-white/10 bg-white/[0.035] p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Execution</div>
          <div className="mt-2 text-xl font-semibold text-white">17 / 17</div>
          <div className="mt-1 text-xs text-white/45">turns completed</div>
        </div>
        <div className="border border-white/10 bg-white/[0.035] p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">Evaluation</div>
          <div className="mt-2 text-xl font-semibold text-white">FAIL</div>
          <div className="mt-1 text-xs text-white/45">orchestration mismatch</div>
        </div>
      </div>
      <div className="border border-orange-400/20 bg-orange-400/[0.06] p-5">
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-200/70">Finding</div>
        <div className="mt-1 font-medium text-white">Wrong orchestration branch</div>
        <div className="mt-2 text-xs text-white/45">Runtime evidence identifies the failed path.</div>
      </div>
      <div className="mt-4 flex items-center justify-between border border-white/10 bg-white/[0.035] px-5 py-4">
        <span className="text-sm text-white/45">Release decision</span>
        <span className="text-sm font-semibold text-red-300">Gate blocked</span>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
          <div className="flex flex-col items-start">
            <div className="mb-6 border-l-4 border-[#ffb703] pl-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
              Enterprise AI agent assurance
            </div>
            <h1 className="max-w-3xl font-[Sora] text-[clamp(2.75rem,4.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950">
              AI agents are moving into production.
              <br />
              <span className="text-slate-500">Prove they are ready.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-[19px]">
              Shyena gives enterprise teams one assurance platform to understand, test and secure AI agents before they become business risk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase tracking-[0.01em] text-slate-950 transition-colors hover:bg-[#f5a900]"
              >
                Assess My AI Agent <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center gap-2 border border-slate-400 bg-white px-7 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"
              >
                <Play className="h-4 w-4" /> See how it works
              </a>
            </div>
            <div className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Conversational AI · Agentic workflows · Voice · RAG · Tools · Security
            </div>
          </div>
          <AssuranceVideo />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-8 border-b border-slate-300 pb-9 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">Start with the problem</div>
              <h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">
                What do you need to prove about your AI agent?
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">
              Choose the assurance outcome that matters most. Shyena connects each one to the same evidence-backed release model.
            </p>
          </div>
          <div className="mt-9 grid gap-px border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">
            {assuranceNeeds.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group flex min-h-[240px] flex-col bg-white p-7 transition-colors hover:bg-slate-50 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                    <Icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-slate-950" />
                  </div>
                  <h3 className="mt-10 font-[Sora] text-[1.45rem] font-extrabold leading-tight tracking-[-0.03em] text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-extrabold uppercase tracking-[0.04em] text-slate-950">
                    Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#0b0920] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">One connected platform</div>
              <h2 className="mt-4 max-w-4xl font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
                Understand. Test. Secure.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/60">
              Three specialised capabilities. One assurance chain. One release decision.
            </p>
          </div>
          <div className="mt-9 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="bg-[#0b0920]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#a87900]">How Shyena works</div>
              <h2 className="mt-4 max-w-xl font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-slate-950">
                From agent behaviour to release confidence.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Shyena follows the agent through the assurance lifecycle, preserving the evidence needed to understand and act on the result.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-3 border border-[#ffb703] bg-[#ffb703] px-6 py-4 text-sm font-extrabold uppercase text-slate-950 hover:bg-[#f5a900]">
                Assess my AI agent <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid border-t border-slate-300 sm:grid-cols-2">
              {[
                ["01", "Understand", "Map the system, journeys, paths and dependencies."],
                ["02", "Test", "Drive realistic multi-turn goals through the agent."],
                ["03", "Evaluate", "Combine deterministic, semantic and execution evidence."],
                ["04", "Secure", "Probe risky actions and trust boundaries."],
                ["05", "Prove", "Trace findings back to the journey and component."],
                ["06", "Decide", "Turn evidence into a release-ready verdict."],
              ].map(([number, title, text]) => (
                <div key={number} className="border-b border-slate-300 px-0 py-7 sm:px-7 sm:py-8 odd:border-r">
                  <div className="font-mono text-xs tracking-[0.18em] text-slate-400">{number}</div>
                  <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid border-t border-slate-300 md:grid-cols-3">
            {proofPoints.map(([number, title, text]) => (
              <div key={number} className="border-b border-slate-300 py-8 md:border-b-0 md:border-r md:px-8 md:py-9 first:md:pl-0 last:md:border-r-0">
                <div className="font-mono text-xs text-slate-400">{number}</div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0920] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-20">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#ffb703]">Evidence-backed release</div>
            <h2 className="mt-4 max-w-2xl font-[Sora] text-[clamp(2.4rem,4vw,4rem)] font-extrabold leading-[0.98] tracking-[-0.05em]">
              A score tells you what happened. Evidence tells you why.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Keep the journey, execution trace, evaluation signals, security findings and release impact together so engineering teams can act on the result.
            </p>
            <div className="mt-7 space-y-3">
              {["Customer goal and conversation", "Turn-level execution evidence", "Deterministic + semantic evaluation", "Security findings and release impact"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#ffb703]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <EvidenceCard />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 text-center sm:px-8 lg:py-24">
          <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center border border-[#ffb703] bg-[#ffb703] text-slate-950">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h2 className="font-[Sora] text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950">
            Prove your AI agent is ready.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Bring one real agent and one critical journey. See how Shyena turns agent behaviour into evidence and a release decision.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 border border-[#ffb703] bg-[#ffb703] px-7 text-sm font-extrabold uppercase text-slate-950 hover:bg-[#f5a900]">
              Talk to Shyena <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex h-12 items-center justify-center gap-2 border border-slate-400 bg-white px-7 text-sm font-semibold text-slate-950 hover:border-slate-950">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const Route = createFileRoute("/")({ component: Index });
