import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Calculator, Layers3, ShieldCheck, Gauge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";

const RATE = 0.05;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { name: "description", content: "Enterprise AI assurance pricing for agents built on Cognigy and other agentic platforms. Start with a €7,500 assurance pilot and scale to Professional, Enterprise and Strategic plans." },
      { name: "keywords", content: "AI agent assurance pricing, enterprise AI testing pricing, Cognigy testing pricing, AI agent evaluation pricing, AI security testing pricing" },
      { property: "og:title", content: "Shyena Pricing | Enterprise AI Agent Assurance" },
      { property: "og:description", content: "Start with one AI system. Prove the assurance model. Scale across the estate." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "AI Assurance Pilot",
    price: "€7,500",
    term: "30–60 days",
    audience: "Teams evaluating Shyena for the first time",
    description: "One AI system. Establish the baseline, execute representative journeys, evaluate outcomes and prove the assurance model.",
    featured: false,
  },
  {
    name: "Professional",
    price: "€30,000",
    term: "per year",
    audience: "One AI system in production",
    description: "Default production plan. One production AI system with core assurance capabilities, including dashboards and reporting.",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "€60,000",
    term: "per year",
    audience: "Multiple teams and AI systems",
    description: "Multiple AI systems and teams, higher included usage, governance, SSO, API/CI/CD integrations and priority support.",
    featured: true,
  },
  {
    name: "Strategic",
    price: "€100K–€150K+",
    term: "per year",
    audience: "Large enterprises with complex AI estates",
    description: "Enterprise-wide assurance for large AI estates, custom deployment, advanced integrations and dedicated support.",
    featured: false,
  },
];

const CAPABILITIES = [
  ["AI systems", "1", "1", "Multiple", "Enterprise-wide"],
  ["Teams / Users", "Limited", "Up to 10", "Up to 50", "Unlimited"],
  ["Included Usage (units/year)", "5,000", "100,000", "500,000", "Custom"],
  ["Additional Usage", "€0.05 / unit", "€0.05 / unit", "€0.05 / unit", "€0.05 / unit"],
  ["CIS – Test Journeys", "Included", "Included", "Included", "Included"],
  ["Vera – Conversations", "Included", "Included", "Included", "Included"],
  ["Chakra – Security Tests", "Included", "Included", "Included", "Included"],
  ["Dashboards & Reporting", "Basic", "Advanced", "Advanced", "Advanced + Custom"],
  ["Release Gate Reporting", "Basic", "Advanced", "Advanced", "Advanced + Custom"],
  ["SSO / RBAC", "—", "—", "Included", "Included"],
  ["API / Integrations", "—", "Basic", "Advanced", "Advanced + Custom"],
  ["CI/CD Integration", "—", "Basic", "Advanced", "Advanced + Custom"],
  ["Environments", "1", "Multiple", "Multiple", "Custom"],
  ["Support", "Email", "Standard", "Priority", "Dedicated"],
  ["Professional Services", "Optional", "Optional", "Optional", "Optional"],
  ["Customer Infrastructure", "Customer", "Customer", "Customer", "Customer"],
];

const FAQS = [
  ["Why is Shyena priced as an annual platform rather than only per usage?", "The enterprise model separates the value of the assurance platform from variable execution. Customers commit to the platform capability, receive an included usage allowance and can expand usage as their AI estate grows."],
  ["What is included in the €7,500 pilot?", "The pilot covers one AI system for 30–60 days and is designed to establish a baseline, execute representative journeys, evaluate outcomes and prove the assurance model."],
  ["What counts as additional usage?", "CIS test journeys generated, Vera AI conversations and Chakra security interactions are measured as three independent usage units. Additional usage is €0.05 per unit after the included allowance."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. The Shyena platform is sold as one assurance platform. Nexus, Vera and Chakra are capabilities within that platform rather than separate module subscriptions."],
  ["Who pays for cloud infrastructure and LLM/API consumption?", "Customer infrastructure, LLM/API consumption, hosting and monitoring are billed directly to and controlled by the customer. They are separate from the Shyena software subscription."],
  ["Can enterprise pricing be negotiated?", "Yes. The published prices establish the standard commercial anchor. Strategic accounts can agree committed volume, deployment, governance, support and other enterprise requirements contractually."],
];

function formatEuro(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function PricingCalculator() {
  const [cis, setCis] = useState("100");
  const [vera, setVera] = useState("1000");
  const [chakra, setChakra] = useState("250");
  const update = (value: string, setter: (v: string) => void) => {
    if (value === "" || /^\d+$/.test(value)) setter(value.replace(/^0+(?=\d)/, ""));
  };
  const estimate = useMemo(() => ({
    cis: Number(cis || 0) * RATE,
    vera: Number(vera || 0) * RATE,
    chakra: Number(chakra || 0) * RATE,
  }), [cis, vera, chakra]);
  const total = estimate.cis + estimate.vera + estimate.chakra;
  const Field = ({ id, label, value, setter }: { id: string; label: string; value: string; setter: (v: string) => void }) => (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-[#e9e5f2]">{label}</label>
      <input id={id} value={value} inputMode="numeric" onChange={(e) => update(e.target.value, setter)} onBlur={() => value === "" && setter("0")} className="mt-2 w-full rounded-xl border border-[#514778] bg-[#15102d] px-4 py-3 text-lg font-semibold text-[#faf8ff] outline-none focus:border-[#a855f7] focus:ring-2 focus:ring-[#7c3aed]/20" />
      <p className="mt-2 text-xs text-[#918aa8]">€0.05 each · Whole numbers only</p>
    </div>
  );
  return (
    <section id="usage-calculator" className="border-y border-[#2b2350] bg-[#0a071d] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7]"><Calculator className="h-5 w-5" /></div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Usage expansion</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">Estimate your variable usage.</h2>
          <p className="mt-5 text-base leading-relaxed text-[#c9c4d8]">Platform subscription and included usage are contracted separately. Use this calculator to estimate the variable component beyond your plan allowance.</p>
          <div className="mt-6 rounded-2xl border border-[#2b2350] bg-[#15102d] p-5 text-sm leading-relaxed text-[#c9c4d8]"><span className="font-semibold text-[#faf8ff]">Three independent units.</span> CIS test journeys, Vera conversations and Chakra security interactions are measured separately. One unit is never converted into another.</div>
        </div>
        <div className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-6 shadow-xl sm:p-8">
          <div className="grid gap-7 md:grid-cols-3">
            <Field id="cis" label="CIS test journeys" value={cis} setter={setCis} />
            <Field id="vera" label="Vera conversations" value={vera} setter={setVera} />
            <Field id="chakra" label="Chakra security interactions" value={chakra} setter={setChakra} />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#2b2350] pt-7">
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">CIS</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.cis)}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">Vera</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.vera)}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#918aa8]">Chakra</p><p className="mt-1 text-xl font-bold text-[#faf8ff]">{formatEuro(estimate.chakra)}</p></div>
          </div>
          <div className="mt-7 rounded-2xl bg-[#15102d] p-6 text-[#faf8ff]"><p className="text-xs uppercase tracking-[0.18em] text-[#a9a2bd]">Estimated variable usage</p><p className="mt-2 text-4xl font-bold tracking-tight">{formatEuro(total)}</p><p className="mt-2 text-xs text-[#a9a2bd]">Illustrative usage estimate only. VAT and separately scoped professional services are excluded.</p></div>
          <div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Discuss your plan <ArrowRight className="h-4 w-4" /></Link></Button><a href="#plan-comparison" className="inline-flex h-10 items-center rounded-md border border-[#514778] px-4 text-sm font-medium text-[#e9e5f2]">Compare plans</a></div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return <>
    <section className="relative overflow-hidden bg-[#0a071d] text-white">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(139,92,246,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.10)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a855f7]">Enterprise AI assurance</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Start with one AI system.<br /><span className="text-[#a855f7]">Scale across the estate.</span></h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#c9c4d8]">A land-and-expand commercial model for enterprises that need evidence-backed assurance across AI agents, journeys, teams and release cycles.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><span className="rounded-full border border-[#514778] bg-[#15102d]/5 px-4 py-2">€7,500 pilot</span><span className="rounded-full border border-[#514778] bg-[#15102d]/5 px-4 py-2">€30K–€60K annual platform</span><span className="rounded-full border border-[#514778] bg-[#15102d]/5 px-4 py-2">€100K–€150K+ strategic</span></div>
          <p className="mt-7 text-sm text-[#a855f7]">Free one-week onboarding with a dedicated Shyena engineer.</p>
        </div>
      </div>
    </section>

    <section id="plans" className="bg-[#0a071d] mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Enterprise offer</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">Predictable platform pricing. Transparent expansion.</h2><p className="mt-4 text-lg leading-relaxed text-[#c9c4d8]">The pilot lowers adoption risk. Annual plans create a predictable software commitment. Usage expands with the customer's AI estate.</p></div>
      <div className="mt-12 grid gap-5 lg:grid-cols-4">
        {PLANS.map((plan) => <div key={plan.name} className={`relative flex flex-col rounded-3xl border p-7 ${plan.featured ? "border-[#a855f7] bg-[#15102d] text-[#faf8ff] shadow-2xl shadow-[#7c3aed]/30" : "border-[#2b2350] bg-[#15102d]"}`}>
          {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-[#7c3aed] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Recommended</span>}
          <p className={`font-mono text-xs uppercase tracking-[0.16em] ${plan.featured ? "text-[#a855f7]" : "text-[#f59804]"}`}>{plan.name}</p>
          <p className="mt-6 text-3xl font-bold tracking-tight">{plan.price}</p><p className={`mt-1 text-sm ${plan.featured ? "text-[#a9a2bd]" : "text-[#918aa8]"}`}>{plan.term}</p>
          <p className={`mt-5 text-sm font-semibold ${plan.featured ? "text-white" : "text-[#faf8ff]"}`}>{plan.audience}</p>
          <p className={`mt-4 flex-1 text-sm leading-relaxed ${plan.featured ? "text-[#c9c4d8]" : "text-[#c9c4d8]"}`}>{plan.description}</p>
          <Button asChild className="mt-7" variant={plan.featured ? "default" : "outline"}><Link to="/contact">Discuss this plan <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>)}
      </div>
    </section>

    <section className="bg-[#0a071d] py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-5 lg:grid-cols-3">
      {[{icon:Layers3,title:"Platform license",body:"Nexus, Vera and Chakra are capabilities within one Shyena assurance platform—not separate module subscriptions."},{icon:Gauge,title:"Usage expansion",body:"CIS journeys, Vera conversations and Chakra security interactions are metered independently at €0.05 per additional unit."},{icon:ShieldCheck,title:"Customer environment",body:"Cloud infrastructure, LLM/API consumption, hosting and monitoring are customer-funded and separate from the Shyena software fee."}].map(({icon:Icon,title,body})=><div key={title} className="rounded-3xl border border-[#2b2350] bg-[#15102d] p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/15 text-[#a855f7]"><Icon className="h-5 w-5" /></div><h3 className="mt-6 text-xl font-bold text-[#faf8ff]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#c9c4d8]">{body}</p></div>)}
    </div></div></section>

    <PricingCalculator />

    <section id="plan-comparison" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Plan comparison</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#faf8ff] sm:text-4xl">One assurance foundation. More scale at each level.</h2></div><div className="mt-10 overflow-x-auto rounded-3xl border border-[#2b2350] bg-[#15102d] shadow-sm"><table className="w-full min-w-[920px] border-collapse text-left text-sm"><thead><tr className="bg-[#0a071d] text-white">{["CAPABILITY / PLAN","PILOT 30–60 DAYS","PROFESSIONAL €30K / YEAR","ENTERPRISE €60K / YEAR","STRATEGIC €100K–€150K+ / YEAR"].map((h)=><th key={h} className="border-r border-[#514778] px-4 py-4 text-xs font-bold uppercase tracking-wide">{h}</th>)}</tr></thead><tbody>{CAPABILITIES.map((row,i)=><tr key={row[0]} className={i%2===0 ? "bg-[#15102d]" : "bg-[#0a071d]"}>{row.map((cell,j)=><td key={`${row[0]}-${j}`} className={`border-b border-[#2b2350] px-4 py-3 ${j===0 ? "font-semibold text-[#faf8ff]" : "text-[#c9c4d8]"}`}>{cell}</td>)}</tr>)}</tbody></table></div><p className="mt-4 text-xs leading-relaxed text-[#918aa8]">Customer infrastructure (cloud, LLM, hosting and monitoring) remains outside the Shyena software license. Enterprise commercial terms can be scoped around deployment, governance, support and committed volume.</p></section>

    <section className="bg-[#0a071d] py-20 text-white sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a855f7]">The commercial logic</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Built to grow when the AI estate grows.</h2><p className="mt-5 max-w-xl leading-relaxed text-[#c9c4d8]">Shyena keeps the software commitment predictable while allowing variable usage to scale with the customer's actual assurance activity.</p></div><div className="grid gap-3 sm:grid-cols-2">{[["01","Adopt","Start with one AI system and a defined assurance outcome."],["02","Prove","Establish evidence, workflows and release confidence."],["03","Expand","Add systems, teams, usage and governance."],["04","Scale","Move to enterprise-wide assurance when the estate demands it."]].map(([n,h,b])=><div key={n} className="rounded-2xl border border-slate-800 bg-[#15102d]/[0.04] p-5"><span className="font-mono text-xs text-[#a855f7]">{n}</span><h3 className="mt-3 font-semibold">{h}</h3><p className="mt-2 text-sm leading-relaxed text-[#a9a2bd]">{b}</p></div>)}</div></div></div></section>

    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24"><div className="text-center"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f59804]">Pricing questions</p><h2 className="mt-4 text-3xl font-bold text-[#faf8ff]">Clear answers for procurement and engineering.</h2></div><Accordion type="single" collapsible className="mt-10">{FAQS.map(([q,a],i)=><AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent className="text-[#c9c4d8]">{a}</AccordionContent></AccordionItem>)}</Accordion></section>

    <CtaBand eyebrow="Enterprise AI assurance" title="Prove your AI agent is ready to operate." description="Start with one AI system. Build the evidence. Scale the assurance model across the estate." primaryLabel="Request an Assurance Review" primaryHref="/contact" />
  </>;
}
