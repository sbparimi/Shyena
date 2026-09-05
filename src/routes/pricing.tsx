import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleHelp, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

const USAGE_STARTER_RATE = 0.1;
const USAGE_SCALE_RATE = 0.05;
const ANNUAL_OVERAGE_RATE = 0.05;

type Plan = {
  name: string;
  type: "Usage-based" | "Annual";
  price: string;
  cadence: string;
  audience: string;
  capacity: string;
  description: string;
  featured?: boolean;
  cta: string;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    type: "Usage-based",
    price: "€0.10",
    cadence: "per assurance run",
    audience: "Start without an annual commitment",
    capacity: "Pay only for the assurance runs you use",
    description: "For teams starting an assurance programme or with variable usage. Monthly billing is based on actual assurance runs.",
    cta: "Start with usage",
    features: [
      "Nexus, Vera and Chakra",
      "Core dashboards and evidence",
      "Standard API access",
      "Email support",
      "No annual commitment",
    ],
  },
  {
    name: "Scale",
    type: "Usage-based",
    price: "€0.05",
    cadence: "per assurance run",
    audience: "Higher-volume usage with better unit economics",
    capacity: "Volume usage pricing",
    description: "For teams running assurance continuously. The unit price is reduced for higher committed usage.",
    featured: true,
    cta: "Discuss usage volume",
    features: [
      "Everything in Starter",
      "Advanced dashboards and reporting",
      "Release-gate evidence",
      "API + CI/CD integration",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    type: "Annual",
    price: "€30,000",
    cadence: "per year",
    audience: "Predictable production assurance",
    capacity: "100,000 assurance runs included / year",
    description: "For engineering teams that want a fixed annual budget and a defined assurance capacity for repeatable testing, evaluation and security assurance.",
    cta: "Choose Professional",
    features: [
      "Nexus, Vera and Chakra",
      "100,000 assurance runs / year",
      "Advanced dashboards and reporting",
      "Release-gate reporting",
      "API + CI/CD integration",
      "Multiple environments",
      "Standard support",
    ],
  },
  {
    name: "Enterprise",
    type: "Annual",
    price: "€60,000",
    cadence: "per year",
    audience: "High-volume enterprise assurance",
    capacity: "500,000 assurance runs included / year",
    description: "For organizations that need higher capacity, stronger governance, enterprise integrations and priority operational support.",
    cta: "Choose Enterprise",
    features: [
      "Everything in Professional",
      "500,000 assurance runs / year",
      "SSO + RBAC",
      "Advanced API and CI/CD",
      "Advanced governance and reporting",
      "Priority support",
      "Higher committed capacity",
    ],
  },
];

const COMPARISON = [
  ["Pricing model", "Usage", "Usage", "Annual", "Annual"],
  ["Price", "€0.10 / run", "€0.05 / run", "€30,000 / year", "€60,000 / year"],
  ["Included assurance runs", "None — pay as used", "None — pay as used", "100,000 / year", "500,000 / year"],
  ["Nexus", "Included", "Included", "Included", "Included"],
  ["Vera", "Included", "Included", "Included", "Included"],
  ["Chakra", "Included", "Included", "Included", "Included"],
  ["Dashboards & reporting", "Core", "Advanced", "Advanced", "Advanced"],
  ["Release-gate evidence", "Core", "Advanced", "Included", "Advanced"],
  ["API / CI/CD", "Standard", "Included", "Included", "Advanced"],
  ["SSO / RBAC", "—", "—", "—", "Included"],
  ["Environments", "Standard", "Multiple", "Multiple", "Multiple"],
  ["Support", "Email", "Priority", "Standard", "Priority"],
];

const FAQS = [
  ["What is an assurance run?", "An assurance run is one metered unit of Shyena activity. It can represent a CIS-generated test journey, a Vera evaluation interaction or a Chakra security interaction. The exact consumption is recorded in the Shyena usage record."],
  ["What is the difference between Usage-based and Annual pricing?", "Usage-based pricing has no annual capacity allowance: you are billed for actual assurance runs. Annual pricing gives you a fixed yearly capacity and a predictable software budget, with additional runs billed at €0.05 each."],
  ["Do the plans depend on how many AI systems we have?", "No. Shyena pricing is not based on the number of AI systems, agents or deployments. The commercial unit is assurance activity, and annual plans are differentiated by included capacity and enterprise capabilities."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. They are capabilities within one Shyena assurance platform. You do not buy three separate module licences."],
  ["Is there a per-user or per-agent licence fee?", "No. There is no per-user or per-agent licence fee in this pricing model."],
  ["How does Usage-based billing work?", "Usage plans are billed according to actual assurance runs consumed during the billing period. Starter is €0.10 per run. Scale is €0.05 per run for higher-volume usage. Any agreed minimum monthly commitment is stated separately in the commercial order."],
  ["What happens when an Annual customer exceeds the included capacity?", `Additional assurance runs are billed at ${formatRate(ANNUAL_OVERAGE_RATE)} per run unless a different committed-volume rate is agreed in the commercial order.`],
  ["Are cloud infrastructure, LLM and third-party API costs included?", "No. Customer infrastructure, hosting, monitoring and third-party LLM/API consumption are separate unless explicitly included in a custom commercial agreement."],
  ["Can professional services be added?", "Yes. Implementation, training, custom engineering, managed assurance and bespoke integrations are separately scoped."],
];

function formatRate(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function UsageCalculator() {
  const [operations, setOperations] = useState("10000");
  const [rate, setRate] = useState(USAGE_STARTER_RATE);
  const estimate = useMemo(() => Number(operations || 0) * rate, [operations, rate]);

  const update = (next: string) => {
    if (next === "" || /^\d+$/.test(next)) setOperations(next.replace(/^0+(?=\d)/, ""));
  };

  return (
    <section id="usage-calculator" className="border-y border-slate-200 bg-[#f5f6f7]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">03 / Usage calculator</p>
            <h2 className="mt-5 text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-5xl">Know your usage cost before you talk to us.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Select a usage tier and enter the number of assurance runs you expect to consume. This is a simple usage estimate, not a quote.</p>
            <div className="mt-8 space-y-4 border-t border-slate-300 pt-6 text-sm leading-6 text-slate-600">
              <p><span className="font-semibold text-slate-950">Starter:</span> €0.10 per assurance run.</p>
              <p><span className="font-semibold text-slate-950">Scale:</span> €0.05 per assurance run.</p>
              <p><span className="font-semibold text-slate-950">Annual:</span> fixed yearly price with included capacity.</p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] sm:p-9 lg:p-10">
            <div className="grid gap-3 sm:grid-cols-2">
              {[{ label: "Starter · €0.10 / run", value: USAGE_STARTER_RATE }, { label: "Scale · €0.05 / run", value: USAGE_SCALE_RATE }].map((option) => (
                <button key={option.value} type="button" onClick={() => setRate(option.value)} aria-pressed={rate === option.value} className={`border px-5 py-4 text-left transition-colors ${rate === option.value ? "border-[#ffb804] bg-[#ffb804] text-slate-950" : "border-slate-300 bg-white text-slate-700 hover:border-slate-950"}`}>
                  <span className="block text-xs font-bold uppercase tracking-[0.14em]">{option.label}</span>
                  <span className="mt-1 block text-xs opacity-70">Usage-based pricing</span>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <label htmlFor="operations" className="text-sm font-semibold text-slate-950">Expected assurance runs</label>
              <div className="mt-3 flex items-center border-b-2 border-slate-900">
                <input id="operations" value={operations} inputMode="numeric" aria-label="Expected assurance runs" onChange={(event) => update(event.target.value)} onBlur={() => operations === "" && setOperations("0")} className="w-full bg-transparent py-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 outline-none placeholder:text-slate-300" />
                <span className="pb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">runs</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">{formatRate(rate)} per assurance run · whole numbers only</p>
            <div className="mt-9 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Estimated usage cost</p>
              <p className="mt-2 text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl">{formatRate(estimate)}</p>
              <p className="mt-3 text-xs leading-5 text-slate-500">Excludes VAT, minimum commitments and separately scoped services.</p>
            </div>
            <div className="mt-8 border-t-2 border-slate-950 pt-6">
              <Button asChild size="lg" className="w-full rounded-none border border-[#ffb804] bg-[#ffb804] px-6 text-slate-950 hover:bg-[#f2aa00]">
                <Link to="/contact">Discuss your usage <ArrowRight className="h-4 w-4" /></Link>
              </Button>
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
      {plan.featured && <span className="absolute right-6 top-6 bg-[#ffb804] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950">Popular</span>}
      <div className="flex items-center justify-between gap-4">
        <p className={`text-xs font-bold uppercase tracking-[0.2em] ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.type}</p>
        <span className={`text-[10px] font-bold uppercase tracking-[0.14em] ${plan.featured ? "text-slate-500" : "text-slate-400"}`}>{plan.name}</span>
      </div>
      <p className={`mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.price}</p>
      <p className={`mt-2 text-sm font-medium ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.cadence}</p>
      <div className={`mt-8 border-y py-5 ${plan.featured ? "border-slate-700" : "border-slate-200"}`}>
        <p className={`text-sm font-semibold ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.audience}</p>
        <p className={`mt-2 text-sm font-semibold ${plan.featured ? "text-[#ffb804]" : "text-orange-700"}`}>{plan.capacity}</p>
      </div>
      <p className={`mt-6 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
      <div className="mt-7 space-y-3">
        {plan.features.map((feature) => <div key={feature} className="flex gap-3 text-sm leading-6"><Check className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? "text-[#ffb804]" : "text-orange-700"}`} /><span className={plan.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span></div>)}
      </div>
      <div className="mt-auto pt-9">
        <Button asChild size="lg" className="w-full rounded-none border border-[#ffb804] bg-[#ffb804] text-slate-950 hover:bg-[#f2aa00]">
          <Link to="/contact">{plan.cta} <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </article>
  );
}

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | AI Assurance Platform" },
      { name: "description", content: "Clear usage-based and annual pricing for Shyena AI assurance, with no per-user, per-agent or AI-system licensing." },
      { name: "keywords", content: "AI assurance pricing, AI agent testing pricing, enterprise AI evaluation pricing, AI security testing pricing, assurance platform pricing" },
      { property: "og:title", content: "Shyena Pricing | AI Assurance Platform" },
      { property: "og:description", content: "Choose usage-based or annual assurance pricing. No per-user, per-agent or AI-system licensing." },
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
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">01 / Pricing</p>
              <h1 className="mt-6 max-w-5xl font-[Sora] text-5xl font-extrabold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[clamp(3.5rem,5.5vw,5.5rem)]">Simple pricing for continuous AI assurance.</h1>
            </div>
            <div className="max-w-xl border-t border-slate-300 pt-6 lg:mb-2">
              <p className="text-xl leading-8 text-slate-700">Choose how you want to buy Shyena: pay for actual usage, or commit annually for predictable capacity and enterprise capabilities.</p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500"><span>Usage or annual</span><span>No per-user fees</span><span>No AI-system fees</span></div>
            </div>
          </div>
          <div className="mt-14 border-y border-slate-300 bg-white/60 px-6 py-6 sm:px-8">
            <div className="grid gap-5 md:grid-cols-3 md:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">The pricing rule</p><p className="mt-2 text-lg font-semibold text-slate-950">You pay for assurance activity, not the number of AI systems.</p></div>
              <div className="border-l-0 border-slate-300 md:border-l md:pl-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Usage-based</p><p className="mt-2 text-sm leading-6 text-slate-600">€0.10/run Starter · €0.05/run Scale</p></div>
              <div className="border-l-0 border-slate-300 md:border-l md:pl-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Annual</p><p className="mt-2 text-sm leading-6 text-slate-600">€30K Professional · €60K Enterprise</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">02 / Choose your model</p><h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">Two ways to buy. Four clear plans.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Usage-based plans are billed on actual assurance runs. Annual plans bundle a defined capacity with stronger production and enterprise capabilities.</p></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">{PLANS.map((plan) => <PlanCard key={`${plan.type}-${plan.name}`} plan={plan} />)}</div>
          <div className="mt-8 border border-slate-300 bg-[#f5f6f7] p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">What counts as a run?</p><p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">A metered assurance run can be a generated CIS test journey, a Vera evaluation interaction or a Chakra security interaction. The exact usage definition is recorded with the assurance evidence.</p></div><ShieldCheck className="hidden h-6 w-6 shrink-0 text-slate-700 lg:block" /></div>
          </div>
        </div>
      </section>

      <UsageCalculator />

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">04 / Compare</p><h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">Everything important, side by side.</h2></div>
          <div className="mt-10 overflow-x-auto border border-slate-300">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm"><thead><tr className="bg-slate-950 text-white"><th className="w-[25%] px-5 py-4 font-semibold">Capability</th>{PLANS.map((plan) => <th key={plan.name} className="px-5 py-4 font-semibold">{plan.name}<span className="mt-1 block text-xs font-normal text-slate-400">{plan.type}</span></th>)}</tr></thead><tbody>{COMPARISON.map((row, index) => <tr key={row[0]} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>{row.map((cell, cellIndex) => <td key={`${row[0]}-${cellIndex}`} className={`border-t border-slate-200 px-5 py-4 leading-6 ${cellIndex === 0 ? "font-semibold text-slate-950" : "text-slate-600"}`}>{cell}</td>)}</tr>)}</tbody></table>
          </div>
          <p className="mt-4 text-xs leading-5 text-slate-500">Annual plans include the stated yearly capacity. Usage-based plans have no included allowance; every run is billed at the selected usage rate. Minimum commitments, if applicable, are stated separately in the commercial order.</p>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">05 / Commercial clarity</p><h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">No hidden licensing layer.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">The platform, not the number of systems or users, is the foundation. Usage measures assurance activity; annual plans add predictable capacity and enterprise controls.</p></div>
            <div className="grid gap-4 sm:grid-cols-2"><div className="border border-slate-300 bg-white p-6"><CircleHelp className="h-5 w-5 text-slate-700" /><h3 className="mt-5 text-lg font-bold">No AI-system pricing</h3><p className="mt-2 text-sm leading-6 text-slate-600">No charge for having one, ten or more AI systems. System count does not define the plan.</p></div><div className="border border-slate-300 bg-white p-6"><CircleHelp className="h-5 w-5 text-slate-700" /><h3 className="mt-5 text-lg font-bold">No user-seat pricing</h3><p className="mt-2 text-sm leading-6 text-slate-600">No per-user licence fee. Access, governance and support vary by plan.</p></div><div className="border border-slate-300 bg-white p-6"><CircleHelp className="h-5 w-5 text-slate-700" /><h3 className="mt-5 text-lg font-bold">One assurance platform</h3><p className="mt-2 text-sm leading-6 text-slate-600">Nexus, Vera and Chakra are included capabilities, not three separate subscriptions.</p></div><div className="border border-slate-300 bg-white p-6"><CircleHelp className="h-5 w-5 text-slate-700" /><h3 className="mt-5 text-lg font-bold">Transparent overage</h3><p className="mt-2 text-sm leading-6 text-slate-600">Annual plans use €0.05 per additional run unless a different committed-volume rate is agreed.</p></div></div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">06 / FAQ</p><h2 className="mt-5 font-[Sora] text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-5xl">Pricing questions, answered.</h2></div><div className="mt-12 divide-y divide-slate-300 border-y border-slate-300">{FAQS.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-bold text-slate-950"><span>{question}</span><span className="text-2xl font-normal text-slate-400 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <CtaBand />
    </main>
  );
}
