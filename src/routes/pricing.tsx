import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleHelp, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

const RATE = 0.05;

type Plan = {
  name: string;
  price: string;
  cadence: string;
  audience: string;
  capacity: string;
  description: string;
  featured?: boolean;
  cta: string;
  href: "/contact";
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Pilot",
    price: "€7,500",
    cadence: "30–60 days",
    audience: "Establish your assurance baseline",
    capacity: "5,000 assurance operations",
    description: "A focused proof-of-value engagement to establish the baseline, run representative assurance journeys and prove the evidence chain.",
    cta: "Start a pilot",
    href: "/contact",
    features: [
      "Nexus, Vera and Chakra",
      "Core dashboards and release evidence",
      "1 environment",
      "Limited team access",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "€30,000",
    cadence: "per year",
    audience: "Production assurance at engineering scale",
    capacity: "100,000 assurance operations / year",
    description: "The default production plan for teams that need repeatable testing, evaluation, security assurance and release evidence.",
    cta: "Choose Professional",
    href: "/contact",
    features: [
      "Nexus, Vera and Chakra",
      "Advanced dashboards and reporting",
      "Release-gate reporting",
      "Multiple environments",
      "API + CI/CD integration",
      "Up to 10 users",
      "Standard support",
    ],
  },
  {
    name: "Enterprise",
    price: "€60,000",
    cadence: "per year",
    audience: "High-volume enterprise assurance",
    capacity: "500,000 assurance operations / year",
    description: "For organizations running assurance at significant volume with stronger governance, integration and operational requirements.",
    featured: true,
    cta: "Choose Enterprise",
    href: "/contact",
    features: [
      "Everything in Professional",
      "SSO + RBAC",
      "Advanced API and CI/CD",
      "Advanced governance and reporting",
      "Up to 50 users",
      "Priority support",
      "Higher assurance capacity",
    ],
  },
  {
    name: "Strategic",
    price: "€100K–€150K+",
    cadence: "per year",
    audience: "Large-scale assurance programs",
    capacity: "Custom assurance capacity",
    description: "For organizations requiring tailored capacity, deployment, integrations, governance, managed assurance or dedicated support.",
    cta: "Talk to sales",
    href: "/contact",
    features: [
      "Everything in Enterprise",
      "Custom assurance capacity",
      "Custom deployment and integrations",
      "Advanced + custom reporting",
      "Unlimited users",
      "Dedicated support",
      "Managed assurance options",
    ],
  },
];

const COMPARISON = [
  ["Included assurance operations / year", "5,000*", "100,000", "500,000", "Custom"],
  ["Nexus — system understanding", "Included", "Included", "Included", "Included"],
  ["Vera — testing & evaluation", "Included", "Included", "Included", "Included"],
  ["Chakra — security assurance", "Included", "Included", "Included", "Included"],
  ["Dashboards & reporting", "Core", "Advanced", "Advanced", "Advanced + custom"],
  ["Release-gate evidence", "Core", "Advanced", "Advanced", "Advanced + custom"],
  ["SSO / RBAC", "—", "—", "Included", "Included"],
  ["API / integrations", "—", "Included", "Advanced", "Advanced + custom"],
  ["CI/CD integration", "—", "Included", "Advanced", "Advanced + custom"],
  ["Environments", "1", "Multiple", "Multiple", "Custom"],
  ["Users", "Limited", "Up to 10", "Up to 50", "Unlimited"],
  ["Support", "Email", "Standard", "Priority", "Dedicated"],
];

const FAQS = [
  ["What is an assurance operation?", "An assurance operation is one metered unit of Shyena activity: a generated CIS test journey, a Vera AI evaluation interaction, or a Chakra security interaction. The units are tracked independently."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. They are capabilities within one Shyena assurance platform. Customers do not buy three separate module licences."],
  ["What is the pricing model?", "Shyena is priced primarily around contracted assurance capacity. Each plan includes a defined number of assurance operations, with a transparent overage rate when additional capacity is required."],
  ["Are there per-user or per-agent licence fees?", "No. Shyena does not use per-user or per-agent licensing as the primary commercial model. Access and governance capabilities are included according to plan."],
  ["What happens when we exceed our included capacity?", "Additional assurance operations are billed at the public rate of €0.05 per unit. Enterprise customers can negotiate committed volume and commercial terms."],
  ["What is included in the pilot?", "The pilot includes 5,000 assurance operations and the core Nexus, Vera and Chakra capabilities needed to establish a working assurance baseline."],
  ["Who pays for cloud infrastructure and model/API consumption?", "Customer infrastructure, hosting, monitoring and third-party LLM/API consumption are separate from the Shyena software subscription unless explicitly included in a custom commercial agreement."],
  ["Can professional services be added?", "Yes. Implementation, training, custom engineering, managed security assurance and ongoing managed programs are separately scoped."],
];

function formatEuro(value: number) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function UsageCalculator() {
  const [operations, setOperations] = useState("10000");
  const estimate = useMemo(() => Number(operations || 0) * RATE, [operations]);

  const update = (next: string) => {
    if (next === "" || /^\d+$/.test(next)) setOperations(next.replace(/^0+(?=\d)/, ""));
  };

  return (
    <section id="usage-calculator" className="border-y border-slate-200 bg-[#f5f6f7]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">03 / Assurance capacity</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-5xl">Pay for assurance capacity, not licence complexity.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Choose the annual assurance capacity that matches your engineering and release activity. The same Shyena platform is available across every plan.</p>
            <div className="mt-8 space-y-4 border-t border-slate-300 pt-6 text-sm leading-6 text-slate-600">
              <p><span className="font-semibold text-slate-950">One commercial unit:</span> assurance operations.</p>
              <p><span className="font-semibold text-slate-950">One public overage rate:</span> €0.05 per additional operation.</p>
              <p><span className="font-semibold text-slate-950">No per-user or per-agent licensing:</span> capacity is the pricing driver.</p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] sm:p-9 lg:p-10">
            <div>
              <label htmlFor="operations" className="text-sm font-semibold text-slate-950">Additional assurance operations</label>
              <div className="mt-3 flex items-center border-b-2 border-slate-900">
                <input id="operations" value={operations} inputMode="numeric" aria-label="Additional assurance operations" onChange={(event) => update(event.target.value)} onBlur={() => operations === "" && setOperations("0")} className="w-full bg-transparent py-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 outline-none placeholder:text-slate-300" />
                <span className="pb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">operations</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">€0.05 per additional operation · whole numbers only</p>

            <div className="mt-9 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Estimated additional usage</p>
              <p className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">{formatEuro(estimate)}</p>
            </div>
            <div className="mt-8 flex flex-col gap-5 border-t-2 border-slate-950 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-sm leading-6 text-slate-600">This calculator estimates usage beyond a contracted plan allowance. VAT and separately scoped services are excluded.</p>
              <Button asChild size="lg" className="rounded-none bg-[#ffb703] px-6 text-slate-950 hover:bg-[#f5a900]"><Link to="/contact">Discuss capacity <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className={`relative flex h-full flex-col border p-7 lg:p-8 ${plan.featured ? "border-slate-950 bg-slate-950 text-white shadow-[0_30px_80px_-50px_rgba(15,23,42,0.8)]" : "border-slate-300 bg-white"}`}>
      {plan.featured && <span className="absolute right-6 top-6 bg-[#ffb703] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950">Recommended</span>}
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.name}</p>
      <p className={`mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.price}</p>
      <p className={`mt-2 text-sm font-medium ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.cadence}</p>
      <div className={`mt-8 border-y py-5 ${plan.featured ? "border-slate-700" : "border-slate-200"}`}>
        <p className={`text-sm font-semibold ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.audience}</p>
        <p className={`mt-2 text-sm font-semibold ${plan.featured ? "text-[#ffb703]" : "text-orange-700"}`}>{plan.capacity}</p>
      </div>
      <p className={`mt-6 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
      <div className="mt-7 space-y-3">
        {plan.features.map((feature) => <div key={feature} className="flex gap-3 text-sm leading-6"><Check className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? "text-[#ffb703]" : "text-orange-700"}`} /><span className={plan.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span></div>)}
      </div>
      <div className="mt-auto pt-9"><Button asChild size="lg" className={`w-full rounded-none ${plan.featured ? "bg-[#ffb703] text-slate-950 hover:bg-[#f5a900]" : "bg-slate-950 text-white hover:bg-slate-800"}`}><Link to={plan.href}>{plan.cta} <ArrowRight className="h-4 w-4" /></Link></Button></div>
    </article>
  );
}

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | AI Assurance Platform" },
      { name: "description", content: "Transparent enterprise pricing for AI assurance. Choose the assurance capacity you need, with no per-user or per-agent licensing and €0.05 transparent overage." },
      { name: "keywords", content: "AI assurance pricing, AI agent testing pricing, enterprise AI evaluation pricing, AI security testing pricing, assurance platform pricing" },
      { property: "og:title", content: "Shyena Pricing | AI Assurance Platform" },
      { property: "og:description", content: "Choose assurance capacity without per-user or per-agent licensing." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#edf6ff]">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-violet-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-100/50 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-20">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">01 / Pricing</p><h1 className="mt-6 max-w-5xl font-[Sora] text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[clamp(3.5rem,5.5vw,5.5rem)]">Assurance pricing that scales with the work.</h1></div>
            <div className="max-w-xl border-t border-slate-300 pt-6 lg:mb-2"><p className="text-xl leading-8 text-slate-700">One Shyena platform. One commercial foundation. Choose the assurance capacity you need and scale it as your testing, evaluation and security activity grows.</p><div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500"><span>No per-user fees</span><span>No per-agent fees</span><span>€0.05 overage</span></div></div>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {[["Assurance capacity", "Primary pricing unit", "Contracted capacity for testing, evaluation and security activity"], ["One platform", "Included across plans", "Nexus, Vera and Chakra are capabilities within the same assurance platform"], ["Additional usage", "€0.05 / operation", "A predictable expansion path when contracted capacity is exceeded"]].map(([title, label, text]) => <div key={title} className="border border-slate-300 bg-white px-7 py-8 lg:px-8 lg:py-9"><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p><p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</p><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
          </div>

          <div className="mt-8 flex items-start gap-3 border-l-2 border-orange-600 pl-4 text-sm leading-6 text-slate-600"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-orange-700" /><span><strong className="text-slate-950">The platform does not meter ownership by system count.</strong> Pricing is driven by contracted assurance capacity and the activity consumed.</span></div>
        </div>
      </section>

      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="mb-12 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">02 / Plans</p><h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Choose the assurance capacity that fits your operating model.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Every plan includes the same core Shyena assurance platform. The commercial difference is capacity, governance, integration depth and support.</p></div><div className="grid gap-5 lg:grid-cols-4">{PLANS.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div><p className="mt-5 text-xs leading-5 text-slate-500">* Pilot assurance capacity is contracted for the pilot period; annual plan allowances are stated per year.</p></div></section>

      <section className="border-y border-slate-200 bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ffb703]">Platform boundary</p><h2 className="mt-5 text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">One subscription. Three assurance capabilities.</h2></div><div className="grid gap-5 sm:grid-cols-3">{[["Nexus", "Understand", "System logic, journeys, decisions and orchestration."], ["Vera", "Evaluate", "Real journeys, semantic quality, deterministic checks and integrity."], ["Chakra", "Defend", "Adversarial testing, security boundaries and release impact."]].map(([name, verb, text]) => <div key={name} className="border border-slate-700 p-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{name}</p><p className="mt-5 text-lg font-semibold">{verb}</p><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div></div></section>

      <UsageCalculator />

      <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="mb-10 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">04 / Compare</p><h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Compare capacity and platform access.</h2></div><div className="overflow-x-auto border border-slate-300"><table className="w-full min-w-[1050px] border-collapse text-left text-sm"><thead><tr className="bg-slate-950 text-white"><th className="w-[30%] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em]">Capability</th>{PLANS.map((plan) => <th key={plan.name} className="px-5 py-4 text-xs font-bold uppercase tracking-[0.16em]">{plan.name}</th>)}</tr></thead><tbody>{COMPARISON.map((row, index) => <tr key={row[0]} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`} className={`border-t border-slate-200 px-5 py-4 ${cellIndex === 0 ? "font-semibold text-slate-950" : "text-slate-600"}`}>{cell}</td>)}</tr>)}</tbody></table></div><div className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-600"><CircleHelp className="mt-1 h-4 w-4 shrink-0 text-orange-700" /><p><strong className="text-slate-950">Commercial clarity:</strong> customer infrastructure, hosting, monitoring and third-party LLM/API consumption are separate from the Shyena software fee unless explicitly contracted otherwise.</p></div></div></section>

      <section className="border-y border-slate-200 bg-[#edf6ff]"><div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">05 / Expansion model</p><h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Increase capacity as assurance demand increases.</h2></div><div><p className="max-w-3xl text-xl leading-8 text-slate-700">Start with a defined assurance capacity, establish the workflow, then increase capacity without changing the underlying licensing model.</p><div className="mt-10 grid border-y border-slate-300 sm:grid-cols-4">{[["01", "Adopt", "Define the assurance outcomes and operating baseline."], ["02", "Prove", "Establish evidence, workflows and release confidence."], ["03", "Scale", "Increase assurance capacity as activity grows."], ["04", "Govern", "Add deeper governance, integrations and support."]].map(([number, title, text], index) => <div key={number} className={`py-7 sm:px-5 ${index > 0 ? "border-t border-slate-300 sm:border-l sm:border-t-0" : "sm:pl-0"}`}><span className="font-mono text-xs font-semibold tracking-[0.12em] text-orange-700">{number}</span><h3 className="mt-7 text-lg font-semibold tracking-[-0.02em] text-slate-950">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>)}</div></div></div></div></section>

      <section className="bg-white"><div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">06 / Pricing questions</p><h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">Clear answers for procurement and engineering.</h2></div><div className="divide-y divide-slate-200 border-y border-slate-300">{FAQS.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-semibold tracking-[-0.02em] text-slate-950"><span>{question}</span><span className="text-2xl font-normal text-slate-400 transition-transform group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>

      <CtaBand />
    </main>
  );
}
