import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  HelpCircle,
  GraduationCap,
  Rocket,
  Code2,
  Puzzle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Shyena" },
      {
        name: "description",
        content:
          "One plan: Shyena Enterprise at €30,000 annually (excl. VAT) — unlimited use of CIS, ECAAP and Chakra, backed by a named technical assurance lead, an AI-first support engine, and 24/7 critical-incident response.",
      },
      { property: "og:title", content: "Pricing — Shyena" },
      {
        property: "og:description",
        content: "One plan. Unlimited platform use. Named ownership, not a headcount promise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://shyena.eu/pricing" }],
  }),
  component: PricingPage,
});

const PLATFORM_INCLUDES = [
  "CIS",
  "ECAAP",
  "Chakra",
  "Unlimited users",
  "Unlimited AI systems",
  "Unlimited agents",
  "Unlimited executions",
  "Unlimited security testing",
] as const;

const SUPPORT_INCLUDES = [
  "One-week implementation onboarding",
  "Named Technical Assurance Lead",
  "Named Customer Assurance Manager",
  "AI-powered support and diagnostics",
  "Shared expert escalation team",
  "24/7 P1 and P2 incident response",
  "Business-hours support for P3 and P4",
  "Quarterly assurance review",
] as const;

const ADD_ONS = [
  { icon: GraduationCap, title: "Training", body: "Team onboarding and enablement, priced separately." },
  { icon: Rocket, title: "Pilot projects", body: "Scoped proof-of-value engagements, priced separately." },
  { icon: Code2, title: "Custom development", body: "Bespoke platform work, priced separately." },
  { icon: Puzzle, title: "Bespoke framework adapters", body: "New platform integrations, priced separately." },
] as const;

const SUPPORT_FLOW = [
  { title: "Customer", body: "A question, an incident, or a diagnostic need comes in." },
  { title: "Shyena support engine", body: "Draws on product docs, release notes, known issues, your deployment's logs, test failures, CIS system maps and Chakra findings." },
  { title: "Automated diagnosis", body: "Resolved outright, a recommended fix, or a clear reason to escalate — never a dead end." },
  { title: "Human expert", body: "The shared expert pool or your Named Technical Assurance Lead picks up what the engine can't resolve." },
] as const;

const SEVERITY_ROWS = [
  { severity: "P1 Critical", example: "Platform unavailable / security incident", response: "24/7" },
  { severity: "P2 High", example: "Major production capability impacted", response: "24/7" },
  { severity: "P3 Normal", example: "Functional issue / degraded capability", response: "Business hours" },
  { severity: "P4 Request", example: "Configuration / guidance", response: "Business hours" },
] as const;

const FAQS = [
  {
    question: "Why one plan instead of tiers?",
    answer:
      "Usage-based tiers penalize the teams that adopt fastest. One plan means unlimited agents, executions and security testing across CIS, ECAAP and Chakra from day one, with support that scales operationally instead of a per-seat pricing ladder.",
  },
  {
    question: "What does a Named Technical Assurance Lead actually do?",
    answer:
      "They're your single accountable technical owner — architecture, platform adoption, technical strategy, integration oversight, escalation ownership, and quarterly assurance reviews. They're not a full-time engineer embedded in your team; the model is accountable ownership backed by a shared expert pool, not headcount allocated to you alone.",
  },
  {
    question: "How does 24/7 support work without a dedicated engineer per customer?",
    answer:
      "Shyena's own AI support engine is the first line — it has access to product documentation, release notes, known defects, your deployment's metadata, test failures, CIS system maps and Chakra findings, so it understands your actual implementation, not a generic FAQ. It resolves what it can and routes the rest to a follow-the-sun expert pool, with your Named Technical Assurance Lead as the accountable escalation point.",
  },
  {
    question: "What's the difference between P1/P2 and P3/P4 response times?",
    answer:
      "P1 (platform unavailable, security incident) and P2 (major production capability impacted) get 24/7 response. P3 (a functional issue or degraded capability) and P4 (configuration or guidance) are handled during business hours. The commercial promise is 24/7 coverage for business-critical incidents — not 24/7 access to one specific engineer.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "Cognigy is Shyena's live platform integration today — Shyena drives real chat and voice conversations against your live Cognigy agent through the same surface your customers use. New platform and channel adapters are available as bespoke work, priced separately.",
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
      <section className="relative overflow-hidden bg-lavender text-lavender-foreground">
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-4 pt-20 sm:px-8 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <HelpCircle className="h-3.5 w-3.5 text-primary" />
              Pricing
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-7xl">One plan. Unlimited assurance.</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              No usage tiers, no per-conversation metering. Unlimited use of CIS, ECAAP and Chakra,
              backed by named ownership and a support model built into the platform itself.
            </p>
          </div>
        </div>
      </section>

      {/* The plan */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-elevated ring-1 ring-primary/20">
          <div className="border-b border-border bg-secondary/40 px-8 py-10 text-center sm:px-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Shyena Enterprise</p>
            <div className="mt-3 flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-foreground">€30,000</span>
              <span className="text-base font-medium text-muted-foreground">/year, excl. VAT</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Unlimited enterprise use</p>
          </div>
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-foreground">Platform</p>
              <ul className="mt-4 space-y-3">
                {PLATFORM_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Success and support</p>
              <ul className="mt-4 space-y-3">
                {SUPPORT_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-border px-8 py-8 text-center sm:px-16">
            <Button asChild size="lg">
              <Link to="/contact">
                Talk to Sales
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADD_ONS.map((addon) => (
            <div key={addon.title} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <addon.icon className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground">{addon.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{addon.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Named ownership, not a headcount promise */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The support model</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Named ownership, not "one engineer, always available."
          </h2>
          <p className="mt-4 text-muted-foreground">
            "One dedicated engineer, 24/7" doesn't scale honestly. Shyena separates{" "}
            <strong className="font-semibold text-foreground">customer ownership</strong> from{" "}
            <strong className="font-semibold text-foreground">human availability</strong>: a Named
            Technical Assurance Lead is accountable for your architecture, adoption and escalation
            path — backed by an AI-first support engine and a shared, follow-the-sun expert pool,
            not one person's calendar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {SUPPORT_FLOW.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="relative h-full rounded-xl border border-border bg-card p-6 shadow-card">
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                {i < SUPPORT_FLOW.length - 1 && (
                  <ArrowRight className="absolute -right-[19px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Severity model */}
      <section className="bg-navy py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Response times</p>
            <h2 className="mt-4 text-3xl font-bold text-navy-foreground sm:text-4xl">
              24/7 for what's actually critical.
            </h2>
            <p className="mt-4 text-navy-muted">
              The commercial promise is 24/7 coverage for business-critical incidents — not 24/7
              access to one specific engineer.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-border bg-white/[0.03]">
            <div className="min-w-[560px]">
              <div className="grid grid-cols-[140px_1fr_160px] items-center gap-4 border-b border-navy-border px-6 py-4 text-sm font-semibold">
                <span className="text-navy-foreground">Severity</span>
                <span className="text-navy-foreground">Example</span>
                <span className="text-right text-navy-foreground">Initial response</span>
              </div>
              {SEVERITY_ROWS.map((row, i) => (
                <div
                  key={row.severity}
                  className={`grid grid-cols-[140px_1fr_160px] items-center gap-4 px-6 py-4 text-sm last:rounded-b-2xl ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
                >
                  <span className="font-semibold text-navy-foreground">{row.severity}</span>
                  <span className="text-navy-muted">{row.example}</span>
                  <span className="text-right font-medium text-accent">{row.response}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Questions about pricing and support</h2>
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
