import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, HelpCircle, GraduationCap, Rocket, Code2, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Shyena" },
      { name: "description", content: "SaaS pricing for Shyena: annual platform subscription plus metered assurance and security consumption, with implementation, training and bespoke integrations priced separately." },
      { property: "og:title", content: "Pricing — Shyena" },
      { property: "og:description", content: "Platform subscription plus usage-based assurance. Professional services and bespoke integrations are separate." },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Foundation",
    price: "From €24,000",
    cadence: "/year, excl. VAT",
    description: "For teams establishing a repeatable AI assurance program.",
    features: ["1 production environment", "Up to 5,000 assurance runs/month", "Up to 500 security runs/month", "Nexus + Vera + Chakra", "3 named platform users", "CI/CD integration", "30-day evidence retention"],
  },
  {
    name: "Scale",
    price: "From €60,000",
    cadence: "/year, excl. VAT",
    description: "For teams running assurance across multiple agents and environments.",
    features: ["Up to 3 environments", "Up to 25,000 assurance runs/month", "Up to 2,500 security runs/month", "Nexus + Vera + Chakra", "10 named platform users", "SSO / RBAC", "90-day evidence retention", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual contract",
    description: "For enterprise-wide assurance, higher consumption and governed deployments.",
    features: ["Custom environments and volumes", "Custom assurance and security consumption", "Enterprise identity and governance", "Custom evidence retention", "SLA and escalation model", "Procurement and security review support", "Volume pricing for overages"],
  },
] as const;

const CONSUMPTION = [
  ["Assurance run", "One executed test journey, including its captured conversation and evaluation."],
  ["Security run", "One security/adversarial test execution against an agent or endpoint."],
  ["Overage", "Additional consumption is billed against the contracted volume rate; there is no forced tier migration."],
] as const;

const SERVICES = [
  { icon: Rocket, title: "Pilot / proof of value", body: "Scoped evaluation against your environment. Contracted separately from the SaaS subscription." },
  { icon: GraduationCap, title: "Training", body: "Team enablement, workshops and certification-style onboarding. Priced separately." },
  { icon: Code2, title: "Custom development", body: "Bespoke platform changes, workflows or engineering work. Priced separately." },
  { icon: Puzzle, title: "Framework adapters", body: "New agent frameworks, channels or platform integrations. Priced separately." },
];

const FAQS = [
  ["Why is Shyena not an unlimited €30k plan?", "The previous model bundled unlimited users, agents, executions and security testing into one fixed annual price. That creates pricing risk as customer usage grows. The revised model separates the platform subscription from consumption, which is closer to the enterprise SaaS approach used by conversational AI platforms."],
  ["What is included in the platform subscription?", "The subscription provides access to the contracted Shyena platform capabilities, environments, user entitlements, governance features and included monthly consumption quota. The exact commercial scope is defined in the order form."],
  ["How is usage measured?", "Shyena meters assurance runs and security runs. An assurance run represents an executed test journey with its evaluation evidence. A security run represents one adversarial/security execution."],
  ["What happens when we exceed the included usage?", "Additional consumption is charged at the contracted volume rate. Customers do not have to move to a higher tier solely because they temporarily exceed a quota."],
  ["Are implementation and training included?", "No. Implementation, pilots, training, custom development and bespoke framework adapters are professional services and are contracted separately."],
  ["Why separate professional services?", "It prevents the SaaS subscription from hiding one-off engineering costs and makes the recurring platform price comparable across customers. This also keeps bespoke work from becoming an implicit unlimited commitment."],
];

function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground"><HelpCircle className="h-3.5 w-3.5 text-primary" />SaaS pricing</span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">Platform subscription. Usage that scales with you.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">A recurring platform license with included assurance consumption, transparent overage and separately contracted professional services. No artificial per-seat expansion tax.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`relative flex h-full flex-col rounded-3xl border bg-card p-7 ${plan.featured ? "border-primary/50 shadow-elevated ring-1 ring-primary/20" : "border-border"}`}>
              {plan.featured && <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Most scalable</span>}
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{plan.name}</p>
              <div className="mt-5 flex items-baseline gap-2"><span className="text-4xl font-bold text-foreground">{plan.price}</span><span className="text-sm text-muted-foreground">{plan.cadence}</span></div>
              <p className="mt-4 min-h-12 text-sm leading-relaxed text-muted-foreground">{plan.description}</p>
              <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-6">
                {plan.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>{feature}</li>)}
              </ul>
              <Button asChild className="mt-8" variant={plan.featured ? "default" : "outline"}><Link to="/contact">Talk to Sales <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Consumption model</span><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Pay for assurance volume, not an arbitrary seat count.</h2><p className="mt-4 text-muted-foreground">The commercial unit follows the work Shyena performs. Subscription tiers establish the platform capability; consumption measures the assurance activity performed on the platform.</p></div></Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CONSUMPTION.map(([title, body]) => <div key={title} className="rounded-2xl border border-border bg-card p-6"><p className="font-semibold">{title}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal><div className="max-w-3xl"><span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Professional services</span><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Not bundled into the SaaS license.</h2><p className="mt-4 text-muted-foreground">Implementation-heavy or bespoke work is priced separately. This keeps the recurring platform commitment predictable and prevents one customer's custom engineering from becoming an unlimited promise to everyone.</p></div></Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => { const Icon = service.icon; return <div key={service.title} className="rounded-2xl border border-border bg-card p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div><h3 className="mt-5 font-semibold">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p></div>; })}
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Commercial guardrails</p><h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">The contract defines the real commitment.</h2><p className="mt-4 text-navy-muted">Included volumes, overage rates, retention, support response and any bespoke services are defined in the commercial order form. The public page intentionally does not promise unlimited usage, unlimited integrations or unlimited engineering support.</p></div><div className="mt-10 flex flex-wrap gap-3"><Button asChild><Link to="/contact">Discuss your volume <ArrowRight className="h-4 w-4" /></Link></Button><Button asChild variant="outline"><Link to="/docs">Read the documentation</Link></Button></div></div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Pricing and commercial model</h2></div>
        <div className="mt-10 max-w-3xl"><Accordion type="single" collapsible>{FAQS.map(([q, a], i) => <AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="text-left">{q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>
      <CtaBand />
    </>
  );
}
