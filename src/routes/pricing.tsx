import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Calculator, Check, Code2, Gauge, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";

const RATE = 0.05;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shyena Pricing | AI Agent Testing, Evaluation & Security" },
      { name: "description", content: "Simple usage-based pricing for Shyena AI agent assurance: €0.05 per CIS-generated test journey, €0.05 per evaluated AI conversation and €0.05 per Chakra security interaction. Unlimited access to Nexus, Vera and Chakra, plus free one-week onboarding with a dedicated engineer." },
      { name: "keywords", content: "AI agent testing pricing, AI agent evaluation pricing, agentic AI testing pricing, LLM testing pricing, conversational AI testing pricing, AI security testing pricing, Cognigy testing, LangGraph testing, AI assurance platform pricing" },
      { property: "og:title", content: "Shyena Pricing | AI Agent Testing, Evaluation & Security" },
      { property: "og:description", content: "Unlimited platform access. Pay for generated test journeys, evaluated AI conversations and security interactions at €0.05 per unit." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const FAQS = [
  ["What does €0.05 mean?", "Shyena uses simple usage-based pricing. CIS-generated executable test journeys are €0.05 each, evaluated AI-agent conversations are €0.05 each, and Chakra security interactions executed through its security testing capability are €0.05 each."],
  ["Are Nexus, Vera and Chakra separate subscriptions?", "No. Customers get access to the Shyena platform capabilities without separate per-user, per-agent or module licences. Usage is metered by the applicable generated or executed unit."],
  ["What is a billable CIS test journey?", "A billable CIS unit is a distinct executable test journey generated from an agent flow, business path or specified scenario. Simply connecting or analysing a source flow is not presented as a billable generated journey."],
  ["What is a billable conversation?", "A billable conversation is an executed AI-agent customer or business interaction evaluated by Vera. A multi-turn interaction remains one conversation rather than one charge per turn."],
  ["How is Chakra security usage measured?", "Chakra uses security interactions as the usage unit for adversarial testing. Each Ziran-powered security interaction executed against the configured agent is counted toward usage. Campaigns, test packs and formal assessment records are workflow concepts, not separate subscription products."],
  ["Can developers debug and rerun tests?", "Yes. Development, debugging, validation, regression and formal assessment workflows are supported. Executed usage is counted consistently rather than asking developers to classify individual executions as formal or informal."],
  ["Is onboarding included?", "Yes. Every customer receives a free one-week onboarding period with a dedicated Shyena engineer. Extended implementation, training, custom development and bespoke integrations are scoped separately."],
  ["Are there hidden per-user or per-agent charges?", "No per-user or per-agent licence is presented in this usage model. Customers pay for applicable platform usage, while enterprise commercial terms can be negotiated for committed volume and specific deployment requirements."],
  ["Can enterprise customers negotiate the rate?", "Yes. The public €0.05 rates establish the standard list-price anchor. Enterprise customers can negotiate committed volume, deployment, governance, support and other contractual requirements directly."],
] as const;

function formatEuro(value: number) {
  return new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

function toUsage(value: string) {
  if (value === "") return 0;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed >= 0 ? parsed : Number.MAX_SAFE_INTEGER;
}

function PricingCalculator() {
  const [flows, setFlows] = useState("100");
  const [conversations, setConversations] = useState("1000");
  const [security, setSecurity] = useState("250");

  const estimate = useMemo(() => {
    const flowUsage = toUsage(flows);
    const conversationUsage = toUsage(conversations);
    const securityUsage = toUsage(security);
    const flowCost = flowUsage * RATE;
    const conversationCost = conversationUsage * RATE;
    const securityCost = securityUsage * RATE;
    return { flowCost, conversationCost, securityCost, monthly: flowCost + conversationCost + securityCost };
  }, [flows, conversations, security]);

  const field = (label: string, value: string, setter: (value: string) => void, note: string) => (
    <label className="text-sm font-medium text-slate-700">
      {label}
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => setter(e.target.value.replace(/[^0-9]/g, ""))}
        onKeyDown={(e) => {
          if (["e", "E", "+", "-", ".", ","].includes(e.key)) e.preventDefault();
        }}
        aria-label={label}
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-semibold tabular-nums text-slate-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
      />
      <span className="mt-2 block text-xs font-normal text-slate-500">{note} · Whole numbers only</span>
    </label>
  );

  return <section id="calculator" className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><Calculator className="h-5 w-5" /></div><p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Pricing calculator</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Calculate your own monthly usage.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">Enter the activity you expect to generate and execute. The calculator applies the public €0.05 usage rates so your team can estimate cost before speaking with sales.</p><div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600"><p className="font-semibold text-slate-950">Three independent usage units</p><p className="mt-2 leading-relaxed">CIS generation, Vera conversations and Chakra security interactions are measured separately. One unit is never converted into another.</p></div></div><div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"><div className="grid gap-7 md:grid-cols-3">{field("CIS test journeys generated", flows, setFlows, "€0.05 each")}{field("Vera AI conversations", conversations, setConversations, "€0.05 each")}{field("Chakra security interactions", security, setSecurity, "€0.05 each")}</div><div className="mt-8 grid gap-3 border-t border-slate-200 pt-7 sm:grid-cols-3"><div><p className="text-xs uppercase tracking-wider text-slate-500">CIS</p><p className="mt-1 text-xl font-bold tabular-nums text-slate-950">{formatEuro(estimate.flowCost)}</p></div><div><p className="text-xs uppercase tracking-wider text-slate-500">Vera</p><p className="mt-1 text-xl font-bold tabular-nums text-slate-950">{formatEuro(estimate.conversationCost)}</p></div><div><p className="text-xs uppercase tracking-wider text-slate-500">Chakra</p><p className="mt-1 text-xl font-bold tabular-nums text-slate-950">{formatEuro(estimate.securityCost)}</p></div></div><div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white"><p className="text-xs uppercase tracking-[0.18em] text-slate-400">Estimated monthly usage</p><p className="mt-2 text-4xl font-bold tracking-tight tabular-nums">{formatEuro(estimate.monthly)}</p><p className="mt-2 text-xs text-slate-400">Usage estimate only. VAT and separately scoped professional services are excluded.</p></div><div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Discuss this estimate <ArrowRight className="h-4 w-4" /></Link></Button><a href="#pricing-details" className="inline-flex h-10 items-center rounded-md border border-slate-300 px-4 text-sm font-medium text-slate-700">See pricing details</a></div></div></div></div></section>;
}

function PricingPage() {
  return <>
    <section className="relative overflow-hidden bg-slate-950 text-white"><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px)] [background-size:56px_56px]" /><div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-32"><p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-300">Usage-based SaaS pricing</p><h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">One platform. Simple usage pricing.</h1><p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-slate-300">Unlimited access to Shyena's AI agent assurance platform. Pay for what you generate and execute, without separate per-user or per-agent licences.</p><div className="mx-auto mt-9 grid max-w-3xl gap-3 text-left sm:grid-cols-3">{["€0.05 / generated test journey", "€0.05 / AI conversation", "€0.05 / security interaction"].map((x) => <div key={x} className="rounded-xl border border-slate-700 bg-white/[0.04] p-4 text-center text-sm font-semibold text-slate-200">{x}</div>)}</div><p className="mt-8 text-sm font-semibold text-violet-300">FREE 1-week onboarding with a dedicated Shyena engineer.</p><p className="mt-3 text-xs text-slate-500">Public list prices · Excluding VAT · Enterprise volume terms negotiable</p></div></section>
    <section id="pricing-details" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto max-w-3xl text-center"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Three measurable units</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Everything else stays open.</h2><p className="mt-4 text-slate-600">The platform is not split into restrictive feature tiers. Customers can use Nexus, Vera and Chakra according to their workflow. Usage is measured where value is generated or execution occurs.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{[{icon:Layers3,name:"CIS",title:"€0.05 per generated test journey",body:"CIS analyzes connected agent flows and generates executable test journeys. Source-flow analysis itself is not presented as a charge; generated journeys are the billable unit."},{icon:Gauge,name:"Vera",title:"€0.05 per AI conversation",body:"Run realistic multi-turn agent tests and evaluate quality, behavior, deterministic assertions and execution integrity. A multi-turn interaction is one conversation."},{icon:ShieldCheck,name:"Chakra",title:"€0.05 per security interaction",body:"Run adversarial security testing through Chakra's Ziran-powered capability. Development, debugging, validation and assessment executions use the same transparent security usage unit."}].map(({icon:Icon,name,title,body})=><div key={name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><Icon className="h-5 w-5" /></div><p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-violet-600">{name}</p><h3 className="mt-2 text-2xl font-bold text-slate-950">{title}</h3><p className="mt-4 text-sm leading-relaxed text-slate-600">{body}</p></div>)}</div></section>
    <PricingCalculator />
    <section className="bg-white py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-2 lg:items-start"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Unlimited platform access</p><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Nexus + Vera + Chakra in every plan.</h2><p className="mt-5 text-lg leading-relaxed text-slate-600">Customers get the platform capabilities without separate module subscriptions. Unlimited access means the tools, workflows and user access are available; executed or generated usage is the metered component.</p></div><div className="grid gap-3 sm:grid-cols-2">{["Nexus — understand agent systems", "Vera — test and evaluate agents", "Chakra — defend against adversarial behavior", "CI/CD and API access", "Unlimited platform users", "Unlimited agents and projects, subject to contracted usage and technical limits"].map((x)=><div key={x} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />{x}</div>)}</div></div></div></section>
    <section className="bg-slate-50 py-20 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">Included onboarding</p><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Start with a dedicated engineer.</h2><p className="mt-4 text-lg leading-relaxed text-slate-600">Every customer receives a free one-week onboarding period with a dedicated Shyena engineer to establish the initial agent connection, test journeys and assurance configuration.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[{icon:Sparkles,title:"Connect",body:"Establish the initial agent and execution setup."},{icon:Code2,title:"Configure",body:"Set up journeys, evaluation rules and security scope."},{icon:Check,title:"Validate",body:"Run the initial assurance workflow and confirm the reporting path."}].map(({icon:Icon,title,body})=><div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><Icon className="h-5 w-5 text-violet-600"/><h3 className="mt-5 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p></div>)}</div><p className="mt-8 text-sm text-slate-500">Extended implementation, training, custom development, bespoke framework adapters and other professional services are separately scoped and priced.</p></div></section>
    <section className="bg-slate-950 py-20 text-white"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 lg:grid-cols-2 lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-300">Enterprise pricing</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Public rate first. Negotiation at scale.</h2><p className="mt-5 text-lg leading-relaxed text-slate-300">The €0.05 rates establish the standard list-price anchor. Enterprise customers can negotiate committed volume, deployment, governance, support, data controls and other contractual requirements at contract stage.</p></div><div className="rounded-2xl border border-slate-700 bg-white/[0.03] p-7"><p className="text-xs uppercase tracking-[0.18em] text-slate-400">Enterprise</p><p className="mt-2 text-3xl font-bold">Negotiated</p><p className="mt-3 text-sm leading-relaxed text-slate-400">Volume discounts and tailored commercial terms are negotiated directly rather than hidden inside a higher public tier.</p><Button asChild className="mt-6"><Link to="/contact">Discuss enterprise volume <ArrowRight className="h-4 w-4" /></Link></Button></div></div></div></section>
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24"><p className="font-mono text-xs uppercase tracking-[0.18em] text-violet-600">FAQ</p><h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Pricing and usage questions</h2><Accordion type="single" collapsible className="mt-8">{FAQS.map(([question,answer],i)=><AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="text-left">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-slate-600">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>
    <CtaBand />
  </>;
}