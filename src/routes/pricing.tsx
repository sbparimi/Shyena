import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing | Shyena" },
    { name: "description", content: "Paid enterprise pricing for Shyena AI assurance and autonomous quality engineering across web, mobile, API, Oracle Fusion and Salesforce Agentforce." },
  ]}),
  component: PricingPage,
});

const assurancePlans = [
  {
    name: "AI Assurance Pilot",
    price: "€8,000",
    cadence: "one-time",
    body: "Prove one AI system in 6–8 weeks. The pilot fee is fully credited toward an annual Shyena platform subscription.",
    items: [
      "1 AI agent / AI system",
      "CIS system understanding",
      "Vera agent testing & evaluation",
      "Deterministic + semantic + trajectory evaluation",
      "Representative assurance journeys",
      "Failure investigation & evidence",
      "Regression suite + release gate",
      "Executive assurance report",
    ],
  },
  {
    name: "Professional",
    price: "€18,000",
    cadence: "/ year",
    body: "Continuous assurance for production AI systems.",
    items: [
      "Up to 3 AI systems / agents",
      "CIS + Vera core assurance",
      "Chakra security assurance",
      "CI/CD release gates",
      "Dashboards & evidence reporting",
      "Forensic failure analysis",
      "API access & integrations",
      "Standard support",
    ],
  },
  {
    name: "Business",
    price: "€36,000",
    cadence: "/ year",
    body: "Continuous AI assurance across multiple teams and production systems.",
    items: [
      "Up to 10 AI systems / agents",
      "Unlimited projects",
      "Full CIS + Vera + Chakra",
      "Autonomous test generation",
      "Forensic failure agent",
      "Self-improving regression loop",
      "Production assurance monitoring",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "€60K+",
    cadence: "/ year",
    body: "Enterprise-wide AI assurance for complex AI estates and governed delivery.",
    items: [
      "Enterprise-wide AI systems",
      "SSO / RBAC / audit controls",
      "Advanced CI/CD integrations",
      "Private deployment options",
      "Custom evaluators & assurance policies",
      "Dedicated onboarding",
      "SLA & priority support",
      "Custom assurance capacity",
    ],
  },
] as const;

const autonomousPlans = [
  {
    name: "Automation Pilot",
    price: "€6,000",
    cadence: "one-time",
    body: "Turn one critical application into an autonomous regression system in 4–6 weeks.",
    items: [
      "1 application",
      "Web testing",
      "API testing",
      "AI-assisted test discovery",
      "Autonomous journey generation",
      "Playwright automation",
      "Failure analysis",
      "Pilot regression suite",
    ],
  },
  {
    name: "Web + API",
    price: "€12,000",
    cadence: "/ year",
    body: "AI-assisted and autonomous testing for web applications and APIs.",
    items: [
      "Up to 3 applications",
      "Web + API automation",
      "AI-assisted test engineering",
      "Autonomous exploration",
      "Test generation & execution",
      "Failure triage",
      "CI/CD integration",
      "Unlimited users",
    ],
  },
  {
    name: "Web + Mobile + API",
    price: "€24,000",
    cadence: "/ year",
    body: "Full autonomous application testing across browser, mobile and API surfaces.",
    items: [
      "Up to 10 applications",
      "Web + mobile + API",
      "Autonomous test engineering",
      "Coverage-gap discovery",
      "Self-healing automation",
      "Cross-platform regression",
      "Accessibility-ready workflows",
      "Advanced CI/CD integration",
    ],
    popular: true,
  },
  {
    name: "Enterprise Autonomous QA",
    price: "€40K+",
    cadence: "/ year",
    body: "Autonomous quality engineering across an enterprise application estate.",
    items: [
      "Enterprise application estate",
      "Web + mobile + API + services",
      "Oracle Fusion application testing",
      "Salesforce + Agentforce testing",
      "Autonomous exploration at scale",
      "Repository-aware test engineering",
      "Advanced failure forensics",
      "Governed self-healing",
      "Release evidence & quality gates",
      "Dedicated support",
    ],
  },
] as const;

function PlanCard({ plan }: { plan: typeof assurancePlans[number] | typeof autonomousPlans[number] }) {
  return (
    <article className={`relative flex flex-col rounded-2xl border bg-white p-7 lg:p-8 ${plan.popular ? "border-[#ff5a0a] shadow-[0_25px_70px_-45px_rgba(255,90,10,.55)]" : "border-[#e0e3e8]"}`}>
      {plan.popular && <div className="absolute right-5 top-5 rounded-full bg-[#ff5a0a] px-3 py-1 text-[10px] font-bold uppercase tracking-[.08em] text-white">Most popular</div>}
      <div className="max-w-[260px] text-sm font-bold text-[#17213f]">{plan.name}</div>
      <div className="mt-6 flex items-end gap-2">
        <span className="font-[Sora] text-4xl font-extrabold tracking-[-.04em] text-[#17213f]">{plan.price}</span>
        <span className="pb-1 text-sm text-[#69707d]">{plan.cadence}</span>
      </div>
      <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#69707d]">{plan.body}</p>
      <ul className="mt-6 flex-1 space-y-3 border-t border-[#eceef1] pt-6">
        {plan.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-5 text-[#4f5968]">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff0e7] text-[#ff5a0a]"><Check className="h-3 w-3" /></span>
            {item}
          </li>
        ))}
      </ul>
      <Link to="/contact" className={`mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold ${plan.popular ? "bg-[#ff5a0a] text-white hover:bg-[#e94f04]" : "border border-[#d8dce3] bg-white text-[#17213f] hover:border-[#17213f]"}`}>
        {plan.price.includes("+") || plan.name.includes("Pilot") ? "Discuss scope" : "Talk to Shyena"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function PricingPage() {
  return (
    <main className="overflow-x-hidden bg-white text-[#17213f]">
      <section className="border-b border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">Shyena pricing</div>
            <h1 className="mt-4 font-[Sora] text-[clamp(2.7rem,6vw,5.2rem)] font-extrabold leading-[.96] tracking-[-.055em]">One autonomous quality platform. Two ways to buy.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#69707d]">Use Shyena to assure AI agents and to autonomously engineer traditional application testing across web, mobile, API, Oracle Fusion and Salesforce Agentforce. No free tier. No per-seat tax. Start with a defined paid pilot and scale when the value is proven.</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["AI assurance", "Prove agent behaviour, orchestration, security and release integrity."],
              ["Autonomous testing", "Give Shyena a testing goal and let agents explore, engineer, execute and diagnose across enterprise applications."],
              ["One evidence chain", "Connect browser, API, application, logs, traces and business outcomes to release evidence."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-[#e2e5ea] bg-[#fafbfc] p-5">
                <div className="text-sm font-bold text-[#17213f]">{title}</div>
                <p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">01 · AI assurance</div>
            <h2 className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Assure AI systems from first pilot to enterprise estate.</h2>
            <p className="mt-4 text-base leading-7 text-[#69707d]">CIS / Nexus understands the system. Vera evaluates real behaviour. Chakra challenges security. Forensic intelligence turns failures into reproducible regression tests.</p>
          </div>
          <div className="grid gap-4 xl:grid-cols-4">
            {assurancePlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
          </div>
          <div className="mt-6 rounded-xl border border-[#e2e5ea] bg-white p-5 text-sm leading-6 text-[#596273]">
            <strong className="text-[#17213f]">Pilot credit:</strong> the €8,000 AI Assurance Pilot fee is credited in full against the first annual Shyena platform subscription when the customer proceeds within 60 days of pilot completion.
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6e8ed] bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#e87512]">02 · Autonomous testing</div>
            <h2 className="mt-3 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Traditional testing, rebuilt as autonomous quality engineering.</h2>
            <p className="mt-4 text-base leading-7 text-[#69707d]">Web, mobile and API testing remain first-class capabilities. Shyena adds AI-assisted discovery and autonomous test engineering for enterprise platforms including Oracle Fusion and Salesforce Agentforce, so teams define the outcome instead of hand-authoring every test.</p>
          </div>
          <div className="grid gap-4 xl:grid-cols-4">
            {autonomousPlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              ["Web", "Autonomous browser exploration, journey discovery, Playwright engineering, regression and failure analysis."],
              ["Mobile", "AI-assisted mobile journey discovery and autonomous regression across iOS and Android workflows."],
              ["API", "Contract-aware API discovery, functional validation, negative paths, data assertions and service regression."],
              ["Oracle Fusion + Claude", "AI-assisted autonomous testing of Oracle Fusion business flows using Claude for journey discovery, test engineering, execution analysis and failure triage."],
              ["Salesforce Agentforce", "AI-assisted autonomous testing of Salesforce and Agentforce journeys, including agent behaviour, CRM workflows, integrations and regression validation."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-[#e2e5ea] bg-[#fafbfc] p-5">
                <div className="text-sm font-bold text-[#17213f]">{title} testing</div>
                <p className="mt-2 text-sm leading-6 text-[#69707d]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6e8ed] bg-[#17213f] text-white">
        <div className="mx-auto max-w-[1100px] px-5 py-16 text-center sm:px-8 lg:py-20">
          <div className="text-xs font-semibold uppercase tracking-[.16em] text-[#ff8a4c]">The commercial model</div>
          <h2 className="mt-4 font-[Sora] text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">Pay for assurance capacity, not people.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#c9cfdb]">Unlimited users. No per-seat licensing. Platform pricing is based on the systems and assurance scope you need to operate, with high-volume compute and specialist services scoped separately.</p>
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["Included", "Users, projects, test suites, evaluators, dashboards and release evidence."],
              ["Scaled", "AI execution, browser/device infrastructure and high-volume assurance capacity."],
              ["Separate", "Customer cloud/LLM costs and bespoke professional services are scoped explicitly."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-bold">{title}</div>
                <p className="mt-2 text-sm leading-6 text-[#c9cfdb]">{body}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-9 inline-flex h-12 items-center gap-2 rounded-lg bg-[#ff5a0a] px-7 text-sm font-semibold text-white hover:bg-[#e94f04]">Scope a Shyena pilot <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
