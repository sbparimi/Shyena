import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shyena | Independent testing and evaluation for Cognigy AI Agents" },
      {
        name: "description",
        content:
          "Give Shyena your Cognigy AI Agent. Map critical journeys, test real conversations, evaluate behaviour and turn failures into release evidence.",
      },
    ],
  }),
  component: Home,
});

const capabilities = [
  ["01", "Understand your agent", "Map Flows, AI Agents, intents, tools, handovers, business rules and critical decision paths."],
  ["02", "Test every critical journey", "Generate goal-driven scenarios and execute realistic conversations across positive, negative and boundary paths."],
  ["03", "Explain every failure", "Connect the conversation, assertions, tool activity and evaluation evidence so teams can reproduce and fix the problem."],
];

const pilotSteps = [
  "Cognigy agent and journey discovery",
  "Priority business journeys converted into executable tests",
  "Automated execution and deterministic + semantic evaluation",
  "Failure analysis and prioritized remediation backlog",
  "Release-ready assurance report",
];

function Home() {
  return (
    <div className="bg-white text-[#17213f]">
      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-6xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#f18a32]">
              Independent Cognigy AI Agent assurance
            </p>
            <h1 className="mt-6 max-w-6xl font-[Sora] text-[clamp(3rem,7vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.065em]">
              Give us your agent.
              <br />
              We show you where it breaks.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65 sm:text-xl">
              Shyena maps your Cognigy agent, generates meaningful journeys,
              executes real conversations, evaluates behaviour and preserves the
              evidence behind every finding.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-[#07101f]">
                Request a free agent health check <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/pricing" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white">
                See the pilot model <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e2e5ea] bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map(([number, title, body]) => (
              <article key={number} className="rounded-2xl border border-[#dfe3e8] bg-white p-7">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#f18a32]">{number}</p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#596273]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">From agent to evidence</p>
              <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-tight sm:text-5xl">Testing is not the deliverable. The decision is.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#596273]">
                The output is not another test dashboard. It is a defensible view
                of what the agent can do, where it fails, why it fails and whether
                the agreed release criteria are satisfied.
              </p>
            </div>
            <div className="grid gap-3">
              {["Agent and journey understanding","Goal-driven test generation","Real conversation execution","Deterministic and semantic evaluation","Tool and orchestration evidence","Boundary and negative-path testing","Failure reproduction and diagnosis","Regression coverage and release evidence"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e2e5ea] bg-[#fafbfc] p-4 text-sm font-semibold">
                  <Check className="h-5 w-5 shrink-0 text-[#f18a32]" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">
                <ShieldCheck className="h-4 w-4" />Start with a pilot
              </div>
              <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-tight sm:text-5xl">Put a dedicated engineer against one critical agent.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                Establish the working model on a focused scope before expanding
                into continuous or enterprise assurance.
              </p>
              <Link to="/pricing" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#f18a32] px-5 text-sm font-bold text-[#07101f]">
                See pilot scope <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">Pilot delivery</div>
              <div className="mt-5 space-y-3">
                {pilotSteps.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
                    <span className="font-mono text-xs font-bold text-[#f18a32]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-semibold text-white/75">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">Independent by design</p>
          <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-tight sm:text-5xl">Works alongside the tools used to build and operate your agent.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#596273]">
            Shyena is an independent testing and evaluation layer. It does not
            replace Cognigy or the systems your teams already use to develop and
            operate the agent.
          </p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {["Independent evidence","Business-journey coverage","Release decision support"].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl border border-[#e2e5ea] p-4 text-sm font-semibold">
                <Check className="h-5 w-5 shrink-0 text-[#f18a32]" />{item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
