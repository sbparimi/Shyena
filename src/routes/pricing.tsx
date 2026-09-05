import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleHelp } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";

const YELLOW = "bg-[#ffb804] hover:bg-[#f2aa00]";
const USAGE_STARTER = 0.1;
const USAGE_SCALE = 0.05;
const ANNUAL_OVERAGE = 0.05;

const USAGE_PLANS = [
  {
    name: "Starter",
    price: "€0.10",
    unit: "per assurance run",
    description: "Pay only for the assurance activity you use. No annual capacity commitment.",
    features: ["Nexus, Vera and Chakra", "Core dashboards and evidence", "Standard API access", "Email support", "No annual commitment"],
    cta: "Start with Starter",
  },
  {
    name: "Scale",
    price: "€0.05",
    unit: "per assurance run",
    description: "Lower unit pricing for teams running assurance at higher volume.",
    featured: true,
    features: ["Everything in Starter", "Advanced dashboards and reporting", "Release-gate evidence", "API + CI/CD integration", "Priority support"],
    cta: "Discuss Scale",
  },
];

const ANNUAL_PLANS = [
  {
    name: "Professional",
    price: "€30,000",
    unit: "per year",
    capacity: "100,000 assurance runs included",
    description: "A predictable annual plan for production assurance with a defined yearly capacity.",
    features: ["Nexus, Vera and Chakra", "100,000 assurance runs / year", "Advanced dashboards and reporting", "Release-gate reporting", "API + CI/CD integration", "Multiple environments", "Standard support"],
    cta: "Choose Professional",
  },
  {
    name: "Enterprise",
    price: "€60,000",
    unit: "per year",
    capacity: "500,000 assurance runs included",
    description: "Higher annual capacity with enterprise governance, integrations and priority support.",
    featured: true,
    features: ["Everything in Professional", "500,000 assurance runs / year", "SSO + RBAC", "Advanced API + CI/CD", "Advanced governance and reporting", "Priority support"],
    cta: "Choose Enterprise",
  },
];

const FAQS = [
  ["What is an assurance run?", "One metered unit of Shyena assurance activity, such as a CIS test journey, a Vera evaluation interaction or a Chakra security interaction."],
  ["Is pricing based on the number of AI systems?", "No. Pricing is not based on the number of AI systems, agents or deployments."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. They are capabilities within one Shyena platform and are included in every plan."],
  ["Are there per-user or per-agent fees?", "No. There are no per-user or per-agent licence fees in this pricing model."],
  ["What happens when an annual plan exceeds its capacity?", "Additional assurance runs are €0.05 per run unless a different committed-volume rate is agreed."],
  ["Are infrastructure and LLM costs included?", "No. Customer infrastructure, hosting, monitoring and third-party LLM/API consumption are separate unless explicitly included in a commercial agreement."],
];

function formatEuro(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function UsageCalculator() {
  const [runs, setRuns] = useState("10000");
  const [rate, setRate] = useState(USAGE_STARTER);
  const estimate = useMemo(() => Number(runs || 0) * rate, [runs, rate]);

  return (
    <div className="mt-10 border border-slate-300 bg-[#f5f6f7] p-6 sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Usage calculator</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">Estimate your usage cost</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Select a usage plan and enter your expected assurance runs. This is an estimate, not a quote.</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setRate(USAGE_STARTER)} aria-pressed={rate === USAGE_STARTER} className={`border px-4 py-3 text-left text-sm font-bold transition-colors ${rate === USAGE_STARTER ? `${YELLOW} border-[#ffb804] text-slate-950` : "border-slate-300 bg-white text-slate-700"}`}>Starter<br /><span className="text-xs font-normal">€0.10 / run</span></button>
            <button type="button" onClick={() => setRate(USAGE_SCALE)} aria-pressed={rate === USAGE_SCALE} className={`border px-4 py-3 text-left text-sm font-bold transition-colors ${rate === USAGE_SCALE ? `${YELLOW} border-[#ffb804] text-slate-950` : "border-slate-300 bg-white text-slate-700"}`}>Scale<br /><span className="text-xs font-normal">€0.05 / run</span></button>
          </div>
          <label htmlFor="runs" className="mt-5 block text-sm font-semibold text-slate-950">Expected assurance runs</label>
          <input id="runs" inputMode="numeric" value={runs} onChange={(e) => { if (/^\d*$/.test(e.target.value)) setRuns(e.target.value); }} className="mt-2 w-full border-b-2 border-slate-950 bg-transparent py-3 text-3xl font-semibold outline-none" />
          <div className="mt-5 flex items-end justify-between border-t border-slate-200 pt-5"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Estimated cost</p><p className="mt-1 text-3xl font-bold text-slate-950">{formatEuro(estimate)}</p></div><span className="text-xs text-slate-500">{formatEuro(rate)} / run</span></div>
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: any }) {
  return (
    <article className={`relative flex h-full flex-col border p-7 lg:p-8 ${plan.featured ? "border-slate-950 bg-slate-950 text-white" : "border-slate-300 bg-white"}`}>
      {plan.featured && <span className="absolute right-5 top-5 bg-[#ffb804] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-950">Recommended</span>}
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.name}</p>
      <p className={`mt-6 text-4xl font-bold tracking-tight ${plan.featured ? "text-white" : "text-slate-950"}`}>{plan.price}</p>
      <p className={`mt-1 text-sm ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>{plan.unit}</p>
      {plan.capacity && <p className={`mt-6 border-y py-4 text-sm font-bold ${plan.featured ? "border-slate-700 text-[#ffb804]" : "border-slate-200 text-slate-950"}`}>{plan.capacity}</p>}
      <p className={`mt-6 text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600"}`}>{plan.description}</p>
      <div className="mt-7 space-y-3">{plan.features.map((feature: string) => <div key={feature} className="flex gap-3 text-sm leading-6"><Check className={`mt-1 h-4 w-4 shrink-0 ${plan.featured ? "text-[#ffb804]" : "text-slate-700"}`} /><span className={plan.featured ? "text-slate-200" : "text-slate-700"}>{feature}</span></div>)}</div>
      <div className="mt-auto pt-8"><Button asChild size="lg" className={`w-full rounded-none border border-[#ffb804] text-slate-950 ${YELLOW}`}><Link to="/contact">{plan.cta}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
    </article>
  );
}

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Shyena Pricing | AI Assurance Platform" },
    { name: "description", content: "Simple Shyena pricing: choose usage-based pricing or predictable annual assurance capacity. No AI-system, per-user or per-agent fees." },
  ], links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }] }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-[#edf6ff]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-700">Pricing</p>
          <h1 className="mt-5 max-w-4xl font-[Sora] text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-6xl">Simple pricing for AI assurance.</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">Choose one of two pricing models. Usage-based if you want flexibility. Annual if you want predictable capacity.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-600"><span className="border border-slate-300 bg-white px-3 py-2">No AI-system fees</span><span className="border border-slate-300 bg-white px-3 py-2">No per-user fees</span><span className="border border-slate-300 bg-white px-3 py-2">No per-agent fees</span></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">01 / Usage-based pricing</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Pay for what you use.</h2><p className="mt-5 text-lg leading-8 text-slate-600">No annual capacity. Your bill is based on the number of assurance runs you use.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{USAGE_PLANS.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div>
          <UsageCalculator />
        </div>
      </section>

      <section className="border-b border-slate-300 bg-[#f8fafc]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">02 / Annual pricing</p><h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Predictable annual pricing.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Pay one annual platform price and receive a defined assurance capacity for the year.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">{ANNUAL_PLANS.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div>
          <div className="mt-8 border border-slate-300 bg-white p-6 sm:p-8"><p className="text-sm font-bold text-slate-950">Annual overage</p><p className="mt-2 text-sm leading-6 text-slate-600">If you exceed your included annual capacity, additional assurance runs are <strong>€0.05 per run</strong>, unless a different committed-volume rate is agreed.</p></div>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">03 / Clear answers</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">Pricing questions, answered.</h2>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{FAQS.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-slate-950"><span>{question}</span><CircleHelp className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" /></summary><p className="mt-3 max-w-3xl pr-8 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div>
          <div className="mt-10"><Button asChild size="lg" className={`rounded-none border border-[#ffb804] text-slate-950 ${YELLOW}`}><Link to="/contact">Discuss pricing <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
