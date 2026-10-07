import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Shyena" },
      {
        name: "description",
        content: "Cognigy AI Agent testing and evaluation engagements, from dedicated-engineer pilots to enterprise assurance.",
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
      "A focused engagement to establish the assurance baseline for your Cognigy AI Agent.",
    price: "Scoped",
    priceNote: "per pilot",
    features: [
      "Dedicated Shyena engineer onboarded to the project",
      "Cognigy architecture and journey discovery",
      "Priority business journeys converted into tests",
      "Initial execution, evaluation and findings",
    ],
    cta: "Start a pilot",
    featured: true,
  },
  {
    name: "Continuous",
    kicker: "Ongoing assurance",
    description:
      "Continuous testing as your Cognigy agents, flows, knowledge and business journeys evolve.",
    price: "Scoped",
    priceNote: "per engagement",
    features: [
      "Recurring test generation and execution",
      "Regression coverage for agreed journeys",
      "Deterministic and semantic evaluation",
      "Release evidence and trend reporting",
    ],
    cta: "Discuss continuous testing",
    featured: false,
  },
  {
    name: "Enterprise",
    kicker: "Scaled assurance",
    description:
      "A broader assurance programme for multiple agents, environments, teams and business journeys.",
    price: "Custom",
    priceNote: "per programme",
    features: [
      "Multi-agent and multi-environment coverage",
      "Expanded business-journey test universe",
      "Enterprise reporting and governance",
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
          <p className="font-mono text-xs font-bold uppercase tracking-[.2em] text-[#f18a32]">
            Pricing
          </p>
          <h1 className="mt-4 max-w-4xl font-[Sora] text-4xl font-extrabold leading-[1.02] tracking-[-.045em] sm:text-5xl lg:text-6xl">
            Price the assurance engagement, not a generic AI platform tier.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/65">
            Start with a focused pilot and a dedicated engineer. Expand into continuous or
            enterprise assurance when the testing scope requires it.
          </p>
        </div>
      </section>

      <section aria-labelledby="plans" className="bg-[#07101f] pb-20 text-white lg:pb-28">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={
                  "min-w-0 rounded-xl border p-6 sm:p-7 " +
                  (plan.featured
                    ? "border-[#f18a32] bg-white text-[#17213f]"
                    : "border-white/15 bg-[#101a19] text-white")
                }
              >
                <div className="flex min-h-7 items-center justify-between gap-3">
                  <p
                    className={
                      "font-mono text-[10px] font-bold uppercase tracking-[.18em] " +
                      (plan.featured ? "text-[#e87512]" : "text-[#f18a32]")
                    }
                  >
                    {plan.kicker}
                  </p>
                  {plan.featured && (
                    <span className="rounded-full bg-[#f18a32]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-[#a64e05]">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="mt-3 min-w-0 break-words text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  {plan.name}
                </h2>

                <p
                  className={
                    "mt-4 min-h-[96px] text-sm leading-6 " +
                    (plan.featured ? "text-[#596273]" : "text-white/60")
                  }
                >
                  {plan.description}
                </p>

                <div
                  className={
                    "mt-5 border-t pt-5 " +
                    (plan.featured ? "border-[#e8eaee]" : "border-white/10")
                  }
                >
                  <div className="flex items-end gap-2">
                    <span className="break-words text-3xl font-extrabold tracking-tight sm:text-4xl">
                      {plan.price}
                    </span>
                    <span
                      className={
                        "mb-1 text-xs " +
                        (plan.featured ? "text-[#7a8290]" : "text-white/50")
                      }
                    >
                      {plan.priceNote}
                    </span>
                  </div>
                </div>

                <ul
                  className={
                    "mt-6 min-h-[176px] space-y-3 text-sm leading-5 " +
                    (plan.featured ? "text-[#596273]" : "text-white/65")
                  }
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f18a32]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={
                    "mt-6 flex h-12 items-center justify-center rounded-lg px-4 text-sm font-bold transition-colors " +
                    (plan.featured
                      ? "bg-[#07101f] text-white hover:bg-[#17233f]"
                      : "bg-white text-[#07101f] hover:bg-white/90")
                  }
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-[#f18a32]">
            Pilot first
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Put a dedicated engineer against the agent before scaling the programme.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#667085]">
            The pilot establishes the working model, priority journeys, test coverage and
            evaluation approach. Scope and commercial terms are agreed before onboarding.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex h-12 items-center rounded-lg bg-[#e87512] px-5 text-sm font-bold text-white"
          >
            Book a pilot discussion
          </Link>
        </div>
      </section>
    </div>
  );
}
