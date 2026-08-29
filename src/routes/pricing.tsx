import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, GraduationCap, Rocket, Code2, Puzzle, Gauge, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Shyena AI Agent Assurance Platform" },
      { name: "description", content: "Transparent SaaS pricing for Shyena AI agent assurance. Foundation €12,000/year with 1,000 conversations/month, Scale €30,000/year with 5,000 conversations/month, and Enterprise pricing negotiated to requirements. One-week onboarding with a dedicated engineer included." },
      { property: "og:title", content: "Pricing — Shyena AI Agent Assurance Platform" },
      { property: "og:description", content: "Clear annual SaaS pricing for AI agent testing, evaluation and security assurance, with 1,000 or 5,000 conversations per month and a free one-week dedicated-engineer onboarding." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Foundation",
    label: "€12,000 / year",
    description: "For teams establishing a repeatable AI agent testing and assurance program.",
    volume: "1,000 conversations / month",
    security: "25 security runs / month",
    overage: "€100 / additional 1,000 conversations · €150 / additional 25 security runs",
    features: ["Nexus + Vera + Chakra", "1 production tenant", "Unlimited platform users", "Unlimited agents and projects within contracted volume", "1,000 evaluated conversations per month", "25 security runs per month", "7-day evidence retention", "CI/CD and API access", "Standard support", "FREE 1-week onboarding with a dedicated engineer"],
  },
  {
    name: "Scale",
    label: "€30,000 / year",
    description: "For growing AI portfolios running assurance across multiple agents, environments and release pipelines.",
    volume: "5,000 conversations / month",
    security: "100 security runs / month",
    overage: "€75 / additional 1,000 conversations · €120 / additional 25 security runs",
    features: ["Nexus + Vera + Chakra", "Up to 3 production environments", "Unlimited platform users", "Unlimited agents and projects within contracted volume", "5,000 evaluated conversations per month", "100 security runs per month", "30-day evidence retention", "SSO / RBAC and usage reporting", "CI/CD and API access", "Priority support", "FREE 1-week onboarding with a dedicated engineer"],
    featured: true,
  },
  {
    name: "Enterprise",
    label: "Negotiated",
    description: "For governed enterprise deployment where volume, architecture, security and operating requirements need a tailored commercial agreement.",
    volume: "Negotiated conversation volume",
    security: "Negotiated security volume",
    overage: "Negotiated commercial terms",
    features: ["Nexus + Vera + Chakra", "Custom production environments and tenant model", "Unlimited platform users", "Custom assurance and security volumes", "Enterprise identity and governance", "Custom retention and data controls", "SLA and escalation model", "Security and procurement support", "Private-cloud options where required", "Dedicated commercial and technical engagement", "FREE 1-week onboarding with a dedicated engineer"],
  },
] as const;

const COMMERCIAL_UNITS = [
  { icon: Gauge, title: "Conversation volume", body: "The primary SaaS usage unit is an evaluated AI conversation. Foundation includes 1,000 conversations each month; Scale includes 5,000." },
  { icon: ShieldCheck, title: "Security volume", body: "Security testing is contracted as a separate usage allowance so adversarial assurance can scale with the customer's risk profile." },
  { icon: ArrowRight, title: "Negotiation at contract stage", body: "Public prices establish a clear starting point. Enterprise terms are negotiated around committed volume, deployment, governance and support." },
] as const;

const SERVICES = [
  { icon: Rocket, title: "Pilot / proof of value", body: "A scoped engagement against your environment, priced separately from the recurring SaaS subscription." },
  { icon: GraduationCap, title: "Training and enablement", body: "Workshops and extended team enablement are professional services quoted separately. The standard one-week onboarding engineer is included." },
  { icon: Code2, title: "Custom development", body: "Bespoke workflows, evaluators, reporting and engineering work are scoped and priced separately." },
  { icon: Puzzle, title: "Framework adapters", body: "New agent frameworks, channels and platform integrations are separately scoped rather than promised as unlimited platform features." },
];

const FAQS = [
  ["What is the actual starting price?", "Foundation is €12,000 per year and includes 1,000 evaluated conversations per month. Scale is €30,000 per year and includes 5,000 evaluated conversations per month. Enterprise is negotiated because deployment, governance, security and committed volume vary materially. Prices exclude VAT."],
  ["What counts as a conversation?", "A conversation is one executed AI customer or business journey evaluated by the Shyena platform. The applicable order form defines the exact consumption measurement and any technical exclusions."],
  ["Is onboarding included?", "Yes. Foundation, Scale and Enterprise include a free one-week onboarding period with a dedicated Shyena engineer to help establish the initial assurance setup. Extended implementation, training and custom engineering are separate services."],
  ["Are users and agents charged separately?", "No. Shyena does not use per-user or per-agent licensing in these plans. The commercial model is based on the platform subscription and contracted assurance/security consumption."],
  ["What happens when we exceed the monthly volume?", "Foundation and Scale publish an overage rate so the commercial exposure is clear before purchase. Enterprise customers negotiate volume and overage terms in the order form."],
  ["What is not included in the SaaS price?", "Pilots, extended training, custom development and bespoke framework or platform adapters are separate professional services. They are scoped explicitly rather than hidden inside the software subscription."],
  ["Can the price be negotiated?", "The published Foundation and Scale prices provide clear list-price anchors. Enterprise negotiation happens around committed volume, deployment model, support, retention, security, governance and other contractual requirements."],
] as const;

function PricingPage() {
  return <>
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-slate-700 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300">Public SaaS pricing</span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">Clear pricing for AI assurance that scales.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Know the annual platform price before you talk to sales. Choose a published conversation volume, scale when your AI estate grows, and negotiate enterprise requirements at contract stage.</p>
          <p className="mt-5 text-sm font-semibold text-violet-300">FREE 1-week onboarding with a dedicated engineer included.</p>
          <p className="mt-3 text-xs text-slate-500">Annual SaaS pricing · Excluding VAT · Subject to order form</p>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Choose your starting point</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">The price and included volume are visible.</h2><p className="mt-4 text-slate-600">The SaaS subscription is the platform commitment. Conversation and security allowances make the usage boundary explicit. Enterprise negotiation happens around the requirements that genuinely vary.</p></div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PLANS.map((plan) => <div key={plan.name} className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 ${plan.featured ? "border-violet-400 shadow-2xl ring-1 ring-violet-200" : "border-slate-200 shadow-sm"}`}>
          {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">Most popular</span>}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">{plan.name}</p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{plan.label}</h3>
          <p className="mt-3 min-h-16 text-sm leading-relaxed text-slate-600">{plan.description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1"><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Included conversations</p><p className="mt-1 font-semibold text-slate-900">{plan.volume}</p></div><div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Included security</p><p className="mt-1 font-semibold text-slate-900">{plan.security}</p></div></div>
          <div className="mt-3 rounded-2xl border border-violet-100 bg-violet-50/50 p-4"><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Overage / expansion</p><p className="mt-1 text-sm font-medium text-slate-800">{plan.overage}</p></div>
          <ul className="mt-6 flex-1 space-y-3 border-t border-slate-200 pt-6">{plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm text-slate-700"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700"><Check className="h-3 w-3" /></span>{feature}</li>)}</ul>
          <Button asChild className="mt-8" variant={plan.featured ? "default" : "outline"}><Link to="/contact">Discuss {plan.name} <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>)}
      </div>
    </section>

    <section className="bg-slate-50"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><Reveal><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Consumption model</span><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Meter the assurance work, not the people.</h2><p className="mt-4 text-slate-600">No per-user or per-agent tax. The platform subscription is combined with an explicit monthly conversation and security allowance.</p></div></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3">{COMMERCIAL_UNITS.map(({ icon: Icon, title, body }) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div>)}</div></div></section>

    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><Reveal><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Included platform</span><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Nexus + Vera + Chakra in every plan.</h2><p className="mt-4 text-slate-600">Every SaaS tier provides the Shyena assurance platform. The commercial difference is volume, environment scale and enterprise governance—not separate product licenses.</p></Reveal><div className="mt-10 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs font-semibold uppercase tracking-widest text-violet-600">Understand</p><h3 className="mt-2 text-xl font-bold">Nexus</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">System-map intelligence for understanding agent structure and generating assurance candidates.</p></div><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs font-semibold uppercase tracking-widest text-violet-600">Evaluate</p><h3 className="mt-2 text-xl font-bold">Vera</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Agentic quality evaluation across real conversations, deterministic contracts, semantic judgment and execution integrity.</p></div><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs font-semibold uppercase tracking-widest text-violet-600">Defend</p><h3 className="mt-2 text-xl font-bold">Chakra</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">Adversarial assurance for agentic systems, with attack execution and security release controls.</p></div></div></section>

    <section className="bg-slate-950 py-20 text-white"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">Professional services</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Software price stays clear. Bespoke work is scoped separately.</h2><p className="mt-4 text-slate-300">Every plan includes a free one-week onboarding period with a dedicated engineer. Anything beyond that standard onboarding is explicitly scoped and negotiated.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{SERVICES.map(({ icon: Icon, title, body }) => <div key={title} className="rounded-2xl border border-slate-700 bg-white/[0.03] p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p></div>)}</div></div></section>

    <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Commercial guardrails</p><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Public list price first. Negotiation second.</h2><p className="mt-4 text-slate-600">Foundation and Scale give buyers a clear price and volume before a sales conversation. Enterprise negotiation is reserved for committed volume, deployment model, support, retention, security, governance, data controls and other requirements that genuinely need a tailored contract.</p><div className="mt-8"><Button asChild><Link to="/contact">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link></Button></div></div></section>

    <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-16"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">FAQ</p><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Pricing and commercial model</h2></div><div className="mt-8 max-w-3xl"><Accordion type="single" collapsible>{FAQS.map(([q, a], i) => <AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent className="leading-relaxed text-slate-600">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>
    <CtaBand />
  </>;
}
