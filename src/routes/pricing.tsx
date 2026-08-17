import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, X, HelpCircle, Mail, MessageCircle, Shield, Zap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "AI Agent Testing Pricing — Shyena" },
      {
        name: "description",
        content:
          "Pricing for Shyena's AI evaluation platform — live today for conversational and voice AI testing. Starter from $750/mo, Growth from $3,500/mo, Enterprise custom-scoped — evaluated-conversation volume included in every plan.",
      },
      { property: "og:title", content: "AI Agent Testing Pricing — Shyena" },
      {
        property: "og:description",
        content:
          "Simple, flexible pricing for AI evaluation. From a single-agent pilot to enterprise-wide release gating.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    tag: null,
    description: "Piloting evaluation on one agent with core quality metrics.",
    icon: Zap,
    price: "$750",
    priceUnit: "/mo",
    priceNote: "2,000 evaluated conversations included · $0.20 per conversation after",
    features: [
      "One agent / one environment",
      "2,000 evaluated conversations / mo",
      "Core LLM-as-judge metrics",
      "Deterministic assertion contracts",
      "Execution-integrity hard gate",
      "Email support",
    ],
    cta: "Start a pilot",
    highlighted: false,
  },
  {
    id: "growth",
    name: "Growth",
    tag: "Most Popular",
    description: "Multi-agent teams that need scheduled regression runs and richer quality gates.",
    icon: MessageCircle,
    price: "$3,500",
    priceUnit: "/mo",
    priceNote: "Starting price · 15,000 conversations included · $0.15 per conversation after",
    features: [
      "Up to 5 agents & environments",
      "15,000 evaluated conversations / mo",
      "Full metric suite (semantic assurance, accessibility gates, orchestrator quality)",
      "Scheduled regression runs",
      "Slack & webhook alerts",
      "Priority support",
    ],
    cta: "Talk to Sales",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tag: null,
    description: "Organization-wide deployment with custom metrics and enterprise controls.",
    icon: Building2,
    price: "Custom",
    priceUnit: "",
    priceNote: "Typically $75k–150k+/yr, scoped to your deployment and volume",
    features: [
      "Unlimited agents & environments",
      "Negotiated evaluation volume",
      "SSO / SAML and role-scoped access",
      "Dedicated success engineer",
      "Custom metric development",
      "VPC / on-prem deployment option",
      "Contractual SLAs",
    ],
    cta: "Request a quote",
    highlighted: false,
  },
];

const COMPARISON_ROWS = [
  { feature: "Agentic test personas", starter: true, growth: true, enterprise: true },
  { feature: "LLM-as-judge metrics", starter: true, growth: true, enterprise: true },
  { feature: "Deterministic assertions", starter: true, growth: true, enterprise: true },
  { feature: "Execution-integrity gate", starter: true, growth: true, enterprise: true },
  { feature: "Semantic assurance", starter: false, growth: true, enterprise: true },
  { feature: "Accessibility scanning", starter: false, growth: true, enterprise: true },
  { feature: "Full audit trail", starter: true, growth: true, enterprise: true },
  { feature: "SSO / SAML", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated support", starter: false, growth: true, enterprise: true },
  { feature: "Custom integrations", starter: false, growth: false, enterprise: true },
];

const FAQS = [
  {
    question: "How is pricing calculated?",
    answer:
      "Two axes: how many agents and environments you're covering, and how many conversations you evaluate per month. Each plan includes a set volume — 2,000/mo on Starter, 15,000/mo on Growth — with straightforward overage pricing beyond that. We count evaluated conversations, not seats, so teams with read-only reviewers aren't penalized for adding people.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "Cognigy is Shyena's live platform integration today — Shyena drives real chat and voice conversations against your live Cognigy agent through the same surface your customers use: web chat, voice calls, SMS, and common messaging channels. We can add new platform and channel adapters on request.",
  },
  {
    question: "Can we run this in our own cloud or VPC?",
    answer:
      "Yes. Enterprise plans include a VPC or on-prem deployment option with contractual SLAs. We also offer a managed SaaS deployment for teams that want to get started immediately.",
  },
  {
    question: "How does the execution-integrity gate work?",
    answer:
      "If a conversation fails, truncates, or times out, the run is capped at FAIL regardless of how well the earlier turns scored. The raw quality score remains visible for debugging, but it cannot be reported as a pass.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "We start with a pilot scenario against your live agent. Growth customers get onboarding documentation and priority Slack support; Enterprise customers get a dedicated success engineer who helps design personas, quality pillars, and regression schedules.",
  },
  {
    question: "Is there a free pilot?",
    answer:
      "We run a free guided pilot with one of your own scenarios so you can see a real verdict against your live agent before any contract. Contact us to schedule it.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(60%_60%_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-[0.13]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              Pricing
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
              Simple pricing for serious testing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Flexible seat and usage-based pricing that scales from your first pilot to a
              company-wide release gate. Every plan includes core evaluation and execution-integrity
              gating.
            </p>
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
              Starter and Growth prices are list price. Enterprise is scoped to your deployment.
            </div>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <Card
                key={tier.id}
                className={cn(
                  "relative flex flex-col overflow-hidden shadow-card transition-all hover:-translate-y-0.5",
                  tier.highlighted
                    ? "border-primary/40 ring-1 ring-primary/30"
                    : "border-border",
                )}
              >
                {tier.tag && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {tier.tag}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <span
                    className={cn(
                      "inline-flex h-10 w-10 items-center justify-center rounded-lg",
                      tier.highlighted ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="mt-5 text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.priceUnit && (
                      <span className="text-base font-medium text-muted-foreground">{tier.priceUnit}</span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{tier.priceNote}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link to="/contact">
                      {tier.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Compare plans</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What's included in each tier</h2>
          <p className="mt-4 text-muted-foreground">
            All plans include the core evaluation engine. The differences are in scale, advanced
            quality gates, and enterprise controls.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
          <div className="min-w-[540px]">
            <div className="grid grid-cols-[1fr_100px_100px_100px] items-center gap-4 border-b border-border bg-secondary/40 px-6 py-4 text-sm font-semibold sm:grid-cols-[1fr_120px_120px_120px]">
              <span className="text-foreground">Capability</span>
              <span className="text-center text-muted-foreground">Starter</span>
              <span className="text-center text-primary">Growth</span>
              <span className="text-center text-muted-foreground">Enterprise</span>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.feature}
                className={cn(
                  "grid grid-cols-[1fr_100px_100px_100px] items-center gap-4 px-6 py-4 text-sm last:rounded-b-2xl sm:grid-cols-[1fr_120px_120px_120px]",
                  i % 2 === 1 && "bg-secondary/20",
                )}
              >
                <span className="text-foreground">{row.feature}</span>
                <span className="flex justify-center">
                  {row.starter ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <X className="h-3.5 w-3.5" />
                    </span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.growth ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <X className="h-3.5 w-3.5" />
                    </span>
                  )}
                </span>
                <span className="flex justify-center">
                  {row.enterprise ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <X className="h-3.5 w-3.5" />
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Questions about pricing and plans</h2>
        </div>

        <div className="mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
