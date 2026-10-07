import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Shyena" },
      {
        name: "description",
        content:
          "Start with a dedicated-engineer Cognigy AI Agent pilot, then expand into continuous or enterprise assurance.",
      },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Pilot",
    kicker: "Dedicated engineer",
    description:
      "We work with your team to take one Cognigy AI Agent from discovery to a defensible assurance baseline.",
    price: "Scoped",
    priceNote: "per pilot",
    features: [
      "Dedicated Shyena engineer",
      "Cognigy agent and journey discovery",
      "Priority business journeys converted into executable tests",
      "Automated execution and deterministic + semantic evaluation",
      "Failure analysis, remediation backlog and assurance report",
    ],
    cta: "Start a pilot",
    featured: true,
  },
  {
    name: "Continuous",
    kicker: "Ongoing assurance",
    description:
      "Keep critical journeys under test as your agents, flows, knowledge and business rules change.",
    price: "Scoped",
    priceNote: "per engagement",
    features: [
      "Recurring test generation and execution",
      "Regression coverage for agreed business journeys",
      "Evaluation trends and failure intelligence",
      "Release evidence and agreed quality gates",
      "Continuous expansion of negative and boundary coverage",
    ],
    cta: "Discuss continuous assurance",
    featured: false,
  },
  {
    name: "Enterprise",
    kicker: "Scaled assurance",
    description:
      "Extend independent assurance across multiple agents, environments, teams and business journeys.",
    price: "Custom",
    priceNote: "per programme",
    features: [
      "Multi-agent and multi-environment coverage",
      "Expanded business-journey test universe",
      "Enterprise reporting and governance",
      "Custom evaluation policies and release criteria",
      "Dedicated delivery model defined around your organisation",
    ],
    cta: "Discuss enterprise",
    featured: false,
  },
];

function Pricing() {
  return (
    <div className="bg-white text-[#17213f]">
      <section className="scroll-mt-[68px] bg-[#07101f] text-white">
        <div className="mx-auto max-w-[1080px] px-5 pb-16 pt-20 sm:px-8 sm:pt-24 lg:pb-20 lg:pt-28">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#f18a32]">Engagement model</p>
          <h1 className="mt-4 max-w-4xl font-[Sora] text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Start with an engineer. Scale only when the evidence says you should.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Shyena is sold around the assurance outcome, not a generic AI
            platform seat. Start with one agent and one critical scope.
          </p>
        </div>
      </section>

      <section aria-labelledby="plans" className="bg-[#07101f] pb-20 text-white lg:pb-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#f18a32]">Three ways to engage</p>
            <p className="mt-3 text-sm leading-6 text-white/45">
              Scope, pricing and delivery are agreed around the agent, journeys
              and environments covered.
            </p>
          </div>
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={"min-w-0 rounded-xl border p-6 sm:p-7 " + (plan.featured ? "border-[#f18a32] bg-white text-[#17213f]" : "border-white/15 bg-[#101a19] text-white")}>
                <div className="flex min-h-7 items-start justify-between gap-3">
                  <p className={"font-mono text-[10px] font-bold uppercase tracking-[0.18em] " + (plan.featured ? "text-[#e87512]" : "text-[#f18a32]")}>{plan.kicker}</p>
                  {plan.featured && <span className="shrink-0 rounded-full bg-[#f18a32]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#a64e05]">Recommended</span>}
                </div>
                <h2 className="mt-3 min-w-0 break-words text-[clamp(1.7rem,2.6vw,2.2rem)] font-extrabold leading-[1.05] tracking-tight">{plan.name}</h2>
                <p className={"mt-4 min-h-[120px] text-sm leading-6 " + (plan.featured ? "text-[#596273]" : "text-white/60")}>{plan.description}</p>
                <div className={"mt-5 border-t pt-5 " + (plan.featured ? "border-[#e8eaee]" : "border-white/10")}>
                  <div className="flex items-end gap-2">
                    <span className="break-words text-3xl font-extrabold tracking-tight sm:text-4xl">{plan.price}</span>
                    <span className={"mb-1 text-xs " + (plan.featured ? "text-[#7a8290]" : "text-white/50")}>{plan.priceNote}</span>
                  </div>
                </div>
                <ul className={"mt-6 min-h-[220px] space-y-3 text-sm leading-5 " + (plan.featured ? "text-[#596273]" : "text-white/65")}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f18a32]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={"mt-6 flex h-12 items-center justify-center rounded-lg px-4 text-sm font-bold transition-colors " + (plan.featured ? "bg-[#07101f] text-white hover:bg-[#17233f]" : "bg-white text-[#07101f] hover:bg-white/90")}>
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">Free first step</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Start with an agent health check.</h2>
              <p className="mt-4 text-base leading-7 text-[#667085]">
                Bring one Cognigy AI Agent and identify the journeys and risks
                worth testing before committing to a pilot.
              </p>
              <Link to="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#07101f] px-5 text-sm font-bold text-white">
                Request the health check
              </Link>
            </div>
            <div className="rounded-2xl border border-[#e2e5ea] bg-white p-6 sm:p-7">
              <div className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#f18a32]">Pilot outcome</div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {["Critical journeys identified","Executable test scope defined","Failures reproduced with evidence","Prioritized remediation backlog","Evaluation approach established","Release assurance report"].map((item) => (
                  <div key={item} className="rounded-xl border border-[#e8eaee] bg-[#fafbfc] p-4 text-sm font-semibold text-[#344054]">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f18a32]">Pilot first</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">Prove the assurance model on one critical agent before scaling it.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#667085]">
            The pilot establishes the working model, priority journeys, test
            coverage and evaluation approach. Scope and commercial terms are
            agreed before onboarding.
          </p>
          <Link to="/contact" className="mt-7 inline-flex h-12 items-center gap-2 rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white">
            Book a pilot discussion <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
