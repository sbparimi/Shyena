import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play, ShieldCheck } from "lucide-react";

const products = [
  {
    name: "Nexus",
    title: "Discover & plan",
    body: "Build a system-aware map of AI models, data pipelines, applications, dependencies, workflows and risk. Nexus turns product context into an executable assurance plan.",
    to: "/nexus",
    items: [
      "Journey discovery",
      "Dependency mapping",
      "Impact analysis",
      "Autonomous test planning",
    ],
  },
  {
    name: "Vera",
    title: "Evaluate & verify",
    body: "Evaluate model outputs, predictions, generated content and end-to-end workflows against expected outcomes—not just whether a response looked plausible.",
    to: "/vera",
    items: [
      "Model and output evaluation",
      "Deterministic checks",
      "Semantic evaluation",
      "Workflow and outcome validation",
    ],
  },
  {
    name: "Chakra",
    title: "Attack & break",
    body: "Probe AI systems for adversarial inputs, model weaknesses, data exposure, unsafe actions and trust-boundary failures before they reach users.",
    to: "/chakra",
    items: [
      "Adversarial scenario generation",
      "Model and input robustness",
      "Data exposure checks",
      "AI security regression",
    ],
  },
  {
    name: "Govern",
    title: "Prove & release",
    body: "Turn every test run into traceable engineering evidence. Governance is the downstream evidence layer — not the reason to start testing.",
    to: "/govern",
    items: ["Release verdicts", "Evidence chain", "Requirement traceability", "Re-run history"],
  },
];

const lifecycle = [
  [
    "01",
    "Plan & design",
    "Translate product intent into architecture context, constraints, acceptance criteria and risk.",
  ],
  [
    "02",
    "Code & integrate",
    "Bring coding agents, repository changes, contracts and engineering tools into one traceable workflow.",
  ],
  [
    "03",
    "Test & evaluate",
    "Select impacted checks, execute browser and API journeys, and verify intended outcomes.",
  ],
  [
    "04",
    "Secure",
    "Challenge dependencies, permissions, policies, agent tools and trust boundaries before release.",
  ],
  [
    "05",
    "Release",
    "Assemble evidence, apply policy gates and keep required human approvals explicit.",
  ],
  [
    "06",
    "Operate & learn",
    "Feed incidents, telemetry and regressions back into the next engineering cycle.",
  ],
];

const surfaces = [
  "Predictive ML",
  "Generative AI",
  "Data pipelines",
  "Computer vision",
  "RAG",
  "Document AI",
  "APIs",
  "AI agents",
  "CI/CD",
  "Production monitoring",
];

export function QualityIntelligencePage() {
  return (
    <main className="bg-white text-[#17213f]">
      <section className="bg-[#07101f] text-white">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[.22em] text-[#f18a32]">
              THE AGENTIC SDLC · PLAN TO PRODUCTION
            </div>
            <h1 className="mt-5 font-[Sora] text-[clamp(3.2rem,7vw,7rem)] font-extrabold leading-[.86] tracking-[-.075em]">
              One engineering
              <br />
              <span className="text-[#f18a32]">lifecycle.</span>
              <br />
              Governed by evidence.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Shyena connects coding agents, test engineering, security checks and release controls
              into one governed workflow—from planning and implementation through production
              feedback. Move beyond isolated agents and bots without losing traceability, policy
              boundaries or accountability for the release decision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white"
              >
                See it on your system <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sample-report"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-bold text-white/85"
              >
                See a sample run <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {surfaces.map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.12em] text-white/45"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1729] shadow-[0_30px_90px_-45px_rgba(0,0,0,.9)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-white/45">
                Illustrative workflow
              </span>
              <span className="flex items-center gap-2 text-[9px] font-bold text-[#f18a32]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f18a32]" />
                SAMPLE OUTPUT
              </span>
            </div>
            <div className="space-y-3 p-5 font-mono text-[11px] leading-5 sm:p-7">
              <div className="text-white/35">$ shyena sdlc inspect --change &lt;id&gt;</div>
              {[
                ["--:--", "plan", "Intent and acceptance criteria resolved"],
                ["--:--", "build", "Coding-agent change linked to repository diff"],
                ["--:--", "test", "Impacted journeys selected and verified"],
                ["--:--", "secure", "Policy and trust-boundary checks evaluated"],
                ["--:--", "release", "Evidence assembled; release policy applied"],
                ["--:--", "learn", "Production signals feed the next cycle"],
              ].map(([t, p, b], i) => (
                <div key={p} className="grid grid-cols-[42px_64px_1fr] gap-2">
                  <span className="text-white/25">{t}</span>
                  <span className={i >= 3 ? "text-[#f18a32]" : "text-[#8fa1ff]"}>{p}</span>
                  <span className={i >= 3 ? "text-white" : "text-white/60"}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e6e8ed] bg-[#fff8f2]">
        <div className="mx-auto max-w-[1280px] px-5 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[.12em] text-[#a55410]">
          PLAN · CODE · TEST · SECURE · RELEASE · OPERATE
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-bold text-[#e87512]">The autonomous engineering loop</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">
              Plan. Build. Verify. Ship. Learn.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#69707d]">
              Connect the work that coding agents do to the checks that prove it is safe to ship.
              Teams define outcomes, constraints and release policy; agents and existing tools can
              carry out bounded work while evidence and approval requirements remain explicit.
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lifecycle.map(([n, t, b]) => (
              <article
                key={n}
                className="rounded-2xl border border-[#e1e4e9] bg-[#fafbfc] p-6 sm:p-7"
              >
                <span className="font-mono text-[10px] font-bold text-[#e87512]">{n}</span>
                <h3 className="mt-6 text-xl font-extrabold">{t}</h3>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6e8ed] bg-[#fafbfc]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-bold text-[#e87512]">The Shyena product suite</div>
            <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-5xl">
              One Agentic SDLC. Four connected capabilities.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#69707d]">
              Nexus, Vera, Chakra and Govern connect system understanding, verification, security
              and release evidence. They are the assurance foundation around the wider engineering
              lifecycle—not four disconnected testing utilities.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {products.map((p, i) => (
              <article
                key={p.name}
                className="rounded-2xl border border-[#e1e4e9] bg-white p-7 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-[#e87512]">0{i + 1}</span>
                  <span className="rounded-full border border-[#dfe3e8] px-3 py-1 text-[10px] font-bold">
                    {p.name}
                  </span>
                </div>
                <h3 className="mt-6 font-[Sora] text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#69707d]">{p.body}</p>
                <ul className="mt-5 space-y-2 border-t border-[#e8eaee] pt-5">
                  {p.items.map((x) => (
                    <li key={x} className="flex gap-2 text-sm text-[#596273]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#e87512]" />
                      {x}
                    </li>
                  ))}
                </ul>
                <Link to={p.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold">
                  Explore {p.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="text-sm font-bold text-[#e87512]">
                What autonomous engineering needs
              </div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
                More than coding agents.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                [
                  "Impact-aware testing",
                  "Select the journeys affected by a code, configuration, model or prompt change.",
                ],
                [
                  "Agentic exploration",
                  "Generate meaningful paths, edge cases and adversarial scenarios from system context.",
                ],
                [
                  "Self-maintaining coverage",
                  "When a journey changes, detect the break and propose or apply the smallest safe repair.",
                ],
                [
                  "Failure reproduction",
                  "Replay failures with traces, inputs and state so engineers can move from symptom to cause.",
                ],
                [
                  "Production-to-regression",
                  "Turn real anomalies and user journeys into durable regression coverage.",
                ],
                [
                  "Release intelligence",
                  "Connect test evidence to a release verdict instead of a dashboard full of disconnected green checks.",
                ],
              ].map(([t, b]) => (
                <article key={t} className="rounded-xl border border-[#e1e4e9] bg-[#fafbfc] p-6">
                  <h3 className="text-base font-extrabold">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#69707d]">{b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6e8ed] bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <div>
              <div className="text-sm font-bold text-[#f18a32]">
                Agent assurance within the SDLC
              </div>
              <h2 className="mt-3 font-[Sora] text-4xl font-extrabold tracking-[-.045em] sm:text-5xl">
                Verify the agent's work and behaviour.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Goal completion",
                "Multi-turn behaviour",
                "Tool selection & arguments",
                "RAG grounding",
                "Guardrail enforcement",
                "Model-version regression",
                "Trajectory integrity",
                "Security & adversarial behaviour",
              ].map((x) => (
                <div
                  key={x}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70"
                >
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#f18a32]" />
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 lg:py-24">
          <div className="text-sm font-bold text-[#e87512]">Start with one system</div>
          <h2 className="mt-4 font-[Sora] text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">
            Connect one engineering workflow.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#69707d]">
            Start with one repository, one delivery workflow or one AI system. Map the lifecycle,
            identify where autonomous work needs verification, and connect the evidence required for
            a defensible release decision.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-6 text-sm font-bold text-white"
          >
            Map your Agentic SDLC <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
